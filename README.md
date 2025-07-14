# 🧠 Skin Cancer Prediction App

A deep learning-powered web application that predicts the type of skin lesion from a given image using a trained Convolutional Neural Network.

---

## 🚀 Overview

This project combines machine learning, computer vision, and web development to detect skin cancer types from dermatoscopic images. The app is composed of:

- ✅ **Modeling and training in Kaggle using transfer learning**
- 🧠 **FastAPI backend** that serves the model and performs inference
- 💻 **Next.js + Tailwind CSS frontend** for a responsive, user-friendly interface

---

## 🗃️ Dataset

- **Source**: [Skin Cancer MNIST: HAM10000 dataset](https://www.kaggle.com/datasets/kmader/skin-cancer-mnist-ham10000)
- The dataset contains over 10,000 images across 7 classes of skin lesions.

---

## 🧠 Model Details

- **Architecture**: [`ConvNeXt-Tiny`](https://pytorch.org/vision/stable/models/generated/torchvision.models.convnext_tiny.html) from `torchvision.models`.
- **Training Method**: Transfer Learning via PyTorch Lightning.
  - Only the **last 3 layers** of the pretrained model were fine-tuned.
  - **Class weights** were used to handle data imbalance.
  - **Data augmentation** was applied using **Albumentations**.
- **Metrics**: Accuracy, Loss (CrossEntropy)

---

## 🧪 Backend API (FastAPI)

### 🔧 Features:
- Loads the trained model once at startup
- Accepts image upload (JPG/PNG)
- Returns:
  - Predicted class
  - Confidence score

### 🔥 Run the backend locally:
```bash
uvicorn main:app --reload
