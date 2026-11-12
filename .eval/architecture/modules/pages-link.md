# Module: pages/link

Provides Next.js routing endpoints for external link integrations: handling OpenRouter OAuth callbacks to store API keys, rendering shared chat conversations by ID, and receiving Web Share Target intents from mobile devices.

## Key files
- `pages/link/callback_openrouter.tsx`: Handles OpenRouter OAuth callback code exchange via backend tRPC query, stores the received API key in the client LLM store, and redirects to the index route.
- `pages/link/chat/[chatLinkId].tsx`: Next.js dynamic route page that renders shared chat links via the AppLinkChat component using the chatLinkId query parameter.
- `pages/link/share_target.tsx`: PWA Web Share Target handler that extracts shared URLs or text, optionally fetches webpage markdown/content, queues it into the composer startup text, and redirects to the chat.

## Public interface
- default export (CallbackOpenRouterPage): Next.js page component wrapped with withNextJSPerPageLayout
- default export (AppLinkChat page): Next.js dynamic route page component wrapped with withNextJSPerPageLayout
- default export (AppShareTarget): Next.js page component wrapped with withNextJSPerPageLayout

## Dependencies
- react
- @mui/joy
- @mui/icons-material/ArrowBack
- ~/common/stores/llms/store-llms
- ~/common/components/InlineError
- ~/common/components/LogoProgress
- ~/common/util/trpc.client
- ~/common/app.routes
- ~/common/layout/withLayout
- ~/common/logic/store-logic-sherpa
- ~/common/util/urlUtils
- ~/modules/browse/browse.client
- ../../../src/apps/link-chat/AppLinkChat

## AI touchpoints [AI]
- `pages/link/callback_openrouter.tsx`

## Open questions
- _none_
