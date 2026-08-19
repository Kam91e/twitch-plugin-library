---
title: "Stream Picks"
category: "polling-and-voting"
subcategory: "polls"
tags:
  - polls
  - voting
  - decisions
  - bits-voting
  - quizzes
audience:
  - variety
  - gamers
  - just-chatting
  - community-focused
price: "Free"
url: "https://dashboard.twitch.tv/extensions/fr22g90tzrvi91eevh5ipehxbko7gd"
screenshots: []
last-reviewed: 2026-07-29
---

# Stream Picks

> The premier polling panel extension for streamers on Twitch — create custom polls and quizzes with Bits-based voting, brought to you by Amazon Game Studios.

> **⚠️ Extension Status: HIDDEN** — Stream Picks (listed on the marketplace as **Twitch Picks**) is no longer available for new installation. The extension is in a HIDDEN state on the Twitch marketplace, meaning it cannot be discovered or installed by new users. Existing installs may continue to function, but no further updates are expected. This documentation is preserved for historical reference and for streamers who may still have the extension active.

## Quick Start

These steps are provided for reference only, as the extension is no longer available for new installation.

1. Go to the **Creator Dashboard** > **Extensions** > **Discovery** tab
2. Search for **"Twitch Picks"**
3. Click **Install**
4. Navigate to the **My Extensions** tab
5. Click **Activate** and assign it to a **Panel** or **Component** slot
6. Click the **Configure** (gear icon) to create poll questions and answer options
7. During the stream, reconfigure polls on the fly from the viewer-facing panel

## Features

- **Custom polls** — Create polls with your own questions and multiple answer options
- **Quiz mode** — Run quizzes alongside simple polls for more interactive variety
- **Bits-based voting** — Viewers can cast votes using Bits, creating a monetisation opportunity while driving engagement
- **Customisable designs** — Adjust the look and feel of polls to match your stream's branding
- **Component mode (v3.7+)** — Display polls as an overlay directly on the video player, not just in the panel area
- **Vote refresh (v3.7+)** — Refresh voting results in real time without reloading the extension
- **Real-time results** — Viewers see live updates as votes come in
- **Mobile-compatible** — Works on mobile devices for viewers watching on the go

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Poll question | text | — | The question viewers will vote on |
| Answer options | list | — | The possible answers viewers can choose from |
| Poll design | custom | — | Visual styling options for the poll appearance |
| Bits voting | toggle | on | Enable or disable Bits as a voting method |
| Placement mode | select | panel | Choose between Panel (sidebar) or Component (overlay video) |
| Vote refresh | toggle | off | Automatically refresh vote tallies during the poll |

### Poll Question & Answers
Define the question viewers will see along with up to several answer options. Both simple polls and quiz-style questions are supported.

### Bits Voting Toggle
When enabled, viewers can spend Bits to cast their vote. This provides a direct monetisation path — streamers earn revenue while viewers participate. Disabling this option restricts voting to free, one-vote-per-viewer mode.

### Component vs Panel Placement
- **Panel mode:** Displays the poll in the stream's panel area below the video player
- **Component mode (v3.7+):** Renders the poll as an overlay on top of the video, making it more visible during stream

### Design Customisation
Adjust colours, fonts, and layout to match your channel's aesthetic. This is configured through the extension settings in the Creator Dashboard.

### Vote Refresh (v3.7+)
When enabled, vote counts update automatically without requiring a manual refresh, keeping results current for both the streamer and viewers.

## Tips & Tricks

- **Live poll editing** — Streamers could edit polls directly from the viewer-facing panel during the stream, making it easy to react to chat in real time without tabbing back to the dashboard.
- **Bits-driven engagement** — Enable Bits voting during special events or subscriber streams to create a fun, monetised interaction. Viewers get to "pay" for their vote, and the streamer benefits from the additional Bits revenue.
- **Quiz format** — Use the quiz mode for community game nights, trivia sessions, or "guess the game" segments. The format supports multiple correct/incorrect answer setups.
- **Component overlay for visibility** — If you still have this extension installed, use Component mode (v3.7+) to place the poll directly on the video. This dramatically increases participation rates compared to a sidebar panel.
- **Pair with channel points predictions** — Run a Stream Picks poll alongside Twitch's native Predictions feature to give viewers multiple ways to interact.

## Alternatives

Since Stream Picks is no longer available for new installations, consider these alternatives:

- **[Twitch Built-in Polls](../polling-and-voting/polls/twitch-built-in-polls.md)** — Native polling feature in the Creator Dashboard. No extension needed, uses Channel Points instead of Bits. Best for streamers who want a simple, zero-setup solution directly integrated into Twitch.
- **Streamlabs All-in-One** — A comprehensive extension suite that includes polls alongside loyalty points, giveaways, alerts, and more. Good for streamers already using the Streamlabs ecosystem.
- **StreamAlive** — Live polls, quizzes, word clouds, and audience engagement tools that work through Twitch chat. A modern alternative with more interactive formats than simple multiple-choice polling.
- **Moobot Polls** — Chat-based polling integrated with the Moobot chatbot. Lightweight option for streamers who want polls without a panel or overlay extension.
- [Stream Quizzz](../polling-and-voting/polls/stream-quizzz.md) — A dedicated quiz and poll extension for complex trivia and voting during broadcasts. Ideal for streamers who run frequent quiz segments and need more advanced question formats.
