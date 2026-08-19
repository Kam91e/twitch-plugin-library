---
title: "Streamer.bot — Sub-Actions: Core > Commands"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core/commands"
last-reviewed: 2026-07-31
---

# Core — Commands

> Sub-actions to query the enabled state of commands and command groups, fetch configured commands, and modify command or command group states.

## Get Command Group State

**Location:** `Core > Commands > Get Command Group State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Commands-Get-Command-Group-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Get the current enabled state for all commands in a group
**Parameters:** App-verified from `subaction-Core-Commands-Get-Command-Group-State-dialog-uia.txt`, `subaction-Core-Commands-Get-Command-Group-State-dialog.png` (Add SubAction - Core > Commands > Get Command Group State, ~600×138): `Group` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Get Command State

**Location:** `Core > Commands > Get Command State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Commands-Get-Command-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Check the current enabled state of a command. The value is stored in the Boolean variable `commandState` and can be `True` or `False`.
**Parameters:** Command (Dropdown) — select an existing command to get its state
**Parameters (app-verified):** App-verified from `subaction-Core-Commands-Get-Command-State-dialog-uia.txt`, `subaction-Core-Commands-Get-Command-State-dialog.png` (Add SubAction - Core > Commands > Get Command State, ~600×139): `No commands found!` (button), `Command` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Get Commands

**Location:** `Core > Commands > Get Commands`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Commands-Get-Commands-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Fetch a list of all configured commands. Useful for outputting a command list to chat. Will not include commands that have their location set to `Anywhere`.
**Parameters:** App-verified from `subaction-Core-Commands-Get-Commands-dialog-uia.txt`, `subaction-Core-Commands-Get-Commands-dialog.png` (Add SubAction - Core > Commands > Get Commands, ~600×232): `Group` (select), `Variable Name` (text), `Include All` (button), `Ignore Aliases` (button), `Has Permission` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Command Group State

**Location:** `Core > Commands > Set Command Group State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Commands-Set-Command-Group-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the enabled state of a command group
**Parameters:** Group (Dropdown, required) — select the command group to modify; State (Dropdown, required) — select the new state to apply
**Parameters (app-verified):** App-verified from `subaction-Core-Commands-Set-Command-Group-State-dialog-uia.txt`, `subaction-Core-Commands-Set-Command-Group-State-dialog.png` (Add SubAction - Core > Commands > Set Command Group State, ~600×183): `Group` (select), `State` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Command State

**Location:** `Core > Commands > Set Command State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Commands-Set-Command-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the enabled state of a command
**Parameters:** Command (Dropdown, required) — select the command to modify; State (Dropdown, required) — select the new state to apply
**Parameters (app-verified):** App-verified from `subaction-Core-Commands-Set-Command-State-dialog-uia.txt`, `subaction-Core-Commands-Set-Command-State-dialog.png` (Add SubAction - Core > Commands > Set Command State, ~600×165): `Add a Command!` (select), `State` (select), `No Commands Found!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
