# Module: src/modules/backend

Exposes backend server capabilities (pre-configured LLM provider credentials, database, browsing, voice services, and build info) to the frontend and provides OAuth key exchange endpoints such as OpenRouter.

## Key files
- `src/modules/backend/backend.router.ts`: Defines the tRPC backend router providing listCapabilities (inspecting environment variables) and exchangeOpenRouterKey.
- `src/modules/backend/store-backend-capabilities.ts`: Defines backend capability interfaces (LegacyServerConf, BackendCapabilities) and a Zustand store/hooks to manage capabilities on the frontend.

## Public interface
- backendRouter
- LegacyServerConf
- BackendCapabilities
- useKnowledgeOfBackendCaps
- getBackendCapabilities

## Dependencies
- zod/v4
- zustand
- zustand/react/shallow
- ~/common/app.release
- ~/server/trpc/trpc.server
- ~/server/env.server
- ~/server/trpc/trpc.router.fetchers

## AI touchpoints [AI]
- `src/modules/backend/backend.router.ts`

## Open questions
- When will hashLlmReconfig and generateLlmEnvConfigHash be safely deprecated/removed as noted in the TODO(2026-11) comments?
