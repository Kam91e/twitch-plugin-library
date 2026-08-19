# Expand Streamlabs Desktop Docs — Design

## Context

`tools/streaming-software/streamlabs-desktop/` currently holds 4 files: `overview.md`, `alerts-and-cloudbot.md`, `overlays-and-widgets.md`, `monetization.md`. The sibling OBS Studio folder has 5 files including dedicated `sources.md`, `scenes-and-transitions.md`, `audio-and-hotkeys.md`, and `plugins.md`. Streamlabs Desktop is an OBS fork with its own source set (Screen Capture, Auto Game Capture, Game Pulse, Reactive Source, Spout2, OpenVR, widgets-as-sources) and feature set (Ultra multi-streaming, Dual Output, Collab Cam, App Store) that are currently undocumented or inaccurately documented (stale widget names in `overlays-and-widgets.md`).

A first-hand source list with app-provided descriptions was captured from the user's own Streamlabs Desktop installation (file `Streamlabs Sources` at repo root) — this is the ground truth for `sources.md` and satisfies the zero-hallucination policy. Official docs were additionally verified via web research for the unique sources.

Constraints: all docs in English, frontmatter per `tools/_TEMPLATE.md`, zero-hallucination policy, no git history in the repo (backups needed before edits).

## Goals / Non-Goals

**Goals:**
- Complete source catalog in `sources.md` mirroring the 5 app menu groups, with verified descriptions.
- Dedicated pages for scenes/transitions, audio/hotkeys, App Store/plugins, and Ultra multi-streaming/Collab Cam.
- Correct stale widget names and add missing widgets in `overlays-and-widgets.md`.
- Add Console & Mobile section to `overview.md`.
- Cross-link to the existing Streamer.bot automation reference.
- List Streamlabs Desktop in INDEX.md Tools table.

**Non-Goals:**
- Documenting Streamlabs Cloudbot/Streamlabs web dashboard as separate tools (they are covered within existing files or belong to other products).
- Expanding INDEX.md with all other missing tools (only Streamlabs Desktop here).
- Modifying Streamer.bot reference files (read-only cross-links).
- Documenting third-party OBS plugins for Streamlabs Desktop.

## Decisions

### D1: sources.md mirrors the app's own menu groups
`sources.md` is structured by the 5 groups shown in the "Add Source" menu (Essentials, Capture Sources, Video and Audio, Media, Widgets), exactly as captured in the ground-truth list. Each entry: app description + supported formats/devices. App typos are corrected to proper English.
- *Alternative*: structure by OBS-inherited vs Streamlabs-unique — rejected: the app menu groups are what the user sees; the inheritance split is analytical noise.

### D2: Duplicates documented once
Game Capture, Video Capture, and Media File each appear in multiple menu groups. They are described in full once (in their primary group), with a note listing all groups where the app shows them.
- *Alternative*: repeat entries per group — rejected: doubles maintenance and reader confusion.

### D3: Widgets-as-sources link, not duplicate
`overlays-and-widgets.md` already covers widget configuration. `sources.md` therefore documents widget sources as source types (what they display, how to add them) and links to `overlays-and-widgets.md` for configuration details.
- *Rationale*: avoids two files drifting on widget settings.

### D4: overlays-and-widgets.md is corrected, not rewritten
Only the widget names table and missing-widget additions change, per the delta spec. The rest of the file (themes, import/export, tips) stays intact.
- *Rationale*: minimal diff; existing content was verified accurate apart from names.

### D5: Automation bridge is a read-only link
`sources.md` gains an "Automation" section linking to `tools/automation/streamer-bot/sub-actions/streamlabs-desktop/` and `tools/automation/streamer-bot/triggers/streamlabs-desktop.md`. No Streamer.bot files are touched.

### D6: Ground-truth file lifecycle
`Streamlabs Sources` at repo root is a working source file, not vault documentation. It is consumed during implementation, then either deleted or moved to `/tmp` (user preference, default: delete after implementation, noted in tasks).
- *Rationale*: it is not frontmatter-compliant vault content and would be picked up by future audits.

### D7: Execution lanes
Content files are independent writing lanes (5 new files + 2 updates) and can be parallelized after `sources.md` ground truth is established. INDEX.md edit is a final sequential pass with link validation.

## Risks / Trade-offs

- **Hallucination in source descriptions** → `sources.md` is written strictly from the ground-truth file; anything beyond it is flagged "couldn't verify".
- **App menu drift over time** → `last-reviewed` date in frontmatter + source list re-capture during future reviews.
- **Widget name churn (naming conflicts with community terms)** → names come from the application itself, not community jargon.
- **INDEX.md is partially hand-maintained** → only add the Streamlabs Desktop row; validate links afterwards (no script covers the Tools table).
- **No git history** → backup `overview.md` and `overlays-and-widgets.md` before editing (repo convention from prior changes).

## Migration Plan

1. Back up `overview.md` and `overlays-and-widgets.md`.
2. Write 5 new files: `sources.md`, `scenes-and-transitions.md`, `audio-and-hotkeys.md`, `app-store-and-plugins.md`, `multistreaming-and-collab.md`.
3. Update `overview.md` (Console & Mobile section) and `overlays-and-widgets.md` (widget names).
4. Add Streamlabs Desktop row to INDEX.md Tools table.
5. Validate: internal links resolve, frontmatter present, no duplicated widget config, `sources.md` covers all ground-truth entries (count check).
6. Remove the working `Streamlabs Sources` file from repo root.
7. Archive the change.

Rollback: restore backups; delete new files; remove INDEX.md row.

## Open Questions

None blocking. Settled with the user: full new-file set (5), scenes/sources split mirrors OBS, Console & Mobile goes in overview, automation bridge included in the same change, `overlays-and-widgets.md` correction included.
