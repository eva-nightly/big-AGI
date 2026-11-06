# Module: tools/data [AI]

A CLI maintenance and synchronization tool that monitors LLM vendor services for model additions, updates, and removals, persisting model metadata, pricing, and benchmarks into a local SQLite database.

## Key files
- `tools/data/llms/llm-registry-sync.ts`: CLI script for querying LLM vendor models via listModelsRunDispatch, diffing model changes against a local SQLite database (llm-registry.db), and logging/exporting model metadata.

## Public interface
- CLI command-line script executable via tsx supporting parameters for vendor configurations, dialects, validation, DB exports, and output formatting.

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
