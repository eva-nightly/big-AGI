# Module: tools/data [AI]

A CLI utility script for syncing, tracking, and cataloging LLM vendor model listings, specs, pricing, and benchmark metrics into a local SQLite registry database.

## Key files
- `tools/data/llms/llm-registry-sync.ts`: CLI script that queries LLM vendors via model dispatchers, manages the SQLite schema, tracks model additions/updates/deletions over time, and stores sync history.

## Public interface
- CLI execution: `tsx tools/data/llms/llm-registry-sync.ts`
- CLI options: --config, --dialect, --key, --host, --format (table | json), --verbose, --posthogKey, --discordWebhook, --notifyFilters, --validate, --export-db <path>

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
- The file content is truncated before showing the implementation of CLI argument parsing, notification logic (Discord webhook/PostHog), and the main entry execution point.
