# File Map — Sub-Actions

Generated from the official docs index (llms.txt). Rule: groups with ≤3 entries merge as H2 sections into the category index.

## root/index.md

Links to all category destinations. Inline H2 sections:
- polypop (1): trigger-alert

## sub-actions/core/actions.md

- **actions** (7): get-action-group-state, get-action-state, run-action, set-action-group-state, set-action-state, set-sub-action-state, set-sub-action-weight

## sub-actions/core/commands.md

- **commands** (5): get-command-group-state, get-command-state, get-commands, set-command-group-state, set-command-state

## sub-actions/core/file-io.md

- **file-io** (6): file-exists, folder-exists, read-lines-from-file, read-random-line-from-file, read-specific-line-from-file, write-to-file

## sub-actions/core/globals.md

- **globals** (4): clear-non-persisted-globals, clear-non-persisted-user-globals, global-get, global-set

## sub-actions/core/logic.md

- **logic** (6): break, get-input, get-random-number, if-else, switch, while

## sub-actions/core/quotes.md

- **quotes** (4): add-quote, delete-quote, get-quote-count, get-quote

## sub-actions/core/sounds.md

- **sounds** (4): play-sound-from-folder, play-sound, stop-all-sound-playback, stop-sound-playback

## sub-actions/core/index.md

Links: `sub-actions/core/actions.md`, `sub-actions/core/commands.md`, `sub-actions/core/file-io.md`, `sub-actions/core/globals.md`, `sub-actions/core/logic.md`, `sub-actions/core/quotes.md`, `sub-actions/core/sounds.md`

- **core** (1): delay
- **action-queues** (3): clear-action-queue, set-action-queue-blocking-state, set-action-queue-pause-state
- **arguments** (1): set-argument
- **csharp** (2): execute-csharp-code, execute-csharp-method
- **file-tail** (1): set-file-tail-state
- **midi** (3): control-change, generic-event, note-on
- **misc** (2): comment, log
- **network** (2): fetch-url, udp-broadcast
- **signals** (2): send-local-signal, wait-for-local-signal
- **system** (3): keyboard-press, run-a-program, toast-notification
- **timers** (1): set-timer-state
- **triggers** (2): custom-event-trigger, set-trigger-state
- **users** (1): clear-users-from-group
- **voice-control** (2): set-voice-control-command-state, set-voice-control-command

## sub-actions/elgato/camera-hub/epoccam.md

- **epoccam** (4): set-ar-lens, set-bitrate, set-camera, set-flash-mode

## sub-actions/elgato/camera-hub/prompter.md

- **prompter** (16): fast-forward-chapter, get-selected-script, rewind-chapter, set-auto-scroll-state, set-brightness, set-crosshair-image, set-crosshair-images, set-crosshair, set-font-size, set-font, set-horizontal-margin, set-line-spacing, set-mode, set-opacity, set-scripts, set-vertical-margin

## sub-actions/elgato/camera-hub/webcam.md

- **webcam** (14): set-anti-flicker, set-auto-white-balance, set-brightness, set-contrast, set-dynamic-range, set-focus, set-noise-reduction, set-pan, set-saturation, set-sharpness, set-tilt, set-white-balance-tint, set-white-balance, set-zoom

## sub-actions/elgato/camera-hub/index.md

Links: `sub-actions/elgato/camera-hub/epoccam.md`, `sub-actions/elgato/camera-hub/prompter.md`, `sub-actions/elgato/camera-hub/webcam.md`


## sub-actions/elgato/stream-deck.md

- **stream-deck** (7): set-background, set-state, set-title, set-value, show-alert, show-ok, toggle-state

## sub-actions/elgato/wave-link.md

- **wave-link** (16): get-filter-state, get-input-information, get-microphone-information, get-output-volumes, get-selected-output, mute-input, mute-microphone, mute-output, set-filter-bypass-state, set-filter-state, set-input-volume, set-microphone-balance, set-microphone-gain, set-microphone-output-volume, set-output-monitor-device, set-output-volume

## sub-actions/elgato/index.md

Links: `sub-actions/elgato/camera-hub/index.md`, `sub-actions/elgato/stream-deck.md`, `sub-actions/elgato/wave-link.md`


