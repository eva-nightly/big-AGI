# Module: src/modules/persona [AI]

Provides the prompt mixing engine (pmix) and variable parameter registry to dynamically interpolate context-aware variables (such as dates, locale time, rendering capabilities, model-specific conditional prompts, and follow-up mixins) into persona and chat system prompt templates.

## Key files
- `src/modules/persona/pmix/pmix.parameters.ts`: Defines the prompt variable registry, parameter interfaces, and resolution logic for global, system, and model-level template variables.
- `src/modules/persona/pmix/pmix.ts`: Implements prompt template replacement logic and the high-level prompt mixer function connected to chat application settings.

## Public interface
- export interface PPromptMixerContext
- export type PPromptVariable
- export const PromptVariableRegistry: Record<string, PVariableDefinition>
- export function replacePromptVariables(template: string, context: PPromptMixerContext): string
- export function bareBonesPromptMixer(_template: string, assistantLlmId: DLLMId | undefined, customFields: Record<string, string> | undefined): string

## Dependencies
- ~/modules/aifn/auto-chat-follow-ups/autoChatFollowUps
- ~/common/stores/llms/llms.types
- ~/common/util/pwaUtils
- ../../../apps/chat/store-app-chat

## AI touchpoints [AI]
- `src/modules/persona/pmix/pmix.parameters.ts`
- `src/modules/persona/pmix/pmix.ts`

## Open questions
- _none_
