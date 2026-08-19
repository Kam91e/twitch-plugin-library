# Services Sections Reference

## Why

The Streamer.bot reference (`tools/automation/streamer-bot/`) covers Actions, Commands, Triggers, Sub-Actions, Platforms, and Integrations, but the **Services** tabs — Services, Servers/Clients, Voice Control, and MIDI — have **zero dedicated reference documentation**. These sections are also the worst-covered part of the official docs: File/Folder Watcher, File Tail, and Process Watcher exist only as trigger API pages (no config guide), and the Servers/Clients configuration pages are absent from the docs sidebar entirely. The gap is real in both the vault and the upstream docs, and it can only be closed from the live application.

## What Changes

- **New reference documentation** for four service tabs, captured live from the Streamer.bot v1.0.4 application (Windows 10):
  - **Services** tab: File/Folder Watcher, Timers, File Tail, Process Watcher, Credits, Quotes — **full section list enumerated** (scrolled to the bottom; exactly these 6, no sections below the fold; MIDI/Voice Control/Servers-Clients follow as separate tabs)
  - **Servers/Clients** tab: WebSocket Server, HTTP Server, UDP Server, Custom WebSocket Servers, Custom WebSocket Clients
  - **Voice Control** tab: Settings, Commands, Log
  - **MIDI** tab: MIDI In, MIDI Out
- **Per-section structure** following the established pattern (as in `platforms.md` and `commands.md`):
  - Panel content: grid/list columns, toggles, buttons, status fields
  - Right-click functionality: menu items where present, explicitly documented absence where not
  - Dialogs: any window that opens when choosing an option (title, size, fields, Ok/Cancel)