## sub-actions/integrations/tits.md

- **tits** (6): activate-trigger-by-name, activate-trigger, throw-item-by-name, throw-item, throw-items-by-name, throw-items

## sub-actions/integrations/voicemod.md

- **voicemod** (12): get-current-voice, play-sound, select-random-voice, select-voice-by-id, select-voice-by-name, select-voice, set-background-effect-state, set-censor-state, set-hear-my-voice-state, set-mute-state, set-voice-changer-state, stop-all-sounds

## sub-actions/integrations/vtube-studio.md

- **vtube-studio** (10): color-tint, get-current-model, load-model-by-name, load-model, move-model, reset-all-color-tints, send-raw-request, set-expression-state, trigger-hotkey-by-name, trigger-hotkey

## sub-actions/integrations/index.md

Links: `sub-actions/integrations/tits.md`, `sub-actions/integrations/voicemod.md`, `sub-actions/integrations/vtube-studio.md`

- **discord** (1): basic-webhook
- **ifttt** (2): notification-advanced, notification-basic
- **lumia-stream** (3): send-command, set-color, set-to-default
- **mtion** (2): get-active-clubhouse, send-trigger
- **pronouns** (1): add-pronouns-for-user

## sub-actions/kick/moderation.md

- **moderation** (4): ban-user, timeout-user, unban-user, untimeout-user

## sub-actions/kick/index.md

Links: `sub-actions/kick/moderation.md`

- **channel** (2): set-channel-category, set-channel-title
- **chat** (2): reply-to-message, send-message-to-channel
- **user-groups** (3): add-user-to-group, remove-user-from-group, user-in-group
- **user** (3): add-broadcaster-information, add-random-users, get-user-info-for-target

## sub-actions/meld-studio/index.md

- **meld-studio** (6): get-current-scene, get-status, recording, show-scene, streaming, take-screenshot
- **effects** (1): set-effect-enabled-state
- **layers** (1): set-layer-visibility-state
- **tracks** (2): set-layer-track-muted-state, set-track-muted-state

## sub-actions/obs-studio/scenes.md

- **scenes** (4): get-scene-item-properties, hide-scenes-sources, set-random-scene-source-visible, set-scene-filter-state

## sub-actions/obs-studio/sources.md

- **sources** (14): flip-source, hide-groups-sources, hide-sources-filters, rotate-source, set-browser-source-url, set-color-source-color, set-gdi-text, set-image-source-file, set-media-source-file, set-media-state, set-source-audio-track-state, set-source-filter-state, set-source-mute-state, set-source-visibility-state

## sub-actions/obs-studio/index.md

Links: `sub-actions/obs-studio/scenes.md`, `sub-actions/obs-studio/sources.md`

- **obs-studio** (8): create-record-chapter, get-current-scene, get-status, raw, recording, set-active-scene, streaming, take-screenshot
- **filters** (1): set-state-of-a-random-filter
- **groups** (1): set-random-group-source-visible
- **replay** (1): set-replay-buffer-state

## sub-actions/settings.md

- **settings** (4): pick-color, reset-credits, reset-first-words, set-voice-control-input

## sub-actions/speakerbot.md

- **speakerbot** (7): activate-voicegate-profile, clear-pending, set-enabled-state, set-paused-state, speak-udp, speak, stop-speaking

## sub-actions/streamerbot/index.md

- **remote** (3): send-remote-signal, send-remote-trigger, wait-for-remote-signal

## sub-actions/streamfog/index.md

- **lenses** (3): activate-lens-by-name, activate-lens, deactivate-lens
- **outfits** (3): activate-outfit-by-name, activate-outfit, reset-look

## sub-actions/streamlabs-desktop/sources.md

- **sources** (8): flip-source, hide-sources-filters, rotate-source, set-browser-source-url, set-gdi-text, set-source-filter-state, set-source-mute-state, set-source-visibility-state

## sub-actions/streamlabs-desktop/index.md

Links: `sub-actions/streamlabs-desktop/sources.md`

