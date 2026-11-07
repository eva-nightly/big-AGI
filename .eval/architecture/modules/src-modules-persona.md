# Module: src/modules/persona [AI]

Provides the Prompt Mixer (pmix) engine for interpolating dynamic context, locale/time parameters, rendering instructions, and model-specific capability flags into persona and system prompt templates.

## Key files
- `src/modules/persona/pmix/pmix.parameters.ts`: Defines prompt variables, parameter scopes, dependency criteria, and replacement logic for templates.
- `src/modules/persona/pmix/pmix.ts`: Implements prompt template variable substitution and context injection through bareBonesPromptMixer.

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
