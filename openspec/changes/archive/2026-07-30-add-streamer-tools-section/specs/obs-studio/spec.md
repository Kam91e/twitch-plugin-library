## ADDED Requirements

### Requirement: Document OBS Studio overview (overview.md)
The `overview.md` SHALL explain that OBS Studio is a free, open-source software for video recording and live streaming, serving as the foundation of any streaming production.

#### Scenario: Reader understands OBS's role
- **WHEN** a reader opens `overview.md`
- **THEN** they SHALL understand it is the core production software and see its main capabilities

### Requirement: Document source types (sources.md)
The `sources.md` SHALL document all source types: game capture, window capture, display capture, Browser Source, media source, image, text (GDI+/FreeType), video capture device (webcam), audio input/output capture, NDI source, and color source.

#### Scenario: Reader knows available sources
- **WHEN** a reader opens the sources guide
- **THEN** they SHALL see a list of available source types, what each does, and when to use it

### Requirement: Document Browser Source in detail (sources.md)
The `sources.md` SHALL explain Browser Source configuration in depth: URL input, width/height, FPS, CSS injection, local file access, and interaction passthrough.

#### Scenario: Reader can embed web overlays
- **WHEN** a reader needs to add a web overlay (e.g., Challonge bracket, poll.ma.pe)
- **THEN** they SHALL understand Browser Source configuration options

### Requirement: Document scenes, transitions, and Studio Mode (scenes-and-transitions.md)
The `scenes-and-transitions.md` SHALL document scene management, scene collections, Studio Mode (preview/live workflow), transition types (cut, fade, stinger, swipe, slide), and Multiview.

#### Scenario: Reader can manage scenes
- **WHEN** a reader opens the scenes guide
- **THEN** they SHALL understand how to create scenes, switch between them, use Studio Mode, and configure transitions

### Requirement: Document audio and hotkeys (audio-and-hotkeys.md)
The `audio-and-hotkeys.md` SHALL document the audio mixer, per-source audio filters (noise gate, noise suppression, gain, compressor, limiter, VST plugin support), hotkey configuration for nearly all actions, and audio monitoring.

#### Scenario: Reader can configure audio
- **WHEN** a reader opens the audio guide
- **THEN** they SHALL know how to use the audio mixer, apply filters, and configure hotkeys

### Requirement: Document plugins (plugins.md)
The `plugins.md` SHALL document the community plugin ecosystem: how to install plugins (.dll/.so), where to find them (obsproject.com forum), and essential plugin categories (NDI, Stream Deck, source plugins, transition plugins, scripting).

#### Scenario: Reader can extend OBS
- **WHEN** a reader opens the plugins guide
- **THEN** they SHALL know where to find plugins and what categories are most useful

### Requirement: Include alternatives (overview.md)
The `overview.md` SHALL list streaming software alternatives: Streamlabs Desktop, vMix, Wirecast, XSplit, and when to choose each.

#### Scenario: Reader can compare streaming software
- **WHEN** a reader finishes the overview
- **THEN** they SHALL know what alternatives exist
