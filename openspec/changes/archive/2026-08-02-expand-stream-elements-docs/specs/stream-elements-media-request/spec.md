## ADDED Requirements

### Requirement: Media Request page file
The StreamElements documentation MUST include a `media-request.md` file documenting the Media Request page (sidebar "Streaming tools" group).

#### Scenario: Sidebar mapping
- **WHEN** a reader navigates from the dashboard sidebar map (Streaming tools → Media request)
- **THEN** the map links to `media-request.md`

### Requirement: Request commands
The documentation MUST describe the viewer request commands: `!songrequest`/`!sr` (by URL, video ID, or search), `!song`, `!next`, `!when`, `!wrongsong`, `!voteskip`, `!volume`, plus the moderation commands `!songqueue`, `!skip`, `!removesong`.

### Requirement: Queue and moderation
The documentation MUST describe queue behaviour: requests land in the queue or, when queue moderation is enabled, in a Pending Approval list; queue limits, per-user limits, and maximum request duration.

### Requirement: Free vs tipped requests
The documentation MUST describe the two request types: free requests (loyalty points cost with optional subscriber discount and minimum user level) and tipped requests (prioritised playback, cost per second, minimum tip amount), plus the option to offer both.

### Requirement: Playback options
The documentation MUST describe playback settings: backup playlist when the queue is empty, YouTube filters (blacklist, tags, auto filter), shuffle mode, autoplay, skip mid-track, voting to skip, delay between videos, and the YouTube-only media source (no Spotify or SoundCloud).

### Requirement: SE.Live dock integration
The documentation MUST describe the Media Request dock in SE.Live as the recommended way to manage the queue from OBS, and warn against having both the website and the SE.Live dock open at once (orange conflict bar).

### Requirement: Public request page
The documentation MUST mention the public media-request page at `streamelements.com/<channel>/mediarequest` where viewers can request without chat access (without including any specific channel name).
