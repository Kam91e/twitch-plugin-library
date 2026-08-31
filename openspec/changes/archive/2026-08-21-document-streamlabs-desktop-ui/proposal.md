## Why

The Streamlabs Desktop documentation in `tools/streaming-software/streamlabs-desktop/` describes the app in generic OBS terms — scenes, sources, and transitions are explained as inherited OBS concepts, not as the actual Streamlabs UI. A beginner opening the app sees a specific sidebar (Editor, Overlays, App Store, Highlighter, Recordings, Get Ultra, Dashboard, Get Help, Settings), specific docks (Scenes, Sources, Mixer, Transitions, Controls), and a Settings window — none of which are documented from the real app. The user has Streamlabs Desktop 1.21.9 running and wants the library to document the app as it actually is, element by element.

## What Changes

- **New UI reference pages** under `tools/streaming-software/streamlabs-desktop/` documenting the real app UI, captured live from the running app (v1.21.9):
  - **Sidebar reference** — all sidebar sections and their sub-items: Editor (Editor, Layout Editor, Studio Mode), Overlays (Scene, Alerts and Widgets), App Store (App Store Home, App Manager), Highlighter, Recordings, Get Ultra, Dashboard (Dashboard Home, Cloudbot, Alert Box Settings, Widgets, Tip Settings, Multistream), Get Help, Settings, account menu. Expandable sections vs. navigation items, sidebar scrollability.
  - **Settings reference** — the Settings window and its sections (still to be explored).
  - **Mixer reference** — the audio mixer panel: per-source volume, mute, meters, scrollability, advanced audio properties (still to be explored).
  - **Scene collections** — the "Untitled" collection dropdown, creating/switching/renaming/deleting collections (still to be explored).
  - **Transitions & automation** — the Transitions dock, transition types, durations, hotkeys, Instant Replay (still to be explored).
- **Deepen existing pages** with real-UI content and evidence:
  - `scenes-and-transitions.md` — adding scenes, managing scene collections and sources, editing transitions
  - `sources.md` — adding different source types via the real Add Source flow
  - `audio-and-hotkeys.md` — mixer explanation grounded in the real panel
- **Exploration methodology** — the UIA pipeline used for Streamer.bot does NOT work on Streamlabs (Electron exposes no accessibility tree). Documentation is built from **screenshots + observer verification + coordinate-based interaction**, with all evidence saved to `/mnt/d/Twitch/shots/` (outside the repository, never pushed to GitHub).
- **Scene-safety constraint** — all capture interaction with the live app is non-destructive: dialogs are opened and cancelled, never Remove/Delete. The user's scene collection ("Untitled" with Starting Soon, Gaming, BRB, Ted Talk, Screen) must remain untouched.
- **Version pinning** — all new pages pin the documented version (1.21.9), matching the Streamer.bot reference pattern.

## Capabilities

### New Capabilities
- `streamlabs-sidebar-reference`: Requirements for documenting the Streamlabs Desktop sidebar — all sections, sub-items, expandable vs. navigation behavior, scrollability, account menu
- `streamlabs-scenes-sources`: Requirements for documenting scenes, sources, and scene collection management — adding scenes, adding sources, the Add Scene/Add Source flows, collection dropdown and management
- `streamlabs-mixer`: Requirements for documenting the audio mixer panel — per-source volume, mute, meters, scrollability, advanced audio properties
- `streamlabs-settings`: Requirements for documenting the Settings window and its sections
- `streamlabs-transitions-automation`: Requirements for documenting the Transitions dock, transition types and durations, hotkeys, and automation features (Instant Replay, Studio Mode)
- `streamlabs-evidence-capture`: Requirements for the capture methodology — screenshot + observer verification, evidence stored outside the repo, non-destructive interaction with the live app, version pinning, zero-hallucination markers

### Modified Capabilities
<!-- None — openspec/specs/ is empty; all capabilities are new. -->

## Impact

- **Docs**: new pages under `tools/streaming-software/streamlabs-desktop/` (sidebar reference, settings, mixer, scene collections, transitions); deepened `scenes-and-transitions.md`, `sources.md`, `audio-and-hotkeys.md`; cross-links from `overview.md`
- **Evidence (new, in `/mnt/d/Twitch/shots/`)**: `slobs-*` captures of the sidebar, docks, dialogs, and settings — outside the repo, not on GitHub
- **Tooling (new, in `/mnt/d/Twitch/shots/`)**: capture/click helper scripts (`capwin.ps1`, `click.ps1`, `crop.ps1`, `calibrate.ps1`) — outside the repo
- **Index**: `INDEX.md` regenerated via `rebuild-index.js` if tool pages are listed; `validate-links.js` must pass
- **No application code changes** — documentation and evidence-hygiene change only