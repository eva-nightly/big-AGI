# Module: src/server [AI]

Provides the foundational backend infrastructure for Big-AGI, including environment variable validation, tRPC server initialization, Edge and Cloud router aggregation, upstream HTTP/API fetching with error handling and retry mechanisms, database connectivity, telemetry tracking via PostHog, and wire debugging utilities.

## Key files
- `src/server/env.server.ts`: Server-side environment variable schema definition and validation for API keys, hosts, databases, and configuration using t3-env and Zod.
- `src/server/env.client-mock.ts`: Client-side stub replacement for env.server.ts to prevent leaking server secrets in frontend bundles.
- `src/server/posthog/posthog.server.ts`: Server-side PostHog client singleton for capturing backend events and exceptions with build and runtime metadata.
- `src/server/posthog/posthog.client-mock.ts`: Client-side mock stub for posthog.server.ts exports.
- `src/server/prisma/prismaDb.ts`: Global PrismaClient singleton instance for optional PostgreSQL database storage.
- `src/server/trpc/trpc.server.ts`: Initializes tRPC server context, error formatting, and procedure definitions (public, edge, and forward-looking auth procedures).
- `src/server/trpc/trpc.router-edge.ts`: Aggregates edge-deployed tRPC sub-routers for LLM providers (Anthropic, Bedrock, Gemini, Ollama, OpenAI), AIX engine, Speex TTS, Google Search, and YouTube.
- `src/server/trpc/trpc.router-cloud.ts`: Aggregates cloud-deployed tRPC sub-routers for browsing and trade features.
- `src/server/trpc/trpc.router.fetchers.ts`: Unified HTTP fetch wrapper (fetchJsonOrTRPCThrow, fetchTextOrTRPCThrow, fetchResponseOrTRPCThrow) throwing structured TRPCFetcherError.
- `src/server/trpc/trpc.fetchers.retrier.ts`: Calculates retry profiles, backoff delays with jitter, and evaluation of 429 / spend cap denylists for upstream AI provider requests.
- `src/server/trpc/trpc.transformer.ts`: Configures superjson serialization and deserialization with workarounds for undefined/null property transformations.
- `src/server/trpc/trpc.nanoid.ts`: Generates unique server-side IDs for AIX tool calls and tool responses.
- `src/server/wire.ts`: Provides non-tRPC server fetch methods, cURL command generators, safe error parsing (including OpenRouter error metadata), and wire logging tools.

## Public interface
- env
- hasPostHogServer
- posthogServerSendEvent(eventName: string, distinctId: string, properties?: object): Promise<void>
- posthogServerSendException(error: unknown, distinctId: string | undefined, context: object): Promise<void>
- posthogServerShutdown(shutdownTimeoutMs?: number): Promise<void>
- prismaDb
- createTRPCFetchContext({ req }: FetchCreateContextFnOptions)
- createTRPCRouter
- publicProcedure
- edgeProcedure
- authedProcedure
- premiumProcedure
- authGatedProcedure
- tenantAdminProcedure
- appRouterEdge
- AppRouterEdge
- appRouterCloud
- AppRouterCloud
- TRPCFetcherError
- fetchJsonOrTRPCThrow<TOut, TBody>(config: object): Promise<TOut>
- fetchTextOrTRPCThrow<TBody>(config: object): Promise<string>
- fetchResponseOrTRPCThrow<TBody>(config: object): Promise<Response>
- upstreamRetryProfile(httpStatus?: number, upstreamCode?: string)
- upstreamRetryBackoffMs(profile: object, attemptNumber: number): number
- transformer
- serverSideId(serverScope: 'aix-tool-call-id' | 'aix-tool-response-id', digits?: number): string
- ServerFetchError
- nonTrpcServerFetchOrThrow(url: string, method: 'GET' | 'POST', headers: HeadersInit, body: object | undefined, signal?: AbortSignal): Promise<Response>
- safeErrorString(error: any): string | null
- serverCapitalizeFirstLetter(string: string): string
- debugGenerateCurlCommand(method: string, url: string, headers?: HeadersInit, body?: object): string
- createEmptyReadableStream<T>(): ReadableStream<T>
- DebugWireLogger
- createDebugWireLogger(label: string): DebugWireLogger | null

## Dependencies
- @trpc/server
- @trpc/server/adapters/fetch
- @prisma/client
- posthog-node
- nanoid
- superjson
- zod/v4
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
- Several authentication procedures in trpc.server.ts (authedProcedure, premiumProcedure, authGatedProcedure, tenantAdminProcedure) are marked as FORWARD-LOOKING and currently map directly to public t.procedure without active authentication checks.
