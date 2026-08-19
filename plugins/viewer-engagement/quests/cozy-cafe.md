---
title: "CozyCafe"
category: "viewer-engagement"
subcategory: "quests"
tags:
  - cafe
  - interactive
  - pixel-art
  - chat-bot
  - cozy
  - menu
audience:
  - variety
  - creative
  - just-chatting
  - beginners
price: "Free"
url: "https://dashboard.twitch.tv/extensions/y00k8pvmggnkvjr99gj9gxi63sb3"
screenshots:
  - "https://raw.githubusercontent.com/Norumai01/UniCat-Cafe/main/screenshots/menu.png"
  - "https://raw.githubusercontent.com/Norumai01/UniCat-Cafe/main/screenshots/config_1.png"
last-reviewed: 2026-07-27
---

# CozyCafe

> A free, cozy virtual cafe experience where your viewers can browse a menu, place orders, and interact through a chat bot — turning passive viewers into active cafe regulars.

![CozyCafe viewer panel showing the cafe menu](https://raw.githubusercontent.com/Norumai01/UniCat-Cafe/main/screenshots/menu.png)
![CozyCafe configuration page](https://raw.githubusercontent.com/Norumai01/UniCat-Cafe/main/screenshots/config_1.png)

## Quick Start

1. Go to the [CozyCafe Twitch Extension page](https://dashboard.twitch.tv/extensions/y00k8pvmggnkvjr99gj9gxi63sb3) and click **Install**
2. Set it as a **Panel** extension on your channel
3. Open the configuration panel to connect CafeCatBot to your chat
4. Customise your menu items — add food, drinks, and custom categories
5. That's it — your viewers can start placing orders!

## Features

- **Interactive menu panel** — Viewers can browse categorised items (Food, Drink, Sub Combos) and place orders directly from the extension panel
- **CafeCatBot integration** — Orders trigger personalised chat messages, making every interaction visible to the whole stream
- **Retro pixel art aesthetic** — Custom pixel art assets with a pastel colour palette for that cozy cafe vibe
- **Cooldown system** — Client-side cooldowns prevent spam without extra backend overhead
- **Collapsible item descriptions** — Clean, browsable menu that doesn't overwhelm the panel
- **Surprise failure messages** — Orders occasionally go a little sideways with humorous follow-up messages
- **Stateless and serverless** — No database required; built on Twitch's Configuration Service
- **Free and open-source** — No paywalls, no subscriptions (MIT licensed)

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Menu items | array | preset items | Customise food, drink, and combo items shown to viewers |
| CafeCatBot connection | OAuth | — | Link your Twitch bot account so orders appear in chat |
| Colour palette | string | pastel default | Choose your cafe's colour scheme |
| Custom visitors | text | — | Add names of regular viewers as cafe visitors |
| Custom decor | text | — | Seasonal or themed decor items for the panel |

Configuration is done directly in the Twitch Extension panel after installation.

### Menu Customisation

You can add, remove, or edit menu items in the configuration panel. Items are grouped into categories (Food, Drink, Sub Combos) and each item can have a description and price (in channel points or free).

### CafeCatBot Setup

To enable chat messages when viewers order, authorise a Twitch bot account through the configuration panel. The bot will announce each order in chat with a personalised message.

## Tips & Tricks

- **Build a cafe theme around it:** Use CozyCafe as the centrepiece of a themed stream — play lo-fi music, use a cafe-themed overlay, and role-play as a barista
- **Combine with loyalty:** Award channel points to viewers who place orders, then let them redeem those points for special cafe items
- **Rotate the menu seasonally:** Update your menu items for holidays or special events to keep regular viewers engaged
- **Use the failure messages:** The surprise failure messages are a hit with audiences — lean into the chaos and react to them on stream
- **Open-source:** Since CozyCafe is MIT-licensed, developers can inspect, fork, or contribute to the project on [GitHub](https://github.com/Norumai01/UniCat-Cafe)

## Alternatives

- [Stream Avatars](https://dashboard.twitch.tv/extensions/...) — lets viewers control characters on screen; different interaction style but similar engagement depth
- [Pando](https://dashboard.twitch.tv/extensions/...) — viewers can interact with virtual pets using channel points
- [Sound Alerts](../streamer-tools/alerts/sound-alerts.md) — if you want audio-based viewer interactions instead of a cafe menu
