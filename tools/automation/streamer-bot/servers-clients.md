---
title: "Streamer.bot — Servers/Clients"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - servers
  - clients
  - websocket
  - http
  - udp
source: "https://docs.streamer.bot/"
app-evidence: "/mnt/d/Twitch/shots/servers-clients-panel-uia.txt"
last-reviewed: 2026-08-04
---

# Servers/Clients

> Reference for the Streamer.bot **Servers/Clients** tab (v1.0.4, Windows 10): the landing hub, all five server/client panels — WebSocket Server, HTTP Server, UDP Server, Custom WebSocket Servers, Custom WebSocket Clients — their expandable sections, right-click menus, and dialogs.

## Servers/Clients Overview

Open **Servers/Clients** from the left navigation. The landing page shows **five cards**, each with a one-line description (the sidebar sub-nav items mirror the same five entries):

1. **WebSocket Server** — an internal WebSocket server for Streamer.bot
2. **HTTP Server** — an internal HTTP server
3. **UDP Server** — an internal UDP server
4. **Custom WebSocket Servers** — your own WebSocket servers
5. **Custom WebSocket Clients** — your own WebSocket clients

The official docs (v1.0.5) do not include configuration pages for these sections; panel details below are app-evidence only.

## WebSocket Server

Opens **WebSocket Server** in the breadcrumb. Panel content, top to bottom:

- **Auto Start** — toggle (shown **Off**); "Automatically start the server when Streamer.bot starts up"
- **Address** — text input (`127.0.0.1`); "Enter the IP address for this server to bind to. For example, '127.0.0.1'"
- **Port** — text input (`8080`); "Enter the port to use for server connection. Defaults to 8080"
- **Endpoint** — text input (`/`); "The endpoint that the WebSocket server listens on"
- **Authentication** — toggle (shown **Disabled**); "Whether or not the WebSocket server requires authentication to connect". **Expandable**: the row has a chevron; expanding reveals:
  - **Enforce** — toggle; "Wether or not to enforce authentication for all requests, or just priviledged" [sic]
  - **Password** — text input; "The password required for authentication"
- **Server Status** — "Stopped" + **Start Server** button
- **Connected Clients** — collapsible section (chevron): header "Connected Clients" / "Clients that are currently connected"; contains a grid with columns **Address, Subscriptions, Authenticated** (empty while stopped)
- **Related Support** — "Help with WebSocket Server" group with an **Available Requests** documentation link

**Right-click**: no context menu (grid empty, server stopped).

**Expand/collapse behavior**: the **Authentication** row chevron expands/collapses the Enforce + Password fields; the **Connected Clients** section chevron expands/collapses the client grid. Verified live (grid header count 3→0→3). The chevron glyphs are the click targets — the header row itself does not toggle.

Evidence: `servers-clients-panel`, `ws-server-panel`, `ws-server-ctx`, `ws-auth-expanded`, `ws-cc-collapsed2`, `ws-cc-scrolled`, `ws-current-state`.

## HTTP Server

Opens **HTTP Server** in the breadcrumb. Panel content, top to bottom:

- **Auto Start** — toggle (shown **Off**); "Automatically start the server when Streamer.bot starts up"
- **Address** — text input (`127.0.0.1`)
- Security warning text: "If you are trying to use an address other then 127.0.0.1, due to security permissions in windows, you will need to run a netsh command to allow the usage of the address and port" [sic]
- **Port** — text input (`7474`); "Enter the port to use for server connection. Defaults to 7474"
- **Mappings** — expandable section (chevron), **collapsed by default**: header "Mappings" / "Folder mappings for serving local files". Expanding reveals:
  - Grid columns: **Path, Folder** (empty at capture time)
  - Input row: **Path** text input, **Folder** text input, **`...`** (browse) button, **Add** button, **Del** button — the folder-mapping editor
- **Server Status** — "Stopped" + **Start Server** button
- **Requests** — expandable section (chevron): header "Requests" / "Requests received by the HTTP server"; contains an empty List (scrollable container, Selection+Scroll patterns) while the server is stopped
- **Related Support** — "Help with HTTP Server" group with **Configuring HTTP Server** and **Available Endpoints** documentation links

**Right-click**: no context menu (server stopped).

**Expand/collapse behavior**: the **Mappings** and **Requests** section chevrons expand/collapse their content. Verified live (Mappings grid appears; Requests List appears/disappears).

Evidence: `http-server-panel`, `http-server-ctx`, `http-mappings-expanded`, `http-requests-expanded`, `http-requests-expanded2`.

## UDP Server

Opens **UDP Server** in the breadcrumb. A minimal panel:

- **Auto Start** — toggle (shown **Off**); starts the server on Streamer.bot startup
- **Port** — text input (defaults to `4242`)
- **Server Status** — "Stopped" + **Start Server** button

**Right-click**: no context menu.

Evidence: `udp-server-panel`.

## Custom WebSocket Servers

Opens **Custom WebSocket Servers** in the breadcrumb. Panel content:

- Grid columns: **Host, Auto Start, Status** (empty grid at capture time)

**Right-click** on the grid body → **Add** only.

### Add Custom WebSocket Server dialog

Dialog 600×288, opened from the right-click menu:

1. **Name** — text input
2. **Auto Start on Startup** — toggle
3. **Address** — text input
4. **Port** — text input
5. **Endpoint** — text input
6. **Ok / Cancel** buttons

Evidence: `cws-servers-panel`, `cws-servers-ctx`, `cws-servers-add-dialog`.

## Custom WebSocket Clients

Opens **Custom WebSocket Clients** in the breadcrumb. Panel content:

- Grid columns: **Host, Auto Connect, Reconnect, Retry, Status** (empty grid at capture time)

**Right-click** on the grid body → **Add** only.

### Add WebSocket Client dialog

Dialog 600×348, opened from the right-click menu:

1. **Name** — text input
2. **Endpoint** — text input
3. **Auto Connect on Startup** — toggle
4. **Reconnect on Disconnect** — toggle
5. **Retry Interval** — text input + spinner + "seconds" label
6. **TLS Support** — **TLS 1.0**, **TLS 1.1**, **TLS 1.2** toggles
7. **Ok / Cancel** buttons

Evidence: `cws-clients-panel`, `cws-clients-ctx`, `cws-clients-add-dialog`.

## Evidence gaps

- All grids were **empty** at capture time (servers stopped, no clients connected) — no Edit/Delete right-click items, row behaviors, or connected-client rows could be verified.
- The **HTTP Server Mappings** grid was empty, so the effect of the Add/Del buttons and the browse dialog behind **`...`** was not exercised.
- The **WebSocket Server** authentication **Password** field was not typed into (empty server config preserved); the Enforce toggle behavior was not flipped.
- **UDP Server** shows only Auto Start + Port + Status — no endpoint/address configuration was visible in v1.0.4.
- Docs coverage for these sections is absent (v1.0.5 sidebar has no Servers/Clients config pages); panel details are app-evidence only.
