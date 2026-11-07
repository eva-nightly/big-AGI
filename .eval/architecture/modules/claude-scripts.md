# Module: .claude/scripts

A utility CLI script that parses raw HTML from Ollama's model library page to extract model names, pull counts, capabilities, parameter sizes, and cloud-only status into a normalized pipe-delimited format while filtering out non-chat models.

## Key files
- `.claude/scripts/parse-ollama-models.js`: CLI script reading an Ollama library HTML dump and parsing metadata (capabilities, sizes, rounded pull counts, cloud status) into pipe-delimited output.

## Public interface
- CLI execution: node .claude/scripts/parse-ollama-models.js [htmlPath]

## Dependencies
- fs
- os
- path

## AI touchpoints [AI]
- `.claude/scripts/parse-ollama-models.js`

## Open questions
- _none_
