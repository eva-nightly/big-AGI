# Module: pages/dev

Provides developer and diagnostic views for inspecting client capabilities, application state, backend deployment configurations, and LLM capabilities.

## Key files
- `pages/dev/debug.tsx`: Debug page displaying client, backend, store, and LLM configuration details with an option to download a JSON snapshot.
- `pages/dev/llms.tsx`: Developer page rendering the AppLlmCapabilities test and inspection interface.

## Public interface
- default export (pages/dev/debug.tsx): Next.js page component for /dev/debug
- default export (pages/dev/llms.tsx): Next.js page component for /dev/llms

## Dependencies
- @mui/icons-material/Download
- @mui/joy
- browser-fs-access
- react
- ~/common/app.config
- ~/common/app.release
- ~/common/app.routes
- ~/common/app.serverconf
- ~/common/components/3rdparty/GoogleAnalytics
- ~/common/components/useCapabilities
- ~/common/layout/withLayout
- ~/common/logic/store-logic-sherpa
- ~/common/stores/chat/store-chats
- ~/common/stores/folders/store-chat-folders
- ~/common/stores/llms/store-llms
- ~/common/stores/store-ux-labs
- ~/common/util/clipboardUtils
- ~/common/util/pwaUtils
- ~/common/util/screenCaptureUtils
- ~/common/util/timeUtils
- ~/modules/blocks/code/code-renderers/RenderCodePlantUML
- ../../src/apps/AppPlaceholder
- ../../src/apps/llm-capabilities/AppLlmCapabilities

## AI touchpoints [AI]
- `pages/dev/debug.tsx`
- `pages/dev/llms.tsx`

## Open questions
- _none_
