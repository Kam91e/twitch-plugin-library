# Tasks — services-sections-reference

> Evidence base: existing tab landing dumps (`Services-uia.txt`, `Servers-Clients-uia.txt`, `Voice-Control-uia.txt`, `MIDI-uia.txt`, with PNGs); new per-section captures to be taken live from Streamer.bot v1.0.4 (Windows 10) using the existing tooling (`clickname.ps1`, `clk.ps1`, `rightclick.ps1`, `capture.ps1`, UIA dump scripts). Docs source: `https://docs.streamer.bot/` (v1.0.5, partial coverage — see design D5). Note pattern to follow: `platforms.md`, `commands.md` (frontmatter with `app-evidence`, structured sections).
>
> Capture template per section (design D2): (1) open the section and record arrow behavior; (2) left-click test on panel elements (buttons, toggles, rows, columns, links) — record dialogs/state changes they trigger; (3) right-click test on body + row — record menu items or explicit absence; (4) dialog chain — for each right-click item that opens a dialog, dump and document its options; (5) dialog hunt from visible controls — document dialogs reachable from buttons (noting dual entry points).

## 1. Preparation — scope enumeration

- [x] 1.1 Scroll the Services tab to the bottom in the live app and enumerate the complete section list (known: File/Folder Watcher, Timers, File Tail, Process Watcher, Credits, Quotes; record any additional below-fold sections); save `services-scrolled-uia.txt` + PNG
      → **Done via sidebar nav scroll (PageDown) + observer-verified screenshots** (`nav-state2.png`): exactly 6 sections — File/Folder Watcher, Timers, File Tails, Process Watcher, Credits, Quotes. No below-fold sections; MIDI/Voice Control/Servers-Clients follow as separate tabs.
- [x] 1.2 Depth spike: probe the 3 chosen sections (File/Folder Watcher, Timers, File Tail) with the full per-section template (open panel → left-click test → right-click test → dialog chain → dialog hunt); save their dumps
      → **Done**: FFW (`ffw-panel2`, `ffw-ctx3`), Timers (`timers-panel3`, `timers-ctx-body`, `timers-add-dialog`), File Tails (`file-tails-panel`, `file-tails-ctx`, `file-tails-add-dialog`). Also probed Process Watcher, Credits, Quotes (see section 2).
- [x] 1.3 Decide file structure from the spike (design D1): `services/` folder with per-section files if sections run deep, else one file per tab (`services.md`, `servers-clients.md`, `voice-control.md`, `midi.md`); record the decision in design.md
      → **Decision recorded in design.md**: one `services.md` per tab (mirrors `platforms.md`); no section runs deeper than panel + ctx menu + single dialog.

## 2. Services tab — sections

- [x] 2.1 Capture and document **File/Folder Watcher**: panel (watcher list, columns, Create File Watcher button), right-click menu (or its absence), any dialogs
      → **Captured**: grid (Folder / Filter / Enabled), ctx → Add, Add File Watcher dialog (`ffw-panel2`, `ffw-ctx3`, `ffw-ctx3-uia`).
- [x] 2.2 Capture and document **Timers**: panel (timer grid, interval settings), right-click menu, any dialogs
      → **Captured**: grid (Name / Enabled / Repeat / Interval / Lines); body right-click → **Add only**; Add Timed Action dialog 600×457 — Enabled/Repeat/Random Interval toggles, Name, Interval-seconds + Lines spinners, help text, Ok/Cancel (`timers-panel3`, `timers-ctx-body`, `timers-add-dialog`).
- [x] 2.3 Capture and document **File Tail**: panel (tail list, state), right-click menu, any dialogs
      → **Captured**: grid (Name / File Path / Enabled); ctx → Add; Add File Tail dialog 600×267 — Enabled toggle, Name, File path + browse, `%filePath%`/`%fileName%`/`%line%` help, Ok/Cancel (`file-tails-panel`, `file-tails-ctx`, `file-tails-add-dialog`).
- [x] 2.4 Capture and document **Process Watcher**: panel (process list, enable toggle), right-click menu, any dialogs
      → **Captured — panel differs from expectation**: NOT a process list. Status panel: Auto Start toggle (Off) + Service Status "Stopped" + Start button. No right-click menu observed on body. (`pw-state-before-rc`, `process-watcher-ctx`). **Note for docs**: the earlier Name/File Path/Enabled grid capture (`process-watcher-panel`) was actually File Tails — mis-click; corrected by observer verification.
- [x] 2.5 Capture and document **Credits**: panel (event checkboxes — Follows, Cheers, Subs, ReSubs, Gift Subs, Gift Bombs, Raided, Reward Redemptions, Goal Contributions, Game Updates, Pyramids, Hype Trains — Reset button), right-click menu, any dialogs
      → **Captured**: Auto Reset hours spinner + Reset button; Events to Record (12 checkboxes as listed); User Present (spoke) (Editors, Moderators, Subscribers, VIPs, Groups, Users); Track Top (Cheer, Channel Points Used, …). **No right-click menu** (body + row tested). Reset = direct action, no dialog. Left-click: checkboxes toggle, spinner steps 13↔12. (`credits-panel3`, `credits-ctx`, `credits-ctx-row`).
