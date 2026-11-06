# Module: src/modules/browse

Provides web page scraping, rendering, and file downloading capabilities via Puppeteer over WebSockets, transforming HTML into LLM-friendly text or markdown formats for use in composer attachments, ReAct agent tools, and personas.

## Key files
- `src/modules/browse/browse.client.ts`: Client-side entry point for requesting page fetches via streaming tRPC calls to the browsing worker
- `src/modules/browse/browse.router.ts`: Server-side tRPC router orchestrating Puppeteer browser automation, screenshots, content transformation, and stream responses
- `src/modules/browse/browse.markdown.ts`: Converts DOM/HTML structures into clean Markdown specifically tailored for LLM consumption using Turndown
- `src/modules/browse/browse.files.ts`: Handles and validates file downloads during browsing, enforcing allowed MIME types and size limits
- `src/modules/browse/store-module-browsing.tsx`: Zustand store and capability hook managing browser WSS endpoints, page transformation preferences, and agent tool enablement
- `src/modules/browse/BrowseSettings.tsx`: Settings UI component for configuring Puppeteer WSS endpoints, transform types (text/markdown/html), and integration toggles

## Public interface
- callBrowseFetchPageOrThrow(url: string, transforms?: BrowsePageTransform[], screenshotOptions?: { width: number, height: number, quality?: number }, allowFileDownloads?: boolean)
- workerPuppeteerDownloadFileOrThrow(response: HTTPResponse)
- toAbsoluteUrl(url: string, pageUrl: string | undefined): string
- replaceNode(target: Node, nodes: Node[]): void
- documentToMarkdown(doc: Document, scope?: 'document' | 'body'): string
- browseRouter
- FetchPageWorkerOutputSchema
- BrowseSettings()
- useBrowseStore
- useBrowseCapability()
- BrowsePageTransform

## Dependencies
- turndown
- puppeteer-core
- @mixmark-io/domino
- zod/v4
- @trpc/server
- zustand
- @mui/joy
- ~/common/util/trpc.client
- ~/server/trpc/trpc.server
- ~/server/env.server
- ~/common/components/AlreadySet
- ~/common/components/ExternalDocsLink
- ~/common/components/forms/FormInputKey
- ~/common/components/forms/FormLabelStart
- ~/common/components/KeyStroke
- ~/common/components/useCapabilities
- ~/common/app.serverconf

## AI touchpoints [AI]
- `src/modules/browse/browse.markdown.ts`
- `src/modules/browse/store-module-browsing.tsx`
- `src/modules/browse/BrowseSettings.tsx`

## Open questions
- File downloads are hardcoded to disabled (DISABLE_FILE_DOWNLOADS = true) in browse.router.ts pending authenticated user support.
- Personas browsing tool toggle in BrowseSettings.tsx is disabled with a placeholder label indicating availability in a future release.
