---
title: "StreamElements — Chatbot and Loyalty"
category: "streaming-platforms"
type: "Web platform"
platforms:
  - Web
price: "Free"
url: "https://streamelements.com"
last-reviewed: 2026-07-30
---

# Chatbot and Loyalty

> StreamElements includes a cloud-based chatbot and a viewer loyalty point system — tools for chat interactivity, community rewards, and viewer engagement.

## Overview

Unlike desktop chat bots that must run on your computer, StreamElements' chatbot is cloud-hosted — it operates 24/7 without any local software. It handles custom commands, automated timers, chat moderation, and interactive mini-games. The loyalty system rewards viewers with SE Points for watching the stream, which they can spend on custom rewards or use in bot mini-games.

## Configuration

### Chatbot Commands

Commands are the primary way viewers interact with the chatbot. Manage them from the **Chat Bot** section of the StreamElements dashboard.

**Creating a command:**

1. Go to **Chat Bot → Commands**
2. Click **Add Command**
3. Set the command name (e.g., `discord` for `!discord`)
4. Write the response message (supports variables like `{user}`, `{channel}`)
5. Set permission level and cooldown
6. Save

**Command settings:**

| Setting | Description |
|---------|-------------|
| **Aliases** | Alternative command names that trigger the same response |
| **Permission** | Who can use it: Everyone, Subscriber, VIP, Moderator, Broadcaster, or custom role |
| **User Cooldown** | Seconds before the same user can use the command again |
| **Global Cooldown** | Seconds before anyone can use the command again |
| **Enabled** | Toggle on/off without deleting |

### Moderation

The chatbot includes automatic moderation tools:

- **Spam filter** — detect and block repeated messages
- **Blacklist** — block specific words or phrases
- **Caps filter** — block or warn messages with excessive capital letters
- **Emote filter** — limit the number of emotes per message
- **Link protection** — block or require approval for posted links
- **Ban phrases** — automatically time out users posting configured phrases

### Timers

Timers send messages to chat at regular intervals, keeping chat active during slow periods:

1. Go to **Chat Bot → Timers**
2. Click **Add Timer**
3. Write the message (supports variables)
4. Set the interval (seconds between messages)
5. Optionally group multiple messages in one timer for rotation

### Loyalty System (SE Points)

StreamElements' **Loyalty** system rewards viewers for time spent watching:

- **Earning points**: viewers accumulate SE Points while watching the stream (configurable rate)
- **Bonus rates**: subscribers and gifters earn points faster
- **Store**: create a custom store with items viewers can purchase with points:
  - Channel point redemptions
  - Custom chat messages
  - Highlight commands (e.g., `!myname` that shows their name on stream)
  - Discord role access
  - Any custom reward you define

### Mini-Games

Viewers can use SE Points in built-in mini-games:

- **!heist** — team-based gambling where viewers pool points for a payout
- **!duel** — challenge another viewer to a points duel
- **!gamble** — simple double-or-nothing on points
- **!seppuku** — risk points for a chance at a multiplier

### Giveaways

StreamElements supports automated giveaways:

1. Go to **Giveaways** in the dashboard
2. Set the prize, duration, and entry requirements (follow, subscribe, etc.)
3. Start the giveaway — viewers enter by typing `!enter` in chat
4. StreamElements randomly selects a winner when time expires

## Tips

- Start with 5-10 essential commands (`!discord`, `!socials`, `!rules`, `!uptime`) and expand based on viewer requests
- Set SE Points to a moderate earning rate — too fast devalues them, too slow discourages participation
- Use the store to let viewers redeem points for things that benefit you (e.g., "choose the next game" — 1000 points)
- Schedule timers for important reminders (social links, point system explanation) every 15-20 minutes
- Combine with the StreamElements overlay to show recent loyalty activity on stream
- The **!rank** command lets viewers see their current level and points in chat
