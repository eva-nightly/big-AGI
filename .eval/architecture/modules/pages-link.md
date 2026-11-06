# Module: pages/link

Provides Next.js page entrypoints for handling external integration links, including OpenRouter OAuth callback key exchange, shared chat links routing, and Web Share Target intents.

## Key files
- `pages/link/callback_openrouter.tsx`: Handles OpenRouter OAuth callback by exchanging the received code for an API key via tRPC and storing it in the client LLM store before redirecting to the chat interface.
- `pages/link/chat/[chatLinkId].tsx`: Next.js dynamic route page that extracts the shared chat link ID from the URL and mounts the AppLinkChat viewer component.
- `pages/link/share_target.tsx`: PWA Web Share Target endpoint that receives shared text or URLs from external mobile applications, optionally fetches web page content via browse client, and injects it into composer startup state before redirecting to the chat app.

## Public interface
- default export (CallbackOpenRouterPage wrapped in withNextJSPerPageLayout) in pages/link/callback_openrouter.tsx
- default export (AppLinkChat route wrapped in withNextJSPerPageLayout) in pages/link/chat/[chatLinkId].tsx
- default export (AppShareTarget wrapped in withNextJSPerPageLayout) in pages/link/share_target.tsx

## Dependencies
- react
- @mui/joy
- @mui/icons-material/ArrowBack
- ~/common/stores/llms/store-llms
- ~/common/components/InlineError
- ~/common/components/LogoProgress
- ~/common/util/trpc.client
- ~/common/util/urlUtils
- ~/common/app.routes
- ~/common/layout/withLayout
- ~/common/logic/store-logic-sherpa
- ~/modules/browse/browse.client
- ../../../src/apps/link-chat/AppLinkChat

## AI touchpoints [AI]
- `pages/link/callback_openrouter.tsx`

## Open questions
- _none_
