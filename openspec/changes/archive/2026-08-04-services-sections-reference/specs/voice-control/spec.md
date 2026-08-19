## ADDED Requirements

### Requirement: Voice Control panels are documented
The reference SHALL document the three panels of the Voice Control tab — Settings, Commands, and Log — captured live from the Streamer.bot v1.0.4 application, covering configuration options, command creation/editing/removal, and the log view.

#### Scenario: Settings panel covered
- **WHEN** the Voice Control Settings panel is opened
- **THEN** the reference documents its configuration options

#### Scenario: Commands panel covered
- **WHEN** the Voice Control Commands panel is opened
- **THEN** the reference documents command creation, editing, and removal

#### Scenario: Log panel covered
- **WHEN** the Voice Control Log panel is opened
- **THEN** the reference documents the log view (what it shows and how it is used)

### Requirement: Voice Control right-click behavior documented
The reference SHALL record whether the Voice Control Commands panel has a right-click context menu and its items, or state explicitly that it does not. For each right-click menu item that opens a dialog, the dialog's options MUST be documented as part of the section.

#### Scenario: Command context menu recorded
- **WHEN** a voice command is right-clicked
- **THEN** the reference lists the menu items or states there is no menu

#### Scenario: Dialog reached from a right-click item
- **WHEN** a right-click menu item opens a dialog
- **THEN** the reference documents that dialog's options as part of the section

### Requirement: Voice Control left-click behavior documented
The reference SHALL record what left-click targets in the Voice Control panels do (buttons, toggles, rows, links), documenting dialogs opened by left-click and state toggles. Left-click is documented alongside the right-click menu.

#### Scenario: Left-click opens a dialog
- **WHEN** a left-click on a visible control opens a window
- **THEN** the reference documents that dialog's options and notes the left-click entry point

#### Scenario: Left-click toggles a state
- **WHEN** a left-click on a toggle or checkbox changes a state
- **THEN** the reference documents the control and its effect

### Requirement: Voice Control dialogs documented
The reference SHALL document any dialog opened from Voice Control panels (e.g., "Create Voice Command"), with title, approximate size, fields, and Ok/Cancel behavior, and SHALL note modal behavior.

#### Scenario: Create voice command dialog recorded
- **WHEN** a new voice command is created
- **THEN** the reference documents the dialog's title, size, fields, and Ok/Cancel behavior

### Requirement: Voice Control evidence is traceable
Every fact SHALL cite a dump path or docs URL; unverifiable content SHALL be marked as unverified.

#### Scenario: Sources cited
- **WHEN** a fact is documented
- **THEN** it is traceable to a named dump path or docs URL

#### Scenario: Zero-hallucination
- **WHEN** a detail cannot be verified
- **THEN** the reference states "I couldn't verify this" rather than guessing
