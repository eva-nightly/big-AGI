# Architecture

big-AGI is a Next.js (Pages router + App Router API routes) TypeScript application for multi-model LLM chat and adjacent AI tools (Beam multi-model scatter/gather, voice calls, text-to-image, personas, ReAct agents). The client is React + MUI Joy with Zustand stores and TanStack Query; the server is tRPC split across an Edge runtime router (/api/edge: AIX inference, vendor model listing, TTS, search) and a Node runtime router (/api/cloud: Puppeteer browsing, Prisma-backed link sharing). The core of the system is AIX (src/modules/aix): the client marshals DMessage fragments into wire requests, the server dispatches to vendor adapters (Anthropic, Bedrock, Gemini, OpenAI dialects, xAI), demuxes SSE/JSON-NL streams, and parsers emit normalized 'particles' that the client reassembles into fragments. src/modules/llms owns vendor adapters, model catalogs/pricing, and the models configuration UI; src/common provides shared stores (chats, llms, folders, metrics), attachment pipelines, layout shell (Optima), tokens, and utilities. Satellite modules cover TTS (speex), STT (asrx), T2I, aifn (auto-title, code fixup, diagrams, flatten), blocks rendering (markdown/code/diagrams), browse, google search, dblobs (IndexedDB assets), trade (import/export/share), news, and persona prompt mixing. tools/ holds CLI harnesses, protocol labs, codegen, and custom ESLint rules; public/dev holds zero-dependency HTML diagnostic tools.

## Modules

| module | summary | AI |
| --- | --- | --- |
| `.claude/scripts` | Node CLI parsing Ollama library HTML into pipe-delimited model metadata. | — |
| `(root)` | Next.js, Webpack/WASM, and ESLint flat configuration for the application. | — |
| `app/api` | App Router GET/POST tRPC handlers for Node (/api/cloud) and Edge (/api/edge) runtimes. | — |
| `pages` | Pages-router entry points, _app provider stack, _document SEO/Emotion SSR, and per-app routes. | — |
| `pages/dev` | Developer debug dashboard and LLM capabilities inspection pages. | — |
| `pages/link` | OpenRouter OAuth callback, shared chat link viewer, and Web Share Target intake routes. | — |
| `public` | Static closed-session notice HTML page. | — |
| `public/dev` | Dependency-free HTML/JS storage, logs, doctor, and heal diagnostic tools. | [AI] |
| `public/vendor` | Vendored minified SheetJS (xlsx) library for client spreadsheet parsing. | — |
| `public/workers` | Prebuilt PDF.js web worker script. | — |
| `src` | Persona definitions (system prompts, templates, examples, voices) in data.ts. | [AI] |
| `src/apps` | Top-level app views: Chat (composer, messages, panes, Beam wrapper), Call, Draw, Personas, Diff, Tokens, News, LLM capabilities, settings modal. | [AI] |
| `src/common` | Shared stores (chats, llms, folders, metrics), attachment pipeline, Optima layout, components, tokens, providers, and utilities. | [AI] |
| `src/modules/3rdparty` | Vendored t3-env for Standard Schema-based environment validation. | — |
| `src/modules/aifn` | AI auxiliary functions: auto-title, attachment prompts, code fixup, diagrams, flattening, image captioning, ReAct agent, LLM chains. | [AI] |
| `src/modules/aix` | AI execution layer: client request marshalling/reassembly, server dispatch adapters, stream demuxers, parsers, retries, debugger. | [AI] |
| `src/modules/asrx` | Speech-to-text engines and batch transcription across Deepgram, Gemini, OpenAI. | [AI] |
| `src/modules/backend` | Backend capabilities tRPC router and client cache store; OpenRouter key exchange. | — |
| `src/modules/beam` | Multi-model scatter (rays) and gather (fusion) workflow, stores, and reattach plumbing. | [AI] |
| `src/modules/blocks` | Message content block renderers: markdown, code (Prism), Chart.js/Mermaid/PlantUML/SVG, HTML iframes, diffs, images. | [AI] |
| `src/modules/browse` | Puppeteer-based page fetching, markdown conversion, screenshots, and settings. | — |
| `src/modules/dblobs` | Dexie/IndexedDB binary asset storage with scoped GC and React hooks. | [AI] |
| `src/modules/google` | Google Programmable Search and Vertex AI grounding link resolution. | — |
| `src/modules/llms` | LLM vendor adapters, server access/routers, model catalogs and pricing, models configuration UI, client refresh logic. | [AI] |
| `src/modules/news` | What's New changelog, announcements, and in-app docs reader. | [AI] |
| `src/modules/persona` | Prompt mixer (pmix) interpolating variables and LLM-capability conditionals into system prompts. | [AI] |
| `src/modules/speex` | Text-to-speech engines (ElevenLabs, Gemini, Inworld, LocalAI, OpenAI, WebSpeech), preprocessing, and playback. | [AI] |
| `src/modules/t2i` | Text-to-image engine configuration and generation for OpenAI, Azure, LocalAI, OpenRouter, Gemini. | [AI] |
| `src/modules/trade` | Import/export, Flash backups, Claude Code session export, and Prisma-backed shared chat links. | [AI] |
| `src/modules/youtube` | YouTube transcript/metadata extraction via tRPC for persona creation. | — |
| `src/server` | Env validation, tRPC init and edge/cloud routers, fetchers with retry profiles, Prisma, PostHog, wire debugging. | [AI] |
| `tools/data` | CLI syncing vendor model listings into a local SQLite registry. | [AI] |
| `tools/develop` | Developer harnesses: AIX protocol lab, Anthropic/Gemini probes, codegen (llms defs, icon sprites), Claude Code tape analysis, SWC minify checks. | [AI] |
| `tools/eslint` | Custom ESLint plugins: memo fresh-props, outcome no-cast, SWC miscompile patterns, sx computed values. | — |
| `tools/test` | Mock-based scale test for OpenAI sandbox container keepalive. | [AI] |

