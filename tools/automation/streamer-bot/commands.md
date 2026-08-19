---
title: "Streamer.bot — Adding Commands"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - commands
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/add-command-modal-uia.txt"
last-reviewed: 2026-08-03
---

# Adding Commands

> Step-by-step UI reference for creating a chat command in Streamer.bot v1.0.4 (Windows 10) — from the Commands panel to the "Add Command" dialog.

UI details on this page are taken from captured UIA dumps of Streamer.bot v1.0.4 on Windows 10:

- `commands-panel-uia.txt` — Commands panel, grid columns, search box
- `commands-ctx-uia.txt` — Commands grid context menu
- `add-command-modal-uia.txt` — "Add Command" dialog

## Flow

1. Open the **Commands** section from the left navigation bar.
2. Find the Commands grid. Its columns are **Name, Command, Options, Location, GCD, UCD, Enabled** (`commands-panel-uia.txt`).
3. Use the search box above the grid to filter the command list (Edit control at ~-971,165).
4. Right-click anywhere in the Commands grid. The context menu offers **Add**, **Collapse All**, **Expand All** (`commands-ctx-uia.txt`).
5. Choose **Add** — the **Add Command** dialog opens (approx 850×560) (`add-command-modal-uia.txt`).
6. Fill in the fields below, then click **Ok** to save or **Cancel** to discard.

The **Add Command** dialog is a separate top-level window that blocks the main UI until Ok/Cancel is chosen — consistent with the Action/Trigger/Sub-Action add flows.

## Dialog Fields

### General

- **Name** — Edit box for the command name.
- **Enabled** — Checkbox; turn the command on or off.
- **Mode** — ComboBox.
- **Include** — Checkbox.
- **Command(s)** — Multi-line Edit box; one command prefix per line (hint text: "Put each command prefix on its own line").
- **Location** — ComboBox.
- **Group** — ComboBox with an embedded Edit box (editable).

### Tabs

- **Options** — checkboxes: **Ignore Bot Account**, **Ignore Internal Messages**, **Persist per User Counter**, **Persist Counter**, **Case Sensitive**.
- **Cooldowns** — tab present; its inner controls are not captured in the dump.
- **Sources** — tab present; its inner controls are not captured in the dump.

### Permissions

- **Grant Type** — ComboBox.
- **Group Permissions** tab — **Available** list (initial entries: Moderators, Subscribers, VIPs), **>>** / **<<** transfer buttons, **Allowed** list.
- **User Permissions** tab — tab present; its inner controls are not captured in the dump.

### Buttons

- **Ok** / **Cancel**.

## Notes

- For the concepts behind these fields — command options, permission levels, global/user cooldowns, and variables — see [Commands and Timers](commands-and-timers.md).
- The grid's **GCD** and **UCD** columns correspond to the global and user cooldown settings covered in [Commands and Timers](commands-and-timers.md).
- **Collapse All** / **Expand All** in the grid context menu collapse or expand grouped command trees.
