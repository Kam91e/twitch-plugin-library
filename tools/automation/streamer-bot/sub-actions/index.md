---
title: "Streamer.bot — Sub-Actions"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
source: "https://docs.streamer.bot/api/sub-actions"
last-reviewed: 2026-07-31
---

# Sub-Actions

This reference covers every sub-action available in Streamer.bot, organised by category: broadcasting software (OBS Studio, Streamlabs Desktop, Meld Studio), platforms (Twitch, YouTube, Kick), hardware (Elgato), third-party integrations, and Streamer.bot's own core logic. Each entry documents its menu location, description, parameters, and output variables as sourced from the [official Streamer.bot documentation](https://docs.streamer.bot/api/sub-actions).

## Categories

- [Core](core/index.md) — Core building blocks: actions, commands, logic, globals, quotes, sounds, and file I/O.
- [Twitch](twitch/index.md) — Twitch channel management: chat, moderation, rewards, polls, predictions, and more.
- [Elgato](elgato/index.md) — Control Elgato hardware: Camera Hub, Stream Deck, and Wave Link.
- [Integrations](integrations/index.md) — Third-party integrations: TITS, Voicemod, VTube Studio, and more.
- [OBS Studio](obs-studio/index.md) — Control OBS Studio: scenes, sources, recording, and streaming.
- [Streamlabs Desktop](streamlabs-desktop/index.md) — Control Streamlabs Desktop: scenes, sources, recording, and streaming.
- [Kick](kick/index.md) — Kick channel management: chat, moderation, and channel updates.
- [Meld Studio](meld-studio/index.md) — Control Meld Studio: scenes, effects, layers, and tracks.
- [PolyPop](polypop/index.md) — Trigger PolyPop alerts (single sub-action: Trigger Alert).
- [YouTube](youtube/index.md) — YouTube stream management: titles, descriptions, chat, and moderation.
- [Streamfog](streamfog/index.md) — Control Streamfog: camera lenses and outfits (v1.0.5+ integration — not present in v1.0.4).
- [Streamer.bot](streamerbot/index.md) — Remote communication between Streamer.bot instances.
- [Speaker.bot](speakerbot.md) — Text-to-speech control for Speaker.bot.
- [Settings](settings.md) — Streamer.bot application settings: colors, credits, and voice control.

## Trigger Alert (single-item group — the group IS the sub-action)

**Location:** `PolyPop > Trigger Alert`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-PolyPop-Trigger-Alert-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger a PolyPop alert from Streamer.bot

**Parameters:** `Alert Name` (Text, required) — must match an alert configured in the PolyPop WebSocket plugin

**Variables:** `Name` (becomes the Alert Title in PolyPop), `Value` (becomes the Alert Value in PolyPop)

Full details and connection model: [PolyPop sub-actions](polypop/index.md).
