# Module: tools/test [AI]

Provides mock-based scale testing utilities for backend AI engine components, specifically verifying the OpenAI sandbox container keepalive mechanism under high registration volumes without live API keys or network requests.

## Key files
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`: Mocks the OpenAI Containers REST API to test container discovery, pagination, ping deduplication, and abort handling for OpenAIContainerKeepAlive

## Public interface
- main() - Standalone executable CLI scale test run via tsx

## Dependencies
- node:http
- ~/modules/aix/server/dispatch/chatGenerate/adapters/openai.companion-containerKeepAlive

## AI touchpoints [AI]
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`

## Open questions
- _none_
