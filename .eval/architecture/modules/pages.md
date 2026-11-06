# Module: pages

Provides the Next.js Pages router routes and application lifecycle wrappers (_app and _document) that mount Big-AGI apps (Chat, Personas, Draw, Call, Diff, News, Tokens, Workspace) within a shared Optima layout, Emotion SSR theming, and tRPC query provider context.

## Key files
- `pages/_app.tsx`: Root application wrapper initializing tRPC, Emotion cache theming, backend capabilities, single tab provider, global snackbars/overlays, and third-party analytics.
- `pages/_document.tsx`: Custom Next.js Document configuring HTML/head metadata, PWA manifests, structured JSON-LD data, and Emotion server-side CSS extraction.
- `pages/index.tsx`: Default entry page rendering the main multi-model chat interface (AppChat) inside the Optima layout.
- `pages/personas.tsx`: Route entry point for AI Persona management (AppPersonas).
- `pages/call.tsx`: Route entry point for voice call interactions (AppCall).
- `pages/draw.tsx`: Route entry point for AI image generation (AppDraw).
- `pages/diff.tsx`: Route entry point for text/code diffing (AppDiff).
- `pages/news.tsx`: Route entry point for application release news and updates (AppNews), marking news as seen on load.
- `pages/tokens.tsx`: Route entry point for token and cost management (AppTokens).
- `pages/workspace.tsx`: Route entry point rendering placeholder workspace interface (AppPlaceholder).

## Public interface
- pages/_app.tsx: default export apiQuery.withTRPC(Big_AGI_App)
- pages/_document.tsx: default export MyDocument (with MyDocument.getInitialProps)
- pages/index.tsx: default export Next.js page wrapped with withNextJSPerPageLayout
- pages/call.tsx: default export Next.js page wrapped with withNextJSPerPageLayout
- pages/diff.tsx: default export Next.js page wrapped with withNextJSPerPageLayout
- pages/draw.tsx: default export Next.js page wrapped with withNextJSPerPageLayout
- pages/news.tsx: default export Next.js page wrapped with withNextJSPerPageLayout
- pages/personas.tsx: default export Next.js page wrapped with withNextJSPerPageLayout
- pages/tokens.tsx: default export Next.js page wrapped with withNextJSPerPageLayout
- pages/workspace.tsx: default export Next.js page wrapped with withNextJSPerPageLayout

## Dependencies
- react
- next/head
- next/dynamic
- next/app
- next/document
- @emotion/server/create-instance
- @mui/joy/InitColorSchemeScript
- @vercel/analytics/next
- katex
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
- ~/common/logic/store-logic-sherpa
- ~/common/providers/ProviderBackendCapabilities
- ~/common/providers/ProviderBootstrapLogic
- ~/common/providers/single-tab/ProviderSingleTab
- ~/common/providers/ProviderTheming
- ../src/apps/chat/AppChat
- ../src/apps/personas/AppPersonas
- ../src/apps/call/AppCall
- ../src/apps/draw/AppDraw
- ../src/apps/diff/AppDiff
- ../src/apps/news/AppNews
- ../src/apps/tokens/AppTokens
- ../src/apps/AppPlaceholder

## AI touchpoints [AI]
- `pages/index.tsx`
- `pages/personas.tsx`
- `pages/call.tsx`
- `pages/draw.tsx`

## Open questions
- pages/index.tsx includes a TODO note (#299) indicating that the index route will transition to a Dashboard or landing page rather than defaulting directly to AppChat.
