---
title: "Streamer.bot — Stream Apps"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - stream-apps
  - obs-studio
  - streamlabs-desktop
  - meld-studio
  - polypop
source: "https://docs.streamer.bot/guide/stream-apps"
app-evidence: "/mnt/d/Twitch/shots/Stream-Apps-uia.txt"
last-reviewed: 2026-08-06
---

# Stream Apps

> Reference for the Streamer.bot **Stream Apps** section (v1.0.4, Windows 10): the landing page and the four supported streaming applications — OBS Studio, Streamlabs Desktop, Meld Studio, and PolyPop — with their connection panels, right-click menus, add-connection dialogs, and per-app notes.

> **Not to be confused with the [Streamlabs Desktop sub-actions](sub-actions/streamlabs-desktop/index.md) or [OBS Studio sub-actions](sub-actions/obs-studio/index.md)** — this page covers the **Stream Apps** tab in the left navigation, where connections to streaming applications are configured.

## Stream Apps Overview

Open **Stream Apps** from the left navigation. The landing page (tagline: *"Pick your favorite streamming application, get it connected, and start creating!"* — the double-m in "streamming" is a verbatim in-app string) lists four application cards, each with a one-line description:

1. **OBS Studio** — "The defacto standard for streaming"
2. **Streamlabs Desktop** — "Add, edit and manage Streamlabs Desktop instances"
3. **Meld Studio** — "An up and coming heavy weight"
4. **PolyPop** — "A game engine for your live streams"

Clicking a card opens that application's panel; the breadcrumb shows `Stream Apps > <app>`. The left navigation also expands `Stream Apps` into the four sub-items once any panel is open.

