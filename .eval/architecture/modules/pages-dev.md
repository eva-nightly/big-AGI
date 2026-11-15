# Module: pages/dev

Provides internal developer and debugging pages for inspecting client capabilities, application state, backend deployment configuration, and LLM capabilities.

## Key files
- `pages/dev/debug.tsx`: Debug dashboard page displaying client platform flags, capabilities, store metadata, backend configuration, and a debug JSON export action.
- `pages/dev/llms.tsx`: Developer page rendering the AppLlmCapabilities view for inspecting configured model capabilities.

## Public interface
- pages/dev/debug.tsx: default Next.js page export wrapped with withNextJSPerPageLayout
- pages/dev/llms.tsx: default Next.js page export wrapped with withNextJSPerPageLayout

## Dependencies
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
