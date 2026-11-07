# Module: src/modules/news [AI]

Provides the What's New changelog, product announcements, and in-app documentation reader, tracking user-seen watermarks locally and syncing with remote feeds from big-agi.com.

## Key files
- `src/modules/news/news.feed.ts`: Fetches, parses, and validates paginated news items and announcements from the remote API using React Query and Zod.
- `src/modules/news/useNews.ts`: Orchestrates modal open/close states, docs link interception, idle boot gating, and changelog delta calculations relative to the current build date.
- `src/modules/news/store-news-seen.ts`: Persisted Zustand store tracking the user's latest seen changelog watermark and viewed announcement IDs.
- `src/modules/news/components/DocsReaderModal.tsx`: Desktop and mobile modal for browsing, searching, and reading remote documentation markdown pages within the app.
- `src/modules/news/components/WhatsNewModal.tsx`: Modal displaying grouped changelog ledger entries and announcement details.
- `src/modules/news/components/WhatsNewIndicators.tsx`: UI entry points including notification dots, side panel items, chat footer lines, and menu links for What's New and docs.
- `src/modules/news/news.config.ts`: Configuration constants defining API endpoints, cache staleness, build window graces, and UX display flags.
- `src/modules/news/news.platform.ts`: Platform audience resolution and after-build update notification policies based on deployment type.

## Public interface
- NewsModals
- WhatsNewNavDot
- WhatsNewMenuItem
- DocsMenuItem
- WhatsNewPanelRow
- WhatsNewEmptyChatLine
- WhatsNewModal
- DocsReaderModal
- useNews
- useNewsModals
- useNewsFeed
- useNewsSeenStore
- useNewsAudience
- useNewsAfterBuild
- newsOpenWhatsNew
- newsCloseWhatsNew
- newsOpenDocs
- newsCloseDocs
- newsDocsLinkTarget
- newsInterceptDocsLinks
- newsBuildDay
- newsBuildIsBehind
- newsGroupChanges
- newsSeenMerge
- newsChangelogSplit
- newsAnnouncementIsUnseen
- newsLocalDay
- newsSeenRewind
- NewsConfig

## Dependencies
- react
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zod/v4
- zustand
- ~/common/app.release
- ~/common/components/AppBreadcrumbs
- ~/common/components/GoodModal
- ~/common/components/LiteVideoEmbed
- ~/common/components/icons/*
- ~/common/components/useMatchMedia
- ~/common/gen/com.site.docs.slug
- ~/common/layout/optima/*
- ~/common/stores/store-ui
- ~/common/util/clientFetchers
- ~/common/util/pwaUtils
- ~/modules/blocks/blocks.styles
- ~/modules/blocks/markdown/RenderMarkdown
- ~/modules/llms/components/LLMVendorIcon
- ~/modules/llms/vendors/*

## AI touchpoints [AI]
- `src/modules/news/components/DocsReaderModal.tsx`

## Open questions
- _none_
