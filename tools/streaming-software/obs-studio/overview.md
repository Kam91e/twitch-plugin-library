---
title: "OBS Studio"
category: "streaming-software"
type: "Desktop application"
platforms:
  - Windows
  - macOS
  - Linux
price: "Free"
url: "https://obsproject.com"
repo: "https://github.com/obsproject/obs-studio"
last-reviewed: 2026-07-30
---

# OBS Studio

> Free and open-source software for video recording and live streaming — the industry-standard production layer for the majority of Twitch streamers.

## Overview

OBS Studio (Open Broadcaster Software) is the most widely used streaming production software. It captures and mixes video and audio in real time, compositing sources into scenes that can be switched seamlessly during a live broadcast. Built on a high-performance GPU-accelerated pipeline, it supports hardware encoding (NVENC, AMF, QuickSync) for efficient streaming. A plugin and scripting API allows extension by the community. OBS Studio is free, open-source (GPL v2), and runs on Windows, macOS, and Linux.

## Key Features

- **Scene composition** — arrange unlimited sources (game capture, webcam, images, text, browser, media) into scenes
- **Studio Mode** — preview and edit a scene before transitioning it live
- **Custom transitions** — cut, fade, stinger (video file with alpha), swipe, slide, luma wipe
- **Hardware encoding** — NVENC (NVIDIA), AMF (AMD), QuickSync (Intel), plus software x264
- **Audio mixer** — per-source volume, filters (noise gate, noise suppression, gain, compressor, VST), monitoring
- **Browser Source** — embed web pages as scene sources for overlays, polls, and widgets
- **Plugin ecosystem** — extend via C/C++ plugins and Lua/Python scripts
- **Multiview** — monitor and manage up to 8 scenes simultaneously
- **Hotkeys** — keyboard shortcuts for nearly every action: scene switching, source toggles, audio control
- **Replay Buffer** — save the last N seconds of gameplay with a hotkey press
- **Virtual Camera** — output OBS feed as a virtual webcam for use in other applications

## Installation / Setup

1. Download OBS Studio from [obsproject.com](https://obsproject.com) for your operating system
2. Run the installer (Windows/macOS) or install via package manager (Linux)
3. On first launch, the **Auto-Configuration Wizard** appears:
   - Choose between "Optimise for streaming" and "Optimise for recording"
   - Select your primary use case (Twitch, YouTube, etc.)
   - The wizard detects your hardware and sets recommended output settings
4. Alternatively, configure manually: **Settings → Output, Video, Audio, Stream**
5. Connect your Twitch account: **Settings → Stream → Service: Twitch → Connect Account**
6. Start adding sources and building scenes

## Twitch Integration

OBS Studio connects to Twitch through **Stream Keys** (Settings → Stream → Service: Twitch → Use Stream Key). For easier setup, OBS supports **Twitch Account linking** — this authorises OBS to manage your stream key automatically. Once connected, OBS handles all streaming output. For deeper integration (scene switching from chat events), pair OBS with Streamer.bot or similar automation tools that use the OBS WebSocket plugin.

## Configuration

- **Settings → General**: language, theme, system tray, projectors
- **Settings → Stream**: service selection, stream key, server (auto-selected or manual)
- **Settings → Output**: encoder, bitrate, audio bitrate, recording format, recording quality
- **Settings → Audio**: sample rate, desktop audio device, mic/auxiliary audio device
- **Settings → Video**: base (canvas) resolution, output (scaled) resolution, common FPS values
- **Settings → Hotkeys**: assign keyboard shortcuts to any action
- **Settings → Advanced**: audio monitoring, recording filename formatting, network settings

## Tips & Tricks

- Use **Studio Mode** for professional-looking streams — edit scenes off-air, then transition cleanly
- The **Auto-Configuration Wizard** provides a solid starting point; fine-tune encoder settings manually for your specific hardware
- Set up a **Replay Buffer** to capture highlight moments after they happen
- Test your stream with a **private stream** or **recording** before going live to verify audio levels and scene layout
- Use **Scene Collections** for different stream formats (gaming, IRL, just chatting, events)
- The **Audio Mixer** shows volume levels — keep voice tracks around -12 dB to -6 dB for clean audio

## Alternatives

- **Streamlabs Desktop**: OBS fork with built-in overlays, alerts, and chatbot integration; more beginner-friendly, Windows/macOS
- **vMix**: Professional live production software; paid, extensive feature set for multi-camera events
- **Wirecast**: Professional broadcast software; paid, strong for live event production
- **XSplit**: Paid streaming software with user-friendly interface; licensed model
