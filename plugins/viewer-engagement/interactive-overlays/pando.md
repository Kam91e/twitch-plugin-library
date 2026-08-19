---
title: "Pando"
category: "viewer-engagement"
subcategory: "interactive-overlays"
tags:
  - virtual-pet
  - pixel-art
  - viewer-engagement
  - interactive-overlay
  - channel-points
  - bits
  - chatbot
  - AI-personality
audience:
  - variety
  - just-chatting
  - beginners
  - community-focused
price: "Freemium"
url: "https://dashboard.twitch.tv/extensions/fubh5p0lrwei0v4w4ncs2rnlqw455h"
screenshots:
  - "https://mypando.tv/_next/static/media/hero.62385919.png"
  - "https://mypando.tv/_next/static/media/petcafe.e69f76a8.png"
  - "https://mypando.tv/_next/static/media/speech-bubble.e0dcb0d3.png"
last-reviewed: 2026-07-29
---

# Pando

> Adopt a free pixel pet that lives on your Twitch stream. Viewers can feed it, pet it and play games with it using Channel Points, Bits, subs and more.

![Pando hero overview showing pet overlay on stream](https://mypando.tv/_next/static/media/hero.62385919.png)
![Pet Cafe Twitch Extension component view](https://mypando.tv/_next/static/media/petcafe.e69f76a8.png)
![Speech bubble interaction example](https://mypando.tv/_next/static/media/speech-bubble.e0dcb0d3.png)

## Quick Start

Get Pando running on your stream in a few minutes:

1. Go to [mypando.tv](https://mypando.tv/) and click **Choose your pet** to select a species and give it a name.
2. On the Pando dashboard, copy the **OBS Browser Source URL** provided.
3. In OBS Studio, Streamlabs, or Lightstream, add a new **Browser Source** and paste the URL. Set the width/height to match your stream (1920×1080 recommended).
4. On the [Twitch Creator Dashboard](https://dashboard.twitch.tv/extensions/fubh5p0lrwei0v4w4ncs2rnlqw455h), install and activate the **Pando Extension**. Place it in the **Component** slot (appears above your stream) or **Panel** slot (below the stream).
5. Configure **Channel Points redemptions** — set the name, cost, and cooldown for the Treat, Hydrate, and Rock Paper Scissors actions.
6. Customise **reaction messages** for raids, subscriptions, follows, and Bits/cheers.
7. Go live — your pet appears in the OBS overlay, and the Pet Cafe appears on your Twitch page.

## Features

- **9+ pixel art pets** — Axolotl, Bulldog, Cat, Dragon, Pando, Fox, Ghost, Raccoon, Xenomorph, and more
- **Custom naming** — Give your pet a unique name that viewers will use when interacting
- **Browser source overlay** — Works with OBS Studio, Streamlabs, and Lightstream
- **Pet Cafe Twitch Extension** — Component (overlay) or Panel placement for the Twitch page
- **Channel Points integration** — Treats, hydration, Rock Paper Scissors mini-game, experience/leveling system, and colour unlocks
- **Bits integration** — Buy treats and food for the pet; unlock Daily Special and holiday colour variants
- **Twitch event reactions** — Automatic responses to raids, subscriptions, follows, Bits/cheers, and first-time chatters with a welcome message
- **Text-to-Speech** — Pet speaks out loud (Brian voice included free)
- **Pet leveling system** — Pet gains experience from viewer interactions and unlocks new colour variants as it levels up
- **Pre-made reaction presets** — Quick-setup reactions for common stream events
- **Pando VIP** — (Twitch sub to Pando_dev) Custom AI personality powered by Anthropic Claude, chat commands (!joke, !fact), Power-Ups, additional TTS voices, pet memories that recognise repeat viewers, and a stream recap feature

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Pet species | dropdown | Axolotl | Choose from 9+ pixel art species |
| Pet name | string | — | The name viewers will see and use |
| Channel Points redemptions | object | Treat, Hydrate, RPS | Name, cost, and cooldown per redemption |
| Reaction messages | text | Preset messages | Custom messages for follows, subs, raids, Bits |
| TTS | toggle | On | Enable or disable text-to-speech for pet messages |
| TTS voice | dropdown | Brian | Voice selection (additional voices with VIP) |
| Cafe placement | dropdown | Component | Component (overlay slot) or Panel (below stream) |
| Cafe theme | dropdown | Cozy | Cozy or Intergalactic visual theme |
| AI personality instructions | text (VIP) | — | Custom prompt that defines how the pet's AI talks and behaves |
| Chat commands | toggle (VIP) | Off | Enable !joke, !fact, and other interactive chat commands |
| Idle messages | text (VIP) | — | Messages the pet says during quiet moments on stream |

### Pet Selection & Naming
Choose a species that fits your stream's personality. The name is displayed in speech bubbles, the Pet Cafe, and AI conversations. You can change both at any time from the Pando dashboard.

### Channel Points Redemption
Each interaction (Treat, Hydrate, Rock Paper Scissors) can have its own Channel Point cost and cooldown. Set costs low enough that viewers engage frequently, but high enough that levelling up feels rewarding.

### Reaction Messages
Customise what your pet says when a viewer follows, subscribes, raids, or cheers Bits. Use `{user}` as a placeholder for the viewer's name. Pre-made presets are available for quick setup.

### Pet Cafe Placement
- **Component** — Appears as an overlay above your stream on the Twitch page (recommended for maximum visibility)
- **Panel** — Appears below the stream in the panels section (less intrusive but easier to miss)

## Pricing

Pando operates on a **Freemium** model:

| Tier | Price | Key Features |
|------|-------|-------------|
| **Free** | $0 | Full pet overlay, all 9+ pet species, Channel Points integration, Bits integration, Twitch event reactions, basic TTS (Brian voice), leveling system, pre-made presets |
| **Pando VIP** | Twitch subscription to `Pando_dev` | Custom AI personality (Anthropic Claude), chat commands (!joke, !fact), Power-Ups, additional TTS voices, pet memories/viewer recognition, stream recap feature |

The free tier is fully functional on its own — VIP adds AI-driven interactivity and personalisation for streamers who want a more dynamic, conversational pet.

## Tips & Tricks

- **Use Component placement** — Place the Pet Cafe Extension in the Component slot (above stream) rather than Panel for far more viewer visibility and engagement.
- **Talk about the Daily Special** — During your stream, mention the Daily Special colour goal to encourage Bits donations from your community.
- **Works as a basic alert system** — Small streamers can use Pando's built-in reactions for follows, subs, and raids instead of a separate alert tool, reducing overlay clutter.
- **Customise the AI personality** — (VIP) Write a personality prompt that matches your stream's tone, whether that's silly, wholesome, or chaotic. The pet will adopt that voice in chat and speech bubbles.
- **Celebrate colour unlocks** — When the pet levels up and unlocks a new colour, clip the moment and share it with your community. It turns levelling into a shared event.
- **Viewer recognition** — (VIP) The pet remembers returning viewers' names and preferences, making each interaction feel personal and encouraging loyalty.
- **Pair with minimal alerts** — Since Pando already reacts to follows, subs, and raids, you can reduce redundancy by turning off those events in other alert tools.

## Alternatives

- [Dragon Pets](./dragon-pets.md) — Virtual dragon pets for viewers to feed, breed, and battle. A good fit if you want a more game-like pet system with competitive elements.
- **TwiPet** — Desktop virtual pet with Twitch chat and Bits integration. Choose this if you want a standalone desktop application rather than a browser source overlay.
- **StreamPet** — Interactive live pet overlay for Twitch and TikTok. A solid choice if you multistream and want pet engagement across both platforms.
- **VPet Manager** — Customisable virtual pet with evolution paths. Better if you want deep pet customisation and branching evolution mechanics.
