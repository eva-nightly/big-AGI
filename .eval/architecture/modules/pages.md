# Module: pages

Next.js Pages Router top-level application shell and route definitions, providing document structure, SSR Emotion CSS styling, global provider nesting, analytics, and page wrappers for chat, drawing, personas, news, voice calls, diffing, tokens, and workspaces.

## Key files
- `pages/_app.tsx`: Global application wrapper integrating tRPC (apiQuery), global styles, the 'Optima' per-page layout pattern, error boundaries, overlays, snackbars, and context providers (theming, single-tab, backend capabilities).
- `pages/_document.tsx`: Next.js Document wrapper handling HTML head metadata, PWA configuration, OpenGraph/JSON-LD structured data, and server-side Emotion CSS style extraction.
- `pages/index.tsx`: Default home route currently rendering the main chat experience (AppChat) with an Optima layout.
- `pages/call.tsx`: Page route rendering the voice/call interface (AppCall).
- `pages/draw.tsx`: Page route rendering the image generation/drawing interface (AppDraw).
- `pages/personas.tsx`: Page route rendering the AI personas management interface (AppPersonas).
- `pages/diff.tsx`: Page route rendering the code/text diffing tool (AppDiff).
- `pages/tokens.tsx`: Page route rendering the tokens analysis/management interface (AppTokens).
- `pages/news.tsx`: Page route rendering product news and updates (AppNews), marking news as seen upon viewing.
- `pages/workspace.tsx`: Page route rendering the workspace placeholder (AppPlaceholder).

## Public interface
- default export (pages/_app.tsx): Next.js App component wrapped with apiQuery.withTRPC
- default export (pages/_document.tsx): Next.js Document component with custom getInitialProps for Emotion SSR extraction
- default export (pages/index.tsx): Next.js page component rendering AppChat wrapped in Optima layout
- default export (pages/call.tsx): Next.js page component rendering AppCall wrapped in Optima layout
- default export (pages/diff.tsx): Next.js page component rendering AppDiff wrapped in Optima layout
- default export (pages/draw.tsx): Next.js page component rendering AppDraw wrapped in Optima layout
- default export (pages/news.tsx): Next.js page component rendering AppNews wrapped in Optima layout
- default export (pages/personas.tsx): Next.js page component rendering AppPersonas wrapped in Optima layout
- default export (pages/tokens.tsx): Next.js page component rendering AppTokens wrapped in Optima layout
- default export (pages/workspace.tsx): Next.js page component rendering AppPlaceholder wrapped in Optima layout

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
- ~/common/layout/overlays/OverlaysInsert
- ~/common/providers/ProviderBackendCapabilities
- ~/common/providers/ProviderBootstrapLogic
- ~/common/providers/single-tab/ProviderSingleTab
- ~/common/providers/ProviderTheming
- ~/common/components/snackbar/SnackbarInsert
- ~/common/components/3rdparty/GoogleAnalytics
- ~/common/components/3rdparty/PostHogAnalytics
- ~/common/components/3rdparty/UrlTrackingCleaner
- ~/common/layout/withLayout
- ~/common/logic/store-logic-sherpa
- ../src/apps/call/AppCall
- ../src/apps/diff/AppDiff
- ../src/apps/draw/AppDraw
- ../src/apps/chat/AppChat
- ../src/apps/news/AppNews
- ../src/apps/personas/AppPersonas
- ../src/apps/tokens/AppTokens
- ../src/apps/AppPlaceholder

## AI touchpoints [AI]
- `pages/index.tsx`
- `pages/draw.tsx`
- `pages/call.tsx`
- `pages/personas.tsx`

## Open questions
- pages/index.tsx has a TODO referencing issue #299 indicating the index route will point to a Dashboard or landing page rather than directly loading AppChat.
