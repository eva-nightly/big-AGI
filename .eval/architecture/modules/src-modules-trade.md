# Module: src/modules/trade [AI]

Manages conversation and workspace import, export, sharing, and backup/restore across local file formats (JSON, Markdown, Claude Code JSONL/ZIP, flash backups) and cloud-shared links via Prisma storage.

## Key files
- `src/modules/trade/TradeModal.tsx`: Top-level dialog wrapper coordinating conversation import and export views
- `src/modules/trade/trade.client.ts`: Client utilities for loading, parsing, and exporting conversation JSON/Markdown files and restoring model service configurations
- `src/modules/trade/BackupRestore.tsx`: Full and partial workspace backup and restore mechanism across localStorage and IndexedDB (flash backups)
- `src/modules/trade/ExportChats.tsx`: UI component providing controls to download single or all conversations to JSON, Markdown, Claude Code, or flash backups, as well as sharing via link
- `src/modules/trade/ImportChats.tsx`: UI component facilitating the selection and restoration of JSON chat files and full flash backups
- `src/modules/trade/ImportOutcomeModal.tsx`: Modal displaying conversation and model service import success and failure summaries
- `src/modules/trade/claude-code/claudeCode.export.ts`: Lowers conversations into Claude Code transcripts (.jsonl) and markdown zip archives resumable via `claude --resume`
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`: UI button and dialog for configuring and triggering Claude Code session/folder downloads
- `src/modules/trade/server/trade.router.ts`: tRPC router registering link-storage database endpoints
- `src/modules/trade/server/link.ts`: tRPC server procedures for storing, querying, deleting, and updating keys for shared chats in Prisma linkStorage
- `src/modules/trade/link/ChatLinkExport.tsx`: Client component handling conversation upload to cloud storage and generating shareable unlisted links
- `src/modules/trade/link/ChatLinkDetails.tsx`: UI modal presenting created public share URLs, expiration info, native web share, and deletion key management
- `src/modules/trade/link/store-share-link.ts`: Zustand store persisting active share links and storage owner ID in client state

## Public interface
- TradeModal
- ExportChats
- ImportChats
- ImportOutcomeModal
- ClaudeCodeExport
- ExportClaudeCode
- ChatLinkExport
- ChatLinkDetails
- useSharedChatLinkItems
- rememberChatLinkItem
- updateChatLinkDeletionKey
- forgetChatLinkItem
- useLinkStorageOwnerId
- hasNoChatLinkItems
- tradeRouter
- storagePutProcedure
- storageGetProcedure
- storageMarkAsDeletedProcedure
- storageUpdateDeletionKeyProcedure
- importConversationsFromFilesAtRest
- openConversationsAtRestPicker
- downloadAllJsonV1B
- downloadSingleChat
- tradeFileVariant

## Dependencies
- @mui/joy
- @mui/icons-material
- @prisma/client
- browser-fs-access
- react-timeago
- zod/v4
- zustand

## AI touchpoints [AI]
- `src/modules/trade/ExportChats.tsx`
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`
- `src/modules/trade/claude-code/claudeCode.export.ts`
- `src/modules/trade/trade.client.ts`

## Open questions
- _none_
