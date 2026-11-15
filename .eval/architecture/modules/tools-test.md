# Module: tools/test [AI]

Provides standalone test and benchmark scripts to validate aix container keep-alive behavior and simulated OpenAI API container lifecycle interactions without external network dependencies.

## Key files
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`: CLI scale test script that runs a mock HTTP server simulating OpenAI's container endpoints to verify discovery, pagination, deduplicated keep-alive pings, and abort signal handling.

## Public interface
- CLI execution: NODE_ENV=development npx tsx tools/test/aix-openai-sandbox-keepalive/scale-mock.ts

## Dependencies
- node:http
- ~/modules/aix/server/dispatch/chatGenerate/adapters/openai.companion-containerKeepAlive

## AI touchpoints [AI]
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`

## Open questions
- _none_
