# Module: .claude/scripts

A utility CLI script used to parse Ollama model catalog HTML (from ollama.com/library), extracting model names, pull counts, capabilities, parameter sizes, and cloud status into a standardized pipe-delimited format while skipping non-chat models.

## Key files
- `.claude/scripts/parse-ollama-models.js`: Node.js CLI script that parses HTML of the Ollama library index using regex-based extraction and emits pipe-delimited model metadata.

## Public interface
- CLI execution: node .claude/scripts/parse-ollama-models.js [htmlFilePath]

## Dependencies
- node:fs
- node:os
- node:path

## AI touchpoints [AI]
- `.claude/scripts/parse-ollama-models.js`

## Open questions
- _none_
