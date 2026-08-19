## ADDED Requirements

### Requirement: Puppetstring overview
The documentation SHALL describe Puppetstring as a free, cross-platform VTuber tracking application for Inochi2D models with multiple tracking methods.

#### Scenario: Reader understands Puppetstring positioning
- **WHEN** a reader opens the documentation
- **THEN** they SHALL learn that Puppetstring uses Inochi2D models (open-source alternative to Live2D)
- **THEN** they SHALL see platform availability: Windows, macOS, Linux
- **THEN** they SHALL see pricing: Free (Early Access on Steam and itch.io)
- **THEN** they SHALL learn the official URL (ar14.works/puppetstring/) and Steam App ID 3081040
- **THEN** they SHALL note that it is currently in Early Access with infrequent updates

### Requirement: Puppetstring tracking methods
The documentation SHALL describe all available tracking methods — webcam face tracking, microphone volume, display color tracking, mouse pointer tracking, and keyboard control.

#### Scenario: Reader sets up webcam face tracking
- **WHEN** a reader follows the tracking documentation
- **THEN** they SHALL learn how to enable and calibrate webcam-based face tracking (powered by Google MediaPipe)
- **THEN** they SHALL learn about the adjustment settings for fine-tuning tracking quality
- **THEN** they SHALL note that AI/ML processing runs locally (no cloud dependency)

#### Scenario: Reader uses alternative tracking methods
- **WHEN** a reader follows the alternative tracking section
- **THEN** they SHALL learn about microphone volume tracking (mouth opening reacts to audio)
- **THEN** they SHALL learn about display color tracking (screen color controls model parameters)
- **THEN** they SHALL learn about mouse pointer tracking and keyboard toggles

### Requirement: Puppetstring Inochi2D ecosystem
The documentation SHALL explain Puppetstring's place in the Inochi2D ecosystem — compatibility with Mannequin Character Generator (free model creation) and Inochi Creator (rigging) and Inochi Session (alternative model viewer).

#### Scenario: Reader creates their first Inochi2D model
- **WHEN** a reader follows the model creation section
- **THEN** they SHALL learn about Mannequin Character Generator for free model creation
- **THEN** they SHALL learn about Inochi Creator for custom rigging
- **THEN** they SHALL understand that Puppetstring can run standalone (AIO version) or alongside Inochi Session (Tracking Only version)

### Requirement: Puppetstring alternatives
The documentation SHALL compare Puppetstring with VTube Studio and other VTuber tools.

#### Scenario: Reader evaluates VTuber tools
- **WHEN** a reader reaches the Alternatives section
- **THEN** they SHALL see VTube Studio (Live2D, more features, paid DLC), VSeeFace (free, webcam tracking), and Warudo (3D VTubing) as alternatives
- **THEN** they SHALL receive guidance: Puppetstring for cross-platform/Inochi2D/free, VTube Studio for Live2D industry standard
