# Module: src/modules/asrx [AI]

Manages automated speech recognition (ASR) engines and handles client-side speech-to-text batch transcription across multiple vendors (Deepgram, Gemini, and OpenAI) directly from the browser.

## Key files
- `src/modules/asrx/asrx.config.ts`: Defines default models, hosts, limits, and pinned model configurations for Deepgram, Gemini, and OpenAI ASR services.
- `src/modules/asrx/asrx.types.ts`: Defines core TypeScript interfaces for ASRx engines, credentials, profiles, transcription options, and result formats.
- `src/modules/asrx/asrx.vendors-registry.ts`: Provides registry and lookup functions for ASRx vendor adapters and priority ranking.
- `src/modules/asrx/IASRxVendor.ts`: Defines the interface contract and capabilities descriptor for ASR vendor adapters.
- `src/modules/asrx/store-module-asrx.ts`: Zustand persistence store managing user and auto-linked ASR engines and active engine selection.
- `src/modules/asrx/protocols/batch/batch.client.ts`: Public entry point for batch transcription requests, managing engine resolution and dynamic dispatch to transcription core.
- `src/modules/asrx/protocols/batch/transcribe.core.ts`: Internal dispatcher routing transcription requests to specific vendor batch implementations.
- `src/modules/asrx/protocols/batch/transcribe-deepgram.ts`: Client-side adapter handling audio transcription, topic extraction, and sentiment analysis with Deepgram's listen API.
- `src/modules/asrx/protocols/batch/transcribe-gemini.ts`: Client-side adapter handling audio transcription with Google Gemini Interactions and Files APIs.
- `src/modules/asrx/protocols/batch/transcribe-openai.ts`: Client-side adapter handling audio transcription and diarization with OpenAI transcription endpoints.
- `src/modules/asrx/components/ASRxConfigureEngines.tsx`: React UI component for selecting, creating, and removing ASR transcription engines.
- `src/modules/asrx/components/ASRxConfigureEngineFull.tsx`: React UI component for configuring vendor credentials and transcription parameters.

## Public interface
- asrxTranscribeBatch(audio: Blob, mimeType: string, selector?: ASRxProfileSelector, options?: ASRxTranscribeBatchOptions): Promise<ASRxBatchResult>
- useASRxStore
- useASRxEngines(): DASRxEngineAny[]
- useASRxGlobalEngine(): DASRxEngineAny | null
- asrxFindEngineById(engineId: DASRxEngineId | null, requireValidCredentials: boolean): DASRxEngineAny | null
- asrxFindVendor(vendorType: TVt): IASRxVendor<TVt> | null
- asrxFindVendorForLLMVendor(llmVendorId: ModelVendorId): IASRxVendorAny | null
- asrxFindByVendorPriorityAsc(engines: DASRxEngineAny[]): DASRxEngineAny | null
- asrxFindVendorsByProtocol(protocol: ASRxProtocol): IASRxVendorAny[]
- ASRxConfigureEngines(props: { isMobile: boolean }): JSX.Element
- ASRxConfigureEngineFull(props: { engine: DASRxEngineAny; isMobile: boolean; onUpdate: (updates: Partial<DASRxEngineAny>) => void }): JSX.Element

## Dependencies
- react
- zustand
- zod
- @mui/joy
- @mui/icons-material
- ~/common/stores/llms/store-llms
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/vendors/gemini/geminiFiles.client
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/server/openai/openai.access
- ~/common/util/idUtils
- ~/common/util/blobUtils
- ~/common/util/modelPickUtils

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
