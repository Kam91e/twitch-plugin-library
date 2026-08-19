---
title: "Streamer.bot — Add Triggers, Actions & Sub-Actions"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - add-flows
  - triggers
  - actions
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/triggers-ctx-uia.txt"
last-reviewed: 2026-08-03
---

# Add Triggers, Actions & Sub-Actions

> Step-by-step UI reference for adding a Trigger, a Sub-Action, and an Action in Streamer.bot v1.0.7 (Windows 10) — from right-click entry point to confirm/cancel in the config dialog.

All UI details below were captured from UIA dumps of the running application (Streamer.bot v1.0.7 on Windows 10) stored under `/mnt/d/Twitch/shots/`. The flows are **approximate for other versions** — menu wording, picker contents, and dialog layouts can differ.

> For the chat-command flow, see [**Adding Commands**](commands.md). For the Platforms section and Twitch panels/dialogs, see [**Platforms (Twitch)**](platforms.md).

## Add a Trigger

> The full right-click menu for the Triggers pane (empty area and trigger rows) is documented in [Context menus](#context-menus).

1. Right-click in the **Triggers** pane (empty area of the trigger list).
2. The context menu shows, in captured order (`triggers-ctx-uia.txt`): **Clear All Triggers**, **Enable All Triggers**, **Disable All Triggers**, **Favorite Triggers**, **Recent Triggers**, **Add**.
3. Choose **Add** — a picker flyout opens listing **10 sources** (`creation-flows-catalog.txt`): Core, Custom, Elgato, Integrations, Kick, Meld Studio, OBS Studio, Streamlabs Desktop, Twitch, YouTube.
4. Click a source, then click a trigger type. Sources with many types (e.g. Core, Twitch) organize their types into group flyouts — hover a group, then click the type (`core-flyout-uia.txt`, `twitch-flyout-uia.txt`).
5. Trigger types that take parameters open a config modal before being added. Example capture: **"Add Trigger - Test"** (approx 600×325) with an **Arguments** DataGrid (columns **Name** / **Value**) and **Ok** / **Cancel** buttons (`add-trigger-test-modal-uia.txt`).
6. Parameter-less trigger types are added directly on click — no dialog opens (live window enumeration after a type click found only the main window, `trigger-click2-live-uia.txt`).

## Add a Sub-Action

> The full right-click menu for the Sub-Actions pane is documented in [Context menus](#context-menus).

1. Right-click in the **Sub-Actions** pane (empty area of the sub-action tree).
2. The context menu shows, in captured order (`subaction-ctx2-uia.txt`): **Add Group**, **Delete All**, **Favorite Sub-Actions**, **Recent Sub-Actions**, **Add**.
3. Choose **Add** — a categories flyout opens listing **13 categories** (`creation-flows-catalog.txt`): Core, Elgato, Integrations, Kick, Meld Studio, OBS Studio, PolyPop, Settings, Speaker.bot, Streamer.bot, Streamlabs Desktop, Twitch, YouTube.
4. The flyout is a **hover-chain**: hover a category to open its groups flyout, hover a group to open its items flyout, then **click** the sub-action. Only the final sub-action is clicked — categories and groups are hovered, not clicked.
   - Example: Core → hover **Actions** → items flyout (Get Action Group State, Get Action State, **Run Action**, Set Action Group State, Set Action State, Set Sub-Action State, Set Sub-Action Weight) (`subaction-core-groups-live.txt`, `subaction-actions-types-live.txt`).
5. **Single-item groups** (group name == the only sub-action, e.g. OBS/Meld/Streamlabs `Recording`, OBS `Get Current Scene`, Speaker.bot `Speak`) do not expand a submenu — the group item itself is the sub-action (`catalog-consolidated.txt`).
6. Sub-actions with parameters open their config modal immediately on selection. Example capture: selecting **Run Action** opens **"Add SubAction - Run Action"** (approx 600×160) with an **Action** picker, a **Run Action Immediately** toggle, and **Ok** / **Cancel** buttons (`subaction-runaction-modal-uia.txt`).

## Add an Action

> The full right-click menu for the Actions list (empty area and action rows) is documented in [Context menus](#context-menus).

1. Right-click in the **Actions** list (empty area, below the existing action rows).
2. The context menu offers **Add**, **Collapse All**, **Expand All** — the same entries captured for the Commands grid (`commands-ctx-uia.txt`; recorded for the Actions list in the catalog add-flows design). Right-clicking an individual action row instead shows **Copy / Cut / Paste** (`actions-ctx-uia.txt`).
3. Choose **Add** — the **"Add Action"** dialog opens (approx 600×320) (`actions-ctx2-uia.txt`, `all-windows-uia.txt`).
4. The dialog blocks the main window until **Ok** or **Cancel** is chosen.

### Add Action dialog fields

- **Name** — text box for the action name.
- **Enabled** — checkbox; turn the action on or off.
- **Group** — editable combo box for the action group (its editable text part is exposed as `#PART_EditableTextBox`).
- **Queue** — combo box for the queue assignment (only the **Queue** label is exposed in the captured tree).
- **Random Action / Concurrent** — radio options controlling execution behavior.
- **Always Run (even if Queue is Paused)** — checkbox; run the action even while its queue is paused.
- **Exclude from Action Queue** — checkbox captured with the combined label "Exclude from Action Queue Pending/History".
- **Ok / Cancel** — save or discard.

## Context menus

Every right-click context on the **Actions page** with its entry point, the menu items in the order they were captured, and the flow that follows each item. Contexts on other pages (Services, Voice Control, MIDI, Servers/Clients, Settings sections) are out of scope for this page.

### Triggers pane

**Entry point:** right-click an empty area of the Triggers list, below the last trigger row.

**Menu items, in captured order** (`triggers-ctx-uia.txt`):

1. **Clear All Triggers** — removes every trigger in the list.
2. **Enable All Triggers** — enables every trigger.
3. **Disable All Triggers** — disables every trigger.
4. **Favorite Triggers** — opens the favorite triggers list.
5. **Recent Triggers** — opens the recently used triggers list.
6. **Add** — opens the trigger picker flyout (see [Add a Trigger](#add-a-trigger)).

**Trigger row** — right-click an individual trigger row instead. The menu extends the pane menu with per-row entries first, in captured order (`row-ctx-test-uia.txt`): **Test Trigger**, **Copy Trigger**, **Delete Trigger**, **Favorite**, **Enabled**, **Refresh All Triggers**, then the list-level entries above (**Clear All Triggers**, **Enable All Triggers**, **Disable All Triggers**, **Favorite Triggers**, **Recent Triggers**, **Add**).

### Sub-Actions pane

**Entry point:** right-click an empty area of the Sub-Actions tree, below the last sub-action.

**Menu items, in captured order** (`subaction-ctx2-uia.txt`):

1. **Add Group** — creates a new group in the sub-action tree.
2. **Delete All** — removes every sub-action in the list.
3. **Favorite Sub-Actions** — opens the favorite sub-actions list.
4. **Recent Sub-Actions** — opens the recently used sub-actions list.
5. **Add** — opens the sub-action categories flyout (see [Add a Sub-Action](#add-a-sub-action)).

### Actions list

**Entry point:** right-click an empty area of the Actions list, below the existing action rows.

**Menu items:** **Add**, **Collapse All**, **Expand All** — the same entries recorded for the Commands grid (`commands-ctx-uia.txt`; recorded for the Actions list in the catalog add-flows design).

1. **Add** — opens the **Add Action** dialog (see [Add an Action](#add-an-action)); dialog size verified at 600×320 (`actions-ctx2-uia.txt`).
2. **Collapse All** — collapses the action group rows.
3. **Expand All** — expands the action group rows.

**Action row** — right-click an individual action row instead. The menu offers, in captured order: **Copy**, **Cut**, **Paste** (`actions-ctx-uia.txt`).

### Commands grid

**Entry point:** right-click an empty area of the Commands grid on the Commands tab.

**Menu items, in captured order** (`commands-ctx-uia.txt`):

1. **Add** — opens the Add Command dialog (see [Commands](commands.md)).
2. **Collapse All** — collapses the command group rows.
3. **Expand All** — expands the command group rows.
