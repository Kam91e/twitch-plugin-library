# Tasks — streamer-bot-reference-docs

> File allocation ground truth: `file-map.md` (generated from the official docs index). Every task below lists the exact files from that map. Entry format per design D2; source per design D3.

## 1. Preparation

- [x] 1.1 Back up `tools/automation/streamer-bot/actions-system.md` to a temp copy (no git history in repo)
- [x] 1.2 Create folder skeleton for `sub-actions/` and `triggers/` per `file-map.md`
- [x] 1.3 Verify `file-map.md` entry lists against `https://docs.streamer.bot/llms.txt` (re-fetch and diff counts: 350 sub-actions, 413 triggers)
- [x] 1.4 Write the entry template (Location / Description / Parameters / Variables) as a reference snippet, per design D2

## 2. Sub-actions — core (62 entries, 8 files)

- [x] 2.1 Write `sub-actions/core/actions.md` (7: get-action-group-state, get-action-state, run-action, set-action-group-state, set-action-state, set-sub-action-state, set-sub-action-weight)
- [x] 2.2 Write `sub-actions/core/commands.md` (5: get-command-group-state, get-command-state, get-commands, set-command-group-state, set-command-state)
- [x] 2.3 Write `sub-actions/core/file-io.md` (6: file-exists, folder-exists, read-lines-from-file, read-random-line-from-file, read-specific-line-from-file, write-to-file)
- [x] 2.4 Write `sub-actions/core/globals.md` (4: clear-non-persisted-globals, clear-non-persisted-user-globals, global-get, global-set)
- [x] 2.5 Write `sub-actions/core/logic.md` (6: break, get-input, get-random-number, if-else, switch, while)
- [x] 2.6 Write `sub-actions/core/quotes.md` (4: add-quote, delete-quote, get-quote-count, get-quote)
- [x] 2.7 Write `sub-actions/core/sounds.md` (4: play-sound-from-folder, play-sound, stop-all-sound-playback, stop-sound-playback)
- [x] 2.8 Write `sub-actions/core/index.md`: links to the 7 group files; inline H2 — direct (delay) + action-queues (3), arguments (1), csharp (2), file-tail (1), midi (3), misc (2), network (2), signals (2), system (3), timers (1), triggers (2), users (1), voice-control (2)

## 3. Sub-actions — twitch (95 entries, 12 files)

- [x] 3.1 Write `sub-actions/twitch/rewards.md` (17: configure-rewards, get-reward-info, reset-reward-counter, reset-reward-user-counters, set-background-color, set-cost, set-enabled-state, set-global-cooldown, set-group-enabled-state, set-group-paused-state, set-max-per-stream, set-max-per-user-per-stream, set-paused-state, set-prompt, set-title, update-redemption-status, update)
- [x] 3.2 Write `sub-actions/twitch/guest-star.md` (12: assign-guest-star-slot, create-guest-star-session, delete-guest-star-invite, delete-guest-star-slot, end-guest-star-session, get-channel-guest-star-settings, get-guest-star-invites, get-guest-star-session, send-guest-star-invite, update-channel-guest-star-settings, update-guest-star-slot-settings, update-guest-star-slot)
- [x] 3.3 Write `sub-actions/twitch/chat.md` (8: clear-chat-messages, get-pinned-chat-message, pin-chat-message, reply-to-message, send-announcement-to-channel, send-message-to-channel, unpin-chat-message, update-pinned-chat-message-duration)
- [x] 3.4 Write `sub-actions/twitch/moderation/index.md` (direct 10: add-moderator, add-vip, ban-user, remove-moderator, remove-vip, send-shoutout, timeout-user, unban-user, untimeout-user, warn-user; inline H2 — shield 2) with link to chat-modes
- [x] 3.5 Write `sub-actions/twitch/moderation/chat-modes.md` (4: emote-only, follow-mode, slow-mode, subscriber-only)
- [x] 3.6 Write `sub-actions/twitch/predictions.md` (6: cancel-active-prediction, create-prediction, get-active-prediction, lock-active-prediction, resolve-last-prediction-by-title, resolve-last-prediction)
- [x] 3.7 Write `sub-actions/twitch/channel.md` (6: add-viewer-count, create-clip, create-stream-marker, set-channel-branded-content, set-channel-game, set-channel-title)
- [x] 3.8 Write `sub-actions/twitch/user.md` (5: add-broadcaster-information, add-present-user, add-random-users, get-team-info-for-target, get-user-info-for-target)
- [x] 3.9 Write `sub-actions/twitch/tags.md` (4: add-channel-tag, clear-channel-tags, remove-channel-tag, set-channel-tags)
- [x] 3.10 Write `sub-actions/twitch/polls.md` (4: archive-active-poll, create-poll, get-active-poll, terminate-active-poll)
- [x] 3.11 Write `sub-actions/twitch/ads.md` (4: get-ad-schedule, get-pre-roll-free-time, run-commercial, snooze-ad)
- [x] 3.12 Write `sub-actions/twitch/index.md`: links to the 11 group files; inline H2 — charity (1), followers (3), raid (2), sub-counter (2), subscribers (2), user-groups (3)

