# Module: tools/test [AI]

Provides scale testing and verification for the OpenAI sandbox container keepalive adapter against a local mock Containers API, checking paginated discovery, container deduplication, filtering, and abort signal handling.

## Key files
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`: CLI scale test script that runs a mock HTTP server simulating OpenAI container endpoints and validates the companion keep-alive behavior under concurrent registrations and cancellations.

## Public interface
- main(): Standalone test execution runner executed via tsx

## Dependencies
- node:http
- ~/modules/aix/server/dispatch/chatGenerate/adapters/openai.companion-containerKeepAlive

## AI touchpoints [AI]
- `tools/test/aix-openai-sandbox-keepalive/scale-mock.ts`

## Open questions
- _none_
