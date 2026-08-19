---
title: "StreamElements — Tips and Merch"
category: "streaming-platforms"
type: "Web platform"
platforms:
  - Web
price: "Free"
url: "https://streamelements.com"
last-reviewed: 2026-08-01
---

# Tips and Merch

> StreamElements' monetisation hub for viewer tips (SE.Tips) and merch sales (SE.Merch).

## Overview

StreamElements monetisation is managed from the **Revenue** group in the dashboard sidebar — Tipping settings and Merch — plus the Revenue history page under Data & reports. This covers tip page customisation, payment methods (SE.Pay via Stripe, PayPal), and the merch sales page.

## Configuration

### Tipping settings (sidebar: Revenue → Tipping settings)

The tipping settings page configures your tip page. The **Payment Providers** section displays **PayPal** (with a Connect button) as the payment provider. **SE.Pay** (powered by **Stripe**) is an additional payment provider described in StreamElements documentation.

- **Page Settings**: Currency, Minimum Amount, Maximum Amount, Suggested Amount, Max Message Length, Require Login, Global Chargeback Protection
- **Design**: Page Title, Message to Tippers, Show Leaderboard, Show Total Amounts
- **Tip Panel Setup**
- **Tip Moderation**: Filter Action
- **Your public tip link**

### SE.Pay via Stripe

**SE.Pay** is StreamElements' payment provider, powered by **Stripe**. It is described in StreamElements documentation as an additional payment provider alongside PayPal.

- Connect a Stripe account
- Complete Stripe onboarding to activate the account
- Withdrawals and transaction history are managed through the **Stripe Dashboard**
- The first payout takes approximately 7 days while Stripe verifies the account

### SE.Tips

SE.Tips is the free tipping page service for accepting viewer tips.

- Free to use — no cost to the streamer
- Accepts tips via **SE.Pay (Stripe)** and **PayPal**

### SE.Merch

**SE.Merch** is integrated with the **Fourthwall** merch platform. Streamers launch a premium merch store via Fourthwall, with exclusive benefits for StreamElements users.

- Launch a premium merch store through Fourthwall
- Exclusive benefits for StreamElements users
- Merch purchases appear in the Revenue history

### Revenue history (sidebar: Data & reports → Revenue history)

The Revenue history page records tips and other revenue events on the channel, giving you a single place to track income.

## Automation with Streamer.bot

The library documents Streamer.bot automation in `tools/automation/streamer-bot/`. For StreamElements revenue events, Streamer.bot exposes **triggers only** (no sub-actions for StreamElements): **Tip**, **Merch**, **Connected**, **Disconnected**. See the [StreamElements triggers](../../automation/streamer-bot/triggers/integrations/streamelements.md) reference for full details.

## Tips

- Complete Stripe onboarding promptly — the first payout is delayed by roughly 7 days of verification
- The tipping alert (covered in [Overlays and Alerts](overlays-and-alerts.md)) fires on tips so you can thank viewers live
- Use the Revenue history to track income sources (tips vs merch)
- Link the tip page from your Twitch panels and socials
