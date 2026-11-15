# Module: tools/eslint

Custom ESLint plugins and rules enforcing codebase reliability, UI rendering performance, build-time minifier safety (SWC bugs in Next.js), and strict type discipline around AI generation outcomes.

## Key files
- `tools/eslint/memo-props.mjs`: ESLint rule ('memo/fresh-props') that flags unstable references passed as props to React.memo components or as Context provider values.
- `tools/eslint/outcome-types.mjs`: ESLint rule ('outcome/no-cast') preventing type assertions/casts on AI message outcomes and token stop reason types.
- `tools/eslint/swc-miscompile.mjs`: ESLint rule ('swc/miscompile') detecting AST patterns known to miscompile or be dropped under Next.js 15.5 SWC minifier bugs.
- `tools/eslint/sx-computed.mjs`: ESLint rule ('sx/computed-values') preventing dynamically computed numeric and string properties in Emotion 'sx' props to avoid stylesheet rule bloat.

## Public interface
- tools/eslint/memo-props.mjs: default export ESLint plugin providing rule 'memo/fresh-props' and config 'recommended'
- tools/eslint/outcome-types.mjs: default export ESLint plugin providing rule 'outcome/no-cast' and config 'recommended'
- tools/eslint/swc-miscompile.mjs: default export ESLint plugin providing rule 'swc/miscompile' and config 'recommended'
- tools/eslint/sx-computed.mjs: default export ESLint plugin providing rule 'sx/computed-values' and config 'recommended'

## Dependencies
- typescript

## AI touchpoints [AI]
- `tools/eslint/outcome-types.mjs`

## Open questions
- _none_
