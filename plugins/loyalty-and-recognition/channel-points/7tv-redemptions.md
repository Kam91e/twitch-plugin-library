---
title: "7TV Redemptions"
category: "loyalty-and-recognition"
subcategory: "channel-points"
tags:
  - 7tv
  - emotes
  - redemptions
  - bits
  - panel
  - overlay
audience:
  - variety
  - gamers
  - beginners
  - just-chatting
price: "Free"
url: "https://dashboard.twitch.tv/extensions/p52xgm2ryoc6j5qvd8nzjgvdygi26h"
screenshots:
  - "https://raw.githubusercontent.com/Ravenbtw/7tv-emotes-extension/main/assets/screenshot.png"
last-reviewed: 2026-07-29
---

# 7TV Redemptions

> Add 7TV emotes for bits — a panel and video overlay that showcases all your channel's 7TV emotes with Bit-based redemption links.

![7TV Redemptions screenshot showing the emote grid panel](https://raw.githubusercontent.com/Ravenbtw/7tv-emotes-extension/main/assets/screenshot.png)

## Quick Start

Getting 7TV Redemptions up and running takes less than a minute. You'll need a 7TV account with emotes already added to your channel (via [7tv.app](https://7tv.app)) before you begin.

1. Go to the [7TV Redemptions Extension page](https://dashboard.twitch.tv/extensions/p52xgm2ryoc6j5qvd8nzjgvdygi26h) on the Twitch dashboard
2. Click **Install**
3. Choose to activate it as a **Panel** (recommended — lets viewers browse emotes in your About section) or **Video Overlay** (shows a toggle button on the left side of the stream)
4. Set the installation as **Active** for your channel
5. That's it — the extension automatically detects your connected 7TV emote set and displays everything immediately

> **Prerequisite:** You must have a [7TV account](https://7tv.app) with emotes linked to your Twitch channel. The extension does not create or manage your 7TV emote set — it only displays what is already there.

## Features

- **Automatic emote fetching** — Pulls your channel's full 7TV emote set via the 7TV API with no manual setup
- **3-column grid layout** — Clean, browsable grid showing emotes alongside their names
- **One-click sharing** — Each emote links to its 7TV.app page so viewers can easily find and use it
- **Panel mode** — Displays in your channel's About section for always-available browsing
- **Video Overlay mode** — Adds a hover-reveal toggle button on the left side of the stream that viewers can open during a live broadcast
- **Lazy loading** — Efficiently handles large emote sets without slowing down the page
- **Dark theme** — Matches Twitch's default aesthetic with a comfortable dark background
- **No browser extension required** — Works completely independently of the 7TV browser extension; viewers do not need anything installed
- **Zero configuration** — Truly plug-and-play; there are no settings to tweak beyond choosing Panel or Video Overlay mode

## Configuration

7TV Redemptions requires almost no configuration. The extension auto-detects your 7TV channel connection and displays all linked emotes immediately.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Activation Mode | choice | Panel | Whether to display the emote grid as a Panel (About section) or Video Overlay (on-stream toggle) |

### Activation Mode

You choose between **Panel** and **Video Overlay** at install time from the Twitch Extension dashboard:

- **Panel (recommended):** Perfect for channels where viewers frequently browse emotes off-stream. The emote grid lives in your channel's About section and is always visible.
- **Video Overlay:** Best if you want the emote showcase to appear during a live stream. A small button appears on the left edge of the stream; viewers hover over it to reveal the emote grid.

To switch modes, uninstall and reinstall the extension selecting the other mode — there is no in-extension toggle.

## Tips & Tricks

- **Overlay toggle location:** In Video Overlay mode, the toggle button sits on the **left side** of the stream. Remind new viewers to look for it if they cannot find the emote showcase.
- **Share emotes easily:** Each emote in the grid links directly to its 7TV.app page. You can copy that link and share it in chat or on social media so viewers know exactly which emote you are referring to.
- **Large emote sets handled gracefully:** Thanks to lazy loading, even channels with hundreds of 7TV emotes will see smooth performance in both Panel and Overlay modes.
- **No browser extension needed:** Viewers who do not use the 7TV browser extension can still browse your emote collection through this panel/overlay.
- **Integration with 7TV Emotes:** Pair this extension with the [7TV Emotes](../emotes-and-badges/7tv-emotes.md) browser extension for a complete 7TV experience — the extension handles chat display while this extension handles the showcase/redemption panel.
- **Combine with channel points:** Since the emote grid displays every emote in your 7TV set, you can reference it when setting up custom channel point redemptions that let viewers use specific 7TV emotes.

## Alternatives

- [7TV Emotes](../emotes-and-badges/7tv-emotes.md) — The 7TV browser extension that lets viewers use 7TV emotes across Twitch. Different purpose: use this for chat functionality, use 7TV Redemptions for the showcase/redemption panel.
- [Emotes Showcase](../emotes-and-badges/emotes-showcase.md) — Displays all channel emotes including third-party emote sets. Choose this if you want a unified showcase across BTTV, FFZ, and 7TV rather than 7TV-only.
- [MyEmotes](../emotes-and-badges/myemotes.md) — Displays Twitch channel emotes and badges in a panel format. A good option if you do not use 7TV and want to showcase your standard Twitch subscriber emotes instead.
- [Blerp](../viewer-engagement/all-in-one-interactions/blerp.md) — A sound-based interaction platform with channel points redemption. A different category altogether — use Blerp if you want audio/sound effects tied to channel points rather than emote showcases.
