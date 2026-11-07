# Module: tools/data [AI]

A CLI maintenance tool and database sync utility that monitors LLM vendors for model changes, track pricing and context windows, and updates a local SQLite registry.

## Key files
- `tools/data/llms/llm-registry-sync.ts`: CLI script that syncs vendor model listings into a local SQLite database, tracking model additions, modifications, and deletions.

## Public interface
- CLI command execution via tsx (tools/data/llms/llm-registry-sync.ts)

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
- How are notifications (PostHog and Discord webhook parameters listed in CliOptions) dispatched when model changes are detected?
