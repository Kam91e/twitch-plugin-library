## 1. Research & Verification (Zero-Hallucination Prep)

- [x] 1.1 Verify BetterTTV facts on https://betterttv.com — free channel/shared slot counts, personal emote limits, Pro unlocks, allowed upload formats, max file size, approval queue behavior; record source URLs per fact
- [x] 1.2 Verify 7TV facts on https://7tv.app — Emote Set slot count (1000), allowed formats (WebP/AVIF/WebM/GIF/PNG), max size, real-time update behavior, `;` picker, `/add`/`/remove`/`/rename` commands, paid extras; record source URLs per fact
- [x] 1.3 Confirm external screenshot candidates (e.g., `https://7tv.app`, `https://cdn.7tv.app`, `https://betterttv.com`, `https://cdn.betterttv.net`) are reachable and stable; avoid third-party blogs; collect 0–2 URLs per file (optional per tools/_TEMPLATE.md)

## 2. Create `tools/chat-and-overlays/7tv.md` (Duplicate Platform Doc)

- [x] 2.1 Create file with valid frontmatter: `title: "7TV"`, `category: "chat-and-overlays"`, `type: "Browser Extension"`, `platforms: [Chrome, Firefox, Edge, Opera]`, `price: "Freemium"`, `url: "https://7tv.app/"`, `last-reviewed: <today>`
- [x] 2.2 Write `Overview` — web platform + browser extension hybrid, why streamers use 7TV for emotes
- [x] 2.3 Write `Key Features` — Emote Sets, 1000 slots, global vs channel, wide/zero-width, animated formats, `;` picker, FFZ native rendering, real-time sets, multi-platform note (Twitch/Kick/YouTube if verified)
- [x] 2.4 Write `Installation / Setup` — three subsections: For Viewers (extension install + refresh), For Streamers — Adding Ready Emotes [A] (browse 7tv.app/emotes → Add to Set → Active), For Streamers — Uploading Own [B] (Dashboard upload → format/size/code → instant activation)
- [x] 2.5 Write `Twitch Integration` — IRC/inject model, visibility depends on viewer extension, interaction with native Twitch/FFZ/BTTV emotes, optional YouTube/Kick mention
- [x] 2.6 Write `Configuration` — Emote Set management (Active/Default, mod/editor perms, slot usage) + Browser Extension settings (scale, FFZ toggle, highlight, stream stats, chat commands table)
- [x] 2.7 Write `Tips & Tricks` — themed sets swap, quick-add right-click, global emotes without setup, mobile via third-party apps (Chatsen/Frosty) if verified, `;` shortcut
- [x] 2.8 Write `Alternatives` — note duplicate `plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md` (panel perspective), cross-link `tools/chat-and-overlays/betterttv.md`, FFZ, MyEmotes/Emotes Showcase; guidance when to choose
- [x] 2.9 Add brief paid note (1 paragraph/bullets: personal emotes, paints, animated pfp, badge) and ensure external-images-only + sourced or unverified markers

## 3. Create `tools/chat-and-overlays/betterttv.md` (New Platform Doc)

- [x] 3.1 Create file with valid frontmatter: `title: "BetterTTV"`, `category: "chat-and-overlays"`, `type: "Browser Extension"`, `platforms: [Chrome, Firefox, Edge, Opera]`, `price: "Freemium"`, `url: "https://betterttv.com/"`, `last-reviewed: <today>`
- [x] 3.2 Write `Overview` — web platform + browser extension hybrid, most-installed emote platform context
- [x] 3.3 Write `Key Features` — Global vs Channel vs Shared vs Personal emotes, slot counts (verified), animated GIF support, emote menu, dashboard management
- [x] 3.4 Write `Installation / Setup` — three subsections: For Viewers (extension install + refresh), For Streamers — Adding Ready Emotes [A] (browse library → Add to Channel/Shared), For Streamers — Uploading Own [B] (Dashboard → Upload Emote → file/code → approval queue if applicable)
- [x] 3.5 Write `Twitch Integration` — injection into Twitch chat, extension dependency, relation to native Twitch emotes and 7TV/FFZ alongside
- [x] 3.6 Write `Configuration` — Dashboard (channel/shared slots, approval status) + Extension settings (emote scale, settings toggles) with verified table or bullets
- [x] 3.7 Write `Tips & Tricks` — slot rotation without Pro, naming conventions, transparent background tips, combining BTTV with 7TV/FFZ
- [x] 3.8 Write `Alternatives` — cross-link `tools/chat-and-overlays/7tv.md`, FFZ, ghost-chat display context; guidance when to choose BTTV for adoption vs 7TV for slots
- [x] 3.9 Add brief paid note (BetterTTV Pro: extra slots/personal emotes) and ensure external-images-only + sourced or unverified markers

## 4. Validation & Polish

- [x] 4.1 Verify both files follow `tools/_TEMPLATE.md` section order: Overview → Key Features → Installation/Setup → Twitch Integration → Configuration → Tips & Tricks → Alternatives; language is English
- [x] 4.2 Confirm `plugins/loyalty-and-recognition/emotes-and-badges/7tv-emotes.md` remains untouched; verify no `INDEX.md` or `categories.md` edits were made
- [x] 4.3 Run manual frontmatter check (YAML parses, required keys present) and link check (internal cross-links resolve to existing files)
- [x] 4.4 Final zero-hallucination pass — each numeric/format/approval claim traces to a betterttv.com or 7tv.app URL or is marked unverified; no local image assets present
