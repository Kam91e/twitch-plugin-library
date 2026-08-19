---
title: "poll.ma.pe"
category: "chat-and-overlays"
type: "Web service"
platforms:
  - Web
price: "Free"
url: "https://poll.ma.pe"
last-reviewed: 2026-07-30
---

# poll.ma.pe

> Like Straw Poll but embedded in your stream with themes — a web-based polling service that integrates with Twitch chat and provides themed overlays for OBS.

## Overview

poll.ma.pe is a free, web-based polling tool built specifically for streamers. It lets you create polls that viewers can vote on directly through Twitch chat using numbered responses (e.g., typing "1" to vote for the first option). The poll displays as a customisable overlay in OBS via Browser Source, with game-themed designs that match popular titles.

## Key Features

- **Twitch chat voting** — viewers vote by typing numbers (1, 2, 3...) in chat; the integrated chat bot pollMapeBot tracks responses
- **Themed overlays** — game-specific visual themes including Dota 2, League of Legends, Hearthstone, Overwatch, Rocket League, Dead by Daylight, and many more
- **OBS Browser Source** — overlay URL that displays the live poll results on stream
- **Real-time results** — vote counts update instantly; winning option shown in the browser tab title
- **Multiple voting modes** — single choice and multiple choice options
- **Presets** — save poll configurations for reuse
- **pollMapeBot** — built-in Twitch chat bot that announces poll questions and results in chat
- **Chrome address bar integration** — type `poll.ma.pe` followed by question and options directly in the address bar for quick poll creation

## Installation / Setup

1. Visit [poll.ma.pe](https://poll.ma.pe) and click the **Login with Twitch** button
2. Authorize the application — this connects poll.ma.pe to your Twitch channel and enables the chat bot
3. Create a poll by entering a question and answer options
4. Copy the **Overlay URL** displayed in the dashboard
5. In OBS, add a **Browser Source** and paste the overlay URL
6. Configure the Browser Source dimensions to fit your stream layout (recommended: 600×400 or match your overlay space)
7. Click **Start poll** — the overlay appears on stream and chat voting begins

## Twitch Integration

poll.ma.pe connects to your Twitch channel via OAuth. The pollMapeBot joins your chat channel and listens for numbered votes. It can optionally announce the question when a poll starts and the results when it ends. The bot operates without requiring additional software — it runs server-side.

## Configuration

- **Themes**: Choose from a library of game-themed visual styles that change the overlay appearance
- **Auto-suggest theme**: poll.ma.pe can suggest a theme based on the game you're currently playing on Twitch
- **Presets**: Create reusable poll presets with pre-configured options and themes
- **Multiple votes**: Optionally allow viewers to vote on multiple options
- **Hide overlay details**: Remove vote counts and time information from the overlay for a cleaner look
- **Chat bot messages**: Control whether the bot announces the question and closing results in chat

## Tips & Tricks

- Use poll.ma.pe during stream breaks or between games to engage viewers while you set up
- Combine with StreamElements or Streamlabs overlays by adding the Browser Source as a separate layer
- The game-specific themes automatically give your poll a polished look — try auto-suggest based on current game
- Use the Chrome address bar shortcut (`poll.ma.pe` + Tab, then `Question;Option1;Option2`) for instant polls without visiting the dashboard
- Chain multiple polls during a single stream by reusing the same overlay URL — just start a new poll from the dashboard

## Alternatives

- **Streamlabs Polls**: Built into Streamlabs overlay system; requires Streamlabs account
- **StreamElements Polls**: Part of the StreamElements platform; integrated with their chatbot
- **StrawPoll**: Simple web polls but lacks Twitch chat integration and stream overlays
