---
title: "Streamer.bot — Triggers: Core"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - core
source: "https://docs.streamer.bot/api/triggers/core"
last-reviewed: 2026-07-31
---

# Core

> Triggers for the Streamer.bot core platform: application lifecycle, commands, inputs, MIDI, processes, quotes, system events, and voice control.

Core triggers are the built-in events that kick off Streamer.bot automation — from the bot starting up, to commands firing, hotkeys and mouse clicks, MIDI events, process watchers, file/folder watchers, quotes, clipboard changes, and voice control. This reference documents each trigger's menu location, description, and parameters. Official docs: [docs.streamer.bot/api/triggers/core](https://docs.streamer.bot/api/triggers/core).

## Groups

- [File Folder Watcher](file-folder-watcher.md) — triggers when a File/Folder Watcher is changed, created, deleted, or renamed
- [File I/O](file-io/index.md) — trigger for file I/O events, including when a file tail detects a change
- [Global Variables](global-variables.md) — triggers when global variables are created, deleted, or updated
- [Groups](groups.md) — triggers when groups are added, cleared, or removed, and when users are added or removed
- [WebSocket](websocket/index.md) — triggers for WebSocket client and custom server connections and messages

## Core

### Streamer.bot Started

**Location:** `Core > Streamer.bot Started`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when Streamer.bot is Started
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

### Test

**Location:** `Core > Test`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Test-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Test trigger — right-click the trigger and click the `Test Trigger` button to test your action
**Parameters:** App-verified from `trigger-Core-Test-dialog-uia.txt`, `trigger-Core-Test-dialog.png` (Add Trigger - Core > Test, ~600×324): `Arguments` (data grid), `Value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Timed Actions

**Location:** `Core > Timed Actions`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Timed-Actions-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Timed Action
**Parameters:** App-verified from `trigger-Core-Timed-Actions-dialog-uia.txt`, `trigger-Core-Timed-Actions-dialog.png` (Add Trigger - Core > Timed Actions, ~600×140): `Timers` (select), `Create Timer` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Commands

### Command Cooldown

**Location:** `Core > Commands > Command Cooldown`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Commands-Command-Cooldown-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Command is on Cooldown
**Parameters:** App-verified from `trigger-Core-Commands-Command-Cooldown-dialog-uia.txt`, `trigger-Core-Commands-Command-Cooldown-dialog.png` (Add Trigger - Core > Commands > Command Cooldown, ~600×140): `Command` (select), `Create Command` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Command Triggered

**Location:** `Core > Commands > Command Triggered`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Commands-Command-Triggered-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Command is Triggered
**Parameters:** App-verified from `trigger-Core-Commands-Command-Triggered-dialog-uia.txt`, `trigger-Core-Commands-Command-Triggered-dialog.png` (Add Trigger - Core > Commands > Command Triggered, ~600×140): `Command` (select), `Create Command` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Inputs

### Key Press

**Location:** `Core > Inputs > Key Press`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Inputs-Key-Press-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for hotkey combinations. This trigger replaces the `Hot Keys` configuration found in older versions of Streamer.bot.
**Parameters:** App-verified from `trigger-Core-Inputs-Key-Press-dialog-uia.txt`, `trigger-Core-Inputs-Key-Press-dialog.png` (Add Trigger - Core > Inputs > Key Press, ~600×139): `Key Combination` (text), `Capture Key` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Mouse Click

**Location:** `Core > Inputs > Mouse Click`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Inputs-Mouse-Click-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Triggered when a mouse button is clicked
**Parameters:** App-verified from `trigger-Core-Inputs-Mouse-Click-dialog-uia.txt`, `trigger-Core-Inputs-Mouse-Click-dialog.png` (Add Trigger - Core > Inputs > Mouse Click, ~600×148): `Button` (button), `Button 1` (button), `Button 2` (button), `Button 3` (button), `Button 4` (button), `Button 5` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## MIDI

### MIDI Message

**Location:** `Core > MIDI > MIDI Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-MIDI-MIDI-Message-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for incoming MIDI events
**Parameters:** Device (Select, required) — select a configured [MIDI device](../../midi.md#midi-in) connection; `Any` triggers on any device; Event (Select, required) — select a configured MIDI input event; `Any` triggers on any event (quickly register new MIDI event listeners via the `Add New Event` button)
**Variables:** Not documented in official docs

## Processes

### Process Started

**Location:** `Core > Processes > Process Started`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Processes-Process-Started-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Process is Started. This trigger relies on the Process Watcher service — enable it in Streamer.bot via [Services > Process Watcher](../../services.md#process-watcher).
**Parameters:** App-verified from `trigger-Core-Processes-Process-Started-dialog-uia.txt`, `trigger-Core-Processes-Process-Started-dialog.png` (Add Trigger - Core > Processes > Process Started, ~600×163): `Name` (text), `Leaving name empty is considered a catch-all and will trigger on any process starting.` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Process Stopped

**Location:** `Core > Processes > Process Stopped`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Processes-Process-Stopped-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Process is Stopped. This trigger relies on the Process Watcher service — enable it in Streamer.bot via [Services > Process Watcher](../../services.md#process-watcher).
**Parameters:** App-verified from `trigger-Core-Processes-Process-Stopped-dialog-uia.txt`, `trigger-Core-Processes-Process-Stopped-dialog.png` (Add Trigger - Core > Processes > Process Stopped, ~600×163): `Name` (text), `Leaving name empty is considered a catch-all and will trigger on any process stopping.` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Quotes

### Added

**Location:** `Core > Quotes > Added`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Quote is Added
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

### Show

**Location:** `Core > Quotes > Show`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Quote is Shown
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## System

### Clipboard Changed

**Location:** `Core > System > Clipboard Changed`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Trigger for clipboard changed
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

### Toast Activation

**Location:** `Core > System > Toast Activation`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-System-Toast-Activation-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Toast Activation
**Parameters:** Toast Id (Text) — filter on a specific ID to separate multiple toast notifications from each other; leaving blank is a catch-all and triggers on any id
**Variables:** Not documented in official docs

## Voice Control

### Command

**Location:** `Core > Voice Control > Command`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Voice-Control-Command-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Voice Control Command
**Parameters:** Voice Control (Select) — select a command from the [Voice Control](../../voice-control.md#commands) tab; `Any` triggers on any command (quickly register a voice command via the `Create Voice Command` button)
**Variables:** Not documented in official docs

### Dictation

**Location:** `Core > Voice Control > Dictation`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Voice-Control-Dictation-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Voice Control Dictation
**Parameters:** Voice Control (Select) — select a command from the [Voice Control](../../voice-control.md#commands) tab; `Any` triggers on any command (quickly register a voice command via the `Create Voice Command` button)
**Variables:** Not documented in official docs
