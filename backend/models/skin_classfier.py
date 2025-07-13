import torch
import torch.nn.functional as F
import torchmetrics
from lightning import LightningModule

class SkinClassifier(LightningModule):
    def __init__(self, model, loss_fn, num_classes, freeze_until_layer=-3, base_lr=1e-5, head_lr=1e-4):
        super().__init__()
        self.save_hyperparameters()

        self.model = model
        self.loss_fn = loss_fn

        # Freeze all layers
        for param in self.model.parameters():
            param.requires_grad = False

        # Unfreeze last N layers of the feature extractor
        for name, module in list(self.model.features.named_children())[freeze_until_layer:]:
            for param in module.parameters():
                param.requires_grad = True

        # Always unfreeze classifier
        for param in self.model.classifier.parameters():
            param.requires_grad = True

        # Define metrics
        self.train_acc = torchmetrics.Accuracy(task="multiclass", num_classes=num_classes)
        self.val_acc = torchmetrics.Accuracy(task="multiclass", num_classes=num_classes)
        self.test_acc = torchmetrics.Accuracy(task="multiclass", num_classes=num_classes)

    def forward(self, x):
        return self.model(x)

    def training_step(self, batch, batch_idx):
        x, y = batch
        logits = self(x)
        loss = self.loss_fn(logits, y)
        acc = self.train_acc(logits, y)
        self.log("train_loss", loss, prog_bar=True)
        self.log("train_acc", acc, prog_bar=True)
        return loss

    def validation_step(self, batch, batch_idx):
        x, y = batch
        logits = self(x)
        loss = self.loss_fn(logits, y)
        acc = self.val_acc(logits, y)
        self.log("val_loss", loss, prog_bar=True)
        self.log("val_acc", acc, prog_bar=True)

    def test_step(self, batch, batch_idx):
        x, y = batch
        logits = self(x)
        loss = self.loss_fn(logits, y)
        acc = self.test_acc(logits, y)
        self.log("test_loss", loss, prog_bar=True)
        self.log("test_acc", acc, prog_bar=True)
        return loss

    def configure_optimizers(self):
        optimizer = torch.optim.Adam([
            {"params": self.model.features.parameters(), "lr": self.hparams.base_lr},
            {"params": self.model.classifier.parameters(), "lr": self.hparams.head_lr}
        ])
        scheduler = {
            "scheduler": torch.optim.lr_scheduler.ReduceLROnPlateau(
                optimizer, mode="min", patience=3, factor=0.5),
            "monitor": "val_loss",
            "interval": "epoch",
            "frequency": 1,
        }
        return {"optimizer": optimizer, "lr_scheduler": scheduler}
