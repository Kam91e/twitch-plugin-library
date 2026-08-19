---
title: "Stream Closed Captioner"
category: "streamer-tools"
subcategory: "accessibility"
tags:
  - captions
  - accessibility
  - closed-captioning
  - speech-to-text
  - translation
audience:
  - variety
  - beginners
  - just-chatting
  - esports
  - creative
price: "Free"
url: "https://dashboard.twitch.tv/extensions/h1ekceo16erc49snp0sine3k9ccbh9-1.6.4"
screenshots: []
last-reviewed: 2026-07-29
---

# Stream Closed Captioner

> Add closed captions in a few clicks — Real-time captions for your Twitch stream and Zoom calls — readable, customizable, and ready for your whole audience.

## Quick Start

1. Go to the [Twitch Extension page](https://dashboard.twitch.tv/extensions/h1ekceo16erc49snp0sine3k9ccbh9-1.6.4) or search **Stream Closed Captioner** in Creator Dashboard → Extensions
2. Click **Install**, then **Activate** — recommend using the Overlay or Panel slot
3. Open [https://stream-cc.gooseman.codes/](https://stream-cc.gooseman.codes/) in a browser
4. Click **Connect with Twitch** and authorise the extension
5. In the Stream CC dashboard, go to **Caption Settings** and select your language
6. When you're ready to stream, click **Click to Start Captions**
7. Grant microphone permission when prompted by your browser
8. **Keep the Stream CC dashboard tab open** for the duration of your stream — captions will stop if the tab is closed

## Features

- **Real-time closed captions** — Uses browser-based speech-to-text (Chrome/Edge speech recognition API) to transcribe your microphone audio live
- **Twitch Extension overlay** — Captions display directly over the video player on your channel page
- **Twitch Extension panel** — Captions shown in the panel area below the stream for viewers who prefer that layout
- **Mobile support** — Works on mobile through the Twitch Extensions runtime; viewers can pop captions out to float over other apps
- **Zoom meeting captions** — Add a meeting URL to stream captions directly into Zoom calls
- **OBS WebSocket integration** — Burn captions permanently into your VOD recordings so they survive highlights and clips
- **OBS browser source overlay** — Fully customisable appearance (font size, colour, background, opacity, alignment, number of visible lines)
- **Translation with Bits** — Viewers can spend 500 Bits to unlock 24 hours of translated captions (German, Spanish, French, English, Pirate)
- **Viewer controls** — Move captions, change text size, choose layout (horizontal scrolling / box), pop out, adjust background opacity, toggle OpenDyslexic font
- **Profanity filter** — Built-in filter plus a custom word blocklist for additional control
- **Caption delay** — Adjustable delay to sync captions with your stream (useful if your audio is behind the video)
- **Auto-off** — Captions stop automatically when your stream ends
- **HLS latency sync** — Captions are automatically delayed to match each viewer's HLS video latency

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `language` | string | `"en-US"` | Speech recognition language (e.g. `"en-US"`, `"de-DE"`, `"es-ES"`) |
| `caption_delay` | number | `0` | Delay in seconds before captions appear (to sync with stream audio/video) |
| `font_size` | string | `"medium"` | Text size: `"small"`, `"medium"`, or `"large"` |
| `font_color` | string | `"#ffffff"` | Hex colour for caption text |
| `bg_color` | string | `"#000000"` | Hex colour for caption background |
| `bg_opacity` | number | `0.6` | Background opacity from `0` (transparent) to `1` (solid) |
| `text_align` | string | `"left"` | Text alignment: `"left"`, `"center"`, or `"right"` |
| `lines` | number | `2` | Number of visible caption lines in the overlay |
| `profanity_filter` | boolean | `true` | Enable or disable the built-in profanity filter |
| `blocklist` | string[] | `[]` | Custom words to block (comma-separated list) |
| `auto_off` | boolean | `true` | Automatically stop captions when stream ends |
| `translation_language` | string | `""` | Target language for Bits-powered translation (requires viewer to spend 500 Bits) |
| `obs_token` | string | `""` | OBS WebSocket connection token for burning captions into VODs |

### OBS Browser Source
For a fully custom overlay via OBS, add a browser source pointed at your Stream CC dashboard URL with custom CSS. Supported CSS variables include `font-size`, `color`, `background`, `opacity`, `text-align`, and `line-height`.

### OBS WebSocket
To burn captions into VOD recordings, enable OBS WebSocket in OBS → Tools → WebSocket Server Settings, generate a token, and paste it into the Stream CC dashboard under **OBS Caption Source**.

### Viewer-Side Controls
Viewers can click the extension overlay to access their own settings without affecting the streamer's configuration:
- Move captions anywhere on screen
- Switch between horizontal scrolling layout and box layout
- Pop captions out into a separate window
- Toggle OpenDyslexic font
- Adjust background opacity

## Tips & Tricks

- **Desktop microphone recommended** — Accuracy drops noticeably with headset mics or laptop built-in mics. A condenser or dynamic mic aimed at your mouth gives the best speech-to-text results.
- **Restart between long streams** — For streams lasting 4+ hours, click **Stop Captions** and then **Start Captions** again during a break to keep recognition responsive.
- **Test overlay position** — Before going live, check where captions appear on screen so they don't overlap in-game HUDs, health bars, minimaps, or facecam.
- **Ask a moderator to verify** — Have a mod check captions on both desktop and mobile to confirm readability across devices.
- **Include Discord call audio** — Use [Voicemeeter Banana](https://voicemeeter.com/) to route Discord chat audio into the same microphone input that Stream CC listens to, so guest audio is captioned too.
- **Shout out the feature** — Add a chat command like `!captions` that tells viewers captions are available and how to customise them.
- **VOD captioning** — If you publish highlights on YouTube or TikTok, use the OBS WebSocket integration to bake captions into the recording so they survive editing.
- **Bits translation promo** — Encourage viewers to use Bits for translation by enabling the feature and mentioning it during stream — it's a great Bits sink that also makes your stream more accessible to non-native speakers.

## Alternatives

- [Closed Captions for Streams (Alejo Pereyra)](https://dashboard.twitch.tv/extensions) — Another Twitch Extension for closed captions with a similar approach; good if Stream CC doesn't suit your workflow
- [OBS Closed Captions Plugin (ratwithacompiler)](https://github.com/ratwithacompiler/OBS-closed-captioning-plugin) — OBS native plugin that embeds captions directly into the RTMP stream; lower latency but requires OBS Studio and more setup
- [LocalVocal (royshil)](https://github.com/royshil/obs-localvocal) — OBS plugin that runs Whisper locally for speech-to-text; supports ~100 languages, privacy-preserving (no internet needed), but is more resource-intensive
- [Web Captioner](https://webcaptioner.com/) — Free browser-based captioning tool; Chrome-only, supports ~40 languages, but lacks Twitch Extension integration
- [Caption.Ninja](https://caption.ninja/) — Free browser-based captioning with built-in translation support; self-hostable, works with OBS via browser source, but requires manual setup
