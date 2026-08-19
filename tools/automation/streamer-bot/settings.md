---
title: "Streamer.bot — Settings"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - settings
  - configuration
  - general-settings
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/Settings-uia.txt"
last-reviewed: 2026-08-05
---

# Settings

> Reference for the Streamer.bot **Settings** window (v1.0.4, Windows 10): the landing page and all eight sections — General Settings, User Interface, Backups, Defaults, Groups, Variables, Labs, C# Compile Settings — with panel content, right-click menus, dropdowns, and dialogs.

> **Not to be confused with the [Settings sub-action group](sub-actions/settings.md)** (Pick Color, Reset Credits, Reset First Words, Set Voice Control Input). This page covers the application **Settings** tab in the left navigation.

## Settings Overview

Open **Settings** from the left navigation. The landing page ("Change settings.") lists eight sections, each opening its own panel on click. The breadcrumb shows `Settings > <section>` once a section is opened. The list scrolls with its own scrollbar — the `CaretUp24`/`CaretDown24` buttons at the top and bottom are the list's scroll buttons, not content scroll (see General Settings for how panels scroll).

1. **General Settings** — "Basic settings related to Streamer.bot"
2. **User Interface** — "Manage different aspects of Streamer.bot's UI"
3. **Backups** — "Change backup settings, and force backup creation"
4. **Defaults** — "Configure default options when creating new Actions, Commands and other"
5. **Groups** — "Add, edit and delete user groups"
6. **Variables** — "Handle all things variables"
7. **Labs** — "Want to try out experimental features, can enable them here"
8. **C# Compile Settings** — "Add common C# reference"

There are exactly eight sections: scrolling the list to the bottom (PageDown on the content scrollbar) shows **C# Compile Settings** fully visible as the last entry, followed directly by the scrollbar — no ninth item exists. The official docs (v1.0.5) list the same eight section names as child pages of `docs.streamer.bot/en/Settings`, but every one of those pages is a "Documentation Needed" placeholder; only four sections have real documentation elsewhere (see [Docs coverage](#docs-coverage)).

## General Settings

Opens **Settings > General** in the breadcrumb. Panel content, top to bottom:

### Instance

- **Instance Id** — read-only text showing the UUID for this instance of Streamer.bot (on this install: `e01d6310-aba9-4751-b0f8-895cfcd3977d`). The row renders an `#ExpanderToggleButton` chevron, but the chevron is **decorative**: clicking it and invoking UIA patterns show no state change (verified twice via `invoke-expander`).
- **Name** — text input ("The name of this Streamer.bot instance"), current value `Streamer.bot`, with a **Save** button that persists the name.

### Audio

- **Audio Output Device** — dropdown ("Configure the default audio output device Streamer.bot uses"); row chevron is decorative like Instance Id. The dropdown has **8 entries** (opened via UIA ExpandCollapsePattern; synthetic mouse clicks do not open it):
  1. **Default**
  2. Speakers (Steam Streaming Microphone)
  3. Speakers (Steam Streaming Speakers)
  4. Speakers / Headphones (Realtek Audio)
  5. E2260 (Intel(R) Display Audio) — marked **(Disconnected)**
  6. Internal AUX Jack (Steam Streaming Speakers) — **(Disconnected)**
  7. SAMSUNG (Intel(R) Display Audio) — **(Disconnected)**
  8. Speakers (NoMachine Microphone Adapter) — **(Disconnected)**
  Disconnected devices are listed with a `(Disconnected)` marker appended to the name.
- **Use System Default** — toggle, current state **Yes** ("Use the System Default audio device when the selected device above is not found").
- **Application Volume** — slider, current value **100%** ("The default volume applied to the Play Sound sub-actions and C# methods").

### Performance

Shown with a restart-warning banner: **"Changing these settings requires a restart of Streamer.bot"** (with warning icon).

- **Viewers Tab** — toggle, current state **Enabled** ("Enable or disable the viewers tab to reclaim performance").
- **Action History** — toggle, current state **Enabled** ("Disable the tracking of Actions to reclaim performance").

### Logging

Shown with a restart-warning banner: **"Changing the log folder requires a restart of Streamer.bot"** (with warning icon).

