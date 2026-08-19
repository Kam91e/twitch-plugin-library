---
title: "Streamer.bot — Sub-Actions: Core"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core"
last-reviewed: 2026-07-31
---

# Core

> Sub-actions for the Streamer.bot core platform: actions, commands, file I/O, globals, logic, quotes, and sounds, plus a range of direct utility sub-actions.

Core sub-actions are the foundational building blocks of Streamer.bot automation — running actions, branching logic, working with files and globals, and more. This reference documents each sub-action's menu location, description, parameters, and variables. Official docs: [docs.streamer.bot/api/sub-actions/core](https://docs.streamer.bot/api/sub-actions/core).

## Groups

- [Actions](actions.md) — run actions, and query or modify the state of actions, action groups, and sub-actions
- [Commands](commands.md) — query and modify the enabled state of commands and command groups, fetch configured commands
- [File I/O](file-io.md) — check for and read from files and folders, write variable data to files
- [Globals](globals.md) — create, update, fetch, and clear global variables
- [Logic](logic.md) — control flow: branching, looping, breaks, input dialogs, random numbers
- [Quotes](quotes.md) — add, delete, count, and retrieve quotes
- [Sounds](sounds.md) — play audio files and stop sound playback

## Core

### Delay (single-item group — the group IS the sub-action)

**Location:** `Core > Delay`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Delay-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a delay between sub-actions
**Parameters:** App-verified from `subaction-Core-Delay-dialog-uia.txt`, `subaction-Core-Delay-dialog.png` (Add SubAction - Core > Delay, ~600×188): `Delay` (text), `Random` (button), `You can enter a %variable% in either field, or a number.  The value is in milliseconds.` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Action Queues

### Clear Action Queue

**Location:** `Core > Action Queues > Clear Action Queue`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Action-Queues-Clear-Action-Queue-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Remove all pending actions from an Action Queue
**Parameters:** Queue (Select, required, default `All`) — select the queue to clear, or select `All` to clear all queues
**Variables:** Not documented in official docs

### Set Action Queue Blocking State

**Location:** `Core > Action Queues > Set Action Queue Blocking State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Action-Queues-Set-Action-Queue-Blocking-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Toggle blocking on or off for an Action Queue
**Parameters:** Queue (Select, required) — select an existing action queue; State (Select, required, default `Enabled`) — `Enabled` to enable blocking, `Disabled` to disable it, `Toggle` to toggle the existing state
**Variables:** Not documented in official docs

### Set Action Queue Pause State

**Location:** `Core > Action Queues > Set Action Queue Pause State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Action-Queues-Set-Action-Queue-Pause-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Pause or resume an Action Queue. Pausing all queues will effectively disable the bot from performing any commands, alerts, redeems, etc., until the queue is resumed.
**Parameters:** Queue (Select, required) — select an existing action queue, or `All` to modify all queues; State (Select, required, default `Pause`) — `Pause` or `Resume`; Clear (Toggle, default false) — also remove all pending actions in the queue
**Variables:** Not documented in official docs

## Arguments

### Set Argument

**Location:** `Core > Arguments > Set Argument`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Arguments-Set-Argument-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Assign a custom variable for use by the following sub-actions
**Parameters:** App-verified from `subaction-Core-Arguments-Set-Argument-dialog-uia.txt`, `subaction-Core-Arguments-Set-Argument-dialog.png` (Add SubAction - Core > Arguments > Set Argument, ~600×300): `This SubAction will allow you to set the value of an argument.  These are the %variables% you use in other SubActions` (text), `Variable Name` (text), `Value` (text), `Auto Type` (button), `Variable Name or Value can be a fixed value, or a parsed value, using variables and/or inline functions` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## C#

### Execute C# Code

