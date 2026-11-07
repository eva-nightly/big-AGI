# Module: src/modules/t2i [AI]

Manages text-to-image (T2I) engine configurations, vendor integrations, and image generation execution for OpenAI (DALL-E/GPT Image), Azure, LocalAI, OpenRouter, and Google Gemini.

## Key files
- `src/modules/t2i/t2i.client.ts`: Client interface offering React capability hooks and functions to execute image generation and transform results into message fragments and database image assets.
- `src/modules/t2i/store-module-t2i.ts`: Zustand store managing configured and auto-synced T2I engine instances, credentials, and user engine selections.
- `src/modules/t2i/t2i.vendors-registry.ts`: Central registry mapping T2I vendor implementations (OpenAI, Azure, LocalAI, OpenRouter, Google AI) to engine configurations.
- `src/modules/t2i/t2i.config.ts`: Model catalog definitions, resolution utilities, quality clamps, and default configuration profiles for T2I vendors.
- `src/modules/t2i/t2i.server.ts`: Shared server/client types, output schemas, and binary image dimension extractors (PNG/JPEG).
- `src/modules/t2i/dalle/openaiGenerateImages.ts`: Client invocation logic and batching for OpenAI, Azure, and LocalAI image generation routes.
- `src/modules/t2i/gemini/geminiGenerateImages.ts`: Client invocation logic and fan-out generation for Google Gemini Nano Banana image models.
- `src/modules/t2i/openrouter/openrouterGenerateImages.ts`: Client invocation logic and fan-out generation for OpenRouter image endpoints.
- `src/modules/t2i/components/T2IConfigureEngines.tsx`: Main settings UI component for choosing active T2I providers and rendering vendor-specific parameter editors.

## Public interface
- useCapabilityTextToImage
- getActiveTextToImageProviderOrThrow
- t2iGenerateImagesOrThrow
- t2iGenerateImageContentFragments
- useT2IStore
- t2iFindEngineById
- t2iFindVendor
- t2iFindVendorForLLMVendor
- t2iEngineGeneratorName
- T2IConfigureEngines
- T2IConfigureEngineFull
- T2IEngineProfileEditor
- getImageInformationFromBytes
- getPngDimensionsFromBytes
- getJpegDimensionsFromBytes

## Dependencies
- @mui/joy
- @mui/icons-material
- react
- zustand
- zod/v4
- ~/common/components
- ~/common/stores/blob
- ~/common/stores/chat
- ~/common/stores/llms
- ~/common/util
- ~/modules/aix
- ~/modules/llms

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
- LocalAI currently reuses DProfileDalle and hardcoded model mapping ('stablediffusion'/'dreamshaper'); how will dedicated dynamic model gallery support be integrated?
