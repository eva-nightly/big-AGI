# Module: src/modules/speex [AI]

(part 1 of 2) Provides text-to-speech (TTS) synthesis and voice configuration across cloud and local providers (ElevenLabs, Gemini, Inworld, OpenAI, LocalAI, and WebSpeech) with text preprocessing, chunking, sequential playback, and isomorphic execution (tRPC edge procedures and client-side fetch). (part 2 of 2) Manages speech/TTS (Text-to-Speech) engine instances, vendor configurations (ElevenLabs, Gemini, Inworld, LocalAI, OpenAI, WebSpeech), voice settings, and automatic engine syncing/linking from configured LLM service sources and browser capabilities.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/speex/speex.client.ts`: High-level speech synthesis client handling text preprocessing, chunking, error handling, and sequential audio playback.
- `src/modules/speex/speex.types.ts`: Data models and type definitions for engines, voices, credentials, options, and synthesis results.
- `src/modules/speex/speex.config.ts`: Default settings, model catalogs, and fallback parameters for TTS providers.
- `src/modules/speex/speex.processing.ts`: Text preprocessing functions (markdown stripping, removing unspoken code/tags, character limits) and text chunking logic.
- `src/modules/speex/speex.vendors-registry.ts`: Registry and vendor resolution helpers for TTS engine providers.
- `src/modules/speex/protocols/rpc/rpc.router.ts`: tRPC router exposing edge procedures for speech synthesis streaming and voice listing.
- `src/modules/speex/protocols/rpc/rpc.client.ts`: Client coordinator for RPC-based TTS providers handling tRPC streaming and Client-Side-Fetch (CSF) fallback.
- `src/modules/speex/protocols/rpc/synthesize.core.ts`: Isomorphic synthesis executor dispatching calls to vendor-specific synthesis handlers.
- `src/modules/speex/protocols/webspeech/webspeech.client.ts`: Browser SpeechSynthesis API client for client-side local speech synthesis.
- `src/modules/speex/components/SpeexConfigureEngines.tsx`: UI component for selecting, adding, and configuring active TTS engines.
- `src/modules/speex/store-module-speex.ts`: Zustand state store managing TTS engine CRUD, active engine selection, character limits, WebSpeech detection, and auto-linking engines from LLM services.
- `src/modules/speex/vendors/elevenlabs.vendor.ts`: Vendor definition and default credentials/voice configuration for ElevenLabs TTS.
- `src/modules/speex/vendors/gemini.vendor.ts`: Vendor definition, credentials, capabilities, and auto-linking logic for Google Gemini TTS.
- `src/modules/speex/vendors/inworld.vendor.ts`: Vendor definition, credentials, capabilities, and default voice configuration for Inworld TTS.
- `src/modules/speex/vendors/localai.vendor.ts`: Vendor definition, credentials, capabilities, and auto-linking configuration for LocalAI TTS.
- `src/modules/speex/vendors/openai.vendor.ts`: Vendor definition, credentials, and auto-linking logic for OpenAI TTS services.
- `src/modules/speex/vendors/webspeech.vendor.ts`: Vendor definition and configuration for browser-native WebSpeech synthesis.

## Public interface
- speakText(inputText, voiceSelector, options, signal, chunkedCallbacks): Promise<SpeexSpeakTextResult>
- speakTextSurfaceFailure(result, snackbarKey): boolean
- speexSynthesize_RPC(engine, text, options, abortController, createAudioPlayer): Promise<SpeexSynthesizeResult>
- speexListVoices_RPC_orThrow(engine): Promise<SpeexListVoiceOption[]>
- speexSynthesize_WebSpeech(text, voice, callbacks): Promise<SpeexSynthesizeResult>
- webspeechIsSupported(): boolean
- useSpeexWebSpeechVoices(enabled): SpeexListVoicesResult
- useSpeexVoices(engine): SpeexListVoicesResult
- speexFindVendor(vendorType): ISpeexVendor | null
- speexFindVendorForLLMVendor(llmVendorId): ISpeexVendorAny | null
- speexFindByVendorPriorityAsc(engines): DSpeexEngineAny | null
- speex_splitTextIntoChunks(text, maxChunkLength): string[]
- speex_textCleanupUnspoken(inputText): string
- speex_textStripMarkdown(inputText): string
- speex_textApplyCharLimit(inputText): string
- speexRpcCoreSynthesize(input, signal): AsyncGenerator<SpeexSpeechParticle>
- speexRpcCoreListVoices(access): Promise<SpeexWire_ListVoices_Output>
- speexRouter: TRPCRouter
- SpeexConfigureEngines(props): JSX.Element
- SpeexConfigureEngineFull(props): JSX.Element
- SpeexEngineSelect(props): JSX.Element
- SpeexVoiceSelect(props): JSX.Element
- SpeexVoiceAutocomplete(props): JSX.Element
- SpeexSystemTest(): JSX.Element
- useSpeexStore
- SpeexVendorElevenLabs
- SpeexVendorGemini
- SpeexVendorInworld
- SpeexVendorLocalAI
- SpeexVendorOpenAI
- SpeexVendorWebSpeech

## Dependencies
- react
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zod
- ~/common/util/audio/AudioAutoPlayer
- ~/common/util/audio/AudioPlayer
- ~/common/util/trpc.client
- ~/server/trpc/trpc.server
- ~/server/trpc/trpc.router.fetchers
- ~/common/stores/llms/store-llms
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/server/openai/openai.access
- ~/modules/aix/server/dispatch/chatGenerate/parsers/gemini.audioutils
- zustand
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/vendors/vendor.helpers
- ~/common/util/idUtils
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
- `src/modules/speex/vendors/localai.vendor.ts`
- `src/modules/speex/vendors/elevenlabs.vendor.ts`
- `src/modules/speex/vendors/inworld.vendor.ts`

## Open questions
- How does Speex handle real-time streaming audio playback or client-side RPC execution given that the truncated file did not contain the player and synthesis invocation handlers?
