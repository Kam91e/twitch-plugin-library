---
title: "StreamElements"
category: "streaming-platforms"
type: "Web platform"
platforms:
  - Web
  - Windows
  - macOS
price: "Free"
url: "https://streamelements.com"
last-reviewed: 2026-08-01
---

# StreamElements

> A free, cloud-based all-in-one streaming platform providing customisable overlays, alerts, chatbot, loyalty rewards, analytics, and a sponsorship marketplace.

## Overview

StreamElements is a cloud-based platform that combines stream production tools, community management, and monetisation in one ecosystem. Unlike desktop-only tools, everything runs through a web dashboard — no downloads are required for core features. The dashboard is the navigation hub for the whole platform, so start there: see the [Dashboard guide](dashboard.md) for a full map of the sidebar and every feature page. StreamElements is used by streamers of all sizes, from beginners to major partners, and is particularly valued for its generous free tier and sponsorship marketplace that connects creators with brands.

The StreamElements ecosystem also includes separate products beyond the core dashboard: **SE.Live**, a free multi-streaming plugin that runs inside OBS Studio (covered in its own [guide](se-live.md)), **Ground Control**, a companion app for managing streams across devices, and **Titanium**, a user-generated video tool for building video content around your stream.

## Key Features

- **Customisable overlays** — library of animated widgets (alerts, chat boxes, goal bars, tickers) with visual editor
- **Alert system** — follow, subscription, raid, bits, and custom donation alerts with full visual customisation
- **Cloud chatbot** — always-on chatbot with custom commands, timers, moderation, and mini-games
- **Loyalty system** — SE Points earned by watching; viewers redeem for custom rewards
- **Sponsorship marketplace** — connect with brands for paid sponsorship opportunities
- **Analytics dashboard** — stream performance metrics, viewer trends, revenue tracking
- **StreamElements Marketplace** — free and premium overlay themes and widgets
- **Multi-platform support** — works with Twitch, YouTube, and Facebook Gaming
- **SE.Live plugin** — free multi-streaming plugin that runs inside OBS Studio (see [SE.Live](se-live.md))
- **Monetisation** — SE.Tips tipping page, SE.Pay (Stripe), PayPal, and SE.Merch merch store (see [Tips and Merch](tips-and-merch.md))

## Installation / Setup

1. Visit [streamelements.com](https://streamelements.com) and click **Login with Twitch**
2. Authorise the connection — this links your Twitch account and creates your dashboard
3. From the dashboard, browse the **Overlay Library** to find widgets you want to display
4. Click on a widget and copy its **Browser Source URL**
5. In OBS Studio, add a **Browser Source** and paste the URL
6. Configure the overlay size (StreamElements provides recommended dimensions per widget)
7. The overlay appears immediately — customise it from the StreamElements dashboard

## Twitch Integration

StreamElements integrates with Twitch through OAuth authorisation. Once connected, it can:

- Read chat messages for chatbot commands and moderation
- Listen for Twitch events (follows, subscriptions, bits, raids) to trigger alerts
- Track viewer activity for loyalty points
- Interact with Twitch's API for stream information and statistics

StreamElements also offers specific **Twitch Extensions** (available from the Twitch Extension dashboard) that provide panel-based features like leaderboards. These are separate from the main platform — this documentation covers the full StreamElements ecosystem.

## Configuration

Configuration is entirely web-based through the StreamElements dashboard:

- **Overlays**: browse, customise, and manage widgets. Each widget has its own settings panel
- **Chat Bot**: configure commands, timers, moderation, and loyalty in the chatbot section
- **Alert Box**: customise appearance, sound, and duration for each alert type
- **My Account**: manage connected platforms, channel information, and notification preferences
- **Store**: set up SE Points store with custom redemption items
- **Sponsorships**: browse available brand campaigns and manage applications

## Tips & Tricks

- Start with the pre-built overlay themes from the Marketplace and customise from there
- Use separate Browser Sources for different widget types (alerts, chat, goals) — this gives you independent control over each
- The chatbot runs in the cloud — you don't need to keep any application running locally for chat commands to work
- Link your StreamElements with Streamlabs or other donation platforms to show unified alerts
- Check the Sponsorships tab regularly — campaigns are time-limited and vary by region and audience size
- The StreamElements community Discord offers overlay commissions and troubleshooting help

## Alternatives

- **Streamlabs**: Similar all-in-one platform with a more beginner-friendly OBS fork; some features require a paid subscription
- **OWN3D**: Premium overlay marketplace with professional designs; paid subscription, no chatbot
- **Muxy**: Analytics-focused platform with overlays and engagement tools; free tier available, fewer features than SE
- **Tangia**: All-in-one interaction platform focused on chatbot, alerts, and engagement; paid tiers for advanced features
