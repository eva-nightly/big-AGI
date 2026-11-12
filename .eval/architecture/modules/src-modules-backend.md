# Module: src/modules/backend

Provides server-side capability detection based on configured environment variables (LLM providers, databases, voice, browsing) and OAuth code exchange endpoints, alongside a frontend Zustand store for caching detected backend capabilities.

## Key files
- `src/modules/backend/backend.router.ts`: Defines the tRPC backend router exposing listCapabilities and exchangeOpenRouterKey procedures.
- `src/modules/backend/store-backend-capabilities.ts`: Defines shared backend capabilities interfaces (LegacyServerConf, BackendCapabilities) and a client-side Zustand store for reading and updating backend capability state.

## Public interface
- backendRouter: tRPC router exposing listCapabilities (query returning BackendCapabilities) and exchangeOpenRouterKey (query taking an authorization code and returning an API key object)
- LegacyServerConf: Interface specifying boolean flags for server-configured LLMs and auxiliary services
- BackendCapabilities: Interface extending LegacyServerConf with hashLlmReconfig and build metadata
- useKnowledgeOfBackendCaps: React hook returning a tuple of [isLoaded, setCapabilities]
- getBackendCapabilities: Function returning current BackendCapabilities state snapshot from the store

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
- _none_
