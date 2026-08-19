---
title: "StreamElements — Media Request"
category: "streaming-platforms"
type: "Web platform"
platforms:
  - Web
price: "Free"
url: "https://streamelements.com"
last-reviewed: 2026-08-01
---

# Media Request

> Media Request is a free viewer song-request system that queues YouTube videos for playback on stream, managed from the dashboard or the SE.Live dock.

## Overview

Media Request lets viewers request songs to be played on stream, displayed through a widget or overlay. It is reachable from the dashboard sidebar under **Streaming tools → Media request**. The media source is YouTube only — there is no Spotify or SoundCloud support. The recommended way to manage the queue is the SE.Live dock (see [SE.Live](se-live.md)); do **not** have both the website and the SE.Live dock open at once — an orange conflict bar warns about it.

## Configuration

### Request Commands

- `!songrequest` / `!sr` — request by URL, video ID, or search text
- `!song` — shows the currently playing song
- `!next` — next song in queue
- `!when` — position of your request
- `!wrongsong` — remove your own request
- `!voteskip` — vote to skip the current song
- `!volume` — set the request volume

Moderation commands:

- `!songqueue` — show the queue
- `!skip` — skip the current song
- `!removesong` — remove a request

### Queue and Moderation

- Requests land in the queue, or in a Pending Approval list when queue moderation is enabled
- Configurable queue limits, per-user limits, and maximum request duration

### Free vs Tipped Requests

- **Free requests** — cost loyalty points, with an optional subscriber discount and a minimum user level requirement
- **Tipped requests** — prioritised playback, cost per second of the video, with a minimum tip amount
- Option to allow both types

### Playback Options

- Backup playlist when the queue is empty
- YouTube filters — blacklist, tag filter, auto filter
- Shuffle mode, autoplay, skip the backup list mid-track upon incoming request, voting to skip, delay between videos

### Public Request Page

- Viewers without chat access can request songs at `streamelements.com/<channel>/mediarequest` (replace `<channel>` with your channel's slug)

## Tips

- Use queue moderation for big chats to avoid spam
- Tipped requests are a monetisation option — set a per-second cost
- A backup playlist keeps audio going when the queue empties
- Manage the queue from the SE.Live dock while live (see [SE.Live](se-live.md)) to avoid the conflict bar