- **streamlabs-desktop** (2): recording, streaming
- **filters** (1): set-state-of-a-random-filter
- **groups** (2): hide-groups-sources, set-random-group-source-visible
- **scenes** (3): get-current-scene, set-active-scene, set-scene-filter-state

## sub-actions/twitch/ads.md

- **ads** (4): get-ad-schedule, get-pre-roll-free-time, run-commercial, snooze-ad

## sub-actions/twitch/channel.md

- **channel** (6): add-viewer-count, create-clip, create-stream-marker, set-channel-branded-content, set-channel-game, set-channel-title

## sub-actions/twitch/chat.md

- **chat** (8): clear-chat-messages, get-pinned-chat-message, pin-chat-message, reply-to-message, send-announcement-to-channel, send-message-to-channel, unpin-chat-message, update-pinned-chat-message-duration

## sub-actions/twitch/guest-star.md

- **guest-star** (12): assign-guest-star-slot, create-guest-star-session, delete-guest-star-invite, delete-guest-star-slot, end-guest-star-session, get-channel-guest-star-settings, get-guest-star-invites, get-guest-star-session, send-guest-star-invite, update-channel-guest-star-settings, update-guest-star-slot-settings, update-guest-star-slot

## sub-actions/twitch/moderation/chat-modes.md

- **chat-modes** (4): emote-only, follow-mode, slow-mode, subscriber-only

## sub-actions/twitch/moderation/index.md

Links: `sub-actions/twitch/moderation/chat-modes.md`

- **moderation** (10): add-moderator, add-vip, ban-user, remove-moderator, remove-vip, send-shoutout, timeout-user, unban-user, untimeout-user, warn-user
- **shield** (2): get-shield-mode-status, update-shield-mode-status

## sub-actions/twitch/polls.md

- **polls** (4): archive-active-poll, create-poll, get-active-poll, terminate-active-poll

## sub-actions/twitch/predictions.md

- **predictions** (6): cancel-active-prediction, create-prediction, get-active-prediction, lock-active-prediction, resolve-last-prediction-by-title, resolve-last-prediction

## sub-actions/twitch/rewards.md

- **rewards** (17): configure-rewards, get-reward-info, reset-reward-counter, reset-reward-user-counters, set-background-color, set-cost, set-enabled-state, set-global-cooldown, set-group-enabled-state, set-group-paused-state, set-max-per-stream, set-max-per-user-per-stream, set-paused-state, set-prompt, set-title, update-redemption-status, update

## sub-actions/twitch/tags.md

- **tags** (4): add-channel-tag, clear-channel-tags, remove-channel-tag, set-channel-tags

## sub-actions/twitch/user.md

- **user** (5): add-broadcaster-information, add-present-user, add-random-users, get-team-info-for-target, get-user-info-for-target

## sub-actions/twitch/index.md

Links: `sub-actions/twitch/ads.md`, `sub-actions/twitch/channel.md`, `sub-actions/twitch/chat.md`, `sub-actions/twitch/guest-star.md`, `sub-actions/twitch/moderation/index.md`, `sub-actions/twitch/polls.md`, `sub-actions/twitch/predictions.md`, `sub-actions/twitch/rewards.md`, `sub-actions/twitch/tags.md`, `sub-actions/twitch/user.md`

- **charity** (1): get-latest-charity-campaign
- **followers** (3): get-follow-age-info-for-target, get-follower-count, get-latest-follower
- **raid** (2): cancel-raid, start-raid
- **sub-counter** (2): get-twitch-sub-counter-count, set-twitch-sub-counter-count
- **subscribers** (2): get-latest-subscriber, get-subscriber-count
- **user-groups** (3): add-user-to-group, remove-user-from-group, user-in-group

## sub-actions/youtube/index.md

- **youtube** (4): send-message-to-channel, set-description, set-title-and-description, set-title
- **moderation** (2): ban-user, timeout-user
- **user-groups** (3): add-user-to-group, remove-user-from-group, user-in-group


# File Map — Triggers

Generated from the official docs index (llms.txt). Rule: groups with ≤3 entries merge as H2 sections into the category index.

## root/index.md

Links to all category destinations. Inline H2 sections:
- custom (2): code-event, custom

