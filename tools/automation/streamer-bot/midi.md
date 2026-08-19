---
title: "Streamer.bot — MIDI"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - midi
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/midi-in-panel-uia.txt"
last-reviewed: 2026-08-04
---

# MIDI

> Reference for the Streamer.bot **MIDI** tab (v1.0.4, Windows 10): the landing page and the two sub-panels — MIDI In and MIDI Out — with device lists, right-click menus, and add-device dialogs.

## MIDI Overview

Open **MIDI** from the left navigation. The **MIDI** tab is itself a parent entry with two sub-items in the sidebar:

1. **MIDI In** — input devices and the MIDI events they can raise
2. **MIDI Out** — output devices for sending MIDI

The official docs (v1.0.5) do not include MIDI configuration pages; panel details below are app-evidence only.

## MIDI In

Opens **MIDI In** in the breadcrumb. Panel content: two grids stacked vertically.

**Devices grid** — columns: **Name, Device Name, Auto Open, Reconnect, Status** (empty at capture time).

**Events grid** — columns: **Name, Command Type, Channel, Data, Enabled** (empty at capture time).

**Right-click** on the devices grid → **Add** → **Add MIDI In Device** dialog.

**Right-click** on the events grid → **Add**: on an **empty** events list this opens **no dialog** — the Add MIDI Event dialog could not be verified without an existing row. **I couldn't verify this** — the event-dialog fields are unknown.

### Add MIDI In Device dialog

Dialog 600×232, opened from the devices-grid right-click menu:

1. **Name** — text input
2. **Device Name** — combo selector
3. **Auto Open on Startup** — toggle
4. **Re-Open on Close** — toggle
5. **Ok / Cancel** buttons

Evidence: `midi-in-panel`, `midi-in-ctx-top`, `midi-in-ctx-bottom`, `midi-in-add-device-dialog`.

## MIDI Out

Opens **MIDI Out** in the breadcrumb. Panel content:

**Devices grid** — columns: **Name, Device Name, Auto Open, Reconnect, Status** (empty at capture time).

**Right-click** on the grid → **Add** → **Add MIDI Out Device** dialog.

### Add MIDI Out Device dialog

Dialog 600×232, opened from the grid right-click menu (same fields as the MIDI In device dialog):

1. **Name** — text input
2. **Device Name** — combo selector
3. **Auto Open on Startup** — toggle
4. **Re-Open on Close** — toggle
5. **Ok / Cancel** buttons

Evidence: `midi-out-panel`, `midi-out-ctx`, `midi-out-add-device-dialog`.

## Evidence gaps

- Both device grids were **empty** at capture time — no Edit/Delete right-click items, row behaviors, or connected-device rows could be verified.
- The **Add MIDI Event** dialog (events-grid right-click → Add) was **not verified** — on an empty events list the action opens no dialog. Its fields are unknown; any documentation of it should be marked "I couldn't verify this".
- The **Device Name** combos were not expanded, so their option lists were not captured.
- Docs coverage for MIDI is absent (v1.0.5 sidebar has no MIDI config page); panel details are app-evidence only.
