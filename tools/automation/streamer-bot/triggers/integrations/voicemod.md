---
title: "Streamer.bot — Triggers: Integrations > Voicemod"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - integrations
source: "https://docs.streamer.bot/api/triggers/integrations/voicemod"
last-reviewed: 2026-07-31
---

# Integrations — Voicemod

> Triggers for Voicemod connection state, soundboard changes, and voice loads.

## Connected

**Location:** `Integrations > Voicemod > Connected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when StreamerBot connects to VoiceMod

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Disconnected

**Location:** `Integrations > Voicemod > Disconnected`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when StreamerBot disconnects from VoiceMod

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Soundboard Changed

**Location:** `Integrations > Voicemod > Soundboard Changed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VoiceMod-Soundboard-Changed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers whenever the Soundboard has been changed

**Parameters:** App-verified from `trigger-Integrations-VoiceMod-Soundboard-Changed-dialog-uia.txt`, `trigger-Integrations-VoiceMod-Soundboard-Changed-dialog.png` (Add Trigger - Integrations > VoiceMod > Soundboard Changed, ~600×181): `Soundboard Name` (text), `Leaving soundboard name empty is considered a catch-all and will trigger on any soundboard changed event.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Voice Loaded

**Location:** `Integrations > Voicemod > Voice Loaded`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Integrations-VoiceMod-Voice-Loaded-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Triggers whenever a voice has been loaded.

**Parameters:** App-verified from `trigger-Integrations-VoiceMod-Voice-Loaded-dialog-uia.txt`, `trigger-Integrations-VoiceMod-Voice-Loaded-dialog.png` (Add Trigger - Integrations > VoiceMod > Voice Loaded, ~600×181): `Voice Name` (text), `Leaving voice name empty is considered a catch-all and will trigger on any voice loaded event.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
