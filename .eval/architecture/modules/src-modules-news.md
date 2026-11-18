# Module: src/modules/news [AI]

Manages in-app product news, changelog updates, announcements, and integrated documentation reading fetched from the central big-agi.com app API.

## Key files
- `src/modules/news/news.config.ts`: Defines global module configuration constants including API endpoints, stale times, pagination limits, and indicator flags.
- `src/modules/news/news.feed.ts`: Defines Zod schemas and query hooks (TanStack Query) to fetch, validate, and group remote news and changelog items.
- `src/modules/news/news.platform.ts`: Configures audience and deployment-specific policies regarding remote feeds and after-build update nudges.
- `src/modules/news/store-news-seen.ts`: Zustand store tracking user-seen watermarks for changelogs and read announcement IDs with local persistence.
- `src/modules/news/useNews.ts`: Central orchestration hook and state management for news modals, boot gates, doc link interception, and unseen item computation.
- `src/modules/news/components/WhatsNewIndicators.tsx`: Entry-point UI components including navigation dots, menu items, panel rows, and empty chat status lines.
- `src/modules/news/components/WhatsNewModal.tsx`: Modal dialog displaying recent changelogs grouped by day/year, unseen markers, and media announcements.
- `src/modules/news/components/DocsReaderModal.tsx`: Modal interface providing an in-app reader for markdown documentation fetched from the site API.

## Public interface
- NewsModals
- WhatsNewNavDot
- WhatsNewMenuItem
- DocsMenuItem
- WhatsNewPanelRow
- WhatsNewEmptyChatLine
- useNews
- useNewsModals
- newsOpenWhatsNew
- newsCloseWhatsNew
- newsOpenDocs
- newsCloseDocs
- newsInterceptDocsLinks
- newsDocsLinkTarget
- newsBuildDay
- newsBuildIsBehind
- newsLocalDay
- newsSeenRewind
- newsSeenMerge
- useNewsSeenStore

## Dependencies
- @tanstack/react-query
- zustand
- zod/v4
- @mui/joy
- @mui/icons-material
- ~/common/app.release
- ~/common/components/modals/GoodModal
- ~/common/components/AppBreadcrumbs
- ~/common/components/LiteVideoEmbed
- ~/common/components/useMatchMedia
- ~/common/layout/optima/panel/OptimaPanelGroupedList
- ~/common/layout/optima/useOptima
- ~/common/stores/store-ui
- ~/common/util/clientFetchers
- ~/common/util/pwaUtils
- ~/modules/blocks/markdown/RenderMarkdown
- ~/modules/blocks/blocks.styles
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/vendors/openai/OpenAIHostAutocomplete
- ~/modules/llms/components/LLMVendorIcon

## AI touchpoints [AI]
- `src/modules/news/components/DocsReaderModal.tsx`

## Open questions
- _none_
