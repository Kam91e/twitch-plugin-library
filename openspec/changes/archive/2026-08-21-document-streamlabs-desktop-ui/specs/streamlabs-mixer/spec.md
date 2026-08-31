## ADDED Requirements

### Requirement: Mixer panel documentation
The mixer documentation SHALL explain the audio mixer panel in Streamlabs Desktop 1.21.9: per-source volume sliders, mute buttons, audio meters, and the Desktop Audio source.

#### Scenario: Mixer layout documented
- **WHEN** a reader reads the mixer documentation
- **THEN** they learn the mixer shows one row per audio source with a volume slider, mute button, and level meter

#### Scenario: Desktop Audio explained
- **WHEN** a reader reads the mixer documentation
- **THEN** the page explains the Desktop Audio source and how its volume is controlled

### Requirement: Mixer interaction
The mixer documentation SHALL explain how to adjust volume, mute and unmute sources, and access per-source audio properties.

#### Scenario: Volume adjustment documented
- **WHEN** a reader follows the mixer documentation
- **THEN** they learn how to drag a volume slider to adjust a source's level

#### Scenario: Mute documented
- **WHEN** a reader follows the mixer documentation
- **THEN** they learn how to mute and unmute a source

#### Scenario: Advanced audio properties documented
- **WHEN** a reader reads the mixer documentation
- **THEN** the page explains how to open per-source audio properties (e.g., via the gear icon or right-click)

### Requirement: Mixer scrollability
The mixer documentation SHALL note whether the mixer panel scrolls when many audio sources are present.

#### Scenario: Scroll behavior noted
- **WHEN** a reader reads the mixer documentation
- **THEN** the page states whether the mixer is scrollable and how scrolling works

### Requirement: Evidence-backed mixer claims
Every mixer claim SHALL be backed by a captured screenshot cited on the page, or explicitly marked as unverified.

#### Scenario: Evidence cited
- **WHEN** a mixer claim is documented
- **THEN** the page cites the evidence file(s) supporting it

#### Scenario: Unverified items marked
- **WHEN** a mixer feature could not be captured
- **THEN** the page marks it as unverified rather than guessing its behavior