# Module: src/modules/aifn [AI]

Provides utility AI functions and hooks for focused AI actions across the application, such as automatic chat title generation, attachment action inference, code/diagram autofix, interactive diagram and UI generation, conversation flattening/summarization, image captioning, prompt expansion, LLM chaining, and ReAct agent workflows.

## Key files
- `src/modules/aifn/agiattachmentprompts/agiAttachmentPrompts.ts`: Analyzes uploaded attachments and infers high-value prompt suggestions via structured tool calling
- `src/modules/aifn/agiattachmentprompts/useAgiAttachmentPrompts.tsx`: React Query hook to auto-trigger and manage attachment prompt suggestions
- `src/modules/aifn/agicodefixup/agiFixupCode.ts`: Prompts and function schemas for repairing broken Chart.js, Mermaid, and PlantUML code
- `src/modules/aifn/agicodefixup/useAgiFixupCode.tsx`: React Query hook wrapping code fixup execution
- `src/modules/aifn/auto-chat-follow-ups/autoChatFollowUps.ts`: Evaluates conversation turns to suggest and append automated PlantUML diagrams or HTML web UIs
- `src/modules/aifn/autotitle/autoTitle.ts`: Generates concise conversation titles using fast utility LLMs based on recent message excerpts
- `src/modules/aifn/digrams/diagrams.data.ts`: Prompt builders and configuration constants for Mermaid and PlantUML diagram and mindmap generation
- `src/modules/aifn/digrams/DiagramsModal.tsx`: Modal UI for generating, streaming, previewing, and appending diagram messages
- `src/modules/aifn/flatten/flatten.data.ts`: Flatten profiles (Brief, Detailed, Open-ended, Actionable) and prompts for conversation compaction
- `src/modules/aifn/flatten/FlattenerModal.tsx`: Modal UI for summarizing/compacting conversation histories and branching or replacing conversations
- `src/modules/aifn/image-caption/imageCaptionFromImage.ts`: Uses vision LLMs to generate detailed text descriptions of uploaded image blobs
- `src/modules/aifn/imagine/imaginePromptFromText.ts`: Expands user text into detailed text-to-image prompts using fast LLMs
- `src/modules/aifn/react/react.ts`: ReAct agent loop implementation with Thought/Action/Observation execution over Google Search, Browse, and Wikipedia tools
- `src/modules/aifn/useLLMChain.ts`: React hook for orchestrating multi-step sequential LLM pipelines
- `src/modules/aifn/useStreamChatText.ts`: React hook providing streaming chat generation with cancelation support

## Public interface
- agiAttachmentPrompts(attachmentFragments: DMessageAttachmentFragment[], abortSignal: AbortSignal): Promise<string[]>
- useAgiAttachmentPrompts(canAutoTrigger: boolean, attachmentDrafts: AttachmentDraft[]): AgiAttachmentPromptsData
- agiFixupCode(issueType: CodeFixType, codeToFix: string, errorString: string | null, abortSignal: AbortSignal): Promise<string>
- useAgiFixupCode(codeFixType: CodeFixType, canAutoTrigger: boolean, codeToFix: string, errorString: string | null): AgiFixCodeBlockData
- autoConversationTitle(conversationId: string, forceReplace: boolean): Promise<boolean>
- autoChatFollowUps(conversationId: string, ...): Promise<...>
- bigDiagramPrompt(diagramType: DiagramType, diagramLanguage: DiagramLanguage, chatSystemPrompt: string, subject: string, customInstruction: string): { systemInstruction: string, messages: AixChatGenerate_TextMessages }
- DiagramsModal(props: { config: DiagramConfig, onClose: () => void }): JSX.Element
- FlattenerModal(props: { conversationId: string | null, onConversationBranch: (...), onClose: () => void }): JSX.Element
- imageCaptionFromImageOrThrow(imageBlob: Blob, imageMimeType: string, contextRef: string, abortSignal: AbortSignal, onProgress?: (progress: number) => void): Promise<string>
- imaginePromptFromTextOrThrow(messageText: string, contextRef: string): Promise<string>
- Agent: class implementing reAct(question: string, llmId: DLLMId, maxTurns?: number, enableBrowse?: boolean, ...): Promise<string>
- useLLMChain(steps: LLMChainStep[], llmId: DLLMId | undefined, chainInput: string | undefined, aixContextName: AixAPI_Context_ChatGenerate['name'], aixContextRef: AixAPI_Context_ChatGenerate['ref'], onSuccess?: (output: string, input: string) => void): LLMChainState
- useStreamChatText(): { isStreaming: boolean, text: string | null, partialText: string | null, streamError: string | null, startStreaming: (...args: any[]) => Promise<void>, stopStreaming: () => void, setText: (...args: any[]) => void, resetText: () => void }

## Dependencies
- ~/modules/aix/client/aix.client
- ~/modules/aix/client/aix.client.chatGenerateRequest
- ~/modules/aix/client/aix.client.fromSimpleFunction
- ~/modules/aix/server/api/aix.wiretypes
- ~/modules/persona/pmix/pmix
- ~/modules/google/search.client
- ~/modules/browse/browse.client
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/store-chats
- ~/common/stores/llms/store-llms
- ~/common/chat-overlay/ConversationsManager
- ~/common/util/promptUtils
- @tanstack/react-query
- zod/v4

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
- src/modules/aifn/summarize/summerize.ts and ContentReducer.tsx are completely commented out; is PDF budget summarization planned for removal or rewriting?
