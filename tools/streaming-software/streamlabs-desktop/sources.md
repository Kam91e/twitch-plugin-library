---
title: "Streamlabs Desktop — Sources"
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

# Sources

> Every source type available in Streamlabs Desktop, organised by the five groups shown in the application's "Add Source" menu — Essentials, Capture Sources, Video and Audio, Media, and Widgets.

## Overview

Sources and widgets are the building blocks of your stream layout — the visual and audio elements your viewers see inside a scene. Streamlabs Desktop inherits the core OBS source engine, so capture and media sources behave much like OBS Studio, and adds Streamlabs-specific sources (Screen Capture, Auto Game Capture, Game Pulse, Reactive Source, Spout2, OpenVR, and widgets-as-sources). To add a source, click the **+** icon in the Sources panel and choose from the list. Source order matters: sources higher in the list render in front — drag your webcam to the top so it sits in front of gameplay.

The groups below mirror the application's own "Add Source" menu. A few sources appear in more than one group; they are described once with a note listing all groups where the app shows them.

## Essentials

### Game Capture

Capture a game you're playing on your computer.

**Also listed under:** Capture Sources

**Supports:**
- Built-in capture that works with most modern computer games
- **Auto Game Capture** — automatic mode that detects the game you're playing and manages source size and resolution, so you can swap games without reconfiguring the source

### Video Capture

Display video from webcams, capture cards, and other devices.

**Also listed under:** Video and Audio

**Supports:**
- Built-in webcam
- Logitech webcams
- Capture cards (Elgato, Avermedia, BlackMagic)

### Media File

Add videos or sound clips to your scene.

**Also listed under:** Media

**Supports:**
- Video: mp4, ts, mov, flv, mkv, avi, gif, webm
- Audio: mp3, ogg, aac, wav

### Alert Box

Custom on-screen alerts to thank your viewers for following, subbing, tipping, and more.

**Supports:**
- Tips, subscriptions, follows, bits
- Platforms: Twitch, YouTube, Facebook & integrations

### Chat Box

Display your chat on stream and set up sound notifications for new messages.

**Supports:**
- Twitch chat
- YouTube chat
- Facebook chat

### Game Pulse

Real-time alerts reacting to your in-game events, powered by Streamlabs AI vision. Detects events like kills, eliminations, victories, and streaks, then fires custom graphics and sound effects automatically.

### Stream Label

Include text in your stream, such as follower count, latest tip, or last subscriber.

**Supports:**
- New followers, new subscribers, new cheers, new tips
- All-time top tipper, weekly top tipper
- Monthly follows
- And more

## Capture Sources

### Browser Source

Allows you to add web-based content as a source, such as web pages, widgets, and streaming video.

**Supports:**
- Websites
- Third-party widgets
- HTML

### Display Capture

Capture your entire computer monitor.

**Supports:**
- Primary monitor
- Secondary monitor

### Window Capture

Capture a specific window that's open on your computer.

**Supports:**
- Compatible with most modern browsers and programs

### Game Capture

Capture a game you're playing on your computer. Described in [Essentials](#game-capture) — Auto Game Capture mode is available here too.

### OpenVR Capture

Directly capture the OpenVR monitoring video buffer of your HMD.

**Supports:**
- OpenVR
- SteamVR

### Screen Capture

Capture your game, other applications, or your entire monitor in one unified source. When you add it, Streamlabs shows previews of everything you can capture (screens, windows, and games) so you can pick in one step.

**Supports:**
- Most games, apps, displays

### Spout2 Capture

Virtual avatar capture source. Enables high-resolution, zero-compression, zero-latency video capture from VTube third-party software — a native way to add your VTuber avatar without extra downloads.

**Supports:**
- VSeeFace
- VTube Studio

### Reactive Source

Dynamic real-time animation based on your game events, powered by Streamlabs AI. Install Reactive Overlays from the Streamlabs library to see what it's capable of.

**Supports:**
- Kills & eliminations
- Health changes
- Victory & defeat

## Video and Audio

### Video Capture

