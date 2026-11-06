# Module: src/modules/t2i [AI]

Manages Text-to-Image (T2I) engine configurations, vendor registrations, state synchronization from LLM services, and client-side execution of image generation requests across multiple providers (OpenAI/DALL-E, Azure OpenAI, LocalAI, OpenRouter, Google Gemini).

## Key files
- `src/modules/t2i/t2i.client.ts`: High-level client entry points for checking T2I capability, selecting active providers, and orchestrating image generation into message fragments and DBlobs
- `src/modules/t2i/store-module-t2i.ts`: Zustand persistence store managing T2I engine instances, active engine IDs, CRUD operations, and automatic synchronization with configured LLM services
- `src/modules/t2i/t2i.types.ts`: TypeScript type definitions for T2I vendors, engines, credentials, profiles, parameters, and generation context schemas
- `src/modules/t2i/t2i.vendors-registry.ts`: Central registry mapping vendor types to their vendor specifications, auto-linking rules, and generator naming logic
- `src/modules/t2i/t2i.config.ts`: Catalogs, defaults, quality-clamping logic, and model resolution helpers for OpenAI/DALL-E and OpenRouter image models
- `src/modules/t2i/t2i.server.ts`: Shared server/client utilities including binary image parsing (PNG/JPEG dimension sniffers) and generation stream output schemas
- `src/modules/t2i/dalle/openaiGenerateImages.ts`: Client invocation logic for OpenAI, Azure, and LocalAI image generation via tRPC stream mutations
- `src/modules/t2i/gemini/geminiGenerateImages.ts`: Client invocation logic for Google Gemini/Nano Banana image generation via tRPC stream mutations
- `src/modules/t2i/openrouter/openrouterGenerateImages.ts`: Client invocation logic for OpenRouter dedicated image generation endpoint via tRPC stream mutations
- `src/modules/t2i/components/T2IConfigureEngines.tsx`: UI component for selecting the active T2I provider and rendering the selected engine's configuration panel

## Public interface
- useCapabilityTextToImage(): CapabilityTextToImage
- getActiveTextToImageProviderOrThrow(): TextToImageProvider
- t2iGenerateImagesOrThrow(provider, prompt, aixInlineImageParts, count, options): Promise<T2iCreateImageOutput[]>
- t2iGenerateImageContentFragments(t2iProvider, prompt, aixInlineImageParts, count, scopeId, options): Promise<DMessageContentFragment[]>
- useT2IStore: Zustand store hook for engine state and actions
- t2iFindEngineById(engineId: DT2IEngineId | null): DT2IEngineAny | null
- t2iFindVendor(vendorType: TVt): IT2IVendor<TVt> | null
- t2iFindVendorForLLMVendor(llmVendorId: ModelVendorId): IT2IVendorAny | null
- t2iEngineGeneratorName(engine: DT2IEngineAny): string
- t2iIsPainterName(generatorName: string | undefined): boolean
- getImageInformationFromBytes(arrayBuffer: ArrayBuffer): { width: number; height: number; mimeType: string }
- getPngDimensionsFromBytes(arrayBuffer: ArrayBuffer): { width: number; height: number }
- getJpegDimensionsFromBytes(arrayBuffer: ArrayBuffer): { width: number; height: number }
- T2IConfigureEngines: React component
- T2IConfigureEngineFull: React component
- T2IEngineProfileEditor: React component

## Dependencies
- @mui/joy
- react
- zustand
- zustand/middleware
- zustand/react/shallow
- zod/v4
- ~/common/components/*
- ~/common/stores/blob/dblobs-portability
- ~/common/stores/chat/chat.fragments
- ~/common/stores/llms/*
- ~/common/util/*
- ~/modules/aix/server/api/aix.wiretypes
- ~/modules/llms/*

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
