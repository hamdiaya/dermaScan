from PIL import Image
import io
import torch
import albumentations as A
from albumentations.pytorch import ToTensorV2
import numpy as np
# Define the same transform as in validation
val_transform = A.Compose([
    A.Resize(224, 224),
    A.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5)),
    ToTensorV2(),
])

def preprocess_image(image_bytes: bytes, device):
    # Convert bytes to PIL image
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    # Convert PIL to numpy array
    image_np = np.array(image)

    # Apply transformation
    transformed = val_transform(image=image_np)
    input_tensor = transformed['image'].unsqueeze(0).to(device)  # shape: [1, 3, 224, 224]

    return input_tensor
