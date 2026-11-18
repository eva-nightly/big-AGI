# Module: .claude/scripts

Provides utility scripts for extracting and parsing language model metadata from the Ollama library HTML catalog into a standardized pipe-delimited format for model management.

## Key files
- `.claude/scripts/parse-ollama-models.js`: CLI script that parses scraped Ollama library HTML pages, filters out non-chat models, rounds pull statistics, and outputs model capabilities, sizes, and cloud tags.

## Public interface
- CLI: node .claude/scripts/parse-ollama-models.js [htmlPath]
- Stdout format: modelName|pulls|capabilities|sizes|cloud

## Dependencies
- fs
- os
- path

## AI touchpoints [AI]
- `.claude/scripts/parse-ollama-models.js`

## Open questions
- _none_
