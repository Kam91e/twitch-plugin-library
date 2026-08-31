# streamlabs-transitions-automation

## ADDED Requirements

### Requirement: Transitions dock documentation
The transitions documentation SHALL explain the Transitions dock in Streamlabs Desktop 1.21.9: how to show it, the transition types available, and how to set the active transition.

#### Scenario: Transitions dock located
- **WHEN** a reader follows the transitions documentation
- **THEN** they learn where the Transitions dock lives and how to show it if hidden

#### Scenario: Transition types documented
- **WHEN** a reader reads the transitions documentation
- **THEN** the page lists the available transition types (e.g., Cut, Fade, Stinger, Slide) as captured

#### Scenario: Active transition set
- **WHEN** a reader follows the transitions documentation
- **THEN** they learn how to select the active transition and set its duration

### Requirement: Automation features
The transitions documentation SHALL cover automation features tied to transitions and scene switching: Studio Mode (preview/program), hotkeys for scene and transition control, and Instant Replay if present.

#### Scenario: Studio Mode documented
- **WHEN** a reader reads the transitions documentation
- **THEN** the page explains Studio Mode and how it relates to scene switching

#### Scenario: Hotkeys documented
- **WHEN** a reader reads the transitions documentation
- **THEN** the page explains how to bind hotkeys for scene switching and transitions (via Settings → Hotkeys)

#### Scenario: Instant Replay documented
- **WHEN** Instant Replay is available in the captured UI
- **THEN** the page explains how to trigger and configure it

### Requirement: Evidence-backed transitions claims
Every transitions claim SHALL be backed by a captured screenshot cited on the page, or explicitly marked as unverified.

#### Scenario: Evidence cited
- **WHEN** a transitions claim is documented
- **THEN** the page cites the evidence file(s) supporting it

#### Scenario: Unverified items marked
- **WHEN** a transitions feature could not be captured
- **THEN** the page marks it as unverified rather than guessing its behavior