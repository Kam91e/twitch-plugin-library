---
title: "Streamer.bot — Triggers: Twitch > Raid"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - twitch
source: "https://docs.streamer.bot/api/triggers/twitch/raid"
last-reviewed: 2026-07-31
---

# Twitch — Raid

> Triggers for Twitch raids: incoming raids to your channel and outgoing raids sent to another channel.

## Raid Cancelled

**Location:** `Twitch > Raid > Raid Cancelled`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Raid from your channel to another channel is Cancelled

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Raid

**Location:** `Twitch > Raid > Raid`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Twitch-Raid-Raid-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when you get raided on Twitch

**Parameters:** App-verified from `trigger-Twitch-Raid-Raid-dialog-uia.txt`, `trigger-Twitch-Raid-Raid-dialog.png` (Add Trigger - Twitch > Raid > Raid, ~600×157): `Min` (text), `Max` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Raid Send

**Location:** `Twitch > Raid > Raid Send`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Triggers when the viewers successfully leave the broadcasters chat and arrive in raidUser's stream.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Raid Start

**Location:** `Twitch > Raid > Raid Start`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Twitch Raid from your channel to another channel is Started

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
