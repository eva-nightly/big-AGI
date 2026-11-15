# Module: .claude/scripts

Provides developer utility scripts to parse and extract Ollama model metadata (names, pull counts, capabilities, and tag sizes) from Ollama library HTML dumps into pipe-delimited records.

## Key files
- `.claude/scripts/parse-ollama-models.js`: CLI script that parses HTML from the Ollama model library, filters out non-chat models, rounds pull numbers, and outputs pipe-delimited model information.

## Public interface
- CLI execution: node .claude/scripts/parse-ollama-models.js [htmlPath]

## Dependencies
- fs
- os
- path

## Open questions
- _none_
