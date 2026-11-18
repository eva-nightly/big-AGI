# Module: tools/eslint

Custom ESLint plugins and rules providing static analysis guards against React.memo invalidations, unsafe outcome type casts, SWC minifier compiler bugs, and Emotion sx performance regressions.

## Key files
- `tools/eslint/memo-props.mjs`: ESLint plugin enforcing that values created on every render are not passed to React.memo components or context provider value props
- `tools/eslint/outcome-types.mjs`: ESLint plugin preventing TypeScript type casts to message and Beam outcome types
- `tools/eslint/swc-miscompile.mjs`: ESLint plugin detecting AST patterns in switch statements known to trigger SWC minifier miscompilation in Next.js
- `tools/eslint/sx-computed.mjs`: ESLint plugin detecting render-computed numeric/string values in Emotion sx props that bloat CSS stylesheets

## Public interface
- default export (tools/eslint/memo-props.mjs): ESLint plugin object exposing rule 'fresh-props' and config 'recommended'
- default export (tools/eslint/outcome-types.mjs): ESLint plugin object exposing rule 'no-cast' and config 'recommended'
- default export (tools/eslint/swc-miscompile.mjs): ESLint plugin object exposing rule 'miscompile' and config 'recommended'
- default export (tools/eslint/sx-computed.mjs): ESLint plugin object exposing rule 'computed-values' and config 'recommended'

## Dependencies
- typescript

## Open questions
- _none_
