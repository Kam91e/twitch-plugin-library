---
title: "Streamer.bot — Sub-Actions: Core > Actions"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core/actions"
last-reviewed: 2026-07-31
---

# Core — Actions

> Sub-actions to run actions, and to query or modify the enabled state of actions, action groups, and sub-actions.

## Get Action Group State

**Location:** `Core > Actions > Get Action Group State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Actions-Get-Action-Group-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Fetch the current enabled state of an action group
**Parameters:** App-verified from `subaction-Core-Actions-Get-Action-Group-State-dialog-uia.txt`, `subaction-Core-Actions-Get-Action-Group-State-dialog.png` (Add SubAction - Core > Actions > Get Action Group State, ~600×140): `Group` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Get Action State

**Location:** `Core > Actions > Get Action State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Actions-Get-Action-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Fetch the current enabled state of a specific action
**Parameters:** App-verified from `subaction-Core-Actions-Get-Action-State-dialog-uia.txt`, `subaction-Core-Actions-Get-Action-State-dialog.png` (Add SubAction - Core > Actions > Get Action State, ~600×135): `Action` (button), `<No Action Selected>` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Run Action

**Location:** `Core > Actions > Run Action`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Actions-Run-Action-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Execute another Streamer.bot action. The executed action can populate its own variables which are then available to your calling action.
**Parameters:** App-verified from `subaction-Core-Actions-Run-Action-dialog-uia.txt`, `subaction-Core-Actions-Run-Action-dialog.png` (Add SubAction - Core > Actions > Run Action, ~600×160): `Action` (button), `<No Action Selected>` (button), `Run Action Immediately` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Action Group State

**Location:** `Core > Actions > Set Action Group State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Actions-Set-Action-Group-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Enable or disable a group of actions
**Parameters:** App-verified from `subaction-Core-Actions-Set-Action-Group-State-dialog-uia.txt`, `subaction-Core-Actions-Set-Action-Group-State-dialog.png` (Add SubAction - Core > Actions > Set Action Group State, ~600×183): `Group` (select), `State` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Action State

**Location:** `Core > Actions > Set Action State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Actions-Set-Action-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Enable or disable a specific action
**Parameters:** App-verified from `subaction-Core-Actions-Set-Action-State-dialog-uia.txt`, `subaction-Core-Actions-Set-Action-State-dialog.png` (Add SubAction - Core > Actions > Set Action State, ~600×177): `Action` (button), `<No Action Selected>` (select), `State` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Sub-Action State

**Location:** `Core > Actions > Set Sub-Action State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Actions-Set-Sub-Action-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Enable or disable specific sub-actions within an action
**Parameters:** App-verified from `subaction-Core-Actions-Set-Sub-Action-State-dialog-uia.txt`, `subaction-Core-Actions-Set-Sub-Action-State-dialog.png` (Add SubAction - Core > Actions > Set Sub-Action State, ~600×220): `Action` (button), `<No Action Selected>` (select), `State` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Sub-Action Weight

**Location:** `Core > Actions > Set Sub-Action Weight`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Actions-Set-Sub-Action-Weight-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Changes the random weighting of specific sub-actions within an action. Only applies to sub-actions of an action or sub-action group that is set to Random.
**Parameters:** App-verified from `subaction-Core-Actions-Set-Sub-Action-Weight-dialog-uia.txt`, `subaction-Core-Actions-Set-Sub-Action-Weight-dialog.png` (Add SubAction - Core > Actions > Set Sub-Action Weight, ~600×275): `Action` (button), `<No Action Selected>` (select), `Weight` (text), `Weight can be a fixed value, or a parsed value, using variables and/or inline functions, and the resulting value needs to be a double or number` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
