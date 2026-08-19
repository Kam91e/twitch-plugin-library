---
title: "Streamer.bot — Triggers"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
source: "https://docs.streamer.bot/api/triggers"
app-evidence: "/mnt/d/Twitch/shots/triggers-add-uia.txt"
last-reviewed: 2026-08-03
---

# Triggers

This reference covers every trigger available in Streamer.bot, organised by category: broadcasting software (OBS Studio, Streamlabs Desktop, Meld Studio), platforms (Twitch, YouTube, Kick, Trovo), hardware (Elgato), third-party integrations, and Streamer.bot's own core events. Each entry documents its menu location, description, parameters, and output variables as sourced from the [official Streamer.bot documentation](https://docs.streamer.bot/api/triggers).

## Sources

The **Add Trigger** picker in the v1.0.4 app exposes **11 sources** (captured in `triggers-add-uia.txt`):

1. [Core](core/index.md) — core Streamer.bot events: startup, commands, groups, websockets, and more. (~13+ types per official docs)
2. **Custom** — custom events fired from C# (`CPH.TriggerEvent` / `CPH.TriggerCodeEvent`); documented below (see Custom Code Event / Custom). (3 types per official docs)
3. [Elgato](elgato/index.md) — Elgato hardware events: Camera Hub, Wave Link, and Stream Deck. (96 types per official docs)
4. [Integrations](integrations/index.md) — third-party integration events: donations, TTS, bots, and more. (114 types per official docs)
5. [Kick](kick/index.md) — Kick events: channel, subscriptions, chat, and moderation. (26 types per official docs)
6. [Meld Studio](meld-studio.md) — Meld Studio events: connection, streaming, recording, and scene changes. (9 types per official docs)
7. [OBS Studio](obs-studio.md) — OBS Studio events: connection, streaming, recording, and scene changes. (10 types per official docs)
8. [Streamlabs Desktop](streamlabs-desktop.md) — Streamlabs Desktop events: connection, streaming, recording, and scene changes. (8 types per official docs)
9. **Trovo** — Trovo events: channel, chat, and channel updates. Present in the v1.0.4 app picker but **absent from the official docs index**, so no per-type docs URL is available (types not yet documented).
10. [Twitch](twitch/index.md) — Twitch events: channel, chat, subscriptions, moderation, raids, hype trains, and more. (152 types per official docs)
11. [YouTube](youtube/index.md) — YouTube events: broadcasts, chat, membership, and channel updates. (31 types per official docs)

> **Notably absent: PolyPop** — the PolyPop integration supports **no triggers** ("No triggers are supported by this integration" per the official docs). It is not in the app picker or the docs index; see [PolyPop triggers](polypop.md).

> **App vs docs note:** the official docs index lists **10** trigger sources (no Trovo), while the running v1.0.4 app includes **Trovo** in its picker. The app is the source of truth for which sources exist in the picker; the official docs remain the source of truth for per-source trigger types and parameters.

## Custom Code Event

**Location:** `Custom > Custom Code Event`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Custom-Custom-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Custom Code Event. This event can **only** be triggered with the `CPH.TriggerCodeEvent` C# method. You can use two methods: with the first method you can use the variables of the current action; with the second method you can specify a dictionary of variables for the trigger. When registering a trigger it ends up in the `Custom` folder under triggers. You can nest the trigger in multiple folders by using the `catergories` parameter. Use the `triggerName` parameter to give the trigger a name, and the `eventName` parameter for a name only used in C# for triggering the method.

**Parameters:** Not documented in official docs

**Variables:** Variables are dependent on the custom event.

## Custom

**Location:** `Custom > Custom`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Custom-Custom-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Custom Event. This event can **only** be triggered with the `CPH.TriggerEvent` C# method.

**Parameters:** App-verified from `trigger-Custom-Custom-dialog-uia.txt`, `trigger-Custom-Custom-dialog.png` (Add Trigger - Custom > Custom, ~600×181): `Event Name` (text), `Leaving Event Name empty is considered a catch-all and will trigger on any custom event name.` (button); Ok/Cancel present.

**Variables:** Variables are dependent on the custom event.
