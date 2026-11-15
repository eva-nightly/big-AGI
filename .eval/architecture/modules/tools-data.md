# Module: tools/data [AI]

Provides CLI tooling to monitor, fetch, and synchronize LLM vendor model listings, pricing, and metadata into a local SQLite registry database for tracking new, updated, and deleted models.

## Key files
- `tools/data/llms/llm-registry-sync.ts`: CLI utility script that executes model listing dispatchers across LLM services and manages SQLite database persistence for model metadata history.

## Public interface
- CLI execution via tsx (tools/data/llms/llm-registry-sync.ts)

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
- _none_
