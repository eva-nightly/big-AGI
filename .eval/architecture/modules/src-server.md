# Module: src/server [AI]

Provides core server-side infrastructure for the application, including tRPC router definitions (Cloud and Edge), environment variable validation for LLM providers and database backends, unified HTTP fetching and retry logic for upstream AI services, error formatting, database connection management, and server analytics.

## Key files
- `src/server/env.server.ts`: Centralized server-side environment variable validation for database connections, search APIs, and various LLM provider keys and endpoints using t3-env and zod.
- `src/server/env.client-mock.ts`: Client bundle stub replacing env.server.ts to ensure server secrets and configurations are never exposed in browser builds.
- `src/server/trpc/trpc.server.ts`: Initializes tRPC server context, procedure builders (edge, public, authed), and error formatter that scrubs stack traces and forwards structured fetcher error metadata.
- `src/server/trpc/trpc.router-edge.ts`: Defines the edge-runtime tRPC root router mounting AI inference (AIX), LLM provider routers (OpenAI, Anthropic, Gemini, Bedrock, Ollama), speech (Speex), and search.
- `src/server/trpc/trpc.router-cloud.ts`: Defines the cloud-runtime tRPC root router mounting geolocated services like web browsing and trade modules.
- `src/server/trpc/trpc.router.fetchers.ts`: Unified HTTP fetching utilities (fetchJsonOrTRPCThrow, fetchTextOrTRPCThrow, fetchResponseOrTRPCThrow) and structured TRPCFetcherError handling.
- `src/server/trpc/trpc.fetchers.retrier.ts`: Calculates exponential backoff and retry schedules across failure profiles (network, transient, overloaded, rate-limited, flex tier) with provider-specific denylists.
- `src/server/trpc/trpc.transformer.ts`: SuperJSON serialization and deserialization wrapper that applies workarounds for object mutations and undefined values.
- `src/server/wire.ts`: Wire-level communication utilities, error message formatting (including unwrapping OpenRouter metadata), and curl debugging.
- `src/server/prisma/prismaDb.ts`: Global PrismaClient singleton instance for database operations.
- `src/server/posthog/posthog.server.ts`: Server-side PostHog telemetry and exception logging for edge and Node.js runtimes.

## Public interface
- appRouterEdge: AppRouterEdge
- appRouterCloud: AppRouterCloud
- createTRPCRouter, publicProcedure, edgeProcedure, authedProcedure, premiumProcedure, authGatedProcedure, tenantAdminProcedure
- createTRPCFetchContext
- env
- prismaDb
- fetchJsonOrTRPCThrow, fetchTextOrTRPCThrow, fetchResponseOrTRPCThrow
- TRPCFetcherError
- upstreamRetryProfile, upstreamRetryBackoffMs
- serverSideId
- nonTrpcServerFetchOrThrow, safeErrorString, createDebugWireLogger, DebugWireLogger
- hasPostHogServer, posthogServerSendEvent, posthogServerSendException, posthogServerShutdown

## Dependencies
- @trpc/server
- @trpc/server/adapters/fetch
- zod/v4
- superjson
- nanoid
- @prisma/client
- posthog-node
- ~/modules/3rdparty/t3-env
- ~/common/app.release
- ~/common/util/abortUtils
- ~/common/util/fetchFailures
- ~/common/util/objectUtils
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