The official docs (v1.0.5) cover all four apps under `/guide/stream-apps/` with real setup content (see [Docs coverage](#docs-coverage)).

Evidence: `Stream-Apps-uia.txt` + `Stream-Apps.png` (landing capture), `streamapps-landing-uia.txt` + `streamapps-landing.png` (fresh landing capture, verified by observer: 4 cards + taglines + `streamming` typo).

## OBS Studio

Opens **Stream Apps > OBS Studio** in the breadcrumb. Two-pane layout: a connection grid on the left (~60%), an information panel on the right (~40%).

### Connection grid

Columns: **#**, **Host**, **Auto Connect**, **Reconnect**, **Retry**, **Status**. On this install the grid holds one pre-existing connection (present before this documentation effort, not created during capture):

| # | Host | Auto Connect | Reconnect | Retry | Status |
|---|---|---|---|---|---|
| 0 | `My OBS [v5.x] (127.0.0.1:4455, <UNKNOWN>)` | Yes | Yes | 30s | Disconnected |

The info panel header is **"OBS Information"**; the body shows **"Select an OBS Connection"** when no row is selected, and switches to **"My OBS is NOT connected!"** when the row is selected.

### Right-click menu (on a connection row)

A selected row exposes a **10-item** context menu (no separators visible in the capture):

- **Add** — opens the add-connection dialog (see below)
- **Edit** — opens the same dialog pre-filled with the connection
- **Delete** — removes the connection (confirmation not captured — no deletion was performed)
- **Auto Connect** — checkbox, checked when the row has auto-connect enabled
- **Auto Reconnect** — checkbox, checked when row auto-reconnect is enabled
- **Default** — checkbox, checked for the default connection
- **Force** — checkbox, unchecked at capture time
- **Update All Actions To...** — batch operation
- **Update All Actions To Use Default** — batch operation
- **Connect** — connects the selected connection

The empty-grid right-click menu is simpler (identical to Streamlabs/Meld below): **Add** + **Update All Actions To Use Default**.

Evidence: `OBS-Studio-uia.txt` + `OBS-Studio.png` (existing capture), `streamapps-obs-uia.txt` + `streamapps-obs.png` (fresh panel), `streamapps-obs-rclick-uia.txt` + `streamapps-obs-rclick-full-uia.txt` (menu), `streamapps-obs-rclick.png` (verified by observer: 10 items, 4 checkbox toggles), `streamapps-obs-rclick-esc-uia.txt` + `streamapps-obs-rclick-esc.png` (menu dismissed).

## Streamlabs Desktop

Opens **Stream Apps > Streamlabs Desktop** in the breadcrumb. Same two-pane layout as OBS: connection grid (`#StreamlabsList`) on the left, information panel on the right.

### Connection grid

Columns: **Host**, **Auto Connect**, **Reconnect**, **Retry**, **Status** (note: **no `#` column**, unlike OBS). The grid was **empty** at capture time (no configured connections), with the right panel showing **"Streamlabs Desktop Information"** / **"Select a Streamlabs Desktop Connection"**.

### Right-click menu (on empty grid)

Two items, identical to Meld's empty-grid menu: **Add** and **Update All Actions To Use Default**.

### Add Streamlabs Desktop Connection dialog

Opened from **Add** on the context menu (or via Edit on a row). Dialog **600×355** with title **"Add Streamlabs Desktop Connection"**, fields top to bottom:

- **Name** — text input (`#textBox`)
- **Host** — text input, default `127.0.0.1`
- **Port** — text input, default `59650` (visible in the capture; a live value, not asserted elsewhere)
- **Token** — password input with a **show/hide** toggle (`#RevealButton`)
- **Auto Connect on Startup** — toggle, **Off**
- **Reconnect on Disconnect** — toggle, **Off**
- **Retry Interval** — numeric stepper (up/down inline buttons), value `30`, with a `seconds` label
- **Ok** / **Cancel** buttons

The dialog was opened and **canceled** without changes (capture discipline — no connection was created).

Evidence: `streamapps-streamlabs-uia.txt` + `streamapps-streamlabs.png` + `streamapps-streamlabs-full-uia.txt` (panel), `streamapps-streamlabs-rclick-uia.txt` + `streamapps-streamlabs-rclick.png` + `streamapps-streamlabs-rclick-full-uia.txt` (menu), `streamapps-streamlabs-add-click-uia.txt` + `streamapps-streamlabs-add-click.png` (dialog, verified by observer), `streamapps-streamlabs-add-dialog-uia.txt` (dialog fields), `streamapps-streamlabs-add-cancel-uia.txt` + `streamapps-streamlabs-add-cancel.png` (clean state restored).

## Meld Studio

Opens **Stream Apps > Meld Studio** in the breadcrumb. Same two-pane layout: connection grid (`#MeldList`) on the left, information panel on the right.

### Connection grid

Columns: an unnamed 25 px header, then **Host**, **Auto Connect**, **Reconnect**, **Retry**, **Status**. The grid was **empty** at capture time, with the right panel showing **"Meld Studio Information"** / **"Select a Meld Studio Connection"**.

### Right-click menu (on empty grid)

Two items, identical to Streamlabs' empty-grid menu: **Add** and **Update All Actions To Use Default**.

### Add Meld Studio Connection dialog

Opened from **Add** on the context menu. Dialog **600×272** with title **"Add Meld Studio Connection"**, fields top to bottom:

- **Name** — text input (`#textBox`)
- **Host** — text input, default `127.0.0.1`
- **Auto Connect on Startup** — toggle, **Off**
- **Reconnect on Disconnect** — toggle, **Off**
- **Retry Interval** — numeric stepper, value `30`, with a `seconds` label
- **Ok** / **Cancel** buttons

**Key difference from the Streamlabs dialog: Meld's dialog has no Port field and no Token field** — it is the simplest of the three add dialogs. The dialog was opened and **canceled** without changes.

Evidence: `streamapps-meld-uia.txt` + `streamapps-meld.png` (panel), `streamapps-meld-rclick-uia.txt` + `streamapps-meld-rclick.png` (menu), `streamapps-meld-add-click-uia.txt` + `streamapps-meld-add-click.png` (dialog, verified by observer), `streamapps-meld-add-dialog-uia.txt` (dialog fields), `streamapps-meld-add-cancel-uia.txt` + `streamapps-meld-add-cancel.png` (clean state restored).

## PolyPop

Opens **Stream Apps > PolyPop** in the breadcrumb. **Single-column form, no connection grid** — PolyPop's panel configures a local WebSocket server that the PolyPop app's community WebSocket plugin connects to. Fields top to bottom:

- **Auto Start** — toggle, **Off** ("Automatically start the server when Streamer.bot starts up")
- **Address** — text input `127.0.0.1` ("Enter the IP address for this server to bind to. For example, '127.0.0.1'")
- **Port** — text input `9652` ("Enter the port to use for server connection. Defaults to 9652")
- **Endpoint** — text input `/` ("Enter the endpoint to listen to for the connection. Defaults to '/'")
- **Server Status** — read-only, **Stopped** at capture time
- **Start Server** — button (play icon + text)

**Right-click**: no context menu appears on this panel (probed on the form body; only the standard app menu bar is present).

The server was **not started** during capture (starting it would be a live state mutation). The official guide confirms the connection model: Streamer.bot acts as the server, and a community-made WebSocket plugin (Jabbey92/PolyPopWebsocketPlugin) inside PolyPop connects to it — see [PolyPop sub-actions](sub-actions/polypop/index.md) for the single Trigger Alert sub-action and the "no triggers" note.

Evidence: `streamapps-polypop-uia.txt` + `streamapps-polypop.png` + `streamapps-polypop-full-uia.txt` (panel; png verified by observer: Auto Start Off, Address/Port/Endpoint values, Server Status Stopped, Start Server button), `streamapps-polypop-rclick-uia.txt` + `streamapps-polypop-rclick.png` + `streamapps-polypop-rclick-full-uia.txt` (no context menu).

## Add-connection flows (summary)

All three grid-based apps (OBS, Streamlabs, Meld) use the same pattern:

1. Right-click the grid (empty grid or a row) → **Add** (empty grid: only **Add** + **Update All Actions To Use Default**; row: full menu with Edit/Delete/Connect/etc.)
2. The **Add** dialog opens with Name + Host (+ Port/Token for Streamlabs only), connection toggles, and a retry-interval stepper
3. **Ok** saves the connection, **Cancel** closes the dialog with no changes

PolyPop has **no add dialog** — connections are not a concept there; the server form is configured directly and started with **Start Server**.

## Evidence gaps

- **Add dialog default values** (Port `59650` for Streamlabs, Retry `30`, Host `127.0.0.1`) were read from the screenshots (observer-verified); the UIA dumps expose the fields but not their text values, and the dialogs were canceled without submitting.
- **Edit / Delete / Connect** on an existing row were **not** executed — they are live state mutations (a pre-existing OBS connection exists and must not be altered). Their dialogs/confirmations are unverified.
- **PolyPop Start Server** was not pressed — the server was left **Stopped**; the started-server state (Server Status → Running, log output) is unverified.
- **Meld's unnamed 25 px grid header** — purpose unknown (no label in UIA); possibly a row-selection column like OBS's `#`, unverified.
- **OBS "My OBS [v5.x]" connection** — pre-existing on this install (port 4455 = OBS WebSocket v5); its version/status strings (`<UNKNOWN>`, `Disconnected`) reflect a not-currently-connected OBS.

## Docs coverage

Official Streamer.bot docs (v1.0.5) cross-checked on 2026-08-06 via @librarian:

| Stream App | Guide page (`/guide/stream-apps/*`) | Sub-actions (`/api/sub-actions/*`) | Triggers |
|---|---|---|---|
| OBS Studio | [obs-studio](https://docs.streamer.bot/guide/stream-apps/obs-studio) — comprehensive: Name, version v4/v5, Host, Port (4455/4444), Password, Auto Connect, Reconnect, Retry; context menu; status panel | [obs-studio](https://docs.streamer.bot/api/sub-actions/obs-studio) — ~30+ (Filters, Scenes, Sources, Recording, Streaming, Raw…) | documented (OBS Studio trigger source) |
| Streamlabs Desktop | [streamlabs-desktop](https://docs.streamer.bot/guide/stream-apps/streamlabs-desktop) — comprehensive: Host, Port, Password, Auto Connect, Reconnect; status panel | [streamlabs-desktop](https://docs.streamer.bot/api/sub-actions/streamlabs-desktop) — ~15+ | documented (Streamlabs Desktop trigger source) |
| Meld Studio | [meld-studio](https://docs.streamer.bot/guide/stream-apps/meld-studio) — comprehensive (marked "New"); requires "Allow remote connections" in Meld | [meld-studio](https://docs.streamer.bot/api/sub-actions/meld-studio) — ~12+, some pages "Docs Needed" (Record Clip, Take Vertical Screenshot) | documented (Meld Studio trigger source) |
| PolyPop | [polypop](https://docs.streamer.bot/guide/stream-apps/polypop) — minimal: config only (Auto Start, Address, Port, Endpoint); duplicate legacy path `/guide/broadcasters/polypop` | [polypop](https://docs.streamer.bot/api/sub-actions/polypop) — **1** (Trigger Alert) | **none** — "No triggers are supported by this integration" |

All four app panels in this page are app-evidence (captured from the running v1.0.4 application); the docs table above maps each app to its official documentation. The PolyPop integration is the thinnest: one sub-action, no triggers, and a config-only guide — see [PolyPop sub-actions](sub-actions/polypop/index.md) and [PolyPop triggers](triggers/polypop.md).
