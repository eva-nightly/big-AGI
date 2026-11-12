# Module: src/modules/google

Provides Google Programmable Search integration and server-side resolution for Vertex AI / Gemini grounding redirect links.

## Key files
- `src/modules/google/search.router.ts`: tRPC router implementing Google Custom Search queries and server-side HTTP resolution of Vertex AI grounding redirect URLs.
- `src/modules/google/search.client.ts`: Client-side search caller invoking the Google search tRPC procedure with stored API keys.
- `src/modules/google/vertexai.client.ts`: Client utilities to extract, batch resolve, and rewrite Vertex AI grounding redirect links in chat message fragments.
- `src/modules/google/useVertexLinksForDisplay.ts`: React hook to resolve and display Vertex grounding redirect links dynamically in transient search status operations.
- `src/modules/google/store-module-google.ts`: Zustand persistent store for Google Cloud API key, Custom Search Engine ID, and domain restriction settings.
- `src/modules/google/GoogleSearchSettings.tsx`: React settings UI component for configuring Google Cloud API key, CSE ID, and domain restrictions.
- `src/modules/google/search.types.ts`: Type definitions for Google Custom Search request and response payloads.
- `src/modules/google/vertexai.types.ts`: Constants and type definitions for Vertex AI grounding redirect URLs and link resolutions.

## Public interface
- GoogleSearchSettings()
- callApiSearchGoogle(query: string, items: number, restrictToDomain?: string): Promise<{ pages: Search.API.BriefResult[] }>
- isValidGoogleCloudApiKey(apiKey?: string): boolean
- isValidGoogleCseId(cseId?: string): boolean
- useGoogleSearchStore
- googleSearchRouter
- useVertexLinksForDisplay(op: DVoidPlaceholderMOp): DVoidPlaceholderMOp
- vertexLinksInFragments(fragments: readonly DMessageFragment[]): Set<string>
- vertexLinksResolveFragments(fragments: readonly DMessageFragment[], signal?: AbortSignal): Promise<{ rewritten: DMessageFragment[]; unresolved: Map<string, VertexLinkUnresolved> }>
- vertexLinksResolveUrls(urls: Iterable<string>, signal?: AbortSignal): Promise<{ destinations: Map<string, string>; unresolved: Map<string, VertexLinkUnresolved> }>
- VERTEX_GROUNDING_REDIRECT_PREFIX
- VERTEX_GROUNDING_REDIRECT_REGEX

## Dependencies
- react
- zustand
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zod/v4
- @trpc/server
- ~/common/app.serverconf
- ~/common/components/ExternalLink
- ~/common/components/forms/FormLabelStart
- ~/common/components/Link
- ~/common/util/trpc.client
- ~/common/util/abortUtils
- ~/common/stores/chat/chat.fragments
- ~/common/stores/store-ai
- ~/server/trpc/trpc.server
- ~/server/env.server
- ~/server/trpc/trpc.router.fetchers

## AI touchpoints [AI]
- `src/modules/google/vertexai.client.ts`
- `src/modules/google/useVertexLinksForDisplay.ts`
- `src/modules/google/search.router.ts`

## Open questions
- _none_
