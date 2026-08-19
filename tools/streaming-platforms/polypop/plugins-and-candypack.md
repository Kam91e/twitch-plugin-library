---
title: "PolyPop — Plugins & Candy Pack"
category: "streaming-platforms"
type: "Desktop application"
parent: "PolyPop"
url: "https://www.polypoplive.com"
last-reviewed: 2026-07-30
---

# PolyPop — Plugins & Candy Pack

> PolyPop's plugin system lets you install only the features you need, and the Candy Pack collection adds powerful pro-level capabilities.

## Plugin System

PolyPop has a modular plugin architecture. Instead of a monolithic feature set, you install only the plugins relevant to your streaming style. This keeps the application lightweight and customisable.

### Managing Plugins

1. Open PolyPop and navigate to **Plugin Manager** in the settings
2. Browse available plugins — each shows a description, features, and requirements
3. Click **Install** to add a plugin
4. Installed plugins appear in your Library as new source types or configuration options
5. Plugins can be uninstalled at any time without affecting other functionality

### Types of Plugins

- **Alert triggers** — additional ways to trigger alerts (webhooks, etc.)
- **Visual effects** — extra animation types, filters, and object behaviours
- **Source types** — new types of elements you can add to scenes
- **Utility plugins** — integration helpers, variable systems, data connections

## Candy Pack

Candy Pack is a collection of premium plugins that became free. It adds significant creative control over your PolyPop stream.

### Scene Images

Create custom-sized scenes that can be used as textures, recorded independently, or streamed alongside your main scene.

- Build isolated scenes for specific purposes (overlay-only, webcam-only)
- Render scenes as textures that can be draped over 3D objects
- Record each scene separately for post-production flexibility

### Webhooks

Generate custom alert URLs that trigger specific actions when visited.

- **How it works**: PolyPop generates a unique URL for each webhook alert
- **When the URL is visited**: the associated alert fires in your scene
- **Use cases**: trigger alerts from external buttons, phone apps, automation services (IFTTT, Home Assistant)
- **Custom data**: pass data through the URL to customise the alert behaviour
- **Redirect**: configure where visitors are redirected after triggering the alert

### QR Code Alerts

Generate QR codes that viewers can scan to trigger alerts on your stream.

- **How it works**: PolyPop creates a QR code linked to a webhook URL
- **Display the QR code**: show it on stream or share it on social media
- **Viewer scans it**: their phone triggers the alert in your scene
- **Use cases**: IRL streams (scan codes at events), viewer engagement (scan to cheer), treasure hunts

### Web Requests

Trigger external services from PolyPop alerts.

- Send HTTP requests to external APIs when alerts fire
- Control smart home devices (lights, sound systems) via IFTTT
- Trigger Discord webhooks, Twitter posts, or custom automation
- Pass alert data (user name, event type) as request parameters

### Exploding Balloons

Alerts emit colourful balloons that float into your scene and explode with paint.

- Balloons rise with physics and pop on collision
- Paint splatters affect scene objects and surfaces
- Customise colour, quantity, and explosion force
- Great for celebrations, milestones, and interactive fun

### Expression Wire

Connects alerts to any property type and assigns values using simple expressions.

- Target any object property (position, scale, colour, opacity)
- Write expressions using alert data (e.g., "user name length = font size")
- Create dynamic, data-driven scene responses

### Global Variables

Set custom variables that can be referenced across your entire project.

- Define variables once and use them in multiple wires
- Change a value centrally and all wires update automatically
- Useful for streamer name, goal targets, session counters

## Mini-Games

PolyPop's mini-games can be gated to subscribers or top cheerers, creating monetisation opportunities.

- Built-in mini-game templates available from the plugin library
- Configure entry requirements: subscribers only, minimum cheer amount, or channel points
- Games run in your scene with real-time viewer interaction
- Examples: balloon popping, target shooting, racing, puzzle challenges

## Tips & Tricks

- The Webhooks plugin is the most versatile — combine with Streamer.bot or IFTTT for unlimited trigger sources
- QR Code Alerts work great for in-person events: put a QR code on your IRL stream overlay
- Start with the Candy Pack — it's free and includes the most valuable plugins
- Use Global Variables for anything you might want to change mid-stream without rewiring
- The Expression Wire is powerful once you understand it — start simple and build complexity gradually
