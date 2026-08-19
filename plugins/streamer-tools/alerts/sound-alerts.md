---
title: "Sound Alerts"
category: "streamer-tools"
subcategory: "alerts"
tags:
  - alerts
  - soundboard
  - bits
  - channel-points
  - tts
  - interactive
  - monetisation
audience:
  - variety
  - beginners
  - just-chatting
  - gamers
  - esports
  - creative
price: "Free"
url: "https://dashboard.twitch.tv/extensions/bttsqjy6dnv05acplp5vy0mflgrh3z"
screenshots: []
last-reviewed: 2026-07-27
---

# Sound Alerts

> The #1 interactive Twitch Extension that lets your viewers play sounds, videos, text-to-speech, and more directly in your livestream — trusted by over 3 million streamers.

## Quick Start

1. Go to the [Sound Alerts setup page](https://dashboard.soundalerts.com/settings/setup) and log in with Twitch
2. Click **Install Extension on Twitch** to add it from the [Extension store](https://dashboard.twitch.tv/extensions/bttsqjy6dnv05acplp5vy0mflgrh3z)
3. Select a slot (Panel 1 is standard) and activate the extension
4. Return to the [Sound Alerts Dashboard](https://dashboard.soundalerts.com/alerts) and create your first alerts
5. Pick sounds, videos, or TTS from the library or upload your own — assign Bit prices or make them free
6. Add the Sound Alerts Browser Source to OBS for overlay alerts (optional)

## Features

- **Sound alerts** — Let viewers play sound effects on stream using Bits or Channel Points
- **Video alerts** — Full video playback triggered by viewer interactions
- **Text-to-Speech alerts** — Viewers send voice messages read aloud on stream
- **Video Share alerts** — Viewers can share YouTube and Twitch clips in your stream
- **Huge media library** — 2.1M+ sounds and videos from the community, or upload your own
- **Channel Points integration** — Enable alerts for Channel Points as well as Bits
- **Extension profiles** — Create different alert sets for different games or stream categories
- **13 colour themes** — Match the extension panel to your stream branding
- **Custom cooldown** — Control how often viewers can trigger alerts
- **80% Bits revenue share** — Earn 0.8 cents per Bit used in your extension
- **Mobile support** — Works on the Twitch mobile app for iOS and Android
- **Chatbot integration** — Auto-generated chat messages when alerts are triggered
- **Up to 30 alerts** — Standard accounts can have 30 active alerts at once

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Alert type | dropdown | — | Sound, Video, TTS, or Video Share |
| Bit cost | number | 0 | Number of Bits required to trigger (0 = free) |
| Channel Points cost | number | 0 | Channel Points required if not using Bits |
| Subscriber only | boolean | `false` | Restrict alert to subscribers only |
| Cooldown | number (seconds) | 10 | Time between alert triggers per viewer |
| Extension cooldown | number (seconds) | 5 | Global cooldown for all alerts |
| Extension colour | dropdown | `purple` | One of 13 colour options |
| Profile | dropdown | `default` | Save and switch between alert sets per game |

Configuration is managed through the [Sound Alerts Dashboard](https://dashboard.soundalerts.com/alerts).

### Alert Profiles

You can create multiple profiles — for example, one for serious gaming sessions and another for just-chatting streams. Each profile stores its own set of enabled alerts, Bit prices, and cooldowns. Switch between them instantly from the dashboard.

## Tips & Tricks

- **Create event-specific profiles:** Make a "Horror Games" profile with jump scare sounds and a "Chill" profile with funny meme sounds — swap as you switch categories
- **Use TTS sparingly:** Text-to-Speech is popular but can overwhelm your stream if too many viewers trigger it at once. Set higher Bit costs or longer cooldowns for TTS alerts
- **Combine with Channel Points:** Offer free (or cheap) sound alerts via Channel Points to reward loyal viewers, and premium sounds via Bits for monetisation
- **Rotate sounds weekly:** Keep your soundboard fresh by swapping out sounds every stream — regular viewers appreciate variety
- **Subscriber-only premium sounds:** Reserve your best or funniest sounds for subscribers as an extra perk
- **Use the leaderboard:** Check which sounds are most popular on your channel and lean into what your audience loves
- **Scene Editor:** Sound Alerts includes a Scene Editor for custom overlays, emote celebrations, and Subathon timers — explore beyond just sounds

## Alternatives

- [Blerp](https://blerp.com/) — similar soundboard with 1M+ sounds, free tier with paid unlimited option
- [Stream Stickers](../viewer-engagement/interactive-overlays/stream-stickers.md) — visual sticker-based interaction instead of audio
- [Tangia Interactions](../viewer-engagement/all-in-one-interactions/tangia.md) — all-in-one engagement platform with TTS, memes, and AI features
- [Voicemod Live](../streamer-tools/audio-tools/voicemod-live.md) — voice changer controlled by viewers via Bits
