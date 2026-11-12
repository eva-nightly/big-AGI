# Module: pages/dev

Provides internal developer and debugging pages for inspecting client capabilities, application and LLM state, backend configurations, and LLM capability diagnostics.

## Key files
- `pages/dev/debug.tsx`: Debug information page displaying client, product/model/capability state, and backend deployment settings, with functionality to export state as a JSON file.
- `pages/dev/llms.tsx`: Developer page rendering the AppLlmCapabilities view to inspect and test LLM capabilities.

## Public interface
- pages/dev/debug.tsx (default export: Next.js page component wrapped with withNextJSPerPageLayout)
- pages/dev/llms.tsx (default export: Next.js page component wrapped with withNextJSPerPageLayout)

## Dependencies
- react
- browser-fs-access
- @mui/joy
- @mui/icons-material/Download
- ../../src/apps/AppPlaceholder
- ../../src/apps/llm-capabilities/AppLlmCapabilities
- ~/common/app.serverconf
- ~/modules/blocks/code/code-renderers/RenderCodePlantUML
- ~/common/layout/withLayout
- ~/common/app.config
- ~/common/app.routes
- ~/common/app.release
- ~/common/components/useCapabilities
- ~/common/stores/llms/store-llms
- ~/common/stores/chat/store-chats
- ~/common/stores/folders/store-chat-folders
- ~/common/logic/store-logic-sherpa
- ~/common/stores/store-ux-labs
- ~/common/util/pwaUtils
- ~/common/components/3rdparty/GoogleAnalytics
- ~/common/util/timeUtils
- ~/common/util/clipboardUtils
- ~/common/util/screenCaptureUtils

## AI touchpoints [AI]
- `pages/dev/debug.tsx`
- `pages/dev/llms.tsx`

## Open questions
- _none_
