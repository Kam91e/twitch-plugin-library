---
title: "Streamer.bot — Sub-Actions: YouTube"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - youtube
source: "https://docs.streamer.bot/api/sub-actions/youtube"
last-reviewed: 2026-07-31
---

# YouTube

Sub-actions for managing YouTube broadcasts from Streamer.bot — stream title and description, chat messages, moderation, and user groups.

## Send Message to Channel (single-item group — the group IS the sub-action)

**Location:** `YouTube > Send Message to Channel`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Send-Message-to-Channel-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a chat message to your YouTube channel. Note: this field is currently limited to plain text — no variable support.

**Parameters:** App-verified from `subaction-YouTube-Send-Message-to-Channel-dialog-uia.txt`, `subaction-YouTube-Send-Message-to-Channel-dialog.png` (Add SubAction - YouTube > Send Message to Channel, ~600×329): `Broadcast` (select), `Message` (text), `0/200` (text), `Send using bot account` (button), `Fallback to Broadcaster` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Description (single-item group — the group IS the sub-action)

**Location:** `YouTube > Set Description`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Set-Description-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Update the description of your YouTube stream

**Parameters:** `Description` — Enter the text you would like to set your new stream description to. Limited to `5000` characters.

**Variables:** Not documented in official docs

## Set Title and Description (single-item group — the group IS the sub-action)

**Location:** `YouTube > Set Title and Description`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Set-Title-and-Description-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the title and your description on your YouTube stream

**Parameters:** `Title` — Enter the text you would like to use as your new stream title. Limited to `100` characters. `Description` — Enter the text you would like to use as your new stream description. Limited to `5000` characters.

**Variables:** Not documented in official docs

## Set Title (single-item group — the group IS the sub-action)

**Location:** `YouTube > Set Title`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Set-Title-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Update the title of your YouTube stream

**Parameters:** `Description` — Enter the text you would like to set your new stream title to. Limited to `100` characters.

**Variables:** Not documented in official docs

## Moderation

### Ban User

**Location:** `YouTube > Moderation > Ban User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Moderation-Ban-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Ban a YouTube user

**Parameters:** App-verified from `subaction-YouTube-Moderation-Ban-User-dialog-uia.txt`, `subaction-YouTube-Moderation-Ban-User-dialog.png` (Add SubAction - YouTube > Moderation > Ban User, ~600×205): `Broadcast` (select), `User Id` (text), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Timeout User

**Location:** `YouTube > Moderation > Timeout User`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Moderation-Timeout-User-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Timeout a YouTube user

**Parameters:** App-verified from `subaction-YouTube-Moderation-Timeout-User-dialog-uia.txt`, `subaction-YouTube-Moderation-Timeout-User-dialog.png` (Add SubAction - YouTube > Moderation > Timeout User, ~600×247): `Broadcast` (select), `User Id` (text), `Duration` (text), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Polls

### Create Poll

**Location:** `YouTube > Polls > Create Poll`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Polls-Create-Poll-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Create a poll on your YouTube broadcast

**Parameters:** App-verified from `subaction-YouTube-Polls-Create-Poll-dialog-uia.txt`, `subaction-YouTube-Polls-Create-Poll-dialog.png` (Add SubAction - YouTube > Polls > Create Poll, ~600×432): `Broadcast` (select), `Question` (text), `Options (Minimum of 2, maximum of 4)` (text), `Options` (list); Ok/Cancel present.

**Variables:** Not documented in official docs

### End Poll

**Location:** `YouTube > Polls > End Poll`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-Polls-End-Poll-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** End an active poll on your YouTube broadcast

**Parameters:** App-verified from `subaction-YouTube-Polls-End-Poll-dialog-uia.txt`, `subaction-YouTube-Polls-End-Poll-dialog.png` (Add SubAction - YouTube > Polls > End Poll, ~600×140): `Broadcast` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## User

### Add Broadcaster Information

**Location:** `YouTube > User > Add Broadcaster Information`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Fetch user data for the connected YouTube broadcaster account

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## User Groups

### Add User to Group

**Location:** `YouTube > User Groups > Add User to Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-User-Groups-Add-User-To-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a YouTube user to a group (work in progress in official docs)

**Parameters:** App-verified from `subaction-YouTube-User-Groups-Add-User-To-Group-dialog-uia.txt`, `subaction-YouTube-User-Groups-Add-User-To-Group-dialog.png` (Add SubAction - YouTube > User Groups > Add User To Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### Remove User from Group

**Location:** `YouTube > User Groups > Remove User from Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-User-Groups-Remove-User-from-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Remove a YouTube user from a group (work in progress in official docs)

**Parameters:** App-verified from `subaction-YouTube-User-Groups-Remove-User-from-Group-dialog-uia.txt`, `subaction-YouTube-User-Groups-Remove-User-from-Group-dialog.png` (Add SubAction - YouTube > User Groups > Remove User from Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs

### User in Group

**Location:** `YouTube > User Groups > User in Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-YouTube-User-Groups-User-In-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Check if a YouTube user is a member of a given group (work in progress in official docs)

**Parameters:** App-verified from `subaction-YouTube-User-Groups-User-In-Group-dialog-uia.txt`, `subaction-YouTube-User-Groups-User-In-Group-dialog.png` (Add SubAction - YouTube > User Groups > User In Group, ~600×223): `User Login` (text), `Group Name` (text); Ok/Cancel present.

**Variables:** Not documented in official docs
