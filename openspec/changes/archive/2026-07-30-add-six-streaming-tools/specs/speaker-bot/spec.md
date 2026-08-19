## ADDED Requirements

### Requirement: Speaker.bot overview
The documentation SHALL describe Speaker.bot as a free TTS companion application to Streamer.bot that voices chat messages, alerts, and events using configurable speech engines.

#### Scenario: Reader understands Speaker.bot
- **WHEN** a reader opens the documentation
- **THEN** they SHALL learn that Speaker.bot is a companion to Streamer.bot (same developer)
- **THEN** they SHALL see platform availability (Windows only) and pricing (Free)

### Requirement: Speaker.bot TTS engine support
The documentation SHALL list and describe all supported speech engines with guidance on choosing between free and paid options.

#### Scenario: Reader chooses a TTS engine
- **WHEN** a reader reaches the TTS engines section
- **THEN** they SHALL see all supported engines: Google Cloud, Azure, Amazon Polly, Watson, SAPI5, UberDuck, TTS Monster, Acapela, CereProc, ElevenLabs
- **THEN** they SHALL receive guidance on which engines are free, which require API keys, and which produce the most natural voices

### Requirement: Speaker.bot Streamer.bot integration
The documentation SHALL explain how Speaker.bot connects to Streamer.bot and how to trigger TTS from Streamer.bot actions.

#### Scenario: Reader connects Speaker.bot to Streamer.bot
- **WHEN** a reader follows the integration documentation
- **THEN** they SHALL learn how to set up the Streamer.bot Speaker.bot connection
- **THEN** they SHALL learn how to use the Speak sub-action in Streamer.bot to trigger TTS
- **THEN** they SHALL see an example: chat message triggers TTS via Streamer.bot action

### Requirement: Speaker.bot voice commands
The documentation SHALL cover how viewers can trigger TTS through channel points, chat commands, or other Twitch events.

#### Scenario: Reader sets up voice commands
- **WHEN** a reader follows the voice commands documentation
- **THEN** they SHALL learn how to configure which events trigger TTS
- **THEN** they SHALL learn about moderation options (cooldown, length limits, blacklisted words)