- **Log Folder** — path input ("The folder to write logs to") with a browse button (folder icon).
- **Log Level** — dropdown ("The logging level being used, this is locked to verbose in non-stable versions"). The dropdown has **3 entries**: **Information**, **Debug**, **Verbose**.

**Left-click behaviors**: toggles flip Off↔On; **Save** persists the instance name; dropdowns are opened via UIA ExpandCollapsePattern because synthetic mouse clicks do not open them (same behavior as every combo in the app, see capture notes). **Right-click**: no context menu was probed on this panel.

**Scroll behavior**: the panel content extends below the fold (Log Level sits at the bottom of the scrollable area) and scrolls with the **mouse wheel** over the content pane (~48 px per wheel tick); the `CaretUp24`/`CaretDown24` buttons belong to the left navigation list scrollbar, not the panel.

Evidence: `Settings-uia.txt`, `settings-general-deep-uia.txt` (control types), `settings-general-audio-combo-open-uia.txt` + `settings-general-loglevel-open-uia.txt` (dropdown contents), `settings-general-instance-expanded-uia.txt` (decorative chevron), `settings-general-wheel1..6` + `settings-general-esc-uia.txt` (scroll states), `settings-general.png` (screenshots verified by observer).

## User Interface

Opens **Settings > User Interface** in the breadcrumb. Panel content, top to bottom:

### Window Options

- **Minimize to Tray** — toggle **Off** ("When minimizing Streamer.bot, it will goto the Tray Icons")
- **Minimize to Tray on Close** — toggle **Off** ("When closing Streamer.bot, it will goto the Tray Icons, using close in the Tray Menu will close Streamer.bot")
- **Hide Splash Screen** — toggle **Off** ("Do not show Streamer.bot's splash screen when starting")
- **Ask for Confirmation on Close** — toggle **On** ("When closing Streamer.bot, ask if you really meant to close it")
- **Reset Delete Confirmations** — **Reset** button ("Will reset all delete confirmations so they are asked again when deleting items")
- **Reset Integrations** — **Reset** button ("Will reset the integrations tab back to original")
- **Theme** — toggle showing **Dark Mode** ("Pick either Light Mode or Dark Mode for Streamer.bot")

### Colors

- **Comment Color** — color swatch button + hex value **#229977** ("Choose a custom default color to use for the Comment Sub-Action")
- **Sub-Action Disabled Color** — color swatch button + hex value **#DB7093** ("Choose the color to use when a Sub-Action is disabled")

### Sub-Actions

- **Duplicate Sub-Action Location** — dropdown ("Where to add a duplicated sub-action") with **2 entries**: **End**, **After** (current value not changed during capture)

### Other

- **Auto Open Chat on Startup** — toggle **Off** ("When starting Streamer.bot, the Chat window will automatically open")
- **Auto Open Event Feed on Startup** — toggle **Off** ("When starting Streamer.bot, the Event Feed window will automatically open")
- **Disable Capturing of Variable Viewer Window** — toggle **Off** ("This will prevent the Variable Viewer window from appearing in any form of window/screen capturing")

### Navigation Panel

- **Reset Navigation Items** — **Reset** button ("Will reset the navigation panel to default, a restart is required")
- **Commands** — toggle **On** ("Show or hide Commands page")
- Expandable sections, each a real toggle (unlike the decorative chevrons in General Settings, these `#ExpanderToggleButton`s expose TogglePattern and expand/collapse reliably), all **On**:
  - **Platforms** — "Choose what platforms to show" → expands to Twitch, YouTube, Trovo, Kick
  - **Stream Apps** — "Choose what streaming applications to show" → OBS Studio, Streamlabs Desktop, Meld Studio, PolyPop
  - **Services** — "Choose what services to show" → File-Folder Watcher, Timers, File Tails, Process Watcher, Credits, Quotes
  - **MIDI** — "Choose what MIDI pages to show" → MIDI In, MIDI Out
  - **Voice Control** — "Choose what Voice Control pages to show" → Settings, Commands, Log
  - **Servers/Clients** — "Choose what Server/Client pages to show" → Websocket Server, HTTP Server, UDP Server, Custom Websocket Servers, Custom Websocket Clients

### Enabled Sub-Actions

