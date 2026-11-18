# Module: src/modules/speex [AI]

(part 1 of 2) Provides text-to-speech (TTS) synthesis and voice configuration across cloud providers (ElevenLabs, Gemini, Inworld, OpenAI), local engines (LocalAI), and browser-native Web Speech API, with streaming playback, text preprocessing, and chunking. (part 2 of 2) Manages Text-to-Speech (TTS) / Voice engines and configurations, supporting browser-native WebSpeech and multiple local or cloud providers (ElevenLabs, Gemini, Inworld, LocalAI, OpenAI), including automatic discovery and synchronization from configured LLM service sources.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/speex/speex.client.ts`: Client entry point orchestrating text chunking, preprocessing, synthesis requests, and sequential audio playback with abort handling.
- `src/modules/speex/protocols/rpc/rpc.router.ts`: Server tRPC edge router defining streaming synthesis mutations and voice listing queries.
- `src/modules/speex/protocols/rpc/synthesize.core.ts`: Isomorphic synthesis and voice listing executor shared between tRPC server endpoints and client-side fetch (CSF) execution.
- `src/modules/speex/protocols/rpc/rpc.client.ts`: Client-side communication layer for cloud and local RPC providers supporting both tRPC stream/query calls and direct CSF dynamic execution.
- `src/modules/speex/protocols/webspeech/webspeech.client.ts`: Browser SpeechSynthesis API client handling native speech synthesis, voice discovery, and fallback selection.
- `src/modules/speex/speex.processing.ts`: Text preprocessing and chunking utilities that strip markdown, remove unspoken code/HTML, enforce character limits, and split text at paragraph or sentence boundaries.
- `src/modules/speex/speex.types.ts`: TypeScript type and schema definitions for speech engines, credentials, voice settings, and synthesis options.
- `src/modules/speex/speex.vendors-registry.ts`: Registry managing supported vendor implementations, priorities, and model service auto-linking.
- `src/modules/speex/components/SpeexConfigureEngines.tsx`: UI component for selecting, adding, updating, and removing TTS voice engines.
- `src/modules/speex/store-module-speex.ts`: Zustand store managing speech engines, active engine selection, TTS character limits, and engine synchronization from LLM services and browser WebSpeech.
- `src/modules/speex/vendors/elevenlabs.vendor.ts`: Vendor configuration descriptor for ElevenLabs cloud text-to-speech.
- `src/modules/speex/vendors/gemini.vendor.ts`: Vendor configuration descriptor for Gemini cloud text-to-speech with Google AI source auto-linking.
- `src/modules/speex/vendors/inworld.vendor.ts`: Vendor configuration descriptor for Inworld cloud text-to-speech.
- `src/modules/speex/vendors/localai.vendor.ts`: Vendor configuration descriptor for LocalAI local text-to-speech with LocalAI LLM source auto-linking.
- `src/modules/speex/vendors/openai.vendor.ts`: Vendor configuration descriptor for OpenAI cloud text-to-speech with OpenAI LLM source auto-linking.
- `src/modules/speex/vendors/webspeech.vendor.ts`: Vendor configuration descriptor for browser-native WebSpeech system voice synthesis.

## Public interface
- speakText(inputText, voiceSelector, options, signal, chunkedCallbacks)
- speakTextSurfaceFailure(result, snackbarKey)
- speexRouter
- speexRpcCoreSynthesize(input, signal)
- speexRpcCoreListVoices(access)
- speexSynthesize_RPC(engine, text, options, abortController, createAudioPlayer)
- speexListVoices_RPC_orThrow(engine)
- speexSynthesize_WebSpeech(text, voice, callbacks)
- useSpeexWebSpeechVoices(enabled)
- speex_splitTextIntoChunks(text, maxChunkLength)
- speex_textCleanupUnspoken(inputText)
- speex_textStripMarkdown(inputText)
- speex_textApplyCharLimit(inputText)
- speexFindVendor(vendorType)
- speexFindVendorForLLMVendor(llmVendorId)
- speexFindByVendorPriorityAsc(engines)
- SpeexConfigureEngines
- SpeexConfigureEngineFull
- SpeexEngineSelect
- SpeexVoiceSelect
- SpeexVoiceAutocomplete
- SpeexSystemTest
- useSpeexVoices(engine)
- useSpeexStore
- SpeexVendorElevenLabs
- SpeexVendorGemini
- SpeexVendorInworld
- SpeexVendorLocalAI
- SpeexVendorOpenAI
- SpeexVendorWebSpeech

## Dependencies
- @mui/joy
- @tanstack/react-query
- zod/v4
- ~/common/util/audio/AudioAutoPlayer
- ~/common/util/audio/AudioPlayer
- ~/common/util/blobUtils
- ~/common/util/trpc.client
- ~/server/trpc/trpc.server
- ~/server/trpc/trpc.router.fetchers
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/server/openai/openai.access
- ~/modules/aix/server/dispatch/chatGenerate/parsers/gemini.audioutils
- ~/common/stores/llms/store-llms
- zustand
- zustand/middleware
- zustand/react/shallow
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

## Open questions
- The remaining implementation of store-module-speex.ts is truncated, leaving out store selectors and listeners for changes in LLM sources.
