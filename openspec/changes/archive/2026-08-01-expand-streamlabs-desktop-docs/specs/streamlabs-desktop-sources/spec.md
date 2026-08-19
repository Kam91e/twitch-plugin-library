## ADDED Requirements

### Requirement: Complete source catalog
The `sources.md` documentation SHALL document every Streamlabs Desktop source type captured in the first-hand source list, organised into the five groups shown in the application's "Add Source" menu: Essentials, Capture Sources, Video and Audio, Media, and Widgets.

#### Scenario: Reader finds every source
- **WHEN** a reader opens `sources.md`
- **THEN** they SHALL find a section for each of the five app groups
- **THEN** every source from the ground-truth list SHALL be present in its group

#### Scenario: Groups mirror the app menu
- **WHEN** a reader compares `sources.md` groups to the Streamlabs Desktop "Add Source" menu
- **THEN** the group names SHALL match the application's own group labels

### Requirement: Per-source descriptions
Every source entry SHALL include the application's own description and the list of supported formats, devices, or platforms as captured in the ground-truth list.

#### Scenario: Source entry is complete
- **WHEN** a reader views a source entry (e.g. Media File)
- **THEN** it SHALL include the app description and the supported formats (e.g. mp4, mov, mkv, mp3, wav, gif, webm)

#### Scenario: Typo correction
- **WHEN** the application text contains typos (e.g. "waw", "Sny device", "specifix")
- **THEN** the documentation SHALL use corrected English spelling
- **THEN** the correction SHALL NOT change the factual content of the description

### Requirement: Duplicate source handling
Sources that appear in multiple menu groups (Game Capture, Video Capture, Media File) SHALL be documented once, with a note indicating the groups in which the application lists them.

#### Scenario: Duplicate is not repeated
- **WHEN** a source appears in both Essentials and another group
- **THEN** it SHALL be described in detail only once
- **THEN** the entry SHALL note all menu groups containing it

### Requirement: Widgets-as-sources without duplication
Widget sources listed in the Widgets group SHALL be documented as source types in `sources.md` and SHALL link to the existing `overlays-and-widgets.md` for configuration details, without duplicating widget configuration content.

#### Scenario: Widget source links to configuration
- **WHEN** a reader sees a widget source (e.g. The Jar) in `sources.md`
- **THEN** the entry SHALL describe what the widget displays on stream
- **THEN** the entry SHALL link to `overlays-and-widgets.md` for configuration

### Requirement: Automation bridge
`sources.md` SHALL link to the Streamer.bot reference for automating Streamlabs Desktop sources, scenes, and recording state.

#### Scenario: Reader reaches automation reference
- **WHEN** a reader is on `sources.md`
- **THEN** they SHALL find links to `tools/automation/streamer-bot/sub-actions/streamlabs-desktop/` and `tools/automation/streamer-bot/triggers/streamlabs-desktop.md`
- **THEN** the links SHALL point to existing files

### Requirement: Source listing in INDEX.md
The INDEX.md Tools table SHALL include Streamlabs Desktop linking to `tools/streaming-software/streamlabs-desktop/overview.md`.

#### Scenario: Tool is listed
- **WHEN** a reader opens INDEX.md
- **THEN** the Tools table SHALL contain a Streamlabs Desktop entry with a working link