- **Navigation updates**: new entries linked from `overview.md` (and the Services tab's cross-references in existing trigger/sub-action notes corrected where needed)
- **Out of scope**: Stream Apps, OBS Studio (tab), Settings, Integrations tabs (Integrations already has `integrations.md`; the others are deferred)

## Findings (captured 2026-08-04, v1.0.4)

### Services tab — per-section probe results (template D2)

| Section | Panel content | Right-click | Dialog(s) | Evidence |
|---|---|---|---|---|
| File/Folder Watcher | grid: Folder / Filter / Enabled | Add | Add File Watcher | `ffw-panel2`, `ffw-ctx3` |
| Timers | grid: Name / Enabled / Repeat / Interval / Lines | **Add only** | Add Timed Action (600×457) | `timers-panel3`, `timers-ctx-body`, `timers-add-dialog` |
| File Tails | grid: Name / File Path / Enabled | Add | Add File Tail (600×267) | `file-tails-panel`, `file-tails-ctx`, `file-tails-add-dialog` |
| Process Watcher | **status panel, NOT a grid**: Auto Start toggle (Off) + Service Status "Stopped" + Start button | none observed on body | — | `pw-state-before-rc`, `process-watcher-ctx` |
| Credits | Auto Reset hours spinner + Reset button; Events to Record checkboxes (12: Follows, Cheers, Subs, ReSubs, Gift Subs, Gift Bombs, Raided, Reward Redemptions, Goal Contributions, Game Updates, Pyramids, Hype Trains); User Present (spoke) (6: Editors, Moderators, Subscribers, VIPs, Groups, Users); Track Top (Cheer, Channel Points Used, …) | **no right-click** (body and row both tested) | none (Reset acts directly, no dialog) | `credits-panel3`, `credits-ctx`, `credits-ctx-row` |
| Quotes | grid: ID / Timestamp / User / Platform / Category / Quote | Add | Add Quote (650×447) | `quotes-panel`, `quotes-ctx`, `quotes-add-dialog` |

### MIDI tab — probe results (tasks 5.1, 5.2)

| Panel | Content | Right-click | Dialog(s) | Evidence |
|---|---|---|---|---|
| MIDI In — devices (top grid `MidiInList`) | grid: Name / Device Name / Auto Open / Reconnect / Status | Add | **Add MIDI In Device** 600×232: Name (edit), Device Name (combo), Auto Open on Startup (toggle), Re-Open on Close (toggle), Ok/Cancel | `midi-in-panel`, `midi-in-ctx-top`, `midi-in-add-device-dialog` |
| MIDI In — events (bottom grid `MidiEventList`) | grid: Name / Command Type / Channel / Data / Enabled | Add | **no dialog opens** on the empty list (verified across all top-level windows) — couldn't verify the Add MIDI Event dialog without a device/event row | `midi-in-ctx-bottom` |
| MIDI Out — devices | grid: Name / Device Name / Auto Open / Reconnect / Status | Add | **Add MIDI Out Device** 600×232 — same field set as In: Name (edit), Device Name (combo), Auto Open on Startup (toggle), Re-Open on Close (toggle), Ok/Cancel | `midi-out-panel`, `midi-out-ctx`, `midi-out-add-device-dialog` |

Note: the MIDI tab is a parent nav item with two sub-items (**MIDI In**, **MIDI Out**); clicking MIDI navigates to MIDI In.

### Servers/Clients tab — probe results (tasks 3.1–3.5)

Servers/Clients is a **hub page**: landing view shows five cards (WebSocket Server / HTTP Server / UDP Server / Custom WebSocket Servers / Custom WebSocket Clients); the same five entries live as sub-items in the sidebar nav (sidebar sub-items at y≈325/365/405/445/485).

| Panel | Content | Right-click | Dialog(s) | Evidence |
|---|---|---|---|---|
| WebSocket Server | **Auto Start** toggle (Off); **Address** (127.0.0.1), **Port** (8080), **Endpoint** (/); **Authentication** toggle (Disabled); **Server Status** "Stopped" + **Start Server**; **Connected Clients** grid (Address/Subscriptions/Authenticated); Related Support (Available Requests link) | **none** (empty grid, server stopped) | — | `ws-server-panel`, `ws-server-ctx` |
| HTTP Server | **Auto Start** (Off); **Address** (127.0.0.1) + netsh security warning; **Port** (7474); **Mappings** section (folder mappings for serving local files); **Server Status** "Stopped" + **Start Server**; **Requests** section; Related Support (Configuring HTTP Server / Available Endpoints) | **none** | — | `http-server-panel`, `http-server-ctx` |
| UDP Server | minimal: **Auto Start** (Off); **Port** (defaults to 4242); **Server Status** "Stopped" + **Start Server** | **none** | — | `udp-server-panel` |
| Custom WebSocket Servers | grid: Host / Auto Start / Status | **Add** | **Add Custom WebSocket Server** 600×288: Name (edit), Auto Start on Startup (toggle), Address (edit), Port (edit), Endpoint (edit), Ok/Cancel | `cws-servers-panel`, `cws-servers-ctx`, `cws-servers-add-dialog` |
| Custom WebSocket Clients | grid: Host / Auto Connect / Reconnect / Retry / Status | **Add** | **Add WebSocket Client** 600×348: Name (edit), Endpoint (edit), Auto Connect on Startup (toggle), Reconnect on Disconnect (toggle), Retry Interval (edit + spinner + "seconds"), TLS Support (TLS 1.0/1.1/1.2 toggles), Ok/Cancel | `cws-clients-panel`, `cws-clients-ctx`, `cws-clients-add-dialog` |

Note: WS/HTTP server panels expose "Authentication" / security-relevant toggles; HTTP shows a netsh firewall warning for non-loopback binds; UDP is deliberately minimal.

### Below-fold scroll verification (all sections)

Every panel was scrolled to max and/or checked for scrollbar + below-fold content:

| Panel | Scrollable? | Content below the fold | Bottom-of-content |
|---|---|---|---|
| WebSocket Server | yes (456px scroll) | yes — Related Support group was at y≈967 | **Help with WebSocket Server** group (Available Requests link), ends ~y=663 |
| HTTP Server | yes (456px scroll) | yes — Related Support group was at y≈942 | **Help with HTTP Server** group (Configuring HTTP Server / Available Endpoints links), ends ~y=663 |
| Voice Control Settings | yes (235px scroll) | yes — Related Support group was at y≈690 | **Help with Voice Control** group (Configuring Voice Control / Available Sub-Actions / Available Triggers links), ends ~y=663 |
| Voice Control Commands | no (grid only, headers at y=167) | no | headers |
| Voice Control Log | no (empty panel) | no | — |
| UDP Server | no (content ends y=353) | no | Port + Start Server |
| Custom WebSocket Servers | no (empty grid) | no | headers |
| Custom WebSocket Clients | no (empty grid) | no | headers |
| MIDI In | no (content ends y=366) | no | two grids fit |
| MIDI Out | no (empty grid) | no | headers |
| Servers/Clients hub | no (cards end y=549) | no | five cards |
| Voice Control hub | no (cards end y=382) | no | three cards |

Method: content-pane ScrollViewer does not expose UIA ScrollPattern; used the `CaretDown24` scrollbar-arrow InvokePattern; scrolled panels confirmed at max scroll via a second invoke having no effect. Panels without `CaretDown24` in their dump fit the visible pane.

### Expandable / scrollable lists inside panels

Systematic sweep (valid in-window clicks; the earlier Servers/Clients "scans" were invalid because expanded sidebar sub-items sat below the window bottom and clicks hit the desktop — redone after nav-scroll via `PART_ButtonScrollDown`/`PageDown`):

| Panel | Control | Details |
|---|---|---|
| Credits — **Events to Record** | scrollable TreeView (checkbox list) | VV=77.6% → **scrollable**; exactly 12 checkbox items (Follows, Cheers, Subs, ReSubs, Gift Subs, Gift Bombs, Raided, Reward Redemptions, Goal Contributions, Game Updates, Pyramids, Hype Trains); **no hidden items** at bottom scroll; all leaf nodes |
| Credits — User Present (spoke) | TreeView | fully visible (VV=100), 6 items (Editors, Moderators, Subscribers, VIPs, Groups, Users) |
| Credits — Track Top | TreeView | fully visible (VV=100), 2 items visible (Cheer, Channel Points Used, …) |
| VC Settings — **Locale** | ComboBox | expands to **en-GB, en-US** |
| VC Settings — **Audio Input Device** | ComboBox | expands to **Default + 12 system audio devices** (Steam Streaming Microphone, Microphone Array (Realtek Audio), + 10 others, most "(Disconnected)") |
| VC Log | List control | scrollable container (Selection+Scroll patterns), **empty** (voice service never started) |
| HTTP Server — Requests | expandable section (chevron) | header "Requests" / "Requests received by the HTTP server"; expands/collapses an empty List control (Selection+Scroll patterns, server stopped) |
| HTTP Server — **Mappings** | expandable section (chevron) | header "Mappings" / "Folder mappings for serving local files"; **collapsed by default**; expanding reveals a **Path / Folder grid** + input row with **`...` (browse), Add, Del** buttons — the folder-mapping editor |
| WS Server — **Authentication** | expandable section (chevron) | row shows "Authentication" toggle (Disabled) + chevron; expanding reveals **Enforce** toggle ("whether or not to enforce authentication for all requests, or just priviledged") + **Password** field ("the password required for authentication") |
| WS Server — Connected Clients | collapsible section (chevron) | header "Connected Clients" / "Clients that are currently connected"; expands/collapses a grid (Address / Subscriptions / Authenticated columns) |
| All other panels | — | **no** scrollable lists, ComboBoxes, Expanders, or expandable TreeItems (File/Folder Watcher, Timers, File Tails, Process Watcher, Quotes, MIDI In/Out, VC Commands, UDP Server, CWS Servers/Clients) |

**Correction (2026-08-04):** the `` chevrons next to section headers **are** functional expand/collapse toggles, not decorative. Verified by clicking: WS Authentication and HTTP Mappings expand with content; WS Connected Clients and HTTP Requests collapse/expand (grid header count 3→0→3, empty List appears/disappears). Earlier "no Expander controls" sweep was wrong because UIA does not expose these as Expander controls — they are header-row chevrons; clicks must land on the glyph itself (the glyph can sit below the window's visible bottom edge when the section is at the end of the content, causing missed clicks).

### Voice Control tab — probe results (tasks 4.1–4.3)

Voice Control is a **hub page**: landing view shows three cards (Settings / Commands / Log); the same three entries live as sub-items in the sidebar nav (sidebar sub-items at y≈365/405/445). Section breadcrumbs read "Settings", "Commands", "Log".

| Panel | Content | Right-click | Dialog(s) | Evidence |
|---|---|---|---|---|
| Settings | **Auto Start Listen** toggle (Off); **Listening Status** "Stopped" + **Start Listening** button; **Log Speech to Text Dictation** toggle (Disabled); **Locale** dropdown; **Confidence Threshold** spinner + "percent" label; **Audio Input Device** dropdown; Related Support group (Configuring Voice Control / Available Sub-Actions / Available Triggers hyperlinks) | **none** (UIA + observer verified) | — | `voice-settings-panel`, `voice-settings-ctx` |
| Commands | grid: Name / Command / Location / Enabled / Stop After | **Add** | **Add Voice Control Command** 600×304: Name (edit), Enabled (toggle), Command (edit), Location (combo), Stop After (toggle), Override Global (toggle), Confidence Threshold (edit + "percent"), Ok/Cancel | `voice-commands-panel`, `voice-commands-ctx`, `voice-commands-add-dialog` |
| Log | heading "Log" + empty output panel (no entries; voice service stopped), no controls | **Clear** (no dialog) | — | `voice-log-panel`, `voice-log-ctx` |

### Left-click behaviors recorded

- Timers grid header columns / Quotes grid header columns: clickable (sort; empty grids so no visible order change).
- Credits: Follows checkbox toggles Off→On→Off; Auto Reset spinner steps 13→12 (up/down arrows); Reset button is a direct action with no confirmation dialog.
- Process Watcher: Start button starts the service; Auto Start toggle enables launch on startup.

### Tooling note

The WPF NavigationView sidebar reports **stale UIA bounding rects** after scrolling — top-level rows (Settings/About) overlap sub-nav items in the UIA tree. Reliable click sequence: re-query the target element's rect from UIA immediately before each click, then verify the resulting breadcrumb. Sidebar scroll uses the nav scrollbar's PageDown button (`AutomationId=PageDown`), not wheel events.

## Capabilities

### New Capabilities

- `services-tab`: The Services tab — File/Folder Watcher, Timers, File Tail, Process Watcher, Credits, Quotes, and any below-fold sections: panel structure, right-click menus, and dialogs per section
- `servers-clients`: The Servers/Clients tab — WebSocket Server, HTTP Server, UDP Server, Custom WebSocket Servers, Custom WebSocket Clients: enable/port/status fields, right-click behavior, and dialogs
- `voice-control`: The Voice Control tab — Settings, Commands, Log panels: configuration options, command creation, and the log view
- `midi`: The MIDI tab — MIDI In and MIDI Out: device association lists, event registration, and dialogs

### Modified Capabilities

- None (no existing main specs; this project archives without syncing to `openspec/specs/`)

## Impact

- **New files** in `tools/automation/streamer-bot/` — either one file per tab (`services.md`, `servers-clients.md`, `voice-control.md`, `midi.md`) or a `services/` folder with per-section files; the folder/file decision is made after a depth probe (sections may be deep enough to warrant per-section files)
- **Edited files**: `tools/automation/streamer-bot/overview.md` (nav links); existing notes referencing `Services > X` locations remain valid but may gain links
- **New evidence dumps** under `/mnt/d/Twitch/shots/` — UIA dumps + screenshots per section, following the existing naming convention (`<section>-panel-uia.txt`, `<section>-ctx-uia.txt`, `<dialog>-modal-uia.txt`, plus PNGs)
- **No changes** to `plugins/` (vault plugin docs unaffected); no `INDEX.md` rebuild required (only `tools/` touched)
- **External dependency**: live access to Streamer.bot v1.0.4 on Windows to capture each section (existing tooling: `clickname.ps1`, `clk.ps1`, `rightclick.ps1`, `capture.ps1`, UIA dump scripts)
