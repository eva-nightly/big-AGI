# Module: pages

Implements the Next.js Pages router entry points and HTML document structure for Big-AGI, providing root layout wrappers, global styles, providers, emotion SSR styling, and page route wrappers around workspace applications (Chat, Call, Draw, Personas, Diff, News, Tokens, and Workspace).

## Key files
- `pages/_app.tsx`: Root Next.js App component configuring global styles, tRPC and React Query integration via apiQuery, single-tab management, theming, backend capabilities, error boundaries, analytics, and per-page layout rendering.
- `pages/_document.tsx`: Custom Next.js Document handling server-side rendering of Emotion CSS styles, MUI Joy color schemes, OpenGraph and Twitter meta tags, favicons, PWA manifest links, and structured JSON-LD data.
- `pages/index.tsx`: Main index page route rendering AppChat within the optima layout.
- `pages/call.tsx`: Page route rendering AppCall (voice calling interface) with optima layout.
- `pages/draw.tsx`: Page route rendering AppDraw (image generation interface) with optima layout.
- `pages/personas.tsx`: Page route rendering AppPersonas (AI persona and preset configuration) with optima layout.
- `pages/diff.tsx`: Page route rendering AppDiff with optima layout.
- `pages/news.tsx`: Page route rendering AppNews with suspended auto-models setup and markNewsAsSeen tracking.
- `pages/tokens.tsx`: Page route rendering AppTokens with optima layout.
- `pages/workspace.tsx`: Page route rendering AppPlaceholder with optima layout.

## Public interface
- default export (pages/_app.tsx): Next.js App wrapper wrapped with apiQuery.withTRPC
- default export (pages/_document.tsx): Next.js Document component with custom getInitialProps for Emotion SSR
- default export (pages/index.tsx): Next.js page component for Chat
- default export (pages/call.tsx): Next.js page component for Call
- default export (pages/diff.tsx): Next.js page component for Diff
- default export (pages/draw.tsx): Next.js page component for Draw
- default export (pages/news.tsx): Next.js page component for News
- default export (pages/personas.tsx): Next.js page component for Personas
- default export (pages/tokens.tsx): Next.js page component for Tokens
- default export (pages/workspace.tsx): Next.js page component for Workspace placeholder

## Dependencies
- react
- next/head
- next/dynamic
- next/app
- next/document
- @emotion/server/create-instance
- @mui/joy/InitColorSchemeScript
- @vercel/analytics/next
- katex/dist/katex.min.css
- ~/common/app.config
- ~/common/app.theme
- ~/common/util/trpc.client
- ~/common/util/pwaUtils
- ~/common/components/ErrorBoundary
- ~/common/components/snackbar/SnackbarInsert
- ~/common/components/3rdparty/GoogleAnalytics
- ~/common/components/3rdparty/PostHogAnalytics
- ~/common/components/3rdparty/UrlTrackingCleaner
- ~/common/layout/overlays/OverlaysInsert
- ~/common/layout/withLayout
- ~/common/providers/ProviderBackendCapabilities
- ~/common/providers/ProviderBootstrapLogic
- ~/common/providers/single-tab/ProviderSingleTab
- ~/common/providers/ProviderTheming
- ~/common/logic/store-logic-sherpa
- ../src/apps/call/AppCall
- ../src/apps/chat/AppChat
- ../src/apps/diff/AppDiff
- ../src/apps/draw/AppDraw
- ../src/apps/news/AppNews
- ../src/apps/personas/AppPersonas
- ../src/apps/tokens/AppTokens
- ../src/apps/AppPlaceholder

## AI touchpoints [AI]
- `pages/index.tsx`
- `pages/call.tsx`
- `pages/draw.tsx`
- `pages/personas.tsx`

## Open questions
- _none_