## 4. Sub-actions — elgato (57 entries, 7 files)

- [x] 4.1 Write `sub-actions/elgato/camera-hub/prompter.md` (16: fast-forward-chapter, get-selected-script, rewind-chapter, set-auto-scroll-state, set-brightness, set-crosshair-image, set-crosshair-images, set-crosshair, set-font-size, set-font, set-horizontal-margin, set-line-spacing, set-mode, set-opacity, set-scripts, set-vertical-margin)
- [x] 4.2 Write `sub-actions/elgato/camera-hub/webcam.md` (14: set-anti-flicker, set-auto-white-balance, set-brightness, set-contrast, set-dynamic-range, set-focus, set-noise-reduction, set-pan, set-saturation, set-sharpness, set-tilt, set-white-balance-tint, set-white-balance, set-zoom)
- [x] 4.3 Write `sub-actions/elgato/camera-hub/epoccam.md` (4: set-ar-lens, set-bitrate, set-camera, set-flash-mode)
- [x] 4.4 Write `sub-actions/elgato/camera-hub/index.md` (nav links to prompter, webcam, epoccam)
- [x] 4.5 Write `sub-actions/elgato/wave-link.md` (16: get-filter-state, get-input-information, get-microphone-information, get-output-volumes, get-selected-output, mute-input, mute-microphone, mute-output, set-filter-bypass-state, set-filter-state, set-input-volume, set-microphone-balance, set-microphone-gain, set-microphone-output-volume, set-output-monitor-device, set-output-volume)
- [x] 4.6 Write `sub-actions/elgato/stream-deck.md` (7: set-background, set-state, set-title, set-value, show-alert, show-ok, toggle-state)
- [x] 4.7 Write `sub-actions/elgato/index.md` (nav links to camera-hub, stream-deck, wave-link)

## 5. Sub-actions — obs-studio (29 entries, 3 files)

- [x] 5.1 Write `sub-actions/obs-studio/sources.md` (14: flip-source, hide-groups-sources, hide-sources-filters, rotate-source, set-browser-source-url, set-color-source-color, set-gdi-text, set-image-source-file, set-media-source-file, set-media-state, set-source-audio-track-state, set-source-filter-state, set-source-mute-state, set-source-visibility-state)
- [x] 5.2 Write `sub-actions/obs-studio/scenes.md` (4: get-scene-item-properties, hide-scenes-sources, set-random-scene-source-visible, set-scene-filter-state)
- [x] 5.3 Write `sub-actions/obs-studio/index.md`: links to sources/scenes; inline H2 — direct 8 (create-record-chapter, get-current-scene, get-status, raw, recording, set-active-scene, streaming, take-screenshot) + filters (1), groups (1), replay (1)

## 6. Sub-actions — integrations (37 entries, 4 files)

- [x] 6.1 Write `sub-actions/integrations/voicemod.md` (12: get-current-voice, play-sound, select-random-voice, select-voice-by-id, select-voice-by-name, select-voice, set-background-effect-state, set-censor-state, set-hear-my-voice-state, set-mute-state, set-voice-changer-state, stop-all-sounds)
- [x] 6.2 Write `sub-actions/integrations/vtube-studio.md` (10: color-tint, get-current-model, load-model-by-name, load-model, move-model, reset-all-color-tints, send-raw-request, set-expression-state, trigger-hotkey-by-name, trigger-hotkey)
- [x] 6.3 Write `sub-actions/integrations/tits.md` (6: activate-trigger-by-name, activate-trigger, throw-item-by-name, throw-item, throw-items-by-name, throw-items)
- [x] 6.4 Write `sub-actions/integrations/index.md`: links to 3 group files; inline H2 — discord (1), ifttt (2), lumia-stream (3), mtion (2), pronouns (1)