Restart banner: **"Changing enabled Sub-Actions requires a restart of Streamer.bot"**. A tree of category checkboxes (**14 top-level**): Core, Meld Studio, OBS Studio, PolyPop, Settings, Speaker.bot, Streamlabs Desktop, YouTube, Elgato, Integrations, Kick, Streamer.bot, Trovo, Twitch. Each category expands to nested sub-action checkboxes, **2–3 levels deep**: Core → 22 sub-categories with leaf sub-actions; Meld Studio → Effects/Layers/Tracks; OBS Studio → Filters/Groups/Replay/Scenes/Sources; Elgato → Stream Deck/Wave Link/Camera Hub → EpocCam/Prompter/Webcam; Twitch → Moderation → Chat Modes/Shield (depth 3). The tree has its **own internal scrollbar** and the content is virtualized (document height ≈16700 px — only the visible window is materialized).

### Enabled Triggers

Restart banner: **"Changing enabled Triggers requires a restart of Streamer.bot"**. A second tree of category checkboxes (**11 top-level**): Core, Custom, Meld Studio, OBS Studio, Streamlabs Desktop, Elgato, Integrations, Kick, Trovo, Twitch, YouTube. Nested to depth 3 (Core → 15 sub-categories; Websocket → Client/Custom Server at depth 3; Integrations → 18 sub-categories; Twitch → Shared Chat with 18 leaves). Own internal scrollbar, virtualized content.

**Left-click behaviors**: toggles flip Off↔On; the **Reset** buttons act immediately; the section expanders open/close on click (UIA TogglePattern). **Right-click**: no context menu observed on the panel body or the trees.

Evidence: `settings-ui-uia.txt`, `settings-ui-deep-uia.txt` (control types: ComboBox, Tree, `#Expander`/`#ExpanderToggleButton`, CheckBoxes), `settings-ui-duploc-uia.txt` (dropdown End/After), `ui-toggle-{platforms,streamapps,services,midi,voice,servers}` (Navigation Panel expanders), `ui-tree-{meld,obs,trigger-core}` + `ui-trees-expanded{2,3,4}-uia.txt` + `ui-trees-bottom{-deep}` (full tree expansion, 189 expanders), `settings-ui.png` + `settings-ui-duploc.png` (verified by observer).

## Backups

Opens **Settings > Backups** in the breadcrumb. Panel content, top to bottom:

- **Backup Folder** — path input ("The folder to save backups to") with a browse button (folder icon). On this install the value is `D:\Twitch\Streamer.bot-x64-1.0.4\backup`.
- **Backup Status** — "Last backup: Wednesday, August 5, 2026 8:38:17 AM" with a **Backup Now** button (cloud icon). **Backup Now** runs a backup immediately with **no confirmation dialog** — the "Last backup" timestamp updates to the current time (observed: Aug 4 8:45 AM → Aug 5 8:38 AM). This is a live action, not a settings change.
- **Streamer.bot Cloud Backups** — heading with a description block: "Cloud Backups are a supporter perk, and require you to be subscribed at the Thank You tier or higher on Patreon. If you are already subscribed, thank you for your support. Make sure you are currently logged into your Streamer.bot account in the bottom-left corner of Streamer.bot. If you are logged in, then make sure you have also linked your Patreon on the Streamer.bot website." Two buttons:
  - **Support on Patreon** (heart icon) — opens the Patreon page externally
  - **Streamer.bot Account** (external-link icon) — opens the default browser to the **"Sign in to Streamer.bot"** page (Chrome observed; no account was logged in at capture time). No in-app dialog appears; left open without interaction.

**Right-click**: no context menu observed on the panel body.

### Choose your backup folder dialog

Opened from the Backup Folder browse button. Standard Windows folder picker, dialog **640×360** (IFileDialog / FOS_PICKFOLDERS):

- Toolbar: **Organise**, **New folder**, **Views**, **Help**
- Left: tree view (folder navigation)
- Right: items view with columns **Name, Date modified, Type, Size** — "No items match your search." empty state at capture time
- Address bar: `D:\Twitch\Streamer.bot-x64-1.0.4\backup`
- "Folder:" field with **Select Folder / Cancel** buttons

Canceled without confirming; the Backup Folder value was not changed.

Evidence: `settings-backups-uia.txt`, `settings-backups-deep-uia.txt` (control types), `settings-backups.png` (verified by observer), `settings-backups-backupnow` (timestamp update, no dialog), `settings-backups-browse-dialog-uia.txt` + `settings-backups-browse.png` (dialog, verified by observer), `settings-backups-browse-cancel`, `settings-backups-account-dialog-uia.txt`.

