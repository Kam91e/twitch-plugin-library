---
title: "Streamer.bot — Sub-Actions: Core > Globals"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core/globals"
last-reviewed: 2026-07-31
---

# Core — Globals

> Sub-actions to create, update, fetch, and clear global variables.

## Clear Non-Persisted Globals

**Location:** `Core > Globals > Clear Non-Persisted Globals`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Reset all temporary global variables. Clears all temporary non-user global variables, effectively the same as restarting Streamer.bot.
**Parameters:** No parameters
**Variables:** Not documented in official docs

## Clear Non-Persisted User Globals

**Location:** `Core > Globals > Clear Non-Persisted User Globals`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Reset all temporary user global variables. Clears all temporary user global variables, effectively the same as restarting Streamer.bot.
**Parameters:** No parameters
**Variables:** Not documented in official docs

## Get Global Variable

**Location:** `Core > Globals > Get Global Variable`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Globals-Global-Get--dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Fetch the value of a global variable and populate a local argument. The value of **persisted** non-user globals can be accessed without this sub-action by wrapping the name with `~`, for example `~myPersistedGlobalVariable~`.
**Parameters:** App-verified from `subaction-Core-Globals-Global-Get--dialog-uia.txt`, `subaction-Core-Globals-Global-Get--dialog.png` (Add SubAction - Core > Globals > Global (Get), ~600×440): `This SubAction will let you get a global variable and add it to the arguments that are passed along to other SubActions` (select), `Persisted` (text), `Variable Name` (text), `Destination Variable` (text), `Default Value` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Set Global Variable

**Location:** `Core > Globals > Set Global Variable`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Globals-Global-Set--dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Create or update the value of a global variable. This does **not** make the value available in your action — to access it you must first assign it to a local variable with the `Get Global Variable` sub-action.
**Parameters:** App-verified from `subaction-Core-Globals-Global-Set--dialog-uia.txt`, `subaction-Core-Globals-Global-Set--dialog.png` (Add SubAction - Core > Globals > Global (Set), ~600×335): `This SubAction will set the value of either an argument to the value, or a global variable from an argument, or to the value specified` (select), `Destination` (select), `Persisted` (button), `Auto Type` (text), `Variable Name` (text), `Sets the global variable to the the value which can be a fixed value, or a parsed value, using variables and/or inline functions` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
