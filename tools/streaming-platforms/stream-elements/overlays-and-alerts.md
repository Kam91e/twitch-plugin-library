---
title: "StreamElements — Overlays and Alerts"
category: "streaming-platforms"
type: "Web platform"
platforms:
  - Web
price: "Free"
url: "https://streamelements.com"
last-reviewed: 2026-07-30
---

# Overlays and Alerts

> StreamElements provides a library of customisable overlay widgets and a flexible alert system, all displayed on stream through OBS Browser Source.

## Overview

Overlays and alerts are the visual layer of your stream — the elements viewers see on top of your gameplay or camera feed. StreamElements offers a widget library with dozens of pre-built designs, an alert system for celebrating events, and full customisation through a visual editor. All overlays are delivered as Browser Source URLs that you add to OBS Studio.

## Configuration

### Adding an Overlay to OBS

1. From the StreamElements dashboard, go to **Overlays**
2. Choose an existing overlay or create a new one
3. Click **Add Widget** and select from the widget library
4. Customise the widget's appearance and behaviour
5. Click **Copy Overlay URL** at the top of the overlay editor
6. In OBS, add a **Browser Source** and paste the URL
7. Set the Browser Source dimensions (StreamElements displays recommended sizes)

### Widget Library

StreamElements includes widgets for common stream needs:

| Widget Category | Examples |
|----------------|----------|
| **Alerts** | Follow, subscription, bits, raid, host, donation |
| **Chat** | Chat box overlay with custom styling |
| **Goals** | Follower goal, sub goal, donation goal, bits goal |
| **Stream Info** | Now playing, recent events, stream uptime, viewer count |
| **Tickers** | Rotating text ticker, latest follower/subscriber |
| **Media** | Spotify now playing, YouTube subscriber count |
| **Interactive** | Channel points redemption queue, mini-games display |
| **Custom** | HTML/CSS/JS editor for creating your own widgets |

### Alert System

Alerts are triggered automatically when Twitch events occur (or when test buttons in the dashboard are clicked). Each alert type can be individually configured:

- **Appearance**: choose animation style (slide, fade, zoom, bounce), background, text colours, font
- **Images**: upload custom images or choose from the StreamElements library
- **Sound**: choose from built-in sounds or upload your own audio files
- **Duration**: control how long the alert displays before fading
- **Variations**: some alert types support multiple variants that cycle randomly
- **Text**: customise the message template using variables like `{user}`, `{amount}`, `{months}`

### Custom Overlays with the Editor

The StreamElements overlay editor allows creating custom-designed overlays from scratch:

- **Drag-and-drop** interface for positioning widgets
- **Layer system** for visual hierarchy
- **Preview mode** to see how the overlay looks in real time
- **Export/import** overlays as JSON for sharing or backup
- **Custom CSS** for advanced styling beyond the visual editor

## Tips

- Create separate overlays for different stream contexts (gaming, just chatting, starting soon, break) and store them as different Browser Sources or use OBS scene-based switching
- Test alerts using the test buttons in the dashboard before going live to verify they look and sound right
- Use custom CSS in the overlay editor to fine-tune spacing and positioning that the visual editor doesn't expose
- For multi-twitch or event streams, create a dedicated overlay layout with tournament-specific widgets
- The overlay URL is persistent — set it once in OBS and all changes made in the dashboard update live on stream
