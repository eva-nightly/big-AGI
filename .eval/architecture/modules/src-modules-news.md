# Module: src/modules/news [AI]

Manages product news, changelog updates, feature announcements, and an embedded documentation reader, fetching remote feed data from big-agi.com, tracking client-side seen state, and alerting users to new features or outdated builds.

## Key files
- `src/modules/news/components/DocsReaderModal.tsx`: In-app documentation reader modal supporting search, breadcrumbs, markdown rendering, and AI service navigation.
- `src/modules/news/components/WhatsNewIndicators.tsx`: UI entry points and indicator components (modals container, badge dots, menu items, panel rows, and empty-chat changelog footer).
- `src/modules/news/components/WhatsNewModal.tsx`: Modal for reviewing changelog history grouped by date, feature announcements, and build freshness.
- `src/modules/news/news.config.ts`: Configuration constants for API endpoints, caching intervals, pagination limits, and build grace periods.
- `src/modules/news/news.feed.ts`: Zod schema definitions, URL builders, and React Query infinite fetching hook for the remote news API.
- `src/modules/news/news.platform.ts`: Deployment-specific audience tiering, remote feed toggles, and after-build update guidance.
- `src/modules/news/store-news-seen.ts`: Zustand persistent store and pure utilities for tracking seen changelog watermarks and announcement IDs.
- `src/modules/news/useNews.ts`: Core hook orchestrating boot-gated feed fetching, build cutoff date filtering, docs link interception, and modal display states.

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
- newsInterceptDocsLinks
- newsDocsLinkTarget
- newsBuildDay
- newsBuildIsBehind
- useNewsSeenStore
- newsSeenRewind
- newsSeenMerge
- newsChangelogSplit
- newsAnnouncementIsUnseen
- newsLocalDay
- useNewsFeed
- newsGroupChanges
- useNewsAudience
- useNewsAfterBuild
- NewsConfig

## Dependencies
- @tanstack/react-query
- zod/v4
- zustand
- @mui/joy
- @mui/icons-material
- ~/common/app.release
- ~/common/components/*
- ~/common/layout/optima/*
- ~/common/stores/store-ui
- ~/common/util/clientFetchers
- ~/common/util/pwaUtils
- ~/modules/blocks/*
- ~/modules/llms/*
- ~/common/gen/com.site.docs.slug

## AI touchpoints [AI]
- `src/modules/news/components/DocsReaderModal.tsx`

## Open questions
- _none_
