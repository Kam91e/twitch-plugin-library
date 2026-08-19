## Context

This repo is a knowledge library for Twitch streamers — not a codebase. It documents Twitch Extensions (plugins) in a structured, navigable format. The project is greenfield: no existing code, only OpenSpec scaffolding and a draft `categories.md`.

The library targets two audiences — beginner streamers who need quick-start instructions, and veteran streamers who want configuration details and alternatives. Every plugin documented must be available for download directly from Twitch.

## Goals / Non-Goals

**Goals:**
- Establish a predictable directory structure rooted in Twitch's 8 official extension categories
- Define a standard plugin documentation template with YAML frontmatter and consistent sections
- Create a single-source-of-truth `categories.md` listing all categories, subcategories, and descriptions
- Build a dual-view `INDEX.md` (categorical + table) that links every documented plugin
- Define an agent workflow (researcher → writer → index-updater) that minimises token consumption through strict role boundaries
- Ensure the system is extensible: agents can create new subcategories ad-hoc and persist them for future use

**Non-Goals:**
- No code or runtime — this is a static documentation library
- No automated crawling or scraping of Twitch — agents research manually
- No image hosting — screenshots are external links only
- No enforcement of review cadence (occasional review is acceptable, not scheduled)

## System Architecture

```
Twitch/
│
├── README.md              # Entry point — what and how to use
├── AGENTS.md              # AI agent rules and workflow
├── INDEX.md               # Navigation hub — all plugins listed
├── categories.md          # Single reference: categories + subcategories
│
├── plugins/
│   ├── streamer-tools/
│   │   ├── overlays/
│   │   │   └── plugin-name.md
│   │   ├── alerts/
│   │   └── _category_.md  # (optional) per-category intro
│   ├── extensions-for-games/
│   ├── schedule-and-countdowns/
│   ├── loyalty-and-recognition/
│   ├── viewer-engagement/
│   ├── music/
│   ├── polling-and-voting/
│   └── games-in-extensions/
│
└── .opencode/
    ├── agents/            # Subagent definitions
    ├── skills/            # Skill definitions
    └── tmp/               # Inter-agent scratch space (gitignored)
```

## Decisions

### Decision 1: Twitch-native category tree, not custom taxonomy
**Choice:** Use Twitch's 8 official extension categories as the top-level directory structure. New subcategories are added freely under them.
**Rationale:** Streamers already know these category names. Mapping to Twitch's own taxonomy makes the library immediately scannable. Creating a parallel taxonomy would add confusion.
**Alternative considered:** Flat custom categories (rejected — loses Twitch alignment).

### Decision 2: One `categories.md` file, not per-category files
**Choice:** A single reference file listing all 8 categories with their subcategories and descriptions.
**Rationale:** Agents need a single read to understand the full category landscape before deciding where a plugin belongs. Per-category files would require 8 reads or fragile cross-referencing.
**Alternative considered:** `_category_.md` in each folder (rejected — harder for agents to get the full picture).

### Decision 3: YAML frontmatter for metadata
**Choice:** Every plugin doc starts with YAML frontmatter: `title`, `category`, `subcategory`, `tags`, `price`, `url`, `screenshots[]`, `last-reviewed`, `audience[]`.
**Rationale:** Machine-parseable, extensible (just add new fields), enables INDEX.md generation from frontmatter alone. The `audience` field helps streamers quickly determine if a plugin is relevant to their stream type (e.g., variety, esports, beginners).
**Alternative considered:** Inline metadata sections (rejected — harder to parse programmatically).

### Decision 4: Standard 6-section body
**Choice:** Every plugin doc has: `## Quick Start`, `## Features`, `## Configuration`, `## Tips & Tricks`, `## Alternatives`, in that order.
**Rationale:** Predictable structure serves both beginners (Quick Start first) and veterans (Configuration deeper). Alternatives section links related plugins, creating a web of cross-references.

### Decision 5: Three-role agent pipeline
**Choice:** Researcher (gathers raw data) → Writer (formats into markdown) → Index-updater (rebuilds INDEX.md).
**Rationale:** Each agent does one thing, passes output to the next. No agent repeats work. Researcher can use a cheap model for web gathering; Writer only formats; Index-updater only scans frontmatter. Minimises token waste.

### Decision 7: Zero-hallucination policy
**Choice:** Agents working on this repo MUST NOT fabricate information. If a plugin's price, features, or configuration details cannot be verified from a reliable source (Twitch page, official docs), the agent MUST report the gap rather than inventing it.
**Rationale:** This is a reference library — users trust it for accurate setup guidance. A single hallucinated config step could break a streamer's setup. Verifiability is more important than completeness.

