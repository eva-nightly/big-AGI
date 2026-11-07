# Module: src/modules/asrx [AI]

Provides automated speech recognition (ASRx / speech-to-text) management and batch transcription capabilities across multiple speech and multimodal AI providers (Deepgram, Gemini, OpenAI) directly in the browser via client-side fetch.

## Key files
- `src/modules/asrx/asrx.types.ts`: Defines domain types for ASR vendors, persistent engine instances, vendor profiles, credentials, batch options, and transcription results.
- `src/modules/asrx/asrx.config.ts`: Specifies default models, hosts, limits, and supported model lists for Deepgram, Gemini, and OpenAI speech-to-text.
- `src/modules/asrx/asrx.vendors-registry.ts`: Maintains the vendor descriptor registry, priority ranking, protocol filtering, and matching from LLM services to ASR vendors.
- `src/modules/asrx/store-module-asrx.ts`: Zustand store managing configured ASR engines, active engine selection, and auto-linking engines from configured LLM service credentials.
- `src/modules/asrx/protocols/batch/batch.client.ts`: Main client-side batch transcription entry point (asrxTranscribeBatch) that resolves engines, builds wire access, and lazily loads the core dispatcher.
- `src/modules/asrx/protocols/batch/transcribe.core.ts`: Core dispatcher routing batch transcription requests to provider-specific adapters based on access dialect.
- `src/modules/asrx/protocols/batch/transcribe-deepgram.ts`: Deepgram batch transcription adapter handling /v1/listen audio upload, topic detection, and sentiment parsing.
- `src/modules/asrx/protocols/batch/transcribe-gemini.ts`: Gemini batch transcription adapter using gemini-3.5-transcribe on the /v1beta/interactions endpoint and managing Gemini Files API uploads.
- `src/modules/asrx/protocols/batch/transcribe-openai.ts`: OpenAI batch transcription adapter interfacing with /v1/audio/transcriptions across gpt-transcribe, gpt-4o-transcribe, and whisper-1 models.
- `src/modules/asrx/components/ASRxConfigureEngines.tsx`: UI component for choosing active transcription engines and creating manual vendor engines.
- `src/modules/asrx/components/ASRxConfigureEngineFull.tsx`: UI component for customizing vendor-specific transcription parameters, models, and API credentials.

## Public interface
- asrxTranscribeBatch(audio: Blob, mimeType: string, selector?: ASRxProfileSelector, options?: ASRxTranscribeBatchOptions): Promise<ASRxBatchResult>
- useASRxStore: Zustand store for ASRx engine CRUD and settings
- useASRxEngines(): DASRxEngineAny[]
- useASRxGlobalEngine(): DASRxEngineAny | null
- asrxFindEngineById(engineId: DASRxEngineId | null, requireValidCredentials: boolean): DASRxEngineAny | null
- asrxFindVendor<TVt>(vendorType: TVt): IASRxVendor<TVt> | null
- asrxFindVendorForLLMVendor(llmVendorId: ModelVendorId): IASRxVendorAny | null
- asrxFindByVendorPriorityAsc(engines: DASRxEngineAny[]): DASRxEngineAny | null
- asrxFindVendorsByProtocol(protocol: ASRxProtocol): IASRxVendorAny[]
- ASRxConfigureEngines(props: { isMobile: boolean }): JSX.Element
- ASRxConfigureEngineFull(props: { engine: DASRxEngineAny, isMobile: boolean, onUpdate: (updates: Partial<DASRxEngineAny>) => void }): JSX.Element

## Dependencies
- react
- zustand
- zod
- @mui/joy
- @mui/icons-material
- ~/common/stores/llms/store-llms
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/vendors/gemini/geminiFiles.client
- ~/modules/llms/server/openai/openai.access
- ~/modules/llms/shared/llm.isomorphic

## AI touchpoints [AI]
- `src/modules/asrx/IASRxVendor.ts`
- `src/modules/asrx/asrx.config.ts`
- `src/modules/asrx/asrx.types.ts`
- `src/modules/asrx/asrx.vendors-registry.ts`
- `src/modules/asrx/components/ASRxConfigureEngineFull.tsx`
- `src/modules/asrx/components/ASRxConfigureEngines.tsx`
- `src/modules/asrx/protocols/batch/batch.access.ts`
- `src/modules/asrx/protocols/batch/batch.client.ts`
- `src/modules/asrx/protocols/batch/transcribe-gemini.ts`
- `src/modules/asrx/protocols/batch/transcribe-openai.ts`
- `src/modules/asrx/protocols/batch/transcribe.core.ts`
- `src/modules/asrx/store-module-asrx.ts`
- `src/modules/asrx/vendors/gemini.vendor.ts`
- `src/modules/asrx/vendors/openai.vendor.ts`
- `src/modules/asrx/protocols/batch/transcribe-deepgram.ts`

## Open questions
- _none_
