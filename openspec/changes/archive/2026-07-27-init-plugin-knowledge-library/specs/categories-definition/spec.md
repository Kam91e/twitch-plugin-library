## ADDED Requirements

### Requirement: categories.md lists all 8 Twitch categories
The categories.md SHALL list all 8 official Twitch Extension categories with their names and official descriptions. The categories SHALL be: Extensions for Games, Schedule & Countdowns, Loyalty and Recognition, Streamer Tools, Viewer Engagement, Music, Polling & Voting, Games in Extensions.

#### Scenario: User reads category descriptions
- **WHEN** a user opens categories.md
- **THEN** they see all 8 categories with descriptions matching Twitch's official definitions

### Requirement: categories.md lists subcategories per category
Each category in categories.md SHALL list its subcategories with a brief description for each. Subcategories SHALL be extensible — new ones can be added freely.

#### Scenario: Agent checks available subcategories
- **WHEN** an agent needs to determine where a plugin belongs
- **THEN** categories.md provides a complete list of existing subcategories per category

#### Scenario: New subcategory added
- **WHEN** an agent creates a new subcategory
- **THEN** categories.md is updated with the new subcategory name and description

### Requirement: categories.md includes subcategory-to-folder mapping
Each subcategory entry in categories.md SHALL indicate the corresponding directory path where plugin docs for that subcategory are stored.

#### Scenario: Directory navigation
- **WHEN** a user or agent reads a subcategory entry
- **THEN** they know which folder to look in for plugins in that subcategory

### Requirement: categories.md serves as agent reference
categories.md SHALL be the single source of truth for the category/subcategory taxonomy. Agents MUST read it before assigning a category to a new plugin.

#### Scenario: Agent consults categories before writing
- **WHEN** an agent begins researching a plugin
- **THEN** it reads categories.md first to understand the available category and subcategory structure
