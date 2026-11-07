# Module: src/modules/google

Provides Google Programmable Search integration and server-side resolution for Vertex AI / Gemini grounding redirect links.

## Key files
- `src/modules/google/search.router.ts`: tRPC router handling backend Google Custom Search API queries and batch resolution of Vertex AI grounding redirect URLs.
- `src/modules/google/search.client.ts`: Client helper executing search queries through the tRPC backend.
- `src/modules/google/vertexai.client.ts`: Client service that coordinates chunked and retry-based batch resolution of Vertex AI grounding redirect links, updating chat fragments and citations.
- `src/modules/google/useVertexLinksForDisplay.ts`: React query hook to resolve transient web search status redirect URLs for UI display without mutating message fragments.
- `src/modules/google/GoogleSearchSettings.tsx`: React UI component for configuring Google Cloud API key, Custom Search Engine (CSE) ID, and domain restriction.
- `src/modules/google/store-module-google.ts`: Zustand store persisting Google Custom Search API credentials and domain settings.
- `src/modules/google/search.types.ts`: Type definitions for Google Custom Search API requests, responses, and wire formats.
- `src/modules/google/vertexai.types.ts`: Constants and types defining Vertex AI grounding redirect URL patterns and resolution outcomes.

## Public interface
- GoogleSearchSettings
- useGoogleSearchStore
- callApiSearchGoogle
- isValidGoogleCloudApiKey
- isValidGoogleCseId
- googleSearchRouter
- useVertexLinksForDisplay
- vertexLinksInFragments
- vertexLinksResolveFragments
- vertexLinksResolveUrls
- VERTEX_GROUNDING_REDIRECT_PREFIX
- VERTEX_GROUNDING_REDIRECT_REGEX

## Dependencies
- react
- zustand
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- @trpc/server
- zod
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
