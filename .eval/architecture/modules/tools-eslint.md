# Module: tools/eslint

Custom ESLint rules and plugins that enforce React performance invariants (memo props and computed sx styles), Next.js SWC minifier compatibility, and type-safety constraints preventing direct casts to AI message/beam outcome types.

## Key files
- `tools/eslint/memo-props.mjs`: ESLint plugin enforcing that values, children, or context values passed to React.memo components or React context providers are not recreated on every render.
- `tools/eslint/outcome-types.mjs`: ESLint rule forbidding type assertion/casts to terminal outcome and token stop reason types (such as DMessageTerminalOutcome, BeamStatus, and AixChatGenerateTerminal_LL), enforcing proper outcome derivation.
- `tools/eslint/swc-miscompile.mjs`: ESLint rule detecting and disallowing AST switch statement patterns that Next.js 15.5 SWC minifier can mis-transform.
- `tools/eslint/sx-computed.mjs`: ESLint rule disallowing render-computed wide numbers and animation strings in Emotion sx attributes to prevent CSS rule accumulation.

## Public interface
- default export (plugin) in tools/eslint/memo-props.mjs with rule memo/fresh-props
- default export (plugin) in tools/eslint/outcome-types.mjs with rule outcome/no-cast
- default export (plugin) in tools/eslint/swc-miscompile.mjs with rule swc/miscompile
- default export (plugin) in tools/eslint/sx-computed.mjs with rule sx/computed-values

## Dependencies
- typescript

## AI touchpoints [AI]
- `tools/eslint/outcome-types.mjs`

## Open questions
- _none_
