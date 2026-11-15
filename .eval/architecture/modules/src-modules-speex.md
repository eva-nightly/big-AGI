# Module: src/modules/speex [AI]

(part 1 of 2) Provides multi-engine speech synthesis (TTS) capabilities supporting cloud providers (ElevenLabs, Gemini, Inworld, OpenAI), local services (LocalAI), and browser-native Web Speech API. Includes text preprocessing and chunking, streaming audio playback, voice listing, and engine configuration UI. (part 2 of 2) Manages speech synthesis (TTS) engines and configurations, supporting browser-based WebSpeech and multiple AI TTS vendors (ElevenLabs, Gemini, Inworld, LocalAI, OpenAI) with auto-linking to configured LLM services.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/speex/speex.client.ts`: Client-facing entrypoint for speech synthesis (`speakText`), handling sequential chunk synthesis, live playback, cancellation, and error reporting.
- `src/modules/speex/speex.processing.ts`: Text preprocessing utilities that strip markdown formatting, clean unvoiced elements (code blocks, HTML, URLs), apply character limits, and split long text into conversational chunks.
- `src/modules/speex/protocols/rpc/rpc.router.ts`: tRPC edge router exposing streaming speech synthesis and voice listing procedures.
- `src/modules/speex/protocols/rpc/synthesize.core.ts`: Isomorphic core synthesizer and voice listing dispatcher supporting both tRPC server-side routing and client-side fetch (CSF).
- `src/modules/speex/protocols/rpc/rpc.client.ts`: Client RPC adapter handling stream ingestion, Base64 decoding, and routing audio chunks to audio player instances.
- `src/modules/speex/protocols/webspeech/webspeech.client.ts`: Client-side Web Speech API adapter for browser-native speech synthesis and voice discovery.
- `src/modules/speex/protocols/rpc/synthesize-openai.ts`: Synthesizer adapter for OpenAI and LocalAI audio speech generation APIs.
- `src/modules/speex/protocols/rpc/synthesize-elevenlabs.ts`: Synthesizer adapter for ElevenLabs text-to-speech streaming and voice endpoints.
- `src/modules/speex/protocols/rpc/synthesize-gemini.ts`: Synthesizer adapter for Gemini multimodal audio generation and Voice Library querying.
- `src/modules/speex/protocols/rpc/synthesize-inworld.ts`: Synthesizer adapter for Inworld AI newline-delimited streaming and unary TTS endpoints.
- `src/modules/speex/speex.types.ts`: Type definitions and discriminated unions for TTS engines, voice configurations, credentials, and wire protocol formats.
- `src/modules/speex/speex.vendors-registry.ts`: Registry indexing available TTS vendor definitions and linking them with LLM model service sources.
- `src/modules/speex/components/SpeexConfigureEngines.tsx`: React settings UI component for selecting, testing, adding, and configuring TTS engines.
- `src/modules/speex/store-module-speex.ts`: Zustand store for Speex engine instances, active engine selection, character limits, WebSpeech auto-detection, and sync with LLM services
- `src/modules/speex/vendors/elevenlabs.vendor.ts`: ElevenLabs TTS vendor descriptor, defaults, and capabilities
- `src/modules/speex/vendors/gemini.vendor.ts`: Gemini TTS vendor descriptor, host auto-link validation, and voice settings
- `src/modules/speex/vendors/inworld.vendor.ts`: Inworld TTS vendor descriptor and voice settings
- `src/modules/speex/vendors/localai.vendor.ts`: LocalAI TTS vendor descriptor and default model configuration
- `src/modules/speex/vendors/openai.vendor.ts`: OpenAI TTS vendor descriptor, native host validation, and capabilities
- `src/modules/speex/vendors/webspeech.vendor.ts`: WebSpeech browser-native fallback TTS vendor descriptor

## Public interface
- speakText(inputText, voiceSelector, options, signal, chunkedCallbacks)
- speakTextSurfaceFailure(result, snackbarKey)
- speex_splitTextIntoChunks(text, maxChunkLength)
- speex_textCleanupUnspoken(inputText)
- speex_textStripMarkdown(inputText)
- speex_textApplyCharLimit(inputText)
- speexRouter
- SpeexConfigureEngines
- SpeexEngineSelect
- SpeexVoiceSelect
- SpeexVoiceAutocomplete
- useSpeexVoices(engine)
- speexFindVendor(vendorType)
- speexFindVendorForLLMVendor(llmVendorId)
- speexFindByVendorPriorityAsc(engines)
- useSpeexStore
- SpeexVendorElevenLabs
- SpeexVendorGemini
- SpeexVendorInworld
- SpeexVendorLocalAI
- SpeexVendorOpenAI
- SpeexVendorWebSpeech

## Dependencies
- @tanstack/react-query
- @mui/joy
- @mui/icons-material
- zod/v4
- ~/common/util/audio/AudioAutoPlayer
- ~/common/util/audio/AudioPlayer
- ~/common/util/trpc.client
- ~/common/util/blobUtils
- ~/common/stores/llms/store-llms
- ~/common/components/snackbar/useSnackbarsStore
- ~/server/trpc/trpc.server
- ~/server/trpc/trpc.router.fetchers
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/server/openai/openai.access
- ~/modules/aix/server/dispatch/chatGenerate/parsers/gemini.audioutils
- zustand
- ~/common/util/idUtils
- ~/modules/llms/shared/llm.isomorphic
- ~/modules/llms/vendors/gemini/gemini.vendor
- ~/modules/llms/vendors/openai/openai.vendor
- ~/modules/llms/vendors/vendor.helpers
- ~/modules/llms/vendors/vendors.registry

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
- NorthBridge unified queueing across TTS engines and ASR is referenced in client comments but not yet wired up.
- Audio accumulation (rpcReturnAudio) forces chunking off to prevent fragmenting base64 returns, which may impact latency for large text payloads.
- How are synthesized audio streams decoded and played back on the client (e.g., MSE live player vs standard audio elements)?
- Are Azure and other OpenAI-compatible speech services planned for auto-linking support?
