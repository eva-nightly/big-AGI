# Module: src/modules/blocks [AI]

(part 1 of 2) Provides interactive content rendering blocks for rich message representations, including syntax-highlighted code (Prism), dynamic diagramming and visualization renderers (Chart.js, Mermaid, PlantUML, SVG, Sandboxed HTML iFrames, Markdown), code diffing, LiveFile local file patching workflows, and rich image display with AI regeneration. (part 2 of 2) Parses, partitions, formats, and renders rich message content blocks (Markdown with KaTeX/GFM/tables/task lists, plain text with slash command chips, word diffs, code blocks, HTML, and images) with optimizations for streaming, render decay, interactive task checking, and height collapsing.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/blocks/code/RenderCode.tsx`: Top-level dispatcher and container for rendering code blocks with lazy Prism syntax highlighting, interactive overlays, copy/download utilities, and specialized diagram renderers.
- `src/modules/blocks/enhanced-code/EnhancedRenderCode.tsx`: Wraps code blocks with collapsible panel framing, header metadata, menu options, LiveFile integration, and context diff actions.
- `src/modules/blocks/code/code-highlight/codePrism.ts`: Language inference and Prism.js syntax highlighting engine with line numbering and incipit detection.
- `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`: Renders interactive Chart.js charts loaded dynamically via CDN, with PNG export and AI-based syntax fixup support.
- `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx`: Dynamically loads Mermaid.js from CDN and renders SVG diagrams with SVG-to-PNG export and AI fixup.
- `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`: Fetches and renders PlantUML diagrams from a PlantUML server with theme cycling, layout direction toggling, and AI fixup.
- `src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame.tsx`: Renders interactive HTML in a sandboxed iframe with an isolated in-memory storage polyfill and CSS resets.
- `src/modules/blocks/enhanced-code/ERCDiffContext.tsx`: React context and provider managing state for side-by-side or unified code diffing modals.
- `src/modules/blocks/enhanced-code/livefile-patch/useLiveFilePatch.tsx`: Orchestrates linking code blocks to local workspace files via browser filesystem handles and applying patches.
- `src/modules/blocks/image/RenderImageRefDBlob.tsx`: Renders database-stored blob image assets and handles AI image prompt regeneration via text-to-image client.
- `src/modules/blocks/AutoBlocksRenderer.tsx`: Main block orchestrator that parses raw message text into typed blocks and delegates rendering to markdown, code, plain text, diffs, or HTML components.
- `src/modules/blocks/markdown/RenderMarkdown.tsx`: Markdown rendering boundary supporting dynamic rendering fallback and lightweight pre-parsing (RenderMarkdownLite) during streaming/render decay.
- `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx`: Core ReactMarkdown implementation configured with plugins (remark-gfm, remark-math, rehype-katex, remarkMark) and custom preprocessors for LaTeX and tags.
- `src/modules/blocks/markdown/HostedLinksContext.tsx`: Message-scoped context registry that maps model sandbox links (e.g. OpenAI code-interpreter files) to actions provided by sibling blocks.
- `src/modules/blocks/markdown/CustomARenderer.tsx`: Custom anchor renderer handling inert links, external links with Google Favicon previews, and sandbox attachment download actions.
- `src/modules/blocks/markdown/CustomTableRenderer.tsx`: Custom table renderer enabling DOM-extracted CSV export and Markdown copy functionality.
- `src/modules/blocks/markdown/CustomTaskListRenderer.tsx`: Rehype plugin and container hook allowing interactive toggling and index renumbering of markdown task checkboxes.
- `src/modules/blocks/markdown/RenderMarkdownLite.tsx`: Fast incremental line scanner used to render unparsed streaming markdown during active token generation.
- `src/modules/blocks/plaintext/RenderPlainText.tsx`: Plain text renderer that detects chat slash commands and highlights them as Chip components.
- `src/modules/blocks/wordsdiff/RenderWordsDiff.tsx`: Visual difference renderer for comparing word-level changes with green and red highlighting.
- `src/modules/blocks/blocks.hooks.ts`: Hooks providing height measurement/collapsing for long user messages and semi-stable block memoization across streaming cycles.
- `src/modules/blocks/blocks.types.ts`: TypeScript definitions for structured render blocks (markdown, code, HTML, image URLs, and text diffs).

## Public interface
- RenderCodeMemo
- inferCodeLanguage(blockTitle: string, code: string): string | null
- highlightCode(inferredCodeLanguage: string | null, blockCode: string, addLineNumbers: boolean): string
- EnhancedRenderCode
- ERCDiffContextProvider
- useERCDiffContext()
- useERCDiffActions()
- RenderCodeChartJS
- RenderCodeMermaid
- RenderCodePlantUML
- RenderCodeSVG
- RenderCodeHtmlIFrame
- RenderDangerousHtml
- heuristicIsBlockPureHTML(text: string): boolean
- heuristicIsCodePlantUML(code: string): boolean
- heuristicIsSVGCode(trimmedCode: string): boolean
- heuristicAllMarkdownImageReferences(fullText: string): RenderBlockInputs | null
- RenderImageRefDBlob
- RenderImageURL
- AutoBlocksRenderer
- AutoBlocksCodeRenderVariant
- AutoBlocksHtmlRenderVariant
- ScaledTextBlockRenderer
- RenderMarkdown
- RenderMarkdownMemo
- RenderMarkdownRendererProps
- RenderMarkdownLite
- RenderPlainText
- isTextChatCommand
- RenderWordsDiff
- useWordsDifference
- WordsDiff
- HostedLinksProvider
- useHostedLinkRegister
- useHostedLinkAction
- hostedLinkHandleFromHref
- BlocksContainer
- BlocksTextarea
- OverlayButton
- ToggleExpansionButton
- useHeightCollapser
- useAutoBlocksMemoSemiStable
- RenderBlockInputs

## Dependencies
- prismjs
- browser-fs-access
- react-timeago
- @tanstack/react-query
- zustand
- @mui/joy
- @mui/icons-material
- ~/common/stores/blob/dblobs-portability
- ~/common/livefile/store-live-file
- ~/common/stores/workspace/store-client-workspace
- ~/modules/aifn/agicodefixup/useAgiFixupCode
- ~/modules/t2i/t2i.client
- @mui/icons-material/ExpandLess
- @mui/icons-material/ExpandMore
- react-markdown
- unified
- rehype-katex
- remark-gfm
- remark-math
- remark-mark-highlight
- unist-util-visit
- csv-stringify/browser/esm/sync
- diff
- ~/common/app.theme
- ~/common/render-decay/RenderDecayZone
- ~/common/stores/store-ux-labs
- ~/common/components/TooltipOutlined
- ~/common/util/clipboardUtils
- ~/common/util/downloadUtils
- ~/common/util/idUtils
- ~/common/util/textUtils
- ~/common/util/hooks/useShallowObject
- ../../../apps/chat/commands/commands.registry

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
- `src/modules/blocks/markdown/userText.remark.ts`

## Open questions
- In usePatchingWorkflow.tsx, applyPatch currently returns the patch directly without line-by-line unified diff patching.
- Test cases in blocks.textparser.test.ts identify unresolved edge-case handling for mid-line code fences and closing fences followed by text (tickets #983 and #1280).
