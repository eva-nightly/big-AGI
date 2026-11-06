# Module: src/modules/news [AI]

Client-side news, changelog, announcements, and in-app documentation reader module. Fetches updates and docs from big-agi.com, manages user seen marks/watermarks, and provides modal dialogs and indicators across navigation, panel, and empty chat surfaces.

## Key files
- `src/modules/news/news.config.ts`: Configuration constants for API base URL, polling/stale times, page limits, announcement flags, and indicator toggles
- `src/modules/news/news.feed.ts`: React Query infinite query hook, API fetchers, and Zod schema validations for the remote news/changelog feed
- `src/modules/news/news.platform.ts`: Platform-specific audience and build-policy configuration (e.g. Docker, Vercel, local build policies)
- `src/modules/news/store-news-seen.ts`: Zustand persisted store tracking changelog watermarks and seen announcement IDs, with merge and split helper logic
- `src/modules/news/useNews.ts`: State management for modals, boot gating, docs link interception, build window calculations, and the primary useNews hook
- `src/modules/news/components/DocsReaderModal.tsx`: In-app markdown documentation reader modal with search, breadcrumbs, and page navigation
- `src/modules/news/components/WhatsNewModal.tsx`: What's New modal displaying changelog day groupings, mini-formatted text, and announcements
- `src/modules/news/components/WhatsNewIndicators.tsx`: UX entry point components including modals wrapper, menu items, panel rows, nav dots, and empty chat status lines

## Public interface
- NewsModals
- WhatsNewNavDot
- WhatsNewMenuItem
- DocsMenuItem
- WhatsNewPanelRow
- WhatsNewEmptyChatLine
- DocsReaderModal
- WhatsNewModal
- useNews
- useNewsModals
- newsOpenWhatsNew
- newsCloseWhatsNew
- newsOpenDocs
- newsCloseDocs
- newsDocsLinkTarget
- newsInterceptDocsLinks
- newsBuildDay
- newsBuildIsBehind
- useNewsFeed
- newsGroupChanges
- useNewsAudience
- useNewsAfterBuild
- useNewsSeenStore
- newsLocalDay
- newsSeenRewind
- newsSeenMerge
- newsChangelogSplit
- newsAnnouncementIsUnseen

## Dependencies
- @tanstack/react-query
- zustand
- zod/v4
- @mui/joy
- @mui/icons-material
- ~/common/gen/com.site.docs.slug
- ~/common/app.release
- ~/common/components/AppBreadcrumbs
- ~/common/components/GoodModal
- ~/common/components/LiteVideoEmbed
- ~/common/components/icons/ChatBeamIcon
- ~/common/components/icons/phosphor/PhBookOpenText
- ~/common/components/icons/phosphor/PhHouse
- ~/common/layout/optima/panel/OptimaPanelGroupedList
- ~/common/layout/optima/useOptima
- ~/common/stores/store-ui
- ~/common/util/clientFetchers
- ~/common/util/pwaUtils
- ~/modules/blocks/blocks.styles
- ~/modules/blocks/markdown/RenderMarkdown
- ~/modules/llms/components/LLMVendorIcon
- ~/modules/llms/vendors/openai/OpenAIHostAutocomplete
- ~/modules/llms/vendors/vendors.registry

## AI touchpoints [AI]
- `src/modules/news/components/DocsReaderModal.tsx`

## Open questions
- _none_
