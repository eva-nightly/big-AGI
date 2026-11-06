# Module: src/modules/blocks [AI]

(part 1 of 2) Renders and enhances interactive chat content blocks, including syntax-highlighted code (Prism.js), sandboxed HTML iframes, diagrams (PlantUML, Mermaid), Chart.js graphs, SVG visuals, image attachments, and live file patching workflows. (part 2 of 2) Provides the modular block-rendering pipeline for chat messages and documents in big-AGI, transforming streaming and static text into structured markdown, code blocks, tables, task lists, diffs, plain text, and custom sandbox-hosted links.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/blocks/code/RenderCode.tsx`: Core component rendering code blocks with lazy Prism.js highlighting, language detection, and action overlays.
- `src/modules/blocks/code/code-highlight/codePrism.ts`: Code language inference heuristics and Prism syntax highlighting execution.
- `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`: Renders interactive Chart.js visualizations from JSON definitions with AI code fixup support.
- `src/modules/blocks/code/code-renderers/RenderCodeHtmlIFrame.tsx`: Renders interactive HTML documents inside an isolated sandbox iframe with bootstrap local/session storage shims.
- `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx`: Dynamically loads Mermaid.js to render sequence and flow diagrams with AI code fixup capabilities.
- `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`: Encodes and queries PlantUML server rendering, providing SVG output, error extraction, and AI code fixup.
- `src/modules/blocks/enhanced-code/EnhancedRenderCode.tsx`: Wraps code blocks with collapsible headers, metadata tooltips, LiveFile patching controls, and diff actions.
- `src/modules/blocks/enhanced-code/livefile-patch/useLiveFilePatch.tsx`: Manages browser File System Access API linking to apply generated code changes directly to local files.
- `src/modules/blocks/image/RenderImageRefDBlob.tsx`: Renders stored database blob image assets with metadata overlays and on-demand AI regeneration.
- `src/modules/blocks/AutoBlocksRenderer.tsx`: Top-level orchestrator that parses raw text into typed blocks and renders code, markdown, html, and diff segments with support for streaming decay, height collapsing, and role-based formatting.
- `src/modules/blocks/markdown/RenderMarkdown.tsx`: Markdown entrypoint component that toggles between lazy-loaded full ReactMarkdown rendering and lightweight streaming rendering (RenderMarkdownLite).
- `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx`: Configures ReactMarkdown with custom plugins (GFM, KaTeX, user text formatting, table breaks, mark highlighting) and sanitizes/preprocesses LaTeX and sandbox URIs.
- `src/modules/blocks/markdown/RenderMarkdownLite.tsx`: Fast incremental line scanner that mimics markdown layout without heavy parsing during active LLM token streaming.
- `src/modules/blocks/markdown/CustomARenderer.tsx`: Custom markdown anchor tag renderer handling sandbox URI actions, favicons for bare links, secure link previews, and blank scheme safety.
- `src/modules/blocks/markdown/HostedLinksContext.tsx`: Message-scoped context that bridges sandbox links (such as OpenAI code interpreter files) to file attachment actions.
- `src/modules/blocks/markdown/CustomTableRenderer.tsx`: Markdown table renderer providing on-demand CSV export and markdown table copying from DOM content.
- `src/modules/blocks/markdown/CustomTaskListRenderer.tsx`: Rehype plugin and Joy UI Checkbox renderer supporting interactive task list toggling directly in markdown content.
- `src/modules/blocks/plaintext/RenderPlainText.tsx`: Renders plain text and highlights recognized slash commands as styled chips.
- `src/modules/blocks/wordsdiff/RenderWordsDiff.tsx`: Renders visual word-level additions and deletions with debounced diff calculations.
- `src/modules/blocks/blocks.hooks.ts`: Contains hooks for height collapsing (useHeightCollapser) and semi-stable block caching during text streaming (useAutoBlocksMemoSemiStable).
- `src/modules/blocks/blocks.types.ts`: Type definitions for the parsed block structures (md-bk, code-bk, dang-html-bk, img-url-bk, txt-diffs-bk).

## Public interface
- RenderCode(props: RenderCodeBaseProps): React.JSX.Element
- EnhancedRenderCode(props: ...): React.JSX.Element
- RenderDangerousHtml(props: { html: string, sx?: SxProps }): React.JSX.Element
- RenderCodeHtmlIFrame(props: { htmlCode: string, isFullscreen?: boolean }): React.JSX.Element
- RenderCodePlantUML: React.ForwardRefExoticComponent<...>
- RenderCodeMermaid: React.ForwardRefExoticComponent<...>
- RenderCodeChartJS: React.ForwardRefExoticComponent<...>
- RenderCodeSVG: React.ForwardRefExoticComponent<...>
- RenderCodeMarkdown(props: { mdCode: string }): React.JSX.Element
- RenderImageRefDBlob(props: ...): React.JSX.Element
- RenderImageURL(props: ...): React.JSX.Element
- inferCodeLanguage(blockTitle: string, code: string): string | null
- highlightCode(inferredCodeLanguage: string | null, blockCode: string, addLineNumbers: boolean): string
- heuristicIsSVGCode(trimmedCode: string): boolean
- heuristicIsCodePlantUML(code: string): boolean
- heuristicIsBlockPureHTML(text: string): boolean
- heuristicAllMarkdownImageReferences(fullText: string): RenderBlockInputs | null
- ERCDiffContextProvider(props: ...): React.JSX.Element
- useERCDiffContext(): (DiffContextActions & DiffContextData) | undefined
- getCodeCollapseManager(): CodeCollapseManager
- AutoBlocksRenderer
- AutoBlocksCodeRenderVariant
- AutoBlocksHtmlRenderVariant
- RenderMarkdown
- RenderMarkdownMemo
- RenderMarkdownLite
- CustomMarkdownRenderer
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
- ScaledTextBlockRenderer
- ToggleExpansionButton
- BlocksContainer
- BlocksTextarea
- OverlayButton
- useHeightCollapser
- useAutoBlocksMemoSemiStable

## Dependencies
- react
- @mui/joy
- @mui/icons-material
- @tanstack/react-query
- zustand
- prismjs
- browser-fs-access
- react-timeago
- react-markdown
- rehype-katex
- remark-gfm
- remark-math
- remark-mark-highlight
- csv-stringify
- diff
- unist-util-visit
- ~/common/app.theme
- ~/common/render-decay/RenderDecayZone
- ~/common/stores/chat/chat.message
- ~/common/stores/store-ux-labs
- ~/common/util/clipboardUtils
- ~/common/util/downloadUtils
- ~/common/util/idUtils
- ~/common/util/textUtils
- ~/common/util/hooks/useShallowObject

## AI touchpoints [AI]
- `src/modules/blocks/image/RenderImageRefDBlob.tsx`
- `src/modules/blocks/image/RenderImageURL.tsx`
- `src/modules/blocks/markdown/CustomARenderer.tsx`
- `src/modules/blocks/markdown/CustomMarkdownRenderer.tsx`
- `src/modules/blocks/markdown/HostedLinksContext.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodeMermaid.tsx`
- `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`
- `src/modules/blocks/markdown/RenderMarkdownLite.tsx`
- `src/modules/blocks/markdown/tableBreaks.remark.ts`
- `src/modules/blocks/AutoBlocksRenderer.tsx`

## Open questions
- The truncated implementation of AutoBlocksRenderer and blocks.textparser was not fully visible in the module files, leaving edge-case block splitting details reliant on the test suite specifications in blocks.textparser.test.ts.
