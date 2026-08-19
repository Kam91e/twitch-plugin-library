## ADDED Requirements

### Requirement: Plugin doc has YAML frontmatter
Every plugin documentation file SHALL begin with YAML frontmatter containing: `title` (string), `category` (string, one of the 8 Twitch categories), `subcategory` (string), `tags` (list of strings), `price` (string: Free/Paid/Freemium), `url` (string, Twitch extension URL), `screenshots` (list of external URL strings), `last-reviewed` (date string), `audience` (list of strings describing which streamer types the plugin is for, e.g. `variety`, `esports`, `beginners`, `creative`, `music`, `just-chatting`).

#### Scenario: Valid frontmatter
- **WHEN** a plugin documentation file is created
- **THEN** it includes all required frontmatter fields with valid values

#### Scenario: Frontmatter is parseable
- **WHEN** a tool reads the plugin file
- **THEN** the YAML frontmatter parses without errors

#### Scenario: Audience field describes streamer types
- **WHEN** a streamer reads the plugin doc
- **THEN** the `audience` field tells them whether this plugin is relevant for their type of stream

### Requirement: Plugin doc has a tagline
Immediately after frontmatter, the file SHALL have a level-1 heading with the plugin name, followed by a blockquote tagline (one sentence describing what the plugin does).

#### Scenario: Tagline present
- **WHEN** a user opens a plugin doc
- **THEN** they see the plugin name as H1 and a brief tagline as a blockquote

### Requirement: Plugin doc has Quick Start section
The file SHALL contain a `## Quick Start` section with step-by-step instructions for installation and first use, written for beginner streamers.

#### Scenario: Beginner reads Quick Start
- **WHEN** a beginner streamer reads the Quick Start section
- **THEN** they can install and activate the plugin in under 2 minutes by following the steps

### Requirement: Plugin doc has Features section
The file SHALL contain a `## Features` section with a bullet list of the plugin's key capabilities.

#### Scenario: User reviews features
- **WHEN** a user reads the Features section
- **THEN** they understand what the plugin does from scanning the bullet list

### Requirement: Plugin doc has Configuration section
The file SHALL contain a `## Configuration` section describing detailed settings, options, and variables for power users.

#### Scenario: Power user configures plugin
- **WHEN** an experienced streamer reads the Configuration section
- **THEN** they find detailed options to fine-tune the plugin behavior

### Requirement: Plugin doc has Tips & Tricks section
The file SHALL contain a `## Tips & Tricks` section with pro tips, hidden features, and cross-plugin integration advice.

#### Scenario: User finds advanced usage
- **WHEN** a user reads the Tips & Tricks section
- **THEN** they learn at least one non-obvious way to use the plugin

### Requirement: Plugin doc has Alternatives section
The file SHALL contain an `## Alternatives` section with links to related plugins in the same category/subcategory, each with a brief note on when to choose that alternative.

#### Scenario: User compares plugins
- **WHEN** a user reads the Alternatives section
- **THEN** they see links to similar plugins with guidance on which to choose for different needs

### Requirement: Sections appear in fixed order
The sections SHALL appear in this order: Quick Start, Features, Configuration, Tips & Tricks, Alternatives.

#### Scenario: Consistent ordering
- **WHEN** a user opens any plugin documentation file
- **THEN** the sections appear in the same predictable order across all files
