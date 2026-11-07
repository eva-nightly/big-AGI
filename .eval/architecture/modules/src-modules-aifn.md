# Module: src/modules/aifn [AI]

Provides client-side AI auxiliary functions and UI workflows (aifn), including conversation auto-titling, attachment action inference, automated code/diagram fixups (Chart.js, Mermaid, PlantUML), conversation compaction/flattening, image captioning and prompt expansion, multi-step LLM chains, and ReAct agent reasoning loops.

## Key files
- `src/modules/aifn/agiattachmentprompts/agiAttachmentPrompts.ts`: Analyzes chat attachment fragments using structured function calling to infer orthogonal user actions.
- `src/modules/aifn/agiattachmentprompts/useAgiAttachmentPrompts.tsx`: React Query hook to automatically trigger and manage attachment-based prompt suggestions.
- `src/modules/aifn/agicodefixup/agiFixupCode.ts`: LLM-driven autofix engine for broken Chart.js, Mermaid, and PlantUML snippet code.
- `src/modules/aifn/agicodefixup/useAgiFixupCode.tsx`: React Query hook providing automated or on-demand code fixups for diagram and chart errors.
- `src/modules/aifn/auto-chat-follow-ups/autoChatFollowUps.ts`: Evaluates chat context to propose complementary PlantUML diagrams or interactive HTML UI components.
- `src/modules/aifn/autotitle/autoTitle.ts`: Extracts concise titles for chat conversations by summarizing the first lines of recent messages.
- `src/modules/aifn/digrams/DiagramsModal.tsx`: UI modal allowing users to generate and stream PlantUML or Mermaid diagrams from conversation messages.
- `src/modules/aifn/digrams/diagrams.data.ts`: Prompts, configuration options, and prompt engineering utilities for generating diagrams.
- `src/modules/aifn/flatten/FlattenerModal.tsx`: UI modal to compress/compact conversation history into a single message under various summary styles (brief, deep, exploration, action).
- `src/modules/aifn/flatten/flatten.data.ts`: Defines compaction and summarization styles and prompt templates for conversation flattening.
- `src/modules/aifn/image-caption/imageCaptionFromImage.ts`: Uses multimodal vision models to generate comprehensive textual descriptions of images.
- `src/modules/aifn/imagine/imaginePromptFromText.ts`: Expands concise user text into descriptive prompts optimized for text-to-image models.
- `src/modules/aifn/react/react.ts`: Implements a ReAct (Thought-Action-Observation) agent with tool execution for Wikipedia, Google Search, and web browsing.
- `src/modules/aifn/useLLMChain.ts`: React hook for orchestrating sequential, multi-step LLM transformation chains with streaming and intermediate state tracking.
- `src/modules/aifn/useStreamChatText.ts`: Reusable React hook for streaming text generation from AIX LLM client calls.

## Public interface
- agiAttachmentPrompts(attachmentFragments: DMessageAttachmentFragment[], abortSignal: AbortSignal): Promise<string[]>
- useAgiAttachmentPrompts(canAutoTrigger: boolean, attachmentDrafts: AttachmentDraft[]): AgiAttachmentPromptsData
- agiFixupCode(issueType: CodeFixType, codeToFix: string, errorString: string | null, abortSignal: AbortSignal): Promise<string>
- useAgiFixupCode(codeFixType: CodeFixType, canAutoTrigger: boolean, codeToFix: string, errorString: string | null): AgiFixCodeBlockData
- autoConversationTitle(conversationId: string, forceReplace: boolean): Promise<boolean>
- DiagramsModal(props: { config: DiagramConfig, onClose: () => void }): JSX.Element
- FlattenerModal(props: { conversationId: string | null, onConversationBranch: (...args: any[]) => DConversationId | null, onClose: () => void }): JSX.Element
- imageCaptionFromImageOrThrow(imageBlob: Blob, imageMimeType: string, contextRef: string, abortSignal: AbortSignal, onProgress?: (progress: number) => void): Promise<string>
- imaginePromptFromTextOrThrow(messageText: string, contextRef: string): Promise<string>
- Agent (class with reAct, initialize, step, llmChat methods)
- useLLMChain(steps: LLMChainStep[], llmId: DLLMId | undefined, chainInput: string | undefined, aixContextName: AixAPI_Context_ChatGenerate['name'], aixContextRef: AixAPI_Context_ChatGenerate['ref'], onSuccess?: (output: string, input: string) => void)
- useStreamChatText()

## Dependencies
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zod/v4
- ~/modules/aix/client/aix.client
- ~/modules/aix/client/aix.client.chatGenerateRequest
- ~/modules/aix/client/aix.client.fromSimpleFunction
- ~/modules/aix/server/api/aix.wiretypes
- ~/modules/blocks/AutoBlocksRenderer
- ~/modules/browse/browse.client
- ~/modules/google/search.client
- ~/modules/persona/pmix/pmix
- ~/common/chat-overlay/ConversationsManager
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/store-chats
- ~/common/stores/llms/store-llms
- ~/common/stores/llms/llms.types
- ~/common/stores/llms/hooks/useModelDomain
- ~/common/util/blobUtils
- ~/common/util/clientFetchers
- ~/common/util/promptUtils

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
- Files `summerize.ts` and `ContentReducer.tsx` are fully commented out; should they be deleted or refactored into the active compaction/flattening system?
- The ReAct agent loop in `src/modules/aifn/react/react.ts` mentions moving the execution loop to the caller's event loop and adding conversation context; is this agent intended to be upgraded to AIX native tool-calling?
