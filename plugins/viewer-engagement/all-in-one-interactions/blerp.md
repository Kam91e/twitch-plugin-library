---
title: "Blerp 🎉"
category: "viewer-engagement"
subcategory: "all-in-one-interactions"
tags:
  - soundboard
  - sound-effects
  - alerts
  - tts
  - channel-points
  - bits
  - viewer-interaction
audience:
  - variety
  - gamers
  - just-chatting
  - beginners
  - vtubers
  - creative
price: "Freemium"
url: "https://dashboard.twitch.tv/extensions/oafn7vvzfyzyccwrwrt233221oe5wq"
screenshots:
  - "https://cdn.blerp.com/blerp_products/Web/Landing%20Pages/Twitch/TwitchClassic%20Extension.png"
  - "https://cdn.blerp.com/blerp_products/Web/Landing%20Pages/Twitch/TwitchExtension-White_Big.png"
last-reviewed: 2026-07-29
---

# Blerp 🎉

> Boost Your Stream Engagement — A Twitch soundboard extension that lets viewers use Bits or Channel Points to play DMCA-free sound emotes, TTS, video alerts, and GIFs on your stream.

![Blerp Twitch Extension Interface](https://cdn.blerp.com/blerp_products/Web/Landing%20Pages/Twitch/TwitchClassic%20Extension.png)
![Blerp Overlay Example](https://cdn.blerp.com/blerp_products/Web/Landing%20Pages/Twitch/TwitchExtension-White_Big.png)

## Quick Start

1. **Create a Blerp account** at [blerp.com](https://blerp.com)
2. **Install the extension** on Twitch — go to the [Blerp Extension page](https://dashboard.twitch.tv/extensions/oafn7vvzfyzyccwrwrt233221oe5wq) and click **Install**
3. **Choose your installation slot** — select **Component** (recommended for best visibility), Panel, or Overlay
4. **Configure the extension** — click **Configure** → **Open Config** → **Login to Blerp with Twitch**
5. **Add to OBS / Streamlabs** — add a **Browser Source** in your broadcasting software and paste the Blerp overlay URL from your config dashboard
6. **Set up Channel Points rewards** — requires Twitch Affiliate or Partner; create rewards and link them to your Blerp soundboards
7. **Curate your soundboards** — choose sounds, set prices, cooldowns, and content ratings
8. **Let viewers know** — add `!blerp` to your chat commands so viewers can learn how to trigger sounds

## Features

- **Channel Points Integration** — viewers redeem channel points to play sound emotes (up to 50 free rewards)
- **Bits Rewards** — viewers spend bits to trigger sounds; streamer earns 80% bits revenue
- **WalkOn Sounds** — subscribers get a personal sound that plays automatically when they enter the stream
- **Subscriber-Only Soundboards** — exclusive soundboards for Tier 1, 2, and 3 subscribers
- **1M+ DMCA-Safe Sound Library** — every sound is reviewed, licensed, and royalty-free
- **Custom Sound Uploads** — upload your own MP3 or WAV files (max 30 seconds), or clip audio from YouTube and Twitch
- **AI-Powered Text-to-Speech** — 50+ languages supported via the browser extension
- **Video Alerts & GIFs** — viewers can trigger video clips and animated GIFs alongside sounds
- **Random Buckets** — create groups of sounds where one plays at random, adding surprise
- **Customizable Ratings** — set content ratings from G to R for each sound or board
- **Customizable Cooldowns & Pricing** — control how often sounds can be played and how much they cost
- **OBS / Streamlabs Browser Source** — lightweight overlay that sits on top of your stream
- **Mobile Support** — works on the Twitch mobile app for viewers on the go

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Soundboard Organization | Managed boards | — | Create, edit, reorder, and feature sound packs |
| Per-Sound Pricing | Bits & Points | Varies | Set individual cost in Bits and/or Channel Points per sound |
| Cooldown Timer | Seconds | 0 | Minimum time between plays for a sound or entire board |
| Content Rating | Dropdown | G | Restrict sounds by maturity level (G, PG, PG-13, R) |
| WalkOn Sound | Sound picker | None | Assign a specific sound to a subscriber that plays on channel entry |
| Subscriber-Only Board | Toggle | Off | Restrict a soundboard to Tier 1, 2, or 3 subscribers |
| Random Bucket | Sound list | — | Group sounds; one is randomly selected each time |
| Search Mode | Toggle | On | Let viewers browse and search available sounds to play |
| Alert Appearance | Style options | Default | Customise the visual look of on-screen alerts |

### Soundboard Organization
Organise your sounds into thematic boards. You can create boards for specific games, moods, inside jokes, or subscriber tiers. Featured boards appear prominently for viewers.

### Pricing & Cooldowns
Each sound can have its own Bit cost and Channel Point cost. Set cooldowns per sound to prevent spam, or per board to pace the overall interaction. Cooldowns apply globally — once a sound plays, no one can replay it until the timer expires.

### Content Ratings
Assign a rating (G through R) to every sound or board. This is useful for maintaining a family-friendly stream while still having spicier sounds available during late-night or 18+ streams.

### WalkOn Sounds
Assign a unique sound to each subscriber tier. When a subscriber enters the channel, their personal WalkOn sound plays automatically — works as a nice perk that encourages more subscriptions.

### Random Buckets
Create a bucket with multiple sounds. When triggered, one sound from the bucket plays at random. Great for variety — every trigger feels different.

## Tips & Tricks

- **Install as Component, not Panel** — the Component slot gives you a larger clickable area and has been reported to generate up to 20% more sound shares from viewers
- **Enable Search Mode** — let viewers browse and discover sounds on their own; this dramatically increases engagement because viewers can find sounds that match the moment
- **Use subscriber-only soundboards** — create exclusive boards for each sub tier to give subscribers a tangible perk they can show off in chat
- **Create random buckets for surprise elements** — set up a "Random" bucket with crowd-pleasers; viewers who don't know what to pick can roll the dice
- **Curate thematic soundboards** — match your boards to your stream genre (e.g., jump-scare sounds for horror games, hype sounds for esports, funny reactions for Just Chatting)
- **Refresh sounds regularly** — rotate out overplayed sounds and add new ones weekly to keep engagement high and avoid repetition fatigue
- **Set appropriate ratings** — use G-rated boards for your main overlay and keep R-rated sounds behind subscriber walls or on a separate overlay to control what appears on stream
- **Cross-promote with !blerp** — add the `!blerp` chat command to your stream deck or bot so you can demonstrate how it works during lulls in the action

## Alternatives

- [Sound Alerts](../streamer-tools/alerts/sound-alerts.md) — direct competitor with a similar soundboard, TTS, and Bits monetisation model; choose Blerp if you prefer the larger sound library and WalkOn subscriber feature
- [Streamlabs](../all-in-one-interactions/streamlabs.md) — all-in-one streaming platform that includes sound alerts alongside alerts, overlays, and donation management; choose if you already use the Streamlabs ecosystem
- [Tangia](../all-in-one-interactions/tangia.md) — another all-in-one viewer interaction platform with sound alerts, TTS, and mini-games; a good middle-ground between Blerp and Streamlabs
- Custom OBS Browser Sources — build your own soundboard manually with HTML/CSS/JS and trigger via chat bot; more flexible but requires development knowledge and offers no viewer interaction out of the box