## Defaults

Opens **Settings > Defaults** in the breadcrumb. Three expandable sections, all **expanded** by default (each header is an `#ExpanderToggleButton` with state On, incl. the nested Sources group):

### Actions

"Default settings to apply to new Actions" — 4 toggles, all **Off** at capture:

- **Random** — "Whether or not to pick a random top level sub-actions to only run"
- **Concurrent** — "Whether or not top level sub-actions run concurrently"
- **Always Run** — "Whether or not this action, when queued will always run, regardless if the queue is paused"
- **Exclude from Action Queue/History** — "Whether or not to exclude the action from appearing in the Action Queue or Action History pages"

### Commands

"Default settings to apply to new Commands":

- **Include** — toggle **Off** ("Whether or not to include the command in the command list sub-action")
- **Ignore Bot Messages** — toggle **On** ("Whether or not to ignore messages that come from the logged in bot account for the service")
- **Ignore Internal Messages** — toggle **On** ("Whether or not to ignore messages that originate from Streamer.bot")
- **Persist User Counter** — toggle **Off** ("Whether or not to save user counters to disk")
- **Persist Counter** — toggle **Off** ("Whether or not to save counters to disk")
- **Case Sensitive** — toggle **Off** ("Whether or not the command is case sensitive")
- **Global Cooldown** — numeric stepper (NumericUpDown with inline increment/decrement buttons) + "seconds" label; value **0** at capture
- **User Cooldown** — numeric stepper + "seconds" label; value **0** at capture
- **Sources** (nested expander, expanded) — "What sources are enabled by default" with **8 toggles**: Twitch Message **On**; Twitch Whisper, Twitch Bot Whisper, Twitch Resubscription Message, Twitch Shared Chat, YouTube Message, Trovo Message, Kick Message — all **Off**

### Sub-Actions

- **Switch Case** (expander, expanded) — "Default settings to apply to new Switch Case groupings":
  - **Case Sensitive** — toggle **On** ("Whether or not to the switch case should be case sensitive" — wording as in the app)

**Scroll behavior**: the panel content is much taller than the viewport (~1700 px vs 560 px) and scrolls with the **mouse wheel** over the content pane (~48 px per tick); the content scrollbar at x≈-646 also responds to PageUp/PageDown track clicks (HOME does not reach the ScrollViewer). The `CaretUp24`/`CaretDown24` buttons at the pane edges belong to the left navigation list, not this panel.

**Right-click**: no context menu observed on the panel body.

Evidence: `settings-defaults-bottom-full-uia.txt` (full content, all expanders), `settings-defaults-{actions,commands,sources}-open-uia.txt` (per-section states), `settings-defaults-exp{1,2}`, `settings-defaults-pageup2` + `settings-defaults-pd1..6` (scroll states), `settings-defaults-bottom.png` (verified by obs-1), `settings-defaults-pageup2.png` + `settings-defaults-pd2.png` (verified by obs-2), `settings-defaults-top-full-uia.txt`.

## Groups

Opens **Settings > Groups** in the breadcrumb. Three-column layout, all visible without scrolling:

- **Groups** — a DataGrid with columns **Name, Bots** (289 px wide; empty grid at capture time, populated only during the verified Add flow below). Below it the **Add Group** section: name text input, **Bots** type-toggle (Off; probe: Off→On→Off with no popup and no label change), and **Add** button.
- **Users** — a list of the selected group's users (empty at capture time).
- **Add Multiple Twitch Users to Group** — a large text area (289×444) for pasting multiple Twitch usernames with an **Add Users** button.

**Right-click** on a **group row** → context menu (6 items, with separators): **Delete**, **Clear**, *separator*, **Search for Twitch User**, *separator*, **Bots**, *separator*, **Export to File**, **Import from File**. There is **no Edit item** — group editing is done through other paths. Right-click on the **empty grid body** shows **no context menu** (menu only on rows).

**Left-click behaviors**:
- **Add** with an empty name does nothing — no validation dialog.
- Verified Add flow (temporary test group `zz-test`, created and deleted with user approval): typing into the name field shows a `#ClearButton`; clicking **Add** inserts a DataItem row (raw-id name such as `_xIAJmWAhYOPk2W6E6WUANT1BCFB`) displaying the group name, with the Bots column showing "No".

