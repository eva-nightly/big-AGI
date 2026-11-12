# Module: src [AI]

Defines AI persona definitions (system purposes), system prompts with templated placeholders, metadata, UI symbols, example prompts, call starters, and default voice configurations for the chat workspace.

## Key files
- `src/data.ts`: Exports system purpose definitions, default purpose configuration, and type definitions for system personas, voice presets, and starter prompts.

## Public interface
- type SystemPurposeId
- const defaultSystemPurposeId: SystemPurposeId
- type SystemPurposeData
- type SystemPurposeExample
- const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData }

## Dependencies
- react

## AI touchpoints [AI]
- `src/data.ts`

## Open questions
- _none_
