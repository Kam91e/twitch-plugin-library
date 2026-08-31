## ADDED Requirements

### Requirement: Screenshot and observer evidence method
The evidence capture capability SHALL use screenshots of the live app verified by the observer subagent as the primary evidence method for Streamlabs Desktop documentation.

#### Scenario: Capture produced
- **WHEN** a UI area needs documentation
- **THEN** a screenshot of that area is captured and saved to `/mnt/d/Twitch/shots/`

#### Scenario: Observer verification
- **WHEN** a screenshot is captured
- **THEN** the observer subagent analyzes it and returns the extracted UI elements, labels, and coordinates

### Requirement: Evidence stored outside the repository
All evidence files and capture helper scripts SHALL be stored in `/mnt/d/Twitch/shots/`, outside the repository, so they are never committed to GitHub.

#### Scenario: Evidence path enforced
- **WHEN** a capture or helper script is created
- **THEN** it is written under `/mnt/d/Twitch/shots/` and not under the repository tree

#### Scenario: No evidence in repo
- **WHEN** the repository is inspected
- **THEN** no screenshot evidence files are present in the repository tree

### Requirement: Non-destructive interaction
All interaction with the live Streamlabs Desktop app during capture SHALL be non-destructive: dialogs are opened and cancelled, destructive actions are never clicked, and the user's scene collection is never modified.

#### Scenario: Dialog cancelled after capture
- **WHEN** a capture opens a dialog or menu
- **THEN** the dialog is cancelled and a verification screenshot confirms the app state was restored

#### Scenario: Destructive actions avoided
- **WHEN** capture work is performed
- **THEN** Remove, Delete, and Reset actions are never clicked

### Requirement: Coordinate calibration before interaction
Before any coordinate-based click, the capture pipeline SHALL calibrate positions using drawn markers verified by the observer, because observer coordinate estimates are imprecise and the sidebar layout shifts when sections expand.

#### Scenario: Calibration performed
- **WHEN** a click interaction is needed
- **THEN** marker calibration is performed and the observer confirms which marker lands on which element before the click

#### Scenario: Re-calibration after layout change
- **WHEN** the sidebar layout changes (a section expands or scrolls)
- **THEN** coordinates are re-calibrated before further interaction

### Requirement: Version pinning
Every documentation page produced by this capability SHALL pin the documented Streamlabs Desktop version (1.21.9) in its tagline and frontmatter.

#### Scenario: Version stated
- **WHEN** a reader opens a Streamlabs Desktop page
- **THEN** the page states the documented version 1.21.9

### Requirement: Zero-hallucination markers
Any UI element or behavior that could not be captured and verified SHALL be explicitly marked as unverified on the page rather than guessed.

#### Scenario: Unverified claim marked
- **WHEN** a feature could not be captured
- **THEN** the page marks it as unverified and does not invent details