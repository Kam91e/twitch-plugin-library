---
title: "Timeout With Bits"
category: "streamer-tools"
subcategory: "chat-tools"
tags:
  - timeout
  - bits
  - chat-moderation
  - moderation
  - chat-tools
  - viewer-interaction
audience:
  - variety
  - gamers
  - just-chatting
  - big-channels
price: "Free"
url: "https://dashboard.twitch.tv/extensions/np7dksjwmdp34s29k4ggbs1qu7ybwh"
screenshots: []
last-reviewed: 2026-07-29
---

# Timeout With Bits

> A panel extension that lets viewers in chat time each other out using Bits — the more Bits spent, the longer the timeout!

## Quick Start

1. Go to your **Twitch Creator Dashboard** > **Extensions** > **Discovery**
2. Search for "Timeout With Bits" and click **Install**
3. Navigate to the **My Extensions** tab, then click **Configure** (gear icon)
4. Set up to 6 timeout tiers — pick a Bit price and a duration (in seconds) for each tier
5. Toggle optional settings:
   - **On-screen alerts** — show a visual notification when someone gets timed out
   - **Custom chat message** — personalise the timeout announcement
   - **Subscriber immunity** — protect subs from being timed out
   - **VIP immunity** — protect VIPs from being timed out
6. Set a **cooldown period** (in seconds) to prevent spam
7. Click **Activate** and choose a panel slot (Panel 1, 2, or 3)
8. *(Optional)* For on-screen alerts, add a **Browser Source** in OBS pointing to the overlay URL provided in the configuration panel

## Features

- **6 configurable timeout tiers** — each tier has its own Bit cost and timeout duration set by the streamer
- **Viewer-driven moderation** — viewers select a target chatter from the panel to spend Bits and time them out
- **Bits scale with timeout length** — more Bits spent means a longer timeout
- **On-screen alert overlay** — visual notification appears when a timeout is triggered
- **Custom chat announcements** — fully customisable message template (e.g., "{user} was timed out by {target}!")
- **Subscriber immunity toggle** — prevent subscribers from being timed out
- **VIP immunity toggle** — prevent VIPs from being timed out
- **Global cooldown** — prevents the same viewer from timing out repeatedly in quick succession
- **EBS backend chat bot** — the extension uses an EventSub-backed bot to execute `/timeout` commands automatically
- **Broadcaster and moderator protection** — streamers and mods cannot be timed out
- **Bits revenue split** — every timeout generates Bits revenue under the standard 80/20 split (80% streamer, 20% developer)

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Timeout Tier 1 | integer × 2 | — | Bit cost + duration (seconds) for the first timeout tier |
| Timeout Tier 2 | integer × 2 | — | Bit cost + duration (seconds) for the second timeout tier |
| Timeout Tier 3 | integer × 2 | — | Bit cost + duration (seconds) for the third timeout tier |
| Timeout Tier 4 | integer × 2 | — | Bit cost + duration (seconds) for the fourth timeout tier |
| Timeout Tier 5 | integer × 2 | — | Bit cost + duration (seconds) for the fifth timeout tier |
| Timeout Tier 6 | integer × 2 | — | Bit cost + duration (seconds) for the sixth timeout tier |
| Cooldown | integer | `30` | Global cooldown in seconds between timeout actions |
| Subscriber Immunity | toggle | `off` | When enabled, subscribers cannot be timed out |
| VIP Immunity | toggle | `off` | When enabled, VIPs cannot be timed out |
| On-screen Alert | toggle | `on` | Show a visual alert overlay when a timeout occurs |
| Custom Chat Message | string | `"{user} was timed out by {target}!"` | Chat message template for timeout announcements |

### Timeout Tiers
Configure up to 6 independent tiers. Each tier requires a Bit price (the amount a viewer must spend) and a duration (how long the target is timed out). You can leave tiers empty if you do not want all 6 slots active. Tier 1 is the cheapest/shortest, while Tier 6 can be the most expensive/longest — or you can customise them in any order you like.

### Cooldown
A global cooldown prevents the same viewer from timing out another chatter too frequently. Setting this to 0 disables the cooldown entirely, though this is not recommended as it can lead to spam.

### Custom Chat Message
Use the `{user}` and `{target}` placeholders in your message template. `{user}` is replaced with the viewer who spent the Bits, and `{target}` is replaced with the viewer who was timed out. You can use this to create funny, lore-friendly, or on-brand announcements.

### On-screen Alert
When enabled, a browser-source overlay URL is provided in the configuration panel. Add this as a Browser Source in OBS (or any streaming software) to display timeout alerts on stream. The alert can be styled and positioned by editing the overlay page if you are comfortable with basic CSS.

## Tips & Tricks

- **Price your tiers thoughtfully** — if Bit costs are too high, no one will use the extension. If they are too low, chat can become chaotic with constant timeouts. Start with a low-cost entry tier (e.g., 50 Bits for 10 seconds) to encourage adoption.
- **Use immunity for subs and VIPs** — loyal viewers and regulars are often the backbone of your community. Enabling subscriber and VIP immunity prevents them from being constantly targeted and keeps the feature fun.
- **Set a reasonable cooldown (30–60 seconds)** — this prevents a single viewer from repeatedly timing out the same person, which can feel like harassment. A short cooldown keeps the interaction lively without crossing into abuse.
- **Customise the chat message for entertainment** — make timeout announcements fun and on-brand. Examples: `"{target} got BONKED by {user}!"` or `"{user} sent {target} to the shadow realm!"`.
- **Every timeout generates revenue** — since Bits are used for every timeout, you earn under the standard 80/20 Bits revenue split. This makes the feature both fun for viewers and rewarding for you.
- **Combine with other chat interaction tools** — pair with [Sound Alerts](../alerts/sound-alerts.md) to play a funny sound effect whenever a timeout happens for extra entertainment value.
- **Test your tiers before going live** — spend a few Bits yourself or ask a moderator to test the tiers so you know the experience from the viewer's perspective.

## Alternatives

- [Creati's Extension](../alerts/creatis-extension.md) — a broader tool by the same developer (AlphaDuplo) that combines TTS, sound alerts, and timeout functionality in a single extension; best if you want an all-in-one interaction hub
- [Sound Alerts](../alerts/sound-alerts.md) — the #1 interactive Twitch Extension that lets viewers play sounds, videos, and TTS using Bits or Channel Points (different interaction model — focused on sound effects rather than moderation)
- **Streamer.bot custom actions** — a community-built approach using Streamer.bot to create custom timeout-via-channel-points solutions; offers more flexibility but requires significant setup and technical knowledge
- **Nightbot / Streamlabs Chatbot** — traditional chat bots with custom command systems that can be configured for moderation; best if you prefer a bot-based approach over a panel extension
