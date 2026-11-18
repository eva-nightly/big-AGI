# Module: src/modules/aifn [AI]

Provides specialized AI utility functions, hooks, workflows, and modals (including attachment prompt suggestions, code/diagram fixups, auto-titling, auto-followups, conversation compaction/flattening, image captioning, text-to-image prompt expansion, ReAct agent loops, and LLM transformation chains).

## Key files
- `src/modules/aifn/agiattachmentprompts/agiAttachmentPrompts.ts`: Infers high-value user intentions and suggests orthogonal prompt actions based on message attachment fragments using AIX function calling.
- `src/modules/aifn/agiattachmentprompts/useAgiAttachmentPrompts.tsx`: React Query hook managing automated attachment analysis and prompt suggestion generation.
- `src/modules/aifn/agicodefixup/agiFixupCode.ts`: Repairs invalid Chart.js JSON configurations, Mermaid diagrams, and PlantUML code via constrained LLM function calls.
- `src/modules/aifn/agicodefixup/useAgiFixupCode.tsx`: React Query hook wrapper for invoking automated code and diagram repairs.
- `src/modules/aifn/auto-chat-follow-ups/autoChatFollowUps.ts`: Evaluates conversation turns and generates complementary PlantUML diagrams or interactive single-file HTML UIs.
- `src/modules/aifn/autotitle/autoTitle.ts`: Generates concise conversation titles using fast utility models on recent conversation history.
- `src/modules/aifn/digrams/DiagramsModal.tsx`: UI modal allowing users to configure, stream, preview, and append Mermaid or PlantUML diagrams to conversations.
- `src/modules/aifn/digrams/diagrams.data.ts`: Prompt builders, system instructions, and options for Mermaid and PlantUML diagram generation.
- `src/modules/aifn/flatten/FlattenerModal.tsx`: Modal for compacting or summarizing an entire conversation thread into a structured summary (brief, deep, exploration, action).
- `src/modules/aifn/flatten/flatten.data.ts`: Defines conversation compaction profiles and system prompts for flattening conversations.
- `src/modules/aifn/image-caption/imageCaptionFromImage.ts`: Generates detailed, low-information-loss text descriptions for image blobs using vision LLMs.
- `src/modules/aifn/imagine/imaginePromptFromText.ts`: Expands brief text ideas into detailed descriptive prompts suitable for text-to-image generative models.
- `src/modules/aifn/react/react.ts`: Implements an autonomous ReAct loop agent supporting Thought, Action, PAUSE, and Observation cycles with Wikipedia, Google search, and webpage browsing.
- `src/modules/aifn/useLLMChain.ts`: React hook for managing multi-step sequential LLM transformation pipelines with streaming and cancellation.
- `src/modules/aifn/useStreamChatText.ts`: Reusable React hook for streaming text generation from AIX LLM requests.

## Public interface
- agiAttachmentPrompts(attachmentFragments, abortSignal)
- useAgiAttachmentPrompts(canAutoTrigger, attachmentDrafts)
- agiFixupCode(issueType, codeToFix, errorString, abortSignal)
- useAgiFixupCode(codeFixType, canAutoTrigger, codeToFix, errorString)
- autoChatFollowUps(conversationId)
- autoConversationTitle(conversationId, forceReplace)
- DiagramsModal(props)
- bigDiagramPrompt(diagramType, diagramLanguage, chatSystemPrompt, subject, customInstruction)
- FlattenerModal(props)
- FLATTEN_PROFILES
- imageCaptionFromImageOrThrow(imageBlob, imageMimeType, contextRef, abortSignal, onProgress)
- imaginePromptFromTextOrThrow(messageText, contextRef)
- Agent.reAct(question, llmId, maxTurns, enableBrowse, appendLog, showState)
- useLLMChain(steps, llmId, chainInput, aixContextName, aixContextRef, onSuccess)
- useStreamChatText()

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
- ~/common/stores/llms/llms.types
- ~/common/chat-overlay/ConversationsManager
- ~/common/components/modals/GoodModal
- ~/common/util/promptUtils
- ~/common/util/blobUtils
- @tanstack/react-query
- zod/v4
- @mui/joy

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
- src/modules/aifn/summarize/summerize.ts and src/modules/aifn/summarize/ContentReducer.tsx are completely commented out; should they be migrated to AIX or removed?
- src/modules/aifn/react/react.ts has commented-out tool definitions (e.g. calculator) and manual prompt parsing rather than AIX function calling.
