# Module: src/modules/trade [AI]

Handles data portability for chat conversations, folders, settings, and model configurations across import, export, full client storage backup/restore (Flash backups over IndexedDB and LocalStorage), Claude Code resumable session generation, and unlisted cloud link sharing backed by Prisma/tRPC.

## Key files
- `src/modules/trade/trade.client.ts`: Client utility for exporting conversations to JSON/Markdown, downloading all chats, opening file pickers, and parsing/restoring imported chat and model service data.
- `src/modules/trade/TradeModal.tsx`: Top-level dialog component routing between Import and Export workflows.
- `src/modules/trade/ExportChats.tsx`: UI component displaying export options (JSON, Markdown, Claude Code, Cloud Link, Flash Backup, and full chat backup).
- `src/modules/trade/ImportChats.tsx`: UI component for triggering JSON imports and Flash restores.
- `src/modules/trade/BackupRestore.tsx`: Comprehensive backup and restore engine capturing LocalStorage and IndexedDB state into Flash Backup files.
- `src/modules/trade/claude-code/claudeCode.export.ts`: Exporter that converts conversation messages, images, documents, and system prompts into Claude Code session JSONL format and Markdown ZIP bundles.
- `src/modules/trade/claude-code/ExportClaudeCode.tsx`: Modal UI to configure and download Claude Code session or ZIP folder exports with resume command generation.
- `src/modules/trade/link/ChatLinkExport.tsx`: UI component managing conversation upload to server storage to generate unlisted sharing links.
- `src/modules/trade/link/ChatLinkDetails.tsx`: Modal dialog displaying generated shareable chat URLs, deletion keys, copy actions, and link deletion capabilities.
- `src/modules/trade/link/store-share-link.ts`: Zustand persist store tracking created shared links, link deletion keys, and server owner IDs.
- `src/modules/trade/server/link.ts`: Server-side tRPC procedures and Zod schemas for writing, fetching, deleting, and updating deletion keys for shared links in Prisma DB.
- `src/modules/trade/server/trade.router.ts`: tRPC router exposing link storage operations (storagePut, storageGet, storageDelete, storageUpdateDeletionKey).

## Public interface
- TradeModal
- ExportChats
- ImportChats
- ImportOutcomeModal
- ExportClaudeCode
- ChatLinkExport
- ChatLinkDetails
- FlashBackup
- FlashRestore
- ClaudeCodeExport.summarizeContent
- ClaudeCodeExport.downloadOrThrow
- downloadSingleChat
- downloadAllJsonV1B
- importConversationsFromFilesAtRest
- openConversationsAtRestPicker
- tradeFileVariant
- tradeRouter
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
- react
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
