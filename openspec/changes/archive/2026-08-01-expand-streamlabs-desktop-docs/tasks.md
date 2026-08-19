# Tasks — expand-streamlabs-desktop-docs

> Ground truth for sources: the user-captured file `Streamlabs Sources` at repo root (5 app menu groups with per-source descriptions). Frontmatter per `tools/_TEMPLATE.md` (category `streaming-software`, type `Desktop application`). All content in English.

## 1. Preparation

- [x] 1.1 Back up `tools/streaming-software/streamlabs-desktop/overview.md` and `overlays-and-widgets.md` to a temp location (no git history in repo)
- [x] 1.2 Confirm the ground-truth file `Streamlabs Sources` is current and complete (5 groups, all entries with descriptions)

## 2. New file — sources.md (ground-truth based)

- [x] 2.1 Write `tools/streaming-software/streamlabs-desktop/sources.md` — Essentials group (Game Capture, Video Capture, Media File, Alert Box, Chat Box, Game Pulse, Stream Label) with app descriptions, corrected spelling, and supported formats/devices
- [x] 2.2 Write Capture Sources group (Browser Source, Display Capture, Window Capture, Game Capture, OpenVR Capture, Screen Capture, Spout2 Capture, Reactive Source) with app descriptions and supports lists
- [x] 2.3 Write Video and Audio group (Video Capture, Audio Input Capture, Audio Output Capture, Collab Cam, Application Audio)
- [x] 2.4 Write Media group (Image, Color Block, Media File, Image Slide Show, Text (GDI+), Scene, Instant Replay)
- [x] 2.5 Write Widgets group (Tip Goal, Follower Goal, Bit Goal, Tip Ticker, Event List, The Jar, Viewer Count, Stream Boss, Credits, Spin Wheel, Sponsor Banner, Media Share, Subscription Goal, Streamlabs Charity Donation Goal, Poll, Emote Wall, Chat Highlight, Custom Widget) — each as a source type linking to `overlays-and-widgets.md`
- [x] 2.6 Handle duplicates: Game Capture, Video Capture, Media File documented once each with a note listing all app menu groups containing them
- [x] 2.7 Add "Automation" section linking to `tools/automation/streamer-bot/sub-actions/streamlabs-desktop/` and `tools/automation/streamer-bot/triggers/streamlabs-desktop.md`
- [x] 2.8 Verify `sources.md` covers every entry from the ground-truth file (count check) and frontmatter is per template

## 3. New file — scenes-and-transitions.md

- [x] 3.1 Write `scenes-and-transitions.md`: creating scenes, source ordering/layering, scene collections, transitions, and note on OBS-inherited scene concepts
- [x] 3.2 Verify frontmatter and internal links

## 4. New file — audio-and-hotkeys.md

- [x] 4.1 Write `audio-and-hotkeys.md`: audio mixer, audio sources (Input/Output/Application Audio), filters, monitoring
- [x] 4.2 Write hotkey section incl. Instant Replay workflow (save replay, show/hide source, scene switch hotkeys)
- [x] 4.3 Verify frontmatter and internal links

## 5. New file — app-store-and-plugins.md

- [x] 5.1 Write `app-store-and-plugins.md`: Desktop App Store (Ultra feature), app categories (soundboards, face tracking, overlays, analytics, games), comparison with OBS plugin ecosystem
- [x] 5.2 Verify frontmatter and internal links

## 6. New file — multistreaming-and-collab.md

- [x] 6.1 Write `multistreaming-and-collab.md`: Ultra multi-streaming (platform list, use cases), Dual Output (vertical layout for TikTok/Shorts), Collab Cam (guest invite via link, limits, use cases)
- [x] 6.2 Verify frontmatter and internal links

## 7. Updates to existing files

- [x] 7.1 Update `overview.md`: add "Console & Mobile" section (Streamlabs Console for PS/Xbox, Streamlabs Mobile, noting they are separate products)
- [x] 7.2 Update `overlays-and-widgets.md`: replace obsolete widget names (Tip Tracker→Tip Goal, Donation Bar→Bit Goal, Sub Goal→Subscription Goal) and add missing widgets (The Jar, Spin Wheel, Sponsor Banner, Media Share, Poll, Emote Wall, Chat Highlight, Custom Widget, Streamlabs Charity Donation Goal)

## 8. INDEX.md

- [x] 8.1 Add Streamlabs Desktop row to the INDEX.md Tools table linking to `tools/streaming-software/streamlabs-desktop/overview.md`

## 9. Verification

- [x] 9.1 Check all internal links in the 5 new + 2 updated files resolve
- [x] 9.2 Check all files have template frontmatter (title, category, type, platforms, price, url, last-reviewed)
- [x] 9.3 Confirm no widget configuration content is duplicated between `sources.md` and `overlays-and-widgets.md`
- [x] 9.4 Confirm `sources.md` entry count matches the ground-truth list
- [x] 9.5 Remove the working `Streamlabs Sources` file from repo root (or move to /tmp per user preference)
- [x] 9.6 Verify INDEX.md Tools table renders correctly with the new row
