# Module: pages/link

Provides Next.js page route handlers for external entry points and integrations: OpenRouter OAuth callback authorization, shared chat link viewing, and Web Share Target data ingestion into the composer.

## Key files
- `pages/link/callback_openrouter.tsx`: Handles OpenRouter OAuth callbacks, exchanges the incoming auth code for an API key via backend tRPC, saves it to the LLM store, and redirects to the chat workspace.
- `pages/link/chat/[chatLinkId].tsx`: Dynamic route page that extracts the chatLinkId parameter and renders the shared chat interface using AppLinkChat.
- `pages/link/share_target.tsx`: Web Share Target handler that receives shared text or URLs from mobile/browser shares, optionally fetches webpage content, and pre-populates the composer startup text.

## Public interface
- default export in pages/link/callback_openrouter.tsx (Next.js route /link/callback_openrouter)
- default export in pages/link/chat/[chatLinkId].tsx (Next.js dynamic route /link/chat/[chatLinkId])
- default export in pages/link/share_target.tsx (Next.js route /link/share_target)

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
