import torch
from fastapi import FastAPI, File, UploadFile
from models.utils import load_model
from preprocessing import preprocess_image
from fastapi.middleware.cors import CORSMiddleware

# Device setup
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
num_classes = 7

# Load model once at startup
model = load_model("models/skin_classifier.pth", num_classes=num_classes, device=device)
model.eval()  # Make sure the model is in evaluation mode

# Index to class label mapping
idx_to_label = {
    0: "Actinic keratoses",
    1: "Basal cell carcinoma",
    2: "Benign keratosis-like lesions",
    3: "Dermatofibroma",
    4: "Melanocytic nevi",
    5: "Melanoma",
    6: "Vascular lesions"
}

# FastAPI app
app = FastAPI(title="Skin Disease Classifier API")
# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # 1. Read the uploaded image file as bytes
        image_bytes = await file.read()

        # 2. Preprocess image (resize, normalize, to tensor, etc.)
        input_tensor = preprocess_image(image_bytes, device)

        # 3. Inference
        with torch.no_grad():
            outputs = model(input_tensor)
            probabilities = torch.nn.functional.softmax(outputs, dim=1)
            confidence, predicted_class_idx = torch.max(probabilities, dim=1)

        # 4. Map class index to label
        predicted_label = idx_to_label[predicted_class_idx.item()]
        confidence_percent = round(confidence.item() * 100, 2)

        return {
            "predicted_class": predicted_label,
            "confidence": f"{confidence_percent} %"
        }

    except Exception as e:
        return {"error": str(e)}
