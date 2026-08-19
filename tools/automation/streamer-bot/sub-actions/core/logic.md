---
title: "Streamer.bot — Sub-Actions: Core > Logic"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core/logic"
last-reviewed: 2026-07-31
---

# Core — Logic

> Sub-actions for control flow: conditional branching, multi-way branching, looping, breaking out of actions, user input dialogs, and random number generation.

> **Version note (v1.0.5+):** Loop Continue / Loop Break are not present in v1.0.4; added in v1.0.5.

## Break

**Location:** `Core > Logic > Break`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Stop execution of the current action. This is a diagnostic sub-action that can be useful when testing or building out your actions.
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Get Input

**Location:** `Core > Logic > Get Input`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Logic-Get-Input-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Spawn a dialog to interactively retrieve user input
**Parameters:** App-verified from `subaction-Core-Logic-Get-Input-dialog-uia.txt`, `subaction-Core-Logic-Get-Input-dialog.png` (Add SubAction - Core > Logic > Get Input, ~600×408): `Title` (text), `Prompt` (text), `Default Value` (text), `Output Variable` (text), `Test` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Get Random Number

**Location:** `Core > Logic > Get Random Number`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Logic-Get-Random-Number-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Generate a random number for usage in subsequent sub-actions
**Parameters:** App-verified from `subaction-Core-Logic-Get-Random-Number-dialog-uia.txt`, `subaction-Core-Logic-Get-Random-Number-dialog.png` (Add SubAction - Core > Logic > Get Random Number, ~600×335): `Between` (text), `and` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## If / Else

**Location:** `Core > Logic > If / Else`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Logic-If-Else-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Perform conditional logic based on variable contents
**Parameters:** App-verified from `subaction-Core-Logic-If-Else-dialog-uia.txt`, `subaction-Core-Logic-If-Else-dialog.png` (Add SubAction - Core > Logic > If/Else, ~600×377): `Input` (text), `Operation` (select), `Auto Type` (text), `Value` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Loop Break

**Location:** `Core > Logic > Loop Break`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Break out of the current loop
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Loop Continue

**Location:** `Core > Logic > Loop Continue`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Continue to the next iteration of the loop
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Switch

**Location:** `Core > Logic > Switch`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Logic-Switch-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Allows for multi-way branching based on the value of an expression. Right-click the `Switch` sub-action and select "Add Case" to add cases; a case can hold one or more values. Only the first matching case is executed, otherwise the `default` case runs.
**Parameters:** App-verified from `subaction-Core-Logic-Switch-dialog-uia.txt`, `subaction-Core-Logic-Switch-dialog.png` (Add SubAction - Core > Logic > Switch, ~600×286): `Input` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## While

**Location:** `Core > Logic > While`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Logic-While-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Allow for looping of sub-actions
**Parameters:** App-verified from `subaction-Core-Logic-While-dialog-uia.txt`, `subaction-Core-Logic-While-dialog.png` (Add SubAction - Core > Logic > While, ~600×365): `Input` (text), `Operation` (select), `Value` (text), `Auto Type` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
