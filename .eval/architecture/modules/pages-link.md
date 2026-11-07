# Module: pages/link

Handles incoming web/app entry points and link targets, including OpenRouter OAuth callback key exchanges, shared chat retrieval routes, and Web Share Target intent processing for shared text and URLs.

## Key files
- `pages/link/callback_openrouter.tsx`: Receives the OAuth callback code from OpenRouter, exchanges it for an API key via tRPC backend query, stores the key in the LLM store, and redirects to the main app.
- `pages/link/chat/[chatLinkId].tsx`: Next.js page route that extracts the chatLinkId URL parameter and renders the AppLinkChat viewer for shared conversations.
- `pages/link/share_target.tsx`: Handles incoming Web Share Target payloads (text or URLs), optionally fetches and formats web page content via browsing utilities, and preloads the content into the chat composer.

## Public interface
- pages/link/callback_openrouter.tsx: default Next.js page component for /link/callback_openrouter
- pages/link/chat/[chatLinkId].tsx: default Next.js page component for /link/chat/[chatLinkId]
- pages/link/share_target.tsx: default Next.js page component for /link/share_target

## Dependencies
- react
- @mui/joy
- @mui/icons-material/ArrowBack
- ~/common/stores/llms/store-llms
- ~/common/components/InlineError
- ~/common/util/trpc.client
- ~/common/app.routes
- ~/common/layout/withLayout
- ../../../src/apps/link-chat/AppLinkChat
- ~/common/logic/store-logic-sherpa
- ~/modules/browse/browse.client
- ~/common/components/LogoProgress
- ~/common/util/urlUtils

## AI touchpoints [AI]
- `pages/link/callback_openrouter.tsx`

## Open questions
- _none_
