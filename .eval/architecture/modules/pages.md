# Module: pages

Serves as the Next.js Pages router entry points and HTML/document scaffolding for big-AGI, providing root layout context wrappers (Emotion theming, backend capabilities, tRPC/React Query, single-tab lock, error boundaries, analytics) and routing to specific mini-apps like chat, personas, voice calls, drawing, diffing, tokens, news, and workspace placeholders.

## Key files
- `pages/_app.tsx`: Root Next.js App component wrapped with tRPC; mounts global styling, provider stacks (theming, capabilities, bootstrap, single tab), error boundaries, overlays, snackbars, and analytics.
- `pages/_document.tsx`: Custom Next.js Document configuring HTML metadata, SEO, PWA manifests, OpenGraph, JSON-LD structured data, Emotion SSR critical CSS extraction, and color scheme initialization.
- `pages/index.tsx`: Main index page route rendering the AppChat component within the Optima layout.
- `pages/personas.tsx`: Route page rendering the AppPersonas component within the Optima layout.
- `pages/call.tsx`: Route page rendering the AppCall voice application.
- `pages/draw.tsx`: Route page rendering the AppDraw image generation application.
- `pages/diff.tsx`: Route page rendering the AppDiff comparison tool.
- `pages/tokens.tsx`: Route page rendering the AppTokens application.
- `pages/news.tsx`: Route page rendering AppNews and tracking seen news state.
- `pages/workspace.tsx`: Route page rendering the AppPlaceholder component.

## Public interface
- default export (pages/_app.tsx): Next.js App component with tRPC HOC
- default export (pages/_document.tsx): Next.js Document component with getInitialProps
- default export (pages/index.tsx): Next.js page component rendering AppChat
- default export (pages/personas.tsx): Next.js page component rendering AppPersonas
- default export (pages/call.tsx): Next.js page component rendering AppCall
- default export (pages/draw.tsx): Next.js page component rendering AppDraw
- default export (pages/diff.tsx): Next.js page component rendering AppDiff
- default export (pages/news.tsx): Next.js page component rendering AppNews
- default export (pages/tokens.tsx): Next.js page component rendering AppTokens
- default export (pages/workspace.tsx): Next.js page component rendering AppPlaceholder

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
- `pages/draw.tsx`
- `pages/call.tsx`

## Open questions
- Will index.tsx be transitioned from AppChat to a separate Dashboard/landing page as noted in the TODO comment #299?
