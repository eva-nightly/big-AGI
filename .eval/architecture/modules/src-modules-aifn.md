# Module: src/modules/aifn [AI]

Provides auxiliary AI utility functions and UI components ('aifn'), including conversation auto-titling, conversation flattening/summarization, attachment prompt inference, code/diagram error fixup, diagram generation, image captioning, image prompt elaboration, multi-step LLM chaining hooks, and a ReAct agent implementation.

## Key files
- `src/modules/aifn/agiattachmentprompts/agiAttachmentPrompts.ts`: Analyzes message attachments and uses structured LLM function calling to suggest relevant user actions and prompts.
- `src/modules/aifn/agiattachmentprompts/useAgiAttachmentPrompts.tsx`: React Query hook to auto-trigger attachment prompt suggestions when drafts are attached.
- `src/modules/aifn/agicodefixup/agiFixupCode.ts`: Executes targeted LLM function-call prompts to fix syntax and rendering errors in Chart.js, Mermaid, and PlantUML code.
- `src/modules/aifn/agicodefixup/useAgiFixupCode.tsx`: React Query hook for executing code fixups asynchronously.
- `src/modules/aifn/auto-chat-follow-ups/autoChatFollowUps.ts`: Defines tools and prompts to evaluate conversation exchanges and automatically generate complementary PlantUML diagrams or HTML web UIs.
- `src/modules/aifn/autotitle/autoTitle.ts`: Analyzes recent messages in a conversation and generates a concise conversation title via AIX.
- `src/modules/aifn/digrams/diagrams.data.ts`: Configures prompts and schemas for Mermaid and PlantUML diagram/mindmap generation.
- `src/modules/aifn/digrams/DiagramsModal.tsx`: Modal UI allowing users to configure, stream-generate, and append diagrams/mindmaps to conversations.
- `src/modules/aifn/flatten/flatten.data.ts`: Defines conversation compaction profiles (Brief, Detailed, Open-ended, Actionable) with specific system prompts.
- `src/modules/aifn/flatten/FlattenerModal.tsx`: Modal dialog enabling users to compact conversation histories into summaries and branch or replace chat sessions.
- `src/modules/aifn/image-caption/imageCaptionFromImage.ts`: Sends base64 images to vision LLMs to generate high-fidelity, comprehensive text captions.
- `src/modules/aifn/imagine/imaginePromptFromText.ts`: Expands user text into descriptive text-to-image prompts using fast LLMs.
- `src/modules/aifn/react/react.ts`: Implements the ReAct (Thought-Action-Observation) agent execution loop with search, Wikipedia, and browsing actions.
- `src/modules/aifn/useLLMChain.ts`: React hook facilitating sequential multi-step LLM text transformation chains.
- `src/modules/aifn/useStreamChatText.ts`: Reusable React hook for streaming text completions from AIX.

## Public interface
- agiAttachmentPrompts(attachmentFragments, abortSignal)
- useAgiAttachmentPrompts(canAutoTrigger, attachmentDrafts)
- agiFixupCode(issueType, codeToFix, errorString, abortSignal)
- useAgiFixupCode(codeFixType, canAutoTrigger, codeToFix, errorString)
- autoChatFollowUps(conversationId, ...)
- autoFollowUpUIMixin
- autoConversationTitle(conversationId, forceReplace)
- bigDiagramPrompt(diagramType, diagramLanguage, chatSystemPrompt, subject, customInstruction)
- DiagramsModal(props: { config: DiagramConfig, onClose: () => void })
- FLATTEN_PROFILES
- FlattenerModal(props: { conversationId, onConversationBranch, onClose })
- imageCaptionFromImageOrThrow(imageBlob, imageMimeType, contextRef, abortSignal, onProgress)
- imaginePromptFromTextOrThrow(messageText, contextRef)
- Agent class with reAct(question, llmId, maxTurns, enableBrowse, appendLog, showState)
- useLLMChain(steps, llmId, chainInput, aixContextName, aixContextRef, onSuccess)
- useStreamChatText()

## Dependencies
- react
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
- ~/common/stores/chat/chat.tokens
- ~/common/stores/chat/store-chats
- ~/common/stores/llms/store-llms
- ~/common/stores/llms/llms.types
- ~/common/stores/llms/hooks/useModelDomain
- ~/common/stores/store-ui
- ~/common/util/abortUtils
- ~/common/util/blobUtils
- ~/common/util/clientFetchers
- ~/common/util/promptUtils
- ~/common/util/textUtils
- ~/common/components/forms/useFormRadio
- ~/common/components/forms/useFormRadioLlmType
- ~/common/components/modals/GoodModal

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
- src/modules/aifn/summarize/summerize.ts and src/modules/aifn/summarize/ContentReducer.tsx are completely commented out; should they be deleted or are they pending refactoring to current AIX standards?
- src/modules/aifn/auto-chat-follow-ups/autoChatFollowUps.ts mentions missing implementations for follow-up questions, prompts, and counterpoints.
