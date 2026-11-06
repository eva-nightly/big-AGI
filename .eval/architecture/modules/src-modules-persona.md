# Module: src/modules/persona [AI]

Manages prompt variable templating and prompt mixing (pmix) for AI personas and system prompts, replacing dynamic placeholders (dates, rendering capabilities, model-specific conditional reasoning prompts, and auto-suggest mixins) with runtime context.

## Key files
- `src/modules/persona/pmix/pmix.parameters.ts`: Defines the registry of prompt template variables (e.g., date/time, rendering instructions, LLM conditional flags) along with their replacement functions and dependency requirements.
- `src/modules/persona/pmix/pmix.ts`: Provides prompt compilation functions (replacePromptVariables, bareBonesPromptMixer) that resolve template tokens against device context, LLM capabilities, and chat settings.

## Public interface
- PromptVariableRegistry
- PPromptMixerContext
- PPromptVariable
- replacePromptVariables(template: string, context: PPromptMixerContext): string
- bareBonesPromptMixer(_template: string, assistantLlmId: DLLMId | undefined, customFields?: Record<string, string>): string

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