## 7. Sub-actions — remaining categories (9 files)

- [x] 7.1 Write `sub-actions/kick/moderation.md` (4: ban-user, timeout-user, unban-user, untimeout-user)
- [x] 7.2 Write `sub-actions/kick/index.md`: link to moderation; inline H2 — channel (2), chat (2), user-groups (3), user (3)
- [x] 7.3 Write `sub-actions/streamlabs-desktop/sources.md` (8: flip-source, hide-sources-filters, rotate-source, set-browser-source-url, set-gdi-text, set-source-filter-state, set-source-mute-state, set-source-visibility-state)
- [x] 7.4 Write `sub-actions/streamlabs-desktop/index.md`: link to sources; inline H2 — direct (recording, streaming) + filters (1), groups (2), scenes (3)
- [x] 7.5 Write `sub-actions/meld-studio/index.md` (single file: direct 6 — get-current-scene, get-status, recording, show-scene, streaming, take-screenshot; inline H2 — effects 1, layers 1, tracks 2)
- [x] 7.6 Write `sub-actions/youtube/index.md` (single file: direct 4 — send-message-to-channel, set-description, set-title-and-description, set-title; inline H2 — moderation 2, user-groups 3)
- [x] 7.7 Write `sub-actions/streamfog/index.md` (single file: lenses 3, outfits 3)
- [x] 7.8 Write `sub-actions/streamerbot/index.md` (single file: remote 3 — send-remote-signal, send-remote-trigger, wait-for-remote-signal)
- [x] 7.9 Write `sub-actions/speakerbot.md` (7) and `sub-actions/settings.md` (4) — flat files

## 8. Sub-actions — root index and coverage check

- [x] 8.1 Write `sub-actions/index.md`: links to all 14 category destinations; inline H2 — polypop (1: trigger-alert)
- [x] 8.2 Verify coverage: every entry in `file-map.md` is present exactly once across `sub-actions/` (350 entries, 45 files)

## 9. Triggers — twitch (129 entries, 15 files)

- [x] 9.1 Write `triggers/twitch/moderation.md` (25: automod-message-held, automod-message-updated, blocked-terms-added, blocked-terms-deleted, chat-cleared, chat-message-deleted, moderator-added, moderator-removed, permitted-terms-added, permitted-terms-deleted, shield-mode-begin, shield-mode-end, shoutout-created, suspicious-user-update, unban-request-approved, unban-request-created, unban-request-denied, user-banned, user-timed-out, user-unbanned, user-untimed-out, vip-added, vip-removed, warned-user, warning-acknowledged)
- [x] 9.2 Write `triggers/twitch/chat/index.md` (direct 7: bits-badge-tier, bot-whispers, cheer, first-words, message, watch-streak, whispers) with link to mode
- [x] 9.3 Write `triggers/twitch/chat/mode.md` (12: emote-mode-off, emote-mode-on, follower-mode-changed, follower-mode-off, follower-mode-on, slow-mode-changed, slow-mode-off, slow-mode-on, subscriber-mode-off, subscriber-mode-on, unique-mode-off, unique-mode-on)
- [x] 9.4 Write `triggers/twitch/shared-chat.md` (16: announcement, community-sub-gift, gift-paid-upgrade, message-deleted, pay-it-forward, prime-paid-upgrade, resub, session-begin, session-end, session-update, sub-gift, sub, user-banned, user-timed-out, user-unbanned, user-untimed-out)
- [x] 9.5 Write `triggers/twitch/connections.md` (9: bot-chat-connected, bot-chat-disconnected, broadcaster-authenticated, broadcaster-chat-connected, broadcaster-chat-disconnected, broadcaster-eventsub-connected, broadcaster-eventsub-disconnected, broadcaster-pubsub-connected, broadcaster-pubsub-disconnected)
- [x] 9.6 Write `triggers/twitch/subscriptions.md` (8: gift-bomb, gift-paid-upgrade, gift-subscription, pay-it-forward, prime-paid-upgrade, resubscription, sub-counter-rollover, subscription)
- [x] 9.7 Write `triggers/twitch/channel.md` (4: follow, stream-offline, stream-online, viewer-count-update), `charity.md` (4: completed, donation, progress, started), `emotes.md` (4: betterttv-emote-added, betterttv-emote-removed, seventv-emote-added, seventv-emote-removed), `general.md` (4: announcement, present-viewers, shoutout-received, stream-update)
- [x] 9.8 Write `triggers/twitch/guest-star.md` (4), `hype-train.md` (4: end, level-up, start, update), `polls.md` (5), `predictions.md` (5), `raid.md` (4: cancelled, raid, send, start)
- [x] 9.9 Write `triggers/twitch/index.md`: links to the 14 group files; inline H2 — ads (3), channel-goal (3), channel-power-ups (1), channel-reward (3), community-goal (2), pyramid (2)

