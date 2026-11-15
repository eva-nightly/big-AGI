# Module: src/modules/trade [AI]

Manages importing, exporting, backing up, restoring, and unlisted cloud sharing of conversations, folders, model service configs, and application data (including Claude Code session transcripts/folders and browser IndexedDB/LocalStorage backups).

## Key files
- `src/modules/trade/trade.client.ts`: Client-side export/import logic for single chats and all chats in JSON/Markdown format, restoring model service credentials, and file picker interactions
- `src/modules/trade/BackupRestore.tsx`: Provides FlashBackup and FlashRestore UI components for full application state serialization and restoration across localStorage and IndexedDB
- `src/modules/trade/TradeModal.tsx`: Main modal wrapper coordinating ImportChats and ExportChats dialog flows
- `src/modules/trade/ExportChats.tsx`: UI component offering export choices (single chat JSON/Markdown, all chats backup, Claude Code export, unlisted public link sharing)
- `src/modules/trade/ImportChats.tsx`: UI component handling chat JSON importing and full flash backup restoration
- `src/modules/trade/ImportOutcomeModal.tsx`: Modal dialog displaying details, successes, and errors following an import operation
- `src/modules/trade/claude-code/claudeCode.export.ts`: Lowers conversations into Claude Code session format (.jsonl) or multi-asset ZIP folders
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`: UI modal and button for configuring and downloading Claude Code exports
- `src/modules/trade/link/ChatLinkExport.tsx`: Uploads chat payloads to unlisted cloud storage via tRPC to generate temporary shared links
- `src/modules/trade/link/ChatLinkDetails.tsx`: Manages viewing, copying, web sharing, deletion key updates, and remote deletion of shared chat links
- `src/modules/trade/link/store-share-link.ts`: Zustand persisted client store tracking created shared chat links and storage owner ID
- `src/modules/trade/server/link.ts`: Prisma-backed storage procedures for creating, reading, deleting, and updating shared chat links
- `src/modules/trade/server/trade.router.ts`: tRPC router exposing trade storage procedures (storagePut, storageGet, storageDelete, storageUpdateDeletionKey)

## Public interface
- TradeModal
- ExportChats
- ImportChats
- FlashBackup
- FlashRestore
- ClaudeCodeExport
- ExportClaudeCode
- ChatLinkExport
- ChatLinkDetails
- importConversationsFromFilesAtRest
- openConversationsAtRestPicker
- downloadAllJsonV1B
- downloadSingleChat
- tradeRouter

## Dependencies
- browser-fs-access
- @mui/joy
- @mui/icons-material
- zustand
- zod
- @prisma/client
- ~/server/prisma/prismaDb
- ~/server/trpc/trpc.server
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chats.converters
- ~/common/stores/chat/store-chats
- ~/common/stores/folders/store-chat-folders
- ~/common/stores/llms/store-llms
- ~/modules/aix/client/aix.client.chatGenerateRequest
- ~/common/util/zipUtils
- ~/common/util/blobUtils
- ~/common/util/clipboardUtils
- ~/common/util/trpc.client

## AI touchpoints [AI]
- `src/modules/trade/ExportChats.tsx`
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`
- `src/modules/trade/claude-code/claudeCode.export.ts`
- `src/modules/trade/trade.client.ts`

## Open questions
- _none_
