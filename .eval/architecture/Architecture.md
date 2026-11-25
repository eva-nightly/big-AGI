# Architecture

Big-AGI is a Next.js (Pages router + App router API routes) multi-model AI chat workspace. The browser runs the full product UI under `src/apps` (Chat, Beam, Call, Draw, Personas, Diff, Tokens, LinkChat, settings) on top of a large shared layer in `src/common` (Optima layout, Zustand stores for chats/LLMs/UI, attachment drafts, token counting, logging, providers, utilities). AI execution flows through the AIX subsystem (`src/modules/aix`): the client builds unified chat-generate requests and reassembles streamed particles, while the server side adapts requests to vendor wire formats (Anthropic, Bedrock, Gemini, OpenAI-compatible, xAI, Ollama), parses vendor streams, and handles retries/continuations. tRPC routers (`src/server`) are mounted on Edge (`app/api/edge`) and Node (`app/api/cloud`) runtimes via `app/api`. Satellite modules provide vendor/model catalogs and setup UI (`src/modules/llms`), utility AI functions (`aifn`), persona prompt mixing (`persona`), TTS (`speex`), ASR (`asrx`), text-to-image (`t2i`), web browsing, Google search/Vertex link resolution, YouTube transcripts, IndexedDB blob storage (`dblobs`), import/export (`trade`), news, and rich block rendering (`blocks`). Static diagnostics live in `public/dev`, and `tools/*` hold ESLint rules, registry sync, protocol labs and minifier checks for developers.

## Modules

| module | summary | AI |
| --- | --- | --- |
| `.claude/scripts` | Node CLI script that parses Ollama library HTML into pipe-delimited chat model records. | — |
| `(root)` | Next.js build/webpack config, ESLint flat config with custom rules, and ambient TS declarations. | — |
| `app/api` | App-router route handlers mounting tRPC on Node (/api/cloud) and Edge (/api/edge) runtimes. | — |
| `pages` | Pages-router entry points, _app/_document setup, and per-app routes wrapped in the Optima layout. | — |
| `pages/dev` | Developer debug and LLM-capabilities diagnostic pages. | — |
| `pages/link` | OpenRouter OAuth callback, shared chat link viewer, and Web Share Target routes. | — |
| `public` | Static assets and the session-moved fallback HTML page. | — |
| `public/dev` | Zero-dependency static Inspect tools (doctor, heal, logs, storage) for troubleshooting boot and storage. | [AI] |
| `public/vendor` | Vendored SheetJS mini build for client-side spreadsheet parsing. | — |
| `public/workers` | PDF.js web worker bundle for background PDF processing. | — |
| `src` | SystemPurposes persona presets with system prompt templates and metadata. | [AI] |
| `src/apps` | End-user applications: Chat (composer, messages, panes, editors), Beam, Call, Draw, Personas, Diff, Tokens, LinkChat, Settings, News. | [AI] |
| `src/common` | Shared layout engine, Zustand stores (chats, LLMs, UI, metrics), attachment drafts, tokens, logging, providers, components and utilities. | [AI] |
| `src/modules/3rdparty` | Inlined t3-env style environment variable validation library. | — |
| `src/modules/aifn` | Utility AI functions: auto-title, follow-ups, code fixup, diagrams, flatten, captioning, imagine prompts, ReAct agent, LLM chains. | [AI] |
| `src/modules/aix` | Unified AI exchange layer: client request building/particle reassembly, server vendor adapters, stream parsers, retries and debugging. | [AI] |
| `src/modules/asrx` | Speech-to-text engines (Deepgram, Gemini, OpenAI) with client-side batch transcription and engine store. | [AI] |
| `src/modules/backend` | Backend capability flags via tRPC, OpenRouter key exchange, and frontend capabilities store. | — |
| `src/modules/beam` | Multi-model Scatter/Gather (rays and fusions) workflow, stores and UI. | [AI] |
| `src/modules/blocks` | Message content rendering: markdown, code highlighting, Chart.js/Mermaid/PlantUML/SVG/HTML previews, diffs, images, LiveFile patching. | [AI] |
| `src/modules/browse` | Remote Puppeteer web page fetching and HTML-to-Markdown conversion for AI consumption. | — |
| `src/modules/dblobs` | Dexie/IndexedDB storage, hooks, thumbnails and GC for binary assets. | [AI] |
| `src/modules/google` | Google Custom Search integration and Vertex AI grounding link resolution. | — |
| `src/modules/llms` | Vendor registry, model catalogs/definitions, access/signing, list-models routers, and model configuration UI for 30+ providers. | [AI] |
| `src/modules/news` | Remote news/changelog feed, seen-state store, What's New and docs modals. | [AI] |
| `src/modules/persona` | Prompt Mixer (pmix) variable registry and system prompt interpolation. | [AI] |
| `src/modules/speex` | Text-to-speech engines (ElevenLabs, Gemini, Inworld, OpenAI, LocalAI, WebSpeech) with streaming playback and config UI. | [AI] |
| `src/modules/t2i` | Text-to-image engine store, vendor dispatch (OpenAI, Azure, LocalAI, OpenRouter, Gemini) and client generation calls. | [AI] |
| `src/modules/trade` | Import/export of chats and backups, Claude Code export, and Prisma-backed shared links. | [AI] |
| `src/modules/youtube` | YouTube video metadata and transcript extraction via tRPC and UI input. | — |
| `src/server` | tRPC server setup, root Edge/Cloud routers, env validation, fetchers with retry profiles, PostHog and Prisma clients. | [AI] |
| `tools/data` | CLI syncing vendor LLM listings into SQLite and detecting model changes. | [AI] |
| `tools/develop` | Developer harnesses: AIX protocol lab, vendor probes, parameter sweeps, generators, Claude Code tape analysis, SWC minify checks. | [AI] |
| `tools/eslint` | Custom ESLint rules for memo props, outcome type casts, SWC miscompiles, and sx computed values. | — |
| `tools/test` | Mock-server scale test for the OpenAI sandbox container keepalive companion. | [AI] |

