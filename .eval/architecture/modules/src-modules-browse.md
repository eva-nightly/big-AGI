# Module: src/modules/browse

Provides web page browsing, scraping, content conversion (HTML, text, markdown), file download handling, and screenshot capture via remote Puppeteer WSS endpoints for LLM consumption, chat attachments, and tools.

## Key files
- `src/modules/browse/browse.client.ts`: Client-side fetch caller invoking the streaming tRPC browse endpoint and handling errors
- `src/modules/browse/browse.router.ts`: tRPC router defining streaming page-fetching procedures and Puppeteer remote execution logic
- `src/modules/browse/browse.markdown.ts`: Document-to-markdown conversion and DOM cleanup utilities for LLM-readable page formatting
- `src/modules/browse/browse.files.ts`: Allowlist validation and base64 download handler for non-webpage file types
- `src/modules/browse/store-module-browsing.tsx`: Zustand state store and capability hooks for browsing configuration and tool toggles
- `src/modules/browse/BrowseSettings.tsx`: React UI component for configuring Puppeteer WSS endpoint, transform formats, and tool integration flags

## Public interface
- callBrowseFetchPageOrThrow(url: string, transforms?: BrowsePageTransform[], screenshotOptions?: { width: number, height: number, quality?: number }, allowFileDownloads?: boolean): Promise<FetchPageWorkerOutputSchema>
- browseRouter: tRPC router providing fetchPagesStreaming procedure
- documentToMarkdown(doc: Document, scope?: 'document' | 'body'): string
- toAbsoluteUrl(url: string, pageUrl: string | undefined): string
- replaceNode(target: Node, nodes: Node[]): void
- workerPuppeteerDownloadFileOrThrow(response: HTTPResponse): Promise<{ file: { mimeType: string, data: string, size: number, filename?: string, category?: string } }>
- useBrowseStore: Zustand hook for browsing preferences and WSS endpoints
- useBrowseCapability(): CapabilityBrowsing
- BrowseSettings(): React.JSX.Element

## Dependencies
- puppeteer-core
- turndown
- @mixmark-io/domino
- zod/v4
- @trpc/server
- zustand
- @mui/joy
- ~/server/trpc/trpc.server
- ~/server/env.server
- ~/common/util/trpc.client
- ~/common/components/useCapabilities
- ~/common/app.serverconf

## AI touchpoints [AI]
- `src/modules/browse/browse.markdown.ts`
- `src/modules/browse/BrowseSettings.tsx`

## Open questions
- DISABLE_FILE_DOWNLOADS is hardcoded to true in browse.router.ts with a FIXME comment about enabling downloads for authenticated users.
- The Personas browsing tool checkbox is hardcoded as disabled with a note stating it is available in a future release.
