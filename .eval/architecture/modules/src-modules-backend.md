# Module: src/modules/backend

Exposes server-side capability flags (configured LLM provider keys and service integrations) and authentication helpers to the frontend via tRPC, alongside a client-side Zustand store for caching and accessing those capabilities.

## Key files
- `src/modules/backend/backend.router.ts`: Defines the tRPC backend router providing procedures to list server capabilities and exchange OpenRouter OAuth codes for API keys.
- `src/modules/backend/store-backend-capabilities.ts`: Defines capability interfaces (BackendCapabilities, LegacyServerConf) and a Zustand store (with getter and hook) to hold and access server capabilities in the client.

## Public interface
- backendRouter: tRPC router with listCapabilities query and exchangeOpenRouterKey query
- LegacyServerConf: interface representing boolean availability flags for various LLM vendors and services
- BackendCapabilities: interface extending LegacyServerConf with build metadata and hashLlmReconfig
- useKnowledgeOfBackendCaps(): hook returning [_loadedCapabilities, setCapabilities]
- getBackendCapabilities(): function returning the current BackendCapabilities snapshot from Zustand store

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
