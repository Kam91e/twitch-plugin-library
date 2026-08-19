---
title: "Rock, Paper, BITS"
category: "games-in-extensions"
subcategory: "mini-games"
tags:
  - rock-paper-scissors
  - battle-royale
  - bits
  - mini-game
  - tournament
  - interactive
audience:
  - variety
  - gamers
  - just-chatting
  - big-channels
  - esports
price: "Free"
url: "https://dashboard.twitch.tv/extensions/ah9foa4l785rl4ygk0y64tpgcaxwtk"
screenshots:
  - "https://dev.twitch.tv/marketing-assets/images/bits-in-extensions/extensions/rps.png"
last-reviewed: 2026-07-28
---

# Rock, Paper, BITS

> A Rock, Paper, Scissors Battle Royale where viewers spend 100 Bits to enter and fight their way to become the last person standing during stream breaks.

> **Status note:** This extension is currently in a **HIDDEN** state on Twitch (per TwitchInsights) and may not be available for new installations. It is documented here as a historical/legacy extension from the initial Bits in Extensions beta (2018).

![Rock, Paper, BITS screenshot](https://dev.twitch.tv/marketing-assets/images/bits-in-extensions/extensions/rps.png)

## Quick Start

1. Ensure you are a **Twitch Partner or Affiliate** with Bits enabled on your channel.
2. Go to your **Creator Dashboard** > **Extensions** > **Discovery** tab.
3. Search for **"Rock, Paper, BITS"** (Extension ID: `ah9foa4l785rl4ygk0y64tpgcaxwtk`).
4. Click **Install** and assign it to a Panel or Component slot on your stream layout.
5. **Activate** the extension from the My Extensions tab.
6. During a stream break or intermission, open the extension panel and start a tournament.
7. Viewers spend **100 Bits** to enter and choose Rock, Paper, or Scissors.
8. The tournament eliminates players in classic RPS style until one winner remains.

## Features

- **Battle Royale RPS** — Classic Rock, Paper, Scissors with a last-person-standing elimination format; every viewer on the channel can join the tournament simultaneously.
- **Bits-powered entry** — Each tournament round costs 100 Bits per viewer, with the standard 80/20 Twitch Bits revenue split.
- **Streamer-initiated tournaments** — The streamer controls when a tournament begins, making it ideal for intermissions, BRB screens, or chat-driven downtime.
- **Multiplayer mayhem** — All participating viewers compete in the same bracket, with in-stream display showing the action live.
- **Monetisation built in** — Streamers earn Bits revenue when viewers participate, turning downtime into an interactive revenue stream.

## Configuration

The extension offers minimal configuration — the focus is on starting and running tournaments on demand.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Tournament State | toggle | Off | Start or stop a tournament session from the extension panel |
| Panel Placement | dropdown | — | Choose which extension slot (Panel 1, 2, 3, etc.) or Component overlay to use |

### Starting a Tournament
Open the extension panel on your stream manager and click the **Start Tournament** button. The extension will announce the tournament in chat and open entry for a brief period before matches begin.

### Placement
Rock, Paper, BITS works best as a **Panel extension** (shows on the streamer's channel page below the player) but can also be configured as a **Component overlay** for direct in-stream display during breaks.

There are no additional configurable variables, customisation options, or scheduled tournament modes. The extension is intentionally simple — start, play, crown a winner, repeat.

## Tips & Tricks

- **Best during breaks** — Launch tournaments during intermissions, BRB screens, or between games rather than during active gameplay to avoid distracting from the main action.
- **Requires an engaged audience** — 100 Bits per entry is a meaningful spend. This extension shines on channels with a large or highly engaged community willing to use Bits for interactive fun.
- **Revenue opportunity** — With the standard 80/20 Bits revenue split, streamers earn a share of every 100 Bits spent per tournament entry. A popular tournament can add up quickly.
- **Chat hype** — Announce the tournament and talk through the matchups live on stream. The built-in tension of an elimination bracket makes for great content even during downtime.
- **Historical note** — This was one of the first extensions to use the Bits in Extensions system when it launched in the 2018 beta. Its simple, proven gameplay format is its strength.

## Alternatives

- [**StreamBreak**](../streamer-tools/overlays/streambreak.md) — A mini-game collection that includes lightweight games for stream breaks; often free for viewers to play without Bits.
- [**Tilted Trivia**](../games-in-extensions/trivia/tilted-trivia.md) — A trivia battle royale that supports Bits-based entry; better suited for channels where trivia outperforms RPS.
- [**Bithead Arcade**](../games-in-extensions/mini-games/bithead-arcade.md) — A Bits-powered arcade with multiple mini-games; a better choice if you want variety rather than a single game type.
