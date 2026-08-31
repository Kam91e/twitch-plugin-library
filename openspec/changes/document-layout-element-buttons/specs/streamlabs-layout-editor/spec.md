## MODIFIED Requirements

### Requirement: Add Element palette stub
The layout-editor documentation SHALL explain how to open the Add Element palette and note that a palette exists, without enumerating every element group in this minimal increment.

#### Scenario: Palette opened
- **WHEN** a reader follows the add-element flow
- **THEN** they learn to click + / Add Element at the layouts/canvas header, see the palette list, and know to cancel with ESC to restore state

#### Scenario: Palette groups deferred
- **WHEN** a reader looks for per-group element types (Essentials / Capture / Video & Audio / Media / Widgets)
- **THEN** the page cross-links to sources.md for the taxonomy and explicitly marks the full palette enumeration as a deferred gap beyond the 5 documented tiles (Mini Feed, Legacy Events, Audio Mixer, Scene Selector, Source Selector) now at every-button detail

### Requirement: Canvas basics
The layout-editor documentation SHALL describe canvas basics for a placed element when observed in Test Elements captures (selection with bounds/handles, drag to move), or mark them as unverified.

#### Scenario: Selection bounds documented when observed
- **WHEN** a layout element is selected on the Test Elements canvas and bounds/handles are visible in the capture
- **THEN** the page describes selection bounds/handles and drag-to-move; otherwise it marks resize/position/layering as unverified

#### Scenario: Per-element every-button chrome for five tiles documented
- **WHEN** a reader selects the `Test Elements` layout from the Layouts grid and then opens the Layout Editor section for Mini Feed, Legacy Events, Audio Mixer, Scene Selector, or Source Selector inside its canvas
- **THEN** they learn what every header button does on that tile inside `Test Elements` (⋮ drag handle, ⚙ settings, ✕ remove, plus element-specific controls at 2× native header close-up) backed by `slobs-layout-{element}-{header,gear,filter}.png` captures at 2× native HighQualityBicubic captured inside `Test Elements` or marked with “I couldn't verify this” — Audio Mixer cross-linked as identical to `mixer.md`, Scene/Source Selector as same as `scenes-and-transitions.md` / `sources.md` panels, Legacy Events distinct from Mini Feed, headers are only in `Test Elements` not in `Layout Editor` picker

#### Scenario: Other elements still deferred
- **WHEN** a reader looks for per-element properties of the remaining Elements palette items (Editor Display, Stream Preview, Recording Preview, Website)
- **THEN** the page explicitly marks them as a deferred gap beyond the 5 fully documented tiles
