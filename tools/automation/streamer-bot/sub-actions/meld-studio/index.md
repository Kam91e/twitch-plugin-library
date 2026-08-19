---
title: "Streamer.bot — Sub-Actions: Meld Studio"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - meld-studio
source: "https://docs.streamer.bot/api/sub-actions/meld-studio"
last-reviewed: 2026-07-31
---

# Meld Studio

Sub-actions for controlling Meld Studio from Streamer.bot — scenes, recording and streaming state, screenshots, effects, layers, and audio tracks.

## Get Current Scene (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Get Current Scene`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Get-Current-Scene-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get the current scene

**Parameters:** App-verified from `subaction-Meld-Studio-Get-Current-Scene-dialog-uia.txt`, `subaction-Meld-Studio-Get-Current-Scene-dialog.png` (Add SubAction - Meld Studio > Get Current Scene, ~600×140): `Connection` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Get Status (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Get Status`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Get-Status-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get your Meld Studio output status

**Parameters:** App-verified from `subaction-Meld-Studio-Get-Status-dialog-uia.txt`, `subaction-Meld-Studio-Get-Status-dialog.png` (Add SubAction - Meld Studio > Get Status, ~600×140): `Connection` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Record Clip (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Record Clip`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Record-Clip-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Record a clip in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Record-Clip-dialog-uia.txt`, `subaction-Meld-Studio-Record-Clip-dialog.png` (Add SubAction - Meld Studio > Record Clip, ~600×138): `Connection` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Recording (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Recording`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Recording-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change your Meld Studio recording status

**Parameters:** App-verified from `subaction-Meld-Studio-Recording-dialog-uia.txt`, `subaction-Meld-Studio-Recording-dialog.png` (Add SubAction - Meld Studio > Recording, ~600×183): `Connection` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Show Scene (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Show Scene`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Show-Scene-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Shows the selected scene in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Show-Scene-dialog-uia.txt`, `subaction-Meld-Studio-Show-Scene-dialog.png` (Add SubAction - Meld Studio > Show Scene, ~600×183): `Connection` (select), `Scene` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streaming (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Streaming`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Streaming-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change your Meld Studio streaming status

**Parameters:** App-verified from `subaction-Meld-Studio-Streaming-dialog-uia.txt`, `subaction-Meld-Studio-Streaming-dialog.png` (Add SubAction - Meld Studio > Streaming, ~600×183): `Connection` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Take Screenshot (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Take Screenshot`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Take-Screenshot-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Take a screenshot of the current scene in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Take-Screenshot-dialog-uia.txt`, `subaction-Meld-Studio-Take-Screenshot-dialog.png` (Add SubAction - Meld Studio > Take Screenshot, ~600×140): `Connection` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Take Vertical Screenshot (single-item group — the group IS the sub-action)

**Location:** `Meld Studio > Take Vertical Screenshot`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Take-Vertical-Screenshot-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Take a vertical screenshot of the current scene in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Take-Vertical-Screenshot-dialog-uia.txt`, `subaction-Meld-Studio-Take-Vertical-Screenshot-dialog.png` (Add SubAction - Meld Studio > Take Vertical Screenshot, ~600×140): `Connection` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Effects

### Set Effect Enabled State

**Location:** `Meld Studio > Effects > Set Effect Enabled State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Effects-Set-Effect-Enabled-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Sets the enabled state of the selected effect in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Effects-Set-Effect-Enabled-State-dialog-uia.txt`, `subaction-Meld-Studio-Effects-Set-Effect-Enabled-State-dialog.png` (Add SubAction - Meld Studio > Effects > Set Effect Enabled State, ~600×311): `Connection` (select), `Scene` (select), `Layer` (select), `Effect` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Layers

### Set Layer Visibility State

**Location:** `Meld Studio > Layers > Set Layer Visibility State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Layers-Set-Layer-Visibility-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Show or hide a Layer

**Parameters:** App-verified from `subaction-Meld-Studio-Layers-Set-Layer-Visibility-State-dialog-uia.txt`, `subaction-Meld-Studio-Layers-Set-Layer-Visibility-State-dialog.png` (Add SubAction - Meld Studio > Layers > Set Layer Visibility State, ~600×268): `Connection` (select), `Scene` (select), `Layer` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Browser Layer Url

**Location:** `Meld Studio > Layers > Set Browser Layer Url`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Layers-Set-Browser-Layer-Url-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the URL of a browser layer in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Layers-Set-Browser-Layer-Url-dialog-uia.txt`, `subaction-Meld-Studio-Layers-Set-Browser-Layer-Url-dialog.png` (Add SubAction - Meld Studio > Layers > Set Browser Layer Url, ~600×328): `Connection` (select), `Scene` (select), `Layer` (select), `URL` (text), `You can use variables in the source, for example %targetUserProfileImageUrl% if you want the browser source set to the target user` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Media Layer Source

**Location:** `Meld Studio > Layers > Set Media Layer Source`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Layers-Set-Media-Layer-Source-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the source of a media layer in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Layers-Set-Media-Layer-Source-dialog-uia.txt`, `subaction-Meld-Studio-Layers-Set-Media-Layer-Source-dialog.png` (Add SubAction - Meld Studio > Layers > Set Media Layer Source, ~600×328): `Connection` (select), `Scene` (select), `Layer` (select), `URL` (text), `You can use variables in the source, for example %targetUserProfileImageUrl% if you want the image or media source set to the target user` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Text

**Location:** `Meld Studio > Layers > Set Text`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Layers-Set-Text-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the text of a text layer in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Layers-Set-Text-dialog-uia.txt`, `subaction-Meld-Studio-Layers-Set-Text-dialog.png` (Add SubAction - Meld Studio > Layers > Set Text, ~600×361): `Connection` (select), `Scene` (select), `Layer` (select), `Text` (text), `You can use variable in the text, for example, %targetUser% to set the text to the target` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Tracks

### Set Layer Track Muted State

**Location:** `Meld Studio > Tracks > Set Layer Track Muted State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Tracks-Set-Layer-Track-Muted-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Mute or unmute a Track associated with a Layer in Meld Studio

**Parameters:** App-verified from `subaction-Meld-Studio-Tracks-Set-Layer-Track-Muted-State-dialog-uia.txt`, `subaction-Meld-Studio-Tracks-Set-Layer-Track-Muted-State-dialog.png` (Add SubAction - Meld Studio > Tracks > Set Layer Track Muted State, ~600×311): `Connection` (select), `Scene` (select), `Layer` (select), `Track` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Track Muted State

**Location:** `Meld Studio > Tracks > Set Track Muted State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Meld-Studio-Tracks-Set-Track-Muted-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Mute or unmute a track

**Parameters:** App-verified from `subaction-Meld-Studio-Tracks-Set-Track-Muted-State-dialog-uia.txt`, `subaction-Meld-Studio-Tracks-Set-Track-Muted-State-dialog.png` (Add SubAction - Meld Studio > Tracks > Set Track Muted State, ~600×225): `Connection` (select), `Track` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
