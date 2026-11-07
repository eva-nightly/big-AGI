# Module: src/modules/browse

Provides web page browsing, scraping, content conversion (HTML, text, markdown for LLMs), screenshot capturing, and file download processing via headless Puppeteer WebSocket services for chat attachments and agent tools.

## Key files
- `src/modules/browse/browse.client.ts`: Client-side fetch orchestrator calling the tRPC streaming mutation to retrieve browser-rendered web pages.
- `src/modules/browse/browse.router.ts`: Server-side tRPC router executing Puppeteer sessions over WebSocket endpoints to navigate, extract content, and capture screenshots.
- `src/modules/browse/browse.markdown.ts`: DOM cleaning and Turndown-based HTML-to-markdown conversion tailored for LLM consumption.
- `src/modules/browse/browse.files.ts`: Validation, sanitization, and base64 extraction for files downloaded during browsing based on MIME types and size constraints.
- `src/modules/browse/store-module-browsing.tsx`: Zustand store and capability inspection hook for managing browsing settings, WSS endpoints, and feature toggles.
- `src/modules/browse/BrowseSettings.tsx`: React UI configuration panel for adjusting WSS connection strings, conversion formats, and tool attachment preferences.

## Public interface
- callBrowseFetchPageOrThrow(url: string, transforms?: BrowsePageTransform[], screenshotOptions?: { width: number, height: number, quality?: number }, allowFileDownloads?: boolean)
- browseRouter
- FetchPageWorkerOutputSchema
- workerPuppeteerDownloadFileOrThrow(response: HTTPResponse)
- documentToMarkdown(doc: Document, scope?: 'document' | 'body'): string
- toAbsoluteUrl(url: string, pageUrl: string | undefined): string
- replaceNode(target: Node, nodes: Node[]): void
- useBrowseStore
- useBrowseCapability()
- BrowseSettings()
- BrowsePageTransform

## Dependencies
- puppeteer-core
- @mixmark-io/domino
- turndown
- zod/v4
- @trpc/server
- zustand
- @mui/joy
- ~/common/util/trpc.client
- ~/server/trpc/trpc.server
- ~/server/env.server
- ~/common/components/useCapabilities
- ~/common/app.serverconf

## AI touchpoints [AI]
- `src/modules/browse/browse.markdown.ts`

## Open questions
- _none_
