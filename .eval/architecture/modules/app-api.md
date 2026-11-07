# Module: app/api

Exposes HTTP GET and POST route handlers for tRPC APIs across Node.js runtime (/api/cloud) and Edge runtime (/api/edge) environments.

## Key files
- `app/api/cloud/[trpc]/route.ts`: Next.js App Router route handler for Node.js-based tRPC cloud endpoints with PostHog error reporting.
- `app/api/edge/[trpc]/route.ts`: Next.js App Router route handler for Edge-based tRPC endpoints.

## Public interface
- GET /api/cloud/* - Node.js tRPC request handler
- POST /api/cloud/* - Node.js tRPC request handler
- GET /api/edge/* - Edge runtime tRPC request handler
- POST /api/edge/* - Edge runtime tRPC request handler

## Dependencies
- @trpc/server/adapters/fetch
- ~/server/trpc/trpc.router-cloud
- ~/server/trpc/trpc.router-edge
- ~/server/trpc/trpc.server
- ~/server/posthog/posthog.server

## Open questions
- _none_
