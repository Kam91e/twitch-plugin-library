---
title: "Streamer.bot — Triggers: Twitch > Charity"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/charity"
last-reviewed: 2026-07-31
---

# Twitch — Charity

> Triggers for the Twitch charity campaign lifecycle: started, donation, progress, and completed events.

## Charity Completed

**Location:** `Twitch > Charity > Charity Completed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the Twitch charity completed event

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Charity Donation

**Location:** `Twitch > Charity > Charity Donation`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Charity-Charity-Donation-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for the Twitch charity donation event

**Parameters:** App-verified from `trigger-Twitch-Charity-Charity-Donation-dialog-uia.txt`, `trigger-Twitch-Charity-Charity-Donation-dialog.png` (Add Trigger - Twitch > Charity > Charity Donation, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Charity Progress

**Location:** `Twitch > Charity > Charity Progress`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the Twitch charity progress event

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Charity Started

**Location:** `Twitch > Charity > Charity Started`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for the Twitch charity started event

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
