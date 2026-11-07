# Module: src/modules/speex [AI]

(part 1 of 2) Provides centralized text-to-speech (TTS / speech generation) capabilities across cloud and local vendors (ElevenLabs, Gemini, Inworld, LocalAI, OpenAI, and browser Web Speech API), handling text preprocessing, markdown stripping, sentence chunking, audio streaming/playback, and engine configuration UI. (part 2 of 2) Manages text-to-speech (TTS) engines and voice synthesis providers, handling engine configurations, auto-linking engines from configured LLM services or browser WebSpeech APIs, and tracking active engine selection and TTS limits.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/speex/speex.client.ts`: Main client orchestrator for TTS synthesis, text preprocessing, chunked playback loops, abort management, and failure notifications.
- `src/modules/speex/speex.processing.ts`: Text preprocessing and chunking utilities (stripping unspeakable tokens, markdown, HTML, code blocks, and splitting long text into natural sentence boundaries).
- `src/modules/speex/protocols/rpc/rpc.router.ts`: tRPC edge procedure router exposing streaming speech synthesis and voice listing RPC endpoints.
- `src/modules/speex/protocols/rpc/synthesize.core.ts`: Isomorphic synthesis and voice listing executor shared between server tRPC routes and client-side fetch (CSF) direct connections.
- `src/modules/speex/protocols/webspeech/webspeech.client.ts`: Browser-native SpeechSynthesis API client for local, zero-config text-to-speech synthesis and voice listing.
- `src/modules/speex/speex.vendors-registry.ts`: Registry for TTS engine vendor specifications and capability definitions.
- `src/modules/speex/components/SpeexConfigureEngines.tsx`: Main UI component for adding, switching, configuring, and testing speech generation engines.
- `src/modules/speex/store-module-speex.ts`: Zustand store managing speech engines (CRUD), active voice selection, auto-detection/linking from LLM sources and WebSpeech, and TTS character constraints.
- `src/modules/speex/vendors/elevenlabs.vendor.ts`: Vendor definition and default configuration for ElevenLabs cloud TTS synthesis.
- `src/modules/speex/vendors/gemini.vendor.ts`: Vendor definition and auto-linking heuristics for Google Gemini cloud TTS synthesis.
- `src/modules/speex/vendors/inworld.vendor.ts`: Vendor definition and default parameters for Inworld cloud TTS synthesis.
- `src/modules/speex/vendors/localai.vendor.ts`: Vendor definition and default parameters for local self-hosted LocalAI TTS synthesis.
- `src/modules/speex/vendors/openai.vendor.ts`: Vendor definition and auto-linking heuristics for native OpenAI TTS synthesis.
- `src/modules/speex/vendors/webspeech.vendor.ts`: Vendor definition and defaults for browser-native WebSpeech synthesis fallback.

## Public interface
- speakText(inputText, voiceSelector, options, signal, chunkedCallbacks): Promise<SpeexSpeakTextResult>
- speakTextSurfaceFailure(result, snackbarKey): boolean
- speex_splitTextIntoChunks(text, maxChunkLength): string[]
- speex_textCleanupUnspoken(inputText): string
- speex_textStripMarkdown(inputText): string
- speex_textApplyCharLimit(inputText): string
- speexRouter: tRPC router with 'synthesize' mutation and 'listVoices' query
- useSpeexVoices(engine): SpeexListVoicesResult
- useSpeexWebSpeechVoices(enabled): SpeexListVoicesResult
- SpeexConfigureEngines: React component
- SpeexEngineSelect: React component
- SpeexVoiceSelect: React component
- SpeexVoiceAutocomplete: React component
- useSpeexStore
- SpeexVendorElevenLabs
- SpeexVendorGemini
- SpeexVendorInworld
- SpeexVendorLocalAI
- SpeexVendorOpenAI
- SpeexVendorWebSpeech

## Dependencies
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zod/v4
- ~/common/util/trpc.client
- ~/common/util/audio/AudioAutoPlayer
- ~/common/util/audio/AudioPlayer
- ~/server/trpc/trpc.server
- ~/server/trpc/trpc.router.fetchers
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/server/openai/openai.access
- ~/modules/aix/server/dispatch/chatGenerate/parsers/gemini.audioutils
- zustand
- zustand/middleware
- zustand/react/shallow
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/vendors/vendor.helpers
- ~/common/util/idUtils
- ~/common/stores/llms/store-llms
- ~/modules/llms/vendors/gemini/gemini.vendor
- ~/modules/llms/vendors/openai/openai.vendor
- ~/modules/llms/shared/llm.isomorphic

## AI touchpoints [AI]
- `src/modules/speex/ISpeexVendor.ts`
- `src/modules/speex/components/SpeexConfigureEngineFull.tsx`
- `src/modules/speex/components/SpeexConfigureEngines.tsx`
- `src/modules/speex/components/SpeexEngineSelect.tsx`
- `src/modules/speex/components/useSpeexVoices.ts`
- `src/modules/speex/protocols/rpc/rpc.client.ts`
- `src/modules/speex/protocols/rpc/rpc.streaming.ts`
- `src/modules/speex/protocols/rpc/rpc.wiretypes.ts`
- `src/modules/speex/protocols/rpc/synthesize-openai.ts`
- `src/modules/speex/protocols/rpc/synthesize.core.ts`
- `src/modules/speex/speex.client.ts`
- `src/modules/speex/speex.config.ts`
- `src/modules/speex/speex.types.ts`
- `src/modules/speex/speex.vendors-registry.ts`
- `src/modules/speex/store-module-speex.ts`
- `src/modules/speex/vendors/gemini.vendor.ts`
- `src/modules/speex/vendors/openai.vendor.ts`
- `src/modules/speex/protocols/rpc/synthesize-elevenlabs.ts`
- `src/modules/speex/protocols/rpc/synthesize-gemini.ts`
- `src/modules/speex/protocols/rpc/synthesize-inworld.ts`
- `src/modules/speex/vendors/elevenlabs.vendor.ts`
- `src/modules/speex/vendors/inworld.vendor.ts`
- `src/modules/speex/vendors/localai.vendor.ts`

## Open questions
- Azure OpenAI TTS mapping remains commented out and untested in SpeexVendorOpenAI.
