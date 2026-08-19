---
title: "Stream Stickers"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - stickers
  - overlays
  - bits
  - interactive
  - animated
  - meme
audience:
  - variety
  - just-chatting
  - gamers
  - esports
  - beginners
price: "Free"
url: "https://dashboard.twitch.tv/extensions/5tbyqce941455yffg7fzg36tp6or8p"
screenshots:
  - "https://streamstickers.com/images/hero-panel.png"
last-reviewed: 2026-07-27
---

# Stream Stickers

> Let your audience slap stickers directly onto your live stream using Bits — a fun, interactive overlay with over 100 starter stickers, animated GIFs, and custom upload support.

![Stream Stickers interface](https://streamstickers.com/images/hero-panel.png)

## Quick Start

1. Install the [Stream Stickers Twitch Extension](https://dashboard.twitch.tv/extensions/5tbyqce941455yffg7fzg36tp6or8p)
2. Activate it as a **Component** or **Panel** extension on your channel
3. Go to the [Stream Stickers Dashboard](https://dashboard.streamstickers.com) and copy your Browser Source URL
4. Add a new Browser Source in OBS (or your streaming software) with that URL — set it to your exact stream resolution (e.g. 1920x1080)
5. Check "Refresh browser when scene becomes active"
6. Test your setup with the built-in test sticker

## Features

- **100+ starter stickers** — Ready-to-use stickers included out of the box
- **Animated GIF stickers** — Motion stickers that bring your stream to life
- **Custom sticker uploads** — Upload your own images (320K+ custom stickers uploaded by the community)
- **Sound effects** — Assign sounds to stickers for extra impact
- **Reward Stickers** — Unlockable stickers that build viewer loyalty
- **Sticker Party Mode** — Viewers fill an on-screen meter with Bits; once full, everyone gets free stickers for 60 seconds
- **Full mobile support** — Works on the Twitch mobile app for iOS and Android
- **Customisable chat bot** — Chat commands and alerts for sticker activity
- **10 colour themes** — Match the sticker interface to your stream's branding
- **Over 1.3M streamers** — One of the most popular engagement extensions on Twitch

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Sticker cooldown | number | 3s | How long viewers must wait between stickers |
| Sticker size | string | `medium` | Small, medium, or large sticker placement |
| Bit cost per sticker | number | 1 | Number of Bits required to place a sticker |
| Sticker Party goal | number | 100 | Bits needed to trigger Sticker Party Mode |
| Allow custom stickers | boolean | `true` | Whether viewers can upload their own stickers |
| Chat alerts | boolean | `true` | Enable chat messages when stickers are placed |
| Overlay alerts | boolean | `true` | Show on-screen notifications for stickers |
| Colour theme | string | `default` | One of 10 colour options to match your branding |

Configuration is managed through the [Stream Stickers Dashboard](https://dashboard.streamstickers.com).

### Sticker Party Mode

When enabled, viewers can contribute Bits to fill a meter. Once the goal is reached, all viewers unlock free sticker placement for 60 seconds. This creates organic engagement spikes and encourages Bit spending.

### Custom Stickers

You can upload your own sticker images in the dashboard. Supported formats include PNG and GIF. Custom stickers can be assigned to specific Bit price tiers or made available to all viewers.

## Tips & Tricks

- **Use Sticker Party strategically:** Announce a Sticker Party goal during slow moments to re-energise your chat
- **Brand your stickers:** Create custom stickers with your channel logo, emotes, or inside jokes for your community
- **Combine with alerts:** Pair with [Sound Alerts](../streamer-tools/alerts/sound-alerts.md) so sticker placements also trigger sound effects
- **Subscriber-only stickers:** Set exclusive stickers for subscribers to add a perk to your subscription tiers
- **Set reasonable Bit prices:** Low Bit costs (1–5 Bits) encourage more participation; reserve high costs for premium or animated stickers
- **Test before going live:** Use the test panel in the dashboard to verify sticker placement and scaling before your stream starts

## Alternatives

- [Stream Avatars](https://dashboard.twitch.tv/extensions/...) — viewers control small characters on screen instead of stickers
- [Tangia Interactions](../viewer-engagement/all-in-one-interactions/tangia.md) — broader engagement suite with memes, TTS, and interactive overlays
- [Sound Alerts](../streamer-tools/alerts/sound-alerts.md) — audio-based interaction instead of visual stickers
