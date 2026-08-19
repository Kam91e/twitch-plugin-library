## ADDED Requirements

### Requirement: Servers/Clients tab sections are documented
The reference SHALL document all five sections of the Servers/Clients tab: WebSocket Server, HTTP Server, UDP Server, Custom WebSocket Servers, and Custom WebSocket Clients. Each section's panel content SHALL be captured live from the Streamer.bot v1.0.4 application.

#### Scenario: All five sections covered
- **WHEN** the Servers/Clients tab is opened in the app
- **THEN** the reference covers WebSocket Server, HTTP Server, UDP Server, Custom WebSocket Servers, and Custom WebSocket Clients

#### Scenario: Panel fields captured
- **WHEN** each section is opened
- **THEN** the reference documents its fields (enable state, port, token, status, list rows)

### Requirement: Servers/Clients right-click behavior documented
The reference SHALL record, for each Servers/Clients section, whether a right-click context menu exists and its items. Absence of a menu MUST be stated explicitly. For each right-click menu item that opens a dialog, the dialog's options MUST be documented as part of the section.

#### Scenario: Context menu recorded
- **WHEN** a section has a right-click menu
- **THEN** the reference lists its items (e.g., Add, Edit, Delete, Refresh, Collapse All)

#### Scenario: No menu stated
- **WHEN** a section has no right-click functionality
- **THEN** the reference states this explicitly

#### Scenario: Dialog reached from a right-click item
- **WHEN** a right-click menu item opens a dialog
- **THEN** the reference documents that dialog's options as part of the section

### Requirement: Servers/Clients left-click behavior documented
The reference SHALL record what left-click targets in each Servers/Clients panel do (buttons, toggles, rows, column headers, links), documenting dialogs opened by left-click and state toggles. Left-click is documented alongside the right-click menu.

#### Scenario: Left-click opens a dialog
- **WHEN** a left-click on a visible control opens a window
- **THEN** the reference documents that dialog's options and notes the left-click entry point

#### Scenario: Left-click toggles a state
- **WHEN** a left-click on a toggle or checkbox changes a state
- **THEN** the reference documents the control and its effect

### Requirement: Servers/Clients dialogs documented
The reference SHALL document any dialog opened from Servers/Clients sections (e.g., adding a custom WebSocket server or client), with title, approximate size, fields, and Ok/Cancel behavior, and SHALL note modal behavior.

#### Scenario: Custom server/client dialogs recorded
- **WHEN** a dialog opens for creating a custom WebSocket server or client
- **THEN** the reference documents its title, size, fields, and Ok/Cancel behavior

### Requirement: Servers/Clients evidence is traceable
Every fact SHALL cite a dump path or docs URL; unverifiable content SHALL be marked as unverified.

#### Scenario: Sources cited
- **WHEN** a fact is documented
- **THEN** it is traceable to a named dump path or docs URL

#### Scenario: Zero-hallucination
- **WHEN** a detail cannot be verified
- **THEN** the reference states "I couldn't verify this" rather than guessing