Display video from webcams, capture cards, and other devices. Described in [Essentials](#video-capture).

### Audio Input Capture

Any device that attaches to a computer for the purpose of capturing sound, such as music or speech.

**Supports:**
- Built-in microphones
- USB microphones
- Other USB devices

### Audio Output Capture

Captures your desktop audio for the purpose of playing sound, such as music or speech.

**Supports:**
- Desktop audio

### Collab Cam

Invite guests to join your stream from a web browser or their Streamlabs Desktop. Stream games or IRL broadcasts together, use as additional camera angles, and more.

### Application Audio

Capture the audio coming from a specific application. Lets you hear an app (for example, Discord with your moderators) while keeping it off stream — select the window in its dropdown and disable the global Desktop Audio source to avoid echo.

## Media

### Image

Add images to your scene.

**Supports:**
- png, jpg, jpeg, gif, tga, bmp

### Color Block

Add a color to the background of your whole scene or just a part.

**Supports:**
- Hex
- RGBA
- HSV

### Media File

Add videos or sound clips to your scene. Described in [Essentials](#media-file).

### Image Slide Show

Add a slideshow of images to your scene.

**Supports:**
- png, jpg, jpeg, gif, tga, bmp

### Text (GDI+)

Add text to your scene and adjust its style.

**Supports:**
- Hex, RGBA, HSV colour formats
- System fonts
- System sizes

### Scene

Allows you to add an existing scene as a source, nesting one scene inside another.

### Instant Replay

Automatically plays your most recently captured replay in your stream. Requires the Replay Buffer to be enabled in Settings → Output; use a hotkey to save the last moments, then the Instant Replay source plays them on stream. See [Audio & Hotkeys](audio-and-hotkeys.md) for the full workflow.

## Widgets

Widgets are Streamlabs cloud-powered sources. They are added like any other source from the "Add Source" menu; their appearance and behaviour are configured in Streamlabs Dashboard (see [Overlays & Widgets](overlays-and-widgets.md) for configuration details).

| Widget | What it displays |
|---|---|
| **Tip Goal** | A tip goal to encourage viewers to contribute toward something (tips) |
| **Follower Goal** | A follower goal for viewers to help you reach (Twitch, YouTube, Facebook followers) |
| **Bit Goal** | A bit goal for viewers to help you reach (Twitch bits) |
| **Tip Ticker** | The most recent tips from your viewers |
| **Event List** | Your channel's most recent events (tips, subscribers, followers, bits, Super Chats, supporters, charity donations; Twitch, YouTube, Facebook) |
| **The Jar** | A jar that catches bits, tips, subs, and more (Twitch, YouTube, Facebook) |
| **Viewer Count** | The count of live viewers by platform (YouTube, Twitch, Facebook) |
| **Stream Boss** | Viewers duke it out by subbing, tipping, and more to become the Stream Boss (Twitch bits; Twitch, YouTube, Facebook) |
| **Credits** | Credits at the end of your broadcast thanking supporters (followers, subscribers, cheers, tips; Twitch, YouTube, Facebook) |
| **Spin Wheel** | Viewers spin a custom spin wheel to win prizes or incentives (manually triggered by the streamer while live) |
| **Sponsor Banner** | Rotating media to display your socials, sponsorships, CTAs, or cute animations (streamer manually adds sponsor images) |
| **Media Share** | Viewers tip to share videos on your stream |
| **Subscription Goal** | A subscriber goal for viewers to help you reach (Twitch subscribers, YouTube members, Facebook supporters) |
| **Streamlabs Charity Donation Goal** | A charity donation goal for viewers to help you reach (Streamlabs charity donations) |
| **Poll** | Viewers vote on a result (Twitch, YouTube) |
| **Emote Wall** | Displays and animates emotes from chat, improving chat participation |
| **Chat Highlight** | Highlights chat messages from your viewers on your stream |
| **Custom Widget** | Use HTML, CSS, and JavaScript to create a widget with custom functionality |

## Automation

Streamlabs Desktop sources, scenes, and recording state can be controlled from Streamer.bot:

- [Streamer.bot — Streamlabs Desktop sub-actions](../../automation/streamer-bot/sub-actions/streamlabs-desktop/index.md) — control sources (visibility, mute, flip, rotate), scenes, groups, and recording/streaming state
- [Streamer.bot — Streamlabs Desktop triggers](../../automation/streamer-bot/triggers/streamlabs-desktop.md) — fire actions on connection, streaming, recording, and scene changes
- [Streamer.bot — Streamlabs integration triggers](../../automation/streamer-bot/triggers/integrations/streamlabs.md) — donations, charity donations, and merchandise events

## Tips

- **Use Screen Capture** as the single unified source for games, apps, and monitors — it replaces juggling Game/Window/Display Capture.
- **Keep the source order in mind** — sources higher in the list render in front; keep webcam and overlay elements above gameplay.
- **Auto Game Capture** removes the per-game setup — just start the game and it is captured.
- **Widgets are configured in the Dashboard**, not in the scene — the scene source just displays them. See [Overlays & Widgets](overlays-and-widgets.md).
- **Application Audio** avoids virtual-audio-cable setups for simple cases like keeping Discord off stream.
- **VTubers:** Spout2 Capture integrates natively with VTube Studio and VSeeFace — no extra downloads.
