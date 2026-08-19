---
title: "Streamer.bot — Sub-Actions: Twitch > Ads"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/ads"
last-reviewed: 2026-07-31
---

# Twitch — Ads

> Sub-actions to manage Twitch ads: ad schedule, pre-roll free time, running commercials and snoozing ad breaks.

## Get Ad Schedule

**Location:** `Twitch > Ads > Get Ad Schedule`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Fetch information about your current Twitch ad schedule

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Get Pre-roll Free Time

**Location:** `Twitch > Ads > Get Pre-roll Free Time`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Fetch information about your current Twitch pre-roll ads

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Run Commercial

**Location:** `Twitch > Ads > Run Commercial`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Ads-Run-Commercial-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Start an ad break on your Twitch channel

**Parameters:** App-verified from `subaction-Twitch-Ads-Run-Commercial-dialog-uia.txt`, `subaction-Twitch-Ads-Run-Commercial-dialog.png` (Add SubAction - Twitch > Ads > Run Commercial, ~600×140): `Duration` (select), `seconds` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Snooze Ad

**Location:** `Twitch > Ads > Snooze Ad`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Snooze the current ad break on Twitch

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
