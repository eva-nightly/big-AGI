# Module: pages

Next.js Pages router entry points that configure the document HTML structure, global application providers, per-page layouts, and routing endpoints for Big-AGI's chat workspace and utility applications.

## Key files
- `pages/_app.tsx`: Root application component wrapping pages with Emotion theming, tRPC query provider, backend capabilities, single tab management, overlays, snackbars, and third-party analytics.
- `pages/_document.tsx`: Custom Next.js Document component setting up SSR Emotion style extraction, structured JSON-LD data, PWA/OpenGraph meta tags, and color scheme initialization scripts.
- `pages/index.tsx`: Main index entry point rendering the chat application (AppChat) wrapped in the Optima layout.
- `pages/call.tsx`: Voice call app page entry point (AppCall).
- `pages/diff.tsx`: Diff viewer app page entry point (AppDiff).
- `pages/draw.tsx`: Drawing and image generation app page entry point (AppDraw).
- `pages/news.tsx`: News and changelog page entry point (AppNews), marking news as seen upon viewing.
- `pages/personas.tsx`: AI persona management app page entry point (AppPersonas).
- `pages/tokens.tsx`: Token counter / analyzer app page entry point (AppTokens).
- `pages/workspace.tsx`: Workspace placeholder page entry point (AppPlaceholder).

## Public interface
- default export: apiQuery.withTRPC(Big_AGI_App) in pages/_app.tsx
- default export: MyDocument in pages/_document.tsx
- default export: withNextJSPerPageLayout in pages/index.tsx, pages/call.tsx, pages/diff.tsx, pages/draw.tsx, pages/news.tsx, pages/personas.tsx, pages/tokens.tsx, pages/workspace.tsx

## Dependencies
- next/head
- next/dynamic
- next/app
- next/document
- @emotion/server/create-instance
- @mui/joy/InitColorSchemeScript
- @vercel/analytics/next
- ~/common/app.config
- ~/common/app.theme
- ~/common/util/trpc.client
- ~/common/util/pwaUtils
- ~/common/layout/withLayout
- ~/common/layout/overlays/OverlaysInsert
- ~/common/providers/ProviderBackendCapabilities
- ~/common/providers/ProviderBootstrapLogic
- ~/common/providers/single-tab/ProviderSingleTab
- ~/common/providers/ProviderTheming
- ~/common/components/ErrorBoundary
- ~/common/components/snackbar/SnackbarInsert
- ~/common/components/3rdparty/GoogleAnalytics
- ~/common/components/3rdparty/PostHogAnalytics
- ~/common/components/3rdparty/UrlTrackingCleaner
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
- `pages/personas.tsx`
- `pages/draw.tsx`
- `pages/call.tsx`

## Open questions
- pages/index.tsx contains a TODO (#299) indicating the index route will eventually transition from AppChat to a dedicated Dashboard or landing page.
