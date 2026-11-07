# Module: src/modules/blocks [AI]

(part 1 of 2) Provides UI rendering components and utilities for message content blocks, including syntax-highlighted code (Prism.js), interactive diagrams and charts (Chart.js, Mermaid, PlantUML, SVG), sandboxed HTML iframes, code comparison diff modals, LiveFile disk patching, and image rendering with AI repair and regeneration capabilities. (part 2 of 2) Provides the multi-part content block rendering engine for chat messages and document fragments, parsing and displaying Markdown, streaming code blocks, plain text with slash commands, word diffs, LaTeX formulas, GFM tables with CSV export, interactive task lists, and sandbox-hosted file download links.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/blocks/code/RenderCode.tsx`: Core component rendering code blocks with lazy-loaded Prism highlighting, overlay actions, and delegation to specialized renderers.
- `src/modules/blocks/enhanced-code/EnhancedRenderCode.tsx`: Wraps RenderCode in an interactive panel frame with collapse/expand state, header metadata tooltip, LiveFile patch buttons, and contextual actions menu.
- `src/modules/blocks/code/code-highlight/codePrism.ts`: Language inference heuristics and PrismJS syntax highlighting with line-number HTML generation.
- `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`: Dynamically loads Chart.js from CDN to render JSON configurations as interactive canvas charts with AI fixup on parse/render errors and PNG export.
- `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx`: Loads Mermaid from CDN, renders SVG diagrams with foreignObject cleanup, and hooks into AI code fixup on syntax errors.
- `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`: Compresses and transmits PlantUML diagram text to a PlantUML server for SVG generation, handling theme cycling, direction toggling, and AI fixup.
- `src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame.tsx`: Renders interactive HTML documents in an isolated sandbox iframe with injected in-memory storage shims and CSS resets.
- `src/modules/blocks/enhanced-code/ERCDiffContext.tsx`: React context and provider managing base/comparison code blocks and triggering the ERCDiffModal side-by-side or unified diff view.
- `src/modules/blocks/enhanced-code/livefile-patch/useLiveFilePatch.tsx`: Hook coordinating file selection and patching workflow to link generated code back to disk via the File System Access API.
- `src/modules/blocks/image/RenderImageRefDBlob.tsx`: Renders database-stored image assets with metadata overlays and on-demand AI image re-generation.
- `src/modules/blocks/AutoBlocksRenderer.tsx`: Main block dispatcher that partitions message text into typed blocks (Markdown, code, diffs, plain text, danger HTML) and coordinates streaming render decay, expansion toggling, and in-place code editing.
- `src/modules/blocks/markdown/RenderMarkdown.tsx`: Lazy-loading container for full Markdown rendering with fallback to lightweight streaming scanner (RenderMarkdownLite) during render decay.
- `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx`: Core ReactMarkdown implementation configuring unified/remark/rehype plugins (KaTeX, GFM, mark-highlight, table cell breaks) and LaTeX preprocessors with parse-time cost measurement.
- `src/modules/blocks/markdown/HostedLinksContext.tsx`: Message-scoped context that allows Markdown links targeting sandbox schemes (such as OpenAI code interpreter outputs) to trigger download actions on sibling hosted file blocks.
- `src/modules/blocks/markdown/RenderMarkdownLite.tsx`: Incremental parser and scanner providing low-overhead block layout for in-progress LLM streaming without a full Markdown AST parse.
- `src/modules/blocks/markdown/CustomTableRenderer.tsx`: Custom table component supporting DOM-based CSV export and table-to-markdown clipboard copy.
- `src/modules/blocks/plaintext/RenderPlainText.tsx`: Renderer for plain text blocks with special badge and error chip styling for chat slash commands.
- `src/modules/blocks/blocks.hooks.ts`: Hooks for height-based content collapsing and semi-stable block caching across streaming renders.

## Public interface
- RenderCode(props: RenderCodeBaseProps)
- RenderCodeMemo
- EnhancedRenderCode(props)
- inferCodeLanguage(blockTitle: string, code: string): string | null
- highlightCode(inferredCodeLanguage: string | null, blockCode: string, addLineNumbers: boolean): string
- RenderCodeChartJS
- RenderCodeMermaid
- RenderCodePlantUML
- plantUMLCodeCycleTheme(code: string): string
- plantUMLCodeToggleDirection(code: string): string
- heuristicIsCodePlantUML(code: string): boolean
- RenderCodeSVG
- heuristicIsSVGCode(trimmedCode: string): boolean
- RenderCodeHtmlIFrame(props: { htmlCode: string, isFullscreen?: boolean })
- RenderDangerousHtml(props: { html: string, sx?: SxProps })
- heuristicIsBlockPureHTML(text: string): boolean
- RenderImageRefDBlob(props)
- RenderImageURL(props)
- heuristicAllMarkdownImageReferences(fullText: string)
- ERCDiffContextProvider(props)
- useERCDiffContext()
- useERCDiffActions()
- useLiveFilePatch(title: string, code: string, isPartial: boolean, isMobile: boolean, disable: boolean)
- getCodeCollapseManager(): CodeCollapseManager
- AutoBlocksRenderer
- ScaledTextBlockRenderer
- RenderMarkdown
- RenderMarkdownMemo
- RenderMarkdownLite
- CustomARenderer
- CustomTableRenderer
- CustomInputRenderer
- rehypeTaskListRenumber
- useMarkdownTaskListToggler
- HostedLinksProvider
- useHostedLinkRegister
- useHostedLinkAction
- hostedLinkHandleFromHref
- RenderPlainText
- isTextChatCommand
- RenderWordsDiff
- useWordsDifference
- useHeightCollapser
- useAutoBlocksMemoSemiStable
- OverlayButton
- BlocksContainer
- BlocksTextarea
- ToggleExpansionButton
- remarkTableCellBreaks
- remarkUserText

## Dependencies
- react
- @mui/joy
- @mui/icons-material
- prismjs
- zustand
- @tanstack/react-query
- browser-fs-access
- react-timeago
- react-markdown
- remark-gfm
- remark-math
- remark-mark-highlight
- rehype-katex
- unist-util-visit
- unified
- csv-stringify/browser/esm/sync
- diff
- ~/common/app.theme
- ~/common/stores/store-ux-labs
- ~/common/stores/chat/chat.message
- ~/common/render-decay/RenderDecayZone
- ~/common/util/clipboardUtils
- ~/common/util/downloadUtils
- ~/common/util/idUtils
- ~/common/util/textUtils
- ~/common/util/hooks/useShallowObject
- ~/common/components/TooltipOutlined

## AI touchpoints [AI]
- `src/modules/blocks/image/RenderImageRefDBlob.tsx`
- `src/modules/blocks/image/RenderImageURL.tsx`
- `src/modules/blocks/markdown/CustomARenderer.tsx`
- `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx`
- `src/modules/blocks/markdown/HostedLinksContext.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`
- `src/modules/blocks/AutoBlocksRenderer.tsx`
- `src/modules/blocks/markdown/tableBreaks.remark.ts`
- `src/modules/blocks/markdown/userText.remark.ts`

## Open questions
- The test file src/modules/blocks/blocks.textparser.test.ts notes open edge cases regarding asymmetric parsing for code block closers followed by text (#983) and mid-line fences with glued info strings (#1280).
