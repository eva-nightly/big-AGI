# Module: src/modules/browse

Provides web browsing and page fetching capabilities using remote Puppeteer WebSocket connections, converting downloaded web pages into HTML, plain text, or LLM-optimized Markdown for chat attachments, ReAct agent tools, and persona workflows.

## Key files
- `src/modules/browse/browse.client.ts`: Client helper that initiates streaming tRPC requests to fetch and transform web pages via the browsing service.
- `src/modules/browse/browse.files.ts`: Validation, sanitization, and base64 extraction helper for allowed file downloads (PDF, Office docs, text, images) fetched via Puppeteer.
- `src/modules/browse/browse.markdown.ts`: Cleans DOM nodes (stripping UI chrome, buttons, empty links) and converts HTML to Markdown formatted specifically for LLM consumption using Turndown.
- `src/modules/browse/browse.router.ts`: tRPC server router implementing streaming Puppeteer browser navigation, page extraction, screenshot captures, and error handling.
- `src/modules/browse/BrowseSettings.tsx`: React settings UI component configuring the Puppeteer WSS endpoint, LLM page transform format, and integration toggles for Composer and ReAct.
- `src/modules/browse/store-module-browsing.tsx`: Persisted Zustand store for browsing configuration and custom capability hook (`useBrowseCapability`).

## Public interface
- callBrowseFetchPageOrThrow(url: string, transforms?: BrowsePageTransform[], screenshotOptions?: { width: number, height: number, quality?: number }, allowFileDownloads?: boolean): Promise<FetchPageWorkerOutputSchema>
- workerPuppeteerDownloadFileOrThrow(response: HTTPResponse): Promise<{ file: { mimeType: string, data: string, size: number, filename?: string, category?: string } }>
- toAbsoluteUrl(url: string, pageUrl: string | undefined): string
- replaceNode(target: Node, nodes: Node[]): void
- documentToMarkdown(doc: Document, scope?: 'document' | 'body'): string
- browseRouter: TRPCRouterRecord
- FetchPageWorkerOutputSchema
- BrowseSettings(): React.JSX.Element
- useBrowseStore: UseBoundStore<StoreApi<BrowseState>>
- useBrowseCapability(): CapabilityBrowsing
- type BrowsePageTransform = 'html' | 'text' | 'markdown'

## Dependencies
- puppeteer-core
- @mixmark-io/domino
- turndown
- zod/v4
- @trpc/server
- zustand
- zustand/middleware
- zustand/react/shallow
- @mui/joy
- ~/common/util/trpc.client
- ~/common/components/AlreadySet
- ~/common/components/ExternalDocsLink
- ~/common/components/forms/FormInputKey
- ~/common/components/forms/FormLabelStart
- ~/common/components/KeyStroke
- ~/common/components/useCapabilities
- ~/common/app.serverconf
- ~/server/trpc/trpc.server
- ~/server/env.server

## AI touchpoints [AI]
- `src/modules/browse/browse.markdown.ts`
- `src/modules/browse/BrowseSettings.tsx`
- `src/modules/browse/store-module-browsing.tsx`

## Open questions
- File downloading via Puppeteer is currently hardcoded off on the server (`DISABLE_FILE_DOWNLOADS = true` in browse.router.ts with a FIXME comment about authenticated users); is there a timeline or planned auth mechanism to re-enable it?
- Personas browsing tool integration is marked as disabled in BrowseSettings.tsx with the note 'Available in a future release'.
