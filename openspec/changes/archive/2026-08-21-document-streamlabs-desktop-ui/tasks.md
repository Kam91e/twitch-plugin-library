## 1. Capture Infrastructure

- [x] 1.1 Verify capture helpers in `/mnt/d/Twitch/shots/` (capwin.ps1, click.ps1, crop.ps1, calibrate.ps1, hover.ps1) still work against the running Streamlabs Desktop 1.21.9
- [x] 1.2 Confirm the non-destructive protocol: open dialog → capture → cancel → verify app state restored via fresh screenshot
- [x] 1.3 Re-calibrate sidebar coordinates with marker calibration (sidebar may have scrolled since last session)

## 2. Sidebar Reference

- [x] 2.1 Capture the sidebar in its default (collapsed) state
- [x] 2.2 Capture each expandable section expanded: Editor (Editor, Layout Editor, Studio Mode), Overlays (Scene, Alerts and Widgets), App Store (App Store Home, App Manager), Dashboard (Dashboard Home, Cloudbot, Alert Box Settings, Widgets, Tip Settings, Multistream)
- [x] 2.3 Capture navigation items: Highlighter, Recordings, Get Ultra, Get Help, Settings, account menu
- [x] 2.4 Capture the sidebar scrolled state to document scrollability
- [x] 2.5 Write `sidebar-reference.md` documenting all sections, sub-items, expandable vs. navigation behavior, and scroll behavior, with evidence citations

## 3. Scenes and Sources

- [x] 3.1 Capture the Scenes dock with the active collection dropdown ("Untitled")
- [x] 3.2 Capture the Add Scene dialog (open → capture → cancel)
- [x] 3.3 Capture the Add Source dialog and the source type list (open → capture → cancel)
- [x] 3.4 Capture the Scene Collections management menu (create/switch/rename/remove options)
- [x] 3.5 Capture per-source configuration for at least one source type (open → capture → cancel)
- [x] 3.6 Verify the user's scene collection is unchanged after all captures
- [x] 3.7 Deepen `scenes-and-transitions.md` and `sources.md` with the captured Add Scene / Add Source / scene collection flows and evidence citations

## 4. Mixer

- [x] 4.1 Capture the Mixer dock showing per-source rows (volume slider, mute, meter, Desktop Audio)
- [x] 4.2 Capture the advanced audio properties dialog for a source (open → capture → cancel)
- [x] 4.3 Test and document whether the mixer scrolls with many sources
- [x] 4.4 Write `mixer.md` explaining the mixer panel, volume/mute interaction, advanced properties, and scroll behavior, with evidence citations

## 5. Settings

- [x] 5.1 Open the Settings window via the sidebar gear icon and capture the full window
- [x] 5.2 Capture each Settings section (General, Stream, Output, Audio, Video, Hotkeys, Scene Collections, Appearance, Notifications, Advanced) as visible
- [x] 5.3 Write `settings.md` documenting how to open Settings and each captured section's purpose and key options, with evidence citations

## 6. Transitions and Automation

- [x] 6.1 Locate and capture the Transitions dock (show it if hidden)
- [x] 6.2 Capture the transition types list and the active transition selector
- [x] 6.3 Capture Studio Mode and its preview/program behavior
- [x] 6.4 Capture the Hotkeys section in Settings relevant to scene switching and transitions
- [x] 6.5 Capture Instant Replay if present in the UI
- [x] 6.6 Deepen `scenes-and-transitions.md` with the captured transitions, Studio Mode, and hotkey content, with evidence citations

## 7. Integration and Validation

- [x] 7.1 Cross-link new pages from `overview.md` and between new pages
- [x] 7.2 Run `node .opencode/scripts/rebuild-index.js` to regenerate INDEX.md
- [x] 7.3 Run `node .opencode/scripts/validate-links.js` and fix any broken links
- [x] 7.4 Run `node .opencode/scripts/validate-evidence.js` to confirm all cited evidence files exist in `/mnt/d/Twitch/shots/`
- [x] 7.5 Final review: every page pins version 1.21.9, marks unverified items, and contains no hallucinated details