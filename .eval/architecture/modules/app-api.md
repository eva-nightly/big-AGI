# Module: app/api

Exposes Next.js API route handlers that route HTTP requests to tRPC server routers across Node.js and Edge runtimes.

## Key files
- `app/api/cloud/[trpc]/route.ts`: Next.js dynamic route handler for the Node.js runtime tRPC cloud router (/api/cloud), handling requests, development logging, and PostHog error reporting.
- `app/api/edge/[trpc]/route.ts`: Next.js dynamic route handler for the Edge runtime tRPC router (/api/edge), executing on the edge runtime.

## Public interface
- GET (app/api/cloud/[trpc]/route.ts)
- POST (app/api/cloud/[trpc]/route.ts)
- runtime = 'nodejs' (app/api/cloud/[trpc]/route.ts)
- dynamic = 'force-dynamic' (app/api/cloud/[trpc]/route.ts)
- GET (app/api/edge/[trpc]/route.ts)
- POST (app/api/edge/[trpc]/route.ts)
- runtime = 'edge' (app/api/edge/[trpc]/route.ts)

## Dependencies
- @trpc/server/adapters/fetch
- ~/server/trpc/trpc.router-cloud
- ~/server/trpc/trpc.router-edge
- ~/server/trpc/trpc.server
- ~/server/posthog/posthog.server

## Where the code disagrees with the stack profile
- `app/api/edge/[trpc]/route.ts`: The edge route handler specifies export const runtime = 'edge' rather than node.

## Open questions
- _none_
