# Module: src/modules/t2i [AI]

Manages text-to-image (T2I) generation capabilities, engine configurations, vendor registrations (OpenAI, Azure, LocalAI, OpenRouter, Gemini), state persistence, and generation execution to produce image assets and chat content fragments.

## Key files
- `src/modules/t2i/t2i.client.ts`: High-level client generation entry point, capabilities hook, provider resolution, and DBlob content fragment creation.
- `src/modules/t2i/store-module-t2i.ts`: Zustand store maintaining engine configurations, active engine selection, and auto-syncing engines with configured LLM services.
- `src/modules/t2i/t2i.vendors-registry.ts`: Central registry mapping vendor keys to vendor adapters (OpenAI, Azure, LocalAI, OpenRouter, Google AI).
- `src/modules/t2i/dalle/openaiGenerateImages.ts`: Client invocation and batch handling for OpenAI/DALL·E/GPT Image model generation via tRPC stream endpoints.
- `src/modules/t2i/gemini/geminiGenerateImages.ts`: Client invocation and fan-out handling for Google Gemini image generation models via tRPC stream endpoints.
- `src/modules/t2i/openrouter/openrouterGenerateImages.ts`: Client invocation and fan-out handling for OpenRouter image generation endpoints.
- `src/modules/t2i/components/T2IConfigureEngines.tsx`: UI component for selecting the active T2I engine and rendering its specific configuration panel.
- `src/modules/t2i/t2i.server.ts`: Image dimension and format parsing utilities for binary buffers (PNG/JPEG) and server types.

## Public interface
- useCapabilityTextToImage()
- getActiveTextToImageProviderOrThrow()
- t2iGenerateImagesOrThrow(provider, prompt, aixInlineImageParts, count, options)
- t2iGenerateImageContentFragments(t2iProvider, prompt, aixInlineImageParts, count, scopeId, options)
- useT2IStore
- t2iFindEngineById(engineId)
- t2iFindVendor(vendorType)
- t2iFindVendorForLLMVendor(llmVendorId)
- t2iEngineGeneratorName(engine)
- t2iIsPainterName(generatorName)
- T2IConfigureEngines(props)
- T2IConfigureEngineFull(props)
- T2IEngineProfileEditor(props)
- getImageInformationFromBytes(arrayBuffer)
- getPngDimensionsFromBytes(arrayBuffer)
- getJpegDimensionsFromBytes(arrayBuffer)

## Dependencies
- @mui/joy
- zustand
- zustand/middleware
- zustand/react/shallow
- zod/v4
- ~/common/components/ExpanderSection
- ~/common/components/forms/FormChipControl
- ~/common/components/forms/FormLabelStart
- ~/common/components/forms/FormSelectControl
- ~/common/components/Link
- ~/common/components/TooltipOutlined
- ~/common/components/useCapabilities
- ~/common/stores/blob/dblobs-portability
- ~/common/stores/chat/chat.fragments
- ~/common/stores/llms/llms.parameters
- ~/common/stores/llms/llms.service.types
- ~/common/stores/llms/llms.types
- ~/common/stores/llms/store-llms
- ~/common/util/blobUtils
- ~/common/util/costUtils
- ~/common/util/hooks/useToggleableBoolean
- ~/common/util/idUtils
- ~/common/util/modelPickUtils
- ~/common/util/trpc.client
- ~/modules/aix/server/api/aix.wiretypes
- ~/modules/llms/components/LLMVendorIcon
- ~/modules/llms/server/gemini/gemini.access
- ~/modules/llms/server/gemini/gemini.models
- ~/modules/llms/server/openai/openai.access
- ~/modules/llms/shared/llm.isomorphic
- ~/modules/llms/vendors/gemini/gemini.vendor
- ~/modules/llms/vendors/openai/openai.vendor
- ~/modules/llms/vendors/vendor.helpers
- ~/modules/llms/vendors/vendors.registry

## AI touchpoints [AI]
- `src/modules/t2i/IT2IVendor.ts`
- `src/modules/t2i/components/T2IConfigureEngineFull.tsx`
- `src/modules/t2i/components/T2IConfigureEngines.tsx`
- `src/modules/t2i/dalle/openaiGenerateImages.ts`
- `src/modules/t2i/gemini/geminiGenerateImages.ts`
- `src/modules/t2i/openrouter/openrouterGenerateImages.ts`
- `src/modules/t2i/store-module-t2i.ts`
- `src/modules/t2i/t2i.client.ts`
- `src/modules/t2i/t2i.config.ts`
- `src/modules/t2i/t2i.server.ts`
- `src/modules/t2i/t2i.types.ts`
- `src/modules/t2i/t2i.vendors-registry.ts`
- `src/modules/t2i/vendors/azure.vendor.ts`
- `src/modules/t2i/vendors/gemini.vendor.ts`
- `src/modules/t2i/vendors/openai.vendor.ts`
- `src/modules/t2i/vendors/openrouter.vendor.ts`

## Open questions
- _none_
