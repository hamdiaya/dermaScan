# model/utils.py

import torch
import torch.nn as nn
from torchvision import models
from models.skin_classfier import SkinClassifier  
# Define same architecture again
def create_model(num_classes: int):
    model = models.convnext_tiny(weights="ConvNeXt_Tiny_Weights.DEFAULT")
    model.classifier[2] = nn.Linear(model.classifier[2].in_features, num_classes)
    return model

def load_model(weights_path: str, num_classes: int, device: torch.device):
    # Create the base model
    base_model = create_model(num_classes=num_classes)

    # Wrap it in the SkinClassifier Lightning module
    lit_model = SkinClassifier(
        model=base_model,
        loss_fn=nn.CrossEntropyLoss(),     # loss won't be used in inference
        num_classes=num_classes,
        freeze_until_layer=-2,
        base_lr=1e-5,
        head_lr=1e-4
    )

    # Load weights from file
    state_dict = torch.load(weights_path, map_location=device)
    lit_model.model.load_state_dict(state_dict)   # we load model weights only (not Lightning wrapper)

    lit_model.model.to(device)
    lit_model.model.eval()

    return lit_model.model
