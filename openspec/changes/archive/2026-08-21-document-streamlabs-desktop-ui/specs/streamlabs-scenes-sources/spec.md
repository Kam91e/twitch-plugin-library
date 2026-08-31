## ADDED Requirements

### Requirement: Adding scenes
The scenes-and-sources documentation SHALL explain how to add a scene in Streamlabs Desktop 1.21.9, including the Add Scene flow and the Scenes dock.

#### Scenario: Add Scene flow documented
- **WHEN** a reader follows the scenes documentation
- **THEN** they learn how to open the Add Scene dialog, name a scene, and see it appear in the Scenes dock

#### Scenario: Scene management documented
- **WHEN** a reader reads the scenes documentation
- **THEN** they learn how to switch, duplicate, rename, and remove scenes via the Scenes dock controls

### Requirement: Adding sources
The scenes-and-sources documentation SHALL explain how to add different source types via the Add Source flow, including the source type list and per-source configuration.

#### Scenario: Add Source flow documented
- **WHEN** a reader follows the sources documentation
- **THEN** they learn how to open the Add Source dialog, pick a source type, and configure it

#### Scenario: Source types listed
- **WHEN** a reader reads the sources documentation
- **THEN** the page lists the source types available in the Add Source dialog (e.g., Display Capture, Game Capture, Window Capture, Text, Image, Media Source, Browser Source, Spout2 Capture)

### Requirement: Scene collection management
The scenes-and-sources documentation SHALL explain scene collections: the collection dropdown in the Scenes dock, creating a new collection, switching collections, and renaming or removing a collection.

#### Scenario: Collection dropdown documented
- **WHEN** a reader reads the scene collection section
- **THEN** they learn that the Scenes dock header shows the active collection name in a dropdown

#### Scenario: Collection lifecycle documented
- **WHEN** a reader reads the scene collection section
- **THEN** they learn how to create, switch, rename, and remove collections

### Requirement: Non-destructive capture of scene flows
The capture of scene and source flows SHALL be non-destructive: dialogs are opened and cancelled, and the user's live scene collection is never modified.

#### Scenario: Capture cancels dialogs
- **WHEN** a capture opens an Add Scene or Add Source dialog
- **THEN** the dialog is cancelled after capture and the app state is verified unchanged

#### Scenario: User collection untouched
- **WHEN** capture work is complete
- **THEN** the user's scene collection ("Untitled": Starting Soon, Gaming, BRB, Ted Talk, Screen) is unchanged

### Requirement: Evidence-backed scene and source claims
Every scene and source claim SHALL be backed by a captured screenshot cited on the page, or explicitly marked as unverified.

#### Scenario: Evidence cited
- **WHEN** a scene or source claim is documented
- **THEN** the page cites the evidence file(s) supporting it

#### Scenario: Unverified items marked
- **WHEN** a scene or source feature could not be captured
- **THEN** the page marks it as unverified rather than guessing its behavior