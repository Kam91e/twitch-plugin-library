## Context

The library documents Streamer.bot UI areas as live-app references under `tools/automation/streamer-bot/` (`services.md`, `platforms.md`, `servers-clients.md`, `voice-control.md`, `midi.md`, `commands.md`, `add-flows.md`). Each follows a fixed pattern: frontmatter with `app-evidence` pointing to `/mnt/d/Twitch/shots/`, a versioned tagline (v1.0.4 app, Windows 10), an overview of the landing page, per-section panels with right-click/left-click behaviors and dialogs, an Evidence gaps section, and a docs-coverage note (v1.0.5 docs vs app-evidence).

The Settings window is the one major UI area not yet covered. Evidence currently available: `Settings-uia.txt` + `Settings.png` (landing page with all eight sections, their descriptions, and CaretUp/CaretDown scroll buttons). No panel captures exist for any of the eight sections.

Environment: the working directory is WSL with `/mnt/d` (Windows D:) mounted and `powershell.exe` callable — the same Windows host that runs Streamer.bot. The existing capture pipeline (`cap.ps1` screenshot + UIA content-pane dump; `probegroup.ps1`/`scangroup.ps1`/`groupflyout.ps1` click/hover/dump; `Win32Helper.dll` mouse helpers) lives in `/mnt/d/Twitch/shots/`.

## Goals / Non-Goals

**Goals:**

- Produce `settings.md` covering all eight Settings sections with live-app evidence, following the established UI Flow Reference pattern
- Drive the capture pipeline directly from WSL via `powershell.exe` — no manual screenshots required; UIA text dumps are the primary evidence, screenshots only a visual cross-check for observer verification
- Reuse existing capture scripts and add one parameterized click/dump script for the eight settings sections
- Cross-check each section against official docs (v1.0.5) and record app-evidence-only gaps

**Non-Goals:**

- Documenting settings behavior of Streamer.bot versions other than the installed one (v1.0.4)
- Writing configuration advice/tutorial content (that belongs to Tips & Tricks style pages, not a reference)
- Modifying any application code or the plugin/vault sections of the library

## Decisions

### 1. Direct WSL-driven capture instead of manual screenshots

The user asked whether the agent can hook into the app instead of taking screenshots repeatedly. Answer: yes — UIA text dumps ARE the hook. The PowerShell scripts extract the live UI tree as structured text (`[Button] 'CaretUp24' (x,y,w,h)`), which is more accurate than screenshots. From WSL, `powershell.exe -File D:\Twitch\shots\<script>.ps1` runs on the Windows host directly, so the orchestrator can invoke captures, read the `*-uia.txt` output, and iterate — no user screenshots needed.

- **Alternative considered**: WinAppDriver / FlaUI for richer automation — rejected: heavier setup, the existing UIA scripts already work and match the evidence format used by the other reference pages.
- **Alternative considered**: reading the open-source Streamer.bot source to derive the settings UI — rejected as primary evidence: source describes intent, not rendered state; version drift risk. Used only as a secondary cross-check if needed.

### 2. New parameterized capture script: `settings-capture.ps1`

`cap.ps1` only dumps the content pane without clicking. The spike produced four scripts that together form the capture pipeline (all in `/mnt/d/Twitch/shots/`, proven working against the live app):

- `settings-click.ps1` — finds a Settings section by name, left-clicks it, dumps the resulting content pane (`settings-<section>-panel-uia.txt` + `.png`)
- `settings-probe.ps1` — generic interaction script: actions `click`/`rclick`/`coord`/`rcoord`/`scroll`/`wheel`/`key` (SendKeys, e.g. `{ESC}`), always screenshots + dumps the content pane
- `settings-uiact.ps1` — UIA pattern actions that do not rely on mouse input: `expand-combo` (ExpandCollapsePattern on ComboBox, selected by x coordinate), `invoke-expander` (ExpanderToggleButton: Invoke → ExpandCollapse → **TogglePattern** fallback; the WPF expanders in Navigation Panel expose TogglePattern and toggle reliably — see technique corrections below), `toggle-tree` (same pattern stack on tree-row `#Expander` buttons, with optional `-X` coordinate to disambiguate same-named checkboxes across trees), and `expand-trees` (batch: expands every collapsed `#Expander` inside all wide `[Tree]` controls via TogglePattern, view-state only — run repeatedly until it reports 0 newly expanded, because collapsed categories hide their sub-expanders from UIA; this capture took 4 passes, 42+135+9+0 = 189 expanders); full-window dump with control types + AutomationIds
- `settings-dump-all.ps1` — full-window dump (all top-level windows of the process, control types, AutomationIds, rects) — needed for popup dialogs (same approach as `groupflyout.ps1`)

**Capture technique decisions (from spike):**

