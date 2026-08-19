## ADDED Requirements

### Requirement: MIDI panels are documented
The reference SHALL document the two panels of the MIDI tab — MIDI In and MIDI Out — captured live from the Streamer.bot v1.0.4 application, covering device association lists and input event registration.

#### Scenario: MIDI In panel covered
- **WHEN** the MIDI In panel is opened
- **THEN** the reference documents the device associations and input event registration

#### Scenario: MIDI Out panel covered
- **WHEN** the MIDI Out panel is opened
- **THEN** the reference documents the output device associations

### Requirement: MIDI right-click behavior documented
The reference SHALL record whether the MIDI panels have right-click context menus and their items, or state explicitly that they do not. For each right-click menu item that opens a dialog, the dialog's options MUST be documented as part of the section.

#### Scenario: MIDI context menu recorded
- **WHEN** a MIDI device association is right-clicked
- **THEN** the reference lists the menu items or states there is no menu

#### Scenario: Dialog reached from a right-click item
- **WHEN** a right-click menu item opens a dialog
- **THEN** the reference documents that dialog's options as part of the section

### Requirement: MIDI left-click behavior documented
The reference SHALL record what left-click targets in the MIDI panels do (buttons, toggles, rows, links), documenting dialogs opened by left-click and state toggles. Left-click is documented alongside the right-click menu.

#### Scenario: Left-click opens a dialog
- **WHEN** a left-click on a visible control opens a window
- **THEN** the reference documents that dialog's options and notes the left-click entry point

#### Scenario: Left-click toggles a state
- **WHEN** a left-click on a toggle or checkbox changes a state
- **THEN** the reference documents the control and its effect

### Requirement: MIDI dialogs documented
The reference SHALL document any dialog opened from MIDI panels (e.g., "Add MIDI Event"), with title, approximate size, fields, and Ok/Cancel behavior, and SHALL note modal behavior.

#### Scenario: Add MIDI event dialog recorded
- **WHEN** a new MIDI input event is registered
- **THEN** the reference documents the dialog's title, size, fields, and Ok/Cancel behavior

### Requirement: MIDI evidence is traceable
Every fact SHALL cite a dump path or docs URL; unverifiable content SHALL be marked as unverified.

#### Scenario: Sources cited
- **WHEN** a fact is documented
- **THEN** it is traceable to a named dump path or docs URL

#### Scenario: Zero-hallucination
- **WHEN** a detail cannot be verified
- **THEN** the reference states "I couldn't verify this" rather than guessing
