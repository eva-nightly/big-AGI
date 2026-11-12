# Module: src/modules/aifn [AI]

Provides utility and helper AI functions (aifn) such as attachment-based prompt suggestions, diagram generation, code fixing/repairing, automatic conversation titling, conversation summarization/flattening, image captioning, prompt expansion for image generation, multi-step LLM chaining, and ReAct agent workflows.

## Key files
- `src/modules/aifn/agiattachmentprompts/agiAttachmentPrompts.ts`: Analyzes attachment fragments using LLM function calling and structured Zod output to infer and suggest user actions/prompts.
- `src/modules/aifn/agiattachmentprompts/useAgiAttachmentPrompts.tsx`: React Query hook to auto-trigger attachment prompt inference.
- `src/modules/aifn/agicodefixup/agiFixupCode.ts`: Repairs broken syntax for Chart.js JSON, Mermaid diagrams, and PlantUML diagrams via LLM function calling.
- `src/modules/aifn/agicodefixup/useAgiFixupCode.tsx`: React Query hook wrapping code fixup execution.
- `src/modules/aifn/auto-chat-follow-ups/autoChatFollowUps.ts`: Defines tools and system instructions for proposing diagrams and web UI HTML snippets following chat interactions.
- `src/modules/aifn/autotitle/autoTitle.ts`: Generates concise conversation titles using fast utility models on recent conversation history.
- `src/modules/aifn/digrams/diagrams.data.ts`: Defines prompt constructors and supported types/languages (PlantUML, Mermaid) for diagram generation.
- `src/modules/aifn/digrams/DiagramsModal.tsx`: UI modal for configuring and streaming diagram generation and appending it to chat.
- `src/modules/aifn/flatten/flatten.data.ts`: Defines conversation compaction profiles (brief, deep, exploration, action) and prompt templates.
- `src/modules/aifn/flatten/FlattenerModal.tsx`: Modal for flattening/compacting long conversation threads into summarized single messages or branching new chats.
- `src/modules/aifn/image-caption/imageCaptionFromImage.ts`: Generates detailed textual captions for images using vision-capable LLMs.
- `src/modules/aifn/imagine/imaginePromptFromText.ts`: Expands simple user concepts into descriptive text-to-image prompts.
- `src/modules/aifn/react/react.ts`: Implements an experimental ReAct (Reasoning and Acting) loop agent with tools like Google Search, web browsing, and Wikipedia.
- `src/modules/aifn/summarize/summerize.ts`: Draft/commented implementation for recursively chunking and summarizing text to fit token budgets.
- `src/modules/aifn/summarize/ContentReducer.tsx`: Draft/commented UI component for context reduction.
- `src/modules/aifn/useLLMChain.ts`: React hook facilitating sequential multi-step LLM pipelines with interim text tracking and token safety caps.
- `src/modules/aifn/useStreamChatText.ts`: React hook providing streaming text generation via AIX with abort handling.

## Public interface
- agiAttachmentPrompts(attachmentFragments: DMessageAttachmentFragment[], abortSignal: AbortSignal): Promise<string[]>
- useAgiAttachmentPrompts(canAutoTrigger: boolean, attachmentDrafts: AttachmentDraft[]): AgiAttachmentPromptsData
- agiFixupCode(issueType: CodeFixType, codeToFix: string, errorString: string | null, abortSignal: AbortSignal): Promise<string>
- useAgiFixupCode(codeFixType: CodeFixType, canAutoTrigger: boolean, codeToFix: string, errorString: string | null): AgiFixCodeBlockData
- autoConversationTitle(conversationId: string, forceReplace: boolean): Promise<boolean>
- bigDiagramPrompt(diagramType: DiagramType, diagramLanguage: DiagramLanguage, chatSystemPrompt: string, subject: string, customInstruction: string): { systemInstruction: string, messages: AixChatGenerate_TextMessages }
- DiagramsModal(props: { config: DiagramConfig, onClose: () => void }): JSX.Element
- FlattenerModal(props: { conversationId: string | null, onConversationBranch: (...args: any[]) => string | null, onClose: () => void }): JSX.Element
- imageCaptionFromImageOrThrow(imageBlob: Blob, imageMimeType: string, contextRef: string, abortSignal: AbortSignal, onProgress?: (progress: number) => void): Promise<string>
- imaginePromptFromTextOrThrow(messageText: string, contextRef: string): Promise<string>
- Agent (class with reAct, initialize, step, llmChat)
- useLLMChain(steps: LLMChainStep[], llmId: DLLMId | undefined, chainInput: string | undefined, aixContextName: AixAPI_Context_ChatGenerate['name'], aixContextRef: AixAPI_Context_ChatGenerate['ref'], onSuccess?: (output: string, input: string) => void)
- useStreamChatText()

## Dependencies
- zod/v4
- @tanstack/react-query
- @mui/joy
- @mui/icons-material
- ~/modules/aix/client/aix.client
- ~/modules/aix/client/aix.client.chatGenerateRequest
- ~/modules/aix/client/aix.client.fromSimpleFunction
- ~/modules/aix/server/api/aix.wiretypes
- ~/modules/blocks/AutoBlocksRenderer
- ~/modules/browse/browse.client
- ~/modules/google/search.client
- ~/modules/persona/pmix/pmix
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.tokens
- ~/common/stores/chat/store-chats
- ~/common/stores/llms/store-llms
- ~/common/stores/llms/llms.types
- ~/common/stores/llms/hooks/useModelDomain
- ~/common/stores/store-ui
- ~/common/chat-overlay/ConversationsManager
- ~/common/util/promptUtils
- ~/common/util/blobUtils
- ~/common/util/clientFetchers
- ~/common/util/abortUtils
- ~/common/util/textUtils
- ~/common/util/hooks/useShallowObject

## AI touchpoints [AI]
- `src/modules/aifn/auto-chat-follow-ups/autoChatFollowUps.ts`
- `src/modules/aifn/digrams/DiagramsModal.tsx`
- `src/modules/aifn/digrams/diagrams.data.ts`
- `src/modules/aifn/flatten/FlattenerModal.tsx`
- `src/modules/aifn/flatten/flatten.data.ts`
- `src/modules/aifn/image-caption/imageCaptionFromImage.ts`
- `src/modules/aifn/imagine/imaginePromptFromText.ts`
- `src/modules/aifn/react/react.ts`
- `src/modules/aifn/summarize/summerize.ts`
- `src/modules/aifn/agiattachmentprompts/agiAttachmentPrompts.ts`
- `src/modules/aifn/agicodefixup/agiFixupCode.ts`
- `src/modules/aifn/autotitle/autoTitle.ts`
- `src/modules/aifn/useLLMChain.ts`
- `src/modules/aifn/useStreamChatText.ts`

## Open questions
- ContentReducer.tsx and summerize.ts are fully commented out; should they be migrated to current AIX standards or removed?
- autoChatFollowUps.ts contains incomplete implementations for follow-up questions, prompts, and counterpoints.