## triggers/core/file-folder-watcher.md

- **file-folder-watcher** (4): changed, created, deleted, renamed

## triggers/core/file-io/index.md

- **file-tail** (1): changed

## triggers/core/global-variables.md

- **global-variables** (4): global-variable-created, global-variable-deleted, global-variable-updated, user-global-variable-updated

## triggers/core/groups.md

- **groups** (5): added, cleared, removed, users-added, users-removed

## triggers/core/websocket/index.md

- **client** (3): websocket-client-closed, websocket-client-message, websocket-client-opened
- **custom-server** (3): connection-closed, connection-opened, message

## triggers/core/index.md

Links: `triggers/core/file-folder-watcher.md`, `triggers/core/file-io/index.md`, `triggers/core/global-variables.md`, `triggers/core/groups.md`, `triggers/core/websocket/index.md`

- **core** (3): streamerbot-started, test, timed-actions
- **commands** (2): command-cooldown, command-triggered
- **inputs** (2): key-press, mouse-click
- **midi** (1): message
- **processes** (2): process-started, process-stopped
- **quotes** (2): quote-added, show-quote
- **system** (2): clipboard-changed, toast-activation
- **voice-control** (2): command, dictation

## triggers/elgato/camera-hub/prompter.md

- **prompter** (26): auto-scroll-chapter-disabled, auto-scroll-chapter-enabled, auto-scroll-disabled, auto-scroll-enabled, background-color-changed, brightness-changed, channels-changed, connected, contrast-changed, crosshair-color-changed, crosshair-disabled, crosshair-enabled, crosshair-image-changed, disconnected, font-changed, font-color-changed, font-size-changed, horizontal-margin-changed, line-spacing-changed, mode-changed, opacity-changed, scroll-speed-changed, selected-channel-changed, selected-chapter-changed, selected-script-changed, vertical-margin-changed

## triggers/elgato/camera-hub/webcam.md

- **webcam** (40): activated, anti-flicker-changed, ar-lens-changed, auto-exposure-disabled, auto-exposure-enabled, auto-focus-disabled, auto-focus-enabled, auto-white-balance-disabled, auto-white-balance-enabled, bitrate-changed, brightness-changed, contrast-changed, deactivated, device-orientation-changed, exposure-auto-lock-disabled, exposure-auto-lock-enabled, flash-disabled, flash-enabled, flipped, focus-changed, iso-changed, lens-changed, live-iso-changed, live-shutter-speed-changed, live-white-balance-changed, live-white-balance-tint-changed, mirrored, noise-reduction-disabled, noise-reduction-enabled, overscan-changed, pan-changed, saturation-changed, selected-webcam-changed, sharpness-changed, shutter-speed-changed, snapshot-taken, tilt-changed, white-balance-changed, white-balance-tint-changed, zoom-changed

## triggers/elgato/camera-hub/index.md

Links: `triggers/elgato/camera-hub/prompter.md`, `triggers/elgato/camera-hub/webcam.md`

- **camera-hub** (2): connected, disconnected

## triggers/elgato/wave-link.md

- **wave-link** (20): connected, disconnected, filter-added, filter-bypass-state-changed, filter-changed, filter-deleted, input-level-meter-changed, input-mute-changed, input-name-changed, input-volume-changed, microphone-balance-changed, microphone-gain-changed, microphone-mute-changed, microphone-output-volume-changed, microphone-setting-changed, output-level-meter-changed, output-mute-changed, output-switched, output-volume-changed, selected-output-changed

## triggers/elgato/index.md

Links: `triggers/elgato/camera-hub/index.md`, `triggers/elgato/wave-link.md`

- **stream-deck** (3): connected, disconnected, info

## triggers/integrations/crowdcontrol.md

- **crowdcontrol** (9): coin-exchange, effect-failure, effect-request, effect-success, game-session-end, game-session-start, timed-effect-ended, timed-effect-started, timed-effect-update

## triggers/integrations/fourthwall.md

- **fourthwall** (13): donation, gift-draw-ended, gift-draw-started, gift-purchase, newsletter-subscribed, order-placed, order-updated, product-created, product-updated, subscription-changed, subscription-expired, subscription-purchased, thank-you-sent

