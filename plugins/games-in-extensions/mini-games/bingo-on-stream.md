---
title: "Bingo On Stream"
category: "games-in-extensions"
subcategory: "mini-games"
tags:
  - bingo
  - game
  - interactive
  - viewer-game
  - mini-game
audience:
  - variety
  - gamers
  - just-chatting
  - community-focused
price: "Free"
url: "https://dashboard.twitch.tv/extensions/a11agam8dw5cx531davqopayxpjrhu-0.0.1"
screenshots:
last-reviewed: 2026-07-29
---

# Bingo On Stream

> A Twitch extension that lets streamers host a live bingo game on their channel where viewers can play along by reporting stream events they spot.

## Quick Start

1. Go to the [Twitch Extension page](https://dashboard.twitch.tv/extensions/a11agam8dw5cx531davqopayxpjrhu-0.0.1)
2. Click **Install** to add the extension to your channel
3. Open the extension configuration panel and define your bingo entries — list events, items, or moments that might happen during your stream
4. Set the **header font** and **cell font** (required — the in-extension alerts will not work without these configured)
5. Optionally upload a custom dabber image (keep it under 1 MB)
6. Activate the extension overlay during a live stream
7. Viewers will see a randomised bingo board and can start reporting ("dabbing") events they spot

## Features

- **Configurable bingo board entries** — the streamer creates a custom list of events, items, or moments that populate the board
- **Randomised bingo grids** — each viewer gets their own unique, randomised grid from the entry pool
- **Viewer event reporting ("dabbing")** — viewers click a button when they spot a listed event happening on stream
- **Moderator/broadcaster confirmation** — reported events must be approved before they count, preventing false reports
- **Configurable grace period** — set a time window (default ~2 minutes) for confirming events and submitting reports
- **Chat celebrations** — the extension automatically posts messages in chat celebrating viewers who complete a line
- **Customisable dabber image** — upload your own graphic for the dabber button
- **Customisable header and cell fonts** — match the bingo board to your stream's look and feel
- **Live Configuration view** — adjust settings mid-stream with a real-time config panel that mirrors the static configuration page

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Bingo entries | list of strings | — | The events, items, or moments that appear on viewer bingo boards |
| Grace period | integer (minutes) | ~2 | Time window to confirm reported events and for viewers to submit reports |
| Header font | font string | — | The font used for the bingo board header (must be set) |
| Cell font | font string | — | The font used for each bingo cell (must be set) |
| Custom dabber image | image upload | — | Custom graphic for the dabber button (max 1 MB) |

### Bingo Entries
Define a list of events that might occur during your stream. These can be anything: specific game moments ("Boss spawn", "Team wipe"), chat behaviours ("Raid incoming", "Inside joke dropped"), or IRL stream events ("Cat walks past", "Sip drink"). Each viewer receives a randomised subset of these entries on their board.

### Grace Period
Controls how long viewers have to report an event after it happens, and how long moderators have to confirm or reject a report. A shorter grace period works well for fast-paced streams; a longer one suits relaxed or discussion-focused streams.

### Fonts (Required)
Both the header font and cell font must be set before the extension will function correctly. The in-extension alert system that celebrates completed lines will silently fail if either font is left unconfigured.

### Custom Dabber Image
Replace the default dabber graphic with your own image. Keep the file under 1 MB to avoid upload failures. Supported formats include PNG and GIF.

## Tips & Tricks

- **Always set header and cell fonts** — this is a known issue: the extension's alert system fails silently if fonts are not configured. Make this the first thing you do after installation.
- **Keep dabber images under 1 MB** — larger files will fail to upload without a clear error message. Resize or compress your image before uploading.
- **Tune the grace period to your stream's pace** — use a shorter window (30–60 seconds) for fast-paced action games and a longer window (3–5 minutes) for just-chatting, art streams, or slow-paced games.
- **Use moderator confirmation** — assign trusted moderators to confirm reported events so you can focus on streaming without managing the bingo grid yourself.
- **Great for variety streams and watch parties** — bingo works especially well when recurring events are predictable: game marathons, movie watch parties, or any stream with repeatable moments.
- **Align entries with your community's inside jokes** — the more your viewers recognise the entries, the more engaged they'll be in spotting and reporting them.

## Alternatives

- [Live Bingo](./live-bingo.md) — a more mature bingo extension with theme support, Bits monetisation, and sub-only game options. Choose this if you want custom themes or monetisation features.
- [Viewers Bingo](./viewers-bingo.md) — a similar bingo concept with randomised grids and moderator confirmation. A solid alternative if Bingo On Stream doesn't fit your needs.
- EmoteBingo — replaces text entries with Twitch emotes on bingo cards and supports Bits integration. Good for emote-heavy communities.
- Stream Bounty — interactive challenges with leaderboards and voting rather than bingo gameplay. Choose this if you prefer a challenge-based engagement format over bingo.
