## ADDED Requirements

### Requirement: PolyPop overview
The documentation SHALL describe PolyPop (polypoplive.com) as a game-engine-powered streaming application that adds 3D depth, physics, and interactive overlays to live broadcasts.

#### Scenario: Reader understands PolyPop positioning
- **WHEN** a reader opens the overview
- **THEN** they SHALL learn that PolyPop is powered by a game engine (not a traditional OBS-like encoder)
- **THEN** they SHALL learn about the 3D scene concept — depth (Z-axis), gravity, physics-based objects
- **THEN** they SHALL see platform availability and pricing (Free + Candy Pack add-on)
- **THEN** they SHALL see the correct URL (polypoplive.com) with clarification about naming

### Requirement: PolyPop alerts and wiring system
The documentation SHALL cover the unique "wiring" system where alerts are connected to actions through a visual interface without code.

#### Scenario: Reader creates an alert-action chain
- **WHEN** a reader follows the alerts documentation
- **THEN** they SHALL learn how Twitch events (cheers, subs, follows) trigger in-scene animations
- **THEN** they SHALL understand the wire-based visual editor for connecting alerts to actions
- **THEN** they SHALL learn that animations are generated live (non-repetitive)

### Requirement: PolyPop plugin system and Candy Pack
The documentation SHALL cover the plugin architecture and the Candy Pack add-on (webhooks, QR codes, scene images, global variables).

#### Scenario: Reader installs a plugin
- **WHEN** a reader follows the plugins documentation
- **THEN** they SHALL learn how to browse, install, and configure plugins
- **THEN** they SHALL learn about the Candy Pack's key plugins — Webhooks, QR Code Alerts, Exploding Balloons, and Global Variables

### Requirement: PolyPop mini-games and monetization
The documentation SHALL cover viewer mini-games and how they can be gated to subscribers or top cheerers for monetization.

#### Scenario: Reader creates a subscriber-only mini-game
- **WHEN** a reader follows the monetization documentation
- **THEN** they SHALL learn how to add mini-games to a scene
- **THEN** they SHALL learn how to restrict games to subscribers or top cheerers
