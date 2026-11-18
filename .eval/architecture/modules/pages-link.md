# Module: pages/link

Implements Next.js Pages router entry points for incoming external links, web share target intents, shared chat rendering, and OAuth code exchange with OpenRouter.

## Key files
- `pages/link/callback_openrouter.tsx`: Handles the OAuth callback from OpenRouter, exchanges the code for an API key via tRPC, stores it in llmsStore, and redirects to the index route.
- `pages/link/chat/[chatLinkId].tsx`: Renders shared chat links using AppLinkChat based on the chatLinkId route parameter.
- `pages/link/share_target.tsx`: Receives Web Share Target inputs (shared text or URLs) on mobile, optionally scrapes webpage content via browse client, and queues it into the composer startup text.

## Public interface
- pages/link/callback_openrouter.tsx: default export (Next.js page wrapper with container layout)
- pages/link/chat/[chatLinkId].tsx: default export (Next.js page wrapper with optima layout)
- pages/link/share_target.tsx: default export (Next.js page wrapper with container layout)

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
- `pages/link/share_target.tsx`
- `pages/link/chat/[chatLinkId].tsx`

## Open questions
- _none_
