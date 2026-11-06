# Module: src/modules/google

Manages Google Custom Search engine configuration/queries and handles server-side resolution and rewriting of Gemini / Vertex AI grounding redirect links within chat fragments and display operations.

## Key files
- `src/modules/google/GoogleSearchSettings.tsx`: React settings UI component for configuring Google Cloud API keys, Custom Search Engine (CSE) IDs, and domain restrictions.
- `src/modules/google/search.router.ts`: tRPC server router providing endpoints to query Google Custom Search and resolve Vertex AI grounding redirect URLs.
- `src/modules/google/search.client.ts`: Client utility for querying the Google Search tRPC endpoint with stored credentials.
- `src/modules/google/store-module-google.ts`: Zustand persistent store holding Google Search configuration (API key, CSE ID, domain restriction).
- `src/modules/google/vertexai.client.ts`: Client service for extracting, batch resolving in rounds, and rewriting Vertex AI grounding redirect links in message fragments.
- `src/modules/google/useVertexLinksForDisplay.ts`: React hook utilizing React Query to resolve Vertex AI redirect links on-the-fly for display operations without mutating message fragments.
- `src/modules/google/search.types.ts`: TypeScript type definitions for Google Custom Search client API and upstream wire formats.
- `src/modules/google/vertexai.types.ts`: TypeScript constants, types, and regexes for Vertex AI grounding redirect link parsing and resolution states.

## Public interface
- GoogleSearchSettings
- callApiSearchGoogle
- googleSearchRouter
- useGoogleSearchStore
- useVertexLinksForDisplay
- vertexLinksInFragments
- vertexLinksResolveFragments
- vertexLinksResolveUrls
- isValidGoogleCloudApiKey
- isValidGoogleCseId
- VERTEX_GROUNDING_REDIRECT_PREFIX
- VERTEX_GROUNDING_REDIRECT_REGEX

## Dependencies
- @trpc/server
- @tanstack/react-query
- @mui/joy
- @mui/icons-material
- zustand
- zod/v4
- ~/common/app.serverconf
- ~/common/components/ExternalLink
- ~/common/components/forms/FormLabelStart
- ~/common/components/Link
- ~/common/stores/chat/chat.fragments
- ~/common/stores/store-ai
- ~/common/util/abortUtils
- ~/common/util/trpc.client
- ~/server/env.server
- ~/server/trpc/trpc.router.fetchers
- ~/server/trpc/trpc.server

## AI touchpoints [AI]
- `src/modules/google/vertexai.client.ts`
- `src/modules/google/useVertexLinksForDisplay.ts`
- `src/modules/google/search.router.ts`

## Open questions
- _none_
