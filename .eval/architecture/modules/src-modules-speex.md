# Module: src/modules/speex [AI]

(part 1 of 2) Provides multi-vendor Text-to-Speech (TTS) audio synthesis and voice management supporting cloud providers (ElevenLabs, OpenAI, Gemini, Inworld), local self-hosted services (LocalAI), and browser-native Web Speech API, with isomorphic execution (edge tRPC / client-side fetch), text cleanup/chunking, and UI engine configuration controls. (part 2 of 2) Manages Text-to-Speech (TTS) engine configurations, vendor adapters (WebSpeech, OpenAI, Gemini, ElevenLabs, Inworld, LocalAI), credentials, and auto-linking with configured LLM sources in big-AGI.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/speex/speex.client.ts`: Main client interface providing chunked speech orchestration, audio playback control, and failure surfacing.
- `src/modules/speex/protocols/rpc/synthesize.core.ts`: Shared core executor dispatching speech synthesis and voice listing across cloud and local providers for both server tRPC and client CSF.
- `src/modules/speex/protocols/rpc/rpc.router.ts`: Edge tRPC router exposing streaming speech synthesis and voice listing endpoints.
- `src/modules/speex/protocols/rpc/rpc.client.ts`: RPC client managing tRPC streaming and dynamic client-side fetch (CSF) dispatch for unreachable/local hosts.
- `src/modules/speex/protocols/webspeech/webspeech.client.ts`: Browser SpeechSynthesis API client adapter for device-native speech output and voice querying.
- `src/modules/speex/speex.processing.ts`: Text preprocessing pipeline for markdown removal, unspeakable token stripping, character limits, and sentence/paragraph chunking.
- `src/modules/speex/components/SpeexConfigureEngines.tsx`: Management UI for switching, adding, removing, and configuring speech generation engines.
- `src/modules/speex/store-module-speex.ts`: Zustand state store managing TTS engine instances, user selections, character limits, WebSpeech detection, and synchronization with LLM service configurations.
- `src/modules/speex/vendors/openai.vendor.ts`: Speex vendor descriptor for OpenAI TTS integration with auto-linking support from native OpenAI LLM services.
- `src/modules/speex/vendors/gemini.vendor.ts`: Speex vendor descriptor for Google Gemini TTS integration with native Gemini host filtering and credential defaults.
- `src/modules/speex/vendors/elevenlabs.vendor.ts`: Speex vendor descriptor for ElevenLabs cloud TTS API.
- `src/modules/speex/vendors/inworld.vendor.ts`: Speex vendor descriptor for Inworld cloud TTS API.
- `src/modules/speex/vendors/localai.vendor.ts`: Speex vendor descriptor for LocalAI self-hosted TTS services.
- `src/modules/speex/vendors/webspeech.vendor.ts`: Speex vendor descriptor providing fallback TTS via the browser Web Speech API.

## Public interface
- speakText(inputText, voiceSelector, options, signal, chunkedCallbacks): Promise<SpeexSpeakTextResult>
- speakTextSurfaceFailure(result, snackbarKey): boolean
- speexRouter: tRPC router exposing synthesize (edge streaming mutation) and listVoices (edge query)
- speexSynthesize_RPC(engine, text, options, abortController, createAudioPlayer): Promise<SpeexSynthesizeResult>
- speexListVoices_RPC_orThrow(engine): Promise<SpeexListVoiceOption[]>
- speexSynthesize_WebSpeech(text, voice, callbacks): Promise<SpeexSynthesizeResult>
- useSpeexWebSpeechVoices(enabled): SpeexListVoicesResult
- speex_splitTextIntoChunks(text, maxChunkLength): string[]
- speex_textCleanupUnspoken(inputText): string
- speex_textStripMarkdown(inputText): string
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
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zod/v4
- ~/common/util/audio/AudioAutoPlayer
- ~/common/util/audio/AudioPlayer
- ~/common/util/blobUtils
- ~/common/util/trpc.client
- ~/common/stores/llms/store-llms
- ~/server/trpc/trpc.server
- ~/server/trpc/trpc.router.fetchers
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
- Azure OpenAI TTS support is commented out as not tested yet in `openai.vendor.ts`.
