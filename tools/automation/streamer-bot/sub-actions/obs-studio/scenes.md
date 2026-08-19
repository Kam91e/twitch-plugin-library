---
title: "Streamer.bot — Sub-Actions: OBS Studio > Scenes"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - obs-studio
source: "https://docs.streamer.bot/api/sub-actions/obs-studio/scenes"
last-reviewed: 2026-07-31
---

# OBS Studio — Scenes

> Sub-actions for manipulating OBS Studio scenes: scene item properties, source visibility, and scene filters.

## Get Scene Item Properties

**Location:** `OBS Studio > Scenes > Get Scene Item Properties`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Scenes-Get-Scene-Item-Properties-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Get the source properties of a scene item

**Parameters:** App-verified from `subaction-OBS-Studio-Scenes-Get-Scene-Item-Properties-dialog-uia.txt`, `subaction-OBS-Studio-Scenes-Get-Scene-Item-Properties-dialog.png` (Add SubAction - OBS Studio > Scenes > Get Scene Item Properties, ~600×225): `Connection` (select), `Scene` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Hide Scene's Sources

**Location:** `OBS Studio > Scenes > Hide Scene's Sources`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Scenes-Hide-Scene-s-Sources-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Hide ALL sources within the given Scene

**Parameters:** App-verified from `subaction-OBS-Studio-Scenes-Hide-Scene-s-Sources-dialog-uia.txt`, `subaction-OBS-Studio-Scenes-Hide-Scene-s-Sources-dialog.png` (config dialog, size unknown): `Connection` (select), `Scene` (select), `This will hide all sources within a scene that are currently visible.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Random Scene Source Visible

**Location:** `OBS Studio > Scenes > Set Random Scene Source Visible`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Scenes-Set-Random-Scene-Source-Visible-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Select a random source from the selected scene and make it visible. If all items within the scene are already visible, this sub-action will do nothing.

**Parameters:** App-verified from `subaction-OBS-Studio-Scenes-Set-Random-Scene-Source-Visible-dialog-uia.txt`, `subaction-OBS-Studio-Scenes-Set-Random-Scene-Source-Visible-dialog.png` (Add SubAction - OBS Studio > Scenes > Set Random Scene Source Visible, ~600×225): `Connection` (select), `Scene` (select), `This will pick a random source within the selected scene and make it visible, if all items are visible, it will do nothing.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Scene Filter State

**Location:** `OBS Studio > Scenes > Set Scene Filter State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-OBS-Studio-Scenes-Set-Scene-Filter-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Sets the visibility state of a scene filter

**Parameters:** App-verified from `subaction-OBS-Studio-Scenes-Set-Scene-Filter-State-dialog-uia.txt`, `subaction-OBS-Studio-Scenes-Set-Scene-Filter-State-dialog.png` (Add SubAction - OBS Studio > Scenes > Set Scene Filter State, ~600×268): `Connection` (select), `Scene` (select), `Filter` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
