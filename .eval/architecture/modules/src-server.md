# Module: src/server [AI]

Provides core server infrastructure, centralized environment variable validation, Prisma database client management, PostHog telemetry, wire debugging, and tRPC initialization including cloud and edge router definitions, retry schedules, and external fetch utilities.

## Key files
- `src/server/env.server.ts`: Defines and validates server-side and client-safe environment variables via Zod and t3-env for LLM providers, search, analytics, and storage.
- `src/server/env.client-mock.ts`: Client-side Webpack stub replacing env.server.ts to prevent server secrets from leaking into browser bundles.
- `src/server/trpc/trpc.server.ts`: Initializes tRPC server context, error formatting, and base procedure builders (public, edge, authed).
- `src/server/trpc/trpc.router-edge.ts`: Assembles the Edge tRPC router aggregating AIX inference, LLM provider endpoints (OpenAI, Anthropic, Gemini, Ollama, Bedrock), Speex TTS, search, and backend utilities.
- `src/server/trpc/trpc.router-cloud.ts`: Assembles the Cloud tRPC router combining browse and trade modules.
- `src/server/trpc/trpc.router.fetchers.ts`: Provides standardized network fetch helpers (JSON, text, raw response) throwing structured TRPCFetcherError instances.
- `src/server/trpc/trpc.fetchers.retrier.ts`: Calculates retry profiles, backoff delays with jitter, and error denylists for transient and rate-limited upstream provider failures.
- `src/server/trpc/trpc.transformer.ts`: Wraps SuperJSON serialization and deserialization with workarounds for undefined and null handling.
- `src/server/posthog/posthog.server.ts`: Manages server-side PostHog singleton client for capturing events, exceptions, and graceful shutdown.
- `src/server/prisma/prismaDb.ts`: Configures and exports the singleton PrismaClient instance across hot-reloads.
- `src/server/wire.ts`: Provides network debugging tools, cURL command generators, safe error string serialization, and non-tRPC fetch helpers.

## Public interface
- env
- hasPostHogServer
- posthogServerSendEvent
- posthogServerSendException
- posthogServerShutdown
- prismaDb
- upstreamRetryProfile
- upstreamRetryBackoffMs
- serverSideId
- appRouterCloud
- AppRouterCloud
- appRouterEdge
- AppRouterEdge
- fetchJsonOrTRPCThrow
- fetchTextOrTRPCThrow
- fetchResponseOrTRPCThrow
- TRPCFetcherError
- createTRPCFetchContext
- createTRPCRouter
- publicProcedure
- edgeProcedure
- authedProcedure
- premiumProcedure
- authGatedProcedure
- tenantAdminProcedure
- transformer
- ServerFetchError
- nonTrpcServerFetchOrThrow
- safeErrorString
- serverCapitalizeFirstLetter
- debugGenerateCurlCommand
- createEmptyReadableStream
- DebugWireLogger
- createDebugWireLogger

## Dependencies
- @prisma/client
- @trpc/server
- nanoid
- posthog-node
- superjson
- zod
- ~/common/app.release
- ~/common/util/abortUtils
- ~/common/util/fetchFailures
- ~/common/util/objectUtils
- ~/modules/3rdparty/t3-env
- ~/modules/aix/server/api/aix.router
- ~/modules/backend/backend.router
- ~/modules/browse/browse.router
- ~/modules/google/search.router
- ~/modules/llms/server/anthropic/anthropic.router
- ~/modules/llms/server/bedrock/bedrock.router
- ~/modules/llms/server/gemini/gemini.router
- ~/modules/llms/server/ollama/ollama.router
- ~/modules/llms/server/openai/openai.router
- ~/modules/speex/protocols/rpc/rpc.router
- ~/modules/trade/server/trade.router
- ~/modules/youtube/youtube.router

## AI touchpoints [AI]
- `src/server/env.server.ts`
- `src/server/trpc/trpc.fetchers.retrier.ts`
- `src/server/trpc/trpc.router-edge.ts`
- `src/server/trpc/trpc.router.fetchers.ts`
- `src/server/trpc/trpc.server.ts`
- `src/server/wire.ts`

## Open questions
- _none_
