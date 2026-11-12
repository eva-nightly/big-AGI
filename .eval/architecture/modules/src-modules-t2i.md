# Module: src/modules/t2i [AI]

Manages text-to-image (T2I) generation capabilities, vendor engine configurations (OpenAI/Azure/LocalAI, Google Gemini, OpenRouter), client hooks, and image synthesis workflows for Big-AGI.

## Key files
- `src/modules/t2i/t2i.client.ts`: High-level client API providing text-to-image capability hooks, provider resolution, and execution functions that return database-backed image content fragments.
- `src/modules/t2i/store-module-t2i.ts`: Zustand store managing persistent T2I engine instances, user selections, and automatic syncing with configured LLM service sources.
- `src/modules/t2i/t2i.vendors-registry.ts`: Registry indexing and dispatching vendor implementations (OpenAI, Azure, LocalAI, Gemini, OpenRouter).
- `src/modules/t2i/dalle/openaiGenerateImages.ts`: Client invocation and batching for OpenAI, Azure, and LocalAI image generation and editing via tRPC streaming endpoints.
- `src/modules/t2i/gemini/geminiGenerateImages.ts`: Client invocation and parallel request fan-out for Google Gemini image generation and editing models.
- `src/modules/t2i/openrouter/openrouterGenerateImages.ts`: Client invocation for OpenRouter's dedicated image generation endpoint.
- `src/modules/t2i/t2i.server.ts`: Server-side and utility definitions for image binary parsing, dimensions extraction, and stream schemas.
- `src/modules/t2i/components/T2IConfigureEngines.tsx`: UI component for selecting the active T2I generation engine and embedding vendor configuration panels.

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
- T2IConfigureEngines(props)
- T2IConfigureEngineFull(props)
- T2IEngineProfileEditor(props)
- getImageInformationFromBytes(arrayBuffer)
- getPngDimensionsFromBytes(arrayBuffer)
- getJpegDimensionsFromBytes(arrayBuffer)

## Dependencies
- @mui/joy
- @mui/icons-material/Key
- @mui/icons-material/Link
- react
- zustand
- zod/v4

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
- When will standalone manual API-key credential options be introduced to decouple T2I engines from configured LLM chat services?
- Will OpenRouter image models support dynamic catalog retrieval instead of relying on a hardcoded list in t2i.config.ts?
