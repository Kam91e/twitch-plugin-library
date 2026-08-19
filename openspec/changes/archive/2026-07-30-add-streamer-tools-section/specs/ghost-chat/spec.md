## ADDED Requirements

### Requirement: Document Ghost Chat overview
The tool document SHALL explain that Ghost Chat is a free, open-source desktop application that provides a transparent, customizable chat overlay for streamers, supporting Twitch, YouTube, and Kick simultaneously.

#### Scenario: Reader understands what Ghost Chat is
- **WHEN** a reader opens the Ghost Chat tool document
- **THEN** they SHALL understand it is a lightweight desktop overlay app written in Go

### Requirement: Document key features
The tool document SHALL list at least: multi-platform chat (Twitch, YouTube, Kick), transparent overlay mode, custom themes, emote support (BTTV, FFZ, 7TV), channel points redemption display, global hotkey toggle, vanish mode, and lightweight resource usage (Go + Wails, no Electron).

#### Scenario: Features are enumerated
- **WHEN** a reader reads the Key Features section
- **THEN** they SHALL see a comprehensive list of Ghost Chat capabilities

### Requirement: Document installation and setup
The tool document SHALL explain how to: download the latest release from GitHub, install on Windows or macOS, configure Twitch channel, set up transparent overlay capture in OBS (Window Capture), and customize themes.

#### Scenario: Beginner can set up the overlay
- **WHEN** a streamer follows the setup guide
- **THEN** they SHALL be able to display a transparent chat overlay on their OBS stream

### Requirement: Document transparency and OBS capture
The tool document SHALL explain Ghost Chat's transparent background rendering and how to capture it properly in OBS using Window Capture with transparency support.

#### Scenario: Reader can configure the overlay correctly
- **WHEN** a reader configures Ghost Chat with OBS
- **THEN** they SHALL know how to achieve a clean transparent overlay

### Requirement: Include alternatives
The tool document SHALL list alternatives: Restream Chat, Twitch's native chat overlay (popout chat → Browser Source), and StreamElements chat overlay.

#### Scenario: Reader can compare chat overlay options
- **WHEN** a reader finishes the document
- **THEN** they SHALL know what alternatives exist
