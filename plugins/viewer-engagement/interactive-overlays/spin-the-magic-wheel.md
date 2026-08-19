---
title: "Spin the Magic Wheel"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - wheel
  - spinner
  - giveaways
  - prizes
  - interactive
  - overlay
  - mobile
audience:
  - variety
  - gamers
  - just-chatting
  - beginners
  - esports
price: "Free"
url: "https://dashboard.twitch.tv/extensions/5ynbyizi5ni5kuta8id50b4ku14l44-0.1.1"
screenshots: []
last-reviewed: 2026-07-28
---

# Spin the Magic Wheel

> Give your viewers a chance to win fun prizes with an interactive spinning wheel that appears on your stream overlay.

## Quick Start

1. Install [Spin the Magic Wheel](https://dashboard.twitch.tv/extensions/5ynbyizi5ni5kuta8id50b4ku14l44-0.1.1) from the Twitch Extension marketplace
2. Activate it as an **Overlay** extension on your channel
3. Add a Browser Source in OBS pointing to the overlay URL shown in the extension dashboard
4. Configure your wheel segments (prize names, colours, weights) in the extension settings
5. Set a trigger method — channel points, chat command, or manual spin
6. Test the wheel behaviour before going live to verify segment display and prize selection

## Features

- **Customisable wheel segments** — Add, edit, and remove prize slots with custom labels and colours
- **Multiple trigger methods** — Spin can be triggered by channel points, chat commands, or manually by the broadcaster
- **Mobile support** — Fully functional on Twitch mobile apps for both iOS and Android
- **Real-time overlay** — The wheel animates and spins live on stream for all viewers to see
- **Free to use** — No Bits required or paid tiers
- **Weighted segments** — Configure some prizes to be rarer than others (common vs rare rewards)

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Segment labels | list | — | Names for each prize or outcome on the wheel |
| Segment colours | hex list | — | Colour for each wheel segment |
| Segment weights | number list | `1` | Probability weight per segment (higher = more likely) |
| Spin trigger | string | `manual` | How the wheel is spun (manual, channel points, chat command) |
| Channel point cost | number | `100` | Channel point cost when trigger is set to channel points |
| Cooldown | number | `30s` | How long viewers must wait between spins |
| Max spins per viewer | number | — | Limit on how many times a single viewer can spin per session |

Configuration is managed through the Twitch Extension dashboard under the extension's settings panel.

### Weighted Probability

Each segment can be assigned a weight value. A segment with weight 10 is twice as likely to be selected as a segment with weight 5. This is useful for creating rarity tiers (e.g., common small prizes vs rare big prizes).

## Tips & Tricks

- **Use channel points as currency:** Set the spin cost to a channel point value your regulars can afford but that makes big spins feel rewarding
- **Announce prizes ahead of time:** Let chat know what's on the wheel before your stream starts to build anticipation
- **Rare slots for impact:** Reserve one or two wheel segments for big prizes (shoutouts, game keys, merch) with low weight to make each hit feel special
- **Combine with loyalty points:** If you use a channel points system, give bonus points for active chatters so they can afford more spins
- **Stream events:** Use the wheel for stream milestones — every X followers, do a special spin session

## Alternatives

- [Streamlabs Loyalty & Giveaways](https://dashboard.twitch.tv/extensions/...) — integrated giveaway system with wheel-like mechanics and broader loyalty features
- [Tangia Interactions](../viewer-engagement/all-in-one-interactions/tangia.md) — broader engagement suite with mini-games and interactive overlays
- [Stream Avatars](https://dashboard.twitch.tv/extensions/...) — viewer-controlled characters on stream for a different reward/engagement system
