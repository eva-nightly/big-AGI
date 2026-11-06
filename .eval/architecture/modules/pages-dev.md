# Module: pages/dev

Provides developer and diagnostics pages for inspecting client environment properties, application store states, server configurations, and LLM capability debugging tools.

## Key files
- `pages/dev/debug.tsx`: Debug dashboard page that compiles client, product/store (chats, folders, LLM info), and backend configuration states into formatted views with JSON export capabilities.
- `pages/dev/llms.tsx`: Developer page route wrapping and rendering the LLM capabilities inspector component.

## Public interface
- default export (Next.js page component for /dev/debug)
- default export (Next.js page component for /dev/llms)

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
