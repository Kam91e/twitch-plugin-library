---
title: "StreamRoll For Chat"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - dice
  - rolling
  - ttrpg
  - dnd
  - overlay
  - interactive
  - rng
  - random
  - twitch-extension
audience:
  - variety
  - gamers
  - ttrpg
  - vtubers
  - creative
  - just-chatting
price: "Freemium"
url: "https://dashboard.twitch.tv/extensions/njt2q669pcltv0dazk0lbx7v27bj4i-0.0.2"
screenshots: []
last-reviewed: 2026-07-28
---

# StreamRoll For Chat

> Let your viewers roll dice directly on your stream with animated 3D dice overlays — perfect for TTRPG sessions, challenge streams, community events, and viewer mini-games.

## Quick Start

1. Install [StreamRoll For Chat](https://dashboard.twitch.tv/extensions/njt2q669pcltv0dazk0lbx7v27bj4i-0.0.2) from the Twitch Extension marketplace
2. Go to [streamroll.io](https://streamroll.io) and sign in with your Twitch account
3. Activate the extension as an **Overlay** extension on your channel
4. In the StreamRoll tools panel, create a **Dice Config** (e.g., name it "Chat Roll", add 1× D20)
5. Enable the config for Twitch rolling in its **Effects** tab
6. Copy your overlay URL from the StreamRoll play/overlay page
7. Add a Browser Source in OBS with that URL (1920×1080 recommended, positioned above gameplay)
8. Run a test roll from the StreamRoll dashboard to confirm the animation appears in OBS
9. Viewers can now roll via the extension overlay — free rolls allow a single die with advantage/disadvantage

## Features

- **Animated 3D dice** — Dice roll with smooth 3D animations visible on stream overlay
- **Free rolls** — Viewers can roll a single die at no cost, with optional advantage/disadvantage
- **Premium rolls** — Full dice configs with multiple dice, automation, and effects (requires StreamRoll+)
- **Dice types** — Supports D4, D6, D8, D10, D12, D20, and D100
- **Roll History overlay** — A separate overlay showing a scrollable list of recent rolls with customisable display
- **Dice Config system** — Pre-configured dice sets with customisable colours, styles, and labels
- **Automation effects** — Trigger OBS scene changes, Streamer.bot actions, or other events based on roll results
- **3 free configs** — Enough to get started with basic rolls; unlimited with StreamRoll+

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Dice configs | list | — | Pre-saved dice configurations (dice types, quantities, colours) |
| Dice style | string | `standard` | Visual style of dice on the overlay |
| Dice scale | number | `1.0` | Size multiplier for dice animations |
| Overlay colours | hex | — | Custom colour for dice bodies and text |
| Roll timeout | number | `0` | Seconds before rolls expire (StreamRoll+ feature) |
| Twitch enabled | toggle | `off` | Whether a config appears in the Twitch extension for chat rolling |
| Max active configs | number | `3` | Free tier limit; unlimited with StreamRoll+ |

Configuration is managed through the [StreamRoll tools panel](https://streamroll.io) after signing in.

### Dice Configs

Each config defines a collection of dice to roll together. You can set the dice types, quantities, colours, and which effects to trigger on specific results (e.g., show an OBS scene on a natural 20). Configs must be explicitly enabled for Twitch in the Effects tab to appear in the extension.

### Free vs Premium Rolls

| | Free Roll | Premium Roll |
|--|-----------|-------------|
| Dice | Single die | Full config (multiple dice) |
| Modifiers | Advantage/disadvantage | All automation and effects |
| OBS triggers | — | Yes |
| Streamer.bot integration | — | Yes |

## Tips & Tricks

- **Enable configs for Twitch:** After creating a dice config, open its **Effects** tab and toggle "Twitch" on — otherwise it won't appear in the extension
- **Use advantage/disadvantage:** Free rolls support advantage (roll twice, take higher) and disadvantage (roll twice, take lower) — great for D&D style decisions without needing premium
- **Combine with Streamer.bot:** Use pre-built Streamer.bot actions to trigger rolls automatically — e.g., a channel point redemption that rolls a D20
- **OBS scene triggers:** Set up a "nat 20" or "nat 1" effect in a config to switch OBS scenes or show alerts for dramatic moments
- **Roll history overlay:** Add a separate Browser Source for the roll list overlay so viewers can see recent results without relying on chat
- **Test before stream:** Run test rolls from the StreamRoll dashboard to verify animations, positioning, and effects before going live
- **Stream Deck integration:** Install the [StreamRoll Stream Deck plugin](https://marketplace.elgato.com/product/streamrollio-controller-304a76c0-873d-4de1-a3ab-4ccffaf5bae2) for physical button rolling
- **Limited configs on free tier:** You get 3 configs — use them wisely (e.g., one for D&D, one for giveaways, one for viewer challenges)

## Alternatives

- [Sound Alerts](../streamer-tools/alerts/sound-alerts.md) — viewers trigger sound effects with Bits instead of dice, good for audio-focused interaction
- [Stream Avatars](https://dashboard.twitch.tv/extensions/...) — viewer-controlled characters instead of dice, another way to gamify your stream
- [Crowd Control](https://dashboard.twitch.tv/extensions/...) — viewers spend Bits to directly affect supported games, more structured than random rolls
