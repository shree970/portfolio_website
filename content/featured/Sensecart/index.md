---
date: '1'
title: 'SenseCart'
cover: './sensecart_crop.png'
github: 'https://gitlab.com/shree970/sensecart/-/tree/master/FINAL%20SENSECART'
external: ''
tech:
  - OpenCV
  - Keras
  - TFLite
showInProjects: true
---
- A smart shopping cart with auto-checkout. Deployed on Raspberry-pi 4.
- Modelled as one-shot classification problem, creating positive, negative pairs of data from manually curated
  dataset of 10 classes, to feed to Siamese network.
- Trained Siamese network with BCE loss and L1 distance, using MobileNetv2 as base feature extractor.
- Achieved accuracy of 0.82. Quantized weights to INT8 post training, pruned weights, fused layers.
