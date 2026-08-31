---
title: "7TV"
category: "chat-and-overlays"
type: "Browser Extension"
platforms:
  - Chrome
  - Firefox
  - Edge
  - Opera
price: "Freemium"
url: "https://7tv.app/"
last-reviewed: 2026-08-31
---

# 7TV

> A free browser extension and web platform that adds 1,000 emote slots, real-time emote management, and next-generation image formats to Twitch chat.

## Overview

7TV is a hybrid web platform and browser extension that extends Twitch chat with a massive library of emotes and powerful management tools. Viewers install the extension to see 7TV emotes inline, while streamers use the web dashboard at [7tv.app](https://7tv.app/) to browse, upload, and organise emotes into sets that update instantly across all viewers. The platform serves over 2,000,000 daily unique users and hosts 1,000,000+ public emotes (Source: https://7tv.app). It also natively renders FrankerFaceZ emotes, eliminating the need for a separate FFZ extension.

## Key Features

- **1,000 free emote slots per channel** — everyone gets 1,000 customisable channel emote slots at no cost (Source: https://7tv.app)
- **Emote Sets** — group emotes into custom, shareable, and swappable sets for different moods, events, or games (Source: https://7tv.app)
- **Global and channel emotes** — browse 1,000,000+ public community emotes or upload your own (Source: https://7tv.app)
- **Custom emote names** — assign any alphanumeric code to your emotes for easy recall
- **Real-time updates** — adding or removing emotes takes effect instantly for all viewers, no page refresh needed (Source: https://7tv.app)
- **Next-gen formats** — native support for WebP and AVIF for faster loading and lower bandwidth (Source: https://7tv.app)
- **Animated emotes** — supports GIF, WebP, and animated formats with up to 150 frames (Source: could not be verified on 7tv.app directly — based on community documentation)
- **Emote picker** — type `;` in chat to trigger the built-in emote menu and search by name
- **FFZ native rendering** — renders FrankerFaceZ emotes without needing the separate FFZ extension
- **Wide and zero-width emotes** — create creative multi-emote layouts and overlays in chat (Source: https://7tv.app/emotes, community docs)
- **Highlight system** — highlight messages by username, badges, or keywords
- **Stream stats overlay** — show real-time latency, resolution, and bitrate on stream
- **Multi-platform** — works on Twitch, Kick, and YouTube (Source: https://7tv.app)

## Installation / Setup

### For Viewers

1. Visit [7tv.app](https://7tv.app/) and click **Download**
2. Install the browser extension for your browser (Chrome, Firefox, Edge, Opera)
3. Refresh any open Twitch tabs — 7TV emotes now appear automatically in chat
4. Without the extension, 7TV emotes display as plain text codes (e.g., `:CatJAM:`) in chat

### For Streamers — Adding Ready Emotes

1. Visit [7tv.app](https://7tv.app/) and sign in with your Twitch account
2. Click **Emote Sets** and create a new set — name it after your channel
3. Browse the [public emote library](https://7tv.app/emotes) or search for specific emotes
4. Click **Add to Set** on any emote and choose your channel set
5. Go to your set's settings and set it as the **Active/Default set** for your channel
6. Your emotes are now live in chat — viewers type the emote code to use them

### For Streamers — Uploading Own Emotes

1. Go to the [7TV Dashboard](https://7tv.app/dashboard) and log in with Twitch
2. Navigate to your Emote Set and click **Upload**
3. Select an image file — accepted formats include PNG, GIF, WebP, and AVIF; max file size 2.5 MB (Source: could not be verified on 7tv.app directly — based on community documentation; the platform homepage confirms WebP and AVIF support)
4. Enter an emote code (the text viewers type to use the emote)
5. Confirm the upload — the emote activates instantly in your set for all viewers

## Twitch Integration

7TV works by injecting emote rendering and chat enhancements directly into the Twitch web interface. The extension modifies the chat DOM to replace emote codes with rendered images and adds its own emote picker. 7TV emotes are only visible to viewers who have the extension installed — without it, emote codes appear as plain text. 7TV also natively renders FrankerFaceZ (FFZ) emotes, so viewers with 7TV don't need the separate FFZ extension. BetterTTV emotes can be rendered if the BTTV extension is also installed (the 7TV extension has a BTTV integration toggle). 7TV also supports Kick and YouTube in addition to Twitch.

## Configuration

### Emote Set Management (Web Platform)

| Setting | Description |
|---------|-------------|
| Set Name | A label for your emote set (e.g., "Main", "Sub Sunday", "Meme Night") |
| Active/Default Set | Which set is active on your channel — only one default at a time |
| Moderator Permissions | Grant trusted moderators the ability to add/remove emotes from your sets |
| Editor Permissions | Full edit access to modify, create, and delete sets |
| Slot Usage | Track how many of your 1,000 slots are used per set |

### Browser Extension Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Emote Scale | slider | `100%` | Adjust the size of emotes displayed in chat |
| Highlight Messages | toggle | `Off` | Enable message highlighting by username, badge, or keyword |
| Stream Stats | toggle | `Off` | Show an overlay with stream latency, resolution, and bitrate |
| FFZ Integration | toggle | `On` | Enable native rendering of FrankerFaceZ emotes |
| BTTV Integration | toggle | `On` | Enable BetterTTV emote rendering (requires BTTV extension) |

### Chat Commands (Moderators)

| Command | Usage | Description |
|---------|-------|-------------|
| `/search <query>` | `/search pogchamp` | Search the global emote library |
| `/add <code>` | `/add CatJam` | Add an emote to the channel's active set |
| `/remove <code>` | `/remove CatJam` | Remove an emote from the channel's active set |
| `/rename <old> <new>` | `/rename CatJam DogJam` | Rename an emote in the active set |
| `/refresh` | `/refresh` | Force-refresh the emote set for all viewers |
| `/nuke <emote>` | `/nuke CatJam` | Remove all instances of an emote from chat history (mod only) |

### Paid Subscription

7TV offers a subscription (~$3.99/month, Source: https://7tv.app/store) that unlocks personal emotes only you and your subscribers can use, custom name paints for your username, an animated profile picture, an exclusive subscriber badge, and zero-width emote access for layered chat art.

## Tips & Tricks

- **Create themed sets for events** — build separate emote sets for subathons, holiday streams, or game-specific broadcasts and swap them instantly from [7tv.app](https://7tv.app/)
- **Quick add from library** — right-click any emote on [7tv.app/emotes](https://7tv.app/emotes) to instantly add it to any of your emote sets without opening the set editor
- **Global emotes work without streamer setup** — even if a streamer hasn't configured 7TV, viewers can still see global 7TV emotes in chat
- **Mobile use requires third-party apps** — 7TV has no official mobile app. Use **Chatsen** (iOS) or **Frosty** (Android) for 7TV emote support on mobile
- **Emote picker shortcut** — type `;` in any Twitch chat to open the 7TV emote picker, then keep typing to search — no need to click a button
- **Combine with BetterTTV** — BTTV has a dedicated 7TV integration toggle in its settings. Enable it to see both platforms' emotes seamlessly
- **1,000 slots per channel** — each channel gets its own pool. If you stream on multiple channels, each gets 1,000 independent slots

## Alternatives

- **[7TV Emotes (plugin doc)](../../plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md)** — the same platform documented from the Twitch Extension panel perspective. This `tools/` doc covers the web platform and emote-giving workflows; the `plugins/` doc covers installing the 7TV Twitch Extension panel and quick-start setup.
- **[BetterTTV](betterttv.md)** — the most widely installed third-party emote platform with the largest global emote library. Choose BTTV if you want maximum viewer adoption, or use both together via 7TV's BTTV integration toggle.
- **[FrankerFaceZ (FFZ)](https://frankerfacez.com)** — the original third-party emote platform with deep chat customisation and a long-standing community. Choose FFZ if you prefer older, well-established emotes and custom chat styling.
- **Emotes Showcase / MyEmotes** — Twitch Panel Extensions that display a channel's existing emotes in a panel. Different use case: display rather than management.
