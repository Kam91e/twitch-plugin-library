---
title: "Streamer.bot — Sub-Actions: Elgato > Stream Deck"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - elgato
source: "https://docs.streamer.bot/api/sub-actions/elgato/stream-deck"
last-reviewed: 2026-07-31
---

# Elgato — Stream Deck

> Sub-actions to control Elgato Stream Deck keys and dials from Streamer.bot: state, title, background, value and temporary feedback.

## Execute MCP Action

**Location:** `Elgato > Stream Deck > Execute MCP Action`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Execute-MCP-Action-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Execute an MCP action on a Stream Deck

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Execute-MCP-Action-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Execute-MCP-Action-dialog.png` (Add SubAction - Elgato > Stream Deck > Execute MCP Action, ~600×139): `Action` (text), `Elgato StreamDeck MCP is Not Connected!` (button), `Test` (button), `Not Connected` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Background

**Location:** `Elgato > Stream Deck > Set Background`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Set-Background-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the background image of a Stream Deck key or dial

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Set-Background-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Set-Background-dialog.png` (Add SubAction - Elgato > Stream Deck > Set Background, ~600×305): `Button ID` (text), `Image` (text), `Color` (text), `State` (text), `You can get the ButtonID from the StreamDeck Application, and Image/State supports variables. State is optional` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set State

**Location:** `Elgato > Stream Deck > Set State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Set-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the active state of a Stream Deck key or dial

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Set-State-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Set-State-dialog.png` (Add SubAction - Elgato > Stream Deck > Set State, ~600×204): `Button ID` (text), `State` (text), `You can get the ButtonID from the StreamDeck Application, and State supports variables.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Title

**Location:** `Elgato > Stream Deck > Set Title`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Set-Title-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the title of a Stream Deck key or dial

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Set-Title-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Set-Title-dialog.png` (Add SubAction - Elgato > Stream Deck > Set Title, ~600×264): `Button ID` (text), `Title` (text), `State` (text), `You can get the ButtonID from the StreamDeck Application, and Title/State supports variables.  State is optional.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Set Value

**Location:** `Elgato > Stream Deck > Set Value`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Set-Value-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Modify the value of a Status Indicator key or dial

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Set-Value-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Set-Value-dialog.png` (Add SubAction - Elgato > Stream Deck > Set Value, ~600×204): `Button ID` (text), `Value` (text), `You can get the ButtonID from the StreamDeck Application, and Value supports variables.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Show Alert

**Location:** `Elgato > Stream Deck > Show Alert`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Show-Alert-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Flash a temporary warning on a Stream Deck key or dial

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Show-Alert-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Show-Alert-dialog.png` (Add SubAction - Elgato > Stream Deck > Show Alert, ~600×163): `Button ID` (text), `You can get the ButtonID from the StreamDeck Application.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Show OK

**Location:** `Elgato > Stream Deck > Show OK`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Show-Ok-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Flash a temporary checkmark on a Stream Deck key or dial

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Show-Ok-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Show-Ok-dialog.png` (Add SubAction - Elgato > Stream Deck > Show Ok, ~600×163): `Button ID` (text), `You can get the ButtonID from the StreamDeck Application.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs

## Toggle State

**Location:** `Elgato > Stream Deck > Toggle State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Elgato-Stream-Deck-Toggle-State-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Toggle the current state of a Stream Deck key or dial

**Parameters:** App-verified from `subaction-Elgato-Stream-Deck-Toggle-State-dialog-uia.txt`, `subaction-Elgato-Stream-Deck-Toggle-State-dialog.png` (Add SubAction - Elgato > Stream Deck > Toggle State, ~600×163): `Button ID` (text), `You can get the ButtonID from the StreamDeck Application.` (button); Ok/Cancel present.

**Variables:** Not documented in official docs