- [x] 2.6 Capture and document **Quotes**: panel (quote grid, add/edit/delete), right-click menu, any dialogs
      → **Captured**: grid (ID / Timestamp / User / Platform / Category / Quote); ctx → Add; Add Quote dialog 650×447 — Timestamp, User (+2 buttons), Platform combo, Category combo, Quote textarea, Ok/Cancel (`quotes-panel`, `quotes-ctx`, `quotes-add-dialog`).
- [x] 2.7 Capture and document any additional sections discovered in 1.1 (below the scroll fold)
      → **Not needed**: 1.1 confirmed exactly 6 sections, none below the fold.
- [x] 2.8 Record per-section arrow behavior (navigates / expands in place / decorative) as captured
      → **Recorded in proposal findings**: Services sub-nav items navigate on click; top-level nav rows with chevrons expand/collapse; no decorative arrows found in these sections.

## 3. Servers/Clients tab — sections

- [x] 3.1 Capture and document **WebSocket Server**: panel (enable, port, token, status), right-click menu, any dialogs
      → **Captured**: hub landing page shows five cards (WebSocket Server / HTTP Server / UDP Server / Custom WebSocket Servers / Custom WebSocket Clients; also sidebar sub-items). Panel: **Auto Start** toggle (Off), **Address** (127.0.0.1), **Port** (8080), **Endpoint** (/), **Authentication** toggle (Disabled), **Server Status** Stopped + **Start Server** button, **Connected Clients** grid (Address/Subscriptions/Authenticated), Related Support (Available Requests link). **No right-click context menu** (grid empty, server stopped). (`servers-clients-panel`, `ws-server-panel`, `ws-server-ctx`)
      → **Expandable sections (2026-08-04)**: **Authentication** row chevron expands → **Enforce** toggle ("whether or not to enforce authentication for all requests, or just priviledged") + **Password** field ("the password required for authentication"). **Connected Clients** chevron collapses/expands the grid (verified 3→0→3 header items). Evidence: `ws-auth-expanded`, `ws-cc-collapsed2`, `ws-cc-scrolled`, `ws-current-state`.
- [x] 3.2 Capture and document **HTTP Server**: panel (enable, port, settings), right-click menu, any dialogs
      → **Captured**: Auto Start (Off), **Address** (127.0.0.1) + netsh security warning, **Port** (7474), **Mappings** section (folder mappings for serving local files), **Server Status** Stopped + Start Server, **Requests** section, Related Support (Configuring HTTP Server / Available Endpoints). **No right-click context menu**. (`http-server-panel`, `http-server-ctx`)
      → **Expandable sections (2026-08-04)**: **Mappings** is **collapsed by default**; chevron expands → **Path / Folder grid** + input row with **`...` (browse), Add, Del** buttons (the folder-mapping editor). **Requests** chevron collapses/expands an empty List (server stopped). Evidence: `http-mappings-expanded`, `http-requests-expanded`, `http-requests-expanded2`.
- [x] 3.3 Capture and document **UDP Server**: panel (enable, port), right-click menu, any dialogs
      → **Captured**: minimal panel — Auto Start (Off), **Port** (defaults to 4242), Server Status Stopped + Start Server. **No right-click context menu**. (`udp-server-panel`)
- [x] 3.4 Capture and document **Custom WebSocket Servers**: panel (list, add/remove), right-click menu, any dialogs
      → **Captured**: grid Host / Auto Start / Status. Right-click → **Add** → **Add Custom WebSocket Server** dialog 600×288: Name (edit), Auto Start on Startup (toggle), Address (edit), Port (edit), Endpoint (edit), Ok/Cancel. (`cws-servers-panel`, `cws-servers-ctx`, `cws-servers-add-dialog`)
- [x] 3.5 Capture and document **Custom WebSocket Clients**: panel (list, add/remove), right-click menu, any dialogs
      → **Captured**: grid Host / Auto Connect / Reconnect / Retry / Status. Right-click → **Add** → **Add WebSocket Client** dialog 600×348: Name (edit), Endpoint (edit), Auto Connect on Startup (toggle), Reconnect on Disconnect (toggle), Retry Interval (edit + spinner + "seconds"), TLS Support (TLS 1.0/1.1/1.2 toggles), Ok/Cancel. (`cws-clients-panel`, `cws-clients-ctx`, `cws-clients-add-dialog`)

## 4. Voice Control tab — panels

- [x] 4.1 Capture and document **Settings** panel: configuration options
      → **Captured**: hub landing page shows three cards (Settings/Commands/Log — the sub-nav items also live in the sidebar). Settings panel: **Auto Start Listen** toggle (Off), **Listening Status** (Stopped) + **Start Listening** button, **Log Speech to Text Dictation** toggle (Disabled), **Locale** dropdown, **Confidence Threshold** spinner (value + percent label), **Audio Input Device** dropdown, and a Related Support group (Configuring Voice Control / Available Sub-Actions / Available Triggers hyperlinks). **No right-click context menu** (UIA + observer verified). (`voice-control-panel`, `voice-settings-panel`, `voice-settings-ctx`)
