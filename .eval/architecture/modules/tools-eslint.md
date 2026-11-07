# Module: tools/eslint

Provides custom ESLint plugins and rule configurations enforcing codebase safety and performance constraints: preventing unstable props on React.memo components and context providers, disallowing unsafe type assertions on chat/model outcome types, detecting AST patterns that trigger Next.js SWC minifier miscompilation bugs, and blocking render-computed dynamic values inside Emotion sx props.

## Key files
- `tools/eslint/memo-props.mjs`: ESLint plugin ('memo/fresh-props') that detects values and children created per-render when passed to React.memo components or React Context providers.
- `tools/eslint/outcome-types.mjs`: ESLint plugin ('outcome/no-cast') that bans type assertions (casts) to chat message terminal outcomes and token stop reason types.
- `tools/eslint/swc-miscompile.mjs`: ESLint plugin ('swc/miscompile') that catches switch statement patterns and case closures prone to Next.js 15.5 SWC minifier bugs.
- `tools/eslint/sx-computed.mjs`: ESLint plugin ('sx/computed-values') that flags dynamic, render-computed numbers and strings in Emotion sx props to prevent stylesheet memory leaks.

## Public interface
- default export (tools/eslint/memo-props.mjs): ESLint plugin object with 'fresh-props' rule and 'recommended' configuration
- default export (tools/eslint/outcome-types.mjs): ESLint plugin object with 'no-cast' rule and 'recommended' configuration
- default export (tools/eslint/swc-miscompile.mjs): ESLint plugin object with 'miscompile' rule and 'recommended' configuration
- default export (tools/eslint/sx-computed.mjs): ESLint plugin object with 'computed-values' rule and 'recommended' configuration

## Dependencies
- typescript

## AI touchpoints [AI]
- `tools/eslint/outcome-types.mjs`

## Open questions
- _none_
