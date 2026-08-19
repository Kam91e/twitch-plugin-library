# Expand Streamlabs Desktop Docs — Proposal

## Why

`tools/streaming-software/streamlabs-desktop/` currently has 4 files (overview, alerts-and-cloudbot, monetization, overlays-and-widgets) while the sibling OBS Studio has 5 files with dedicated pages for sources, scenes, and audio. Streamlabs Desktop is an OBS fork with genuinely different sources (Screen Capture, Auto Game Capture, Game Pulse, Reactive Source, Spout2, OpenVR, widgets-as-sources) and features (Ultra multi-streaming, Collab Cam, Desktop App Store) that are undocumented or incorrectly documented. A verified, first-hand source list (captured from the user's own Streamlabs Desktop installation) is available as ground truth, so this can be documented accurately without hallucination.

## What Changes

- **New file `sources.md`** — full source catalog based on the user's first-hand list (5 groups from the app menu: Essentials, Capture Sources, Video and Audio, Media, Widgets), with per-source description and supported formats/devices, correcting app typos, and flagging menu duplicates (Game Capture, Video Capture, Media File appear in multiple groups).
- **New file `scenes-and-transitions.md`** — scene management, source layers/order, transitions, and Studio-Mode-equivalent workflow.
- **New file `audio-and-hotkeys.md`** — audio mixer, filters, Application Audio Capture, and hotkey configuration (incl. Instant Replay hotkeys).
- **New file `app-store-and-plugins.md`** — Streamlabs Desktop App Store, app ecosystem, and the difference from OBS's plugin system.
- **New file `multistreaming-and-collab.md`** — Ultra multi-streaming, Dual Output, Collab Cam.
- **Update `overview.md`** — add a "Console & Mobile" section (Streamlabs Console for PS/Xbox, Streamlabs Mobile).
- **Update `overlays-and-widgets.md`** — correct widget names per first-hand list (Tip Tracker→Tip Goal, Donation Bar→Bit Goal, Sub Goal→Subscription Goal) and add missing widgets (The Jar, Spin Wheel, Sponsor Banner, Media Share, Poll, Emote Wall, Chat Highlight, Custom Widget, Streamlabs Charity Donation Goal).
- **Add automation bridge** — cross-links from `sources.md` to the Streamer.bot sub-actions/triggers reference (`tools/automation/streamer-bot/sub-actions/streamlabs-desktop/` and `triggers/streamlabs-desktop.md`).
- **Fix INDEX.md** — Streamlabs Desktop is absent from the Tools table despite having docs; add it (along with other missing documented tools is out of scope — only Streamlabs Desktop here).

## Capabilities

### New Capabilities
- `streamlabs-desktop-sources`: documentation of every Streamlabs Desktop source type (5 app groups), with descriptions, supported formats/devices, duplicates, and automation links
- `streamlabs-desktop-scenes-audio`: documentation of scenes/transitions, audio routing, and hotkeys
- `streamlabs-desktop-features`: documentation of Ultra features (multi-stream, Dual Output, Collab Cam), the App Store, and Console/Mobile

### Modified Capabilities
- `streamlabs-desktop`: existing capability from the archived `add-six-streaming-tools` change — requirements for overlays/widgets naming and overview scope change (Console & Mobile section added)

## Impact

- `tools/streaming-software/streamlabs-desktop/`: 5 new files, 2 updated files
- `INDEX.md`: add Streamlabs Desktop to the Tools table
- Cross-links from `sources.md` into `tools/automation/streamer-bot/sub-actions/streamlabs-desktop/*` and `tools/automation/streamer-bot/triggers/streamlabs-desktop.md` (read-only references, no changes to Streamer.bot docs)
- No runtime, no plugins/, docs-only change; ground truth for sources is the user's file `Streamlabs Sources` at repo root (to be archived/removed after implementation)