### Decision 8: Audience field in frontmatter
**Choice:** Each plugin doc includes an `audience` field in frontmatter listing streamer types the plugin suits (e.g., `variety`, `esports`, `beginners`, `creative`, `music`, `just-chatting`).
**Rationale:** Not every plugin fits every streamer. A tournament bracket overlay is great for esports but useless for a music streamer. The audience field helps streamers self-filter without reading the full doc.

### Decision 6: Subcategory creation is agent-driven
**Choice:** If no existing subcategory fits, agents create a new subcategory folder + add it to categories.md + update agent notes.
**Rationale:** The library should grow organically without requiring human intervention for every new niche.
**Constraint:** New subcategories must be documented in categories.md for future agent awareness.

## Categories and Subcategories

| Twitch Category | Subcategories |
|---|---|
| Extensions for Games | `game-integrations`, `live-stats`, `match-history`, `character-builds` |
| Schedule & Countdowns | `stream-schedule`, `countdown-timers`, `upcoming-events` |
| Loyalty and Recognition | `channel-points`, `leaderboards`, `achievements`, `shoutouts`, `user-management` |
| Streamer Tools | `overlays`, `alerts`, `scene-management`, `chat-tools`, `audio-tools`, `monetization`, `analytics`, `accessibility` |
| Viewer Engagement | `hype-trains`, `raids`, `viewer-goals`, `predictions`, `quests` |
| Music | `now-playing`, `song-requests`, `playlist-manager`, `copyright-checker` |
| Polling & Voting | `polls`, `voting`, `decisions` |
| Games in Extensions | `chat-games`, `mini-games`, `gambling-games`, `trivia` |

## Plugin Template

```markdown
---
title: "Plugin Name"
category: "streamer-tools"
subcategory: "alerts"
tags:
  - alerts
  - notifications
  - free
audience:
  - variety
  - beginners
price: "Free"
url: "https://dashboard.twitch.tv/extensions/..."
screenshots:
  - "https://example.com/screenshot1.png"
last-reviewed: 2026-07-27
---

# Plugin Name

> One-line tagline describing what the plugin does.

## Quick Start

<!-- Step-by-step: how to install, configure, and see it working in under 2 minutes -->

## Features

<!-- Bullet list of key features. What does this plugin actually do? -->

## Configuration

<!-- Detailed options, settings, variables — for power users -->

## Tips & Tricks

<!-- Pro tips, hidden features, integrations with other plugins -->

## Alternatives

<!-- Links to similar plugins in the same category/subcategory -->
- [Alternative Plugin](../subcategory/alternative.md) — why choose this instead
```

## Agent Workflow

```
User request or Researcher identifies a plugin
         │
         ▼
┌──────────────────────┐
│  1. @plugin-researcher │  reads categories.md → researches plugin on Twitch
│  (explorer + web)    │  → determines category/subcategory → writes raw notes
│                      │  → OUTPUT: raw notes (inline or .opencode/tmp/)
└──────┬───────────────┘
       │ raw notes passed to writer
       ▼
┌──────────────────────┐
│  2. @plugin-writer    │  reads raw notes → creates plugin .md with frontmatter
│  (content)           │  → if new subcategory: creates folder + updates categories.md
│                      │  → places file at plugins/<cat>/<subcat>/<name>.md
└──────┬───────────────┘
       │ plugin file created
       ▼
┌──────────────────────┐
│  3. @index-updater    │  scans frontmatter of all plugins → rebuilds INDEX.md
│  (fixer + review)    │  → verifies categories.md ↔ directory consistency
│                      │  → cleans .opencode/tmp/
└──────────────────────┘
```

## Risks / Trade-offs

- **[Risk] Subcategory proliferation** → Subcategories could grow chaotically over time. Mitigation: categories.md is the single source of truth; agents must read it before creating new subcategories.
- **[Risk] Stale links** → Screenshot URLs and plugin URLs may rot. Mitigation: occasional review is acceptable; no automated checking in scope.
- **[Risk] Agent confusion on category assignment** → Some plugins span multiple categories. Mitigation: researcher picks the *primary* category; `tags` in frontmatter can cover secondary categories.
- **[Trade-off] Single categories.md vs per-folder** → One file means easier agent reads but a larger file. Acceptable at this scale (8 categories, ~30 subcategories).
- **[Risk] Hallucination in agent output** → An agent could invent plugin features or configuration steps. Mitigation (if any): zero-hallucination policy in AGENTS.md + source-attribution requirement in research phase. Agents must say "I don't know" instead of guessing.
