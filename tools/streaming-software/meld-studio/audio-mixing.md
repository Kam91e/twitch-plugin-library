---
title: "Meld Studio — Audio Mixing"
category: "streaming-software"
type: "Desktop application"
parent: "Meld Studio"
url: "https://meldstudio.co"
last-reviewed: 2026-07-30
---

# Meld Studio — Audio Mixing

> Meld Studio features a multi-track audio system with per-source routing, live monitoring, and independent track recording for professional-grade audio control.

## Multi-Track Audio

Unlike traditional streaming software that mixes all audio into a single stereo output, Meld Studio supports multiple independent audio tracks. Each source can be routed to any combination of tracks, giving you full control over what your stream hears versus what your recording captures.

### Typical Setup

| Track | Content | Sent To |
|---|---|---|
| Track 1 (Main) | Game audio + mic + alerts | Stream + recording |
| Track 2 (Mic Only) | Microphone only | Recording only |
| Track 3 (Game Only) | Game audio only | Recording only |
| Track 4 (Discord) | Voice chat | Recording only |

This allows you to edit individual audio sources in post-production — remove coughs from the mic track, balance game audio separately, or mute Discord chatter for highlight clips.

## Source Routing

Each audio source in Meld Studio can be routed to any combination of output tracks.

### How to Configure

1. Open the **Audio Mixer** panel in Meld Studio
2. Each source shows a row with track assignment toggles (A, B, C, D)
3. Click to assign the source to one or more tracks
4. Tracks assigned to the stream output are marked — sources not assigned to stream tracks won't be heard by viewers

### Typical Source Routing

| Source | Stream Track | Recording Track 1 | Recording Track 2 |
|---|---|---|---|
| Microphone | ✓ | ✓ | |
| Game Capture | ✓ | | ✓ |
| Discord | ✓ | | |
| Music Player | ✓ | | |
| Alerts | ✓ | | |

## Live Monitoring

Meld Studio supports live audio monitoring — hearing your audio before it reaches the stream.

- **Monitor any source**: listen to microphone, game audio, or any input in real time
- **Latency-free**: monitoring happens before the encoding pipeline, so there is no delay
- **Monitor with effects**: hear your audio with applied compression, EQ, or filters
- **Mute for stream**: keep monitoring active while muting the source for viewers

## Audio Effects

Per-source audio processing:

- **Compressor**: even out volume levels for consistent audio
- **Noise gate**: eliminate background noise when not speaking
- **Expander**: subtle noise reduction while maintaining dynamics
- **EQ**: adjust frequency balance (bass, mid, treble)
- **Gain**: adjust source volume level
- **Pan**: position audio in stereo field

## Multi-Track Recording

Meld Studio can record each track to a separate audio file, or mix them into a combined file.

- **Separate files**: one audio file per track for maximum editing flexibility
- **Combined file**: standard single-file recording with all tracks mixed
- **Format**: MP4 with multi-track audio, compatible with major video editors
- **One-click recording**: toggle recording alongside streaming with a single button

## Tips & Tricks

- Route mic to a dedicated recording track — if you cough, sneeze, or get interrupted, you can edit it out without affecting game audio
- Record Discord/voice chat on a separate track for co-op content — isolate your co-streamer's audio for cleaner edits
- Use the noise gate on your microphone to eliminate keyboard clicks and background hum
- Monitor your mic before going live to catch audio issues (distortion, background noise, incorrect levels)
- For YouTube content, having separate game and mic tracks makes editing highlight videos much faster
