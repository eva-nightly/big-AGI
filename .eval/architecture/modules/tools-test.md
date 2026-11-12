# Module: tools/test [AI]

Provides test scripts and mock environments to verify internal subsystems under load, specifically testing the OpenAI container keep-alive mechanism against a local mock Containers API without external network calls or credentials.

## Key files
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`: Executable scale test script that spins up a local mock HTTP server simulating the OpenAI Containers API to verify container discovery, pagination, deduplication, pinging, and abort controller cleanup in OpenAIContainerKeepAlive.

## Public interface
- _none_

## Dependencies
- node:http
- ~/modules/aix/server/dispatch/chatGenerate/adapters/openai.companion-containerKeepAlive

## AI touchpoints [AI]
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`

## Open questions
- _none_
