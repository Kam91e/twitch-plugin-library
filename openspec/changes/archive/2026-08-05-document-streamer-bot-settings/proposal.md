## Why

The Streamer.bot section of the library documents UI areas (Services, Platforms, Servers/Clients, Voice Control, MIDI) as live-app references, but the **Settings** window — the main configuration surface for the whole application — has no dedicated page. Only a landing-page capture (`Settings-uia.txt`) exists; the eight settings sections (General Settings, User Interface, Backups, Defaults, Groups, Variables, Labs, C# Compile Settings) are completely undocumented. Beginner and veteran streamers configuring Streamer.bot have no library reference for where settings live or what each option does.

## What Changes

- Create `tools/automation/streamer-bot/settings.md` — a UI Flow Reference for the **Settings** window, following the established pattern of `services.md` / `platforms.md` / `voice-control.md` / `midi.md`:
  - Landing page: all eight sections with their in-app descriptions and scroll behavior
  - One subsection per settings section with panel content top-to-bottom, control types, left-click behaviors, right-click menus, dropdowns, and dialogs
  - Cross-check against official docs (v1.0.5) where coverage exists; mark app-evidence-only content as such
  - `## Evidence gaps` section per the zero-hallucination policy ("I couldn't verify this")
- Collect live-app evidence for all eight panels via the UIA capture pipeline, driven directly from the WSL environment via `powershell.exe` (no manual screenshots — proven working in the spike)
- **Scope for this iteration: implement General Settings first** (per user decision), then extend to the remaining seven sections in follow-up iterations
- Add a disambiguation note distinguishing the app **Settings** window from the existing `sub-actions/settings.md` (Settings sub-action group: Pick Color, Reset Credits, …)
- Update `overview.md` — add the new page to the **UI Flow References** list
- Run `rebuild-index.js` and `validate-links.js` after the new page lands

## Spike findings (General Settings, live capture, v1.0.4)

The capture hook is proven: the agent drives the live app directly via `powershell.exe` + UIA text dumps (screenshots only for visual cross-check via @observer). General Settings is fully captured:

- **Panel structure** (breadcrumb `Settings > General`), four sections: **Instance**, **Audio**, **Performance**, **Logging**
- **Instance**: Instance Id (UUID display, e.g. `e01d6310-…`) + Name (text field, currently "Streamer.bot") with a **Save** button
- **Audio**: Audio Output Device (dropdown — 8 entries: "Default" + devices, disconnected ones marked "(Disconnected)"), Use System Default (toggle switch, currently "Yes"), Application Volume (slider, currently 100%)
- **Performance** (banner: "Changing these settings requires a restart of Streamer.bot"): Viewers Tab (toggle "Enabled"), Action History (toggle "Enabled")
- **Logging** (banner: "Changing the log folder requires a restart of Streamer.bot"): Log Folder (text field + browse button), Log Level (dropdown: Information / Debug / Verbose; description notes "locked to verbose in non-stable versions")
- **Scroll behavior**: the page scrolls (content below fold); wheel-scroll over the content pane works, the `CaretDown24` button scrolls the left nav, not the content
- **Expanders**: "Instance Id" and "Audio Output Device" rows render with chevron arrows (WPF Expander styling) but clicking header/chevron does **not** collapse them — arrows are decorative (verified by probes; consistent with the Twitch Settings cards finding in `platforms.md`)
- **Capture technique notes**: mouse clicks do not open the ComboBoxes (use UIA `ExpandCollapsePattern` instead); deep UIA dumps expose control types (Edit/ComboBox/Slider/Button) that the named-content dump hides
- Settings values shown (instance UUID, device list) are machine-specific — the reference documents structure and control types, not the user's values

## Spike findings (User Interface, live capture, v1.0.4)

User Interface is fully captured via the same `powershell.exe` + UIA pipeline (panel dump + scrolled dumps + expander/tree toggles + observer cross-check):

- **Panel structure** (breadcrumb `Settings > User Interface`), seven sections: **Window Options, Colors, Sub-Actions, Other, Navigation Panel, Enabled Sub-Actions, Enabled Triggers**
- **Window Options**: Minimize to Tray (toggle Off), Minimize to Tray on Close (toggle Off), Hide Splash Screen (toggle Off), Ask for Confirmation on Close (toggle On)
- **Colors**: pickers for Comment Color (e.g. `#229977`) and Sub-Action Disabled Color; opening them shows a native Windows ColorDialog (Basic/Custom colours, Define Custom Colours, Hue/Sat/Lum, RGB, Colour|Solid, Add to Custom Colours, OK/Cancel)
- **Other**: Dark Mode toggle (On); Duplicate Sub-Action Location combo (End/After; duplicates behave identically); Sub-Action Location behavior note
- **Navigation Panel** (6 expanders, all expanded): Platforms (Twitch, YouTube, Trovo, Kick), Stream Apps (OBS Studio, Streamlabs Desktop, Meld Studio, PolyPop), Services (File/Folder Watcher, Timers, File Tails, Process Watcher, Credits, Quotes), MIDI (MIDI In, MIDI Out), Voice Control (Settings, Commands, Log), Servers/Clients (Websocket Server, HTTP Server, UDP Server, Custom Websocket Servers, Custom Websocket Clients) — rows toggle On/Off; list content is machine-specific (installed integrations)
- **Enabled Sub-Actions** (banner: "Changing enabled Sub-Actions requires a restart of Streamer.bot"): real hierarchical tree — 14 categories (Core, Meld Studio, OBS Studio, PolyPop, Settings, Speaker.bot, Streamlabs Desktop, YouTube, Elgato, Integrations, Kick, Streamer.bot, Trovo, Twitch), each expandable to 2–3 nested levels. Fully expanded capture (189 expanders, dump 4749 lines): Core → 22 sub-categories (Delay, Action Queues, Actions, Arguments, C#, Commands, File IO, File Tail, Globals, Logic, MIDI, Misc, Network, Quotes, Signals, Sounds, System, Timers, Triggers, Users, Voice Control) each containing leaf sub-actions (e.g. Actions: Run Action/Set Action State/…; Commands: Get Command State/…); Meld Studio → Effects/Layers/Tracks; OBS Studio → Filters/Groups/Replay/Scenes/Sources; Elgato → Stream Deck/Wave Link/Camera Hub (Camera Hub → EpocCam/Prompter/Webcam, Webcam with ~40 leaf items); Twitch → Ads…User (Moderation → Chat Modes/Shield at depth 3)
- **Enabled Triggers** (banner: "Changing enabled Triggers requires a restart of Streamer.bot"): same tree pattern — 11 categories (Core, Custom, Meld Studio, OBS Studio, Streamlabs Desktop, Elgato, Integrations, Kick, Trovo, Twitch, YouTube), also 2–3 levels deep. Core → 15 sub-categories (Streamer.bot Started, Test, Timed Actions, Commands, File/Folder Watcher, Global Variables, Groups, Inputs, MIDI, Processes, Quotes, System, Voice Control, File IO, Websocket; Websocket → Client/Custom Server at depth 3); Integrations → CrowdControl/DonorDrive/Fourthwall/HypeRate.io/Kofi/Pally.gg/Patreon/Pulsoid/Shopify/Speaker.bot/StreamElements/Streamer.bot Remote/Streamlabs/Throwing System/TipeeeStream/TreatStream/VoiceMod/VTube Studio; Twitch → Ads…Shared Chat/Subscriptions (Shared Chat with 18 leaf items)
- **Tree scrolling**: each tree has its own internal scrollbar (`#PART_VerticalScrollBar` inside the `[Tree]`); content is virtualized far beyond the ~350px viewport (fully expanded content reaches document-y ≈16700); the page itself also scrolls independently
- **Technique corrections vs General Settings**: the chevron arrows are **not** decorative — navigation expanders expose `TogglePattern` (`#ExpanderToggleButton`, state On/Off) and respond to UIA toggle, not to mouse clicks; tree rows expose `#Expander` buttons also toggled via `TogglePattern`. Same-name items across trees (e.g. "Core" in both trees) require x-coordinate disambiguation in the probe. Collapsed categories hide their sub-expanders from UIA, so expanding all levels requires iterating the `expand-trees` batch action until it reports 0 newly expanded (4 passes in this capture)
- Page scrolls; Navigation Panel rows report on/off via green pill toggles; all settings are machine-specific — the reference documents structure and control types, not the user's values

## Spike findings (Backups, live capture, v1.0.4)

Backups is fully captured via the same `powershell.exe` + UIA pipeline (panel dump + all-windows dump + button probes + observer cross-check):

- **Panel structure** (breadcrumb `Settings > Backups`), three sections: **Backup Folder**, **Backup Status**, **Streamer.bot Cloud Backups** — all visible without scrolling
- **Backup Folder**: subtext "The folder to save backups to", `[Edit]` text field (machine-specific path) + unnamed browse `[Button]` with folder icon; clicking browse opens a **standard Windows folder picker** ("Choose your backup folder", 640×360, native IFileDialog with `FOS_PICKFOLDERS`: toolbar Organise/New folder/Views/Help, left tree view, items view, "Folder:" field, Select Folder/Cancel buttons) — canceled without confirming (Select Folder would change the setting)
- **Backup Status**: "Last backup: <timestamp>" + `[Button] 'Backup Now'`; clicking Backup Now executes a backup **immediately with no confirmation dialog** — the timestamp updates in place (a live action, not a settings change; documented as behavior, no value captured)
- **Streamer.bot Cloud Backups**: description text explaining cloud backups are a Patreon supporter perk ("Thank You tier or higher", requires Streamer.bot account login + Patreon link), `[Button] 'Support on Patreon'` (heart icon) + `[Button] 'Streamer.bot Account'` (external-link icon); clicking "Streamer.bot Account" opens **Chrome** to a "Sign in to Streamer.bot" page (external browser action — not probed further, left open, no login performed)
- **Capture technique notes**: buttons clickable by name via `settings-probe.ps1` (`click -name`); the unnamed browse button requires coord-click; external-browser side effects (Chrome) appear only as new windows in `Get-Process` MainWindowTitle, not in the UIA all-windows dump — check both after probing account/link buttons
- All settings are machine-specific (folder path, timestamps) — the reference documents structure and control types, not the user's values

## Spike findings (Defaults, live capture, v1.0.4)

Defaults is fully captured via the same `powershell.exe` + UIA pipeline (panel dump + scroll sequence + all-expanders-expanded + observer cross-check):

- **Panel structure** (breadcrumb `Settings > Defaults`), three expandable sections: **Actions**, **Commands**, **Sub-Actions** (→ **Switch Case**) — all rows are "default settings to apply to new …" (Actions/Commands/Switch Case groupings)
- **Actions** (4 toggles, all Off): Random ("Whether or not to pick a random top level sub-actions to only run"), Concurrent ("…run concurrently"), Always Run ("…when queued will always run, regardless if the queue is paused"), Exclude from Action Queue/History ("…appearing in the Action Queue or Action History pages")
- **Commands** (9 items): Include (Off), Ignore Bot Messages (On), Ignore Internal Messages (On), Persist User Counter (Off), Persist Counter (Off), Case Sensitive (Off), Global Cooldown (NumericUpDown stepper + "seconds"), User Cooldown (NumericUpDown stepper + "seconds"), nested **Sources** expander ("What sources are enabled by default") with 8 platform-source toggles: Twitch Message (On), Twitch Whisper/Bot Whisper/Resubscription Message/Shared Chat, YouTube Message, Trovo Message, Kick Message (all Off)
- **Sub-Actions → Switch Case**: Case Sensitive ("Whether or not to the switch case should be case sensitive", On) — note the app's wording ("to the switch case")
- **Technique**: the three section headers are WPF expanders (`#ExpanderToggleButton` 966×73, TogglePattern) — same as User Interface nav expanders, not decorative; added `expand-expanders` batch action to `settings-uiact.ps1` (toggles every collapsed `#ExpanderToggleButton` — 2 passes: 3+0) after single-target `by-y` proved unreliable (fractional BoundingRect coords, "now=Off/On" flip-flops); scrollbar technique refined: content `#PART_VerticalScrollBar` at x≈-646 has clickable PageUp/PageDown tracks (each ≈560px page jump) — wheel is too slow (~48px/notch) and the `{HOME}` key doesn't reach the ScrollViewer (no focus); panel ≈1700px tall vs 560px viewport → 4 scroll states captured
- `settings-dump-all.ps1` writes only the UIA dump, no PNG — bottom-state screenshot re-taken via probe (`settings-defaults-bottom.png`)
- All toggle values are machine-specific defaults on this install — the reference documents structure, control types, and label texts, not the user's values

## Spike findings (Groups, live capture, v1.0.4)

Groups is fully captured via the same `powershell.exe` + UIA pipeline (panel dump + full dump + context-menu probe + test-group Add/Delete flow with user approval + delete-dialog capture):

- **Panel structure** (breadcrumb `Settings > Groups`), three columns, all visible without scrolling: **Groups** (DataGrid, columns Name + Bots) with an **Add Group** section below; **Users** (empty List, 273×465); **Add Multiple Twitch Users to Group** (large Edit 289×444 + `[Button] 'Add Users'`)
- **Add Group**: Edit field (name; typing shows a `#ClearButton`) + `[Button] 'Bots' [Toggle:Off]` (group-type toggle — probed Off→On→Off: flips ToggleState only, no dropdown/popup, label stays "Bots") + `[Button] 'Add'` (with empty name: no-op, no validation dialog; with a name: inserts a DataGrid row whose UIA name is a raw ID like `_xIAJmWAhYOPk2W6E6WUANT1BCFB` containing the typed name as child Text)
- **Row context menu** (right-click on a group row, 6 items): **Delete / Clear / Search for Twitch User / Bots / Export to File / Import from File** — no Edit item (editing happens elsewhere); right-click on the empty grid shows no menu (menu only on rows)
- **Delete dialog**: `Delete group '<name>'?` (460×168, centered over the panel): "Are you sure you want to delete the group '<name>'?", `[Button] 'Yes'` (`#OkButton`) + `[Button] 'No'`
- **Flow verification**: temporary test group `zz-test` created (user-approved) then deleted via the Delete dialog to restore a clean state (DataGrid empty again, `Bots` toggle Off)
- Group rows/columns content and the Users list are machine-specific (empty on this install) — the reference documents structure, control types, and label texts, not the user's data

## Spike findings (Variables, live capture, v1.0.4)

Variables is fully captured via the same `powershell.exe` + UIA pipeline (panel dump + full dump + feature-toggle probe + Add/Del flow verification with user-provided deletion method + visual verification):

- **Panel structure** (breadcrumb `Settings > Variables`): a single section, **Variable Masking** — `[Button] 'Mask Variable Containing' [Toggle:Off]` (feature toggle; probe Off→On→Off: flips ToggleState only, panel structure unchanged — the toggle enables/disables masking itself, not the editor), a `[List]` of masked words (user data: apiKey, url), an `[Edit]` field with `#ClearButton`, `[Button] 'Add'` + `[Button] 'Del'`, and a description text block: "Variables that contain these words will have their values masked with * in the following areas: 1. Global Variable Viewer 2. Action History Variable Inspecting"
- **Add flow** (temporary test word `zz-testmask`, user-approved, added then removed): clicking the Edit field pre-fills it with the currently selected list item's text and typing appends to it ('apiKey' + 'zz-testmask' → entry `apiKeyzz-testmask`); clicking Add inserts the field content as a new masked word and clears the field
- **Del flow (user-provided, verified)**: type the exact variable name into the field, THEN click Del — removes the matching entry, **no confirmation dialog**; the plain "select an item + Del/Delete key" interaction does NOT delete (verified: Del click with only a list selection, keyboard Delete, {END}+{DELETE}, right-click on item, double-click, Shift+F10/{APPS} all produce no effect and no menu)
- **No context menu** anywhere on the masked-words list (right-click on items and empty area both no-op)
- The masked-words list content is machine-specific (apiKey/url are this user's data) — the reference documents structure, control types, and the type-name-then-Del deletion behavior, not the user's words

## Spike findings (Labs, live capture, v1.0.4)

Labs is fully captured via the same `powershell.exe` + UIA pipeline (panel dump + full dump + visual verification):

- **Panel structure** (breadcrumb `Settings > Labs`): a single section, **Pending Action Cache** — `[Button] 'Enable' [Toggle:Off]` (labs-feature toggle; left untoggled — enabling requires a restart and writes a database on close, i.e. a state mutation not to be probed) plus a 5-paragraph description block: restart REQUIRED after enabling/disabling; on close writes any outstanding pending actions (not-yet-run actions in a blocking or paused queue) to a database; on start auto-loads cached actions and pauses their queues, adding an argument `wasCached` = true (does not exist during normal operation); "This feature is very experimental, and I need feedback on it"; caveat that serialization/deserialization does not preserve all data types — known: List<T> objects become object[] arrays
- **Layout**: all content fits the viewport without scrolling (description ends at y≈431 vs pane bottom ≈685) — no panel scrollbar
- Labs is the experimental-features section: this capture documents the section header, the single current labs feature with its toggle and full description text (verbatim quote for the reference)

## Spike findings (C# Compile Settings, live capture, v1.0.4)

C# Compile Settings is fully captured via the same `powershell.exe` + UIA pipeline (panel dump + context-menu probe + Add Reference dialog capture, canceled):

- **Panel structure** (breadcrumb `Settings > C# Compiler`): a single section, **Common References** — a `[List]` (522×150, empty on this install) plus two description texts: "Any references added to the common references list above will be automatically added to every Execute C# code when it's compiled" and "Making Changes to this list will not invalidate any currently compiled Execute C# Code sub-actions"; all content fits the viewport (no panel scrollbar)
- **No Add/Del buttons in the panel** — adding references is via **right-click context menu on the list**, single item: **"Add reference from file..."** (178×41)
- **Add Reference dialog**: the menu item opens the standard Windows file picker **"Choose a library file"** (640×360, IFileDialog — same family as the Backups browse dialog: toolbar Organise/New folder/Views/Preview pane/Help, tree view, items view with Name/Date modified/Type/Size columns, Vertical Scroll Bar) — canceled without confirming, clean state restored
- The Common References list content is machine-specific (empty on this install) — the reference documents structure, control types, the context-menu entry, and the file-picker dialog, not the user's references

## Capabilities

### New Capabilities
- `streamer-bot-settings-reference`: Requirements for the Streamer.bot Settings window reference page — scope (all eight sections, General Settings first), evidence standards (live-app captures, docs cross-check, zero-hallucination markers), navigation/control-type/right-click/dialog documentation requirements, and disambiguation from the Settings sub-action group

### Modified Capabilities

## Impact

- **Docs**: new `tools/automation/streamer-bot/settings.md`; one-line addition to `overview.md` (UI Flow References list)
- **Evidence (new, in `/mnt/d/Twitch/shots/`)**: `settings-general*.png` + `-uia.txt` (panel, scrolled states, both dropdowns open); `Settings-uia.txt` landing pre-existed
- **Capture scripts (new, in `/mnt/d/Twitch/shots/`)**: `settings-click.ps1` (click section by name + dump), `settings-probe.ps1` (coord/click/right-click/wheel/key), `settings-uiact.ps1` (UIA ExpandCollapsePattern for combos, expander invoke), `settings-dump-all.ps1` (full-window dump with control types + AutomationIds)
- **Index**: `INDEX.md` regenerated via `rebuild-index.js` (only if tool pages are listed there — currently only `overview.md` is listed, so no INDEX change expected)
- **No application code changes** — this is a documentation-only change
