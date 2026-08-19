---
title: "OBS Studio — Audio and Hotkeys"
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

# Audio and Hotkeys

> OBS Studio's audio system provides per-source mixing, effects, and real-time monitoring — while hotkeys give you keyboard control over nearly every function.

## Overview

Audio quality is often what separates a professional stream from an amateur one. OBS Studio provides a full audio production chain: capture, mix, filter, monitor, and output. Per-source audio filters allow cleaning up microphone audio (noise suppression, gate) and shaping game audio (compressor, limiter) before it reaches the stream. Hotkeys complement this by providing instant keyboard access to audio control, scene switching, and stream management without alt-tabbing.

## Configuration

### Audio Mixer

The Audio Mixer panel shows all audio sources in your current scene, each with its own volume slider, mute button, and stereo/mono routing.

- **Volume**: adjust per-source level (drag the slider or right-click for precise dB value)
- **Mute**: click the speaker icon to silence a source
- **Auto-unmute**: OBS remembers mute states per scene
- **Metering**: colour-coded level meters (green = safe, yellow = moderate, red = clipping)

Right-click any audio source in the mixer for:

| Option | Description |
|--------|-------------|
| **Audio Filters** | Open the filters panel for this source |
| **Advanced Audio Properties** | Sync offset, audio monitoring, force multichannel |
| **Volume** | Set exact dB value |
| **Audio Monitoring** | Off / Monitor Only / Monitor and Output |

### Audio Filters

Filters process audio before it reaches the stream. Apply them per-source from the Audio Mixer or from the Filters panel on any audio source.

| Filter | Purpose |
|--------|---------|
| **Noise Gate** | Mutes audio below a threshold volume. Essential for microphones — silence background noise when you're not speaking |
| **Noise Suppression** | Reduces constant background noise (fan, AC, PC hum). RNNoise (AI-based) is available in recent OBS versions and is very effective |
| **Gain** | Boosts or reduces volume. Use to match levels between different microphones or audio sources |
| **Compressor** | Reduces the dynamic range — quiet sounds get louder, loud sounds get quieter. Produces a more consistent volume level |
| **Limiter** | Prevents audio from exceeding a set maximum level. Protects against sudden loud sounds that would distort the stream |
| **Expander** | Opposite of compressor — increases dynamic range. Useful for subtle noise reduction |
| **Invert Polarity** | Flips the audio waveform. Can fix phase cancellation when using multiple microphones |
| **VST 2.x Plugin** | Load any VST 2.x audio plugin. Professional effects: EQ, reverb, de-esser, pitch correction |

### Audio Monitoring

Audio monitoring lets you hear audio on your headphones without sending it to the stream.

- **Monitor Off**: audio plays only on stream
- **Monitor Only**: audio plays only on your headphones, not on stream
- **Monitor and Output**: audio plays on both your headphones and the stream

Useful for: monitoring yourself to avoid background noise, previewing audio before it goes live, or listening to a second audio source privately.

### Advanced Audio Properties

Access via right-click → **Advanced Audio Properties** in the Audio Mixer:

- **Sync Offset**: delay audio from this source by milliseconds (fixes lip-sync issues)
- **Audio Monitoring**: per-source monitoring mode
- **Force Multichannel**: output multichannel audio from stereo sources (advanced use)

### Hotkeys

Hotkeys give you keyboard shortcuts for stream management, scene control, and audio adjustment. Configure them in **Settings → Hotkeys**.

**Common hotkey categories:**

| Category | Examples |
|----------|----------|
| **Streaming** | Start Streaming, Stop Streaming |
| **Recording** | Start Recording, Stop Recording |
| **Scenes** | Switch to Scene 1-8 (assign each scene a hotkey) |
| **Sources** | Show/Hide specific sources, toggle source visibility |
| **Audio** | Mute/Unmute audio sources, toggle mute per source |
| **Studio Mode** | Transition (swap Preview to Program) |
| **Replay Buffer** | Save Replay, Start/Stop Replay Buffer |
| **Other** | Toggle fullscreen projector, take screenshot |

**Setting up hotkeys:**
1. Go to **Settings → Hotkeys**
2. Find the action you want to bind
3. Click the input field and press the desired key combination
4. Multiple hotkeys can be bound to the same action
5. Hotkeys work globally — they function even when OBS is not the focused window (configurable in Advanced settings)

## Tips

- Apply **Noise Suppression** before **Noise Gate** on your mic — this gives cleaner gating performance
- Set your microphone level so normal speaking peaks at around -12 dB on the mixer meter
- Use **Audio Monitoring → Monitor Only** on your microphone to hear yourself in headphones and avoid shouting
- Save frequently used hotkey configurations by backing up your OBS profile (`%appdata%/obs-studio/basic/profiles/` on Windows)
- The **Replay Buffer** hotkey is one of the most valuable — one press saves the last 30-60 seconds of gameplay
- Consider a Stream Deck or similar device for tactile hotkey control — much harder to hit the wrong button than with keyboard keys
