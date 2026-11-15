# Module: src/modules/blocks [AI]

(part 1 of 2) Provides interactive rendering, syntax highlighting, sandboxing, diagramming (Chart.js, Mermaid, PlantUML, SVG, HTML), code diffing, collapse management, and LiveFile file patching workflows for code and content blocks generated in chats. (part 2 of 2) Provides rich content block parsing, decomposition, and rendering components (Markdown, KaTeX LaTeX math, tables with CSV/Markdown export, task lists, code, diffs, plain text, and AI/blob images) for chat messages, doc attachments, and diagram previews across Big-AGI.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/blocks/code/RenderCode.tsx`: Core code block rendering coordinator that lazily loads Prism syntax highlighting, detects formats, and delegates specialized rendering (SVG, HTML, PlantUML, Chart.js, Mermaid).
- `src/modules/blocks/enhanced-code/EnhancedRenderCode.tsx`: Framed and interactive code block component providing collapse toggles, context menus, and LiveFile integration.
- `src/modules/blocks/code/code-highlight/codePrism.ts`: Language inference and Prism.js syntax highlighting with line numbering.
- `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`: Chart.js renderer using dynamically fetched CDN bundles, PNG export capabilities, and AI fixup integration.
- `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx`: Mermaid diagram renderer with dynamic script loading from CDN, SVG sanitization, PNG export, and AI fixup hooks.
- `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`: PlantUML diagram renderer utilizing deflate compression, server-side SVG fetching, layout/theme toggles, and AI fixup.
- `src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame.tsx`: Sandboxed iframe renderer with in-memory storage polyfills for rendering interactive HTML pages safely.
- `src/modules/blocks/danger-html/RenderDangerousHtml.tsx`: Warning container and gatekeeper for rendering raw HTML documents in isolated sandboxes.
- `src/modules/blocks/enhanced-code/ERCDiffContext.tsx`: React context provider and state management for comparing two code blocks via diff modal.
- `src/modules/blocks/enhanced-code/livefile-patch/useLiveFilePatch.tsx`: Hook coordinating LiveFile pairing, file picking, and overwriting local files with generated code.
- `src/modules/blocks/AutoBlocksRenderer.tsx`: Central block dispatcher that decomposes message text into typed blocks (Markdown, Code, HTML, Images, WordsDiff) and renders them with height collapsing, streaming optimizations, and theme scaling.
- `src/modules/blocks/markdown/RenderMarkdown.tsx`: Top-level Markdown wrapper supporting full lazy-loaded rendering via CustomMarkdownRenderer or fast streaming layout via RenderMarkdownLite.
- `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx`: Full react-markdown renderer configured with remark/rehype plugins (GFM, KaTeX, highlight marks, custom tables, task lists, and sandbox link support).
- `src/modules/blocks/markdown/CustomARenderer.tsx`: Custom link component handling model-sandbox URIs (e.g. sandbox:/mnt/data/), safe target blank links, and empty inline links with favicon previews.
- `src/modules/blocks/markdown/HostedLinksContext.tsx`: Message-scoped context that allows markdown sandbox links to trigger download and execution actions registered by sibling file-hosting blocks.
- `src/modules/blocks/image/RenderImageRefDBlob.tsx`: Renders stored database image assets with metadata overlays and triggers AI image regeneration using prompt origins.
- `src/modules/blocks/image/RenderImageURL.tsx`: Interactive image renderer supporting remote URLs, data URLs, card variants, deletion, inspection, and regeneration triggers.
- `src/modules/blocks/markdown/CustomTableRenderer.tsx`: Custom table renderer enabling DOM-extracted CSV downloads and Markdown table copy to clipboard.
- `src/modules/blocks/markdown/CustomTaskListRenderer.tsx`: Rehype plugin and event delegator for interactive task list checkbox toggles that rewrite underlying markdown content.
- `src/modules/blocks/blocks.hooks.ts`: Hooks for measuring and collapsing long text (useHeightCollapser) and semi-stable block identity assignment across streaming updates (useAutoBlocksMemoSemiStable).

## Public interface
- RenderCodeMemo
- EnhancedRenderCode
- RenderDangerousHtml
- heuristicIsBlockPureHTML
- ERCDiffContextProvider
- useERCDiffContext
- useERCDiffActions
- inferCodeLanguage
- highlightCode
- getCodeCollapseManager
- useLiveFilePatch
- useStickyCodeOverlay
- AutoBlocksRenderer
- RenderMarkdown
- RenderMarkdownMemo
- RenderMarkdownLite
- RenderPlainText
- ScaledTextBlockRenderer
- RenderImageURL
- RenderImageRefDBlob
- heuristicAllMarkdownImageReferences
- RenderWordsDiff
- useWordsDifference
- HostedLinksProvider
- useHostedLinkRegister
- useHostedLinkAction
- hostedLinkHandleFromHref
- useHeightCollapser
- useAutoBlocksMemoSemiStable
- BlocksContainer
- BlocksTextarea
- OverlayButton
- ToggleExpansionButton
- isTextChatCommand

## Dependencies
- prismjs
- browser-fs-access
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zustand
- react-markdown
- remark-gfm
- remark-math
- remark-mark-highlight
- rehype-katex
- unist-util-visit
- csv-stringify/browser/esm/sync
- diff
- react-timeago
- ~/common/app.theme
- ~/common/components/TooltipOutlined
- ~/common/render-decay/RenderDecayZone
- ~/common/stores/blob/dblobs-portability
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.message
- ~/common/stores/store-ux-labs
- ~/common/util/clipboardUtils
- ~/common/util/downloadUtils
- ~/common/util/idUtils
- ~/common/util/textUtils
- ~/modules/t2i/t2i.client

## AI touchpoints [AI]
- `src/modules/blocks/image/RenderImageRefDBlob.tsx`
- `src/modules/blocks/image/RenderImageURL.tsx`
- `src/modules/blocks/markdown/CustomARenderer.tsx`
- `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx`
- `src/modules/blocks/markdown/HostedLinksContext.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`
- `src/modules/blocks/markdown/tableBreaks.remark.ts`

## Open questions
- In usePatchingWorkflow.ts, applyPatch is a stub that overwrites the entire target content rather than computing and applying a real patch (noted with FIXME).
- Mid-line fences with glued info and no closing tag cannot be distinguished from glued openers (e.g., text:```lang) until a closer arrives, leading to open edge cases in blocks.textparser.
- Asymmetric handling exists in closing fences followed by text vs spaces and text (issue #983).
