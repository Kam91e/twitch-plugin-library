---
title: "Ultimate Closed Captions"
category: "streamer-tools"
subcategory: "accessibility"
tags:
  - captions
  - closed-captioning
  - accessibility
  - speech-to-text
  - translation
audience:
  - variety
  - beginners
  - just-chatting
  - esports
  - creative
price: "Free"
url: "https://ultimatecc.net"
screenshots: []
last-reviewed: 2026-07-29
---

# Ultimate Closed Captions

> Add real-time closed captions to your Twitch streams, with instant translations to reach a global audience — free, open-source, and customisable by every viewer.

## Quick Start

1. Go to your **Twitch Creator Dashboard** → **Extensions** → **Discovery**
2. Search for **"Ultimate Closed Captions"** or **"closed captions"**
3. Click **Install**
4. Go to **My Extensions**, find Ultimate Closed Captions, and click **Activate**
5. Select **Set as Overlay 1** (recommended for video overlay) or **Component**
6. Click the **gear icon** to open the extension configuration
7. Open the companion dashboard at [https://ultimatecc.net/dashboard](https://ultimatecc.net/dashboard) in a separate browser tab
8. Click **Log in with Twitch** and authorise the dashboard
9. Grant microphone permission when prompted by your browser
10. Start speaking — captions appear on your stream automatically

> **Important:** Keep the UltimateCC dashboard tab open for the entire stream. Closing it stops the captions.

## Features

- **Real-time closed captions** — Uses the browser's Web Speech API to transcribe your microphone audio live, with no additional software required
- **Optional real-time translation** — Bring your own Google Translation API key to translate captions into multiple languages as they appear
- **Multi-language viewer support** — Viewers can select their preferred caption language from a dropdown menu in the extension overlay
- **Viewer-side customisation** — Each viewer can adjust text colour, text size, font family, background colour, and background opacity independently
- **Moveable, resizable subtitle box** — Viewers can freely drag, resize, and lock the caption area anywhere on the video player
- **Works as Video Overlay and Component** — Supports both overlay and panel/component layouts on Twitch
- **Mobile support** — Fully functional through the Twitch mobile app
- **Toggle on/off** — Viewers can hide or show captions by clicking the CC icon at the bottom-left of the stream player
- **Companion dashboard** — Streamer controls at [ultimatecc.net/dashboard](https://ultimatecc.net/dashboard) with Twitch login
- **Open source** — Licensed under GPL-3.0, source available on [GitHub](https://github.com/UltimateCC/extension)

## Configuration

### Streamer Settings (Companion Dashboard)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Google Translation API Key | string | `""` | Optional API key to enable real-time caption translation. Obtain from Google Cloud Console. |
| Captioning Status | toggle | off | Start or stop captioning from the dashboard |
| Language | string | `"en"` | Source language for speech recognition |

Set up your streamer controls at [ultimatecc.net/dashboard](https://ultimatecc.net/dashboard):

1. Log in with your Twitch account
2. (Optional) Enter your **Google Translation API key** under Translation Settings to unlock multi-language translation
3. Click **Start Captioning** when you're ready to go live
4. Leave the dashboard tab open for the duration of your stream

### Google Translation API Key

To enable real-time translation, you need a Google Translation API key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Cloud Translation API**
4. Generate an API key under **Credentials**
5. Copy the key into the UltimateCC dashboard under Translation Settings

Once configured, viewers see a language dropdown and can select their preferred language for caption output.

### Viewer-Side Controls

Viewers can fully customise their caption experience without affecting the streamer's settings. Hover over the stream to reveal the **CC icon** at the bottom-left, then click to open the controls:

| Setting | Description |
|---------|-------------|
| Text colour | Change the colour of caption text |
| Text size | Increase or decrease font size |
| Font family | Choose between available fonts |
| Background colour | Set the colour behind caption text |
| Background opacity | Adjust from transparent to solid |
| Box position | Drag and resize the subtitle area freely |
| Lock position | Lock the subtitle box in place once positioned |

## Tips & Tricks

- **Keep the dashboard tab open** — The UltimateCC dashboard must stay open in your browser for captions to continue. Add it to a dedicated browser profile or use a second machine as a captioning station.
- **Quality microphone matters** — Accuracy improves dramatically with a quality microphone. A condenser or dynamic mic aimed at your mouth gives far better speech recognition than a headset or laptop mic.
- **Viewer discovery** — Remind viewers to hover over the stream to find the CC icon at the bottom-left of the player. Many users don't know captions are available unless you tell them.
- **Translation promo** — If you set up a Google Translation API key, mention it during stream and add a `!captions` chat command so non-native speakers know they can follow along in their language.
- **Test before going live** — Check where captions appear on screen so they don't overlap in-game HUDs, minimaps, health bars, or your facecam.
- **Check mobile experience** — Have a moderator verify captions work on mobile via the Twitch app, where the overlay behaviour can differ from desktop.
- **Use a second browser profile** — Keep your streaming browser profile logged into the UltimateCC dashboard and a separate one for browsing to avoid accidentally closing the tab.

## Alternatives

- [Stream Closed Captioner](./stream-closed-captioner.md) — Similar free Twitch Extension for closed captions; supports Bits-based translation unlock (no Google API key needed), OBS WebSocket integration for VOD burn-in, and Zoom meeting captioning
- [OBS Closed Captions Plugin (ratwithacompiler)](https://github.com/ratwithacompiler/OBS-closed-captioning-plugin) — OBS native plugin that embeds captions directly into the RTMP stream; lower latency but requires OBS Studio and more setup
- [LocalVocal (royshil)](https://github.com/royshil/obs-localvocal) — OBS plugin that runs OpenAI Whisper locally for speech-to-text; supports ~100 languages, privacy-preserving (no internet needed), but is more resource-intensive
- [Web Captioner](https://webcaptioner.com/) — Free browser-based captioning tool; Chrome-only, supports ~40 languages, but lacks native Twitch Extension integration
