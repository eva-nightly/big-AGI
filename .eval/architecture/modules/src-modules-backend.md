# Module: src/modules/backend

Expose server-side capabilities (configured LLM providers, database, browsing, voice, and build metadata) and handle backend OAuth token exchange flows (such as OpenRouter key exchange) for the client.

## Key files
- `src/modules/backend/backend.router.ts`: Defines the tRPC router exposing listCapabilities to check configured LLM environment variables/features and exchangeOpenRouterKey to complete OpenRouter OAuth authentication.
- `src/modules/backend/store-backend-capabilities.ts`: Defines types and a Zustand store (BackendCapabilities, LegacyServerConf, useKnowledgeOfBackendCaps, getBackendCapabilities) used on frontend and backend to represent server capabilities.

## Public interface
- backendRouter
- useKnowledgeOfBackendCaps
- getBackendCapabilities
- type LegacyServerConf
- type BackendCapabilities

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
