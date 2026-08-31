---
title: "Streamlabs Desktop — Mixer"
category: "streaming-software"
type: "Desktop application"
parent: "Streamlabs Desktop"
platforms:
  - Windows
  - macOS
price: "Freemium"
url: "https://streamlabs.com"
version: "1.21.9"
app-evidence: "/mnt/d/Twitch/shots/"
last-reviewed: 2026-08-21
---

# Streamlabs Desktop — Mixer

> Reference for the Streamlabs Desktop audio Mixer panel (v1.21.9, Windows): one row per audio source with a volume slider, level meter, and per-source controls — documented strictly from captured app evidence.

For a general introduction to the application, see [Streamlabs Desktop](overview.md); for the topic-level audio guide (filters, monitoring, audio source types), see [Streamlabs Desktop — Audio & Hotkeys](audio-and-hotkeys.md).

## Panel Layout

The Mixer is a docked panel at the bottom of the Editor view. Top to bottom:

1. **Header** — the label **Mixer** with a **gear icon** on the header row
2. **Source rows** — one row per audio source, listed below the header

Each row combines a volume slider, a dB readout, a level meter, and per-row icons (lock and gear).

Evidence: `slobs-protocol-addscene-open.png` (primary), `slobs-addscene-try2.png`, `slobs-addsource-try2.png` (mixer visible in the background behind open dialogs). Note: `slobs-mixer-dock.png`, despite its filename, shows the App Store view and does **not** show the mixer — it must not be cited as mixer evidence.

## Source Rows (Top to Bottom)

Two rows were captured in the default scene collection:

1. **Desktop Audio** — dB readout **-10.8 dB**, slider positioned roughly three-quarters of the way to the right
2. **Mic/Aux** — dB readout **0.0 dB**, slider positioned at the far right

Desktop Audio is the row for the computer's output sound (game, music, system sounds); Mic/Aux is the microphone input — see [Audio & Hotkeys](audio-and-hotkeys.md) for the underlying audio source types.

Evidence: `slobs-protocol-addscene-open.png`.

## Row Controls

Control types visible per row:

- **Volume slider** — horizontal fader. The two captured rows show different slider positions with different dB readouts (far right = 0.0 dB, ~three-quarters = -10.8 dB), consistent with slider position setting the source's level.
- **Level meter** — a meter per row showing that source's audio level.
- **Lock icon** — present on each row; its behaviour was not tested (**unverified**).
- **Gear icon** — present on each row; see Per-source Properties below.

Header controls:

- **Gear icon** on the Mixer header — click behaviour not captured (**unverified**).

Evidence: `slobs-protocol-addscene-open.png`.

## Adjusting Volume

Drag a source's slider to adjust its level: left for quieter, right for louder. The captured rows show the result of such adjustment — Mic/Aux at the far right reads 0.0 dB, while Desktop Audio, pulled back to roughly three-quarters, reads -10.8 dB. No slider was dragged during the capture session, so fine-grained drag behaviour (dB steps, detents) is **unverified**.

Evidence: `slobs-protocol-addscene-open.png` (slider positions and dB readouts only; no drag interaction captured).

## Mute / Unmute

Per the app's generic documentation model (see [Audio & Hotkeys](audio-and-hotkeys.md)), clicking a source's speaker icon mutes it without removing it, and clicking again unmutes. However, **no speaker/mute icon was identified in the captured mixer rows** (rows show lock and gear icons), and no mute/unmute click was performed — the mute control's location and behaviour in v1.21.9 is **unverified**. I couldn't verify this from the captures.

Evidence: `slobs-protocol-addscene-open.png` (rows show lock/gear icons; no mute control identified).

## Per-source Properties

Each row carries a **gear icon**, and rows may also respond to right-click. Neither interaction was performed during capture: whether the gear icon or a right-click menu opens per-source audio properties in v1.21.9 is **unverified**. I couldn't verify this.

Evidence: `slobs-protocol-addscene-open.png` (gear icons visible only; not clicked).

## Advanced Audio Properties

Advanced per-source options (filters, monitoring) are covered generically in [Audio & Hotkeys](audio-and-hotkeys.md). The corresponding advanced audio properties dialog was **attempted during the capture session but not verified** — no capture of the dialog exists, and its entry point in v1.21.9 is **unverified**. I couldn't verify this.

Evidence: none — no capture of this dialog exists.

## Scrolling

Whether the Mixer scrolls when many audio sources are present has **not been tested** — the capture session only ever showed two rows, which fit without scrolling. Scrollability is **unverified**.

Evidence: `slobs-protocol-addscene-open.png` (two rows captured; no multi-source state captured).

## Evidence gaps

- **Mute control** — no speaker/mute icon identified in the captured rows; mute/unmute was never clicked.
- **Advanced audio properties** — dialog attempted but not captured; its entry point is unknown.
- **Gear vs right-click** — neither the per-row gear icon nor a right-click menu was activated; how per-source audio properties are accessed is unverified.
- **Header gear icon** — the gear icon on the Mixer header was not clicked.
- **Scrollability** — the mixer was never captured with more than two sources; scroll behaviour untested.
- **Drag interaction** — sliders were never dragged; the dB response to dragging is unmeasured.
- **Lock icon** — per-row lock icons are visible but were never clicked.
- **`slobs-mixer-dock.png`** — mislabeled capture showing the App Store view; contains no mixer content.
