---
title: "Viewer Attack"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - interactive
  - overlay
  - bits
  - channel-points
  - viewer-attacks
  - engagement
audience:
  - variety
  - gamers
  - just-chatting
  - vtubers
  - creative
price: "Free"
url: "https://dashboard.twitch.tv/extensions/hdbjnslojqku41q2c50pzdppgagxiw"
screenshots: []
last-reviewed: 2026-07-29
---

# Viewer Attack

> Let your viewers throw virtual items at your stream! An interactive overlay where viewers use Bits or Channel Points to toss animated items across the screen — with 50+ original attacks, 100+ global meme attacks, and custom upload support.

## Quick Start

1. Go to the [Viewer Attack Twitch Extension page](https://dashboard.twitch.tv/extensions/hdbjnslojqku41q2c50pzdppgagxiw) and click **Install**
2. Activate the extension for your channel
3. Open OBS Studio or Streamlabs Desktop and add a new **Browser Source**
4. Paste the overlay URL provided by the extension in the configuration panel
5. Set the width and height to match your stream canvas (typically 1920×1080)
6. Use the configuration panel to set pricing for each attack item (Bits and/or Channel Points)
7. Let your viewers know they can launch attacks using Bits or Channel Points!

## Features

- **Bits Contribution Support** — Viewers spend Twitch Bits to purchase and throw attacks
- **Channel Points Support** — Viewers use your channel's free in-currency to join the fun
- **50+ Original Attacks** — Tomato, poo, air horn, Santa Claus, vomiting cat, bouquet, pooping pigeon, sumo wrestler, explosive sheep, talking parrot, and more
- **100+ Global Meme Attacks** — Popular internet memes ready to use out of the box
- **Custom Media Upload** — Upload your own images and animations to create unique attacks matching your channel's lore
- **Sound Effects** — Attacks can include audio for extra impact
- **Custom Pricing** — Set your own price per item in Bits and/or Channel Points
- **No External Software** — Works entirely as a browser source in OBS Studio and Streamlabs Desktop
- **Smooth Animations** — Built with Unity WebGL for fluid, performant animations
- **Mobile Support** — Viewers can attack from the Twitch mobile app on iOS and Android
- **Random Attack Option** — Let viewers fire a random surprise item

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Per-item Bit price | number | varies | Cost in Bits for each specific attack item |
| Per-item Channel Points price | number | varies | Cost in Channel Points for each specific attack item |
| Item enabled | boolean | `true` | Enable or disable individual attack items |
| Random Attack toggle | boolean | `false` | Allow viewers to trigger a random attack instead of choosing a specific one |

Configuration is managed through the extension's settings panel on Twitch after installation.

### Per-Item Pricing

Each of the 50+ original attacks and 100+ global meme attacks can have its own independent price in Bits and/or Channel Points. You can set one item at 1 Bit while another costs 50 Bits. This lets you gate premium or high-effort animations behind higher prices while keeping casual items cheap and accessible.

### Enabling / Disabling Items

Not every attack fits every stream. Disable items that don't match your vibe — keep the playful ones (tomato, pooping pigeon) for light-hearted streams and disable anything too chaotic for more focused content.

### Custom Attacks

Upload your own images or media to create channel-specific attacks. This is ideal for inside jokes, emotes, or branded content. Custom attacks support the same pricing and enable/disable controls as the built-in items.

### Random Attack

When enabled, viewers can pay a single price to fire a random attack from your enabled pool. This adds an element of surprise and encourages repeated use — viewers may keep rolling to get their favourite item.

## Tips & Tricks

- **Enable both Bits and Channel Points:** Viewers without Bits can still participate using Channel Points, while Bits users get to support you financially. This dual approach maximises engagement across your entire audience.
- **Income opportunity:** Many streamers report significant additional income from Viewer Attack — animated, fun attacks encourage Bits spending more than passive extensions.
- **Match your stream's personality:** Use playful items like tomato and pooping pigeon for variety and just-chatting streams; save bigger spectacles like Santa Claus or explosive sheep for special events or milestone streams.
- **Crowd favourites:** The Talking Parrot and Air Horn consistently rank as viewer favourites — consider pricing them accessibly to encourage frequent use.
- **Works across all stream types:** Viewer Attack fits gaming, VTubing, cooking, just-chatting, and creative streams equally well thanks to the wide variety of items.
- **Review your enabled items regularly:** As your channel culture evolves, enable or disable attacks to keep the pool fresh and relevant to your community's inside jokes.
- **Use custom attacks for branding:** Create attacks out of your own emotes or channel mascot for a uniquely personal touch that no other stream has.

## Alternatives

- [Tangia](../all-in-one-interactions/tangia.md) — comprehensive interaction platform with TTS, memes, soundbites, and more; choose Tangia if you want an all-in-one engagement suite rather than a focused attack overlay
- [Sound Alerts](../../streamer-tools/alerts/sound-alerts.md) — sound-focused viewer interactions; choose Sound Alerts if audio feedback is more important to your stream than visual animations
- [Blerp](../all-in-one-interactions/blerp.md) — sound effects and meme extension with a large community library; choose Blerp if you want meme soundboards over visual projectiles
- [Stream Stickers](./stream-stickers.md) — viewers place static and animated stickers onto your stream canvas; choose Stream Stickers if you prefer persistent sticker placement over animated projectiles
- [StreamRoll For Chat](./streamroll-for-chat.md) — interactive dice rolling overlay for chat games and decisions; choose StreamRoll if you need randomisation mechanics for chat participation
