---
title: "Streamer.bot — Sub-Actions: Twitch > Polls"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/polls"
last-reviewed: 2026-07-31
---

# Twitch — Polls

> Sub-actions to create, check, archive and terminate Twitch Polls.

## Archive Active Poll

**Location:** `Twitch > Polls > Archive Active Poll`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Archives an active poll. The poll ends and gets hidden immediately. Note: the sub-action preview is called "Terminate Poll" too, just like for the "Terminate Active Poll" sub-action.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Create Poll

**Location:** `Twitch > Polls > Create Poll`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Polls-Create-Poll-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Create a Twitch poll

**Parameters:** App-verified from `subaction-Twitch-Polls-Create-Poll-dialog-uia.txt`, `subaction-Twitch-Polls-Create-Poll-dialog.png` (config dialog, size unknown): `Question` (text), `Choices (Minimum of 2, maximum of 5)` (list), `Add` (button), `Del` (text), `Channel Points Per Vote, leave empty or set to 0 to disable` (text), `Duration, defaults to 60 if empty or unable to parse` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Active Poll

**Location:** `Twitch > Polls > Get Active Poll`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Check if a poll is currently active

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Terminate Active Poll

**Location:** `Twitch > Polls > Terminate Active Poll`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Ends an active poll, but does not hide it immediately.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
