# Module: src/modules/google

Provides Google Custom Search integration (settings, client, and tRPC backend) and resolves Gemini/Vertex AI grounding search redirect links in chat messages and citations.

## Key files
- `src/modules/google/GoogleSearchSettings.tsx`: React settings component for configuring Google Cloud API key, Custom Search Engine ID (CSE ID), and optional domain restrictions.
- `src/modules/google/search.router.ts`: tRPC router exposing the `search` query for Google Custom Search and `resolveGroundingRedirects` mutation for batch-resolving Vertex AI grounding links.
- `src/modules/google/search.client.ts`: Client-side search helper that queries the tRPC search endpoint using client store or server environment credentials.
- `src/modules/google/store-module-google.ts`: Persisted Zustand store managing user-configured Google Cloud API keys, CSE IDs, and domain restrictions.
- `src/modules/google/vertexai.client.ts`: Client utilities to extract, batch-resolve via server, and rewrite Vertex AI/Gemini grounding redirect URLs in chat message fragments.
- `src/modules/google/useVertexLinksForDisplay.ts`: React hook for resolving and replacing Vertex AI grounding redirect URLs for transient display operations without mutating message fragments.
- `src/modules/google/vertexai.types.ts`: Constants (URL prefix and regex pattern) and type definitions for Vertex AI grounding link resolution.
- `src/modules/google/search.types.ts`: Type definitions for Google Custom Search wire requests/responses and brief API results.

## Public interface
- GoogleSearchSettings
- googleSearchRouter
- callApiSearchGoogle
- isValidGoogleCloudApiKey
- isValidGoogleCseId
- useGoogleSearchStore
- useVertexLinksForDisplay
- vertexLinksInFragments
- vertexLinksResolveFragments
- vertexLinksResolveUrls
- VERTEX_GROUNDING_REDIRECT_PREFIX
- VERTEX_GROUNDING_REDIRECT_REGEX
- Search
- VertexLinkResolution
- VertexLinkUnresolved

## Dependencies
- react
- zustand
- zod/v4
- @trpc/server
- @tanstack/react-query
- @mui/joy
- @mui/icons-material
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
