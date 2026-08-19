---
title: "Streamer.bot — Sub-Actions: Streamfog"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - streamfog
source: "https://docs.streamer.bot/api/sub-actions/streamfog"
last-reviewed: 2026-07-31
---

# Streamfog

Sub-actions for controlling Streamfog from Streamer.bot — activating and deactivating camera lenses and outfits.

> **Version note (v1.0.5+):** StreamFog does not exist in v1.0.4 — it is absent from the v1.0.4 app catalog dump. It is a v1.0.5+ integration with 6 sub-actions.

## Backgrounds

### Play Video Background

**Location:** `Streamfog > Backgrounds > Play Video Background`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Streamfog-Backgrounds-Play-Video-Background-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Play a video background in StreamFog

**Parameters:** App-verified from `subaction-Integrations-Streamfog-Backgrounds-Play-Video-Background-dialog-uia.txt`, `subaction-Integrations-Streamfog-Backgrounds-Play-Video-Background-dialog.png` (Add SubAction - Integrations > Streamfog > Backgrounds > Play Video Background, ~600×139): `Video` (text), `Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Play Video Background by Name

**Location:** `Streamfog > Backgrounds > Play Video Background by Name`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Streamfog-Backgrounds-Play-Video-Background-by-Name-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Play a video background in StreamFog by name

**Parameters:** App-verified from `subaction-Integrations-Streamfog-Backgrounds-Play-Video-Background-by-Name-dialog-uia.txt`, `subaction-Integrations-Streamfog-Backgrounds-Play-Video-Background-by-Name-dialog.png` (Add SubAction - Integrations > Streamfog > Backgrounds > Play Video Background by Name, ~600×163): `Video Name` (text), `Video Name can be a fixed value or a parsed value using variables and/or inline functions.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Lenses

### Activate Lens by Name

**Location:** `Streamfog > Lenses > Activate Lens by Name`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Streamfog-Lenses-Activate-Lens-by-Name-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Activate a Lens in StreamFog by name

**Parameters:** App-verified from `subaction-Integrations-Streamfog-Lenses-Activate-Lens-by-Name-dialog-uia.txt`, `subaction-Integrations-Streamfog-Lenses-Activate-Lens-by-Name-dialog.png` (Add SubAction - Integrations > Streamfog > Lenses > Activate Lens by Name, ~600×223): `Lens Name` (text), `Duration` (text), `Lens Name and/or Duration can be a fixed value or a parsed value using variables and/or inline functions.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Activate Lens

**Location:** `Streamfog > Lenses > Activate Lens`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Streamfog-Lenses-Activate-Lens-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Activatres the selected Lens in StreamFog

**Parameters:** App-verified from `subaction-Integrations-Streamfog-Lenses-Activate-Lens-dialog-uia.txt`, `subaction-Integrations-Streamfog-Lenses-Activate-Lens-dialog.png` (Add SubAction - Integrations > Streamfog > Lenses > Activate Lens, ~600×221): `Lens` (text), `Duration` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Deactivate Lens

**Location:** `Streamfog > Lenses > Deactivate Lens`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Deactivate the current Lens in StreamFog

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs

## Outfits

### Activate Outfit by Name

**Location:** `Streamfog > Outfits > Activate Outfit by Name`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Streamfog-Outfits-Activate-Outfit-by-Name-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Activate an Outfit in StreamFog by name

**Parameters:** App-verified from `subaction-Integrations-Streamfog-Outfits-Activate-Outfit-by-Name-dialog-uia.txt`, `subaction-Integrations-Streamfog-Outfits-Activate-Outfit-by-Name-dialog.png` (Add SubAction - Integrations > Streamfog > Outfits > Activate Outfit by Name, ~600×163): `Outfit Name` (text), `Outfit Name can be a fixed value or a parsed value using variables and/or inline functions.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Activate Outfit

**Location:** `Streamfog > Outfits > Activate Outfit`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Integrations-Streamfog-Outfits-Activate-Outfit-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Activate an Outfit in StreamFog

**Parameters:** App-verified from `subaction-Integrations-Streamfog-Outfits-Activate-Outfit-dialog-uia.txt`, `subaction-Integrations-Streamfog-Outfits-Activate-Outfit-dialog.png` (Add SubAction - Integrations > Streamfog > Outfits > Activate Outfit, ~600×139): `Outfit` (button), `Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Reset Look

**Location:** `Streamfog > Outfits > Reset Look`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Deactivate the current Outfit in StreamFog to reset the look of the Streamer

**Parameters:** Not documented in official docs

**Variables:** Not documented in official docs