### Delete group dialog

Opened from **Delete** on a row. Dialog **460×168**: title `Delete group '<name>'?`, body "Are you sure you want to delete the group '<name>'?", with **Yes / No** buttons.

Evidence: `settings-groups-full-uia.txt` (3-column layout + control types), `settings-groups-bots-toggle/restore` (type toggle), `settings-groups-row-rclick` + `settings-groups-row-menu-uia.txt` (context menu), `settings-groups-delete-click` + `settings-groups-delete-dialog-uia.txt` + `settings-groups-delete-dialog-pic.png` (dialog), `settings-groups-add-typed` (`zz-test` row), `settings-groups-after-delete` (clean state restored).

## Variables

Opens **Settings > Variables** in the breadcrumb. Single section **Variable Masking**, no panel scrollbar (content fits the viewport):

- **Mask Variable Containing** — feature toggle, current state **Off** ("Variables that contain these words will have their values masked with * in the following areas: 1. Global Variable Viewer 2. Action History Variable Inspecting"). Probe: Off→On→Off left the panel structure unchanged — this toggles the masking itself, not a panel.
- **List** of masked words (259×150) — on this install: `apiKey`, `url`
- **Edit** field + **Add** + **Del** buttons

**Left-click behaviors:**
- Clicking the **Edit** field pre-fills it with the currently selected list item's text; typing appends to it. **Add** inserts the field content as a new masked word and clears the field. The field's `#ClearButton` clears it.
- Verified Add flow (temporary word `zz-testmask`, added and removed with user approval): selecting list item `apiKey`, then editing produced `apiKeyzz-testmask`; **Add** added it as a new entry and cleared the field.
- **Del** only deletes when the **exact variable name is typed into the field first**, then **Del** is clicked — it removes the matching entry with **no confirmation dialog**. (User-provided behavior, verified live.)
- Probes that do **not** delete: **Del** clicked with only a list item selected (no text in field), the keyboard **Delete** key, right-click on an item, double-click, and Shift+F10/APPS key.

**Right-click**: no context menu anywhere on the list (verified on the list body and on items).

Evidence: `settings-variables-full-uia.txt` (control types), `settings-variables-{mask-toggle,mask-restore,mask-state}` (feature toggle), `settings-variables-{edit-focus,word-typed,added}` (Add flow), `settings-variables-item3-rclick` (no menu), `settings-variables-del-with-name` + `del-with-name-check` (type-then-Del flow, no dialog), `settings-variables-final-clean` (clean state), `settings-variables-item-textclick.png` + `settings-variables-del-clean.png` (verified by obs-1).

## Labs

Opens **Settings > Labs** in the breadcrumb. Single section **Pending Action Cache**, no panel scrollbar (text ends at y≈431 vs pane bottom 685):

- **Enable** — labs feature toggle, current state **Off** (left untoggled: enabling requires a restart and writes a DB on close — a state mutation, not a settings change).
- Description (5 paragraphs): "A restart is REQUIRED after enabling or disabling this labs feature." On close, the feature writes to a database any outstanding pending actions (actions that have not yet run — either in a blocking queue or a paused queue). On start, if the cache file is present, Streamer.bot auto-loads the cached actions, pauses their queues, and adds a `wasCached` argument set to `true` (this variable does not exist during normal operation). The feature is "very experimental, and I need feedback". A caveat: due to serialization/deserialization, not all data types are preserved — notably `List<T>` objects become `object[]` arrays when loaded.

**Left-click**: the **Enable** toggle flips the feature on/off (restart required to take effect). **Right-click**: no context menu observed.

Evidence: `settings-labs-panel-uia.txt` (panel + full description), `settings-labs2-uia.txt`, `settings-labs-click2`, `settings-labs-panel.png` (verified by obs-1: breadcrumb "Settings > Labs", Enable Off, 5 paragraphs legible, no scrollbar).

## C# Compile Settings

Opens **Settings > C# Compiler** in the breadcrumb (the landing list calls it "C# Compile Settings"; the breadcrumb label after clicking is "C# Compiler"). Single section **Common References**, no panel scrollbar (content fits the viewport):