## 10. Triggers — elgato (91 entries, 5 files)

- [x] 10.1 Write `triggers/elgato/camera-hub/webcam.md` (40: activated, anti-flicker-changed, ar-lens-changed, auto-exposure-disabled, auto-exposure-enabled, auto-focus-disabled, auto-focus-enabled, auto-white-balance-disabled, auto-white-balance-enabled, bitrate-changed, brightness-changed, contrast-changed, deactivated, device-orientation-changed, exposure-auto-lock-disabled, exposure-auto-lock-enabled, flash-disabled, flash-enabled, flipped, focus-changed, iso-changed, lens-changed, live-iso-changed, live-shutter-speed-changed, live-white-balance-changed, live-white-balance-tint-changed, mirrored, noise-reduction-disabled, noise-reduction-enabled, overscan-changed, pan-changed, saturation-changed, selected-webcam-changed, sharpness-changed, shutter-speed-changed, snapshot-taken, tilt-changed, white-balance-changed, white-balance-tint-changed, zoom-changed)
- [x] 10.2 Write `triggers/elgato/camera-hub/prompter.md` (26: auto-scroll-chapter-disabled, auto-scroll-chapter-enabled, auto-scroll-disabled, auto-scroll-enabled, background-color-changed, brightness-changed, channels-changed, connected, contrast-changed, crosshair-color-changed, crosshair-disabled, crosshair-enabled, crosshair-image-changed, disconnected, font-changed, font-color-changed, font-size-changed, horizontal-margin-changed, line-spacing-changed, mode-changed, opacity-changed, scroll-speed-changed, selected-channel-changed, selected-chapter-changed, selected-script-changed, vertical-margin-changed)
- [x] 10.3 Write `triggers/elgato/camera-hub/index.md` (inline H2 — camera-hub direct 2: connected, disconnected; links to webcam, prompter)
- [x] 10.4 Write `triggers/elgato/wave-link.md` (20: connected, disconnected, filter-added, filter-bypass-state-changed, filter-changed, filter-deleted, input-level-meter-changed, input-mute-changed, input-name-changed, input-volume-changed, microphone-balance-changed, microphone-gain-changed, microphone-mute-changed, microphone-output-volume-changed, microphone-setting-changed, output-level-meter-changed, output-mute-changed, output-switched, output-volume-changed, selected-output-changed)
- [x] 10.5 Write `triggers/elgato/index.md` (inline H2 — stream-deck 3: connected, disconnected, info; links to camera-hub, wave-link)

## 11. Triggers — integrations (90 entries, 11 files)

- [x] 11.1 Write `triggers/integrations/fourthwall.md` (13: donation, gift-draw-ended, gift-draw-started, gift-purchase, newsletter-subscribed, order-placed, order-updated, product-created, product-updated, subscription-changed, subscription-expired, subscription-purchased, thank-you-sent)
- [x] 11.2 Write `triggers/integrations/vtube-studio.md` (11: background-changed, connected, disconnected, hotkey-triggered, item-event, model-animation, model-clicked, model-configuration-changed, model-loaded, model-unloaded, tracking-status-changed)
- [x] 11.3 Write `triggers/integrations/crowdcontrol.md` (9: coin-exchange, effect-failure, effect-request, effect-success, game-session-end, game-session-start, timed-effect-ended, timed-effect-started, timed-effect-update)
- [x] 11.4 Write `triggers/integrations/tits/index.md` (inline H2 — tits direct 3: item-hit, trigger-activated, trigger-ended; link to connections) and `tits/connections.md` (5: connected, events-connected, events-disconnected, websocket-connected, websocket-disconnected)
- [x] 11.5 Write `triggers/integrations/ko-fi.md` (5: commission, donation, resubscription, shop-order, subscription), `patreon.md` (5: follow-created, follow-deleted, pledge-created, pledge-deleted, pledge-updated), `streamlabs.md` (5: charity-donation, connected, disconnected, donation, merchandise)
- [x] 11.6 Write `triggers/integrations/hyperateio.md` (4: connected, disconnected, heart-rate-pulse, twitch-clip-created), `streamelements.md` (4: connected, disconnected, merch, tip), `voicemod.md` (4: connected, disconnected, soundboard-changed, voice-loaded)
- [x] 11.7 Write `triggers/integrations/index.md`: links to the 10 group files; inline H2 — donordrive (3), pallygg (3), pulsoid (1), shopify (2), speakerbot (2), streamerbot-remote (3), streamloots (3), throne (3), tipeeestream (1), treatstream (1)

