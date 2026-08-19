---
title: "Streamer.bot — Sub-Actions: Settings"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - settings
source: "https://docs.streamer.bot/api/sub-actions/settings"
last-reviewed: 2026-07-31
---

# Settings

Sub-actions for controlling Streamer.bot application settings — color picking, credits and first-words resets, and voice control input.

## Pick Color (single-item group — the group IS the sub-action)

**Location:** `Settings > Pick Color`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Settings-Pick-Color-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Select a color and populate a set of variables. Convert a selected color into a bank of variables that can then be passed to C# code, HTML objects, or any OBS source that is color-aware.

**Parameters:** `Color / OBS Color` — The Color picker will give the standard palette picker, so you can choose by a slider or by entering raw RGB / HSL values. Once a color is chosen the `Color` box will be populated with the RGB Hex value and `OBS Color` will populate with the raw integer value OBS expects for ABGR it uses for its natively supported sources. `Variable Name` — Enter an alias for the resulting variables, outlined below
**Parameters (app-verified):** App-verified from `subaction-Settings-Pick-Color-dialog-uia.txt`, `subaction-Settings-Pick-Color-dialog.png` (Add SubAction - Settings > Pick Color, ~600×272): `Color` (text), `OBS Color` (text), `Variable Name` (text), `Random Color` (button), `OBS Studio use ABGR format for its colors` (button); Ok/Cancel present.. Don't use %'s in this field this will be done automatically.

**Variables:** `variableName.color.a` — The alpha value. `variableName.color.r` — The red value. `variableName.color.g` — The green value. `variableName.color.b` — The blue value. `variableName.html` — The html color code. `variableName.htmlalpha` — The html color code with alpha value. `variableName.obs` — The color as an OBS ABGR value. Replace `variableName` with the variable name you configured.

## Reset Credits (single-item group — the group IS the sub-action)

**Location:** `Settings > Reset Credits`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Not documented in official docs

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Reset First Words (single-item group — the group IS the sub-action)

**Location:** `Settings > Reset First Words`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Not documented in official docs

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Set Voice Control Input (single-item group — the group IS the sub-action)

**Location:** `Settings > Set Voice Control Input`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Settings-Set-Voice-Control-Input-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Not documented in official docs

**Parameters:** App-verified from `subaction-Settings-Set-Voice-Control-Input-dialog-uia.txt`, `subaction-Settings-Set-Voice-Control-Input-dialog.png` (Add SubAction - Settings > Set Voice Control Input, ~600×164): `Audio Input Device` (select); Ok/Cancel present.

**Variables:** Not documented in official docs
