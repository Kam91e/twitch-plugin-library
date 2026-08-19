---
title: "Play with Viewers"
category: "viewer-engagement"
subcategory: "gameplay-interaction"
tags:
  - queue
  - viewer-games
  - gameplay-interaction
  - chat-bot
  - panel
audience:
  - variety
  - gamers
  - just-chatting
  - community-focused
price: "Free"
url: "https://dashboard.twitch.tv/extensions/hvvijr100w490kxs6y5tj7twac5hh0"
screenshots: []
last-reviewed: 2026-07-29
---

# Play with Viewers

> A chat bot that lets viewers queue up and play with you.

## Quick Start

1. Go to the [Play with Viewers app page](https://playwithviewers.app/) and click **Install Twitch extension**
2. On the Twitch Extension page, click **Install**
3. Go to your Twitch chat and type: `/mod PlayWithViewersBot`
4. (Optional) Go to Dashboard > Extensions > **Configure** to customize command names
5. (Optional) Click **Activate** > **Set as Panel 1** to show queue info on your channel page
6. Done — queue commands work in chat immediately

## Features

- **Queue system** — Viewers can join a queue to play games with you, managed entirely through chat
- **Viewer commands** — `!join` to enter the queue, `!queue` / `!list` to see the queue, `!position` to check your spot
- **Streamer/mod commands** — `!next` to pull the next viewer, `!open` to open the queue, `!close` to close the queue
- **In-chat queue display** — The queue list shows directly in Twitch chat, no external links or browser sources needed
- **Customizable commands** — Rename any command to match your channel's branding in the configuration panel
- **Twitch Panel support** — Activate the extension as a panel to show queue info on your channel page
- **No OBS setup** — Works purely through the chat bot and Twitch Panel, no browser source or overlay configuration required

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `!join` | Command | `!join` | Command viewers use to enter the queue |
| `!next` | Command | `!next` | Command streamers/mods use to pull the next viewer from the queue |
| `!queue` / `!list` | Command | `!queue` | Command to display the current queue |
| `!position` | Command | `!position` | Command for viewers to check their position in the queue |
| `!open` | Command | `!open` | Command to open the queue so viewers can join |
| `!close` | Command | `!close` | Command to close the queue so no new viewers can join |

### Commands Tab
In the extension configuration panel, you can rename any of the built-in commands to match your channel's custom command naming scheme. For example, you could rename `!join` to `!play` or `!queue` to `!waiting`.

### Panel Display Settings
In the Twitch Extensions dashboard, activate the extension and assign it as a Panel to show queue information directly on your channel page. Viewers who aren't in chat can still see queue status from your channel page.

## Tips & Tricks

- **Must be moderator** — The bot account `PlayWithViewersBot` needs moderator privileges in your chat to function. Type `/mod PlayWithViewersBot` once after installing.
- **Open and close the queue** — Use `!open` to start accepting queue entries and `!close` to stop. This lets you control exactly when viewers can queue up, which is great for segmenting your stream.
- **Customize commands** — Rename commands to match your channel's branding (e.g., `!join` → `!play`, `!next` → `!pick`). This makes the experience feel native to your community.
- **Variety streamer friendly** — Best suited for variety streamers who play games where viewers can join directly: chess (multiple boards), fighting games (lobbies), party games (Jackbox, Pico Park), or even just-chatting segments.
- **Keeps viewers on Twitch** — The queue displays directly in chat, unlike some alternatives that redirect viewers to external websites.

## Alternatives

- **StreamElements !queue module** — Built-in queue functionality in the StreamElements chatbot. More feature-rich if you already use StreamElements, but requires StreamElements setup.
- **Streamlabs Cloudbot** — Cloud-based chatbot with queue features. A good choice if you're already in the Streamlabs ecosystem.
- **Play With Viewers by Mustached Maniac** — A Streamer.bot extension with both a dock and overlay. More suitable if you want visual overlay elements and already use Streamer.bot.
- **que0p** — A dedicated queue bot with fair draws, ready-up timers, and viewer selection randomization. Better if you want more sophisticated queue mechanics like weighted draws or timeouts.