## triggers/integrations/hyperateio.md

- **hyperateio** (4): connected, disconnected, heart-rate-pulse, twitch-clip-created

## triggers/integrations/ko-fi.md

- **ko-fi** (5): commission, donation, resubscription, shop-order, subscription

## triggers/integrations/patreon.md

- **patreon** (5): follow-created, follow-deleted, pledge-created, pledge-deleted, pledge-updated

## triggers/integrations/streamelements.md

- **streamelements** (4): connected, disconnected, merch, tip

## triggers/integrations/streamlabs.md

- **streamlabs** (5): charity-donation, connected, disconnected, donation, merchandise

## triggers/integrations/tits/connections.md

- **connections** (5): connected, events-connected, events-disconnected, websocket-connected, websocket-disconnected

## triggers/integrations/tits/index.md

Links: `triggers/integrations/tits/connections.md`

- **tits** (3): item-hit, trigger-activated, trigger-ended

## triggers/integrations/voicemod.md

- **voicemod** (4): connected, disconnected, soundboard-changed, voice-loaded

## triggers/integrations/vtube-studio.md

- **vtube-studio** (11): background-changed, connected, disconnected, hotkey-triggered, item-event, model-animation, model-clicked, model-configuration-changed, model-loaded, model-unloaded, tracking-status-changed

## triggers/integrations/index.md

Links: `triggers/integrations/crowdcontrol.md`, `triggers/integrations/fourthwall.md`, `triggers/integrations/hyperateio.md`, `triggers/integrations/ko-fi.md`, `triggers/integrations/patreon.md`, `triggers/integrations/streamelements.md`, `triggers/integrations/streamlabs.md`, `triggers/integrations/tits/index.md`, `triggers/integrations/voicemod.md`, `triggers/integrations/vtube-studio.md`

- **donordrive** (3): donation, incentive, profile-updated
- **pallygg** (3): campaign-tip, connected, disconnected
- **pulsoid** (1): heart-rate-pulse
- **shopify** (2): order-created, order-paid
- **speakerbot** (2): connected, disconnected
- **streamerbot-remote** (3): remote-instance-connected, remote-instance-disconnected, remote-instance-trigger
- **streamloots** (3): card-redeemed, pack-gifted, pack-purchased
- **throne** (3): contribution-purchased, gift-crowdfunded, gift-purchased
- **tipeeestream** (1): donation
- **treatstream** (1): treat

## triggers/kick/channel.md

- **channel** (4): follow, stream-offline, stream-online, viewer-count-update

## triggers/kick/subscriptions.md

- **subscriptions** (4): gift-subscription, mass-gift-subscription, resubscription, subscription

## triggers/kick/index.md

Links: `triggers/kick/channel.md`, `triggers/kick/subscriptions.md`

- **channel-reward** (1): reward-redemption
- **chat** (2): first-words, message
- **emotes** (2): seventv-emote-added, seventv-emote-removed
- **general** (2): channel-update, present-viewers
- **kicks** (1): gifted
- **moderation** (2): user-banned, user-timed-out

## triggers/meld-studio.md

- **meld-studio** (8): connected, disconnected, event, recording-started, recording-stopped, scene-changed, streaming-started, streaming-stopped

## triggers/obs-studio.md

- **obs-studio** (9): connected, disconnected, event, recording-started, recording-stopped, scene-changed, streaming-started, streaming-stopped, vendor-event

## triggers/streamlabs-desktop.md

- **streamlabs-desktop** (7): connected, disconnected, recording-started, recording-stopped, scene-changed, streaming-started, streaming-stopped

## triggers/twitch/channel.md

- **channel** (4): follow, stream-offline, stream-online, viewer-count-update

## triggers/twitch/charity.md

- **charity** (4): completed, donation, progress, started

## triggers/twitch/chat/mode.md

- **mode** (12): emote-mode-off, emote-mode-on, follower-mode-changed, follower-mode-off, follower-mode-on, slow-mode-changed, slow-mode-off, slow-mode-on, subscriber-mode-off, subscriber-mode-on, unique-mode-off, unique-mode-on

## triggers/twitch/chat/index.md

