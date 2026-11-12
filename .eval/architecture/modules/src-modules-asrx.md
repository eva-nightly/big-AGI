# Module: src/modules/asrx [AI]

Provides automatic speech recognition (ASR) and speech-to-text transcription capabilities across multiple vendors (Deepgram, Gemini, OpenAI) with client-side direct API execution, engine configuration management, and automatic credential synchronization from configured LLM services.

## Key files
- `src/modules/asrx/protocols/batch/batch.client.ts`: Client-facing entry point for batch audio transcription (asrxTranscribeBatch), resolving active engines and dispatching client-side fetch requests
- `src/modules/asrx/protocols/batch/transcribe.core.ts`: Core dispatcher routing transcription payloads to vendor-specific batch adapters
- `src/modules/asrx/store-module-asrx.ts`: Persisted Zustand store managing ASR engine configurations, engine lifecycle, active engine selection, and auto-linking from LLM services
- `src/modules/asrx/asrx.vendors-registry.ts`: Registry for ASR vendor implementations, vendor priority lookup, and LLM vendor mapping
- `src/modules/asrx/protocols/batch/transcribe-deepgram.ts`: Deepgram STT adapter handling raw audio listening, topic detection, and sentiment analysis
- `src/modules/asrx/protocols/batch/transcribe-gemini.ts`: Gemini STT adapter integrating with the Gemini Interactions API and Files API for transcription
- `src/modules/asrx/protocols/batch/transcribe-openai.ts`: OpenAI STT adapter handling multipart audio transcription with gpt-transcribe, gpt-4o-transcribe, and whisper models
- `src/modules/asrx/components/ASRxConfigureEngines.tsx`: UI component for selecting, adding, and configuring transcription engines in application settings

## Public interface
- asrxTranscribeBatch(audio: Blob, mimeType: string, selector?: ASRxProfileSelector, options?: ASRxTranscribeBatchOptions): Promise<ASRxBatchResult>
- useASRxStore: Zustand store hook for ASR engine state and operations
- useASRxEngines(): DASRxEngineAny[]
- useASRxGlobalEngine(): DASRxEngineAny | null
- asrxFindEngineById(engineId: DASRxEngineId | null, requireValidCredentials: boolean): DASRxEngineAny | null
- asrxFindVendor(vendorType: DASRxVendorType): IASRxVendor | null
- asrxFindVendorForLLMVendor(llmVendorId: ModelVendorId): IASRxVendorAny | null
- asrxFindByVendorPriorityAsc(engines: DASRxEngineAny[]): DASRxEngineAny | null
- asrxFindVendorsByProtocol(protocol: ASRxProtocol): IASRxVendorAny[]
- ASRxConfigureEngines(props: { isMobile: boolean }): JSX.Element
- ASRxConfigureEngineFull(props: { engine: DASRxEngineAny, isMobile: boolean, onUpdate: (updates: Partial<DASRxEngineAny>) => void }): JSX.Element

## Dependencies
- @mui/joy
- @mui/icons-material
- zustand
- zod
- ~/common/util/blobUtils
- ~/common/util/idUtils
- ~/common/util/modelPickUtils
- ~/common/stores/llms/store-llms
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/vendors/gemini/geminiFiles.client
- ~/modules/llms/server/openai/openai.access
- ~/modules/llms/shared/llm.isomorphic
- ~/modules/llms/vendors/vendors.registry

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
