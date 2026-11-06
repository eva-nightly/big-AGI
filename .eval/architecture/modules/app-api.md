# Module: app/api

Provides Next.js Route Handlers dispatching tRPC HTTP fetch requests to separate Node.js (/api/cloud) and Edge (/api/edge) server routers.

## Key files
- `app/api/cloud/[trpc]/route.ts`: Next.js Route Handler for the Node.js tRPC endpoint (/api/cloud), configuring createContext, force-dynamic caching, and error reporting to PostHog.
- `app/api/edge/[trpc]/route.ts`: Next.js Route Handler for the Edge tRPC endpoint (/api/edge), configuring createContext and edge runtime execution.

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
- `app/api/edge/[trpc]/route.ts`: Stack indicates runtime is node, but app/api/edge/[trpc]/route.ts explicitly sets runtime = 'edge'.

## Open questions
- _none_
