---
title: "Streamer.bot — Sub-Actions: Twitch > Tags"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/tags"
last-reviewed: 2026-07-31
---

# Twitch — Tags

> Sub-actions to add, remove, clear and set the tags on your Twitch channel.

## Add Channel Tag

**Location:** `Twitch > Tags > Add Channel Tag`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Tags-Add-Channel-Tag-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Add a tag to your channel.

**Parameters:** `Tag` — The name of the tag.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Tags-Add-Channel-Tag-dialog-uia.txt`, `subaction-Twitch-Tags-Add-Channel-Tag-dialog.png` (Add SubAction - Twitch > Tags > Add Channel Tag, ~600×280): `Tag` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Clear Channel Tags

**Location:** `Twitch > Tags > Clear Channel Tags`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Clear the tags from your channel.

**Parameters:** App-verified from `subaction-Twitch-Tags-Add-Channel-Tag-dialog-uia.txt`, `subaction-Twitch-Tags-Add-Channel-Tag-dialog.png` (Add SubAction - Twitch > Tags > Add Channel Tag, ~600×280): `Tag` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Remove Channel Tag

**Location:** `Twitch > Tags > Remove Channel Tag`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Tags-Remove-Channel-Tag-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Remove a tag from your channel.

**Parameters:** `Tag` — The name of the tag.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Tags-Remove-Channel-Tag-dialog-uia.txt`, `subaction-Twitch-Tags-Remove-Channel-Tag-dialog.png` (Add SubAction - Twitch > Tags > Remove Channel Tag, ~600×280): `Tag` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Channel Tags

**Location:** `Twitch > Tags > Set Channel Tags`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Tags-Set-Channel-Tags-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the tags on your channel.

**Parameters:** `Tags` — List; enter all the new tags. Maximum: `10`.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Tags-Set-Channel-Tags-dialog-uia.txt`, `subaction-Twitch-Tags-Set-Channel-Tags-dialog.png` (Add SubAction - Twitch > Tags > Set Channel Tags, ~600×385): `Tags (Maximum of 10)` (list), `Add` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
