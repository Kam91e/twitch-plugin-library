---
title: "Streamer.bot — Services"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - services
  - watcher
  - timers
  - credits
  - quotes
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/ffw-panel2-uia.txt"
last-reviewed: 2026-08-04
---

# Services

> Reference for the Streamer.bot **Services** tab (v1.0.4, Windows 10): all six sections — File/Folder Watcher, Timers, File Tails, Process Watcher, Credits, and Quotes — with panel content, right-click menus, and dialogs.

## Services Overview

Open **Services** from the left navigation. The landing page lists six sections, each opening its own panel on click (the sidebar sub-nav items mirror the same six entries):

1. **File/Folder Watcher** — watch files and folders for changes
2. **Timers** — timed actions that fire on an interval
3. **File Tails** — follow the tail of log files
4. **Process Watcher** — a status panel for the process-watching service
5. **Credits** — event credits shown at end of stream
6. **Quotes** — store and recall viewer quotes

The official docs (v1.0.5) cover these sections only as trigger API pages; the configuration panels below are captured from the live v1.0.4 application.

## File/Folder Watcher

Opens **File/Folder Watcher** in the breadcrumb. Panel content:

- Grid columns: **Folder, Filter, Enabled** (empty grid at capture time)
- **Create File Watcher** button

**Right-click** on the grid body → **Add** only (no Edit/Delete on an empty grid).

### Add File Watcher dialog

Opened from the right-click menu. Captured fields:

- **Name** — text input
- **Folder** — path input with a browse button
- **Filter** — file pattern filter
- **Enabled** — toggle
- **Ok / Cancel** buttons

Evidence: `ffw-panel2`, `ffw-ctx3`.

## Timers

Opens **Timers** in the breadcrumb. Panel content:

- Grid columns: **Name, Enabled, Repeat, Interval, Lines** (empty grid at capture time)

**Right-click** on the grid body → **Add** only.

### Add Timed Action dialog

Dialog 600×457, opened from the right-click menu:

1. **Enabled** — toggle
2. **Repeat** — toggle ("Repeat the action every interval" behavior)
3. **Random Interval** — toggle (randomize the interval between fires)
4. **Name** — text input
5. **Interval (seconds)** — numeric spinner
6. **Lines** — numeric spinner
7. Helper text explaining the timing behavior
8. **Ok / Cancel** buttons

Evidence: `timers-panel3`, `timers-ctx-body`, `timers-add-dialog`.

## File Tails

Opens **File Tails** in the breadcrumb. Panel content:

- Grid columns: **Name, File Path, Enabled** (empty grid at capture time)

**Right-click** on the grid body → **Add** only.

### Add File Tail dialog

Dialog 600×267, opened from the right-click menu:

1. **Enabled** — toggle
2. **Name** — text input
3. **File Path** — path input with a browse button
4. Helper text listing the available variables: `%filePath%`, `%fileName%`, `%line%`
5. **Ok / Cancel** buttons

Evidence: `file-tails-panel`, `file-tails-ctx`, `file-tails-add-dialog`.

## Process Watcher

Opens **Process Watcher** in the breadcrumb. **This is a status panel, not a process list** (an earlier capture mislabeled a File Tails grid as Process Watcher; corrected by observer verification):

- **Auto Start** — toggle (shown **Off**); enables launching the watcher on Streamer.bot startup
- **Service Status** — "Stopped"
- **Start** button — starts the service

**Right-click**: no context menu observed on the panel body.

Evidence: `pw-state-before-rc`, `process-watcher-ctx`.

## Credits

Opens **Credits** in the breadcrumb. Panel content, top to bottom:

- **Auto Reset** — numeric spinner in hours (steps 13↔12 on the up/down arrows) controlling when the credits reset
- **Reset** button — resets the current credits; a direct action with **no confirmation dialog**
- **Events to Record** — checkbox list (scrollable; 12 items, all leaf nodes, no hidden items at bottom scroll): Follows, Cheers, Subs, ReSubs, Gift Subs, Gift Bombs, Raided, Reward Redemptions, Goal Contributions, Game Updates, Pyramids, Hype Trains
- **User Present (spoke)** — checkbox list, fully visible, 6 items: Editors, Moderators, Subscribers, VIPs, Groups, Users
- **Track Top** — checkbox list, fully visible (Cheer, Channel Points Used, …)

**Right-click**: no context menu (tested on body and on a row).

**Left-click behaviors**: checkboxes toggle Off↔On; the spinner up/down arrows step the value; the Reset button acts immediately.

Evidence: `credits-panel3`, `credits-ctx`, `credits-ctx-row`.

## Quotes

Opens **Quotes** in the breadcrumb. Panel content:

- Grid columns: **ID, Timestamp, User, Platform, Category, Quote** (empty grid at capture time)

**Right-click** on the grid body → **Add** only.

### Add Quote dialog

Dialog 650×447, opened from the right-click menu:

1. **Timestamp** — text input with two additional buttons
2. **User** — text input
3. **Platform** — combo selector
4. **Category** — combo selector
5. **Quote** — multi-line text area
6. **Ok / Cancel** buttons

Evidence: `quotes-panel`, `quotes-ctx`, `quotes-add-dialog`.

## Evidence gaps

- All grids (File/Folder Watcher, Timers, File Tails, Quotes) were **empty** at capture time — no Edit/Delete right-click items or row behaviors could be verified. Edit/Delete entries appear on non-empty grids.
- The **Process Watcher** panel shows no process list and no per-process configuration; it is a service status panel only. If a newer version exposes processes, that would need a re-capture.
- The **Credits** Track Top list's full item set was not enumerated (only the first two items were read before the capture ended).
- Docs coverage for these sections is limited to trigger API pages; panel details are app-evidence only.
