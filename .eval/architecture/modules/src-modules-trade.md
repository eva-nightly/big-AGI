# Module: src/modules/trade [AI]

Manages client-side export, import, backup, flash restore, and unlisted cloud link sharing of conversations, folders, and model service configurations, including Claude Code session and folder exports.

## Key files
- `src/modules/trade/TradeModal.tsx`: Top-level modal dialog presenting either import or export interfaces.
- `src/modules/trade/ExportChats.tsx`: UI component providing controls to export single or all conversations as JSON, Markdown, Claude Code sessions, or cloud-shared links.
- `src/modules/trade/ImportChats.tsx`: UI component triggering file picker imports and flash backups restoration.
- `src/modules/trade/BackupRestore.tsx`: Performs full snapshot backup and restore of browser LocalStorage and IndexedDB (chats data).
- `src/modules/trade/trade.client.ts`: Client utility functions for reading, converting, importing, and downloading single chats or entire workspaces (chats, folders, model services).
- `src/modules/trade/claude-code/claudeCode.export.ts`: Lowers conversation messages and fragments into Claude Code resumable JSONL sessions or structured ZIP folder archives.
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`: Modal and trigger button for configuring and executing Claude Code session or ZIP folder exports.
- `src/modules/trade/link/ChatLinkExport.tsx`: Component handling server upload of conversation JSON to generate unlisted public sharing links.
- `src/modules/trade/link/ChatLinkDetails.tsx`: Modal showing generated share link URL, QR/copy actions, expiration, and deletion key management.
- `src/modules/trade/link/store-share-link.ts`: Zustand local store persisting metadata and deletion keys for created shared links.
- `src/modules/trade/server/link.ts`: tRPC procedures and Zod schemas for storing, reading, deleting, and updating shared links via Prisma.
- `src/modules/trade/server/trade.router.ts`: tRPC router exposing storagePut, storageGet, storageDelete, and storageUpdateDeletionKey procedures.
- `src/modules/trade/ImportOutcomeModal.tsx`: Modal reporting the summary of imported conversations and restored model services.

## Public interface
- TradeModal
- ExportChats
- ImportChats
- ExportClaudeCode
- ClaudeCodeExport.summarizeContent
- ClaudeCodeExport.downloadOrThrow
- importConversationsFromFilesAtRest
- openConversationsAtRestPicker
- downloadAllJsonV1B
- downloadSingleChat
- tradeRouter
- useSharedChatLinkItems
- useLinkStorageOwnerId

## Dependencies
- browser-fs-access
- @mui/joy
- @mui/icons-material
- zustand
- zod/v4
- @prisma/client
- react-timeago

## AI touchpoints [AI]
- `src/modules/trade/ExportChats.tsx`
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`
- `src/modules/trade/claude-code/claudeCode.export.ts`
- `src/modules/trade/trade.client.ts`

## Open questions
- _none_
