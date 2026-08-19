---
title: "Streamer.bot — Triggers: Core > WebSocket"
category: "automation"
type: "Reference"
tags:
  - streamer-bot
  - triggers
  - core
source: "https://docs.streamer.bot/api/triggers/core/websocket"
last-reviewed: 2026-07-31
---

# Core — WebSocket

> Triggers for WebSocket client connections and messages, and for custom WebSocket server connections and messages.

## Client

### Websocket Client Closed

**Location:** `Core > WebSocket > Client > Websocket Client Closed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Websocket-Client-Websocket-Client-Closed-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when the Websocket Client connection is Closed
**Parameters:** Client (Select, required) — select a client from the Server/Clients > Websocket Clients tab; `Any` triggers on any client
**Variables:** Not documented in official docs

### Websocket Client Message

**Location:** `Core > WebSocket > Client > Websocket Client Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Websocket-Client-Websocket-Client-Message-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Websocket Client Message
**Parameters:** Client (Select, required) — select a client from the Server/Clients > Websocket Clients tab; `Any` triggers on any client
**Variables:** Not documented in official docs

### Websocket Client Open

**Location:** `Core > WebSocket > Client > Websocket Client Open`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Websocket-Client-Websocket-Client-Opened-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when the Websocket Client connection is Opened
**Parameters:** Client (Select, required) — select a client from the Server/Clients > Websocket Clients tab; `Any` triggers on any client
**Variables:** Not documented in official docs

## Custom Server

### WebSocket Custom Server Connection Closed

**Location:** `Core > WebSocket > Custom Server > WebSocket Custom Server Connection Closed`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Websocket-Custom-Server-Custom-Server-Connection-Closed-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Websocket Custom Server Connection is Closed
**Parameters:** Server (Select, required) — select a server from the Server/Clients > Websocket Servers tab; `Any` triggers on any server
**Variables:** Not documented in official docs

### WebSocket Custom Server Connection Opened

**Location:** `Core > WebSocket > Custom Server > WebSocket Custom Server Connection Opened`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Websocket-Custom-Server-Custom-Server-Connection-Opened-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for when a Websocket Custom Server Connection is Opened
**Parameters:** Server (Select, required) — select a server from the Server/Clients > Websocket Servers tab; `Any` triggers on any server
**Variables:** Not documented in official docs

### WebSocket Custom Server Message

**Location:** `Core > WebSocket > Custom Server > WebSocket Custom Server Message`
**Add behavior:** dialog — opens a config dialog on selection (evidence: `trigger-Core-Websocket-Custom-Server-Custom-Server-Message-dialog-uia.txt`) (see `creation-flows-catalog.txt`)
**Description:** Trigger for a Websocket Custom Server Connection Message
**Parameters:** Server (Select, required) — select a server from the Server/Clients > Websocket Servers tab; `Any` triggers on any server
**Variables:** Not documented in official docs