Links: `triggers/twitch/chat/mode.md`

- **chat** (7): bits-badge-tier, bot-whispers, cheer, first-words, message, watch-streak, whispers

## triggers/twitch/connections.md

- **connections** (9): bot-chat-connected, bot-chat-disconnected, broadcaster-authenticated, broadcaster-chat-connected, broadcaster-chat-disconnected, broadcaster-eventsub-connected, broadcaster-eventsub-disconnected, broadcaster-pubsub-connected, broadcaster-pubsub-disconnected

## triggers/twitch/emotes.md

- **emotes** (4): betterttv-emote-added, betterttv-emote-removed, seventv-emote-added, seventv-emote-removed

## triggers/twitch/general.md

- **general** (4): announcement, present-viewers, shoutout-received, stream-update

## triggers/twitch/guest-star.md

- **guest-star** (4): guest-update, session-begin, session-end, settings-update

## triggers/twitch/hype-train.md

- **hype-train** (4): end, level-up, start, update

## triggers/twitch/moderation.md

- **moderation** (25): automod-message-held, automod-message-updated, blocked-terms-added, blocked-terms-deleted, chat-cleared, chat-message-deleted, moderator-added, moderator-removed, permitted-terms-added, permitted-terms-deleted, shield-mode-begin, shield-mode-end, shoutout-created, suspicious-user-update, unban-request-approved, unban-request-created, unban-request-denied, user-banned, user-timed-out, user-unbanned, user-untimed-out, vip-added, vip-removed, warned-user, warning-acknowledged

## triggers/twitch/polls.md

- **polls** (5): poll-archived, poll-completed, poll-created, poll-terminated, poll-updated

## triggers/twitch/predictions.md

- **predictions** (5): prediction-canceled, prediction-completed, prediction-created, prediction-locked, prediction-updated

## triggers/twitch/raid.md

- **raid** (4): cancelled, raid, send, start

## triggers/twitch/shared-chat.md

- **shared-chat** (16): announcement, community-sub-gift, gift-paid-upgrade, message-deleted, pay-it-forward, prime-paid-upgrade, resub, session-begin, session-end, session-update, sub-gift, sub, user-banned, user-timed-out, user-unbanned, user-untimed-out

## triggers/twitch/subscriptions.md

- **subscriptions** (8): gift-bomb, gift-paid-upgrade, gift-subscription, pay-it-forward, prime-paid-upgrade, resubscription, sub-counter-rollover, subscription

## triggers/twitch/index.md

Links: `triggers/twitch/channel.md`, `triggers/twitch/charity.md`, `triggers/twitch/chat/index.md`, `triggers/twitch/connections.md`, `triggers/twitch/emotes.md`, `triggers/twitch/general.md`, `triggers/twitch/guest-star.md`, `triggers/twitch/hype-train.md`, `triggers/twitch/moderation.md`, `triggers/twitch/polls.md`, `triggers/twitch/predictions.md`, `triggers/twitch/raid.md`, `triggers/twitch/shared-chat.md`, `triggers/twitch/subscriptions.md`

- **ads** (3): ad-mid-roll, ad-run, upcoming-ad
- **channel-goal** (3): goal-begin, goal-end, goal-progress
- **channel-power-ups** (1): custom-power-up-redemption
- **channel-reward** (3): automatic-reward-redemption, reward-redemption-updated, reward-redemption
- **community-goal** (2): contribution, ended
- **pyramid** (2): broken, success

## triggers/youtube/broadcast.md

- **broadcast** (8): added, ended, monitoring-ended, monitoring-started, removed, started, statistics-updated, updated

## triggers/youtube/chat.md

- **chat** (4): first-words, message, super-chat, super-sticker

## triggers/youtube/general.md

- **general** (7): new-sponsor, new-subscriber, present-viewers, sponsor-only-ended, sponsor-only-started, user-banned, user-timed-out

## triggers/youtube/index.md

Links: `triggers/youtube/broadcast.md`, `triggers/youtube/chat.md`, `triggers/youtube/general.md`

- **membership** (3): gift-membership-received, gift, member-milestone
- **polls** (1): poll-closed

