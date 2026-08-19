---
title: "Streamer.bot — Sub-Actions: Twitch > Guest Star"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - twitch
source: "https://docs.streamer.bot/api/sub-actions/twitch/guest-star"
last-reviewed: 2026-07-31
---

# Twitch — Guest Star

> Sub-actions to manage Twitch Guest Star sessions, invites, slots and channel settings.

## Assign Guest Star Slot

**Location:** `Twitch > Guest Star > Assign Guest Star Slot`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Guest-Star-Assign-Guest-Star-Slot-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Assign a user in a guest star slot.

**Parameters:** `User Login` — The user's login name. `Slot` — A number typically between 1 and 6.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Guest-Star-Assign-Guest-Star-Slot-dialog-uia.txt`, `subaction-Twitch-Guest-Star-Assign-Guest-Star-Slot-dialog.png` (Add SubAction - Twitch > Guest Star > Assign Guest Star Slot, ~600×247): `User Login` (text), `Slot` (text), `The slot can contain a number, typically between 1 and 6, or a %variable% that will be parsed.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Create Guest Star Session

**Location:** `Twitch > Guest Star > Create Guest Star Session`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Create a guest star session.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Delete Guest Star Invite

**Location:** `Twitch > Guest Star > Delete Guest Star Invite`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Guest-Star-Delete-Guest-Star-Invite-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Delete an invite for a guest star.

**Parameters:** `User Login` — The user's login name.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Guest-Star-Delete-Guest-Star-Invite-dialog-uia.txt`, `subaction-Twitch-Guest-Star-Delete-Guest-Star-Invite-dialog.png` (Add SubAction - Twitch > Guest Star > Delete Guest Star Invite, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Delete Guest Star Slot

**Location:** `Twitch > Guest Star > Delete Guest Star Slot`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Guest-Star-Delete-Guest-Star-Slot-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Delete a user from a guest star slot.

**Parameters:** `User Login` — The user's login name. `Slot` — A number typically between 1 and 6.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Guest-Star-Delete-Guest-Star-Slot-dialog-uia.txt`, `subaction-Twitch-Guest-Star-Delete-Guest-Star-Slot-dialog.png` (Add SubAction - Twitch > Guest Star > Delete Guest Star Slot, ~600×247): `User Login` (text), `Slot` (text), `The slot can contain a number, typically between 1 and 6, or a %variable% that will be parsed.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## End Guest Star Session

**Location:** `Twitch > Guest Star > End Guest Star Session`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** End a guest star session.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Get Channel Guest Star Settings

**Location:** `Twitch > Guest Star > Get Channel Guest Star Settings`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the channel guest star settings.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Get Guest Star Invites

**Location:** `Twitch > Guest Star > Get Guest Star Invites`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the guest star invites.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Get Guest Star Session

**Location:** `Twitch > Guest Star > Get Guest Star Session`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get the guest star session.

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Send Guest Star Invite

**Location:** `Twitch > Guest Star > Send Guest Star Invite`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Guest-Star-Send-Guest-Star-Invite-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Send a guest star invitation.

**Parameters:** `User Login` — The user's login name.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Guest-Star-Send-Guest-Star-Invite-dialog-uia.txt`, `subaction-Twitch-Guest-Star-Send-Guest-Star-Invite-dialog.png` (Add SubAction - Twitch > Guest Star > Send Guest Star Invite, ~600×181): `User Login` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

## Update Channel Guest Star Settings

**Location:** `Twitch > Guest Star > Update Channel Guest Star Settings`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Guest-Star-Update-Channel-Guest-Star-Settings-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Update the channel guest star settings.

**Parameters:** `Moderator Send Live Enabled` — Boolean; if the moderator send live should be enabled. `Slot Count` — Integer; the number of slots. `Browser Source Audio Enabled` — Boolean; if the browser source audio should be enabled. `Group Layout` — TILED_LAYOUT (a layout where all the guests are tiled), SCREENSHARE_LAYOUT (a layout where your screen is shared alongside the guests), HORIZONTAL_LAYOUT (a horizontal layout), VERICAL_LAYOUT (a vertical layout). `Regenerate Browser Sources` — Boolean; if browser sources should regenerate.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Guest-Star-Update-Channel-Guest-Star-Settings-dialog-uia.txt`, `subaction-Twitch-Guest-Star-Update-Channel-Guest-Star-Settings-dialog.png` (Add SubAction - Twitch > Guest Star > Update Channel Guest Star Settings, ~600×430): `Moderator Send Live Enabled (boolean)` (text), `Slot Count (number)` (text), `Browser Source Audio Enabled (boolean)` (text), `Group Layout` (select), `Regenerate Browser Sources (boolean)` (text), `Any values that are left blank, will not be changed` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Update Guest Star Slot Settings

**Location:** `Twitch > Guest Star > Update Guest Star Slot Settings`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Guest-Star-Update-Guest-Star-Slot-Settings-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Update the guest star slot settings.

**Parameters:** `Slot` — Integer, required; the slot to update. `Audio Enabled` — Boolean, optional; enable or disable the audio in this slot. `Video Enabled` — Boolean, optional; enable or disable the video in this slot. `Live` — Boolean, optional; enable or disable live on this slot. `Volume` — Number, optional; change the volume of this slot.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Guest-Star-Update-Guest-Star-Slot-Settings-dialog-uia.txt`, `subaction-Twitch-Guest-Star-Update-Guest-Star-Slot-Settings-dialog.png` (Add SubAction - Twitch > Guest Star > Update Guest Star Slot Settings, ~600×424): `Slot (number, required)` (text), `Audio Enabled (boolean)` (text), `Video Enabled (boolean)` (text), `Live (boolean)` (text), `Volume (number)` (text), `Any values that are left blank, will not be changed` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Update Guest Star Slot

**Location:** `Twitch > Guest Star > Update Guest Star Slot`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Twitch-Guest-Star-Update-Guest-Star-Slot-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Update a guest star slot.

**Parameters:** `Source Slot` — A number typically between 1 and 6. `Destination Slot` — A number typically between 1 and 6.
**Parameters (app-verified):** App-verified from `subaction-Twitch-Guest-Star-Update-Guest-Star-Slot-dialog-uia.txt`, `subaction-Twitch-Guest-Star-Update-Guest-Star-Slot-dialog.png` (Add SubAction - Twitch > Guest Star > Update Guest Star Slot, ~600×223): `Source Slot` (text), `Destination Slot` (text), `The slot can contain a number, typically between 1 and 6, or a %variable% that will be parsed.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