- **List** (522×150) of common reference assemblies — **empty on this install**
- Two description texts: "Any references added to the common references list above will be automatically added to every Execute C# code when it's compiled" and "Making Changes to this list will not invalidate any currently compiled Execute C# Code sub-actions"

There are **no Add/Del buttons in the panel** — the only way to add a reference is via the **right-click context menu on the list**, which has a single item **"Add reference from file..."** (menu 178×41).

### Add reference from file — Choose a library file dialog

Opened from the context menu item. Standard Windows file picker, dialog **640×360** (IFileDialog):

- Toolbar: **Organise**, **New folder**, **Views** (with slider), **Preview pane**, **Help**
- Left: tree view (folder navigation)
- Right: items view with columns **Name, Date modified, Type, Size**, plus a vertical scroll bar
- **Cancel** button to dismiss

Canceled without confirming; the Common References list was not changed.

**Left-click**: double-clicking a list item or other direct actions were not performed (list empty). **Right-click** on the list opens the single-item context menu above.

Evidence: `settings-csharp2-uia.txt` (panel + control types), `settings-csharp-list-rclick` + `settings-csharp-rclick-check-uia.txt` (context menu), `settings-csharp-addref-click` + `settings-csharp-addref-dialog-uia.txt` + `settings-csharp-addref-dialog-pic.png` (dialog), `settings-csharp-dialog-cancel` + `settings-csharp-after-cancel` (clean state).

## Evidence gaps

- **General Settings right-click menu** — not probed on this panel; no context menu behavior is recorded for it.
- The **Audio Output Device** and **Log Level** dropdowns were opened but **no selection was made** (per capture discipline, dropdowns must not be changed); the currently selected values are not recorded.
- **Instance Id** is a read-only value on this install; whether it can be regenerated/copied is unverified.
- **Defaults bottom screenshot**: the initial dump-all capture produced no PNG for the bottom scrolled state — the bottom screenshot was re-taken with a probe as `settings-defaults-bottom.png` (obs-1) and the mid/top states as `settings-defaults-pageup2.png` + `settings-defaults-pd2.png` (obs-2).
- **C# Compile Settings**: no reference was added and no selection made in the Add Reference dialog (canceled by capture discipline); the Common References list on this install is empty, so double-click behaviors on list items are unverified.
- **Groups/Variables test data**: the temporary test group `zz-test` and masked word `zz-testmask` were added and removed with user approval; both were confirmed restored to the clean state afterwards.

## Docs coverage

Per-section coverage of official Streamer.bot docs (v1.0.5) cross-checked on 2026-08-05 via @librarian:

| Section | docs.streamer.bot `/en/Settings/*` | Substantial official docs elsewhere |
|---|---|---|
| General Settings | placeholder ("Documentation Needed") | none — app-evidence only |
| User Interface | placeholder | none — app-evidence only |
| Backups | placeholder | [Guide: Backup & Restore](https://docs.streamer.bot/guide/core/backup) |
| Defaults | placeholder | none — app-evidence only |
| Groups | placeholder | C# API: [Core → Users](https://docs.streamer.bot/api/csharp/methods/core/users) (AddGroup, DeleteGroup, GetGroups, AddUserToGroup) |
| Variables | placeholder | C# API: [Core → Globals](https://docs.streamer.bot/api/csharp/methods/core/globals) (GetGlobalVar, SetGlobalVar, UnsetGlobalVar, GetGlobalVarValues); wiki [Variables](https://github.com/Streamerbot/streamerbot-wiki/tree/main/Variables) folder |
| Labs | placeholder | none — app-evidence only |
| C# Compile Settings | placeholder | [Execute C# Code](https://docs.streamer.bot/api/sub-actions/core/csharp/execute-csharp-code) sub-action; [C# debugging guide](https://docs.streamer.bot/api/csharp/guide/debugging) |

No section has a filled Settings page in the official docs — all eight `/en/Settings/*` pages are "Documentation Needed" stubs. Wiki source files exist in the `streamerbot-wiki` repo for General, User-Interface, Groups, CSharp-Compiler (`Settings/` folder) and Backup (repo root), but none contain rendered content on the docs site. Panel details in this page are therefore **app-evidence only** for General Settings, User Interface, Defaults, and Labs, and app-evidence plus cross-linked API/guide docs for the other four.
