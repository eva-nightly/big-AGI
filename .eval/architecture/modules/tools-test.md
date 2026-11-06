# Module: tools/test [AI]

Provides mock-based scale testing for the OpenAI sandbox companion container keep-alive mechanism, verifying container discovery, deduplication, pagination, and abort signal handling without making live network calls.

## Key files
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`: CLI scale test script that runs a local HTTP mock server simulating OpenAI container API endpoints and exercises OpenAIContainerKeepAlive registration and lifecycle behavior.

## Public interface
- _none_

## Dependencies
- node:http
- ~/modules/aix/server/dispatch/chatGenerate/adapters/openai.companion-containerKeepAlive

## AI touchpoints [AI]
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`

## Open questions
- _none_
