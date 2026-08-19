# Agent Rules — Twitch Plugin Knowledge Library

## Project Identity

This repository is a **knowledge library for Twitch streamers**, not an application codebase. It documents Twitch Extensions (plugins) that can be downloaded directly from Twitch.

The library serves two audiences:
- **Beginner streamers** who need clear, step-by-step Quick Start instructions
- **Veteran streamers** who want detailed Configuration options, Tips & Tricks, and Alternatives

## Language

All documentation in this repository MUST be written in **English**.

## Repository Structure

```
Twitch/
├── AGENTS.md          # This file — rules for AI agents
├── README.md          # Project entry point
├── INDEX.md           # Navigation hub — all plugins listed
├── categories.md      # Single reference: categories + subcategories
├── plugins/           # Plugin documentation, organised by category
│   ├── streamer-tools/
│   │   ├── overlays/
│   │   │   └── plugin-name.md
│   │   ├── alerts/
│   │   └── ...
│   ├── extensions-for-games/
│   └── ...
└── .opencode/
    ├── agents/        # Subagent definitions
    ├── skills/        # Skill definitions
    └── scripts/       # Node.js utility scripts (rebuild-index.js, validate-links.js)
```

## Zero-Hallucination Policy

**You MUST NOT fabricate or guess information about any plugin.**

If you cannot verify a plugin's price, features, configuration steps, or whether it exists on Twitch at all from a reliable source (Twitch extension dashboard, official developer documentation), you MUST explicitly say "I couldn't verify this" rather than inventing details.

Every piece of information about a plugin MUST be traceable to a source. Your research notes MUST include the source URL or reference for each fact you document.

## Plugin Documentation Standards

Every plugin documentation file MUST follow this structure:

### YAML Frontmatter

```yaml
---
title: "Plugin Name"
category: "streamer-tools"          # One of the 8 Twitch categories (kebab-case)
subcategory: "alerts"               # Subcategory folder name (kebab-case)
tags:
  - alerts
  - notifications                   # Free-form descriptive tags
audience:
  - variety                         # Streamer types this plugin suits
  - beginners
price: "Free"                       # Free / Paid / Freemium
url: "https://dashboard.twitch.tv/extensions/..."
screenshots:                        # External URLs only — never download or store locally
  - "https://example.com/screenshot1.png"
last-reviewed: 2026-07-27           # Date of last review (YYYY-MM-DD)
---
```

### Required Sections (in this order)

1. **H1 heading** — plugin name
2. **Tagline** — one-sentence blockquote describing the plugin
3. **## Quick Start** — step-by-step install and first-use guide (for beginners)
4. **## Features** — bullet list of key capabilities
5. **## Configuration** — detailed settings and options (for power users)
6. **## Tips & Tricks** — pro tips, hidden features, cross-plugin integrations
7. **## Alternatives** — links to similar plugins with guidance on when to choose them

Screenshots MUST use external URLs only. Do not download or store images in this repository.
Screenshots listed in frontmatter MUST also be displayed as visible images in the plugin document, placed between the tagline and Quick Start section, using standard markdown image syntax: `![Description](URL)`.

## Categories and Subcategories

The 8 official Twitch Extension categories are:

| Category | Directory | Subcategories |
|---|---|---|
| Extensions for Games | `plugins/extensions-for-games/` | `game-integrations`, `live-stats`, `match-history`, `character-builds` |
| Schedule & Countdowns | `plugins/schedule-and-countdowns/` | `stream-schedule`, `countdown-timers`, `upcoming-events` |
| Loyalty and Recognition | `plugins/loyalty-and-recognition/` | `channel-points`, `leaderboards`, `achievements`, `shoutouts`, `user-management` |
| Streamer Tools | `plugins/streamer-tools/` | `overlays`, `alerts`, `scene-management`, `chat-tools`, `audio-tools`, `monetization`, `analytics`, `accessibility` |
| Viewer Engagement | `plugins/viewer-engagement/` | `hype-trains`, `raids`, `viewer-goals`, `predictions`, `quests` |
| Music | `plugins/music/` | `now-playing`, `song-requests`, `playlist-manager`, `copyright-checker` |
| Polling & Voting | `plugins/polling-and-voting/` | `polls`, `voting`, `decisions` |
| Games in Extensions | `plugins/games-in-extensions/` | `chat-games`, `mini-games`, `gambling-games`, `trivia` |

The single source of truth for this taxonomy is `categories.md` at the repo root. Always read it before assigning a category to a plugin.

## Adding a New Subcategory

If a plugin does not fit any existing subcategory:

1. Create a new subcategory folder under the relevant category directory (e.g., `plugins/streamer-tools/new-subcategory/`)
2. Add the new subcategory with a description to `categories.md`
3. Note the new subcategory in your response so future agents are aware of it

## Agent Workflow

The pipeline for documenting a plugin:

```
User request
         │
         ▼
┌─────────────────────────────┐
│  @plugin-documenter          │
│  Reads categories.md         │
│  Researches plugin on Twitch │
│  Determines category/subcat  │
│  Creates plugin .md file     │
│  If new subcategory:         │
│    creates folder + updates  │
│    categories.md             │
│  Returns file path           │
└──────────┬──────────────────┘
           │ plugin file created
           ▼
┌─────────────────────────────┐
│  Orchestrator (direct)       │
│  node rebuild-index.js       │
│  node validate-links.js      │
└─────────────────────────────┘
```

### Role Boundaries

- **plugin-documenter**: reads categories.md, researches the plugin on Twitch, gathers raw data (description, price, features, setup, screenshot URLs), determines category/subcategory, creates the plugin markdown file, and creates new subcategory folders with categories.md updates if needed.
- **rebuild-index.js**: scans frontmatter of all plugin files and regenerates INDEX.md (run by orchestrator directly, not a subagent).
- **validate-links.js**: checks INDEX.md links resolve to existing plugin files (run by orchestrator directly, not a subagent).

### Category Assignment

Category MAY be specified by the user directly or determined by the plugin-documenter. When inferring a category, the agent MUST state its reasoning.
