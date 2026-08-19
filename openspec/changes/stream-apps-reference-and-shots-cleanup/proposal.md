## Why

The **Stream Apps** tab is the only left-navigation section of Streamer.bot without a UI Flow Reference page — the library already covers Platforms, Services, Servers/Clients, Voice Control, MIDI, and Settings. Its landing page lists four apps (OBS Studio, Streamlabs Desktop, Meld Studio, PolyPop), but only the OBS Studio panel has been captured (`OBS-Studio-uia.txt`); the other three panels and all add-connection flows are undocumented. At the same time, the evidence folder `/mnt/d/Twitch/shots/` has grown to 791 files / 152 MB with only **61 cited files** — ~730 unreferenced files (~150 MB) of intermediate capture states and diagnostic junk bloat the workspace.

## What Changes

- Create `tools/automation/streamer-bot/stream-apps.md` — a UI Flow Reference following the established pattern of `settings.md` / `platforms.md` / `services.md`:
  - Landing page: all four apps with their exact in-app descriptions (`Stream-Apps-uia.txt` already captured)
  - One subsection per app panel (OBS Studio, Streamlabs Desktop, Meld Studio, PolyPop): panel content top-to-bottom, control types, left-click behaviors, right-click menus, dropdowns, and dialogs
  - **Add-connection flows**: how each application is added/connected (the user's focus) — captured live via the WSL + UIA pipeline
  - Cross-check against official docs (v1.0.5) where coverage exists; mark app-evidence-only content as such; `## Evidence gaps` section per the zero-hallucination policy
- Fill the **PolyPop documentation gap**: currently only one mention exists (`PolyPop > Trigger Alert` in `sub-actions/index.md`); add sub-actions and triggers reference pages
- Update `overview.md` — add the new page to the **UI Flow References** list
- **Clean up `/mnt/d/Twitch/shots/` in two stages:**
  - **Stage A (now): diagnostic junk** — `tmp*`, `probe*`, `*-verify.txt`, `state*.txt`, `navstate*.txt`, `back*2-verify.txt`, `scan2-delay.txt`, `wincheck.txt`, `cleanup2.txt`, `checkwin-after-source.txt`, `sidebar-dump*.txt` etc. (zero risk: nothing cites them)
  - **Stage B (after stream-apps.md lands): all remaining unreferenced files** (~147 MB of PNGs + intermediate txt) — re-run the reference analysis so files newly cited by the Stream Apps page are protected before deletion
- Add a **reference validator** (`validate-evidence` script or skill check) so cited evidence files can be checked against disk before future cleanups — prevents ever deleting a cited file
- Run `rebuild-index.js` and `validate-links.js` after the new page lands

## Capabilities

### New Capabilities
- `stream-apps-reference`: Requirements for the Streamer.bot Stream Apps reference page — landing page with four apps, per-app panel documentation, add-connection flows, evidence standards (live-app captures, docs cross-check, zero-hallucination markers), and PolyPop sub-action/trigger coverage
- `shots-evidence-cleanup`: Requirements for cleaning `/mnt/d/Twitch/shots/` — staged deletion (diagnostic junk first, then all unreferenced), a validator that proves every cited evidence file exists before deletion, and protection of tooling scripts (`.ps1`/`.cs`/`.dll`)

### Modified Capabilities
<!-- None — openspec/specs/ is empty (previous change was archived without syncing); both capabilities are new. -->

## Impact

- **Docs**: new `tools/automation/streamer-bot/stream-apps.md`; new PolyPop pages under `sub-actions/` and `triggers/`; one-line addition to `overview.md` (UI Flow References list)
- **Evidence (new, in `/mnt/d/Twitch/shots/`)**: `streamapps-*` captures for Streamlabs Desktop, Meld Studio, PolyPop panels + add flows (OBS panel and landing already captured)
- **Evidence (deleted)**: Stage A diagnostic junk (~40 files); Stage B all unreferenced files (~147 MB) — both verified against citations first
- **Tooling (new)**: evidence-reference validator (script or skill) that cross-checks cited files vs disk
- **Index**: `INDEX.md` regenerated via `rebuild-index.js` (only if tool pages are listed — currently only `overview.md` is, so no INDEX change expected); `validate-links.js` must pass
- **No application code changes** — documentation and evidence-hygiene change only
