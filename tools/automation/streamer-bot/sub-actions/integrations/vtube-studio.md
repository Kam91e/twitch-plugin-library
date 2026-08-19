---
title: "Streamer.bot — Sub-Actions: Integrations > VTube Studio"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - integrations
source: "https://docs.streamer.bot/api/sub-actions/integrations/vtube-studio"
last-reviewed: 2026-07-31
---

# Integrations — VTube Studio

> Sub-actions to control models, expressions, hotkeys, and raw API requests in VTube Studio.

## Color Tint

**Location:** `Integrations > VTube Studio > Color Tint`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Color-Tint-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Tint ArtMeshes by providing a color and matching criteria
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Color-Tint-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Color-Tint-dialog.png` (Add SubAction - Integrations > VTube Studio > Color Tint, ~600×451): `Color` (text), `Mix With Scene Lighting Color` (text), `Random Color` (button), `Filter Type` (list), `Values` (list), `Add` (button), `Del` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Get Current Model

**Location:** `Integrations > VTube Studio > Get Current Model`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Get info about the currently loaded model
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Load Model by Name

**Location:** `Integrations > VTube Studio > Load Model by Name`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Load-Model-by-Name-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Load a model by name
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Load-Model-by-Name-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Load-Model-by-Name-dialog.png` (Add SubAction - Integrations > VTube Studio > Load Model by Name, ~600×163): `Name` (text), `Name can be a fixed value or a parsed value using variables and/or inline functions.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Load Model

**Location:** `Integrations > VTube Studio > Load Model`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Load-Model-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Load a selected model
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Load-Model-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Load-Model-dialog.png` (Add SubAction - Integrations > VTube Studio > Load Model, ~600×139): `Model` (button), `Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Move Model

**Location:** `Integrations > VTube Studio > Move Model`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Move-Model-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Mode the currently loaded model
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Move-Model-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Move-Model-dialog.png` (config dialog, size unknown): `Time in Seconds (double, required)` (text), `Relative to Model (boolean, required)` (text), `Position X (double, optional)` (text), `Position Y (double, optional)` (text), `Rotation (double, optional)` (text), `Size (double, optional)` (text), `Optional values that are left blank, will not be changed.` (button), `Capture Model Position` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Reset All Color Tints

**Location:** `Integrations > VTube Studio > Reset All Color Tints`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Reset all color tints of the current model
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Send Raw Request

**Location:** `Integrations > VTube Studio > Send Raw Request`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Send-Raw-Request-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Send a raw request to VTube Studio. All request types can be found in the official VTube Studio API documentation on GitHub.
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Send-Raw-Request-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Send-Raw-Request-dialog.png` (Add SubAction - Integrations > VTube Studio > Send Raw Request, ~600×460): `Connection` (select), `Name` (text), `Variable Prefix` (text), `Raw` (text), `Request` (text), `Response` (button), `Format` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Expression State

**Location:** `Integrations > VTube Studio > Set Expression State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Set-Expression-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the expression state of the currently loaded model
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Set-Expression-State-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Set-Expression-State-dialog.png` (Add SubAction - Integrations > VTube Studio > Set Expression State, ~600×223): `Not Connected!` (select), `State` (select), `Fade Time` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Trigger Hotkey by Name

**Location:** `Integrations > VTube Studio > Trigger Hotkey by Name`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Trigger-Hotkey-by-Name-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger a hotkey in VTube Studio by name
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Trigger-Hotkey-by-Name-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Trigger-Hotkey-by-Name-dialog.png` (Add SubAction - Integrations > VTube Studio > Trigger Hotkey by Name, ~600×163): `Name` (text), `Name can be a fixed value or a parsed value using variables and/or inline functions.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Trigger Hotkey

**Location:** `Integrations > VTube Studio > Trigger Hotkey`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-VTube-Studio-Trigger-Hotkey-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Dependency:** requires a configured VTube Studio connection
**Description:** Trigger a hotkey in VTube Studio
**Parameters:** App-verified from `subaction-Integrations-VTube-Studio-Trigger-Hotkey-dialog-uia.txt`, `subaction-Integrations-VTube-Studio-Trigger-Hotkey-dialog.png` (Add SubAction - Integrations > VTube Studio > Trigger Hotkey, ~600×180): `VTube Studio is Not Connected!` (button), `Hotkey` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
