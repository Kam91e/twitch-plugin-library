---
title: "Emotes Showcase"
category: "loyalty-and-recognition"
subcategory: "emotes-and-badges"
tags:
  - emotes
  - badges
  - subscriber-emotes
  - panel
  - bttv
  - ffz
  - showcase
audience:
  - variety
  - beginners
  - just-chatting
  - community-focused
price: "Free"
url: "https://dashboard.twitch.tv/extensions/3yumzvi6r4wfycsk7vt1kbtto9s0n3"
screenshots: []
last-reviewed: 2026-07-29
---

# Emotes Showcase

> A panel extension that displays all available emotes on a channel, including subscriber tiers, bit emotes, follower emotes, and third-party emotes (BTTV, FFZ).

> **Note:** This extension is hidden from Twitch Discovery search. Existing installations continue to work. New users need the [direct extension link](https://dashboard.twitch.tv/extensions/3yumzvi6r4wfycsk7vt1kbtto9s0n3) to install it.

## Quick Start

1. Navigate to the [Emotes Showcase Twitch Extension page](https://dashboard.twitch.tv/extensions/3yumzvi6r4wfycsk7vt1kbtto9s0n3)
2. Click **Install**
3. Go to your **Creator Dashboard** → **Extensions** → **My Extensions** tab
4. Find Emotes Showcase and click **Activate**
5. Choose **Panel** as the extension location (it will appear in your About / Panels section)
6. Click **Configure** to customise which emote sections appear
7. Toggle sections on/off, set custom titles, and choose default collapsed/expanded states
8. Save your configuration — the panel will populate automatically

## Features

- **Comprehensive emote display** — Shows sub emotes (Tier 1/2/3), bits tier rewards, follower emotes, cheermotes, and third-party emotes from BTTV and FFZ
- **Automatic updates** — Emotes sync automatically when you add or change them on Twitch, BTTV, or FFZ; no manual maintenance needed
- **Customisable sections** — Hide or show each emote category independently, rename section titles, and set default collapsed/expanded states per section
- **Animated emote controls** — Separate toggles for animated BTTV emotes and animated vs. static cheermotes
- **Subscription-aware UI** — Viewers see lock icons on emotes they can't access; clicking a locked emote prompts them to subscribe
- **Emote detail overlay** — Click any emote for a full-size preview showing its emote code, description, and buttons to subscribe, copy the code, or follow
- **Per-emote descriptions** — Add custom descriptions to individual emotes in the configuration panel
- **Privacy-first** — Subscription status is processed locally on the viewer's device; no data is sent to external servers
- **Mobile support** — Fully functional on mobile Twitch apps
- **Open source** — Licensed under Apache-2.0, contributions welcome on [GitHub](https://github.com/freaktechnik/twitch-emotes-extension)

## Configuration

| Setting | Options | Default | Description |
|---------|---------|---------|-------------|
| Per-section visibility | `show`, `hide` | `show` | Toggle each emote category (subs, bits, followers, BTTV, FFZ) |
| Section default state | `expanded`, `collapsed` | `expanded` | Whether each category starts open or closed |
| Custom section titles | text | — | Rename any emote section heading |
| Per-emote descriptions | text | — | Add a custom description to individual emotes |
| Animated BTTV emotes | `on`, `off` | `on` | Show or freeze animated BetterTTV emotes |
| Cheermote animation | `animated`, `static` | `animated` | Display animated or static versions of cheermotes |
| Shadows / spotlights | `on`, `off` | `on` | Toggle visual effects on emote tiles |
| Show emote codes in panel | `on`, `off` | `off` | Display the text emote code below each emote in the main panel view |
| Expand all in popout | `on`, `off` | `off` | Automatically expand all collapsed sections when viewing in pop-out mode |

Configuration is done through the Twitch Extension configuration panel after installation — no external dashboard or account required.

### Section Customisation
Each emote category (Subscriber Tier 1/2/3, Bits, Followers, BTTV, FFZ) can be individually toggled, renamed, and set to default expanded or collapsed. Use this to highlight your best emotes first and de-clutter the panel.

### Per-Emote Descriptions
You can assign a unique description to any individual emote. This appears in the detail overlay when viewers click on the emote. Use descriptions to explain inside jokes, meme origins, or call out the viewer who inspired the emote.

### Animation Controls
Two separate settings let you control animation behaviour:
- **Animated BTTV emotes** — turning this off freezes all BTTV emotes to their static frame
- **Cheermote animation** — choose between always-animated or static cheermotes

## Tips & Tricks

- **Create FOMO with lock icons:** The extension shows padlock icons on emotes viewers can't access yet. This naturally encourages subscriptions — arrange your most enticing emotes (e.g., Tier 3 animated) at the top of the panel
- **Showcase bit badges:** Bit badges have no native display on Twitch. Emotes Showcase is one of the few ways to highlight them, making bit goals more visible and rewarding
- **Add emote lore:** Use the per-emote description field to add context — explain meme origins, credit the subscriber who requested it, or add a fun fact. This makes the panel more engaging for regulars and newcomers alike
- **Arrange strategically:** Put your highest-tier or most impressive emotes first. Viewers who scroll through will naturally see what they're missing
- **Combine with BTTV/FFZ:** If you use BetterTTV or FrankerFaceZ, the extension picks those up automatically — more content displayed with zero extra configuration
- **Pop-out mode for streams:** In pop-out view, enable "Expand all" so viewers can see everything at a glance while watching on a second monitor or mobile

## Alternatives

- [MyEmotes](./myemotes.md) — similar panel extension with theme support (light/dark/auto) and 7TV integration; better if you use 7TV
- [OWN3D Emotes & Badges Showcase](https://www.own3d.tv/) — requires a free OWN3D account, shows sub badges and bit badges with a branded UI
- [7TV](https://7tv.app/) — broader third-party emote platform (browser extension, not a panel display); use alongside Emotes Showcase rather than instead of
- [BetterTTV](https://betterttv.com/) — browser extension adding more emotes to chat (different use case — chat-side, not panel)
