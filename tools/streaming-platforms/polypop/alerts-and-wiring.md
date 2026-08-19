---
title: "PolyPop — Alerts & Wiring"
category: "streaming-platforms"
type: "Desktop application"
parent: "PolyPop"
url: "https://www.polypoplive.com"
last-reviewed: 2026-07-30
---

# PolyPop — Alerts & Wiring

> PolyPop's visual wiring system connects Twitch events to in-scene actions through a drag-and-drop editor — no coding required, unique animations every time.

## The Wiring Concept

In traditional streaming software, alerts are configured through settings panels — choose an event, pick an animation, set a sound. In PolyPop, alerts are connected to in-scene actions through a visual "wire" system. Think of it as connecting nodes: an event node (e.g., "viewer cheers") connects to an action node (e.g., "spawn confetti with physics"), and the wire defines how they interact.

## Event Types

PolyPop listens for Twitch events and makes them available as alert triggers:

- **Cheer / Bits** — triggered when a viewer cheers bits
- **Subscription** — new subscriber at any tier
- **Follow** — new follower
- **Channel points** — channel point redemption
- **Tip / Donation** — via Streamlabs or PayPal integration
- **Custom webhooks** — triggered by external URLs (requires Candy Pack)

## Action Types

When an event fires, it can trigger one or more actions in your scene:

- **Spawn objects** — create 3D objects, particles, text on screen
- **Animate objects** — trigger pre-configured animations on existing objects
- **Physics effects** — apply gravity, force, collision to objects
- **Colour changes** — change lighting, object colours, or background
- **Audio** — play sound effects synced with visual actions
- **Scene transitions** — switch between scenes on alert

## The Wire Editor

1. In PolyPop, open the **Alerts** panel
2. Click **New Wire** to create a connection
3. Select an **Alert** (event) from the left panel
4. Drag a wire to an **Action** in the right panel
5. Configure the action properties — what object spawns, where, with what physics
6. The wire is now active — when the event fires, the action executes

### Wire Properties

- **Cooldown**: minimum time between repeated executions
- **Duration**: how long the action plays before resolving
- **Scope**: apply to all viewers or specific viewer actions
- **Conditions**: only trigger if certain conditions are met (e.g., minimum cheer amount)

## Live Animations

PolyPop's animations are not pre-rendered video files or GIFs — they are generated live by the game engine. This means:

- **Every alert is unique** — particle positions, object trajectories, and animation timing vary each time
- **Physics-aware** — objects react to gravity, collide with other scene elements, bounce off surfaces
- **Reactive** — spawned objects interact with whatever else is on screen at that moment
- **Scalable** — an alert during a calm scene looks different from the same alert during an active moment

## Examples

| Event | Wire Action | Result |
|---|---|---|
| New follower | Spawn floating text + confetti | Follower's name floats up with particle burst |
| Cheer (100 bits) | Launch 3 physics balls | Balls bounce around scene with physics |
| Subscription | Spawn rotating crown on model | Crown appears and rotates above webcam |
| Channel points | Invert scene gravity | All objects float upward until toggled off |
| Custom URL visit | Flash scene background colour | Entire scene tint changes momentarily |

## Tips & Tricks

- Wire multiple actions to a single event for complex effects — e.g., spawn confetti + play sound + change lighting all on one cheer
- Use the cooldown setting generously — too many rapid alerts can overwhelm the scene
- The physics engine is the standout feature — design actions that use gravity and collision for maximum impact
- Test wires with PolyPop's built-in alert simulator before going live
- Combine with Candy Pack's Webhooks plugin for external triggers (smart home lights, sound boards)
