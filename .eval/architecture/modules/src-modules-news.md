# Module: src/modules/news [AI]

Provides in-app news, changelog, announcements, and documentation reader capabilities, tracking seen changes per user and presenting update indicators across UI surfaces.

## Key files
- `src/modules/news/news.config.ts`: Defines configuration constants, stale times, API endpoints, and display settings for news and docs.
- `src/modules/news/news.feed.ts`: Defines Zod schemas, types, and the React Query infinite feed hook for fetching remote news items.
- `src/modules/news/news.platform.ts`: Determines news audience settings, remote feed enablement, and deployment-specific build-behind policies.
- `src/modules/news/store-news-seen.ts`: Manages persistent Zustand store tracking user seen watermarks for changelogs and announcements.
- `src/modules/news/useNews.ts`: Coordinates modal UI state, boot gating, documentation link interception, and news data aggregation.
- `src/modules/news/components/WhatsNewIndicators.tsx`: Exports entry points and UI indicators (nav dot badge, empty chat footer, panel rows, menu items, and modals mount wrapper).
- `src/modules/news/components/WhatsNewModal.tsx`: Modal dialog for reviewing changelog history and announcements.
- `src/modules/news/components/DocsReaderModal.tsx`: In-app documentation reader and navigation modal.

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
- useNewsFeed
- newsGroupChanges
- useNewsSeenStore
- newsSeenMerge
- newsSeenRewind
- newsChangelogSplit
- newsAnnouncementIsUnseen
- newsLocalDay
- useNewsAudience
- useNewsAfterBuild
- NewsConfig

## Dependencies
- @tanstack/react-query
- zod/v4
- zustand
- @mui/joy
- @mui/icons-material
- react
- ~/common/app.release
- ~/common/util/clientFetchers
- ~/common/util/pwaUtils
- ~/common/components
- ~/common/layout/optima
- ~/modules/blocks/markdown/RenderMarkdown

## AI touchpoints [AI]
- `src/modules/news/components/DocsReaderModal.tsx`

## Open questions
- _none_
