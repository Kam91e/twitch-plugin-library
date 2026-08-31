## ADDED Requirements

### Requirement: Settings window documentation
The settings documentation SHALL explain the Settings window in Streamlabs Desktop 1.21.9: how to open it (gear icon in the sidebar) and its main sections.

#### Scenario: Opening Settings documented
- **WHEN** a reader follows the settings documentation
- **THEN** they learn that clicking the gear icon (Settings) in the sidebar opens the Settings window

#### Scenario: Settings sections documented
- **WHEN** a reader reads the settings documentation
- **THEN** the page lists the Settings sections visible in the captured window (e.g., General, Stream, Output, Audio, Video, Hotkeys, Scene Collections, Appearance, Notifications, Advanced)

### Requirement: Settings section content
The settings documentation SHALL describe the purpose of each documented Settings section and the key options within it.

#### Scenario: Section purpose explained
- **WHEN** a reader reads a Settings section description
- **THEN** they learn what that section controls

#### Scenario: Key options noted
- **WHEN** a reader reads a Settings section description
- **THEN** the page notes the most relevant options in that section

### Requirement: Evidence-backed settings claims
Every settings claim SHALL be backed by a captured screenshot cited on the page, or explicitly marked as unverified.

#### Scenario: Evidence cited
- **WHEN** a settings claim is documented
- **THEN** the page cites the evidence file(s) supporting it

#### Scenario: Unverified items marked
- **WHEN** a settings feature could not be captured
- **THEN** the page marks it as unverified rather than guessing its behavior