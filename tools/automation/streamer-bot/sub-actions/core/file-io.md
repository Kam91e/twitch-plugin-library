---
title: "Streamer.bot — Sub-Actions: Core > File I/O"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - sub-actions
  - core
source: "https://docs.streamer.bot/api/sub-actions/core/file-io"
last-reviewed: 2026-07-31
---

# Core — File I/O

> Sub-actions to check for and read from files and folders, and to write variable data to files.

## File Exists

**Location:** `Core > File I/O > File Exists`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-File-IO-File-Exists-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Determines if a given file exists
**Parameters:** App-verified from `subaction-Core-File-IO-File-Exists-dialog-uia.txt`, `subaction-Core-File-IO-File-Exists-dialog.png` (Add SubAction - Core > File IO > File Exists, ~600×228): `File to Check if Exists` (text), `Variable Name to Use (if empty, fileExists is used)` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Folder Exists

**Location:** `Core > File I/O > Folder Exists`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-File-IO-Folder-Exists-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Determines if a given folder exists
**Parameters:** App-verified from `subaction-Core-File-IO-Folder-Exists-dialog-uia.txt`, `subaction-Core-File-IO-Folder-Exists-dialog.png` (Add SubAction - Core > File IO > Folder Exists, ~600×228): `Folder to Check if Exists` (text), `Variable Name to Use (if empty, folderExists is used)` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Read Lines From File

**Location:** `Core > File I/O > Read Lines From File`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-File-IO-Read-Lines-From-File-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Load the contents of a file into variables
**Parameters:** App-verified from `subaction-Core-File-IO-Read-Lines-From-File-dialog-uia.txt`, `subaction-Core-File-IO-Read-Lines-From-File-dialog.png` (Add SubAction - Core > File IO > Read Lines From File, ~600×279): `File to Read From` (text), `Variable Name to Use (if empty, line is used)` (text), `Parse Variables` (button), `Attempt Auto-Typing` (button); Ok/Cancel present.
**Variables:** Not documented in official docs

## Read Random Lines From File

**Location:** `Core > File I/O > Read Random Lines From File`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-File-IO-Read-Random-Line-From-File-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Load the contents of a file and populate a set of variables from random lines
**Parameters:** App-verified from `subaction-Core-File-IO-Read-Random-Line-From-File-dialog-uia.txt`, `subaction-Core-File-IO-Read-Random-Line-From-File-dialog.png` (Add SubAction - Core > File IO > Read Random Line From File, ~600×369): `File to Read From` (text), `Variable Name to Use (if empty, line is used)` (text), `Parse Variables` (button), `Overwrite Existing Variable(s)` (button), `Attempt Auto-Typing` (text), `Count` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Read Specific Line From File

**Location:** `Core > File I/O > Read Specific Line From File`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-File-IO-Read-Specific-Line-From-File-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Populate a variable with the contents of a specific line from a file
**Parameters:** App-verified from `subaction-Core-File-IO-Read-Specific-Line-From-File-dialog-uia.txt`, `subaction-Core-File-IO-Read-Specific-Line-From-File-dialog.png` (Add SubAction - Core > File IO > Read Specific Line From File, ~600×319): `File to Read From` (text), `Variable Name to Use (if empty, line is used)` (text), `Parse Variables` (button), `Attempt Auto-Typing` (text), `Line Number` (text); Ok/Cancel present.
**Variables:** Not documented in official docs

## Write To File

**Location:** `Core > File I/O > Write To File`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `subaction-Core-File-IO-Write-To-File-dialog-uia.txt`; see `creation-flows-catalog.txt`)
**Description:** Write variable data to a specified file
**Parameters:** App-verified from `subaction-Core-File-IO-Write-To-File-dialog-uia.txt`, `subaction-Core-File-IO-Write-To-File-dialog.png` (Add SubAction - Core > File IO > Write To File, ~600×463): `File to Write To` (text), `Append to File` (text), `Text to Write` (text); Ok/Cancel present.
**Variables:** Not documented in official docs