## Module dependencies

```mermaid
graph LR
  m2["app/api"] --> m30["src/server"]
  m3["pages"] --> m11["src/apps"]
  m3["pages"] --> m12["src/common"]
  m4["pages/dev"] --> m11["src/apps"]
  m4["pages/dev"] --> m12["src/common"]
  m5["pages/link"] --> m11["src/apps"]
  m5["pages/link"] --> m12["src/common"]
  m5["pages/link"] --> m20["src/modules/browse"]
  m11["src/apps"] --> m10["src"]
  m11["src/apps"] --> m12["src/common"]
  m11["src/apps"] --> m15["src/modules/aix"]
  m11["src/apps"] --> m14["src/modules/aifn"]
  m11["src/apps"] --> m18["src/modules/beam"]
  m11["src/apps"] --> m19["src/modules/blocks"]
  m11["src/apps"] --> m23["src/modules/llms"]
  m11["src/apps"] --> m26["src/modules/speex"]
  m11["src/apps"] --> m16["src/modules/asrx"]
  m11["src/apps"] --> m27["src/modules/t2i"]
  m11["src/apps"] --> m28["src/modules/trade"]
  m11["src/apps"] --> m29["src/modules/youtube"]
  m11["src/apps"] --> m22["src/modules/google"]
  m11["src/apps"] --> m20["src/modules/browse"]
  m11["src/apps"] --> m17["src/modules/backend"]
  m11["src/apps"] --> m25["src/modules/persona"]
  m12["src/common"] --> m21["src/modules/dblobs"]
  m12["src/common"] --> m23["src/modules/llms"]
  m12["src/common"] --> m27["src/modules/t2i"]
  m12["src/common"] --> m28["src/modules/trade"]
  m12["src/common"] --> m19["src/modules/blocks"]
  m14["src/modules/aifn"] --> m15["src/modules/aix"]
  m14["src/modules/aifn"] --> m19["src/modules/blocks"]
  m14["src/modules/aifn"] --> m20["src/modules/browse"]
  m14["src/modules/aifn"] --> m22["src/modules/google"]
  m14["src/modules/aifn"] --> m25["src/modules/persona"]
  m14["src/modules/aifn"] --> m12["src/common"]
  m15["src/modules/aix"] --> m30["src/server"]
  m15["src/modules/aix"] --> m12["src/common"]
  m15["src/modules/aix"] --> m23["src/modules/llms"]
  m15["src/modules/aix"] --> m22["src/modules/google"]
  m16["src/modules/asrx"] --> m12["src/common"]
  m16["src/modules/asrx"] --> m23["src/modules/llms"]
  m17["src/modules/backend"] --> m30["src/server"]
  m17["src/modules/backend"] --> m12["src/common"]
  m18["src/modules/beam"] --> m15["src/modules/aix"]
  m18["src/modules/beam"] --> m25["src/modules/persona"]
  m18["src/modules/beam"] --> m12["src/common"]
  m19["src/modules/blocks"] --> m12["src/common"]
  m19["src/modules/blocks"] --> m14["src/modules/aifn"]
  m19["src/modules/blocks"] --> m27["src/modules/t2i"]
  m20["src/modules/browse"] --> m30["src/server"]
  m20["src/modules/browse"] --> m12["src/common"]
  m21["src/modules/dblobs"] --> m12["src/common"]
  m22["src/modules/google"] --> m30["src/server"]
  m22["src/modules/google"] --> m12["src/common"]
  m23["src/modules/llms"] --> m12["src/common"]
  m23["src/modules/llms"] --> m30["src/server"]
  m23["src/modules/llms"] --> m15["src/modules/aix"]
  m23["src/modules/llms"] --> m27["src/modules/t2i"]
  m24["src/modules/news"] --> m12["src/common"]
  m24["src/modules/news"] --> m19["src/modules/blocks"]
  m24["src/modules/news"] --> m23["src/modules/llms"]
  m25["src/modules/persona"] --> m12["src/common"]
  m25["src/modules/persona"] --> m14["src/modules/aifn"]
  m25["src/modules/persona"] --> m11["src/apps"]
  m26["src/modules/speex"] --> m12["src/common"]
  m26["src/modules/speex"] --> m30["src/server"]
  m26["src/modules/speex"] --> m23["src/modules/llms"]
  m26["src/modules/speex"] --> m15["src/modules/aix"]
  m27["src/modules/t2i"] --> m12["src/common"]
  m27["src/modules/t2i"] --> m15["src/modules/aix"]
  m27["src/modules/t2i"] --> m23["src/modules/llms"]
  m28["src/modules/trade"] --> m12["src/common"]
  m29["src/modules/youtube"] --> m12["src/common"]
  m29["src/modules/youtube"] --> m30["src/server"]
  m29["src/modules/youtube"] --> m27["src/modules/t2i"]
  m30["src/server"] --> m13["src/modules/3rdparty"]
  m30["src/server"] --> m15["src/modules/aix"]
  m30["src/server"] --> m17["src/modules/backend"]
  m30["src/server"] --> m20["src/modules/browse"]
  m30["src/server"] --> m22["src/modules/google"]
  m30["src/server"] --> m23["src/modules/llms"]
  m30["src/server"] --> m26["src/modules/speex"]
  m30["src/server"] --> m28["src/modules/trade"]
  m30["src/server"] --> m29["src/modules/youtube"]
  m30["src/server"] --> m12["src/common"]
  m31["tools/data"] --> m15["src/modules/aix"]
  m31["tools/data"] --> m23["src/modules/llms"]
  m32["tools/develop"] --> m15["src/modules/aix"]
  m32["tools/develop"] --> m23["src/modules/llms"]
  m32["tools/develop"] --> m12["src/common"]
  m32["tools/develop"] --> m30["src/server"]
  m34["tools/test"] --> m15["src/modules/aix"]
```

_`[AI]` marks modules with AI/LLM touchpoints (prompt files, model API calls, agent logic)._
