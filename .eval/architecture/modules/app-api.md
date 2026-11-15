# Module: app/api

Expose Next.js App Router API endpoints for tRPC requests routed to Node.js ('cloud') and Edge runtimes, handling error logging and PostHog server-side exception tracking.

## Key files
- `app/api/cloud/[trpc]/route.ts`: Next.js Node.js runtime tRPC route handler exposing '/api/cloud' with PostHog exception tracking
- `app/api/edge/[trpc]/route.ts`: Next.js Edge runtime tRPC route handler exposing '/api/edge'

## Public interface
- GET /api/cloud/[trpc]
- POST /api/cloud/[trpc]
- GET /api/edge/[trpc]
- POST /api/edge/[trpc]

## Dependencies
- @trpc/server/adapters/fetch
- ~/server/trpc/trpc.router-cloud
- ~/server/trpc/trpc.router-edge
- ~/server/trpc/trpc.server
- ~/server/posthog/posthog.server

## Open questions
- _none_
