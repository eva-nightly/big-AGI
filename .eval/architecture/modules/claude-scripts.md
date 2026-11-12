# Module: .claude/scripts

A CLI utility script for parsing Ollama library HTML index pages to extract AI model metadata (names, pulls, capabilities, sizes, cloud markers) and emit pipe-delimited model listings while filtering out non-chat models.

## Key files
- `.claude/scripts/parse-ollama-models.js`: Node.js executable script that extracts and normalizes Ollama library model metadata from saved HTML using regex matching.

## Public interface
- CLI: node .claude/scripts/parse-ollama-models.js [htmlPath] (outputs pipe-delimited format: modelName|pulls|capabilities|sizes|cloud)

## Dependencies
- fs
- os
- path

## Open questions
- _none_
