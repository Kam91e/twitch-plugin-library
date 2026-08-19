---
title: "Streamer.bot — Triggers: Core > File Folder Watcher"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - core
source: "https://docs.streamer.bot/api/triggers/core/file-folder-watcher"
last-reviewed: 2026-07-31
---

# Core — File Folder Watcher

> Triggers when a File/Folder Watcher is changed, created, deleted, or renamed.

## Changed

**Location:** `Core > File Folder Watcher > Changed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-File-Folder-Watcher-Changed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a File/Folder Watcher is Changed. Using a file: triggers when the content of a selected file changes. Using a folder: triggers when a file from the selected folder changes.
**Parameters:** Watcher (Select) — select a watcher from the [Services > File/Folder Watcher](../../services.md#file-folder-watcher) tab; `Any` triggers on any watcher (quickly register a new watcher via the `Create File Watcher` button)
**Parameters (app-verified):** App-verified from `trigger-Core-File-Folder-Watcher-Changed-dialog-uia.txt`, `trigger-Core-File-Folder-Watcher-Changed-dialog.png` (Add Trigger - Core > File/Folder Watcher > Changed, ~600×140): `Watcher` (select), `Create File Watcher` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Created

**Location:** `Core > File Folder Watcher > Created`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-File-Folder-Watcher-Created-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a File/Folder Watcher is Created. Using a file: triggers when the content of a selected file changes. Using a folder: triggers when a file from the selected folder changes.
**Parameters:** Watcher (Select) — select a watcher from the [Services > File/Folder Watcher](../../services.md#file-folder-watcher) tab; `Any` triggers on any watcher (quickly register a new watcher via the `Create File Watcher` button)
**Parameters (app-verified):** App-verified from `trigger-Core-File-Folder-Watcher-Created-dialog-uia.txt`, `trigger-Core-File-Folder-Watcher-Created-dialog.png` (Add Trigger - Core > File/Folder Watcher > Created, ~600×140): `Watcher` (select), `Create File Watcher` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Deleted

**Location:** `Core > File Folder Watcher > Deleted`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-File-Folder-Watcher-Deleted-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a File/Folder Watcher is Deleted. Using a file: triggers when the content of a selected file changes. Using a folder: triggers when a file from the selected folder changes.
**Parameters:** Watcher (Select) — select a watcher from the [Services > File/Folder Watcher](../../services.md#file-folder-watcher) tab; `Any` triggers on any watcher (quickly register a new watcher via the `Create File Watcher` button)
**Parameters (app-verified):** App-verified from `trigger-Core-File-Folder-Watcher-Deleted-dialog-uia.txt`, `trigger-Core-File-Folder-Watcher-Deleted-dialog.png` (Add Trigger - Core > File/Folder Watcher > Deleted, ~600×140): `Watcher` (select), `Create File Watcher` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Renamed

**Location:** `Core > File Folder Watcher > Renamed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-File-Folder-Watcher-Renamed-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Trigger for when a File/Folder Watcher is Renamed. Using a file: triggers when the content of a selected file changes. Using a folder: triggers when a file from the selected folder changes.
**Parameters:** Watcher (Select) — select a watcher from the [Services > File/Folder Watcher](../../services.md#file-folder-watcher) tab; `Any` triggers on any watcher (quickly register a new watcher via the `Create File Watcher` button)
**Parameters (app-verified):** App-verified from `trigger-Core-File-Folder-Watcher-Renamed-dialog-uia.txt`, `trigger-Core-File-Folder-Watcher-Renamed-dialog.png` (Add Trigger - Core > File/Folder Watcher > Renamed, ~600×140): `Watcher` (select), `Create File Watcher` (button); Ok/Cancel present.
**Variables:** Not documented in official docs
