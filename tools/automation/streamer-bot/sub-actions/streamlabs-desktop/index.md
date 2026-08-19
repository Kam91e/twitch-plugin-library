---
title: "Streamer.bot — Sub-Actions: Streamlabs Desktop"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - streamlabs-desktop
source: "https://docs.streamer.bot/api/sub-actions/streamlabs-desktop"
last-reviewed: 2026-07-31
---

# Streamlabs Desktop

> Sub-actions for controlling Streamlabs Desktop from Streamer.bot: recording and streaming state, sources, groups, scenes, and filters.

Reference documentation for the Streamlabs Desktop sub-actions. Each entry lists the action's location in the Streamer.bot UI, a description, its parameters, and the variables it exposes. Official documentation: <https://docs.streamer.bot/api/sub-actions/streamlabs-desktop>.

## Groups

- [Sources](sources.md) — Manipulate Streamlabs Desktop sources: visibility, filters, and source-specific settings.

### Hide Group's Sources

**Location:** `Streamlabs Desktop > Groups > Hide Group's Sources`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Groups-Hide-Group-s-Sources-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Hide all the sources from a group

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Groups-Hide-Group-s-Sources-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Groups-Hide-Group-s-Sources-dialog.png` (config dialog, size unknown): `Connection` (select), `Scene` (select), `Group` (select), `Display` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Random Group Source Visible

**Location:** `Streamlabs Desktop > Groups > Set Random Group Source Visible`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Groups-Set-Random-Group-Source-Visible-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set a random source from a group visible

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Groups-Set-Random-Group-Source-Visible-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Groups-Set-Random-Group-Source-Visible-dialog.png` (Add SubAction - Streamlabs Desktop > Groups > Set Random Group Source Visible, ~600×268): `Connection` (select), `Scene` (select), `Group` (select), `Display` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Recording (single-item group — the group IS the sub-action)

**Location:** `Streamlabs Desktop > Recording`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Recording-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change your current recording status

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Recording-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Recording-dialog.png` (Add SubAction - Streamlabs Desktop > Recording, ~600×183): `Connection` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Streaming (single-item group — the group IS the sub-action)

**Location:** `Streamlabs Desktop > Streaming`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Streaming-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change your streaming status

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Streaming-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Streaming-dialog.png` (Add SubAction - Streamlabs Desktop > Streaming, ~600×183): `Connection` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Filters

### Set State of a Random Filter

**Location:** `Streamlabs Desktop > Filters > Set State of a Random Filter`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Filters-Set-State-of-a-Random-Filter-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the state of a filter randomly selected from a given scene or source

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Filters-Set-State-of-a-Random-Filter-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Filters-Set-State-of-a-Random-Filter-dialog.png` (Add SubAction - Streamlabs Desktop > Filters > Set State of a Random Filter, ~600×311): `Connection` (select), `Scene` (select), `State` (select), `This will pick a random filter within the selected source and make it visible or hidden, or toggle its state.` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Scenes

### Get Current Scene

**Location:** `Streamlabs Desktop > Scenes > Get Current Scene`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Scenes-Get-Current-Scene-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Get the current scene from Streamlabs Desktop

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Scenes-Get-Current-Scene-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Scenes-Get-Current-Scene-dialog.png` (Add SubAction - Streamlabs Desktop > Scenes > Get Current Scene, ~600×140): `Connection` (select), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Active Scene

**Location:** `Streamlabs Desktop > Scenes > Set Active Scene`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Scenes-Set-Active-Scene-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Change the current scene in Streamlabs Desktop

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Scenes-Set-Active-Scene-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Scenes-Set-Active-Scene-dialog.png` (Add SubAction - Streamlabs Desktop > Scenes > Set Active Scene, ~600×207): `Connection` (select), `Scene` (select), `This will make the scene your active scene in Streamlabs Desktop` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

### Set Scene Filter State

**Location:** `Streamlabs Desktop > Scenes > Set Scene Filter State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Streamlabs-Desktop-Scenes-Set-Scene-Filter-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Update the visibility of a filter for a given scene

**Parameters:** App-verified from `subaction-Streamlabs-Desktop-Scenes-Set-Scene-Filter-State-dialog-uia.txt`, `subaction-Streamlabs-Desktop-Scenes-Set-Scene-Filter-State-dialog.png` (Add SubAction - Streamlabs Desktop > Scenes > Set Scene Filter State, ~600×268): `Connection` (select), `Scene` (select), `Filter` (select), `State` (select), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
