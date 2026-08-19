---
title: "OBS Studio — Sources"
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

# Sources

> The building blocks of OBS scenes — every visual or audio element you add to your stream is a source.

## Overview

Sources are the individual elements that make up an OBS scene. Each source captures or generates content — a game window, a webcam feed, an image, a web page, a video file, or microphone audio. Sources can be layered, resized, filtered, and animated within a scene. Understanding each source type and its best use case is fundamental to building effective stream layouts.

## Configuration

### How to Add a Source

1. In any scene, click the **+** button under the Sources panel
2. Select a source type from the menu
3. Name the source (optional, but helpful for organisation)
4. Configure the source's properties (varies by type)
5. Position and resize the source in the preview window

### Source Types

#### Game Capture
Captures a DirectX or OpenGL game window directly. This is the most efficient way to capture games — OBS hooks into the rendering pipeline, minimising performance impact.

- **Mode**: Capture any fullscreen application or a specific window
- **Multi-adapter compatibility**: works with systems that have both integrated and dedicated GPUs
- **Hotkey**: set up hotkeys to show/hide game capture (useful for scene transitions)
- **Limitations**: some games with anti-cheat may block game capture (use Window Capture instead)

#### Window Capture
Captures a specific window by its title. Works with any application, not just games.

- **Mode**: capture window by title or capture all windows of a process
- **Cursor**: optionally capture or hide the mouse cursor
- **Best for**: non-game applications, browser windows, desktop software

#### Display Capture
Captures an entire monitor. Use when you need to show everything on screen, including the desktop.

- **Monitor selection**: choose which monitor to capture
- **Performance note**: captures everything, including GPU composition — slightly more demanding than Game Capture
- **Best for**: demonstrations, tutorials, IRL streams, or when Game/Window Capture don't work

#### Browser Source
Embeds a web page as a scene source. This is the most versatile source type for overlays.

- **URL**: point to any http/https URL or a local HTML file
- **Width × Height**: fixed dimensions for the embedded viewport
- **FPS**: refresh rate of the embedded page (30 or 60 FPS)
- **CSS injection**: add custom CSS to style the embedded page without modifying the source
- **Interaction passthrough**: when enabled, mouse clicks pass through the browser to elements below (for scenes with clickable overlays)
- **Refresh**: manually refresh the browser in case of stale content
- **Local file**: use `file:///` protocol to load HTML files from disk

#### Media Source
Plays video or audio files.

- **Formats**: MP4, MOV, MKV, FLV, GIF, MP3, and more (varies by system codecs)
- **Local file** or **network URL**
- **Looping**: restart playback when finished
- **Restart on activate**: replay when the scene becomes active
- **Best for**: intro videos, intermission screens, stinger transition files

#### Image / Image Slide Show
- **Image**: single image file (PNG, JPG, GIF, BMP)
- **Image Slide Show**: cycles through images in a folder on a timer
- **Best for**: logos, overlays, sponsorship panels, rotating ads

#### Text (GDI+ / FreeType)
System-rendered text overlay.

- **Font**: choose font family, size, style, colour, opacity
- **Background**: optional background colour and opacity
- **Outline**: optional outline colour and width
- **Scrolling**: marquee/scroll text option (useful for tickers)
- **Chat**: combined with a file source, can display chat messages (requires external tool to write to file)

#### Video Capture Device
Webcam, capture card, or any video input device.

- **Device selection**: choose from connected cameras or capture cards
- **Resolution/FPS**: match source to stream settings
- **Buffering**: reduce or increase latency compensation
- **Filters**: apply colour correction, chroma key, transform

#### Audio Sources
- **Audio Input Capture**: microphone or line-in audio
- **Audio Output Capture**: desktop audio (system sounds, game audio)
- **Both support filters**: noise gate, noise suppression, gain, compressor, VST

#### NDI Source (via plugin)
Receives video/audio over a network via NDI protocol.

- **Source name**: discover or manually enter NDI source on the network
- **Best for**: receiving game feeds from other computers on the local network

#### Group
Groups multiple sources together for unified control.

- **Nest sources** inside a group to move, resize, or apply filters to them as one
- **Visibility toggle**: show/hide all sources in the group at once

## Tips

- Use **Game Capture** for games (best performance) and **Window Capture** as fallback
- Group related overlay elements (logo + social links + ticker) so they move and scale together
- For complex overlays, use **Browser Source** with HTML/CSS/JS rather than stacking individual image sources
- Keep source names descriptive — you will thank yourself when managing 20+ sources in a scene
- Duplicate sources instead of recreating them when you need the same content in multiple scenes
