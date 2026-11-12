# Design system playbook

Big-AGI (per @pages/_app::Big_AGI_App) is a web application whose UI is organized into apps: a chat app (@src/apps/chat/AppChat::AppChat), a call app with contacts and a telephone screen (@src/apps/call/AppCall::AppCall), and a beam app (@src/apps/beam/AppBeam::AppBeam). Alongside these it has link-handling pages for an OpenRouter callback and a share target, a closed page, and a set of developer pages for debugging and inspection (doctor, heal, logs, storage). The token set reflects this: app layout tokens for nav, panel and drawer widths and overlay opacity (src/common/styles/app.styles.css), effect tokens for border width, radius, rotation and mark highlighting (src/common/styles/agi.effects.css), a GitHub-markdown palette including prettylights syntax colors for rendered markdown and code (src/common/styles/GithubMarkdown.css), a line-number padding token for code blocks (src/modules/blocks/code/RenderCode.css), progress-bar tokens (src/common/styles/NProgress.css), and a separate small palette and typography pair used only by the static dev inspect pages (public/dev/inspect/_inspect.css).

## In one screen

- **Theme lives in:** plain CSS custom properties.
- **Tokens:** 82 in 9 group(s), folded from 135 declaration(s).
- **Themes:** light and dark.
- **Spent:** 82 token(s) are used somewhere; 0 are declared and never used.
- **Components:** 641 declared, 0 primitives, 46 with variants (186 variant value(s)).
- **Disagreements:** 624 instance(s) in 3 kind(s). See the last section.

## Where the design is declared

| file | what it declares |
| --- | --- |
| `public/dev/inspect/_inspect.css`:5 | 20 custom properties declared under `:root`. |
| `src/common/styles/GithubMarkdown.css`:5 | 49 custom properties declared under `[data-joy-color-scheme="dark"] .markdown-body`. |
| `src/common/styles/GithubMarkdown.css`:58 | 49 custom properties declared under `[data-joy-color-scheme="light"] .markdown-body`. |
| `src/common/styles/agi.effects.css`:20 | 2 custom properties declared under `.agi-border-4`. |
| `src/common/styles/agi.effects.css`:68 | 1 custom property declared under `[data-joy-color-scheme="dark"] .agi-highlight`. |
| `src/common/styles/agi.effects.css`:72 | 1 custom property declared under `[data-joy-color-scheme="light"] .agi-highlight`. |
| `src/common/styles/app.styles.css`:1 | 8 custom properties declared under `:root`. |
| `src/common/styles/app.styles.css`:13 | 8 custom properties declared under `:root`. |

## Palette

Colour is written in hex (66 token(s)), hsla (1 token(s)), rgba (1 token(s)). 0 colour token(s) have zero chroma (pure greys) and 1 carry a hue: `--color-border-muted`. 50 colour token(s) are re-declared for dark mode; 22 keep their light value.

### Surfaces (13)

#### bg

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--bg` |  | `#F0F4F8` | (same) | 10 | `public/dev/inspect/_inspect.css`:6 |
| `--color-prettylights-syntax-carriage-return-bg` |  | `#cf222e` | `#b62324` | 1 | `src/common/styles/GithubMarkdown.css`:72 |
| `--color-prettylights-syntax-invalid-illegal-bg` |  | `#82071e` | `#8e1519` | 1 | `src/common/styles/GithubMarkdown.css`:70 |
| `--color-prettylights-syntax-markup-changed-bg` |  | `#ffd8b5` | `#5a1e02` | 1 | `src/common/styles/GithubMarkdown.css`:83 |
| `--color-prettylights-syntax-markup-deleted-bg` |  | `#ffebe9` | `#67060c` | 1 | `src/common/styles/GithubMarkdown.css`:79 |
| `--color-prettylights-syntax-markup-ignored-bg` |  | `#0550ae` | `#1158c7` | 1 | `src/common/styles/GithubMarkdown.css`:85 |
| `--color-prettylights-syntax-markup-inserted-bg` |  | `#dafbe1` | `#033a16` | 1 | `src/common/styles/GithubMarkdown.css`:81 |

#### muted

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--color-fg-muted` |  | `#656d76` | `#848d97` | 3 | `src/common/styles/GithubMarkdown.css`:91 |
| `--color-neutral-muted` |  | `rgba(175,184,193,0.2)` | `rgba(110,118,129,0.4)` | 4 | `src/common/styles/GithubMarkdown.css`:97 |

#### panel

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--AGI-Desktop-Panel-width` |  | `round(clamp(260px, 18vw, 320px), 1px)` | (same) | 2 | `src/common/styles/app.styles.css`:17 |
| `--AGI-Mobile-Panel-width` |  | `320px` | (same) | 2 | `src/common/styles/app.styles.css`:7 |

#### surface

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--surface` |  | `#FBFCFE` | (same) | 8 | `public/dev/inspect/_inspect.css`:7 |
| `--surface-2` |  | `#DDE7EE` | (same) | 3 | `public/dev/inspect/_inspect.css`:8 |

### Text (13)

#### fg

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--color-attention-fg` |  | `#9a6700` | `#d29922` | 1 | `src/common/styles/GithubMarkdown.css`:102 |
| `--color-done-fg` |  | `#8250df` | `#a371f7` | 1 | `src/common/styles/GithubMarkdown.css`:107 |
| `--color-fg-default` |  | `#1F2328` | `#e6edf3` | 7 | `src/common/styles/GithubMarkdown.css`:90 |
| `--color-fg-subtle` |  | `#6e7781` | `#6e7681` | 1 | `src/common/styles/GithubMarkdown.css`:92 |

#### text

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--color-prettylights-syntax-carriage-return-text` |  | `#f6f8fa` | `#f0f6fc` | 1 | `src/common/styles/GithubMarkdown.css`:71 |
| `--color-prettylights-syntax-invalid-illegal-text` |  | `#f6f8fa` | `#f0f6fc` | 1 | `src/common/styles/GithubMarkdown.css`:69 |
| `--color-prettylights-syntax-markup-changed-text` |  | `#953800` | `#ffdfb6` | 1 | `src/common/styles/GithubMarkdown.css`:82 |
| `--color-prettylights-syntax-markup-deleted-text` |  | `#82071e` | `#ffdcd7` | 1 | `src/common/styles/GithubMarkdown.css`:78 |
| `--color-prettylights-syntax-markup-ignored-text` |  | `#eaeef2` | `#c9d1d9` | 1 | `src/common/styles/GithubMarkdown.css`:84 |
| `--color-prettylights-syntax-markup-inserted-text` |  | `#116329` | `#aff5b4` | 1 | `src/common/styles/GithubMarkdown.css`:80 |
| `--text` |  | `#171A1C` | (same) | 6 | `public/dev/inspect/_inspect.css`:11 |
| `--text-secondary` |  | `#555E68` | (same) | 13 | `public/dev/inspect/_inspect.css`:12 |
| `--text-tertiary` |  | `#636B74` | (same) | 20 | `public/dev/inspect/_inspect.css`:13 |

### Brand (5)

#### accent

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--color-accent-emphasis` |  | `#0969da` | `#1f6feb` | 2 | `src/common/styles/GithubMarkdown.css`:99 |
| `--color-accent-fg` |  | `#0969da` | `#2f81f7` | 4 | `src/common/styles/GithubMarkdown.css`:98 |