## 12. Triggers — remaining categories (11 files)

- [x] 12.1 Write `triggers/core/file-folder-watcher.md` (4: changed, created, deleted, renamed), `global-variables.md` (4: global-variable-created, global-variable-deleted, global-variable-updated, user-global-variable-updated), `groups.md` (5: added, cleared, removed, users-added, users-removed)
- [x] 12.2 Write `triggers/core/websocket/index.md` (inline H2 — client 3, custom-server 3) and `triggers/core/file-io/index.md` (inline H2 — file-tail 1)
- [x] 12.3 Write `triggers/core/index.md`: links to 4 group files; inline H2 — direct 3 (streamerbot-started, test, timed-actions) + commands (2), inputs (2), midi (1), processes (2), quotes (2), system (2), voice-control (2)
- [x] 12.4 Write `triggers/youtube/broadcast.md` (8: added, ended, monitoring-ended, monitoring-started, removed, started, statistics-updated, updated), `general.md` (7: new-sponsor, new-subscriber, present-viewers, sponsor-only-ended, sponsor-only-started, user-banned, user-timed-out), `chat.md` (4: first-words, message, super-chat, super-sticker)
- [x] 12.5 Write `triggers/youtube/index.md`: links to 3 group files; inline H2 — membership (3), polls (1)
- [x] 12.6 Write `triggers/kick/channel.md` (4: follow, stream-offline, stream-online, viewer-count-update), `subscriptions.md` (4: gift-subscription, mass-gift-subscription, resubscription, subscription)
- [x] 12.7 Write `triggers/kick/index.md`: links to 2 group files; inline H2 — channel-reward (1), chat (2), emotes (2), general (2), kicks (1), moderation (2)
- [x] 12.8 Write `triggers/obs-studio.md` (9), `triggers/meld-studio.md` (8), `triggers/streamlabs-desktop.md` (7) — flat files

## 13. Triggers — root index and coverage check

- [x] 13.1 Write `triggers/index.md`: links to all 10 category destinations; inline H2 — custom (2: code-event, custom)
- [x] 13.2 Verify coverage: every entry in `file-map.md` is present exactly once across `triggers/` (413 entries, 50 files)

## 14. Variables reference

- [x] 14.1 Write `variables.md`: system variables (syntax `%var%`, scope, usage examples)
- [x] 14.2 Document user-defined variables (creation via Set User Variable, naming, persistence) in `variables.md`
- [x] 14.3 Add cross-links from sub-action entries that expose output variables to the relevant `variables.md` sections (no duplication)

## 15. Refactor and navigation

- [x] 15.1 Refactor `actions-system.md` into conceptual intro (Action, Action Queue, folders, conditions) with "Browse the reference" links to `sub-actions/` and `triggers/`; relocate detailed per-action content into the reference files
- [x] 15.2 Update `overview.md` navigation links to point into the new reference folders
- [x] 15.3 Retarget any internal links that referenced old `actions-system.md` detail sections

## 16. Verification

- [x] 16.1 Run `node .opencode/scripts/validate-links.js` and fix broken links
- [x] 16.2 Run `node .opencode/scripts/rebuild-index.js` if `INDEX.md` needs the new files
- [x] 16.3 Audit: every entry across `sub-actions/` and `triggers/` has Location + Description fields (grep-based check)
- [x] 16.4 Verify all files have frontmatter (title, category, type, last-reviewed, source URL) per `tools/_TEMPLATE.md`
- [x] 16.5 Archive the change with `openspec archive`
