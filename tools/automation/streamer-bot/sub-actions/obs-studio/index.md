---
title: "Streamer.bot — Sub-Actions: OBS Studio"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - obs-studio
source: "https://docs.streamer.bot/api/sub-actions/obs-studio"
last-reviewed: 2026-07-31
---

# OBS Studio

> Sub-actions for controlling OBS Studio from Streamer.bot: scenes, sources, recording and streaming state, raw WebSocket requests, filters, groups, and the replay buffer.

Reference documentation for the OBS Studio sub-actions. Each entry lists the action's location in the Streamer.bot UI, a description, its parameters, and the variables it exposes. Official documentation: <https://docs.streamer.bot/api/sub-actions/obs-studio>.

## Groups

- [Sources](sources.md) — Manipulate OBS Studio sources: visibility, filters, audio tracks, and source-specific settings.
- [Scenes](scenes.md) — Manipulate OBS Studio scenes: scene item properties, source visibility, and scene filters.

### Set Random Group Source Visible

**Location:** `OBS Studio > Groups > Set Random Group Source Visible`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Groups-Set-Random-Group-Source-Visible-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set a random source from a group visible

**Parameters:** App-verified from `subaction-OBS-Studio-Groups-Set-Random-Group-Source-Visible-dialog-uia.txt`, `subaction-OBS-Studio-Groups-Set-Random-Group-Source-Visible-dialog.png` (Add SubAction - OBS Studio > Groups > Set Random Group Source Visible, ~600×268): `Connection` (select), `Scene` (select), `Group` (select), `This will pick a random source within the selected group and make it visible, if all items are visible, it will do nothing.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Create Record Chapter (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Create Record Chapter`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Create-Record-Chapter-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Creates a chapter marker in the OBS Recording. Requires the `Recording Format` setting to be configured to `Hybrid MP4 [BETA] (.mp4)` in OBS Studio (Settings -> Output -> 'Recording' tab -> Recording Format).

**Parameters:** App-verified from `subaction-OBS-Studio-Create-Record-Chapter-dialog-uia.txt`, `subaction-OBS-Studio-Create-Record-Chapter-dialog.png` (Add SubAction - OBS Studio > Create Record Chapter, ~600×261): `Connection` (select), `Chapter Name` (text), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Current Scene (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Get Current Scene`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Get-Current-Scene-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get the current scene

**Parameters:** App-verified from `subaction-OBS-Studio-Get-Current-Scene-dialog-uia.txt`, `subaction-OBS-Studio-Get-Current-Scene-dialog.png` (Add SubAction - OBS Studio > Get Current Scene, ~600×140): `Connection` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Status (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Get Status`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Get-Status-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get your OBS Studio output status

**Parameters:** App-verified from `subaction-OBS-Studio-Get-Status-dialog-uia.txt`, `subaction-OBS-Studio-Get-Status-dialog.png` (Add SubAction - OBS Studio > Get Status, ~600×140): `Connection` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## OBS Raw (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Raw`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Raw-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send custom requests directly to the OBS WebSocket server. You can use the [OBS Raw Generator](https://obs-raw.streamer.bot) to generate raw requests in Raw JSON or C# Code format. If you are debugging and wish to populate the resulting variables from a Raw request, you must use a Test Trigger — the `Test` button within the Raw sub-action dialog will **only** send the OBS request and does not populate any variables on its own.

**Parameters:** Not documented in official docs

**Variables:** Variables are generated based on the configured request

## Recording (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Recording`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Recording-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change your OBS recording status

**Parameters:** App-verified from `subaction-OBS-Studio-Recording-dialog-uia.txt`, `subaction-OBS-Studio-Recording-dialog.png` (Add SubAction - OBS Studio > Recording, ~600×183): `Connection` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Active Scene (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Set Active Scene`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Set-Active-Scene-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change the current scene

**Parameters:** App-verified from `subaction-OBS-Studio-Set-Active-Scene-dialog-uia.txt`, `subaction-OBS-Studio-Set-Active-Scene-dialog.png` (Add SubAction - OBS Studio > Set Active Scene, ~600×207): `Connection` (select), `Scene` (select), `This will make the scene your active scene in OBS Studio` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streaming (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Streaming`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Streaming-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change your streaming status

**Parameters:** App-verified from `subaction-OBS-Studio-Streaming-dialog-uia.txt`, `subaction-OBS-Studio-Streaming-dialog.png` (Add SubAction - OBS Studio > Streaming, ~600×183): `Connection` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Take Screenshot (single-item group — the group IS the sub-action)

**Location:** `OBS Studio > Take Screenshot`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Take-Screenshot-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Create a screenshot from a selected scene or source

**Parameters:** App-verified from `subaction-OBS-Studio-Take-Screenshot-dialog-uia.txt`, `subaction-OBS-Studio-Take-Screenshot-dialog.png` (Add SubAction - OBS Studio > Take Screenshot, ~600×329): `Connection` (select), `Scene` (select), `File Path` (text), `Quality:Auto` (slider), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Filters

### Set State of a Random Filter

**Location:** `OBS Studio > Filters > Set State of a Random Filter`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Filters-Set-State-of-a-Random-Filter-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the state of a random filter

**Parameters:** App-verified from `subaction-OBS-Studio-Filters-Set-State-of-a-Random-Filter-dialog-uia.txt`, `subaction-OBS-Studio-Filters-Set-State-of-a-Random-Filter-dialog.png` (Add SubAction - OBS Studio > Filters > Set State of a Random Filter, ~600×311): `Connection` (select), `Scene` (select), `State` (select), `This will pick a random filter within the selected source and make it visible or hidden, or toggle its state.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Replay

### Set Replay Buffer State

**Location:** `OBS Studio > Replay > Set Replay Buffer State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Replay-Set-Replay-Buffer-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change your replay buffer status

**Parameters:** App-verified from `subaction-OBS-Studio-Replay-Set-Replay-Buffer-State-dialog-uia.txt`, `subaction-OBS-Studio-Replay-Set-Replay-Buffer-State-dialog.png` (Add SubAction - OBS Studio > Replay > Set Replay Buffer State, ~600×183): `Connection` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