- **ComboBoxes do not open on synthetic mouse clicks** (both `coord` and by-name clicks failed on Audio Output Device and Log Level). Use UIA `ExpandCollapsePattern.Expand()` via `settings-uiact.ps1 -action expand-combo -name by-x -X <comboX>` instead. This is the reliable path for every dropdown in all eight sections.
- **The content pane scrolls with the mouse wheel** (~48 px per `-120` wheel tick, `settings-probe.ps1 -action wheel -name down`), NOT with the `CaretDown24`/`CaretUp24` buttons — those are the left-navigation scrollbar buttons. Use wheel over the content pane for below-fold content.
- **WPF Expander chevrons: verify per panel, don't assume.** In General Settings, "Instance Id" and "Audio Output Device" rows render `#ExpanderToggleButton` chrome with a chevron glyph, but clicks and UIA patterns show no state change — those chevrons are decorative (verified twice). In User Interface, the Navigation Panel expanders (also `#ExpanderToggleButton`) and tree rows (`#Expander`) **are** real toggles: they expose `TogglePattern` (state On/Off) and expand/collapse reliably via `settings-uiact.ps1 -action invoke-expander/toggle-tree`. Synthetic mouse clicks do not work on them — UIA TogglePattern is the only reliable path. Re-verify per section rather than assuming either way.
- **Two dump levels are both needed**: the named-content pane dump (top-level structure, e.g. `[Text] 'Instance Id' (…)`) and the deep all-windows dump (control types: `[Edit]`, `[ComboBox]`, `[Slider]`, `[Button]`, `[Thumb]`, AutomationIds like `#ExpanderToggleButton`, `#PART_VerticalScrollBar`). The deep dump is the authoritative source for control types; the pane dump is cleaner for reading order.
- **Do not change settings while probing**: toggles (Use System Default, Viewers Tab, Action History) are live controls — document their current state and type from dumps/screenshots, do not click them. Dropdowns may be opened but must not have a selection made; close with `{ESC}` (`-action key -name '{ESC}'`).
- Screenshots accompany every state for @observer visual verification (control types, theme, banners).

### 3. Doc structure mirrors `services.md`

`settings.md` layout:

- Frontmatter: `title: "Streamer.bot — Settings"`, `category: automation`, `type: Reference`, tags, `source`, `app-evidence`, `last-reviewed`
- Tagline: "Reference for the Streamer.bot Settings window (v1.0.4, Windows 10): the landing page and all eight sections — General Settings, User Interface, Backups, Defaults, Groups, Variables, Labs, C# Compile Settings — with panel content, right-click menus, dropdowns, and dialogs."
- `## Settings Overview` — landing table with in-app descriptions, note about scroll buttons; verify whether items exist below the fold
- Eight subsections — one per section; each: panel content top-to-bottom, `**Left-click**` behaviors, `**Right-click**` menus, dropdowns, dialogs with sizes and fields
- `## Evidence gaps` — "I couldn't verify this" items
- Docs coverage note per section

### 4. Disambiguation from the Settings sub-action group

`sub-actions/settings.md` already exists (Pick Color, Reset Credits, Reset First Words, Set Voice Control Input). `settings.md` will carry a note at the top: "Not to be confused with the Settings sub-action group" with a cross-link. This mirrors how the library disambiguates other same-named concepts.

### 5. Docs coverage cross-check

Before writing each section's coverage note, verify which Settings sections have official docs pages (Groups and Variables plausibly have API pages; the others are likely app-evidence only). This can be done by fetching docs.streamer.bot directly or via @librarian. Findings recorded in the Evidence gaps section.

## Risks / Trade-offs

- **Streamer.bot not running / window not foreground when script executes** → Mitigation: scripts already use `SetForegroundWindow` + process-id lookup; add a pre-flight check that prints "NO WINDOW" and a note to launch the app first.
- **Find-by-name ambiguity** (e.g., "Variables" also appears elsewhere in the app) → Mitigation: scope the search to the Settings window and the content pane; prefer unique names or position fallback from the landing capture.
- **More than eight sections below the fold** → Mitigation: capture the scrolled landing state first; document a ninth section if it exists.
- **Dialogs are separate top-level windows not visible to `cap.ps1`'s pane dump** → Mitigation: use the all-windows dump variant (pattern already proven in `groupflyout.ps1`).
- **Empty grids (Groups/Variables) mean Add/Edit/Delete dialogs cannot be fully verified** → Mitigation: document what is verifiable, mark the rest "I couldn't verify this" (consistent with `services.md`).
- **UIA text lacks visual layout fidelity** → Mitigation: keep screenshots for observer verification of ambiguous states; text remains authoritative for control names/types.
- **Version drift between app (v1.0.4) and docs (v1.0.5)** → Mitigation: keep the existing version-matrix convention and mark differences.

## Open Questions

- Whether the user wants the settings panels documented to dialog-depth (like `services.md`) for all eight sections, or panel-level depth for the smaller sections (General/UI/Defaults) and dialog-depth for Groups/Variables/C# — resolved toward dialog-depth everywhere it is verifiable, unless the user objects.
