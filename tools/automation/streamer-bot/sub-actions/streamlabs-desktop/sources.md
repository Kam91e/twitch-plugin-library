---
title: "Streamer.bot — Sub-Actions: Streamlabs Desktop > Sources"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - streamlabs-desktop
source: "https://docs.streamer.bot/api/sub-actions/streamlabs-desktop/sources"
last-reviewed: 2026-07-31
---

# Streamlabs Desktop — Sources

> Sub-actions for manipulating Streamlabs Desktop sources: visibility, filters, and source-specific settings.

## Flip Source

**Location:** `Streamlabs Desktop > Sources > Flip Source`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Flip-Source-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Flip a source horizontally, vertically, or both

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Flip-Source-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Flip-Source-dialog.png` (Add SubAction - Streamlabs Desktop > Sources > Flip Source, ~600×268): `Connection` (select), `Scene` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Hide Source's Filters

**Location:** `Streamlabs Desktop > Sources > Hide Source's Filters`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Hide-Source-s-Filters-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Hide all filters from a given source

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Hide-Source-s-Filters-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Hide-Source-s-Filters-dialog.png` (config dialog, size unknown): `Connection` (select), `Scene` (select), `This will hide all filters for a given source that are currently visible.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Rotate Source

**Location:** `Streamlabs Desktop > Sources > Rotate Source`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Rotate-Source-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Not documented in official docs — the corpus page for this entry duplicates the "Hide Source's Filters" page

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Rotate-Source-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Rotate-Source-dialog.png` (Add SubAction - Streamlabs Desktop > Sources > Rotate Source, ~600×371): `Connection` (select), `Scene` (select), `Display` (select), `Rotation` (text), `Additive` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Browser Source URL

**Location:** `Streamlabs Desktop > Sources > Set Browser Source URL`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Set-Browser-Source-URL-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the URL of a browser source

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Set-Browser-Source-URL-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Set-Browser-Source-URL-dialog.png` (Add SubAction - Streamlabs Desktop > Sources > Set Browser Source URL, ~600×328): `Connection` (select), `Scene` (select), `URL` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set GDI Text

**Location:** `Streamlabs Desktop > Sources > Set GDI Text`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Set-GDI-Text-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the text value of a GDI Text Source

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Set-GDI-Text-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Set-GDI-Text-dialog.png` (Add SubAction - Streamlabs Desktop > Sources > Set GDI Text, ~600×361): `Connection` (select), `Scene` (select), `Text` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Source Filter State

**Location:** `Streamlabs Desktop > Sources > Set Source Filter State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Set-Source-Filter-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the visibility of a source filter

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Set-Source-Filter-State-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Set-Source-Filter-State-dialog.png` (Add SubAction - Streamlabs Desktop > Sources > Set Source Filter State, ~600×311): `Connection` (select), `Scene` (select), `Filter` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Source Mute State

**Location:** `Streamlabs Desktop > Sources > Set Source Mute State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Set-Source-Mute-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Mute or unmute a source in Streamlabs Desktop

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Set-Source-Mute-State-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Set-Source-Mute-State-dialog.png` (Add SubAction - Streamlabs Desktop > Sources > Set Source Mute State, ~600×268): `Connection` (select), `Scene` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Source Visibility State

**Location:** `Streamlabs Desktop > Sources > Set Source Visibility State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Sources-Set-Source-Visibility-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Show or hide a source in Streamlabs Desktop

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Sources-Set-Source-Visibility-State-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Sources-Set-Source-Visibility-State-dialog.png` (Add SubAction - Streamlabs Desktop > Sources > Set Source Visibility State, ~600×311): `Connection` (select), `Scene` (select), `Display` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
