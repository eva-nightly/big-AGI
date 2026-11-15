# Module: src/modules/asrx [AI]

Manages automated speech recognition (ASR) / transcription engines, vendor registries, and client-side transcription workflows for Big-AGI, integrating Deepgram, Gemini, and OpenAI services with local persistence.

## Key files
- `src/modules/asrx/asrx.config.ts`: Defines default models, hosts, thresholds, and supported models for ASR vendors.
- `src/modules/asrx/asrx.types.ts`: Defines core type interfaces for engines, profiles, credentials, batch results, and transcription options.
- `src/modules/asrx/asrx.vendors-registry.ts`: Provides vendor lookup, protocol support filtering, and priority-ranked engine selection utilities.
- `src/modules/asrx/store-module-asrx.ts`: Zustand store for persisting and auto-linking ASR engines from LLM services and managing active engine state.
- `src/modules/asrx/protocols/batch/batch.client.ts`: Main entry point for batch transcription requests, handling engine resolution and dynamic loading of transcription core logic.
- `src/modules/asrx/protocols/batch/transcribe.core.ts`: Internal dispatcher routing transcription requests to specific vendor adapters (Deepgram, Gemini, OpenAI).
- `src/modules/asrx/protocols/batch/transcribe-deepgram.ts`: Client-side HTTP adapter for Deepgram's listen API endpoint.
- `src/modules/asrx/protocols/batch/transcribe-gemini.ts`: Client-side HTTP adapter for Google Gemini's transcribe interactions API and Files API.
- `src/modules/asrx/protocols/batch/transcribe-openai.ts`: Client-side HTTP adapter for OpenAI's /v1/audio/transcriptions endpoint.
- `src/modules/asrx/components/ASRxConfigureEngines.tsx`: UI component for choosing active engines, adding manual engines, and delegating engine configuration.
- `src/modules/asrx/components/ASRxConfigureEngineFull.tsx`: Detailed UI settings panel for tweaking vendor transcription parameters and API credentials.

## Public interface
- asrxTranscribeBatch(audio: Blob, mimeType: string, selector?: ASRxProfileSelector, options?: ASRxTranscribeBatchOptions): Promise<ASRxBatchResult>
- asrxFindVendor(vendorType: TVt): IASRxVendor<TVt> | null
- asrxFindVendorForLLMVendor(llmVendorId: ModelVendorId): IASRxVendorAny | null
- asrxFindByVendorPriorityAsc(engines: DASRxEngineAny[]): DASRxEngineAny | null
- asrxFindVendorsByProtocol(protocol: ASRxProtocol): IASRxVendorAny[]
- useASRxStore
- useASRxEngines(): DASRxEngineAny[]
- useASRxGlobalEngine(): DASRxEngineAny | null
- asrxFindEngineById(engineId: DASRxEngineId | null, requireValidCredentials: boolean): DASRxEngineAny | null
- ASRxConfigureEngines(props: { isMobile: boolean }): JSX.Element
- ASRxConfigureEngineFull(props: { engine: DASRxEngineAny; isMobile: boolean; onUpdate: (updates: Partial<DASRxEngineAny>) => void }): JSX.Element

## Dependencies
- zustand
- zod
- @mui/joy
- @mui/icons-material
- ~/common/stores/llms/store-llms
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/vendors/gemini/geminiFiles.client
- ~/modules/llms/server/openai/openai.access
- ~/modules/llms/shared/llm.isomorphic
- ~/common/util/modelPickUtils
- ~/common/util/blobUtils
- ~/common/util/idUtils

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
- Are realtime/WebSocket transcription protocols planned for Deepgram/OpenAI implementations beyond the current batch support?
- How are server-side proxies or edge handlers integrated if ASRx is currently designated as CSF (client-side fetch) only?
