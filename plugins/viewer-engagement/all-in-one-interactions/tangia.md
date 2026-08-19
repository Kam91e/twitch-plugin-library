---
title: "Tangia"
category: "viewer-engagement"
subcategory: "all-in-one-interactions"
tags:
  - interactive
  - tts
  - memes
  - ai
  - image-generation
  - soundbites
  - overlays
audience:
  - variety
  - gamers
  - just-chatting
  - creative
  - vtubers
  - esports
price: "Freemium"
url: "https://dashboard.twitch.tv/extensions/54vh7ezuzke8ymirah57lsouoqu44h"
screenshots: []
last-reviewed: 2026-07-27
---

# Tangia

> An all-in-one interactive streaming platform that lets viewers trigger AI text-to-speech, memes, soundbites, image generation, and more — turning your stream into an interactive experience.

## Quick Start

1. Sign up at [Tangia](https://app.tangia.co/signup) with your Twitch account
2. Install the [Tangia Twitch Extension](https://dashboard.twitch.tv/extensions/54vh7ezuzke8ymirah57lsouoqu44h)
3. Add Tangia as a Browser Source in OBS — copy the overlay URL from your Tangia dashboard
4. Browse the interaction library and enable the ones you want (TTS, memes, soundbites, etc.)
5. Set Bit prices or make interactions free for Channel Points
6. Go live — your viewers can now trigger interactions from the Twitch extension panel or viewer page

## Features

- **AI Text-to-Speech** — 150+ realistic TTS voices including custom voice cloning (partner feature)
- **Soundbites** — Viewers submit and trim Twitch clips from your stream; you approve them and they become playable sound interactions
- **Image Generation** — Chat submits AI image prompts; generated images appear on stream with TTS reading the prompt aloud
- **Meme and GIF library** — Thousands of curated memes, GIFs, and sound effects ready to use
- **Media Sharing** — Viewers can share YouTube, Twitch clips, TikTok videos, and more (with mod approval)
- **Interactive overlays** — Memes, GIFs, and images animate over your stream with configurable placement and duration
- **Alerts and notifications** — Full custom alert system integrated with all Tangia interactions
- **Game integrations** — Minecraft integration lets viewers control in-game elements (among other supported games)
- **Draw over stream** — Viewers can draw on your overlay for 10 seconds with replay for everyone to see
- **Custom interactions** — Create your own unique interactions to match your stream's vibe
- **Multi-platform** — Works with Twitch, YouTube, and Kick
- **Tangia REP system** — Earn reputation by being active; unlocks features like extra TTS voices

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Interaction library | array | — | Enable/disable specific interactions (TTS, memes, soundbites, etc.) |
| Bit cost per interaction | number | 10 | Cost in Bits or Tangia Tokens |
| Channel Points option | boolean | `true` | Allow free interaction via Channel Points |
| Mod approval queue | boolean | `true` | Require mod approval for soundbites and media shares |
| Overlay duration | number (seconds) | 5 | How long visual interactions stay on screen |
| TTS voice | dropdown | `default` | Choose which TTS voice is used |
| Cooldown per viewer | number (seconds) | 15 | Time between interactions from the same viewer |

Configuration is managed through the [Tangia dashboard](https://app.tangia.co/).

### Tangia Pass (Tangia+)

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Core interactions, basic TTS, REP progression |
| Tangia+ | $9/month | Skip to REP level 7, extra custom TTS slots, subscriber discounts, early access to features |

### Interaction Types

- **TTS:** Viewers type a message and it's spoken aloud with AI voices
- **Meme:** A meme image or GIF appears on your stream overlay
- **Soundbite:** A short audio clip from your own past streams (viewer-submitted, mod-approved)
- **Image Gen:** AI-generated image based on a viewer's text prompt
- **Media Share:** A YouTube/clip video plays on stream
- **Drawing:** Viewer draws on the overlay for a few seconds

## Tips & Tricks

- **Start small:** Don't enable every interaction at once. Pick 2–3 (TTS + memes is a great starter combo) and add more as your community grows
- **Use mod approval:** Always enable mod approval for soundbites and media shares to prevent inappropriate content from appearing on stream
- **Create custom interactions:** Make channel-specific interactions based on your inside jokes — viewers love exclusive content
- **Tangia REP matters:** The more active you are, the higher your REP level — this unlocks better TTS voices and features without paying
- **Combine with existing alerts:** Tangia handles alerts through its own system; you can replace standalone alert tools with Tangia's integrated alerts
- **Subscriber discounts:** Tangia+ lets you offer discounted interaction prices to subscribers — a great loyalty perk
- **Image Gen for slow moments:** When chat is quiet, prompt viewers to generate an image — it often sparks conversation

## Alternatives

- [Sound Alerts](../streamer-tools/alerts/sound-alerts.md) — if you only want sound-based interaction, Tangia's sound library is smaller
- [Stream Stickers](../viewer-engagement/interactive-overlays/stream-stickers.md) — simpler, sticker-only visual engagement
- [Blerp](https://blerp.com/) — sound-focused alternative with 1M+ sounds and similar TTS features
- [Voicemod Live](../streamer-tools/audio-tools/voicemod-live.md) — voice changer controlled by viewers via Bits (different interaction type)
