# Module: src [AI]

Defines persona configurations (system prompts, prompt templates, example queries, UI metadata, and TTS voice bindings) for AI chat interactions.

## Key files
- `src/data.ts`: Exports persona system prompt templates, voice identifiers, example prompts, and metadata for predefined and custom personas.

## Public interface
- type SystemPurposeId
- type SystemPurposeData
- type SystemPurposeExample
- const defaultSystemPurposeId: SystemPurposeId
- const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData }

## Dependencies
- react

## AI touchpoints [AI]
- `src/data.ts`

## Open questions
- _none_
