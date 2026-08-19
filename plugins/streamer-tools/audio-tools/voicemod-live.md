---
title: "Voicemod Live"
category: "streamer-tools"
subcategory: "audio-tools"
tags:
  - voice-changer
  - bits
  - interactive
  - audio
  - monetisation
  - real-time
audience:
  - variety
  - gamers
  - just-chatting
  - creative
  - vtubers
price: "Free"
url: "https://dashboard.twitch.tv/extensions/smumxpxfxapx3ij18q7pru5lwal4yw"
screenshots: []
last-reviewed: 2026-07-27
---

# Voicemod Live

> Let your viewers change your voice in real time during your stream using Bits — a Twitch extension that turns your voice into an interactive show.

## Quick Start

1. Download and install the [Voicemod app](https://www.voicemod.net/) (V3 or later)
2. Open Voicemod, go to the **Extensions** section on the left sidebar, and click **Connect**
3. Authorise Voicemod Live with your Twitch account
4. Go to your [Twitch Creator Dashboard](https://dashboard.twitch.tv/), search for **Voicemod Live** in Extensions, and click **Install**
5. Back in Voicemod, select voice filters from any Soundboard to add to your extension collection
6. Set Bit prices and duration for each voice effect
7. Activate the extension as a Panel or Component on your channel — you're live!

## Features

- **Viewer-triggered voice effects** — Chat chooses from voices you've pre-selected and changes your voice in real time
- **All Voicemod voices supported** — Chipmunk, Robot, Clown, Musical, and hundreds of community-created voices
- **Custom Bit pricing** — Set different Bit costs for different voices; 80% revenue share per Bit
- **Duration control** — Decide how long each voice effect lasts when activated (e.g. 10, 30, or 60 seconds)
- **Subscriber-only options** — Restrict certain voice effects to subscribers as an extra perk
- **Leaderboard and badges** — Active viewers earn chat badges and leaderboard positions
- **Works with any streaming software** — Compatible with OBS, Streamlabs, Xsplit, and more
- **Voicelab integration** — Create custom voices using Voicemod's Voicelab feature and make them available to viewers

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Voice selection | array | — | Choose which voices from your Soundboards are available to viewers |
| Bit cost per voice | number | 10 | Number of Bits required to activate a voice effect |
| Duration per voice | number (seconds) | 15 | How long each voice effect lasts |
| Subscriber only | boolean | `false` | Restrict specific voices to subscribers only |
| Buffer time | number (seconds) | 5 | Minimum time between voice activations |

Configuration is done inside the Voicemod app under the **Extensions** tab, and through the Twitch extension panel.

### Adding Voices

1. In Voicemod, go to the Extensions tab
2. Select a Soundboard from your collection
3. All voices from that Soundboard are added to your extension lineup
4. Each voice can have its own Bit price and duration

Custom voices created in Voicelab can also be made available to viewers.

### Panel vs Component Placement

- **Panel:** Visible even when offline — remember to pause the extension when not streaming to prevent accidental viewer charges
- **Component:** Only available during live broadcasts, shown in the stream player

## Tips & Tricks

- **Use voices for specific moments:** Reserve the funniest voices for hype moments — viewers learn when to trigger them and it builds anticipation
- **Create a "punishment" soundboard:** Add silly voices like Chipmunk or Helium as a playful penalty when you lose a game or fail a challenge
- **Combine with Voicelab:** Create a unique custom voice that only your channel has — makes for great clip-worthy moments
- **Set higher Bit costs for disruptive voices:** Voices that make it hard to speak clearly (like quick pitch cycling) should cost more Bits to prevent constant spam
- **Duration matters:** Shorter durations (5–10s) work better for quick reactions; longer durations (30–60s) are better for comedy bits

## Alternatives

- [Sound Alerts](../streamer-tools/alerts/sound-alerts.md) — audio-based interaction where viewers play sounds rather than changing your voice
- [Tangia Interactions](../viewer-engagement/all-in-one-interactions/tangia.md) — all-in-one engagement with AI TTS voice cloning and interactive overlays
- [Clownfish Voice Changer](https://clownfish-translator.com/voicechanger/) — free desktop voice changer, but without Bits-based viewer control
