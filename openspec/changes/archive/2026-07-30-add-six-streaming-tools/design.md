## Context

The `tools/` directory documents external desktop applications and services (not Twitch Extensions). Currently it has 5 tools across 4 categories (`streaming-software`, `streaming-platforms`, `automation`, `chat-and-overlays`). This change adds 6 new tools, one of which requires a new category for VTuber tracking software.

## Goals / Non-Goals

**Goals:**

- Add complete documentation for Streamlabs Desktop, Meld Studio, PolyPop, Speaker.bot, VTube Studio, and Puppetstring
- Follow the established tool documentation template (`tools/_TEMPLATE.md`) for all entries
- Use **subfolder** (multi-page) structure for tools with diverse, separable feature domains
- Use **single-file** structure for tools with focused scope
- Create cross-references between related tools (Streamer.bot ↔ Speaker.bot, VTube Studio ↔ Meld Studio)
- Create new `tools/vtubing/` category for VTuber software

**Non-Goals:**

- No changes to existing tool files
- No changes to `plugins/` or `INDEX.md` (tools are documented separately from plugins)
- No changes to the plugin `categories.md` taxonomy
- No screenshots or media — all documentation is text-only following the template

## Decisions

### Decision 1: New `vtubing/` category, not subsuming into existing categories

VTuber tracking software (VTube Studio, Puppetstring) does not fit any existing category. They are not streaming software (they don't encode/stream video), not automation (no event-action system), not chat overlays, and not streaming platforms. VTubing is a distinct discipline with its own ecosystem — Live2D/Inochi2D models, face tracking, hand tracking, props/items, plugin APIs. A dedicated category keeps discovery intuitive.

**Alternatives considered:**
- Putting them under `streaming-software/` — poor fit, they don't stream
- Putting each in its own top-level file — inconsistent with category structure
- Renaming to `avatar-tracking/` — narrower but less discoverable; "vtubing" is the community term

### Decision 2: Subfolder (multi-page) for 4 tools, single-file for 2 tools

The threshold for subfolder vs single-file is: does the tool have multiple separable feature domains that each merit their own page?

| Tool | Structure | Pages | Rationale |
|---|---|---|---|
| Streamlabs Desktop | subfolder | overview, alerts-cloudbot, overlays-widgets, monetization | Covers OBS fork + full Streamlabs platform ecosystem |
| Meld Studio | subfolder | overview, meld-spark, integrations, audio-mixing | Spark AI overlay builder is a unique feature worth its own page |
| PolyPop | subfolder | overview, alerts-wiring, plugins-candypack | Game engine paradigm is fundamentally different; wiring system deserves dedicated docs |
| VTube Studio | subfolder | overview, tracking-config, items-props, plugin-api | Industry-standard tool with deep feature set and developer API |
| Speaker.bot | single file | — | Core value is TTS engine list + Streamer.bot integration; one page covers it |
| Puppetstring | single file | — | Still Early Access, tracking methods fit in sections of one page |

### Decision 3: Cross-references embedded in content, not a separate index

Related tools will reference each other in Tips & Tricks or Alternatives sections, not in a separate cross-reference document. This follows the existing pattern (Streamer.bot overview already mentions Speaker.bot inline).

### Decision 4: Speaker.bot as standalone file, not a subpage of Streamer.bot

Although Speaker.bot is a companion to Streamer.bot, it is a separate application with its own website, own configuration, and supports 10+ TTS engines independently. A standalone file with a strong cross-reference in Streamer.bot's overview allows it to be found independently and linked from both directions.

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| PolyPop name confusion (polypoplive.com vs polypop.live) | Document the correct domain and note the distinction explicitly |
| Puppetstring in Early Access with infrequent updates | Single-file structure makes updates easy; mark version/status clearly |
| VTube Studio has complex plugin API | Dedicated plugin-api page keeps overview approachable |
| New vtubing/ category may accumulate many tools later | Category is broad enough; can always split further if vtubing grows significantly |
| Streamlabs Desktop scope overlaps with StreamElements | Explicitly call out the overlap in Alternatives sections of both to guide readers |
