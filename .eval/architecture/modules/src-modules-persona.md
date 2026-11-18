# Module: src/modules/persona [AI]

Provides the Prompt Mixer (pmix) engine and parameter registry for dynamic variable expansion and context injection within persona and system prompts (e.g., date/time, rendering instructions, and model capability adjustments).

## Key files
- `src/modules/persona/pmix/pmix.parameters.ts`: Defines the prompt variable registry (PromptVariableRegistry), variable types, and substitution generators for dates, rendering modes (HTML, Mermaid, PlantUML, SVG, ChartJS), and model-specific conditional instructions.
- `src/modules/persona/pmix/pmix.ts`: Implements prompt template variable substitution (replacePromptVariables) and a convenience wrapper (bareBonesPromptMixer) pulling device, locale, and chat auto-AI settings.

## Public interface
- replacePromptVariables(template: string, context: PPromptMixerContext): string
- bareBonesPromptMixer(_template: string, assistantLlmId: DLLMId | undefined, customFields?: Record<string, string>): string
- PromptVariableRegistry
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
- Where are full persona configurations and definitions stored and managed beyond the pmix prompt parameter mixing subsystem?
