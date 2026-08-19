---
title: "VTube Studio — Tracking Configuration"
category: "vtubing"
type: "Desktop application"
parent: "VTube Studio"
url: "https://denchisoft.com"
last-reviewed: 2026-07-30
---

# VTube Studio — Tracking Configuration

> VTube Studio supports multiple tracking methods — webcam, iPhone/iPad, Android, hand tracking, and microphone lipsync — each configurable for different quality and performance needs.

## Webcam Face Tracking

VTube Studio uses OpenSeeFace for webcam-based face tracking, with adjustable quality presets.

### Setup

1. Connect a webcam and select it in **Settings** → **Tracking** → **Webcam**
2. Run **Auto-Setup** — the application calibrates tracking for your face and model
3. Adjust quality preset based on your PC specs:
   - **Performance**: lower quality, works on low-spec PCs (Intel HD Graphics)
   - **Balanced**: good quality with reasonable performance
   - **Quality**: best tracking accuracy, requires dedicated GPU with 2GB+ VRAM
   - **Ultra**: highest quality, recommended GPU with 4GB+ VRAM

### Tracking Parameters

Webcam tracking captures:
- Head position (X, Y, Z) and rotation (Yaw, Pitch, Roll)
- Eye openness (left and right independently) — supports winking
- Eyebrow movement
- Mouth openness and shape
- Cheek puffing

## iPhone / iPad Face Tracking

Connecting an iPhone or iPad provides the highest-quality face tracking, using the device's FaceID TrueDepth camera for 3D facial capture.

### Requirements

- iPhone with FaceID (iPhone X or newer) or iPad with FaceID
- A12 chip or newer
- VTube Studio app installed from the App Store
- Both devices on the same Wi-Fi network

### Setup

1. Install the VTube Studio app on your iPhone/iPad from the App Store
2. On your PC, open VTube Studio and go to **Settings** → **Tracking** → **Network Tracking**
3. On your iPhone, open the VTube Studio app and select **Face Tracking** → **Stream to PC**
4. The iPhone will appear in VTube Studio's device list — click to connect
5. The iPhone's TrueDepth camera now provides 3D face tracking data to VTube Studio

### Advantages

- Higher accuracy than webcam tracking — captures subtle facial movements
- 3D depth data enables more precise parameter mapping
- No watermark (even without the DLC) when using iPhone tracking
- No additional CPU/GPU load on your streaming PC

## Android Face Tracking

Android phones with ARCore support can also be used as face tracking devices.

### Requirements

- Android phone with Google ARCore support
- The VTube Studio Android app from Google Play Store
- Both devices on the same Wi-Fi network

Setup is similar to iOS — install the app, connect via network, and select the device in VTube Studio.

## Hand and Gesture Tracking

VTube Studio supports webcam-based hand tracking for model interaction.

### Capabilities

- **Hand position**: track hand movement in 3D space
- **Gestures**: detect open hand, fist, pointing, and other gestures
- **Parameter mapping**: map hand gestures to model expressions, animations, or item controls

### Setup

1. Enable hand tracking in **Settings** → **Tracking** → **Hand Tracking**
2. Calibrate by showing your hand to the webcam
3. Map gestures to model parameters using the **Parameter Mapping** panel

## Microphone Lipsync

Voice-based mouth tracking works when your face is not visible to the camera.

### Setup

1. Select your microphone in **Settings** → **Audio** → **Input Device**
2. Enable **Auto-lipsync** — mouth openness responds to microphone volume
3. Adjust sensitivity and smoothing to match your speaking style

### Use Cases

- When looking away from camera (reading chat, checking notes)
- As fallback when face tracking loses your face
- Combined with face tracking for redundant mouth control

## Parameter Mapping

VTube Studio allows complete freedom in mapping tracking inputs to Live2D model parameters.

- **Default mapping**: automatched when you run Auto-Setup
- **Custom mapping**: drag any tracking parameter to any Live2D parameter slot
- **Invert and range**: invert direction, adjust min/max range per mapping
- **Combined inputs**: blend multiple tracking sources into one parameter

## Tips & Tricks

- Use iPhone tracking if available — it provides the best quality with zero PC performance impact
- Test tracking quality presets before going live — a preset that works in the preview may stutter during gameplay
- Use microphone lipsync as a backup for when you look away from the camera
- The Auto-Setup feature is a good starting point, but manual parameter fine-tuning produces much better results
- Save your tracking configuration as a profile — export it so you can restore after updates
