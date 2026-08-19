---
title: "Streamer.bot — Triggers: Kick > Channel"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - kick
source: "https://docs.streamer.bot/api/triggers/kick/channel"
last-reviewed: 2026-07-31
---

# Kick — Channel

> Triggers for your Kick channel: follows, stream online/offline, and viewer count updates.

## Follow

**Location:** `Kick > Channel > Follow`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Kick Follow

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Stream Offline

**Location:** `Kick > Channel > Stream Offline`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when your Kick stream ends

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Stream Online

**Location:** `Kick > Channel > Stream Online`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when your Kick stream starts

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Viewer Count Update

**Location:** `Kick > Channel > Viewer Count Update`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Kick-Channel-Viewer-Count-Update-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when your Kick viewer count updates

**Parameters:** App-verified from `trigger-Kick-Channel-Viewer-Count-Update-dialog-uia.txt`, `trigger-Kick-Channel-Viewer-Count-Update-dialog.png` (Add Trigger - Kick > Channel > Viewer Count Update, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
