# streamlabs-layout-editor

## Purpose
Specify the documentation requirements for the Streamlabs Desktop Layout Editor reference page (v1.21.9): how to open the editor, how layouts differ from scenes, the layouts list inventory, create and switch flows, the Add Element palette stub, canvas basics, evidence-backed claims, and version pinning.

## Requirements

### Requirement: Opening the Layout Editor
The layout-editor documentation SHALL explain how to open the Layout Editor in Streamlabs Desktop 1.21.9 via the sidebar.

#### Scenario: Layout Editor opened via sidebar
- **WHEN** a reader follows the documentation to open Layout Editor
- **THEN** they learn to click the Editor expander and then click Layout Editor, which becomes highlighted in teal when active

### Requirement: Layouts versus scenes distinction
The layout-editor documentation SHALL explain that layouts are app-only containers seen only inside Layout Editor, distinct from scenes which are shown on stream, and clarify when to use each.

#### Scenario: Distinction explained
- **WHEN** a reader reads the distinction section
- **THEN** they learn that scenes are stream-visible and grouped in Scene Collections (e.g., Untitled), while layouts (e.g., Test Elements, Test Elements 2) live under Editor → Layout Editor and are not directly on stream

### Requirement: Layouts list inventory
The layout-editor documentation SHALL document the layouts list as captured in v1.21.9, including the two live layouts Test Elements and Test Elements 2.

#### Scenario: Layouts list documented
- **WHEN** a reader opens the Layout Editor reference
- **THEN** they see the layouts list with its header control (e.g., Layouts ⊕) and the two entries Test Elements and Test Elements 2 as captured

### Requirement: Creating a layout
The layout-editor documentation SHALL explain how to create a new layout via the layouts header + control, including the name dialog and its appearance in the list.

#### Scenario: Create flow documented
- **WHEN** a reader follows the create flow
- **THEN** they learn to click + at the layouts header, enter a name in the dialog, and see the new layout appear in the layouts list

### Requirement: Switching layouts
The layout-editor documentation SHALL explain how to switch between layouts and how the canvas updates.

#### Scenario: Switch documented
- **WHEN** a reader clicks a different layout entry (e.g., Test Elements vs Test Elements 2)
- **THEN** they see the canvas swap to that layout’s placed elements

### Requirement: Add Element palette stub
The layout-editor documentation SHALL explain how to open the Add Element palette and note that a palette exists, without enumerating every element group in this minimal increment.

#### Scenario: Palette opened
- **WHEN** a reader follows the add-element flow
- **THEN** they learn to click + / Add Element at the layouts/canvas header, see the palette list, and know to cancel with ESC to restore state

#### Scenario: Palette groups deferred
- **WHEN** a reader looks for per-group element types (Essentials / Capture / Video & Audio / Media / Widgets)
- **THEN** the page cross-links to sources.md for the taxonomy and explicitly marks the full palette enumeration as a deferred gap beyond the 5 documented tiles (Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector)
### Requirement: Canvas basics
The layout-editor documentation SHALL describe canvas basics for a placed element when observed in Test Elements captures (selection with bounds/handles, drag to move), or mark them as unverified.

#### Scenario: Selection bounds documented when observed
- **WHEN** a layout element is selected on the Test Elements canvas and bounds/handles are visible in the capture
- **THEN** the page describes selection bounds/handles and drag-to-move; otherwise it marks resize/position/layering as unverified

#### Scenario: Per-element button chrome for five tiles documented
- **WHEN** a reader opens the Layout Editor section for Mini Feed, Legacy Events, Audio Mixer, Scene Selector, or Source Selector
- **THEN** they learn what each header button does on that tile (⋮ drag handle, ⚙ settings, ✕ remove, plus element-specific controls) backed by `slobs-layout-{element}-*.png` captures or marked with “I couldn't verify this” — Audio Mixer is cross-linked as identical to `mixer.md`, Scene/Source Selector as same as `scenes-and-transitions.md` / `sources.md` panels (reuse `slobs-addscene-dialog.png` / `slobs-addsource-dialog.png` evidence), Legacy Events is described as distinct from Mini Feed

#### Scenario: Other elements still deferred
- **WHEN** a reader looks for per-element properties of the remaining Elements palette items (Editor Display, Stream Preview, Recording Preview, Website)
- **THEN** the page explicitly marks them as a deferred gap beyond the 5 documented tiles
### Requirement: Evidence-backed layout claims
Every layout-editor claim SHALL be backed by a captured screenshot in /mnt/d/Twitch/shots/ cited on the page via backtick filename (slobs-layout-*) or explicitly marked as unverified.

#### Scenario: Evidence cited
- **WHEN** a layout claim is documented
- **THEN** the page cites the evidence file(s) supporting it (e.g., slobs-layout-editor.png, slobs-layout-create-dialog.png, slobs-layout-add-element-dialog.png, slobs-layout-canvas-test-elements.png)

#### Scenario: Unverified items marked
- **WHEN** a layout feature could not be captured
- **THEN** the page marks it as unverified with “I couldn’t verify this” rather than guessing

### Requirement: Version pinning
Every layout-editor documentation page SHALL pin the documented version 1.21.9 in its tagline and frontmatter.

#### Scenario: Version pinned
- **WHEN** a reader opens the layout-editor page
- **THEN** they see v1.21.9 in the title/tagline and frontmatter version / last-reviewed
