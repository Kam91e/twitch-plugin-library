---
title: "Smart Click Maps by PhummyLW"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - click-maps
  - heatmap
  - voting
  - interactive
  - overlay
  - real-time
  - community-decisions
  - dougdoug
audience:
  - variety
  - gamers
  - esports
  - just-chatting
  - big-channels
price: "Free"
url: "https://dashboard.twitch.tv/extensions/3jhuw5vki6qbsezlnb9a2fl3vbs4zq-0.5.1"
screenshots: []
last-reviewed: 2026-07-28
---

# Smart Click Maps by PhummyLW

> Let your viewers click directly on your stream to create real-time heatmaps, vote on decisions, and interact visually with your content.

## Quick Start

1. Install [Smart Click Maps by PhummyLW](https://dashboard.twitch.tv/extensions/3jhuw5vki6qbsezlnb9a2fl3vbs4zq-0.5.1) from the Twitch Extension marketplace
2. Activate it as an **Overlay** extension on your channel
3. Add a Browser Source in OBS pointed to the overlay URL provided in the extension configuration
4. Viewers can now click anywhere on the video player — each click appears as a glowing blob on your overlay
5. The heatmap updates in real time, clustering clicks to show popular spots

## Features

- **Real-time click visualisation** — Every viewer click appears as a glowing "blob" on screen, with intensity scaling by click volume
- **Hotspot clustering** — An automatic algorithm detects and highlights the most-clicked areas with live percentage displays
- **No pre-configuration needed** — Unlike chat polls or dedicated voting tools, Smart Click Maps works instantly with zero setup per session
- **Thousands of concurrent viewers** — Built to handle high-CCU streams (tested with 10k–20k concurrent viewers)
- **Free for broadcasters** — No Bits or payments required from either streamer or viewers
- **Open-source foundation** — A community recreation of the original Ex Machina Smart Click Maps, now maintained by PhummyLW

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Overlay position | string | `fullscreen` | Where the click overlay appears on your stream |
| Blob size | number | `medium` | Size of each viewer's click blob |
| Heatmap opacity | number | `50%` | Transparency of the click visualisation overlay |

Configuration is managed through the extension settings in your Twitch Creator Dashboard.

### Click Algorithm

The extension uses a custom clustering algorithm that groups nearby clicks into weighted hotspots. Areas with more clicks grow larger and more opaque, giving you an instant visual read on what your audience wants. This works for binary choices (left vs right, option A vs B) or open-ended exploration (where should I land, what should I click).

## Tips & Tricks

- **Use like a live poll:** Ask "left or right?" or "red or blue?" — viewers click their choice and the heatmap shows the winner instantly
- **Game show format:** Pair with a trivia or quiz game — viewers click their answer on screen instead of typing in chat
- **Creative collaboration:** Ask viewers to click to "draw" on stream — multiple clicks create art together (used by Filian with 5,000 viewers)
- **Decision-making:** Let viewers vote on where to land in battle royale games, which character to pick, or what path to take
- **No SLOBS support:** Smart Click Maps does not work with Streamlabs OBS — use standard OBS Studio instead
- **No mobile support:** Overlay extensions are not available on Twitch mobile apps, so mobile viewers cannot participate

## Alternatives

- [Stream Stickers](../viewer-engagement/interactive-overlays/stream-stickers.md) — viewers place stickers on stream instead of clicking, good for expressive interaction
- [Heat](https://dashboard.twitch.tv/extensions/...) — a lighter heatmap extension by Scott Garner, suitable for simpler click-tracking needs
- [Crowd Control](https://dashboard.twitch.tv/extensions/...) — viewers spend Bits to directly interact with supported games, more structured than open click maps
