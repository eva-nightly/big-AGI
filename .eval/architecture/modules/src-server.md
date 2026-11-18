# Module: src/server [AI]

Provides core server infrastructure, environment variable validation, PostHog telemetry, Prisma database clients, wire debugging helpers, and the tRPC server initialization and routing layers for Edge and Cloud runtimes.

## Key files
- `src/server/env.server.ts`: Defines and validates server-side and client-side environment variables using T3 Env and Zod, including LLM API keys and backend service configurations.
- `src/server/env.client-mock.ts`: Provides safe client-side stubbing of server environment variables to prevent leaking server secrets into client bundles.
- `src/server/posthog/posthog.server.ts`: Initializes the PostHog server-side client singleton and handles immediate event and exception capturing across Node.js and Edge runtimes.
- `src/server/posthog/posthog.client-mock.ts`: Stubs server PostHog tracking methods for the client bundle.
- `src/server/prisma/prismaDb.ts`: Instantiates and caches the singleton PrismaClient instance across development reloads.
- `src/server/trpc/trpc.server.ts`: Initializes the tRPC v11 instance, request fetch context, custom error formatters, and procedure builders.
- `src/server/trpc/trpc.transformer.ts`: Wraps SuperJSON serialization and deserialization with workarounds for nested undefined/null object mutability.
- `src/server/trpc/trpc.router-edge.ts`: Aggregates edge-compatible tRPC routers including AIX, LLM vendor endpoints, Speex TTS, Google Search, and YouTube.
- `src/server/trpc/trpc.router-cloud.ts`: Aggregates cloud-hosted tRPC routers for browsing and trade services.
- `src/server/trpc/trpc.router.fetchers.ts`: Encapsulates fetch helpers (JSON, text, Response) and defines TRPCFetcherError with structured HTTP and network failure metadata.
- `src/server/trpc/trpc.fetchers.retrier.ts`: Defines backoff profiles, retry-after header parsing budgets, and failure denylists for upstream API calls.
- `src/server/trpc/trpc.nanoid.ts`: Generates server-side scoped nanoid identifiers for AIX tool calls and tool responses.
- `src/server/wire.ts`: Provides low-level wire utilities, debug cURL command generators, safe error parsing (including OpenRouter error metadata parsing), and logging.

## Public interface
- env
- hasPostHogServer
- posthogServerSendEvent
- posthogServerSendException
- posthogServerShutdown
- prismaDb
- appRouterEdge
- AppRouterEdge
- appRouterCloud
- AppRouterCloud
- createTRPCFetchContext
- createTRPCRouter
- publicProcedure
- edgeProcedure
- authedProcedure
- premiumProcedure
- authGatedProcedure
- tenantAdminProcedure
- ChatGenerateContentContext
- transformer
- fetchJsonOrTRPCThrow
- fetchTextOrTRPCThrow
- fetchResponseOrTRPCThrow
- TRPCFetcherError
- upstreamRetryProfile
- upstreamRetryBackoffMs
- serverSideId
- nonTrpcServerFetchOrThrow
- ServerFetchError
- safeErrorString
- debugGenerateCurlCommand
- createEmptyReadableStream
- DebugWireLogger
- createDebugWireLogger

## Dependencies
- @prisma/client
- @trpc/server
- @trpc/server/adapters/fetch
- nanoid
- posthog-node
- superjson
- zod/v4
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
- `src/server/trpc/trpc.nanoid.ts`
- `src/server/wire.ts`

## Open questions
- _none_
