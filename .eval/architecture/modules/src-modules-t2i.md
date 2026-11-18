# Module: src/modules/t2i [AI]

Manages Text-to-Image (T2I) generation engine lifecycle, vendor configurations, profiles, and image generation invocations across OpenAI/DALL·E, Azure, LocalAI, Gemini, and OpenRouter services.

## Key files
- `src/modules/t2i/store-module-t2i.ts`: Zustand store managing configured T2I engine instances, active engine selection, and auto-syncing/linking from configured LLM services.
- `src/modules/t2i/t2i.client.ts`: High-level client entry points, capability hook (useCapabilityTextToImage), generation orchestration, and asset/DBlob fragment creation.
- `src/modules/t2i/t2i.types.ts`: Type definitions for T2I engine instances, vendor profiles (DALL·E, Gemini, OpenRouter), credentials, and execution options.
- `src/modules/t2i/t2i.vendors-registry.ts`: Registry for T2I vendors linking model vendors to T2I vendor definitions, capabilities, and naming handlers.
- `src/modules/t2i/t2i.config.ts`: Catalog definitions, model resolution helpers, quality clamping, and painter name validation.
- `src/modules/t2i/dalle/openaiGenerateImages.ts`: Client invocation and streaming handler for OpenAI, Azure, and LocalAI image generation via tRPC.
- `src/modules/t2i/gemini/geminiGenerateImages.ts`: Client invocation and streaming handler for Gemini image generation via tRPC.
- `src/modules/t2i/openrouter/openrouterGenerateImages.ts`: Client invocation and streaming handler for OpenRouter image generation via tRPC.
- `src/modules/t2i/t2i.server.ts`: Binary byte parsers for PNG/JPEG dimensions and image format inspection, alongside schemas and types for generated image outputs.
- `src/modules/t2i/components/T2IConfigureEngines.tsx`: UI component for selecting the active T2I provider and rendering the vendor-specific configuration panel.

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
- resolveDalleModelId(selection)
- resolveOpenRouterImageModelId(selection)
- getImageInformationFromBytes(arrayBuffer)
- getPngDimensionsFromBytes(arrayBuffer)
- getJpegDimensionsFromBytes(arrayBuffer)
- T2IConfigureEngines(props)
- T2IConfigureEngineFull(props)
- T2IEngineProfileEditor(props)

## Dependencies
- zustand
- @mui/joy
- zod/v4
- ~/common/stores/llms/store-llms
- ~/common/stores/blob/dblobs-portability
- ~/common/stores/chat/chat.fragments
- ~/common/util/trpc.client
- ~/modules/llms/vendors/vendor.helpers
- ~/modules/aix/server/api/aix.wiretypes

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
- LocalAI currently reuses the DALL-E profile with temporary hardcoded size mappings in openaiGenerateImages.ts rather than having a dedicated profile and dynamic model discovery.
- OpenRouter does not yet support image transformation/editing in this module (throws an error if inline images are supplied).
- Direct API-key and system-provided credentials options for T2I engines are planned in types and placeholders, but are not yet implemented in the configuration UI.
