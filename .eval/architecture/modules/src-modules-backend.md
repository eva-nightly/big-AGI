# Module: src/modules/backend

Exposes server-side configuration, capabilities (pre-configured LLM provider keys, database, browsing, voice, search integrations), and OAuth key exchanges via tRPC, and manages client-side caching of these capabilities through a Zustand store.

## Key files
- `src/modules/backend/backend.router.ts`: Defines the tRPC backendRouter handling listCapabilities queries (detecting available server LLMs/integrations) and exchangeOpenRouterKey OAuth flow.
- `src/modules/backend/store-backend-capabilities.ts`: Implements a Zustand store for caching backend capabilities and server configuration flags on the frontend.

## Public interface
- backendRouter
- useKnowledgeOfBackendCaps
- getBackendCapabilities
- BackendCapabilities
- LegacyServerConf

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
- hashLlmReconfig and generateLlmEnvConfigHash have a TODO(2026-11) indicating they are deprecated and kept only for pre-LLM-Defs clients; when should cleanup occur?
