# Module: src/modules/google

Provides integration with Google services including Google Programmable Custom Search Engine API querying and server-side resolution for Gemini/Vertex AI grounding redirect URLs.

## Key files
- `src/modules/google/GoogleSearchSettings.tsx`: React UI settings component for configuring Google Cloud API key, Custom Search Engine ID (CSE ID), and domain restrictions.
- `src/modules/google/search.client.ts`: Client-side search invocation wrapper and validation helpers for Google Cloud API key and CSE ID.
- `src/modules/google/search.router.ts`: tRPC server router providing endpoints for Google Custom Search queries and batch resolving Vertex AI grounding redirect links.
- `src/modules/google/search.types.ts`: TypeScript type and interface definitions for Google Custom Search request and response structures.
- `src/modules/google/store-module-google.ts`: Zustand store managing persistent client configuration for Google Custom Search credentials.
- `src/modules/google/useVertexLinksForDisplay.ts`: React hook to resolve transient Vertex AI search redirect URLs in chat display operations without modifying underlying fragments.
- `src/modules/google/vertexai.client.ts`: Client-side utilities to find, batch resolve, and rewrite Vertex AI grounding redirect links in message fragments and citations.
- `src/modules/google/vertexai.types.ts`: Constants and type definitions for Vertex AI grounding redirects and resolution outcomes.

## Public interface
- GoogleSearchSettings()
- callApiSearchGoogle(query: string, items: number, restrictToDomain?: string): Promise<{ pages: Search.API.BriefResult[] }>
- isValidGoogleCloudApiKey(apiKey?: string): boolean
- isValidGoogleCseId(cseId?: string): boolean
- googleSearchRouter
- useGoogleSearchStore
- useVertexLinksForDisplay(op: DVoidPlaceholderMOp): DVoidPlaceholderMOp
- vertexLinksInFragments(fragments: readonly DMessageFragment[]): Set<string>
- vertexLinksResolveFragments(fragments: readonly DMessageFragment[], signal?: AbortSignal)
- vertexLinksResolveUrls(urls: Iterable<string>, signal?: AbortSignal)
- VERTEX_GROUNDING_REDIRECT_PREFIX
- VERTEX_GROUNDING_REDIRECT_REGEX

## Dependencies
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- @trpc/server
- react
- zod/v4
- zustand
- zustand/middleware
- zustand/react/shallow

## AI touchpoints [AI]
- `src/modules/google/vertexai.client.ts`
- `src/modules/google/useVertexLinksForDisplay.ts`
- `src/modules/google/search.router.ts`

## Open questions
- _none_
