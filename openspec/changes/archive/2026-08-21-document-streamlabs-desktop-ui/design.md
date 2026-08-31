## Context

The Streamlabs Desktop docs in `tools/streaming-software/streamlabs-desktop/` are topic-based and describe the app in generic OBS terms. The user runs Streamlabs Desktop 1.21.9 (Windows, account `kameo_s`) and wants the library to document the actual app UI. The repo already has a proven pattern for this: the Streamer.bot UI Flow References (`settings.md`, `stream-apps.md`) built from live UIA captures with evidence in `/mnt/d/Twitch/shots/`.

Exploration established a critical constraint: **the UIA pipeline does not transfer to Streamlabs Desktop**. Streamlabs is Electron/Chromium and exposes an empty accessibility tree (verified: window → preview pane + one unnamed pane with zero descendants). The evidence-based documentation must therefore use a different capture method.

## Goals / Non-Goals

**Goals:**
- Document the real Streamlabs Desktop 1.21.9 UI: sidebar (all sections + sub-items), scenes, sources, mixer, settings, scene collections, transitions
- Ground every claim in captured evidence (screenshots + observer verification), per the zero-hallucination policy
- Keep all evidence outside the repository (`/mnt/d/Twitch/shots/`) so it never reaches GitHub
- Never modify the user's live scene collection during capture

**Non-Goals:**
- Not documenting Streamer.bot's Streamlabs connection (already covered in `stream-apps.md`)
- Not documenting the Streamlabs web dashboard or mobile app
- Not building a general-purpose UI automation framework — only the capture helpers needed for this documentation effort
- Not changing the app itself

## Decisions

### D1: Screenshot + observer verification as the primary evidence method

UIA dumps are unavailable (empty Electron tree), so every documented element is captured as a PNG and verified by the observer subagent, which extracts labels, layout, and coordinates. Evidence pairs: `slobs-<area>.png` (screenshot) + observer-verified text extraction. Where the official Streamlabs docs cover a feature, cross-check and cite; otherwise mark as app-evidence-only per the zero-hallucination policy.

**Alternatives considered:** forcing Chromium accessibility via `--force-renderer-accessibility` (requires restarting the user's app — rejected); Streamlabs local API (no listener on the app — rejected); official docs only (loses the real-UI grounding — rejected).

### D2: Coordinate-based interaction with marker calibration

Clicks are sent via `SetCursorPos` + `mouse_event` (PowerShell, DPI-unaware virtual-screen space). The observer's coordinate estimates are imprecise (off by 20–120px depending on state), so before any interaction the capture pipeline draws labeled red markers at candidate positions (`calibrate.ps1`) and the observer confirms which marker lands on which element. Clicks target the **label** of sidebar items, not the chevron (chevron clicks did not register in exploration).

**Alternatives considered:** `SendInput` (blocked by Windows Defender on this machine — rejected); UIA InvokePattern (no elements — rejected); managed `Cursor.Position` (works for hover, but clicks still need `mouse_event`).

### D3: Evidence and tooling live outside the repository

All captures (`slobs-*.png`) and helper scripts (`capwin.ps1`, `click.ps1`, `crop.ps1`, `calibrate.ps1`, `hover.ps1`) are written to `/mnt/d/Twitch/shots/`, matching the existing Streamer.bot evidence convention. Documentation pages cite evidence by filename (backtick references) so `validate-evidence.js` can verify them, but the files themselves are never committed.

### D4: Non-destructive capture protocol

Every interaction with the live app follows the pattern proven in the Streamer.bot captures: open a dialog or menu, capture, then **cancel** — never confirm destructive actions. Remove/Delete/Reset are never clicked. The user's scene collection ("Untitled": Starting Soon, Gaming, BRB, Ted Talk, Screen) is treated as read-only. After each interaction, a fresh screenshot verifies the app state was restored.

### D5: Page structure follows the Streamer.bot UI Flow Reference pattern

Each new page documents one UI area top-to-bottom: panel content, control types, click behaviors, right-click menus, dropdowns, dialogs — with an `Evidence:` line citing the capture files and an `## Evidence gaps` section listing anything not captured. Version pinned in frontmatter (`last-reviewed` + explicit "v1.21.9" in the tagline). New pages cross-link from `overview.md` and from each other.

### D6: Sidebar scrollability requires re-calibration

The sidebar scrolls when multiple sections are expanded (verified: expanding Editor shifted items ~180px and pushed lower items off-screen). Coordinates are therefore re-calibrated before each interaction batch, and the docs note the scroll behavior as a documented feature rather than a fixed layout.

## Risks / Trade-offs

- [Observer coordinate estimates are imprecise] → Marker-based calibration (`calibrate.ps1`) before every interaction batch; user can correct live (as happened with the Get Ultra/App Store mix-up)
- [Sidebar layout shifts when sections expand/scroll] → Re-calibrate after any layout change; document scrollability as a feature
- [Windows Defender blocks some P/Invoke scripts] → Use file-based scripts (worked) instead of inline `Add-Type`; avoid `SendInput` (blocked); `mouse_event` confirmed working
- [Captures reveal the user's real scenes/sources] → Evidence stays outside the repo; pages describe UI structure, not the user's personal setup
- [Accidental destructive click during capture] → Non-destructive protocol (D4): dialogs opened and cancelled, state verified after each interaction
- [Electron UI may change between versions] → Pin v1.21.9 in every page; note version in tagline and frontmatter

## Migration Plan

No application code changes. Documentation pages are added incrementally; existing pages are deepened in place. `rebuild-index.js` and `validate-links.js` run after the new pages land. Rollback is trivial (revert markdown files).

## Open Questions

- App Store sub-items (App Store Home, App Manager) were confirmed by the user but not captured live — capture them during implementation
- The Transitions and Controls docks were not visible in the initial layout — their location and content need capture
- Whether the user wants their real scene names visible in documentation examples, or generic placeholders