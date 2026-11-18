# Module: src/modules/browse

Provides web page fetching, file downloading, and HTML-to-text/markdown content conversion services using Puppeteer over WebSockets for ingestion by chat, composer attachments, ReAct agents, and Personas.

## Key files
- `src/modules/browse/browse.client.ts`: Client-side fetch caller invoking the tRPC streaming endpoint for browsing pages.
- `src/modules/browse/browse.router.ts`: tRPC router handling streaming browser actions using puppeteer-core and managing connection sessions.
- `src/modules/browse/browse.markdown.ts`: Converts DOM documents into LLM-friendly Markdown formatting using TurndownService and DOM cleanups.
- `src/modules/browse/browse.files.ts`: Validates MIME types, formats, and size limits for downloaded files intercepted during web browsing.
- `src/modules/browse/store-module-browsing.tsx`: Zustand store managing browsing preferences (WSS endpoint, transform type, feature enable toggles) and derived browsing capabilities.
- `src/modules/browse/BrowseSettings.tsx`: Settings UI component for configuring Puppeteer WSS endpoints, page transformation modes, and browsing tool integrations.

## Public interface
- callBrowseFetchPageOrThrow(url, transforms?, screenshotOptions?, allowFileDownloads?)
- workerPuppeteerDownloadFileOrThrow(response)
- toAbsoluteUrl(url, pageUrl)
- replaceNode(target, nodes)
- documentToMarkdown(doc, scope?)
- browseRouter
- useBrowseStore
- useBrowseCapability()
- BrowseSettings()

## Dependencies
- zustand
- zustand/middleware
- zustand/react/shallow
- @mui/joy
- turndown
- puppeteer-core
- @mixmark-io/domino
- zod/v4
- @trpc/server

## AI touchpoints [AI]
- `src/modules/browse/browse.markdown.ts`
- `src/modules/browse/BrowseSettings.tsx`

## Open questions
- _none_
