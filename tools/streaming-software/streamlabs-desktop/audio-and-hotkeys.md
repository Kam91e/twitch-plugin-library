---
title: "Streamlabs Desktop — Audio & Hotkeys"
category: "streaming-software"
type: "Desktop application"
platforms:
  - Windows
  - macOS
price: "Freemium"
url: "https://streamlabs.com"
parent: "Streamlabs Desktop"
last-reviewed: 2026-08-01
---

# Streamlabs Desktop — Audio & Hotkeys

> Streamlabs Desktop's audio mixer gives you per-source control over what viewers hear, while hotkeys and Instant Replay turn your keyboard into an instant control panel during a broadcast.

## Overview

Audio quality is one of the biggest differentiators between an amateur and a professional stream. Streamlabs Desktop inherits OBS's audio pipeline — a mixer with per-source volume, mute, and audio filters (noise suppression, noise gate, compression) plus monitoring options — but presents it in a cleaner interface. Hotkeys complement the mixer by giving you instant keyboard access to scene switching, source muting, and stream control without alt-tabbing. Instant Replay (built on the OBS Replay Buffer) lets you save a highlight clip from the last few seconds of your stream with a single keypress.

## Configuration

### Audio Mixer

The **Audio Mixer** panel lists the audio sources available in your current scene, each with its own volume slider and mute toggle.

- **Volume**: adjust per-source level with the slider
- **Mute**: click the speaker icon to silence a source without removing it
- **Filters**: right-click a source to apply audio filters such as noise suppression, noise gate, and compression — essential for cleaning up microphone audio
- **Monitoring**: monitoring options let you hear sources privately on your headphones without sending them to the stream

The mixer reflects only the sources in the currently active scene, so check the right scene when adjusting levels.

### Audio Sources

Streamlabs Desktop recognises three core audio source types:

- **Audio Input Capture** — any device that captures sound: built-in or USB microphones, and other USB devices that input audio. This is what you select for your microphone.
- **Audio Output Capture** — desktop audio: everything your computer plays, from games to music to system sounds. This is the audio your viewers hear from your PC.
- **Application Audio Capture** — captures audio from ONE specific application or window (added with the OBS 28 merge). This is the source to use when you want to hear an app yourself without putting it on stream.

A common Application Audio Capture setup: add it and select Discord in its dropdown so you can hear mods or friends in your headset, while keeping their voices off stream. To avoid echo, disable the global **Audio Output Capture (Desktop Audio)** source once the app is captured separately — otherwise you will hear the app twice.

### Instant Replay (Replay Buffer)

Instant Replay captures a rolling window of your last few seconds of stream so you can save a highlight after it happens:

1. Enable the **Replay Buffer** in **Settings → Output** and set a length (e.g., 20–30 seconds)
2. Optionally set it to auto-start when you begin streaming, so you never miss a moment
3. Add the **Instant Replay** source to a scene — this displays the replay clip
4. Assign hotkeys to save a replay (e.g., **Ctrl+Shift+S**) and to show/hide the Instant Replay source

A common setup is a dedicated replay scene: hit the show hotkey to reveal the Instant Replay source and switch to the replay scene (via its own hotkey), then hide it again after the moment has passed. See [Streamlabs Desktop — Scenes & Transitions](scenes-and-transitions.md) for the scene-side workflow.

### Hotkeys

Hotkeys are keyboard shortcuts for actions you would otherwise click. Assign them in **Settings → Hotkeys**.

Hotkeys can be bound for:

- **Scene switching** — jump straight to a specific scene (e.g., Starting Soon, Gameplay, BRB)
- **Muting sources** — toggle mute on individual audio sources
- **Start/Stop stream** — control the broadcast from the keyboard
- **Instant Replay** — save a replay and show/hide the Instant Replay source

To bind a hotkey, open the Hotkeys settings, find the action, click its input field, and press the key combination you want. Bind the actions you use most during gameplay so your hands never leave the keyboard.

## Tips

- Use **Application Audio Capture** for Discord so you can hear mods and friends without putting their voices on stream — and disable global Desktop Audio to avoid double-hearing (echo)
- Apply noise suppression before a noise gate on your microphone for cleaner cutting of background noise
- Aim to keep your microphone levels comfortable on the mixer meter — not clipping — before going live
- Pick a save-replay hotkey you can hit without looking, and practice it once or twice before your first stream
- Set the replay buffer length to match the moment you want to capture — 20–30 seconds covers most clips; longer buffers use more memory
- Build a dedicated replay scene with the Instant Replay source and switch to it via hotkey so your viewers see the clip without you fumbling through menus
