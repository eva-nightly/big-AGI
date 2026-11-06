# Module: src/server [AI]

Provides backend foundation infrastructure for big-AGI, including environment variable validation with client mock stubs, PostHog server-side analytics/error tracking, Prisma database client setup, tRPC router configurations (Cloud and Edge), and network/wire fetch utilities with retry scheduling and error formatting.

## Key files
- `src/server/env.server.ts`: Defines and validates server-side and client-side environment variables using t3-env and Zod v4, covering database connections, search APIs, TTS, and credentials for numerous LLM providers.
- `src/server/env.client-mock.ts`: Webpack replacement mock for env.server.ts on the client bundle to safely return empty or undefined values for server secrets.
- `src/server/posthog/posthog.server.ts`: Server-side PostHog client singleton for capturing events, errors, and exceptions across edge and node runtimes with tenant and build metadata.
- `src/server/posthog/posthog.client-mock.ts`: Client bundle stub mock for posthog.server.ts.
- `src/server/prisma/prismaDb.ts`: Prisma client singleton instance with development query logging and global caching.
- `src/server/trpc/trpc.server.ts`: Initializes tRPC server context, procedure wrappers (publicProcedure, edgeProcedure, etc.), and error formatting (stripping stack traces and surfacing fetcher error metadata).
- `src/server/trpc/trpc.router-edge.ts`: Combines edge tRPC routers for AIX streaming, LLM providers (Anthropic, Bedrock, Gemini, Ollama, OpenAI), search, backend, speex, and youtube.
- `src/server/trpc/trpc.router-cloud.ts`: Combines cloud tRPC routers (e.g. browse and trade).
- `src/server/trpc/trpc.router.fetchers.ts`: Implements fetchJsonOrTRPCThrow, fetchTextOrTRPCThrow, and fetchResponseOrTRPCThrow with unified TRPCFetcherError handling for network/HTTP/abort failures.
- `src/server/trpc/trpc.fetchers.retrier.ts`: Defines retry profiles and schedules (network, transient, overloaded, rate-limited, flexBusy) with backoff, jitter, and non-retryable 429 denylists.
- `src/server/trpc/trpc.transformer.ts`: SuperJSON serialization/deserialization wrapper with a shallow clone workaround for Next.js and tRPC edge cases.
- `src/server/trpc/trpc.nanoid.ts`: Server-side ID generation helper for AIX tool calls and tool responses.
- `src/server/wire.ts`: Low-level wire fetching (nonTrpcServerFetchOrThrow), error formatting (safeErrorString), cURL generation, XML escaping, and request/response debug logging.

## Public interface
- env: validated environment variables from src/server/env.server.ts and mocked in src/server/env.client-mock.ts
- hasPostHogServer, posthogServerSendEvent(), posthogServerSendException(), posthogServerShutdown(): PostHog telemetry functions
- prismaDb: PrismaClient instance from src/server/prisma/prismaDb.ts
- appRouterEdge, AppRouterEdge: Edge tRPC router definition
- appRouterCloud, AppRouterCloud: Cloud tRPC router definition
- createTRPCRouter, publicProcedure, edgeProcedure, authedProcedure, premiumProcedure, authGatedProcedure, tenantAdminProcedure, createTRPCFetchContext: tRPC server primitives
- fetchJsonOrTRPCThrow(), fetchTextOrTRPCThrow(), fetchResponseOrTRPCThrow(), TRPCFetcherError: tRPC fetcher helpers and error class
- upstreamRetryProfile(), upstreamRetryBackoffMs(): Retry strategy helpers
- serverSideId(): Server-side ID generator for AIX tool IDs
- transformer: serialization transformer object
- nonTrpcServerFetchOrThrow(), ServerFetchError, safeErrorString(), debugGenerateCurlCommand(), createEmptyReadableStream(), DebugWireLogger, createDebugWireLogger(), escapeXml(): Wire and debug utilities

## Dependencies
- zod/v4
- @trpc/server
- @trpc/server/adapters/fetch
- posthog-node
- @prisma/client
- nanoid
- superjson
- ~/modules/3rdparty/t3-env
- ~/common/app.release
- ~/common/util/abortUtils
- ~/common/util/fetchFailures
- ~/common/util/objectUtils
- ~/modules/browse/browse.router
- ~/modules/trade/server/trade.router
- ~/modules/aix/server/api/aix.router
- ~/modules/backend/backend.router
- ~/modules/google/search.router
- ~/modules/llms/server/anthropic/anthropic.router
- ~/modules/llms/server/bedrock/bedrock.router
- ~/modules/llms/server/gemini/gemini.router
- ~/modules/llms/server/ollama/ollama.router
- ~/modules/llms/server/openai/openai.router
- ~/modules/speex/protocols/rpc/rpc.router
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
