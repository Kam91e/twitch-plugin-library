---
title: "Viewers Bingo"
category: "games-in-extensions"
subcategory: "mini-games"
tags:
  - bingo
  - game
  - interactive
  - viewer-game
  - mini-game
  - moderation
audience:
  - variety
  - gamers
  - just-chatting
  - community-focused
price: "Free"
url: "https://dashboard.twitch.tv/extensions/sbx8c4432ntycy25vv256341lp1ug3"
screenshots:
  - "https://conceptoire.com/media/posts/8/gallery/01_Featured_Screnshot.png"
  - "https://conceptoire.com/media/posts/8/gallery/02_Grid_Screnshot.png"
  - "https://conceptoire.com/media/posts/8/gallery/03_Mobile_Screnshot.png"
  - "https://conceptoire.com/media/posts/8/gallery/04_Config_Screnshot-2.png"
  - "https://conceptoire.com/media/posts/8/gallery/05_Moderation_Screnshot-2.png"
last-reviewed: 2026-07-29
---

# Viewers Bingo

> An interactive bingo game where each viewer gets their own randomized bingo grid drawn from stream events you configure, with moderator confirmation and chat celebrations.

![Viewers Bingo overlay on stream](https://conceptoire.com/media/posts/8/gallery/01_Featured_Screnshot.png)
![Viewer bingo grid](https://conceptoire.com/media/posts/8/gallery/02_Grid_Screnshot.png)
![Mobile view](https://conceptoire.com/media/posts/8/gallery/03_Mobile_Screnshot.png)
![Configuration panel](https://conceptoire.com/media/posts/8/gallery/04_Config_Screnshot-2.png)
![Moderation panel](https://conceptoire.com/media/posts/8/gallery/05_Moderation_Screnshot-2.png)

## Quick Start

1. Visit the [Viewers Bingo extension page](https://dashboard.twitch.tv/extensions/sbx8c4432ntycy25vv256341lp1ug3)
2. Click **Install / Add to channel**
3. Open the extension configuration panel and enter your bingo entries — these are text items describing stream events (e.g., "Rage quit", "Viewer raid", "Inside joke appears")
4. Set the **grid size** (a 3×3 grid of 9 entries works well for most streams)
5. Set the **grace period** duration — the time window for viewers to report events and moderators to confirm them (default 2 minutes)
6. Activate the extension on your stream
7. Instruct viewers to open their bingo grid via the extension panel on your channel
8. Moderators monitor the moderation overlay to confirm or reject reported entries as viewers mark them

## Features

- **Custom bingo entries** — streamer configures a set of bingo entries representing notable stream events, running gags, or recurring moments
- **Randomized grids** — each viewer gets their own random bingo grid drawn from the configured event pool, so no two viewers have the same card
- **Viewer-driven marking** — viewers spot events happening on stream and report them directly on their grid
- **Moderator confirmation system** — moderators review reported events and confirm or reject them, preventing false reports
- **Configurable grace period** — adjustable time window (default 2 minutes) for viewers to report events and moderators to act on them
- **Chat celebrations** — the extension bot posts congratulatory messages in chat when attentive viewers complete a line or win
- **Live Configuration view** — mid-stream dashboard for adjusting entries or settings without interrupting broadcast
- **EBS backend** — Extension Backend Service manages game state, handles reporting, and sends real-time notifications
- **Responsive / mobile support** — dedicated mobile view with a compact grid layout optimised for phone screens
- **Overlay display** — the current game state can be displayed as an overlay on stream

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Bingo entries | list of text strings | — | Event names that appear on viewer bingo grids |
| Grid size | integer | 3×3 (9 cells) | Number of cells per row and column on the bingo grid |
| Grace period | duration (minutes) | 2 min | Time window for viewers to report an event and moderators to confirm or reject it |

### Bingo Entries

Create a list of text items describing events that commonly happen on your stream. Examples: "Cat walks across keyboard", "Streamer laughs at own joke", "Technical difficulties", "Plot twist". The extension randomly distributes a subset of these entries onto each viewer's grid. The more entries you configure, the more variety each viewer gets.

### Grid Size

Currently shown as a 3×3 grid (9 entries per viewer). Adjusting the grid size changes the difficulty — a larger grid requires more events to be spotted for a bingo.

### Grace Period

This setting controls how long viewers have to report an event after it occurs, and how long moderators have to confirm or reject the report. A shorter grace period (30–60 seconds) works well for fast-paced, high-event streams. A longer period (3–5 minutes) suits slower, more conversational streams where events are less frequent.

### Live Configuration View

Accessible mid-stream, this panel lets you add, edit, or remove bingo entries and tweak settings without leaving your broadcast. Changes take effect for new grids generated after the update.

## Tips & Tricks

- **Adjust grace period by stream pace** — use a shorter grace period (30–60 s) for fast-paced gaming streams and a longer one (2–5 min) for just-chatting or slow-burn variety streams
- **Lean on mods** — the moderator confirmation system means you can focus on streaming; your moderators handle the grid from the moderation overlay
- **Create entries from channel memes** — the best engagement comes from entries tied to your community's inside jokes, catchphrases, and recurring moments
- **Live-config mid-stream** — if a bingo round finishes mid-broadcast, use the Live Configuration view to swap in new entries or adjust difficulty without interrupting gameplay
- **Combine with channel points** — run bingo as a channel points reward event where viewers redeem points to get a bonus entry or a hint on their grid
- **Use for special events** — Viewers Bingo works great for subathons, anniversary streams, game completion celebrations, and watch parties

## Alternatives

- [Live Bingo](./live-bingo.md) — more polished bingo extension with themes (Classic, Food, Animals, game-specific), Bits integration, and subscriber-exclusive games. Choose Live Bingo if you want premium theming and monetisation options.
- [Bingo On Stream](./bingo-on-stream.md) — similar bingo concept with customisable dabber image and fonts. Choose Bingo On Stream if visual customisation of the dabber and card text is important to you.
- **EmoteBingo** — uses Twitch emotes on bingo cards instead of text entries, with Bits integration. Choose EmoteBingo if you want an emote-based bingo experience.
- **Stream Bounty** — interactive challenges with leaderboards and voting. Choose Stream Bounty if you prefer challenge-based engagement over the bingo format.