#### link

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--color-prettylights-syntax-constant-other-reference-link` |  | `#0a3069` | `#a5d6ff` | 1 | `src/common/styles/GithubMarkdown.css`:89 |

#### primary

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--primary` |  | `#0B6BCB` | (same) | 5 | `public/dev/inspect/_inspect.css`:14 |
| `--primary-solid` |  | `#185EA5` | (same) | 2 | `public/dev/inspect/_inspect.css`:15 |

### Status (7)

#### danger

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--color-danger-emphasis` |  | `#cf222e` | `#da3633` | 1 | `src/common/styles/GithubMarkdown.css`:106 |
| `--color-danger-fg` |  | `#d1242f` | `#f85149` | 3 | `src/common/styles/GithubMarkdown.css`:105 |
| `--danger` |  | `#C41C1C` | (same) | 15 | `public/dev/inspect/_inspect.css`:18 |
| `--danger-bg` |  | `#FCE4E4` | (same) | 7 | `public/dev/inspect/_inspect.css`:18 |

#### info

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--info` |  | `#0B6BCB` | (same) | 4 | `public/dev/inspect/_inspect.css`:19 |

#### success

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--color-success-emphasis` |  | `#1f883d` | `#238636` | 1 | `src/common/styles/GithubMarkdown.css`:101 |
| `--color-success-fg` |  | `#1a7f37` | `#3fb950` | 1 | `src/common/styles/GithubMarkdown.css`:100 |

### Controls (border, input, ring) (5)

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--border` |  | `#CDD7E1` | (same) | 13 | `public/dev/inspect/_inspect.css`:9 |
| `--border-soft` |  | `#E3E9EF` | (same) | 8 | `public/dev/inspect/_inspect.css`:10 |
| `--border-width` |  | `4px` | (same) | 2 | `src/common/styles/agi.effects.css`:22 |
| `--color-border-default` |  | `#d0d7de` | `#30363d` | 6 | `src/common/styles/GithubMarkdown.css`:95 |
| `--color-border-muted` |  | `hsla(210,18%,87%,1)` | `#21262d` | 4 | `src/common/styles/GithubMarkdown.css`:96 |

### Typography (2)

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--mono` |  | `'JetBrains Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace` | (same) | 28 | `public/dev/inspect/_inspect.css`:21 |
| `--sans` |  | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif` | (same) | 5 | `public/dev/inspect/_inspect.css`:22 |

### Unclassified (31)

| token | utility name | light | dark | uses | defined at |
| --- | --- | --- | --- | --- | --- |
| `--agi-color-mark-highlight-channel` |  | `255 255 0` | `118 108 0` | 5 | `src/common/styles/agi.effects.css`:73 |
| `--AGI-overlay-start-opacity` |  | `0` | (same) | 1 | `src/common/styles/app.styles.css`:8 |
| `--color-attention-emphasis` |  | `#9a6700` | `#9e6a03` | 1 | `src/common/styles/GithubMarkdown.css`:103 |
| `--color-attention-subtle` |  | `#fff8c5` | `rgba(187,128,9,0.15)` | 1 | `src/common/styles/GithubMarkdown.css`:104 |
| `--bar` |  | `#D6E3F0` | (same) | 3 | `public/dev/inspect/_inspect.css`:20 |
| `--bar-fill` |  | `#6BA8E8` | (same) | 3 | `public/dev/inspect/_inspect.css`:20 |
| `--barColor` |  | `#32383E` | (same) | 3 | `src/common/styles/NProgress.css`:8 |
| `--color-canvas-default` |  | `#ffffff` | `#0d1117` | 4 | `src/common/styles/GithubMarkdown.css`:93 |
| `--color-canvas-subtle` |  | `#f6f8fa` | `#161b22` | 4 | `src/common/styles/GithubMarkdown.css`:94 |
| `--color-done-emphasis` |  | `#8250df` | `#8957e5` | 1 | `src/common/styles/GithubMarkdown.css`:108 |
| `--ok` |  | `#1F7A1F` | (same) | 4 | `public/dev/inspect/_inspect.css`:16 |
| `--color-prettylights-syntax-brackethighlighter-angle` |  | `#57606a` | `#8b949e` | 1 | `src/common/styles/GithubMarkdown.css`:87 |
| `--color-prettylights-syntax-brackethighlighter-unmatched` |  | `#82071e` | `#f85149` | 1 | `src/common/styles/GithubMarkdown.css`:68 |
| `--color-prettylights-syntax-comment` |  | `#57606a` | `#8b949e` | 1 | `src/common/styles/GithubMarkdown.css`:60 |
| `--color-prettylights-syntax-constant` |  | `#0550ae` | `#79c0ff` | 1 | `src/common/styles/GithubMarkdown.css`:61 |
| `--color-prettylights-syntax-entity` |  | `#6639ba` | `#d2a8ff` | 1 | `src/common/styles/GithubMarkdown.css`:62 |
| `--color-prettylights-syntax-entity-tag` |  | `#116329` | `#7ee787` | 1 | `src/common/styles/GithubMarkdown.css`:64 |
| `--color-prettylights-syntax-keyword` |  | `#cf222e` | `#ff7b72` | 1 | `src/common/styles/GithubMarkdown.css`:65 |
| `--color-prettylights-syntax-markup-bold` |  | `#24292f` | `#c9d1d9` | 1 | `src/common/styles/GithubMarkdown.css`:77 |
| `--color-prettylights-syntax-markup-heading` |  | `#0550ae` | `#1f6feb` | 1 | `src/common/styles/GithubMarkdown.css`:75 |
| `--color-prettylights-syntax-markup-italic` |  | `#24292f` | `#c9d1d9` | 1 | `src/common/styles/GithubMarkdown.css`:76 |
| `--color-prettylights-syntax-markup-list` |  | `#3b2300` | `#f2cc60` | 1 | `src/common/styles/GithubMarkdown.css`:74 |
| `--color-prettylights-syntax-meta-diff-range` |  | `#8250df` | `#d2a8ff` | 1 | `src/common/styles/GithubMarkdown.css`:86 |
| `--color-prettylights-syntax-storage-modifier-import` |  | `#24292f` | `#c9d1d9` | 1 | `src/common/styles/GithubMarkdown.css`:63 |
| `--color-prettylights-syntax-string` |  | `#0a3069` | `#a5d6ff` | 1 | `src/common/styles/GithubMarkdown.css`:66 |
| `--color-prettylights-syntax-string-regexp` |  | `#116329` | `#7ee787` | 1 | `src/common/styles/GithubMarkdown.css`:73 |
| `--color-prettylights-syntax-sublimelinter-gutter-mark` |  | `#8c959f` | `#484f58` | 1 | `src/common/styles/GithubMarkdown.css`:88 |
| `--color-prettylights-syntax-variable` |  | `#953800` | `#ffa657` | 1 | `src/common/styles/GithubMarkdown.css`:67 |
| `--rotate` |  | `360deg` | (same) | 3 | `src/common/styles/agi.effects.css`:13 |
| `--warn` |  | `#9A6700` | (same) | 4 | `public/dev/inspect/_inspect.css`:17 |
| `--warn-bd` |  | `#C99A2E` | (same) | 4 | `public/dev/inspect/_inspect.css`:17 |

## Scales

### Radius

| step | expression | computed | uses | defined at |
| --- | --- | --- | --- | --- |
| `--border-radius` | `2px` | 2px | 2 | `src/common/styles/agi.effects.css`:23 |

### Spacing

