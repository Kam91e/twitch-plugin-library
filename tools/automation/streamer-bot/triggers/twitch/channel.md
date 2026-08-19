---
title: "Streamer.bot — Triggers: Twitch > Channel"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/channel"
last-reviewed: 2026-07-31
---

# Twitch — Channel

> Triggers for your Twitch channel state: follows, stream online and offline, and viewer count updates.

## Follow

**Location:** `Twitch > Channel > Follow`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Twitch Follow

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Stream Offline

**Location:** `Twitch > Channel > Stream Offline`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when your stream on Twitch is ended

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Stream Online

**Location:** `Twitch > Channel > Stream Online`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when your stream on Twitch is started

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Viewer Count Update

**Location:** `Twitch > Channel > Viewer Count Update`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Channel-Viewer-Count-Update-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when your Twitch viewer count updates

**Parameters:** App-verified from `trigger-Twitch-Channel-Viewer-Count-Update-dialog-uia.txt`, `trigger-Twitch-Channel-Viewer-Count-Update-dialog.png` (Add Trigger - Twitch > Channel > Viewer Count Update, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
