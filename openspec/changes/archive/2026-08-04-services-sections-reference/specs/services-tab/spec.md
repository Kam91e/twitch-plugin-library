## ADDED Requirements

### Requirement: Services tab sections are enumerated
The reference SHALL list every section of the Services tab visible in the Streamer.bot v1.0.4 application, including sections below the scroll fold of the initial capture. The known sections (File/Folder Watcher, Timers, File Tail, Process Watcher, Credits, Quotes) MUST be present; any additional sections discovered while scrolling MUST be included.

#### Scenario: Full section list recorded
- **WHEN** the Services tab is scrolled to the bottom in the live app
- **THEN** the reference lists every section found, with no fewer than the six known ones

#### Scenario: Below-fold sections documented
- **WHEN** scrolling reveals sections not present in the original `Services-uia.txt` capture
- **THEN** those sections are documented with the same per-section structure as the known ones

### Requirement: Per-section panel content is documented
For each Services tab section, the reference SHALL document the panel content revealed after clicking the section: grid/list columns, toggles, buttons, and status fields, verified against the live application.

#### Scenario: Panel structure captured
- **WHEN** a section is opened in the app
- **THEN** the reference records its layout type (grid/list, toggles, buttons, text/status) and the concrete fields shown

#### Scenario: Click behavior verified
- **WHEN** the section's arrow or card is activated
- **THEN** the reference notes whether it navigates to a panel, expands in place, or does nothing (decorative)

### Requirement: Right-click functionality documented per section
The reference SHALL record, for every Services tab section, whether a right-click context menu exists and, if so, its menu items. Absence of a right-click menu MUST be documented explicitly as a finding, not silently omitted. For each right-click menu item that opens a dialog, the dialog's options MUST be documented as part of the section.

#### Scenario: Context menu present
- **WHEN** a section exposes a right-click menu
- **THEN** the reference lists its items (e.g., Add, Refresh, Collapse All, Delete)

#### Scenario: No context menu
- **WHEN** a section has no right-click functionality
- **THEN** the reference states explicitly that no right-click menu exists for that section

#### Scenario: Dialog reached from a right-click item
- **WHEN** a right-click menu item opens a dialog
- **THEN** the reference documents that dialog's options (title, size, fields, Ok/Cancel) as part of the section

### Requirement: Left-click behavior documented per section
The reference SHALL record, for every Services tab section, what left-click targets in the panel do: buttons, toggles, rows, column headers, and links. A left-click that opens a dialog, toggles a state, selects a row, or sorts a column MUST be documented; a target with no effect MAY be omitted. Left-click is a first-class interaction to document, alongside the right-click menu.

#### Scenario: Left-click opens a dialog
- **WHEN** a left-click on a visible control (button, row double-click, link) opens a window
- **THEN** the reference documents that dialog's options and notes the left-click entry point

#### Scenario: Left-click toggles a state
- **WHEN** a left-click on a toggle or checkbox changes a state
- **THEN** the reference documents the control and its effect

### Requirement: Dialogs opened from sections are documented
The reference SHALL document every dialog window that opens when choosing an option within a Services tab section, including its title, approximate size, fields, and Ok/Cancel behavior, and SHALL note when the dialog is modal (blocks the main UI).

#### Scenario: Create/edit dialogs recorded
- **WHEN** an action in a section opens a new window (e.g., "Create File Watcher", "Add Timer", "Add Quote")
- **THEN** the reference documents the dialog title, size, fields, and Ok/Cancel behavior

#### Scenario: Modal behavior noted
- **WHEN** the opened window blocks the main UI until Ok/Cancel
- **THEN** the reference states the modal behavior explicitly

### Requirement: Evidence is traceable
Every fact in the Services tab reference SHALL cite a source: a UIA dump or screenshot path under `/mnt/d/Twitch/shots/`, or an official docs URL. No unverifiable or fabricated content SHALL be included.

#### Scenario: Sources cited
- **WHEN** a fact is documented
- **THEN** it is traceable to a named dump path or docs URL in the file's frontmatter or inline

#### Scenario: Zero-hallucination
- **WHEN** a detail cannot be verified from the app or docs
- **THEN** the reference states "I couldn't verify this" rather than guessing
