# Module: src [AI]

Defines predefined AI system personas (system purposes) with their corresponding system prompt templates, starter prompts, metadata, and voice configurations.

## Key files
- `src/data.ts`: Defines SystemPurpose types, default persona constants, and the catalog of system purpose personas including prompt templates and voice IDs.

## Public interface
- type SystemPurposeId = 'Catalyst' | 'Custom' | 'Designer' | 'Developer' | 'DeveloperPreview' | 'Executive' | 'Generic' | 'Scientist' | 'YouTubeTranscriber'
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
