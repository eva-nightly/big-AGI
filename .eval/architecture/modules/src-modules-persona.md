# Module: src/modules/persona [AI]

Manages prompt variable substitution and prompt mixing (pmix) for personas and system instructions, dynamically injecting contextual data (dates, locale time, rendering capabilities, model-specific directives, and UI mixins) based on environment and active LLM models.

## Key files
- `src/modules/persona/pmix/pmix.parameters.ts`: Defines the prompt variable registry, scopes, dependency requirements, and replacement logic for supported prompt templates (e.g., date/time, rendering capabilities, model conditional content).
- `src/modules/persona/pmix/pmix.ts`: Provides functions (replacePromptVariables and bareBonesPromptMixer) to parse prompt templates, resolve variable dependencies, append mixins, and perform regex/string substitutions against application context.

## Public interface
- replacePromptVariables(template: string, context: PPromptMixerContext): string
- bareBonesPromptMixer(_template: string, assistantLlmId: DLLMId | undefined, customFields?: Record<string, string>): string
- PromptVariableRegistry: Record<string, PVariableDefinition>
- PPromptMixerContext
- PPromptVariable

## Dependencies
- ~/common/stores/llms/llms.types
- ~/common/util/pwaUtils
- ~/modules/aifn/auto-chat-follow-ups/autoChatFollowUps
- ../../../apps/chat/store-app-chat

## AI touchpoints [AI]
- `src/modules/persona/pmix/pmix.parameters.ts`
- `src/modules/persona/pmix/pmix.ts`

## Open questions
- _none_
