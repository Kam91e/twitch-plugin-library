---
title: "Crowd Control"
category: "viewer-engagement"
subcategory: "gameplay-interaction"
tags:
  - gameplay-interaction
  - viewer-control
  - in-game-effects
  - channel-points
  - bits
  - coins
  - disrupts
audience:
  - variety
  - gamers
  - esports
  - big-channels
  - community-focused
price: "Freemium"
url: "https://dashboard.twitch.tv/extensions/7nydnrue11053qmjc6g0fd6einj75p-2.5.0"
screenshots:
  - "https://crowdcontrol.live/wp-content/uploads/2025/05/Site-Preview-Twitch.png"
  - "https://crowdcontrol.live/wp-content/uploads/2023/10/Site-Preview-Features-1.png"
last-reviewed: 2026-07-29
---

# Crowd Control

> THE app that lets your viewers interact with the games you play on stream. — A desktop app and Twitch extension that lets viewers directly modify the streamer's gameplay in real time, with support for 200+ games.

![Crowd Control Twitch Extension Preview](https://crowdcontrol.live/wp-content/uploads/2025/05/Site-Preview-Twitch.png)
![Crowd Control Features Overview](https://crowdcontrol.live/wp-content/uploads/2023/10/Site-Preview-Features-1.png)

## Quick Start

Get Crowd Control up and running in a few minutes. You'll need the Twitch extension installed and the desktop app running alongside your game.

1. Go to your **Twitch Creator Dashboard** > **Extensions**, search for "Crowd Control" and install the extension
2. Download the **Crowd Control desktop app** from [crowdcontrol.live/download](https://crowdcontrol.live/download/)
3. Launch the app and log in with your Twitch account
4. Browse the supported games list (200+ games) and select the game you're playing
5. Follow the in-app game-specific setup guide — each game has tailored instructions
6. Open the **Effect Manager** in the app to customise effect prices, durations, and cooldowns
7. (Optional) Add the **Effect Overlay** as a Browser Source in OBS so viewers can see active effects
8. Share your **Interact Link** with viewers — pin it to chat or add it to your Twitch panels
9. Start your Crowd Control session and test a few effects before going live

## Features

- **Real-time gameplay effects** — Viewers can spawn enemies, give power-ups, invert controls, heal or damage the player, trigger explosions, and more, all in real time
- **200+ supported games** — Works with major titles including Minecraft, GTA V, Elden Ring, Stardew Valley, Skyrim, Baldur's Gate 3, and hundreds more
- **Disrupts** — Always-on interactions that work with ANY content, even non-game streams: jump scares, sound effects, mini-games, visual distortions, and shader effects
- **Effect Overlay** — Customisable on-screen display showing which effects are active and which viewer triggered them
- **Interact Link** — A shareable URL that lets viewers send effects from any platform without needing the Twitch extension loaded
- **Twitch Extension** — Component overlay works on both desktop and mobile Twitch
- **Channel Points integration** — Convert channel points into coins, or link channel reward redemptions directly to game effects
- **Bits integration** — Viewers can use Bits to purchase coins or trigger effects
- **Coin system** — 100 coins = $1 USD with an 80/20 revenue split in your favour
- **Free Coins for subscribers** — Twitch subscribers receive free coins automatically
- **Tips via credit card/PayPal** — Stripe-powered direct tipping for viewers without Bits
- **Tiltify integration** — Enable charity events where donations trigger in-game effects
- **Multi-platform support** — Works with Twitch, YouTube, TikTok LIVE, Kick, Facebook, and Discord
- **Effect Manager** — Add or remove effects, customise prices, durations, and cooldowns per effect
- **SDK for developers** — Create custom game packs with Crowd Control's official SDK
- **Streamer.bot integration** — Connect Crowd Control to Streamer.bot for advanced automations
- **Ghost Mode (Pro)** — Viewers send effects anonymously, adding surprise to your stream
- **Follow/Sub/Raid based effects (Max)** — Trigger special effects when viewers follow, subscribe, or raid

## Configuration

Detailed settings available in the Crowd Control desktop app and extension dashboard.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `Effect Manager` | List | All enabled | Enable/disable individual effects per game, set their prices, durations, and cooldowns |
| `Channel Points Conversion` | Integer | 100 CP = 100 coins | Conversion rate between Twitch Channel Points and Crowd Control coins |
| `Direct Reward Effects` | Integer | 3 (Free) / 12 (Pro) / ∞ (Max) | Number of channel reward redemptions you can link directly to game effects |
| `Overlay Scale` | Percentage | 100% | Resize the Effect Overlay to fit your stream layout |
| `Overlay Theme` | Select | Default | Visual theme for the Effect Overlay (light, dark, custom) |
| `Overlay Animations` | Toggle | On | Show or hide animation effects on the overlay |
| `Compact Mode` | Toggle | Off | Reduce overlay element size for a minimal look |
| `Global Cooldown` | Seconds | 10 | Minimum time between any effect being triggered |
| `Per-User Cooldown` | Seconds | 30 | Minimum time before the same viewer can trigger another effect |
| `Effect Duration` | Seconds | Varies | How long each effect lasts before reverting |
| `Subscriber Free Coins` | Integer | 500 | Number of free coins subscribers receive (amount and refresh frequency configurable) |
| `Ghost Mode` | Toggle | Off (Pro) | Hide viewer names so effects appear anonymous |
| `Auto-activate Extension` | Toggle | Off | Automatically start the Crowd Control session when you go live |

### Effect Manager

The Effect Manager is the core configuration panel. You can browse every effect available for your selected game, toggle them on or off, and set individual prices (in coins), durations (in seconds), and cooldown timers. Effects are grouped by category (e.g., Combat, Movement, Visual, Audio) so you can quickly enable or disable entire groups.

### Channel Points & Rewards

Crowd Control can integrate with Twitch Channel Points in two ways:

- **Coin conversion** — Viewers redeem channel points for Crowd Control coins at a rate you set, then spend those coins on effects.
- **Direct reward effects** — Create Twitch Channel Rewards that trigger a specific game effect immediately upon redemption. The Free tier allows 3 direct reward effects, Pro allows 12, and Max has no limit.

**Important:** Do not edit or delete channel rewards that Crowd Control creates inside the Twitch Creator Dashboard. Always use the Crowd Control app to manage them — the app needs to keep its internal state in sync.

### Effect Overlay

The overlay can be added to OBS as a Browser Source. It displays a live feed of active effects and the viewers who triggered them. You can control scale, compact mode, themes, and which elements are visible (effect icons, viewer names, animations).

## Pricing

Crowd Control operates on a **Freemium** model with three tiers:

| Tier | Price | Key Features |
|------|-------|-------------|
| **Free** | $0 | Full app access, 200+ games, Disrupts, 5 direct channel reward effects, basic Channel Points integration, coin system with 80/20 revenue split |
| **Pro** | $7.99/month | Everything in Free, plus 12 direct reward effects, adjustable Channel Points rates, free coins for subscribers, custom overlay themes, Ghost Mode (anonymous effects), early access to new features |
| **Max** | $19.99/month | Everything in Pro, plus Follow/Sub/Raid triggered effects, unlimited direct channel reward effects, unlimited Channel Points effects, unlimited TikTok effects |

The coin economy works across all tiers: viewers purchase coins (100 coins = $1 USD) and the streamer receives an 80% revenue share. Subscribers get free coins (amount configurable in Pro and Max).

## Tips & Tricks

- **Pin your Interact Link** — Add your Crowd Control Interact Link to the top of chat (use a chat command or a pinned message) so viewers can easily find it without scrolling
- **Show the Effect Overlay** — Display the overlay on stream so viewers can see what effects are active and who sent them — this encourages others to participate
- **Always test before going live** — Use the app's built-in test feature to verify every effect works with your game and setup before you start streaming
- **Integrate with Streamer.bot** — Connect Crowd Control to [Streamer.bot](https://streamer.bot/) for advanced automation chains, like triggering sound effects or scene changes when specific effects fire
- **Use Disrupts for non-game streams** — Even if you're doing Just Chatting, IRL, or creative streams, Disrupts give viewers a way to interact with jump scares, sound effects, and visual distortions
- **Balance pricing carefully** — Set effect prices high enough that the game stays playable, but low enough that viewers feel they can participate. Watch your chat for feedback and adjust
- **Ghost Mode for surprise** — Enable Ghost Mode (Pro) to hide viewer names. This adds mystery and keeps chat guessing who triggered each effect
- **Don't edit Channel Rewards manually** — Once Crowd Control creates channel rewards, always manage them inside the Crowd Control app. Editing them in the Twitch dashboard can desync the system
- **Use subscriber free coins as a perk** — Set a generous free coin amount for subscribers to make the subscription feel more valuable, especially on the Pro and Max tiers
- **Mix with Channel Points** — Enable both coin purchases and direct Channel Points reward effects to give viewers multiple ways to interact regardless of their budget

## Alternatives

- [Dixper](../viewer-engagement/gameplay-interaction/dixper.md) — Similar viewer-interaction platform with keyboard and mouse input manipulation. Higher revenue share on the developer side. Choose Dixper if you want more granular control input manipulation over pre-defined effects.
- **Game Gremlin** — Allows viewers to disable keyboard buttons, play sounds, and trigger video clips. Lighter-weight than Crowd Control. Choose Game Gremlin for simpler, audio/visual-focused interactions without full game integration.
- **Viewer Attack** — Viewers throw virtual items at the streamer's screen. Overlay-focused and lightweight. Choose Viewer Attack when you want a fun, low-commitment interaction layer without game-specific setup.
- **Streamloots** — Card and pack-based interaction platform with strong monetisation. Viewers purchase "cards" that trigger effects. Choose Streamloots if you prefer a physical-pack-opening mechanic and deeper built-in monetisation.
- **CrowdCraft** — Minecraft-specific viewer control mod. Choose CrowdCraft if you only stream Minecraft and want a dedicated, game-specific solution without the broader game support.
