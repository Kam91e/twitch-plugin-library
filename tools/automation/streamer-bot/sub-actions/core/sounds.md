---
title: "Streamer.bot — Sub-Actions: Core > Sounds"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core/sounds"
last-reviewed: 2026-07-31
---

# Core — Sounds

> Sub-actions to play audio files from your computer or a folder, and to stop sound playback in Streamer.bot.

## Play Sound From Folder

**Location:** `Core > Sounds > Play Sound From Folder`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Sounds-Play-Sound-From-Folder-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Play a random audio file from a folder
**Parameters:** App-verified from `subaction-Core-Sounds-Play-Sound-From-Folder-dialog-uia.txt`, `subaction-Core-Sounds-Play-Sound-From-Folder-dialog.png` (config dialog, size unknown): `Audio Output Device` (select), `Name` (button), `Use Filename` (text), `Folder containing *.mp3 and *.wav` (text), `Finish playing before continuing` (button), `Recursive` (list), `Volume` (slider), `100%` (slider), `Test` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Play Sound

**Location:** `Core > Sounds > Play Sound`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Sounds-Play-Sound-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Play an audio file from your computer
**Parameters:** App-verified from `subaction-Core-Sounds-Play-Sound-dialog-uia.txt`, `subaction-Core-Sounds-Play-Sound-dialog.png` (Add SubAction - Core > Sounds > Play Sound, ~600×384): `Audio Output Device` (select), `Name` (button), `Use Filename` (text), `Sound file to play` (text), `Volume` (slider), `100%` (slider), `Test` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Stop All Sound Playback

**Location:** `Core > Sounds > Stop All Sound Playback`
**Add behavior:** direct — added immediately, no dialog (see `creation-flows-catalog.txt`)
**Description:** Stops all sounds that are currently playing in Streamer.bot
**Parameters:** Not documented in official docs
**Variables:** Not documented in official docs

## Stop Sound Playback

**Location:** `Core > Sounds > Stop Sound Playback`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-Sounds-Stop-Sound-Playback-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Stops the sounds indicated by Sound Name that are currently playing in Streamer.bot
**Parameters:** App-verified from `subaction-Core-Sounds-Stop-Sound-Playback-dialog-uia.txt`, `subaction-Core-Sounds-Stop-Sound-Playback-dialog.png` (Add SubAction - Core > Sounds > Stop Sound Playback, ~600×181): `Sound Name` (text), `Sound Name can be empty, in which case it will use "default", a variable, or a string you enter` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