**Location:** `Core > C# > Execute C# Code`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-C-Execute-C-Code-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Sub-action for writing advanced custom actions with C# code
**Parameters:** App-verified from `subaction-Core-C-Execute-C-Code-dialog-uia.txt`, `subaction-Core-C-Execute-C-Code-dialog.png` (Add SubAction - Core > C# > Execute C# Code, ~900×694): `Compiling Log` (list), `Monaco Settings` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

### Execute C# Method

**Location:** `Core > C# > Execute C# Method`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-C-Execute-C-Method-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Execute a custom method defined in another Execute C# Code sub-action. Directly calls into methods defined in any existing Execute C# Code sub-actions in your Streamer.bot instance.
**Parameters:** App-verified from `subaction-Core-C-Execute-C-Method-dialog-uia.txt`, `subaction-Core-C-Execute-C-Method-dialog.png` (Add SubAction - Core > C# > Execute C# Method, ~600×333): `No Execute C# Code Sub-Actions were found!` (button), `Methods` (button), `Run on UI Thread` (button), `Save Result to Variable` (text), `Variable Name` (text), `No Execute C# Sub-Aactions Found!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## File Tail

### Set File Tail State

**Location:** `Core > File Tail > Set File Tail State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-File-Tail-Set-File-Tail-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Enable or disable file tailing. Configure file tails under [Services > File Tails](../../services.md#file-tails) in Streamer.bot.
**Parameters:** App-verified from `subaction-Core-File-Tail-Set-File-Tail-State-dialog-uia.txt`, `subaction-Core-File-Tail-Set-File-Tail-State-dialog.png` (Add SubAction - Core > File Tail > Set File Tail State, ~600×181): `No File Tails Found` (select), `State` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## MIDI

### Control Change

**Location:** `Core > MIDI > Control Change`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-MIDI-Control-Change-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a MIDI Control Change message with Streamer.bot
**Parameters:** Name — enter a name for this MIDI event; Device — select a configured [MIDI device](../../midi.md); Channel — select a MIDI channel (optional, leave blank to broadcast to all channels); Controller — enter a custom value for the Control Function (MIDI Byte 2), or use the `Learn From` option; Value — enter a custom Value (MIDI Byte 3), or use the `Learn From` option
**Variables:** Not documented in official docs

### Generic Event

**Location:** `Core > MIDI > Generic Event`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-MIDI-Generic-Event-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a Generic MIDI message to your MIDI device
**Parameters:** Name — enter a name for this MIDI event; Device — select a configured MIDI device; Command — select the MIDI event type (`NoteOn`, `NoteOff`, `ControlChange`, `PatchChange`, `ChannelAfterTouch`, `PitchWheelChange`); Channel — select a MIDI channel (optional); Data1 — custom value (MIDI Byte 2) or `Learn From`; Data2 — custom value (MIDI Byte 3) or `Learn From`; Ignore NoteOff — ignore `NoteOff` events, useful for devices which send both `NoteOn` and `NoteOff` simultaneously
**Variables:** Not documented in official docs

### Note On

**Location:** `Core > MIDI > Note On`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-MIDI-Note-On-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a MIDI Note On message with Streamer.bot
**Parameters:** Name — enter a name for this MIDI event; Device — select a configured MIDI device; Channel — select a MIDI channel (optional); Note — custom value for the Note Type (MIDI Byte 2) or `Learn From`; Velocity — custom note Velocity (MIDI Byte 3) or `Learn From`; Duration — hold duration in milliseconds; Send Note Off — toggle to send a `NoteOff` message at the end of the configured duration
**Variables:** Not documented in official docs

## Misc

### Comment

**Location:** `Core > Misc > Comment`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Misc-Comment-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Add a comment to your sub-actions list. Useful for section labels/titles, detailed instructions, argument descriptions, and anything you find useful.
**Parameters:** App-verified from `subaction-Core-Misc-Comment-dialog-uia.txt`, `subaction-Core-Misc-Comment-dialog.png` (Add SubAction - Core > Misc > Comment, ~600×239): `Comment` (text), `Color` (text), `Leave color empty to use Application default color for comments` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Log

**Location:** `Core > Misc > Log`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Misc-Log-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send output to the Streamer.bot log files. Can be used for debugging your actions and seeing what is happening when they run.
**Parameters:** App-verified from `subaction-Core-Misc-Log-dialog-uia.txt`, `subaction-Core-Misc-Log-dialog.png` (Add SubAction - Core > Misc > Log, ~600×181): `Log Level` (select), `Message` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Network

### Fetch URL

**Location:** `Core > Network > Fetch URL`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Network-Fetch-URL-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Fetch a remote URL and retrieve the response body. Behaves much like the URL commands in Nightbot and many other bots.
**Parameters:** App-verified from `subaction-Core-Network-Fetch-URL-dialog-uia.txt`, `subaction-Core-Network-Fetch-URL-dialog.png` (Add SubAction - Core > Network > Fetch URL, ~600×436): `URL` (text), `Parse Results as JSON` (button), `Auto-Type non-JSON Result` (text), `Variable Name` (text), `Headers` (data grid), `Value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### UDP Broadcast

**Location:** `Core > Network > UDP Broadcast`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Network-UDP-Broadcast-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Broadcast a UDP payload to a specific port
**Parameters:** App-verified from `subaction-Core-Network-UDP-Broadcast-dialog-uia.txt`, `subaction-Core-Network-UDP-Broadcast-dialog.png` (Add SubAction - Core > Network > UDP Broadcast, ~600×340): `UDP Port` (text), `Payload Data` (text), `Using this you can send a UDP broadcast packet which will contain the data you enter in payload.` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Signals

### Send Local Signal

**Location:** `Core > Signals > Send Local Signal`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Signals-Send-Local-Signal-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Send a signal within the local instance of Streamer.bot
**Parameters:** App-verified from `subaction-Core-Signals-Send-Local-Signal-dialog-uia.txt`, `subaction-Core-Signals-Send-Local-Signal-dialog.png` (Add SubAction - Core > Signals > Send Local Signal, ~600×416): `Signal name` (text), `Queue Signal` (data grid), `Arguments` (data grid), `Value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Wait for Local Signal

**Location:** `Core > Signals > Wait for Local Signal`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Signals-Wait-For-Local-Signal-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Wait for a signal within the local instance of Streamer.bot. If the sub-action times out, only the `signalTimeout` variable will be populated with a value of `True`.
**Parameters:** App-verified from `subaction-Core-Signals-Wait-For-Local-Signal-dialog-uia.txt`, `subaction-Core-Signals-Wait-For-Local-Signal-dialog.png` (Add SubAction - Core > Signals > Wait For Local Signal, ~600×229): `Signal name` (text), `Overwrite Variables` (text), `Timeout` (text), `If timeout is left blank, it defaults to 30 seconds (or 30,000ms)` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## System

### Keyboard Press

**Location:** `Core > System > Keyboard Press`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-System-Keyboard-Press-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Simulate key press events to the active application or trigger global hotkeys
**Parameters:** App-verified from `subaction-Core-System-Keyboard-Press-dialog-uia.txt`, `subaction-Core-System-Keyboard-Press-dialog.png` (Add SubAction - Core > System > Keyboard Press, ~600×165): `Key` (select), `Modifiers` (button), `Ctrl` (button), `Alt` (button), `Shift` (button), `Test` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Run a Program

**Location:** `Core > System > Run a Program`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-System-Run-a-Program-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Execute an external program or script
**Parameters:** App-verified from `subaction-Core-System-Run-a-Program-dialog-uia.txt`, `subaction-Core-System-Run-a-Program-dialog.png` (config dialog, size unknown): `Working Directory` (text), `Arguments` (text), `Wait maximum` (text), `Set wait time to 0 seconds to run without waiting` (data grid), `Environment Variables` (data grid), `Value` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Toast Notification

**Location:** `Core > System > Toast Notification`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-System-Toast-Notification-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Display a custom Windows toast notification
**Parameters:** App-verified from `subaction-Core-System-Toast-Notification-dialog-uia.txt`, `subaction-Core-System-Toast-Notification-dialog.png` (Add SubAction - Core > System > Toast Notification, ~600×424): `Toast Id` (text), `Title` (text), `Text` (text), `Attribution` (text), `Icon Path` (text), `Test` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Timers

### Set Timer State

**Location:** `Core > Timers > Set Timer State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Timers-Set-Timer-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Enable, Disable or Toggle the state of the selected timer
**Parameters:** Timer — the timer you wish to alter the state of; State — the new state to apply, either `Enabled`, `Disabled`, or `Toggle`
**Variables:** Not documented in official docs

## Triggers (single-item group — the group IS the sub-action)

### Custom Event Trigger

**Location:** `Core > Triggers > Custom Event Trigger`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Triggers-Custom-Event-Trigger-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Triggers custom code events outside of C#
**Parameters:** App-verified from `subaction-Core-Triggers-Custom-Event-Trigger-dialog-uia.txt`, `subaction-Core-Triggers-Custom-Event-Trigger-dialog.png` (Add SubAction - Core > Triggers > Custom Event Trigger, ~600×164): `Event Name` (text), `Use Args` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

### Trigger Custom Event

**Location:** `Core > Triggers > Trigger Custom Event`
**Description:** Triggers custom code events outside of C#
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

### Set Trigger State

**Location:** `Core > Triggers > Set Trigger State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Triggers-Set-Trigger-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Sets the Trigger State for an individual trigger on a specified action
**Parameters:** App-verified from `subaction-Core-Triggers-Set-Trigger-State-dialog-uia.txt`, `subaction-Core-Triggers-Set-Trigger-State-dialog.png` (Add SubAction - Core > Triggers > Set Trigger State, ~600×220): `Action` (button), `<No Action Selected>` (select), `State` (select); Ok/Cancel present.
**Variables:** Not documented in official docs

## Users

### Clear Users From Group

**Location:** `Core > Users > Clear Users From Group`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Users-Clear-Users-From-Group-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Not documented in official docs (corpus page marked as work in progress)
**Parameters:** App-verified from `subaction-Core-Users-Clear-Users-From-Group-dialog-uia.txt`, `subaction-Core-Users-Clear-Users-From-Group-dialog.png` (Add SubAction - Core > Users > Clear Users From Group, ~600×124): `Add a Group!` (button), `No Groups Found!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Voice Control

### Set Voice Control Command State

**Location:** `Core > Voice Control > Set Voice Control Command State`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Voice-Control-Set-Voice-Control-Command-State-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Set the enabled state of a voice control command. The dialog offers a **Command** dropdown listing all commands created in the [Voice Control](../../voice-control.md) tab, and a **State** dropdown with the states Enabled, Disabled, or Toggle.
**Parameters:** Command (dropdown) — select the voice control command to set the state of; State (dropdown) — `Enabled` enables the command, `Disabled` disables it, `Toggle` toggles it (Enabled/Disabled)
**Variables:** Not documented in official docs

### Set Voice Control Command

**Location:** `Core > Voice Control > Set Voice Control Command`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Voice-Control-Set-Voice-Control-Command-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Assign an action to a voice control command (Streamer.bot 0.18+), then trigger it with a keyword or sentence that you say
**Parameters:** App-verified from `subaction-Core-Voice-Control-Set-Voice-Control-Command-dialog-uia.txt`, `subaction-Core-Voice-Control-Set-Voice-Control-Command-dialog.png` (Add SubAction - Core > Voice Control > Set Voice Control Command, ~600×180): `Add a Voice Control Command!` (text), `Command` (text), `No Voice Control Commands Found!` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
