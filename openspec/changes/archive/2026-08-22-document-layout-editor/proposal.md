## Why

The Streamlabs Desktop docs in `tools/streaming-software/streamlabs-desktop/` list `Layout Editor` as a sub-item of the `Editor` expander in `sidebar-reference.md`, but never explain what it is. Users (and `sidebar-reference.md` itself) mark `Editor / Layout Editor / Studio Mode` destinations as unverified: “what Editor, Layout Editor, Studio Mode … open in-app was not individually captured.” In v1.21.9 layouts are a distinct concept from scenes — scenes are shown on stream (documented in `scenes-and-transitions.md` / `sources.md`), layouts are seen only in the app under `Editor → Layout Editor`. The requester has created two live layouts `Test Elements` and `Test Elements 2` under Editor to make this capturable, but no reference page documents them. Without a minimal stub, beginners confuse layouts with scenes and veterans have no grounded reference for creating/switching layouts or for the element palette.

## What Changes

- **New page `layout-editor.md` (minimal) under `tools/streaming-software/streamlabs-desktop/`** documenting the real app UI v1.21.9, built live from the running app with screenshots + observer verification in `/mnt/d/Twitch/shots/` (never committed), pinning `v1.21.9`:
  - **Open:** how to open Layout Editor (`Editor` expander → `Layout Editor`, teal active highlight)
  - **Layouts vs scenes:** layouts are app-only containers (visible only in Layout Editor) vs scenes are stream-visible containers (already documented)
  - **Layout lifecycle (minimal):** the layouts list (currently shows `Test Elements`, `Test Elements 2`), creating a layout (`+` → name dialog → appears in list → `ESC` restores), switching layouts (click entry → canvas swaps)
  - **Elements palette (stub):** how to open the “Add Element” palette (`+` / Add Element → palette → `ESC` restores), that a palette exists; full per-group / per-element catalog is explicitly deferred and marked as evidence gaps
  - **Canvas basics (one verified paragraph):** selecting an element shows bounds/handles if visible in `Test Elements` captures; drag/resize/layering left as unverified if not observed
  - **Cross-links:** deepens `sidebar-reference.md` destination line for `Layout Editor`, adds UI Reference entry to `overview.md`, links bidirectionally with `sources.md` / `scenes-and-transitions.md`
- **Deepen existing pages only via cross-links (no new spec-level behavior beyond the new page):** `sidebar-reference.md` destination note for Layout Editor, `overview.md` UI Reference entry for Layout Editor, `sources.md` / `scenes-and-transitions.md` contrast note (scene vs layout). Full per-element property reference is intentionally deferred to a follow-up change.
- **Scene-safety & evidence hygiene:** all captures are non-destructive (`open → capture → cancel` via `ESC`, state verified before/after); evidence files are `slobs-layout-*` under `/mnt/d/Twitch/shots/`, validated via `validate-evidence.js`; zero-hallucination markers for any unverified layout/element claim.

## Capabilities

### New Capabilities
- `streamlabs-layout-editor`: Requirements for documenting the Layout Editor in v1.21.9 — how to open, layouts vs scenes distinction, layouts list, creating/switching layouts, opening the Add Element palette, canvas basics, and evidence/ version-pin / gap markers

### Modified Capabilities
<!-- No spec-level requirement changes beyond the new page. Sidebar cross-link is doc-level. -->

## Impact

- **Docs (new, v1.21.9, evidence-backed):** `tools/streaming-software/streamlabs-desktop/layout-editor.md`; small edits to `sidebar-reference.md` (Layout Editor destination), `overview.md` (UI Reference), `sources.md` / `scenes-and-transitions.md` (layout vs scene contrast note)
- **Evidence (new, outside repo):** `slobs-layout-*` screenshots + `slobs-layout-*` helper markers in `/mnt/d/Twitch/shots/` — never on GitHub
- **Index:** `INDEX.md` regenerated via `rebuild-index.js` if listing changes; `validate-links.js` and `validate-evidence.js` must pass
- **No application code changes** — documentation + evidence-hygiene only
- **Deferral:** per-group / per-element catalog, per-element properties (position/size/rotation/layers/filters), and layout duplicate/rename/remove flows remain as documented gaps for the next change