| step | expression | computed | uses | defined at |
| --- | --- | --- | --- | --- |
| `--barHeight` | `4px` | 4px | 1 | `src/common/styles/NProgress.css`:9 |
| `--AGI-Nav-width` | `52px` | 52px | 3 | `src/common/styles/app.styles.css`:2 |
| `--ln-padding` | `4.5em` | 72px | 3 | `src/modules/blocks/code/RenderCode.css`:5 |
| `--AGI-Mobile-Drawer-width` | `320px` | 320px | 2 | `src/common/styles/app.styles.css`:6 |
| `--AGI-Desktop-Drawer-width` | `round(clamp(260px, 18vw, 320px), 1px)` |  | 2 | `src/common/styles/app.styles.css`:15 |

### Typography

| family | declared at |
| --- | --- |
| `inherit` | `src/common/logic/sherpa.css`:103 |
| `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace` | `src/common/styles/CodePrism.css`:12 |
| `-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"` | `src/common/styles/GithubMarkdown.css`:122 |
| `monospace` | `src/common/styles/GithubMarkdown.css`:228 |
| `ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace` | `src/common/styles/GithubMarkdown.css`:462 |
| `"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif` | `src/common/styles/GithubMarkdown.css`:1099 |

| step | size | weight | declared at |
| --- | --- | --- | --- |
| `Heading 1` | `2em` | 600 | `src/common/styles/GithubMarkdown.css`:182 |
| `Heading 2` | `1.5em` | 600 | `src/common/styles/GithubMarkdown.css`:394 |
| `Heading 3` | `1.25em` | 600 | `src/common/styles/GithubMarkdown.css`:401 |
| `Heading 4` | `1em` | 600 | `src/common/styles/GithubMarkdown.css`:406 |
| `Heading 2` | `14.5px` | 700 | `public/dev/inspect/_inspect.css`:64 |
| `Heading 5` | `.875em` | 600 | `src/common/styles/GithubMarkdown.css`:411 |
| `Heading 6` | `.85em` | 600 | `src/common/styles/GithubMarkdown.css`:416 |
| `Heading 3` | `12px` | 700 | `public/dev/inspect/_inspect.css`:195 |

## States the UI actually targets

| state | class occurrences |
| --- | --- |
| `focus` | 3 |
| `first-child` | 2 |
| `invalid` | 1 |
| `print` | 1 |

## Composition

No primitives directory was found, so every component is an application component: there is an inventory here but no shared kit to build from.

## Where the app disagrees with itself

### 33 colour tokens share only 13 distinct value(s) in light mode

72 colour token(s) resolve to 52 distinct light value(s). Where two names always carry the same value, a reader cannot tell which one a screen should use:
- #cf222e: --color-prettylights-syntax-carriage-return-bg, --color-danger-emphasis, --color-prettylights-syntax-keyword
- #82071e: --color-prettylights-syntax-invalid-illegal-bg, --color-prettylights-syntax-markup-deleted-text, --color-prettylights-syntax-brackethighlighter-unmatched
- #0550ae: --color-prettylights-syntax-markup-ignored-bg, --color-prettylights-syntax-constant, --color-prettylights-syntax-markup-heading
- #9a6700: --color-attention-fg, --color-attention-emphasis
- #8250df: --color-done-fg, --color-done-emphasis, --color-prettylights-syntax-meta-diff-range
- #f6f8fa: --color-prettylights-syntax-carriage-return-text, --color-prettylights-syntax-invalid-illegal-text, --color-canvas-subtle
- #953800: --color-prettylights-syntax-markup-changed-text, --color-prettylights-syntax-variable
- #116329: --color-prettylights-syntax-markup-inserted-text, --color-prettylights-syntax-entity-tag, --color-prettylights-syntax-string-regexp
- #0969da: --color-accent-emphasis, --color-accent-fg
- #0a3069: --color-prettylights-syntax-constant-other-reference-link, --color-prettylights-syntax-string
- #0B6BCB: --primary, --info
- #57606a: --color-prettylights-syntax-brackethighlighter-angle, --color-prettylights-syntax-comment
- #24292f: --color-prettylights-syntax-markup-bold, --color-prettylights-syntax-markup-italic, --color-prettylights-syntax-storage-modifier-import

- `src/common/styles/GithubMarkdown.css`:72: `--color-prettylights-syntax-carriage-return-bg: #cf222e`
- `src/common/styles/GithubMarkdown.css`:106: `--color-danger-emphasis: #cf222e`
- `src/common/styles/GithubMarkdown.css`:65: `--color-prettylights-syntax-keyword: #cf222e`
- `src/common/styles/GithubMarkdown.css`:70: `--color-prettylights-syntax-invalid-illegal-bg: #82071e`
- `src/common/styles/GithubMarkdown.css`:78: `--color-prettylights-syntax-markup-deleted-text: #82071e`
- `src/common/styles/GithubMarkdown.css`:68: `--color-prettylights-syntax-brackethighlighter-unmatched: #82071e`

### 16 colour token(s) have no dark value

They keep their light value in dark mode: --bg, --AGI-Desktop-Panel-width, --AGI-Mobile-Panel-width, --surface, --surface-2, --text, --text-secondary, --text-tertiary, --primary, --primary-solid, --danger, --danger-bg, --info, --border, --border-soft, --border-width.

- `public/dev/inspect/_inspect.css`:6: `--bg: #F0F4F8`
- `src/common/styles/app.styles.css`:17: `--AGI-Desktop-Panel-width: round(clamp(260px, 18vw, 320px), 1px)`
- `src/common/styles/app.styles.css`:7: `--AGI-Mobile-Panel-width: 320px`
- `public/dev/inspect/_inspect.css`:7: `--surface: #FBFCFE`
- `public/dev/inspect/_inspect.css`:8: `--surface-2: #DDE7EE`
- `public/dev/inspect/_inspect.css`:11: `--text: #171A1C`

### 575 hardcoded colour literal(s) bypass the tokens

Written into a colour property or an arbitrary class value; 29 duplicate a token that already exists.

- `public/dev/inspect/_inspect.css`:52: `button.primary { background: var(--primary-solid); border-color: var(--primary-solid); color: #fff; }`
- `src/common/logic/sherpa.css`:80: `color: var(--joy-palette-danger-softColor, #800);`
- `src/common/logic/sherpa.css`:99: `color: var(--joy-palette-neutral-solidColor, #fff);`
- `src/common/logic/sherpa.css`:101: `background: var(--joy-palette-neutral-solidBg, #000);`
- `src/common/logic/sherpa.css`:135: `color: #6e7c91;`
- `src/common/styles/CodePrism.css`:34: `/*	background: #b3d4fc;*/`
- `src/common/styles/CodePrism.css`:40: `/*	background: #b3d4fc;*/`
- `src/common/styles/CodePrism.css`:59: `/*	background: #f5f2f0;*/`
- `src/common/styles/CodePrism.css`:77: `color: #999;`
- `src/common/styles/CodePrism.css`:91: `color: #905;`

### Every hardcoded colour, by file

