# Module: app/api

Provides Next.js App Router HTTP entry points for tRPC API endpoints split across Node.js (cloud) and Edge server runtimes.

## Key files
- `app/api/cloud/[trpc]/route.ts`: Next.js dynamic route handler serving tRPC cloud requests on the Node.js runtime with PostHog error reporting.
- `app/api/edge/[trpc]/route.ts`: Next.js dynamic route handler serving tRPC edge requests on the Edge runtime.

## Public interface
- GET (app/api/cloud/[trpc]/route.ts)
- POST (app/api/cloud/[trpc]/route.ts)
- runtime (app/api/cloud/[trpc]/route.ts)
- dynamic (app/api/cloud/[trpc]/route.ts)
- GET (app/api/edge/[trpc]/route.ts)
- POST (app/api/edge/[trpc]/route.ts)
- runtime (app/api/edge/[trpc]/route.ts)

## Dependencies
- @trpc/server/adapters/fetch
- ~/server/trpc/trpc.router-cloud
- ~/server/trpc/trpc.router-edge
- ~/server/trpc/trpc.server
- ~/server/posthog/posthog.server

## Where the code disagrees with the stack profile
- `app/api/edge/[trpc]/route.ts`: The stack states runtime is node, but app/api/edge/[trpc]/route.ts specifies an Edge runtime via export const runtime = 'edge'.

## Open questions
- _none_
