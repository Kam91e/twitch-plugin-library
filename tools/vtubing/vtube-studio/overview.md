---
title: "VTube Studio"
category: "vtubing"
type: "Desktop application"
platforms:
  - Windows
  - macOS
  - iOS
  - Android
price: "Freemium"
url: "https://denchisoft.com"
repo: "https://github.com/DenchiSoft/VTubeStudio"
last-reviewed: 2026-07-30
---

# VTube Studio

> The industry-standard tool for Live2D VTubers — accurate face tracking via webcam or iPhone, hand tracking, a powerful plugin API, and deep Twitch integration.

## Overview

VTube Studio is the most widely used VTuber tracking application, developed by DenchiSoft. It brings Live2D Cubism models to life through real-time face tracking, microphone lipsync, and hand gesture recognition. It supports tracking via webcam (OpenSeeFace) or via a connected iPhone/iPad for higher accuracy, and is available on Windows, macOS, iOS, and Android.

The application is free to use on Steam with all features included. An optional "Remove Watermark" DLC removes the tracking watermark that appears during webcam-based face tracking. VTube Studio only supports Live2D Cubism models — it does not support VRoid, VRM, or other 3D model formats.

## Key Features

- **Webcam face tracking** — powered by OpenSeeFace, adjustable quality presets for all PC specs
- **iPhone/iPad face tracking** — connect via network for high-accuracy tracking (FaceID or A12+ required)
- **Android face tracking** — supports ARCore-compatible devices
- **Hand and gesture tracking** — webcam-based hand tracking mapped to model expressions
- **Microphone lipsync** — audio-based mouth tracking for when your face isn't visible
- **Item System** — attach PNG, GIF, or Live2D props to your model with tracking and hotkeys
- **Plugin API** — developers can create plugins triggered by Twitch, game controllers, or external inputs
- **Collab mode** — invite Steam friends to appear with their models in your scene
- **Visual effects** — built-in post-processing (glow, bloom, colour grading, blur)
- **Hotkey system** — trigger expressions, animations, and item toggles from keyboard or Stream Deck
- **Twitch integration** — viewer emotes as props, channel point redeems as hotkeys, chat commands
- **Parameter mapping** — map any tracking input to any Live2D parameter for full creative freedom
- **Multi-language** — available in 15+ languages thanks to community localisation

## Installation / Setup

1. Download VTube Studio from [Steam](https://store.steampowered.com/app/1325860/) (App ID 1325860) or [denchisoft.com](https://denchisoft.com)
2. Install and launch the application
3. Load a Live2D Cubism model (`.moc` / `.moc3` format) — example models are included to get started
4. Run the **Auto-Setup** feature — VTube Studio will calibrate tracking for your model
5. Start the webcam tracker — the model should begin mimicking your facial expressions
6. Connect to OBS: add VTube Studio as a **Window Capture**, **Game Capture**, or via **Spout2** (Windows)

## Twitch Integration

VTube Studio connects to Twitch through its plugin system and built-in event handling:

- **Emote throwing**: viewers can throw Twitch emotes at your model using channel points or subscriptions
- **Channel point redeems**: trigger any hotkey (expression change, item toggle, animation) via channel point rewards
- **Sub notifications**: configure animations or effects triggered by new subscribers
- **Bits / Cheers**: react to cheers with in-model animations
- **Chat commands**: set up chat-triggered hotkeys for viewer interaction

The VTube Studio Plugin API extends this further — community plugins can connect to Streamer.bot, Lumia Stream, and other automation tools for unlimited Twitch integration possibilities.

## Configuration

- **Tracking quality**: choose between performance (low-spec) and quality (high-spec) presets
- **Hotkey mapping**: assign keyboard keys to model expressions, animations, item toggles, and camera controls
- **Parameter mapping**: drag-and-drop mapping between tracking inputs and Live2D parameters
- **Item management**: import, configure, and assign hotkeys to PNG and Live2D props
- **Visual effects**: enable/disable bloom, glow, colour grading, and other post-processing
- **Network tracking**: configure iPhone/iPad connection settings
- **Collab mode**: invite friends from your Steam friends list

## Tips & Tricks

- iPhone face tracking is noticeably more accurate than webcam tracking — use an iPhone if you have one
- Set up hotkeys for your most-used expressions before going live
- The Item System is perfect for viewer interaction: attach items triggered by channel points or bits
- Combine VTube Studio with Streamer.bot for advanced Twitch automation (e.g., trigger expressions based on chat commands)
- Export your parameter mapping and hotkey configuration as a backup before major changes
- The VTube Studio Discord community is the best place for model-specific help and plugin discovery

## Alternatives

- **Puppetstring**: Free, cross-platform (Windows, macOS, Linux), supports Inochi2D models (open-source Live2D alternative)
- **VSeeFace**: Free, webcam-based VTuber tracking, supports both Live2D and VRM models
- **Warudo**: 3D VTuber software for VRM models with advanced features and Unity-based extensibility
- **Facerig**: Legacy VTuber application — no longer actively developed but still used by some
