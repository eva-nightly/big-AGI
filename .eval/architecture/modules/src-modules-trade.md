# Module: src/modules/trade [AI]

Manages conversation import, export, full client storage backup/restore (Flash backup), unlisted public chat link sharing with deletion keys, and Claude Code transcript/folder exports.

## Key files
- `src/modules/trade/TradeModal.tsx`: Top-level modal container switching between import and export workflows for single or all conversations.
- `src/modules/trade/trade.client.ts`: Client-side utilities for reading, parsing, formatting, and saving JSON/Markdown conversation files, folders, and model services.
- `src/modules/trade/BackupRestore.tsx`: Full application state backup and restore functionality ('Flash Backup') targeting localStorage and IndexedDB stores.
- `src/modules/trade/claude-code/claudeCode.export.ts`: Exports chat conversations as Claude Code JSONL session transcripts or zipped folders containing Markdown, images, and JSON metadata.
- `src/modules/trade/link/ChatLinkExport.tsx`: UI component handling unlisted public web link creation and expiration management for shared conversations.
- `src/modules/trade/server/link.ts`: tRPC procedures for storing, fetching, updating deletion keys, and marking shared chat links as deleted via Prisma.
- `src/modules/trade/server/trade.router.ts`: Server router defining the tRPC procedures for trade link storage.

## Public interface
- TradeModal
- ExportChats
- ImportChats
- FlashBackup
- FlashRestore
- ExportClaudeCode
- ClaudeCodeExport
- ChatLinkExport
- ChatLinkDetails
- tradeRouter
- downloadAllJsonV1B
- downloadSingleChat
- importConversationsFromFilesAtRest
- openConversationsAtRestPicker
- tradeFileVariant
- useSharedChatLinkItems
- rememberChatLinkItem
- updateChatLinkDeletionKey
- forgetChatLinkItem
- useLinkStorageOwnerId
- hasNoChatLinkItems

## Dependencies
- browser-fs-access
- @mui/joy
- @mui/icons-material
- zustand
- zod
- @prisma/client
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chats.converters
- ~/common/stores/chat/store-chats
- ~/common/stores/folders/store-chat-folders
- ~/common/stores/llms/store-llms
- ~/common/util/trpc.client
- ~/server/trpc/trpc.server
- ~/server/prisma/prismaDb
- ~/modules/aix/client/aix.client.chatGenerateRequest

## AI touchpoints [AI]
- `src/modules/trade/ExportChats.tsx`
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`
- `src/modules/trade/claude-code/claudeCode.export.ts`
- `src/modules/trade/trade.client.ts`

## Open questions
- _none_
