---
title: "Streamer.bot — Sub-Actions: Twitch > Channel"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/channel"
last-reviewed: 2026-07-31
---

# Twitch — Channel

> Sub-actions to manage your Twitch channel: viewer counts, clips, stream markers, branded content, game and title.

## Add Viewer Count

**Location:** `Twitch > Channel > Add Viewer Count`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Populate a variable with your current Twitch viewer count

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Create Clip

**Location:** `Twitch > Channel > Create Clip`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Channel-Create-Clip-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Create a Twitch Clip

**Parameters:** App-verified from `subaction-Twitch-Channel-Create-Clip-dialog-uia.txt`, `subaction-Twitch-Channel-Create-Clip-dialog.png` (Add SubAction - Twitch > Channel > Create Clip, ~600×241): `Clip Title` (text), `Duration` (text), `Duration can contain either a specific value between 5 and 60 (inclusive), or a %variable% that will be parsed.  This is in seconds, and if left blank, the default is 30s.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Create Stream Marker

**Location:** `Twitch > Channel > Create Stream Marker`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Channel-Create-Stream-Marker-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger creation of a Stream Marker on Twitch. Use this to signify an important event, or as a reminder for a point in the stream you'd like to review in your VOD at a later time. Stream Markers are only available if you have VODs enabled on your channel.

**Parameters:** App-verified from `subaction-Twitch-Channel-Create-Stream-Marker-dialog-uia.txt`, `subaction-Twitch-Channel-Create-Stream-Marker-dialog.png` (Add SubAction - Twitch > Channel > Create Stream Marker, ~600×205): `Description` (text), `You can use variables, or a fixed value, including nothing to set a description for the stream marker.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Channel Branded Content

**Location:** `Twitch > Channel > Set Channel Branded Content`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Channel-Set-Channel-Branded-Content-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the Branded Content state of your Twitch channel

**Parameters:** App-verified from `subaction-Twitch-Channel-Set-Channel-Branded-Content-dialog-uia.txt`, `subaction-Twitch-Channel-Set-Channel-Branded-Content-dialog.png` (Add SubAction - Twitch > Channel > Set Channel Branded Content, ~600×140): `State` (select); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Channel Game

**Location:** `Twitch > Channel > Set Channel Game`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Channel-Set-Channel-Game-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Update the current game category of your Twitch channel

**Parameters:** App-verified from `subaction-Twitch-Channel-Set-Channel-Game-dialog-uia.txt`, `subaction-Twitch-Channel-Set-Channel-Game-dialog.png` (Add SubAction - Twitch > Channel > Set Channel Game, ~600×248): `Title` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Channel Title

**Location:** `Twitch > Channel > Set Channel Title`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Channel-Set-Channel-Title-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Update the current title of your Twitch channel

**Parameters:** App-verified from `subaction-Twitch-Channel-Set-Channel-Title-dialog-uia.txt`, `subaction-Twitch-Channel-Set-Channel-Title-dialog.png` (Add SubAction - Twitch > Channel > Set Channel Title, ~600×187): `Title` (text), `You can either set a static title, and/or use variables to set a title` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
