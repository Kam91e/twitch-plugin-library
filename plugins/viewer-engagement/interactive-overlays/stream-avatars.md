---
title: "Stream Avatars"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - avatars
  - interactive-overlay
  - viewer-engagement
  - pixel-art
  - mini-games
  - steam
audience:
  - variety
  - gamers
  - vtubers
  - just-chatting
  - community-focused
price: "Paid ($14.99 on Steam — the Twitch Extension is free)"
url: "https://dashboard.twitch.tv/extensions/fe5a78xkj1lnk9wefpk295p6x3dsvl"
screenshots:
  - "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/665300/header.jpg"
  - "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/665300/library_hero.jpg"
  - "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/665300/hero_capsule.jpg"
last-reviewed: 2026-07-29
---

# Stream Avatars

> Turn your viewers into playful pixel-art characters that walk, dance, battle, and interact on your stream. An interactive overlay that brings your chat to life as customizable pixel-art avatars on your broadcast.

![Stream Avatars Header](https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/665300/header.jpg)
![Stream Avatars Library Hero](https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/665300/library_hero.jpg)
![Stream Avatars Hero Capsule](https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/665300/hero_capsule.jpg)

## Quick Start

1. **Purchase and download Stream Avatars** from [Steam ($14.99)](https://store.steampowered.com/app/665300/Stream_Avatars/)
2. **Launch the application** — the setup wizard will guide you through connecting to Twitch via OAuth
3. **Connect your Twitch account** (the Twitch Extension is installed automatically when you link Stream Avatars)
4. **Open OBS Studio** and add a new **Game Capture** source
5. Set the Game Capture mode to **Capture specific window** and select `StreamingAvatars.exe`
6. **Enable Allow Transparency** on the Game Capture source (critical — otherwise the green screen background will show)
7. **Adjust your canvas size** in Stream Avatars Settings to match your OBS scene resolution (e.g., 1920x1080)
8. **Configure viewer spawning** — set the maximum number of avatars, despawn timer, and spawn behavior to your preference
9. **Go live** — viewers who type in chat will automatically spawn as pixel-art avatars on your stream

## Features

- **Boss Fights** — viewers team up to defeat customizable bosses and earn loot box rewards
- **Battle Royale** — free-for-all battle mode; the last avatar standing wins a loot reward
- **Viewer Panel** — Twitch Extension panel lets viewers customize their avatar with loyalty points or Bits
- **Mass Commands** (`!mass {command}`) — command all avatars at once to dance, hug, explode, and more
- **Slot Machine** — a built-in mini-game viewers can play for rewards
- **Basketball** — Team vs Team or free-for-all aiming at the hoop
- **Duels** — challenge another viewer to a duel with a loot reward for the winner
- **Steam Workshop** — download community-made avatars, backgrounds, and bosses; create and upload your own
- **Custom Avatar Creation** — build unique avatars with the in-app editor or by importing sprite sheets
- **Currency Integrations** — works with Mixitup, StreamElements, Streamlabs, Trovo Mana, and Twitch Channel Points
- **Gold Currency System** — viewers earn gold from games and spend it in the in-game shop
- **Chat Bubbles** — avatars display chat messages with emote support
- **Extensive Chat Commands** — `!jump`, `!dance`, `!hug`, `!attack`, `!bomb`, `!slap`, `!boss`, `!basketball`, `!slots`, `!duel`, and many more
- **LUA Scripting API** — create custom extensions and game modes
- **Multi-Platform Support** — works with Twitch, YouTube, Facebook, Trovo, Kick, and Dlive

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Max Avatars | integer | `20` | Maximum number of avatars visible on screen at once |
| Despawn Timer | integer | `120` | Seconds of inactivity before an avatar despawns (in seconds) |
| Spawn Behavior | dropdown | `"Active Chatters"` | Who gets an avatar — `"Active Chatters"` or `"Everyone in Chat"` |
| Canvas Width | integer | `1920` | Width of the render canvas in pixels |
| Canvas Height | integer | `1080` | Height of the render canvas in pixels |
| Background Color | color | `#00FF00` | Chroma key colour for OBS transparency (green by default) |
| Chat Bubbles | toggle | `On` | Show or hide chat bubbles above avatars |
| Event Effects | toggle | `On` | Enable visual effects for events (follows, subs, raids) |
| Sound FX | toggle | `Off` | Enable sound effects for avatar actions and events |
| Currency Integration | dropdown | `"None"` | Select the currency system to use (Mixitup, StreamElements, Streamlabs, Channel Points) |

### Viewer Spawning
The spawning system determines how and when viewers appear as avatars. **Active Chatters** mode only spawns avatars for viewers who have sent a message within a configurable time window, while **Everyone in Chat** spawns an avatar for every viewer currently in chat regardless of activity. Adjust the **Max Avatars** limit based on your PC's performance — higher limits create more visual chaos but require more CPU/GPU resources.

### Canvas & Window Settings
Match the canvas resolution to your OBS scene resolution for pixel-perfect alignment. The **Background Color** defaults to bright green (`#00FF00`) for chroma key transparency. If you use a different chroma colour in OBS, update this value accordingly. You can also set a solid or transparent background if you prefer not to use chroma key.

### Currency Integrations
Stream Avatars supports multiple external currency systems. When enabled, viewers can spend their currency (from Mixitup, StreamElements, Streamlabs, or Twitch Channel Points) to purchase avatar customizations, enter games, and unlock items through the Viewer Panel extension. Only one currency system can be active at a time.

### Avatar Profiles
Save different avatar configurations as profiles and switch between them per stream session. This is useful if you want different avatar behaviours for different stream types (e.g., a "just chatting" profile with slower movement and more social commands vs. a "gaming" profile with more competitive mini-games).

## Tips & Tricks

- **Create avatar profiles** for different stream types — switch between "Just Chatting" and "Gaming" profiles quickly via the Stream Avatars menu
- **Use `!hideavatar`** for lurkers or moderators who don't want to appear on screen
- **Blacklist common chat bots** (e.g., StreamElements, Nightbot) in the settings so they don't spawn avatars
- **Adjust Max Avatars** lower (8–12) on lower-end PCs to maintain smooth stream performance
- **Match canvas size** to your OBS scene resolution exactly — mismatches cause scaling artifacts
- **Use `!mass {command}`** during hype moments — `!mass dance` or `!mass explode` creates great visual reactions for raids, follows, or victory moments
- **Design custom avatars** with the in-app editor or by uploading sprite sheets to create a unique brand look for your community
- **Dual PC streamers** need Stream Avatars running on a secondary Steam account — it cannot be logged into the same account on two machines simultaneously
- **Integrate with channel points** so viewers can spend points to play games, change their avatar colour, or trigger mass commands
- **LUA scripting** allows advanced customization — create custom mini-games, spawn conditions, or special event triggers unique to your stream

## Alternatives

- [Evotars](../../viewer-engagement/interactive-overlays/evotars.md) — free, browser-based alternative that is lighter-weight and simpler to set up, but lacks the mini-games and deep customization of Stream Avatars
- **Kappamon / Triiibe** — virtual stream pets that viewers can adopt and level up; a different concept (pets vs. avatars) but similar viewer engagement through interactive characters
- **VibeCast** — 3D animated viewer bubbles that show profile pictures and chat messages; more polished 3D visuals but fewer interactive gameplay features
- **Custom Streamer.bot + HTML overlay** — free community-built option using Streamer.bot to create a custom avatar overlay; offers total flexibility but requires significant technical knowledge to set up and maintain
