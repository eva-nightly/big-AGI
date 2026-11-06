# Module: tools/eslint

Provides custom ESLint plugins and rules for big-AGI that enforce React memoization best practices, prevent CSS stylesheet bloat in Emotion `sx` props, guard against Next.js/SWC minifier miscompilation bugs, and prevent unsafe type assertions to AI generation/terminal outcome types.

## Key files
- `tools/eslint/memo-props.mjs`: ESLint rule (`fresh-props`) preventing fresh literals or derived values from breaking React.memo boundaries and React Context providers.
- `tools/eslint/outcome-types.mjs`: ESLint rule (`no-cast`) forbidding type casts (as/assertion) to AI/chat message outcome and token stop reason types.
- `tools/eslint/swc-miscompile.mjs`: ESLint rule (`miscompile`) catching AST patterns known to trigger SWC minification bugs in Next.js (e.g. switch fallthroughs, constant discriminants, and closure declarations in cases).
- `tools/eslint/sx-computed.mjs`: ESLint rule (`computed-values`) warning when dynamically computed wide number/string expressions are passed into Emotion `sx` props.

## Public interface
- memo-props.mjs: default export ESLint plugin object with rule `fresh-props` and config `recommended`
- outcome-types.mjs: default export ESLint plugin object with rule `no-cast` and config `recommended`
- swc-miscompile.mjs: default export ESLint plugin object with rule `miscompile` and config `recommended`
- sx-computed.mjs: default export ESLint plugin object with rule `computed-values` and config `recommended`

## Dependencies
- typescript

## AI touchpoints [AI]
- `tools/eslint/outcome-types.mjs`

## Open questions
- _none_
