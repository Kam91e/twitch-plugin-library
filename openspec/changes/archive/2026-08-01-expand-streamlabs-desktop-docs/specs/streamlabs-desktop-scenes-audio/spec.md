## ADDED Requirements

### Requirement: Scenes and transitions documentation
The `scenes-and-transitions.md` documentation SHALL cover scene management in Streamlabs Desktop: creating scenes, adding/ordering sources within scenes, scene collections, and transitions.

#### Scenario: Reader manages scenes
- **WHEN** a reader opens `scenes-and-transitions.md`
- **THEN** they SHALL learn how to create and organise scenes
- **THEN** they SHALL learn how source order/layering works within a scene
- **THEN** they SHALL learn how to configure and apply transitions

#### Scenario: Relation to OBS
- **WHEN** a reader compares with OBS Studio's scene system
- **THEN** the documentation SHALL note that Streamlabs Desktop inherits OBS scene concepts while exposing them through a guided interface

### Requirement: Audio documentation
The `audio-and-hotkeys.md` documentation SHALL cover the audio mixer, audio sources (Input, Output, Application Audio), filters, and per-source monitoring.

#### Scenario: Reader configures audio
- **WHEN** a reader follows the audio documentation
- **THEN** they SHALL learn how to add audio sources
- **THEN** they SHALL learn how Application Audio Capture isolates a single application's sound (e.g. muting Discord on stream)
- **THEN** they SHALL learn about the audio mixer and basic filters

### Requirement: Hotkey documentation
The audio-and-hotkeys documentation SHALL cover hotkey configuration, including Instant Replay hotkeys (save replay, show/hide source, scene switch).

#### Scenario: Reader sets up hotkeys
- **WHEN** a reader follows the hotkey section
- **THEN** they SHALL learn how to assign hotkeys for common actions
- **THEN** they SHALL learn the recommended Instant Replay hotkey workflow (save, show, hide)
