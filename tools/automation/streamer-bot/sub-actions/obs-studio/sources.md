---
title: "Streamer.bot — Sub-Actions: OBS Studio > Sources"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - obs-studio
source: "https://docs.streamer.bot/api/sub-actions/obs-studio/sources"
last-reviewed: 2026-07-31
---

# OBS Studio — Sources

> Sub-actions for manipulating OBS Studio sources: visibility, filters, audio tracks, and source-specific settings.

## Flip Source

**Location:** `OBS Studio > Sources > Flip Source`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Flip-Source-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Flip a source horizontally, vertically or both

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Flip-Source-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Flip-Source-dialog.png` (Add SubAction - OBS Studio > Sources > Flip Source, ~600×268): `Connection` (select), `Scene` (select), `Mode` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Hide Group's Sources

**Location:** `OBS Studio > Sources > Hide Group's Sources`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Hide-Group-s-Sources-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Hide all the sources from a group

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Hide-Group-s-Sources-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Hide-Group-s-Sources-dialog.png` (config dialog, size unknown): `Connection` (select), `Scene` (select), `Group` (select), `This will hide all sources within a group that are currently visible.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Hide Source's Filters

**Location:** `OBS Studio > Sources > Hide Source's Filters`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Hide-Source-s-Filters-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Hide all the filters from a source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Hide-Source-s-Filters-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Hide-Source-s-Filters-dialog.png` (config dialog, size unknown): `Connection` (select), `Scene` (select), `This will hide all filters for a given source that are currently visible.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Rotate Source

**Location:** `OBS Studio > Sources > Rotate Source`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Rotate-Source-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Rotate a source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Rotate-Source-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Rotate-Source-dialog.png` (Add SubAction - OBS Studio > Sources > Rotate Source, ~600×323): `Connection` (select), `Scene` (select), `Rotation` (text), `Additive` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Browser Source Url

**Location:** `OBS Studio > Sources > Set Browser Source Url`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Browser-Source-URL-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Change the URL of a browser source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Browser-Source-URL-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Browser-Source-URL-dialog.png` (Add SubAction - OBS Studio > Sources > Set Browser Source URL, ~600×328): `Connection` (select), `Scene` (select), `URL` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Color Source Color

**Location:** `OBS Studio > Sources > Set Color Source Color`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Color-Source-Color-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set a random or a HEX color for a color source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Color-Source-Color-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Color-Source-Color-dialog.png` (Add SubAction - OBS Studio > Sources > Set Color Source Color, ~600×293): `Connection` (select), `Scene` (select), `Random Color` (text), `Color` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set GDI Text

**Location:** `OBS Studio > Sources > Set GDI Text`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-GDI-Text-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Change the text value of GDI Text Source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-GDI-Text-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-GDI-Text-dialog.png` (Add SubAction - OBS Studio > Sources > Set GDI Text, ~600×361): `Connection` (select), `Scene` (select), `Text` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Image Source File

**Location:** `OBS Studio > Sources > Set Image Source File`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Image-Source-File-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the file path for an image source (will accept image links as well)

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Image-Source-File-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Image-Source-File-dialog.png` (Add SubAction - OBS Studio > Sources > Set Image Source File, ~600×267): `Connection` (select), `Scene` (select), `Filename` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Media Source File

**Location:** `OBS Studio > Sources > Set Media Source File`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Media-Source-File-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the file path for a media source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Media-Source-File-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Media-Source-File-dialog.png` (Add SubAction - OBS Studio > Sources > Set Media Source File, ~600×267): `Connection` (select), `Scene` (select), `Filename` (text), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Media State

**Location:** `OBS Studio > Sources > Set Media State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Media-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the status of the media source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Media-State-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Media-State-dialog.png` (Add SubAction - OBS Studio > Sources > Set Media State, ~600×268): `Connection` (select), `Scene` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Source Audio Track State

**Location:** `OBS Studio > Sources > Set Source Audio Track State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Source-Audio-Track-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Set the audio track state on a source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Source-Audio-Track-State-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Source-Audio-Track-State-dialog.png` (Add SubAction - OBS Studio > Sources > Set Source Audio Track State, ~600×311): `Connection` (select), `Scene` (select), `Track` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Source Filter State

**Location:** `OBS Studio > Sources > Set Source Filter State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Source-Filter-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the visibility state of a source filter

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Source-Filter-State-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Source-Filter-State-dialog.png` (Add SubAction - OBS Studio > Sources > Set Source Filter State, ~600×311): `Connection` (select), `Scene` (select), `Filter` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Source Mute State

**Location:** `OBS Studio > Sources > Set Source Mute State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Source-Mute-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Mute or unmute a source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Source-Mute-State-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Source-Mute-State-dialog.png` (Add SubAction - OBS Studio > Sources > Set Source Mute State, ~600×268): `Connection` (select), `Scene` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Source Visibility State

**Location:** `OBS Studio > Sources > Set Source Visibility State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Sources-Set-Source-Visibility-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Show or hide a source

**Parameters:** App-verified from `subaction-OBS-Studio-Sources-Set-Source-Visibility-State-dialog-uia.txt`, `subaction-OBS-Studio-Sources-Set-Source-Visibility-State-dialog.png` (Add SubAction - OBS Studio > Sources > Set Source Visibility State, ~600×268): `Connection` (select), `Scene` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
