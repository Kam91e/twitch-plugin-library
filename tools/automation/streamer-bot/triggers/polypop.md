---
title: "Streamer.bot — Triggers: PolyPop"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - polypop
source: "https://docs.streamer.bot/guide/broadcasters/polypop"
last-reviewed: 2026-08-06
---

# PolyPop

The PolyPop integration exposes **no triggers**.

The official Streamer.bot docs state this explicitly: *"No triggers are supported by this integration"* (see the [PolyPop guide](https://docs.streamer.bot/guide/broadcasters/polypop)). The `/api/triggers` index page has no PolyPop section, the `/en/Triggers/PolyPop` path returns 404, and the `streamerbot-wiki` repo's `Triggers/` folder contains no PolyPop file.

This matches the running **v1.0.4** app: the Add Trigger picker's source list contains no PolyPop entry (verified in `triggers-add-uia.txt`).

If you need to react to PolyPop events, the supported path is the opposite direction — Streamer.bot triggers **PolyPop alerts** via the [Trigger Alert sub-action](../sub-actions/polypop/index.md), and poly-pop-driven logic is typically wired through that sub-action plus Streamer.bot's own events.