## Module dependencies

```mermaid
graph LR
  m1["(root)"] --> m33["tools/eslint"]
  m2["app/api"] --> m30["src/server"]
  m3["pages"] --> m11["src/apps"]
  m3["pages"] --> m12["src/common"]
  m4["pages/dev"] --> m12["src/common"]
  m4["pages/dev"] --> m11["src/apps"]
  m4["pages/dev"] --> m19["src/modules/blocks"]
  m5["pages/link"] --> m12["src/common"]
  m5["pages/link"] --> m11["src/apps"]
  m5["pages/link"] --> m20["src/modules/browse"]
  m11["src/apps"] --> m12["src/common"]
  m11["src/apps"] --> m15["src/modules/aix"]
  m11["src/apps"] --> m14["src/modules/aifn"]
  m11["src/apps"] --> m18["src/modules/beam"]
  m11["src/apps"] --> m19["src/modules/blocks"]
  m11["src/apps"] --> m23["src/modules/llms"]
  m11["src/apps"] --> m27["src/modules/t2i"]
  m11["src/apps"] --> m28["src/modules/trade"]
  m11["src/apps"] --> m26["src/modules/speex"]
  m11["src/apps"] --> m16["src/modules/asrx"]
  m11["src/apps"] --> m20["src/modules/browse"]
  m11["src/apps"] --> m22["src/modules/google"]
  m11["src/apps"] --> m29["src/modules/youtube"]
  m11["src/apps"] --> m17["src/modules/backend"]
  m12["src/common"] --> m21["src/modules/dblobs"]
  m12["src/common"] --> m19["src/modules/blocks"]
  m12["src/common"] --> m27["src/modules/t2i"]
  m12["src/common"] --> m28["src/modules/trade"]
  m12["src/common"] --> m23["src/modules/llms"]
  m14["src/modules/aifn"] --> m15["src/modules/aix"]
  m14["src/modules/aifn"] --> m25["src/modules/persona"]
  m14["src/modules/aifn"] --> m22["src/modules/google"]
  m14["src/modules/aifn"] --> m20["src/modules/browse"]
  m14["src/modules/aifn"] --> m12["src/common"]
  m15["src/modules/aix"] --> m12["src/common"]
  m15["src/modules/aix"] --> m30["src/server"]
  m15["src/modules/aix"] --> m23["src/modules/llms"]
  m15["src/modules/aix"] --> m22["src/modules/google"]
  m15["src/modules/aix"] --> m19["src/modules/blocks"]
  m16["src/modules/asrx"] --> m23["src/modules/llms"]
  m16["src/modules/asrx"] --> m12["src/common"]
  m17["src/modules/backend"] --> m30["src/server"]
  m17["src/modules/backend"] --> m12["src/common"]
  m18["src/modules/beam"] --> m15["src/modules/aix"]
  m18["src/modules/beam"] --> m25["src/modules/persona"]
  m18["src/modules/beam"] --> m23["src/modules/llms"]
  m18["src/modules/beam"] --> m12["src/common"]
  m18["src/modules/beam"] --> m11["src/apps"]
  m19["src/modules/blocks"] --> m12["src/common"]
  m19["src/modules/blocks"] --> m27["src/modules/t2i"]
  m19["src/modules/blocks"] --> m14["src/modules/aifn"]
  m20["src/modules/browse"] --> m12["src/common"]
  m21["src/modules/dblobs"] --> m12["src/common"]
  m22["src/modules/google"] --> m30["src/server"]
  m22["src/modules/google"] --> m12["src/common"]
  m23["src/modules/llms"] --> m12["src/common"]
  m23["src/modules/llms"] --> m30["src/server"]
  m23["src/modules/llms"] --> m15["src/modules/aix"]
  m23["src/modules/llms"] --> m27["src/modules/t2i"]
  m24["src/modules/news"] --> m19["src/modules/blocks"]
  m24["src/modules/news"] --> m23["src/modules/llms"]
  m24["src/modules/news"] --> m12["src/common"]
  m25["src/modules/persona"] --> m14["src/modules/aifn"]
  m25["src/modules/persona"] --> m11["src/apps"]
  m25["src/modules/persona"] --> m12["src/common"]
  m26["src/modules/speex"] --> m23["src/modules/llms"]
  m26["src/modules/speex"] --> m15["src/modules/aix"]
  m26["src/modules/speex"] --> m12["src/common"]
  m26["src/modules/speex"] --> m30["src/server"]
  m27["src/modules/t2i"] --> m15["src/modules/aix"]
  m27["src/modules/t2i"] --> m23["src/modules/llms"]
  m27["src/modules/t2i"] --> m12["src/common"]
  m28["src/modules/trade"] --> m12["src/common"]
  m29["src/modules/youtube"] --> m30["src/server"]
  m29["src/modules/youtube"] --> m27["src/modules/t2i"]
  m29["src/modules/youtube"] --> m12["src/common"]
  m30["src/server"] --> m13["src/modules/3rdparty"]
  m30["src/server"] --> m15["src/modules/aix"]
  m30["src/server"] --> m17["src/modules/backend"]
  m30["src/server"] --> m20["src/modules/browse"]
  m30["src/server"] --> m22["src/modules/google"]
  m30["src/server"] --> m23["src/modules/llms"]
  m30["src/server"] --> m26["src/modules/speex"]
  m30["src/server"] --> m28["src/modules/trade"]
  m30["src/server"] --> m29["src/modules/youtube"]
  m31["tools/data"] --> m23["src/modules/llms"]
  m31["tools/data"] --> m15["src/modules/aix"]
  m32["tools/develop"] --> m15["src/modules/aix"]
  m32["tools/develop"] --> m23["src/modules/llms"]
  m32["tools/develop"] --> m12["src/common"]
  m32["tools/develop"] --> m30["src/server"]
  m34["tools/test"] --> m15["src/modules/aix"]
```

_`[AI]` marks modules with AI/LLM touchpoints (prompt files, model API calls, agent logic)._
