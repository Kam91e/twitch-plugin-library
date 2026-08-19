---
title: "Streamer.bot — Triggers: Elgato > Camera Hub"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - elgato
source: "https://docs.streamer.bot/api/triggers/elgato/camera-hub"
last-reviewed: 2026-07-31
---

# Elgato — Camera Hub

> Triggers fired by the Elgato Camera Hub integration in Streamer.bot: connection state and events from the Prompter and connected webcams.

Camera Hub triggers fire when Elgato Camera Hub devices change state: connection changes for the integration itself, plus Prompter events (auto-scroll, display appearance, crosshair, script/chapter selection) and webcam events (exposure, focus, white balance, orientation effects, image adjustments). Official documentation: <https://docs.streamer.bot/api/triggers/elgato/camera-hub>

## Groups

- [Prompter](prompter.md) — Auto-scroll, display appearance, crosshair and script/chapter selection events for the Elgato Camera Hub Prompter.
- [Webcam](webcam.md) — Exposure, focus, white balance, orientation effects and image adjustment events for Elgato Camera Hub webcams.

## Camera Hub

### Connected

**Location:** `Elgato > Camera Hub > Connected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** When the CameraHub integration has connected

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

### Disconnected

**Location:** `Elgato > Camera Hub > Disconnected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** When the CameraHub integration has been disconnected

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
