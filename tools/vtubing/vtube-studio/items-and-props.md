---
title: "VTube Studio — Items & Props"
category: "vtubing"
type: "Desktop application"
parent: "VTube Studio"
url: "https://denchisoft.com"
last-reviewed: 2026-07-30
---

# VTube Studio — Items & Props

> VTube Studio's Item System lets you attach images, animations, and Live2D models to your VTuber — perfect for viewer interaction, expressions, and scene dressing.

## What Is the Item System?

The Item System allows you to import external assets (images, GIFs, or Live2D models) and attach them to your VTuber model. Items track with the model — if the model turns its head, items attached to the head move with it. Items can have their own hotkeys, physics, and tracking parameters.

## Supported Item Types

| Type | Format | Features |
|---|---|---|
| **Image** | PNG, JPG | Static props — sunglasses, hats, badges |
| **Animated** | GIF, APNG | Animated props — sparkles, effects, blinking signs |
| **Live2D Item** | .moc / .moc3 | Full Live2D props with their own tracking parameters and hotkeys |

## How to Use Items

### Adding an Item

1. In VTube Studio, open the **Item Manager** panel
2. Click **Add Item** and select a file from your computer
3. The item appears in the scene — drag it to the desired position on your model
4. Save the item — it now loads automatically with your model

### Attaching Items to Model Points

Items can be attached to:

- **Head** — hats, glasses, headbands, crowns
- **Left/Right eye** — eye patches, monocles, tears
- **Nose** — clown noses, piercings
- **Mouth** — masks, food, microphones
- **Left/Right hand** — gloves, rings, holding objects
- **Torso** — necklaces, badges, accessories
- **Free-floating** — items that exist in scene space, not attached to the model

### Item Hotkeys

Assign hotkeys to items for dynamic control:

- **Show/Hide** — toggle item visibility
- **Toggle physics** — enable/disable item physics animation
- **Switch texture** — cycle through multiple textures on one item
- **Animate** — trigger item-specific animations
- **Change attachment point** — move item between model positions

## Live2D Items

Live2D items are the most advanced prop type. They have their own:

- **Tracking parameters** — the item can track independently of the main model
- **Animation system** — items can have their own expression/animation slots
- **Hotkey mapping** — assign hotkeys specific to the item's animations
- **Physics** — Live2D physics (bouncing, swaying) on item parts

Example: a pair of Live2D sunglasses that slide down the model's nose when a hotkey is pressed.

## Use Cases

### Viewer Interaction

- Attach items triggered by channel point redemptions (viewer buys a hat for your model)
- Throwable items: viewers can emote-throw items at your model
- Milestone items: unlock new accessories for your model at follower milestones

### Expressions

- Tears streaming down when sad
- Sweat drops when stressed
- Angel wings when wholesome
- Fire effects when excited

### Scene Dressing

- Microphone that appears when speaking
- Glasses that toggle when reading chat
- Crown for subscriber milestones
- Seasonal items for holidays

## Tips & Tricks

- PNG items are the simplest starting point — create transparent PNGs of accessories and attach them
- Use item hotkeys for quick access: assign your most-used items to easily reachable keys
- Combine items with Twitch channel points: let viewers spend points to put silly hats on your model
- Live2D items are complex but worth learning — they create the most polished interactions
- Export your item configurations — they're stored per-model and can be shared
- Check the VTube Studio Discord's #item-sharing channel for community-made items
