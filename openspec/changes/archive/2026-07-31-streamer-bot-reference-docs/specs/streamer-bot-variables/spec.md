# streamer-bot-variables

## ADDED Requirements

### Requirement: System variables reference
The variables reference SHALL document Streamer.bot's built-in system variables (e.g. `%user%`, `%userId%`, `%broadcaster%`, `%targetUser%`), including their syntax and scope.

#### Scenario: System variable documented
- **WHEN** a reader looks up a system variable
- **THEN** they find its exact syntax (including `%` delimiters), what it resolves to, and in which contexts it is available

#### Scenario: Syntax examples included
- **WHEN** a system variable is documented
- **THEN** the entry shows at least one concrete usage example

### Requirement: User-defined variables reference
The variables reference SHALL document user-defined variables — how they are created (e.g. via the Set User Variable sub-action), their naming rules, and how they persist.

#### Scenario: Create and read explained
- **WHEN** a reader wants to store a custom value
- **THEN** the reference explains how to create a user variable and how to read it back with `%variableName%` syntax

#### Scenario: Scope and persistence described
- **WHEN** a reader creates a user variable
- **THEN** the reference states whether the value is global, per-user, or per-action-queue, and whether it survives restarts

### Requirement: Cross-reference to action entries
The variables reference SHALL point back to the sub-action reference for actions that expose output variables, instead of duplicating their content.

#### Scenario: No duplicate variable listings
- **WHEN** a sub-action exposes an output variable that is already covered in `variables.md`
- **THEN** the sub-action entry links to the variables reference rather than redefining it

#### Scenario: Variable links resolve
- **WHEN** a reader follows a link from a sub-action entry to `variables.md`
- **THEN** the referenced section exists
