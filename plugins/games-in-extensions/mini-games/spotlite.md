---
title: "Spotlite"
category: "games-in-extensions"
subcategory: "mini-games"
tags:
  - characters
  - avatars
  - viewer-control
  - interactive
  - overlay
  - mini-game
audience:
  - variety
  - gamers
  - just-chatting
  - big-channels
  - esports
price: "Free"
url: "https://dashboard.twitch.tv/extensions/zk98n955h5chyus31hpyqixa1ip0am-0.0.3"
screenshots: []
last-reviewed: 2026-07-28
---

# Spotlite

> Let your viewers take control of characters that walk around your live stream — an interactive overlay that turns your audience into on-screen participants.

## Quick Start

1. Install [Spotlite](https://dashboard.twitch.tv/extensions/zk98n955h5chyus31hpyqixa1ip0am-0.0.3) from the Twitch Extension marketplace
2. Activate it as an **Overlay** extension on your channel
3. Add a Browser Source in OBS pointed to the overlay URL provided in the extension dashboard
4. Viewers join by clicking a button in the extension panel — each viewer controls one character
5. Characters appear on your stream overlay and walk around in real time based on viewer input

## Features

- **Viewer-controlled characters** — Each participant controls their own on-screen character via the extension panel
- **Real-time movement** — Characters walk, move, and interact on your stream overlay instantly
- **Overlay display** — Rendered as a transparent overlay on top of your game or stream content
- **Free to use** — No Bits or payments required for either streamer or viewers
- **Community participation** — Hundreds of viewers can join simultaneously, filling your stream with activity

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Max characters | number | `50` | Maximum number of viewer characters visible on screen at once |
| Character speed | number | `medium` | How fast viewer-controlled characters move |
| Character size | string | `small` | Size of each character on the overlay |
| Background opacity | number | `0` | Transparency of the character area background |
| Spawn area | string | `fullscreen` | Where characters appear on the overlay |

Configuration is managed through the extension settings in your Twitch Creator Dashboard.

### Character Controls

Viewers interact through the extension panel, typically using arrow keys or on-screen directional buttons. Each viewer's character is displayed with a unique colour or identifier to distinguish participants.

### Note on Availability

Spotlite is currently in a **HIDDEN** state on the Twitch Extension marketplace, which means it may not appear in search results or may be undergoing testing/development. If the extension is not visible in your dashboard, it may be in limited beta testing or pending re-release.

## Tips & Tricks

- **Battle royale style:** Let viewer-characters "fight" each other or compete for a spot on screen — whoever survives wins a shoutout
- **Race events:** Set a finish line in your overlay and let viewers race their characters to it
- **Viewer goals:** Tie the number of characters to a viewer goal — every 10 new followers, add 5 more character slots
- **Combine with channel points:** Let viewers spend channel points to unlock special skins, speed boosts, or cosmetic upgrades for their character
- **Stream breaks:** Let Spotlite run during intermissions or BRB screens to keep engagement going while you're away

## Alternatives

- [Stream Avatars](https://dashboard.twitch.tv/extensions/...) — viewer-controlled characters with more features and stable public availability
- [Stream Stickers](../viewer-engagement/interactive-overlays/stream-stickers.md) — viewers place stickers instead of controlling characters, simpler but less interactive
- [Marbles on Stream](https://store.steampowered.com/app/1170970/Marbles_on_Stream/) — viewers join marble races through chat, a different take on viewer-participation mini-games
