# Module: src/modules/asrx [AI]

Manages automated speech recognition (ASR) engines, configurations, credentials, and client-side batch audio transcription dispatching across Deepgram, Gemini, and OpenAI providers.

## Key files
- `src/modules/asrx/asrx.types.ts`: Defines core types for ASR engines, credentials, vendor profiles, transcription options, batch results, detected topics, and sentiment analysis.
- `src/modules/asrx/asrx.config.ts`: Specifies default models, hosts, limits, and configuration parameters for Deepgram, Gemini, and OpenAI ASR services.
- `src/modules/asrx/store-module-asrx.ts`: Provides Zustand store and hooks managing engine lifecycle, auto-linking from LLM services, active engine selection, and persistence.
- `src/modules/asrx/asrx.vendors-registry.ts`: Maintains the vendor registry and vendor discovery functions for engine creation and priority ranking.
- `src/modules/asrx/protocols/batch/batch.client.ts`: Exposes the public client-side batch transcription entry point `asrxTranscribeBatch` resolving engine credentials and dispatching calls.
- `src/modules/asrx/protocols/batch/transcribe.core.ts`: Acts as the internal core dispatcher dynamically imported to route transcription requests to vendor-specific batch adapters.
- `src/modules/asrx/protocols/batch/transcribe-deepgram.ts`: Executes batch transcription requests against Deepgram's listen API, parsing transcript, topic detection, and sentiment analysis.
- `src/modules/asrx/protocols/batch/transcribe-gemini.ts`: Executes batch transcription against Google Gemini's interactions API with inline base64 or Gemini Files API uploads.
- `src/modules/asrx/protocols/batch/transcribe-openai.ts`: Executes multipart batch transcription against OpenAI-compatible `/v1/audio/transcriptions` endpoints.
- `src/modules/asrx/components/ASRxConfigureEngines.tsx`: React UI component for selecting, adding, and deleting active transcription engines.
- `src/modules/asrx/components/ASRxConfigureEngineFull.tsx`: React UI component for adjusting vendor transcription profiles and API credentials.

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
- zustand
- zustand/middleware
- zustand/react/shallow
- zod
- @mui/joy
- @mui/icons-material
- react
- ~/common/util/idUtils
- ~/common/util/blobUtils
- ~/common/util/modelPickUtils
- ~/common/util/hooks/useToggleableBoolean
- ~/common/stores/llms/store-llms
- ~/common/stores/llms/llms.service.types
- ~/common/stores/chat/chat.conversation
- ~/common/components/ExpanderSection
- ~/common/components/forms/FormChipControl
- ~/common/components/forms/FormChipModelControl
- ~/common/components/forms/FormLabelStart
- ~/common/components/forms/FormSecretField
- ~/common/components/forms/FormSliderControl
- ~/common/components/forms/FormSwitchControl
- ~/common/components/forms/FormTextField
- ~/common/components/modals/GoodModal
- ~/common/components/ButtonServiceAdd
- ~/common/components/CloseablePopup
- ~/common/components/ConfirmIconButton
- ~/common/components/TooltipOutlined
- ~/common/components/icons/vendors/GeminiIcon
- ~/common/components/icons/vendors/OpenAIIcon
- ~/common/app.theme
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/vendors/gemini/gemini.vendor
- ~/modules/llms/vendors/openai/openai.vendor
- ~/modules/llms/vendors/gemini/geminiFiles.client
- ~/modules/llms/server/gemini/gemini.access
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
