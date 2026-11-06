# Module: src [AI]

Defines built-in persona definitions (system purposes) including system prompts, prompt placeholders, UI symbols, example queries, voice configurations, and starter call phrases.

## Key files
- `src/data.ts`: Stores default AI persona definitions and configuration metadata (system messages, prompt templates, symbols, voice IDs, and examples) across predefined roles such as Generic, Developer, Scientist, Catalyst, Executive, Designer, YouTubeTranscriber, and Custom.

## Public interface
- export type SystemPurposeId
- export const defaultSystemPurposeId: SystemPurposeId
- export type SystemPurposeData
- export type SystemPurposeExample
- export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData }

## Dependencies
- react

## AI touchpoints [AI]
- `src/data.ts`

## Open questions
- _none_
