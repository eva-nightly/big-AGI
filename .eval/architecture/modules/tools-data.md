# Module: tools/data [AI]

A CLI and synchronization tool for tracking and persisting LLM vendor model catalog changes (new, updated, and deleted models) into a local SQLite database, supporting history tracking and change detection.

## Key files
- `tools/data/llms/llm-registry-sync.ts`: CLI script that runs model discovery dispatch across LLM vendors, compares against SQLite storage (llm-registry.db), records additions/updates/deletions, and tracks sync history.

## Public interface
- CLI execution: `tsx tools/data/llms/llm-registry-sync.ts` (supports flags like --config, --dialect, --key, --host, --format, --verbose, --validate, --export-db, --discordWebhook, --posthogKey, --notifyFilters)

## Dependencies
- node:fs
- node:path
- node:sqlite
- ~/modules/aix/server/api/aix.wiretypes
- ~/modules/llms/server/llm.server.types
- ~/modules/llms/server/listModels.dispatch

## AI touchpoints [AI]
- `tools/data/llms/llm-registry-sync.ts`

## Open questions
- The file content of `tools/data/llms/llm-registry-sync.ts` is truncated, cutting off CLI argument parsing, notification logic (PostHog/Discord webhook), and execution orchestration.