| file | literal | duplicates |
| --- | --- | --- |
| `public/dev/inspect/_inspect.css`:52 | `#fff` | `--color-canvas-default` |
| `src/common/logic/sherpa.css`:80 | `#800` |  |
| `src/common/logic/sherpa.css`:99 | `#fff` | `--color-canvas-default` |
| `src/common/logic/sherpa.css`:101 | `#000` |  |
| `src/common/logic/sherpa.css`:135 | `#6e7c91` |  |
| `src/common/styles/CodePrism.css`:34 | `#b3d4fc` |  |
| `src/common/styles/CodePrism.css`:40 | `#b3d4fc` |  |
| `src/common/styles/CodePrism.css`:59 | `#f5f2f0` |  |
| `src/common/styles/CodePrism.css`:77 | `#999` |  |
| `src/common/styles/CodePrism.css`:91 | `#905` |  |
| `src/common/styles/CodePrism.css`:100 | `#690` |  |
| `src/common/styles/CodePrism.css`:108 | `#9a6e3a` |  |
| `src/common/styles/CodePrism.css`:116 | `#07a` |  |
| `src/common/styles/CodePrism.css`:121 | `#DD4A68` |  |
| `src/common/styles/CodePrism.css`:127 | `#e90` |  |
| `src/common/styles/agi.effects.css`:85 | `rgba(255,255,132,0)` |  |
| `src/common/styles/agi.effects.css`:85 | `rgba(255,255,132,1)` |  |
| `src/common/styles/agi.effects.css`:97 | `#5ddcff` |  |
| `src/common/styles/agi.effects.css`:97 | `#3c67e3` |  |
| `src/common/styles/agi.effects.css`:97 | `#4e00c2` |  |
| `src/common/styles/app.styles.css`:63 | `rgba(var(--joy-palette-neutral-darkChannel, 11 13 14)` |  |
| `public/closed.html`:11 | `#fff` | `--color-canvas-default` |
| `public/closed.html`:11 | `#333` |  |
| `public/closed.html`:13 | `#06c` |  |
| `public/closed.html`:17 | `#111` |  |
| `public/closed.html`:17 | `#bbb` |  |
| `public/closed.html`:17 | `#09f` |  |
| `public/closed.html`:18 | `#999` |  |
| `public/vendor/sheetjs/xlsx-0.20.3.mini.min.js`:7 | `#BEFF82` |  |
| `public/vendor/sheetjs/xlsx-0.20.3.mini.min.js`:7 | `#ECFAD4` |  |
| `public/vendor/sheetjs/xlsx-0.20.3.mini.min.js`:7 | `#edeaa1` |  |
| `public/workers/pdf.worker.min.mjs`:29 | `#000000` |  |
| `public/workers/pdf.worker.min.mjs`:29 | `#000000` |  |
| `public/workers/pdf.worker.min.mjs`:29 | `#000000` |  |
| `public/workers/pdf.worker.min.mjs`:29 | `#FFFFFF` | `--color-canvas-default` |
| `public/workers/pdf.worker.min.mjs`:29 | `#000000` |  |
| `public/workers/pdf.worker.min.mjs`:29 | `#FFFFFF` | `--color-canvas-default` |
| `public/workers/pdf.worker.min.mjs`:29 | `#000000` |  |
| `public/workers/pdf.worker.min.mjs`:29 | `#FFFFFF` | `--color-canvas-default` |
| `public/workers/pdf.worker.min.mjs`:29 | `#000000` |  |
| `public/workers/pdf.worker.min.mjs`:29 | `#FFFFFF` | `--color-canvas-default` |
| `src/apps/chat/AppChat.tsx`:66 | `rgba(var(--joy-palette-neutral-mainChannel, 99 107 116)` |  |
| `src/apps/chat/AppChat.tsx`:81 | `rgba(var(--joy-palette-neutral-mainChannel, 99 107 116)` |  |
| `src/apps/chat/components/ChatPane.tsx`:155 | `rgba(0,0,0,0.03)` |  |
| `src/apps/chat/components/ChatPane.tsx`:155 | `rgba(0,0,0,0.03)` |  |
| `src/apps/chat/components/PaneTitleOverlay.tsx`:43 | `rgba(0,0,0,0.1)` |  |
| `src/apps/chat/components/PaneTitleOverlay.tsx`:43 | `rgba(0,0,0,0.1)` |  |
| `src/apps/chat/components/StatusBar.tsx`:34 | `rgba(var(--joy-palette-neutral-mainChannel)` |  |
| `src/apps/chat/components/composer/buttons/ButtonBeam.tsx`:31 | `rgb(var(--joy-palette-primary-mainChannel)` |  |
| `src/apps/chat/components/composer/llmattachments/LLMAttachmentsPromptsButton.tsx`:21 | `rgb(var(--joy-palette-${AGI_SUGGESTIONS_COLOR}-darkChannel)` |  |
| `src/apps/chat/components/composer/llmattachments/MessageFragmentOrderControl.tsx`:63 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/chat/components/composer/textarea/ComposerTextAreaDrawActions.tsx`:17 | `rgb(var(--joy-palette-warning-darkChannel)` |  |
| `src/apps/chat/components/composer/tokens/TokenTooltip.tsx`:133 | `rgba(255,255,132,0)` |  |
| `src/apps/chat/components/composer/tokens/TokenTooltip.tsx`:133 | `rgba(255,255,132,1)` |  |
| `src/apps/chat/components/composer/tokens/TokenTooltip.tsx`:136 | `rgba(255,204,132,0)` |  |
| `src/apps/chat/components/composer/tokens/TokenTooltip.tsx`:136 | `rgba(255,204,132,1)` |  |
| `src/apps/chat/components/composer/useComposerAutoHide.tsx`:44 | `rgba(var(--joy-palette-neutral-mainChannel)` |  |
| `src/apps/chat/components/layout-drawer/ChatDrawerItem.tsx`:240 | `#9C27B022` |  |
| `src/apps/chat/components/layout-drawer/ChatDrawerItem.tsx`:241 | `#9C27B0` |  |
| `src/apps/chat/components/layout-drawer/ChatDrawerItem.tsx`:367 | `rgba(0,0,0,0.03)` |  |
| `src/apps/chat/components/layout-drawer/ChatDrawerItem.tsx`:367 | `rgba(0,0,0,0.03)` |  |
| `src/apps/chat/components/layout-drawer/ChatDrawerItem.tsx`:373 | `#9C27B0` |  |
| `src/apps/chat/components/message/ChatMessageBubble.tsx`:27 | `rgb(var(--joy-palette-neutral-darkChannel)` |  |
| `src/apps/chat/components/message/ChatMessageInfoPopup.tsx`:36 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/chat/components/message/fragments-attachment-doc/DocAttachmentFragmentButton.tsx`:159 | `rgb(var(--joy-palette-${unselColor}-darkChannel)` |  |
| `src/apps/chat/components/message/fragments-attachment-doc/livefile-sync/LiveFileControlButton.tsx`:25 | `rgb(var(--joy-palette-${BUTTON_COLOR}-darkChannel)` |  |
| `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx`:51 | `rgb(var(--joy-palette-neutral-lightChannel)` |  |
| `src/apps/chat/components/message/fragments-attachment-image/ImageAttachmentFragments.tsx`:353 | `rgb(var(--joy-palette-primary-darkChannel)` |  |
| `src/apps/chat/components/message/fragments-content/BlockPartToolInvocation.tsx`:161 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/chat/components/message/fragments-content/BlockPartToolResponse.tsx`:107 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/chat/components/message/fragments-content/HostedFileChip.tsx`:28 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/chat/components/message/fragments-void/BlockPartModelAnnotations.tsx`:53 | `rgb(var(--joy-palette-${COLOR}-lightChannel)` |  |
| `src/apps/chat/components/message/fragments-void/BlockPartModelAnnotations.tsx`:162 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/chat/components/message/fragments-void/BlockPartModelAux.tsx`:69 | `rgb(var(--joy-palette-${REASONING_COLOR}-lightChannel)` |  |
| `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder.tsx`:141 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/chat/components/persona-selector/PersonaSelector.tsx`:64 | `rgb(var(--joy-palette-${TILE_ACTIVE_COLOR}-darkChannel)` |  |
| `src/apps/draw/DrawCreate.tsx`:25 | `rgba(0, 0, 0, 0.2)` |  |
| `src/apps/draw/DrawGallery.tsx`:53 | `rgba(0, 0, 0, 0.1)` |  |
| `src/apps/draw/create/PromptComposer.tsx`:323 | `rgb(var(--joy-palette-primary-mainChannel)` |  |
| `src/apps/draw/create/PromptComposer.tsx`:346 | `rgb(var(--joy-palette-primary-mainChannel)` |  |
| `src/apps/draw/create/PromptComposer.tsx`:360 | `rgb(var(--joy-palette-warning-mainChannel)` |  |
| `src/apps/draw/create/PromptComposer.tsx`:374 | `rgb(var(--joy-palette-primary-mainChannel)` |  |
| `src/apps/draw/create/PromptComposer.tsx`:396 | `rgb(var(--joy-palette-primary-mainChannel)` |  |
| `src/apps/draw/create/PromptComposer.tsx`:400 | `rgb(var(--joy-palette-primary-mainChannel)` |  |
| `src/apps/news/AppNews.tsx`:236 | `rgb(var(--joy-palette-primary-mainChannel)` |  |
| `src/apps/personas/creator/FromYouTube.tsx`:148 | `#f00` |  |
| `src/apps/personas/creator/FromYouTube.tsx`:156 | `#f00` |  |
| `src/apps/settings-modal/SettingsContent.tsx`:78 | `rgba(0,0,0,0.15)` |  |
| `src/apps/tokens/AppTokens.tsx`:15 | `hsl(${hue}, 80%, 80%)` |  |
| `src/common/app.config.ts`:17 | `#32383E` | `--barColor` |
| `src/common/app.theme.ts`:43 | `#d4ff3a` |  |
| `src/common/app.theme.ts`:58 | `#f7fde2` |  |
| `src/common/app.theme.ts`:59 | `#eff9c7` |  |
| `src/common/app.theme.ts`:60 | `#e6f5a3` |  |
| `src/common/app.theme.ts`:61 | `#ddf175` |  |
| `src/common/app.theme.ts`:62 | `#d5ec31` |  |
| `src/common/app.theme.ts`:63 | `#c4db28` |  |
| `src/common/app.theme.ts`:64 | `#a7bd1e` |  |
| `src/common/app.theme.ts`:65 | `#667600` |  |
| `src/common/app.theme.ts`:66 | `#435000` |  |
| `src/common/app.theme.ts`:67 | `#242c03` |  |
| `src/common/app.theme.ts`:115 | `#000` |  |
| `src/common/app.theme.ts`:153 | `#24292c` |  |
| `src/common/app.theme.ts`:157 | `#060807` |  |
| `src/common/app.theme.ts`:166 | `#000` |  |
| `src/common/app.theme.ts`:183 | `rgba(var(--joy-palette-accent-mainChannel, 213 236 49)` |  |
| `src/common/app.theme.ts`:184 | `rgba(var(--joy-palette-accent-mainChannel, 213 236 49)` |  |
| `src/common/app.theme.ts`:230 | `#0288D1` |  |
| `src/common/components/DataStreamViz.tsx`:21 | `#CDD7E1` | `--border` |
| `src/common/components/DataStreamViz.tsx`:21 | `#9FA6AD` |  |
| `src/common/components/DataStreamViz.tsx`:21 | `#636B74` | `--text-tertiary` |
| `src/common/components/DataStreamViz.tsx`:21 | `#555E68` | `--text-secondary` |
| `src/common/components/DataStreamViz.tsx`:21 | `#32383E` | `--barColor` |
| `src/common/components/DataStreamViz.tsx`:25 | `#FF6B6B` |  |
| `src/common/components/DataStreamViz.tsx`:25 | `#4ECDC4` |  |
| `src/common/components/DataStreamViz.tsx`:25 | `#45B7D1` |  |
| `src/common/components/DataStreamViz.tsx`:114 | `#f0f0f0` |  |
| `src/common/components/DataStreamViz.tsx`:124 | `#e0e0e0` |  |
| `src/common/components/DataStreamViz.tsx`:124 | `#f0f0f0` |  |
| `src/common/components/ExplainerCarousel.tsx`:58 | `rgb(var(--joy-palette-${colorButtons}-mainChannel)` |  |
| `src/common/components/ExplainerCarousel.tsx`:225 | `rgb(var(--joy-palette-primary-darkChannel)` |  |
| `src/common/components/LiteVideoEmbed.tsx`:37 | `#f00` |  |
| `src/common/components/LiteVideoEmbed.tsx`:43 | `#00adef` |  |
| `src/common/components/LiteVideoEmbed.tsx`:180 | `#101010` |  |
| `src/common/components/LiteVideoEmbed.tsx`:181 | `#1d1d1d` |  |
| `src/common/components/LiteVideoEmbed.tsx`:181 | `#101010` |  |
| `src/common/components/LiteVideoEmbed.tsx`:184 | `#0B6BCB` | `--primary` |
| `src/common/components/LiteVideoEmbed.tsx`:223 | `rgba(0,0,0,0.65)` |  |
| `src/common/components/LiteVideoEmbed.tsx`:224 | `#fff` | `--color-canvas-default` |
| `src/common/components/LiteVideoEmbed.tsx`:227 | `rgba(0,0,0,0.5)` |  |
| `src/common/components/LiteVideoEmbed.tsx`:247 | `rgba(23, 23, 23, 0.8)` |  |
| `src/common/components/LiteVideoEmbed.tsx`:255 | `#fff` | `--color-canvas-default` |
| `src/common/components/StarIcons.tsx`:9 | `#fad857` |  |
| `src/common/components/StarIcons.tsx`:10 | `#f3c623` |  |
| `src/common/components/camera/CameraCaptureModal.tsx`:36 | `rgba(var(--joy-palette-neutral-darkChannel)` |  |
| `src/common/components/camera/CameraCaptureModal.tsx`:85 | `rgba(0,0,0,0.5)` |  |
| `src/common/components/camera/CameraCaptureModal.tsx`:108 | `rgb(var(--joy-palette-neutral-darkChannel)` |  |
| `src/common/components/camera/CameraCaptureModal.tsx`:433 | `#8888` |  |
| `src/common/components/diff/DiffViewer.tsx`:197 | `rgba(0, 0, 0, 0.2)` |  |
| `src/common/components/dnd-dt/GlobalDragOverlay.tsx`:22 | `rgba(var(--joy-palette-neutral-darkChannel)` |  |
| `src/common/components/icons/3rdparty/AuthGoogleIcon.tsx`:8 | `#EA4335` |  |
| `src/common/components/icons/3rdparty/AuthGoogleIcon.tsx`:9 | `#34A853` |  |
| `src/common/components/icons/3rdparty/AuthGoogleIcon.tsx`:10 | `#4A90E2` |  |
| `src/common/components/icons/3rdparty/AuthGoogleIcon.tsx`:11 | `#FBBC05` |  |
| `src/common/components/icons/big-agi/BigAgiSquircleIcon.tsx`:17 | `#000000` |  |
| `src/common/components/icons/big-agi/BigAgiSquircleIcon.tsx`:24 | `#000000` |  |
| `src/common/components/icons/vendors/ClaudeCrabIcon.tsx`:8 | `#F01D1D` |  |
| `src/common/components/icons/vendors/ClaudeCrabIcon.tsx`:9 | `#000000` |  |
| `src/common/components/icons/vendors/ClaudeCrabIcon.tsx`:10 | `#000000` |  |
| `src/common/components/modals/GoodModal.tsx`:12 | `rgba(var(--joy-palette-neutral-darkChannel, 11 13 14)` |  |
| `src/common/components/modals/GoodModal.tsx`:109 | `rgba(var(--joy-palette-${props.themedColor}-darkChannel)` |  |
| `src/common/components/modals/SherpaModal.tsx`:22 | `rgba(var(--joy-palette-${props.themedColor}-darkChannel)` |  |
| `src/common/layout/optima/bar/OptimaBarDropdown.tsx`:49 | `rgba(255 255 255 / 0.5)` | `--color-canvas-default` |
| `src/common/layout/optima/bar/OptimaBarDropdown.tsx`:134 | `rgba(0, 0, 0, 0.2)` |  |
| `src/common/layout/optima/drawer/DesktopDrawer.tsx`:44 | `rgba(var(--joy-palette-neutral-mainChannel, 99 107 116)` |  |
| `src/common/layout/optima/drawer/DesktopDrawer.tsx`:49 | `rgba(${theme.palette.neutral.darkChannel} / 0.12)` |  |
| `src/common/layout/optima/drawer/DesktopDrawer.tsx`:70 | `rgba(var(--joy-palette-primary-mainChannel)` |  |
| `src/common/layout/optima/panel/DesktopPanel.tsx`:48 | `rgba(var(--joy-palette-neutral-mainChannel, 99 107 116)` |  |
| `src/common/layout/optima/panel/DesktopPanel.tsx`:53 | `rgba(${theme.palette.neutral.darkChannel} / 0.12)` |  |
| `src/common/layout/optima/panel/DesktopPanel.tsx`:75 | `rgba(var(--joy-palette-neutral-darkChannel)` |  |
| `src/common/layout/optima/panel/OptimaPanelGroupedList.tsx`:58 | `rgba(var(--joy-palette-neutral-mainChannel)` |  |
| `src/common/livefile/livefile.theme.ts`:5 | `rgb(var(--joy-palette-neutral-lightChannel)` |  |
| `src/common/livefile/livefile.theme.ts`:9 | `rgb(var(--joy-palette-neutral-darkChannel)` |  |
| `src/common/providers/ProviderBackendCapabilities.tsx`:57 | `#fff` | `--color-canvas-default` |
| `src/common/providers/ProviderBackendCapabilities.tsx`:58 | `#000` |  |
| `src/common/providers/ProviderTheming.tsx`:27 | `#fff` | `--color-canvas-default` |
| `src/common/providers/single-tab/ProviderSingleTab.tsx`:81 | `rgba(0 0 0 / 0.05)` |  |
| `src/common/providers/single-tab/ProviderSingleTab.tsx`:99 | `rgba(237 108 2 / 0.15)` |  |
| `src/common/providers/single-tab/ProviderSingleTab.tsx`:106 | `rgba(46 125 50 / 0.15)` |  |
| `src/common/providers/single-tab/ProviderSingleTab.tsx`:112 | `rgba(237 108 2 / 0.15)` |  |
| `src/common/stores/folders/store-chat-folders.ts`:160 | `#828282` |  |
| `src/common/stores/folders/store-chat-folders.ts`:161 | `#f22a85` |  |
| `src/common/stores/folders/store-chat-folders.ts`:162 | `#f13d41` |  |
| `src/common/stores/folders/store-chat-folders.ts`:163 | `#cb6701` |  |
| `src/common/stores/folders/store-chat-folders.ts`:164 | `#42940f` |  |
| `src/common/stores/folders/store-chat-folders.ts`:165 | `#068fa6` |  |
| `src/common/stores/folders/store-chat-folders.ts`:166 | `#407cf8` |  |
| `src/common/stores/folders/store-chat-folders.ts`:168 | `#626262` |  |
| `src/common/stores/folders/store-chat-folders.ts`:169 | `#b91e64` |  |
| `src/common/stores/folders/store-chat-folders.ts`:170 | `#b72e30` |  |
| `src/common/stores/folders/store-chat-folders.ts`:171 | `#9b4d01` |  |
| `src/common/stores/folders/store-chat-folders.ts`:172 | `#2f7007` |  |
| `src/common/stores/folders/store-chat-folders.ts`:173 | `#076c7e` |  |
| `src/common/stores/folders/store-chat-folders.ts`:174 | `#1c5dc8` |  |
| `src/common/stores/folders/store-chat-folders.ts`:176 | `#474747` |  |
| `src/common/stores/folders/store-chat-folders.ts`:177 | `#8c0f49` |  |
| `src/common/stores/folders/store-chat-folders.ts`:178 | `#891e20` |  |
| `src/common/stores/folders/store-chat-folders.ts`:179 | `#713804` |  |
| `src/common/stores/folders/store-chat-folders.ts`:180 | `#1f5200` |  |
| `src/common/stores/folders/store-chat-folders.ts`:181 | `#004f5d` |  |
| `src/common/stores/folders/store-chat-folders.ts`:182 | `#1d4294` |  |
| `src/common/util/animUtils.ts`:8 | `rgb(219, 255, 77)` |  |
| `src/common/util/animUtils.ts`:11 | `rgb(255, 255, 128)` |  |
| `src/common/util/animUtils.ts`:14 | `rgba(128, 255, 153)` |  |
| `src/common/util/animUtils.ts`:17 | `rgb(255, 204, 77)` |  |
| `src/common/util/animUtils.ts`:22 | `rgb(85, 140, 47)` |  |
| `src/common/util/animUtils.ts`:25 | `rgb(75, 115, 35)` |  |
| `src/common/util/animUtils.ts`:28 | `rgba(65, 155, 55)` |  |
| `src/common/util/animUtils.ts`:31 | `rgb(95, 130, 40)` |  |
| `src/common/util/animUtils.ts`:36 | `rgb(102, 0, 51)` |  |
| `src/common/util/animUtils.ts`:39 | `rgb(76, 0, 76)` |  |
| `src/common/util/animUtils.ts`:42 | `rgb(63, 0, 128)` |  |
| `src/common/util/animUtils.ts`:45 | `rgb(0, 0, 128)` |  |
| `src/common/util/animUtils.ts`:50 | `#636B74` | `--text-tertiary` |
| `src/common/util/animUtils.ts`:53 | `#12467B` |  |
| `src/common/util/animUtils.ts`:56 | `#0B6BCB` | `--primary` |
| `src/common/util/animUtils.ts`:59 | `#083e75` |  |
| `src/common/util/animUtils.ts`:64 | `rgb(255, 0, 0)` |  |
| `src/common/util/animUtils.ts`:67 | `rgb(204, 102, 0)` |  |
| `src/common/util/animUtils.ts`:70 | `rgb(128, 128, 0)` |  |
| `src/common/util/animUtils.ts`:73 | `rgb(77, 153, 0)` |  |
| `src/common/util/animUtils.ts`:76 | `rgb(0, 179, 0)` |  |
| `src/common/util/animUtils.ts`:79 | `rgb(0, 153, 82)` |  |
| `src/common/util/animUtils.ts`:82 | `rgb(0, 128, 128)` |  |
| `src/common/util/animUtils.ts`:85 | `rgb(0, 102, 204)` |  |
| `src/common/util/animUtils.ts`:88 | `rgb(0, 0, 255)` |  |
| `src/common/util/animUtils.ts`:91 | `rgb(127, 0, 255)` |  |
| `src/common/util/animUtils.ts`:94 | `rgb(153, 0, 153)` |  |
| `src/common/util/animUtils.ts`:97 | `rgb(204, 0, 102)` |  |
| `src/common/util/animUtils.ts`:102 | `rgb(183, 255, 0)` |  |
| `src/common/util/animUtils.ts`:105 | `rgb(255, 251, 0)` |  |
| `src/common/util/animUtils.ts`:108 | `rgba(0, 255, 81)` |  |
| `src/common/util/animUtils.ts`:111 | `rgb(255, 153, 0)` |  |
| `src/common/util/animUtils.ts`:120 | `rgb(102, 0, 51)` |  |
| `src/common/util/animUtils.ts`:123 | `rgb(76, 0, 76)` |  |
| `src/common/util/animUtils.ts`:126 | `rgb(63, 0, 128)` |  |
| `src/common/util/animUtils.ts`:129 | `rgb(0, 0, 128)` |  |
| `src/common/util/animUtils.ts`:134 | `rgba(0, 0, 0, 1)` |  |
| `src/common/util/animUtils.ts`:137 | `rgba(255, 255, 255, 0.9)` | `--color-canvas-default` |
| `src/common/util/animUtils.ts`:146 | `rgb(128, 0, 0)` |  |
| `src/common/util/animUtils.ts`:149 | `rgb(102, 51, 0)` |  |
| `src/common/util/animUtils.ts`:152 | `rgb(64, 64, 0)` |  |
| `src/common/util/animUtils.ts`:155 | `rgb(38, 76, 0)` |  |
| `src/common/util/animUtils.ts`:158 | `rgb(0, 89, 0)` |  |
| `src/common/util/animUtils.ts`:161 | `rgb(0, 76, 41)` |  |
| `src/common/util/animUtils.ts`:164 | `rgb(0, 64, 64)` |  |
| `src/common/util/animUtils.ts`:167 | `rgb(0, 51, 102)` |  |
| `src/common/util/animUtils.ts`:170 | `rgb(0, 0, 128)` |  |
| `src/common/util/animUtils.ts`:173 | `rgb(63, 0, 128)` |  |
| `src/common/util/animUtils.ts`:176 | `rgb(76, 0, 76)` |  |
| `src/common/util/animUtils.ts`:179 | `rgb(102, 0, 51)` |  |
| `src/common/util/animUtils.ts`:272 | `rgb(183, 255, 0)` |  |
| `src/common/util/animUtils.ts`:275 | `rgb(255, 251, 0)` |  |
| `src/common/util/animUtils.ts`:279 | `rgba(0, 255, 81)` |  |
| `src/common/util/animUtils.ts`:283 | `rgb(255, 153, 0)` |  |
| `src/common/util/animUtils.ts`:288 | `rgb(102, 0, 51)` |  |
| `src/common/util/animUtils.ts`:291 | `rgb(76, 0, 76)` |  |
| `src/common/util/animUtils.ts`:294 | `rgb(63, 0, 128)` |  |
| `src/common/util/animUtils.ts`:297 | `rgb(0, 0, 128)` |  |
| `src/common/util/animUtils.ts`:302 | `rgb(183, 255, 0)` |  |
| `src/common/util/animUtils.ts`:305 | `rgb(255, 251, 0)` |  |
| `src/common/util/animUtils.ts`:308 | `rgba(0, 255, 81)` |  |
| `src/common/util/animUtils.ts`:311 | `rgb(255, 153, 0)` |  |
| `src/common/util/animUtils.ts`:316 | `rgba(183, 255, 0, 0.5)` |  |
| `src/common/util/animUtils.ts`:319 | `rgba(255, 251, 0, 0.5)` |  |
| `src/common/util/animUtils.ts`:322 | `rgba(0, 255, 81, 0.5)` |  |
| `src/common/util/animUtils.ts`:325 | `rgba(255, 153, 0, 0.5)` |  |
| `src/common/util/dMessageUtils.tsx`:104 | `#ff0000` |  |
| `src/common/util/video/videoPlayManaged.ts`:14 | `rgba(0,0,0,0.82)` |  |
| `src/common/util/video/videoPlayManaged.ts`:22 | `rgba(0,0,0,0.5)` |  |
| `src/modules/aix/client/debugger/AixDebuggerFrame.tsx`:76 | `#f9f9f9` |  |
| `src/modules/beam/gather/BeamFusionGrid.tsx`:106 | `#F2FFFA` |  |
| `src/modules/beam/gather/BeamGatherPane.tsx`:32 | `rgb(var(--joy-palette-neutral-darkChannel)` |  |
| `src/modules/beam/scatter/BeamScatterPane.tsx`:30 | `rgb(var(--joy-palette-primary-darkChannel)` |  |
| `src/modules/beam/scatter/BeamScatterPane.tsx`:57 | `rgb(85, 140, 47)` |  |
| `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`:129 | `#000` |  |
| `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`:129 | `#FFF` | `--color-canvas-default` |
| `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`:139 | `#9FA6AD` |  |
| `src/modules/blocks/code/code-renderers/RenderCodeChartJS.tsx`:139 | `#555E68` | `--text-secondary` |
| `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`:96 | `#FF0000` |  |
| `src/modules/blocks/code/code-renderers/RenderCodePlantUML.tsx`:181 | `#FFFFFF` | `--color-canvas-default` |
| `src/modules/blocks/code/code-renderers/useDynamicChartJS.ts`:92 | `#CDD7E1` | `--border` |
| `src/modules/blocks/code/code-renderers/useDynamicChartJS.ts`:92 | `#32383E` | `--barColor` |
| `src/modules/blocks/enhanced-code/ERCDiffModal.tsx`:37 | `rgb(var(--joy-palette-neutral-darkChannel)` |  |
| `src/modules/blocks/image/RenderImageURL.tsx`:165 | `rgba(0, 0, 0, 0.2)` |  |
| `src/modules/blocks/image/RenderImageURL.tsx`:218 | `rgba(0 0 0 / 0.85)` |  |
| `src/modules/llms/models-modal/ModelsChangelogPanel.tsx`:37 | `rgb(var(--joy-palette-neutral-lightChannel)` |  |
| `src/modules/llms/models-modal/ModelsConfiguratorModal.tsx`:622 | `rgb(var(--joy-palette-neutral-lightChannel)` |  |
| `src/modules/llms/models-modal/ModelsList.tsx`:272 | `#fad857` |  |
| `src/modules/llms/models-modal/ModelsServiceSelector.tsx`:49 | `rgba(0,0,0,0.2)` |  |
| `src/modules/llms/vendors/anthropic/anthropic.vendor.ts`:23 | `#cc785c` |  |
| `src/modules/llms/vendors/bedrock/bedrock.vendor.ts`:27 | `#FF9900` |  |
| `src/modules/llms/vendors/lmstudio/LMStudioServiceSetup.tsx`:48 | `#f00` |  |
| `src/modules/youtube/YouTubeURLInput.tsx`:65 | `#f00` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:50 | `#0b0d0a` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:65 | `#d6dcc9` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:67 | `#171b11` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:67 | `#12140f` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:72 | `#12150f` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:76 | `#10130d` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:78 | `#0e1622` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:78 | `#23405e` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:79 | `#221d0e` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:79 | `#5e4d23` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:80 | `#14160f` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:82 | `#000` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:83 | `#39402f` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:85 | `#221d0e` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:85 | `#5e4d23` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:86 | `#10160d` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:86 | `#8fbf5a` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:86 | `#2f4a1d` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:87 | `#241010` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:87 | `#ff8a8a` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:87 | `#5e2323` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:88 | `#8fbf5a` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:89 | `#ff8a8a` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:92 | `#12140f` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:97 | `#5a6150` |  |
| `tools/develop/aix-anthropic-eviscerate/report.mjs`:98 | `#000` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:171 | `#14161a` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:171 | `#cfd3da` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:172 | `#fff` | `--color-canvas-default` |
| `tools/develop/aix-protocol-lab/render-html.ts`:172 | `#e8eaf0` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:172 | `#2a2e36` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:173 | `#9aa1ad` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:174 | `#6b7280` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:175 | `#9aa1ad` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:176 | `#e8eaf0` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:177 | `#4ade80` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:177 | `#f87171` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:178 | `#23262d` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:179 | `#ef4444` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:179 | `#1d1416` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:180 | `#eab308` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:182 | `#6b7280` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:182 | `#818cf8` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:182 | `#e8eaf0` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:182 | `#6b7280` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:183 | `#34d399` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:183 | `#134e4a` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:184 | `#f87171` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:185 | `#6b7280` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:186 | `#0d0f12` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:186 | `#2a2e36` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:187 | `#9aa1ad` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:191 | `#0c2818` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:191 | `#4ade80` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:191 | `#14532d` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:192 | `#221033` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:192 | `#c084fc` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:192 | `#581c87` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:193 | `#2a2008` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:193 | `#fbbf24` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:193 | `#713f12` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:194 | `#082530` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:194 | `#22d3ee` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:194 | `#155e75` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:195 | `#0c1a33` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:195 | `#60a5fa` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:195 | `#1e3a8a` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:196 | `#1a2433` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:196 | `#93c5fd` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:196 | `#334e75` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:197 | `#1c1f26` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:197 | `#8b919c` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:197 | `#2a2e36` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:198 | `#2d1215` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:198 | `#f87171` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:198 | `#7f1d1d` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:199 | `#fbbf24` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:199 | `#6b7280` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:200 | `#4b5563` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:201 | `#6b7280` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:203 | `#2a2e36` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:204 | `#9aa1ad` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:204 | `#1a1d23` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:205 | `#f87171` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:205 | `#fbbf24` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:205 | `#6b7280` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:206 | `#4ade80` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:206 | `#fbbf24` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:206 | `#f87171` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:206 | `#60a5fa` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:207 | `#0d0f12` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:207 | `#2a2e36` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:208 | `#1c1f26` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:208 | `#cfd3da` |  |
| `tools/develop/aix-protocol-lab/render-html.ts`:208 | `#2a2e36` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#ffb04d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#ff6b6b` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#55604b` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#3a4234` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#333b2c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:66 | `#242a1f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:70 | `#fff` | `--color-canvas-default` |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:117 | `#556047` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:117 | `#39402f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:120 | `#888` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:126 | `#e8ece2` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:127 | `#5a6150` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:130 | `#c9d3ba` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:130 | `#707a63` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:130 | `#4a5240` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:155 | `#8aa32a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:155 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:155 | `#3a4234` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:155 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:155 | `#55604b` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:155 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:155 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:158 | `#242a1f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:159 | `#242a1f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:165 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:167 | `#fff3` | `--color-canvas-default` |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:173 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:173 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:173 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:173 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:173 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:173 | `#ff8a5c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:189 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:189 | `#67e0d8` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:189 | `#9fd0ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:189 | `#3d86d8` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:190 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:190 | `#ff9d5c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:190 | `#ffe08a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:238 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:256 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:257 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:279 | `#556047` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:283 | `#556047` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:284 | `#556047` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:286 | `#707a63` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:292 | `#1c2410` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:292 | `#14160f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:292 | `#0e1622` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:292 | `#12140f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:293 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:293 | `#23405e` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:293 | `#2a2f24` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:298 | `#e8ece2` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:299 | `#9aa38c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:300 | `#5a6150` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:315 | `#707a63` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:317 | `#2a2f24` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:318 | `#9aa38c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:325 | `#161022` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:325 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:326 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:327 | `#9aa38c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:339 | `#ffb04d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:342 | `#707a63` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:457 | `#111` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:457 | `rgba(213,236,49,${alpha.toFixed(2)` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:697 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:697 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:697 | `#9aa38c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:712 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:712 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:712 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:712 | `#ff9d5c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:742 | `#c9d3ba` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#55604b` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#8a8f5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#444` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:763 | `#444` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:765 | `#444` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:767 | `#10130d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:770 | `#e8ece2` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:777 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:777 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:811 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:811 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:811 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:811 | `#ff9d5c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:826 | `#c9d3ba` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#55604b` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#8a8f5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#444` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:850 | `#444` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:859 | `#444` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:861 | `#10130d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:866 | `#e8ece2` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:868 | `#5a6150` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:878 | `#2a2f24` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:886 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:887 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:894 | `#3a4234` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:894 | `#444` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:895 | `#130f1c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:896 | `#e8ece2` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:897 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:899 | `#5a6150` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:988 | `#0b0d0a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1003 | `#d6dcc9` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1004 | `#171b11` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1004 | `#12140f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1009 | `#12150f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1011 | `#707a63` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1012 | `#10130d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1014 | `#221d0e` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1014 | `#5e4d23` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1015 | `#0e1622` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1015 | `#23405e` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1016 | `#14160f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1017 | `#39402f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1019 | `#12140f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1029 | `#8aa32a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1030 | `#23405e` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1049 | `#6f7d8f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1051 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1051 | `#221d0e` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1051 | `#5e4d23` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1053 | `#10160d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1053 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1053 | `#2f4a1d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1054 | `#221d0e` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1054 | `#5e4d23` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1055 | `#0e1622` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1055 | `#23405e` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1058 | `#9aa38c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1058 | `#1c2018` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1061 | `#0d0f0b` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1062 | `#3a4222` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1062 | `#101307` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1063 | `#0c1118` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1066 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1067 | `#4a5240` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1070 | `#707a63` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1072 | `#4a4a33` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1074 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1074 | `#130f1c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1075 | `#141810` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1075 | `#39402f` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1076 | `#707a63` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1077 | `#c9d3ba` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1085 | `#c9d3ba` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1087 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1088 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1090 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1091 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1092 | `#5a6150` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1093 | `#5a6150` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1094 | `#000` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1273 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1305 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1305 | `#b48cff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1306 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1306 | `#5aa9ff` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1307 | `#67e0d8` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1307 | `#67e0d8` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1308 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1308 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1309 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1310 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1310 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1311 | `#ff9d5c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1311 | `#ff9d5c` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1312 | `#7c8474` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1312 | `#c9d3ba` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1323 | `#8fbf5a` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1323 | `#d5ec31` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1323 | `#ffcf4d` |  |
| `tools/develop/alx-claude-code-eviscerate/report.mjs`:1323 | `#ff9d5c` |  |
