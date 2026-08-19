---
title: "Puppetstring"
category: "vtubing"
type: "Desktop application"
platforms:
  - Windows
  - macOS
  - Linux
price: "Free"
url: "https://ar14.works/puppetstring/"
reop: "https://store.steampowered.com/app/3081040/Puppetstring_VTuber_Tracking/"
last-reviewed: 2026-07-30
---

# Puppetstring

> A free, cross-platform VTuber tracking application for Inochi2D models with multiple tracking methods including webcam, microphone, and keyboard control.

## Overview

Puppetstring is a VTuber tracking tool developed by AR14.works that supports the Inochi2D model format — the open-source alternative to Live2D. It runs on Windows, macOS, and Linux, making it one of the most accessible VTuber tools available. Puppetstring is currently in Early Access on Steam and itch.io, and is completely free. It uses Google MediaPipe for face tracking with all machine learning processing running locally on your computer — no cloud dependency required.

Puppetstring is part of the broader Inochi2D ecosystem alongside Mannequin Character Generator (free model creation) and Inochi Creator (model rigging). It can run standalone (AIO version with built-in model viewer) or alongside Inochi Session (Tracking Only version).

## Key Features

- **Webcam face tracking** — powered by Google MediaPipe, runs locally, adjustable quality settings
- **Microphone volume tracking** — mouth animation responds to audio input
- **Display colour tracking** — screen colour controls model parameters (unique feature)
- **Mouse pointer tracking** — cursor position maps to model parameters
- **Keyboard control** — keyboard toggles for expressions, animations, and model states
- **Gamepad tracking** — controller input for model control (planned)
- **Heart rate tracking** — BLE heart rate sensor support (planned)
- **Inochi2D model support** — open-source Live2D alternative
- **Standalone or companion mode** — AIO version includes model viewer; Tracking Only works with Inochi Session
- **Cross-platform** — Windows, macOS, and Linux support
- **Free & open** — no cost, no subscriptions, Early Access on Steam and itch.io

## Installation / Setup

1. Download from [itch.io](https://ar14.itch.io/puppetstring) (recommended: itch.io desktop app for auto-updates) or [Steam](https://store.steampowered.com/app/3081040/) (App ID 3081040, listed under Software)
2. **Windows**: run the installer or extract ZIP. The AIO version includes the model viewer; the Tracking Only version is smaller and works with Inochi Session
3. **macOS**: download the unsigned build. Intel and Apple Silicon supported
4. **Linux**: download the ZIP archive (recommended) or use the itch.io app. ARM 64-bit tracking-only version available
5. Launch Puppetstring and load an Inochi2D model (`.inm` format)
6. Enable face tracking under **Settings** → **Tracking** and calibrate using your webcam
7. The model is now ready — capture the Puppetstring window in OBS as a Window Capture or Game Capture source

## Twitch Integration

Puppetstring does not have direct Twitch integration. It is a pure tracking and rendering application. To connect Puppetstring to Twitch events, use Streamer.bot or other automation tools that can trigger hotkeys or change tracking parameters based on chat events, subscriptions, or channel points.

## Configuration

- **Face tracking**: enable/disable, quality presets, calibration adjustments for tracking sensitivity
- **Microphone tracking**: select input device, adjust responsiveness and threshold
- **Display colour tracking**: configure screen region, colour mapping to model parameters
- **Mouse tracking**: cursor movement sensitivity, parameter mapping
- **Keyboard shortcuts**: assign hotkeys to model expressions, animations, and toggles
- **Model settings**: load/unload models, configure rendering quality
- **Tracking mode**: choose between AIO (standalone with viewer) or Tracking Only (external viewer via Inochi Session)

## Tracking Methods

| Method | Input | Best For |
|---|---|---|
| Webcam face tracking | Camera | Full facial expression control |
| Microphone volume | Audio input | Lipsync when face is hidden |
| Display colour | Screen capture | Creative parameter control from on-screen content |
| Mouse pointer | Mouse | Subtle model movement |
| Keyboard | Keyboard | Precise expression/state toggles |
| Gamepad | Controller (planned) | Hands-free model control |

## Tips & Tricks

- Use Mannequin Character Generator to create a free Inochi2D model if you're new to VTubing
- Start with webcam tracking for face, add microphone tracking as a backup when you look away
- The display colour tracking is unique to Puppetstring — try mapping screen colours to model effects for creative overlays
- Use the Tracking Only version alongside Inochi Session if you prefer its renderer
- Combine with Streamer.bot to trigger keyboard shortcuts via Twitch channel points for viewer-controlled model effects
- All face tracking runs locally on your machine — no data is sent to the cloud

## Alternatives

- **VTube Studio**: Industry-standard Live2D VTuber tracking; more features, paid DLC, Live2D only
- **VSeeFace**: Free, webcam-based VTuber tracking; supports both Live2D and VRM models
- **Warudo**: 3D VTuber software with advanced features; supports VRM models
- **Facerig**: Legacy VTuber application; no longer actively developed