- [x] 4.2 Capture and document **Commands** panel: command grid, create/edit/remove, right-click menu, Create Voice Command dialog
      → **Captured**: grid Name / Command / Location / Enabled / Stop After. Body right-click → **Add** only. **Add Voice Control Command** dialog 600×304: Name (edit), Enabled (toggle), Command (edit), Location (combo), Stop After (toggle), Override Global (toggle), Confidence Threshold (edit + percent), Ok/Cancel. (`voice-commands-panel`, `voice-commands-ctx`, `voice-commands-add-dialog`)
- [x] 4.3 Capture and document **Log** panel: what it shows and how it is used
      → **Captured**: heading "Log" + empty output panel, no controls, no entries (voice service not started). Body right-click → **Clear** (no dialog). (`voice-log-panel`, `voice-log-ctx`)

## 5. MIDI tab — panels

- [x] 5.1 Capture and document **MIDI In**: device associations, input event registration, right-click menu, Add MIDI Event dialog
      → **Captured**: two grids — devices (Name/Device Name/Auto Open/Reconnect/Status) + events (Name/Command Type/Channel/Data/Enabled). Device list right-click → Add → **Add MIDI In Device** dialog (600×232: Name edit, Device Name combo, Auto Open on Startup + Re-Open on Close toggles, Ok/Cancel). Events list right-click → Add → **no dialog on empty list** — the Add MIDI Event dialog couldn't be verified without an existing row; mark "I couldn't verify this" in docs. (`midi-in-panel`, `midi-in-ctx-top`, `midi-in-ctx-bottom`, `midi-in-add-device-dialog`)
- [x] 5.2 Capture and document **MIDI Out**: output device associations, right-click menu, any dialogs
      → **Captured**: device list grid (Name/Device Name/Auto Open/Reconnect/Status); right-click → Add → **Add MIDI Out Device** dialog 600×232 (same fields as In). (`midi-out-panel`, `midi-out-ctx`, `midi-out-add-device-dialog`)

## 6. Reference files and navigation

- [x] 6.1 Create the reference file(s) per the structure decision from 1.3, with frontmatter (category automation, type Reference, source docs URL, `app-evidence` citing dump paths, last-reviewed)
      → **Done**: `services.md` (6 sections), `servers-clients.md` (5 panels + expandable sections), `voice-control.md` (3 panels), `midi.md` (2 panels) in `tools/automation/streamer-bot/`; each with frontmatter `app-evidence` citing the primary capture.
- [x] 6.2 Document per section: panel content (layout type, columns/toggles/buttons/status), left-click behavior (dialogs/state changes triggered), right-click menu items or explicit absence plus the dialogs its items open, and dialogs (title, size, fields, Ok/Cancel, modal behavior, entry points)
      → **Done**: all four files follow the `platforms.md` pattern; every section has panel content, right-click (or explicit absence), dialog fields; "I couldn't verify this" used for the unverifiable Add MIDI Event dialog.
- [x] 6.3 Add entries to `tools/automation/streamer-bot/overview.md` nav for the new reference file(s)
      → **Done**: four new links under UI Flow References (Services / Servers/Clients / Voice Control / MIDI).
- [x] 6.4 Cross-check existing notes referencing `Services > X` (e.g., Process Watcher, File/Folder Watcher, Quotes, File Tail) and add links to the new files where useful
      → **Done**: added links in `sub-actions/core/quotes.md`, `triggers/core/file-folder-watcher.md`, `triggers/core/file-io/index.md`, `sub-actions/core/index.md`, `triggers/core/index.md` (file + anchor links, GitHub-style slugs per the vault's `#ad-run` precedent).

## 7. Verification

- [x] 7.1 Run `node .opencode/scripts/validate-links.js` — all new links resolve
      → **Pass**: script output "All links valid" (it validates INDEX.md→plugins; new notes live outside `plugins/`, checked separately). Relative-link resolution check on all 10 new/edited files: **0 broken file targets**; anchors follow the vault slug convention.
- [x] 7.2 Spot-check documented sections against the captured dumps (panel fields, ctx menu items, dialog fields)
      → **Done**: expandable sections re-verified live during writing (Authentication → Enforce/Password; Mappings → Path/Folder grid + browse/Add/Del; Connected Clients + Requests collapse/expand), correcting the earlier "no expanders" claim in proposal.md.
- [x] 7.3 Zero-hallucination check: every fact cites a dump path or docs URL; anything unverifiable is marked "I couldn't verify this"
      → **Done**: all facts trace to `app-evidence` captures in `/mnt/d/Twitch/shots/`; the only unverifiable item (Add MIDI Event dialog on empty list) is explicitly flagged.
- [x] 7.4 Confirm excluded tabs (Stream Apps, OBS Studio, Settings, Integrations) were not documented beyond cross-references
      → **Confirmed**: only the four in-scope tabs documented; OBS/Integrations/Settings/Stream Apps appear only as cross-references (e.g., Servers/Clients configuration mention in `overview.md`).
