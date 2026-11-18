# Module: src [AI]

Defines configuration data, system prompt templates, example prompts, call starters, and ElevenLabs voice identifiers for AI personas (system purposes) used across the application.

## Key files
- `src/data.ts`: Declares persona identifiers, types, default settings, and dictionary of system purpose configurations with prompt templates.

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
