# Module: (root)

Root project configuration providing Next.js build settings, Webpack bundling rules, WebAssembly support, and ESLint flat configuration for the big-AGI application.

## Key files
- `next.config.ts`: Next.js configuration defining build hashes, static/standalone build targets, WebAssembly support (for Tiktoken), Webpack module replacements (server/client mocks), MUI Joy aliasing, and analytics rewrites.
- `eslint.config.mjs`: ESLint flat configuration setting up TypeScript linting, React Hook rules, older browser compatibility constraints, and bundle import guards.
- `next-env.d.ts`: Next.js ambient TypeScript declarations for routes, navigation, and image types.

## Public interface
- default export (NextConfig) in next.config.ts
- default export (Linter.Config[]) in eslint.config.mjs

## Dependencies
- next
- eslint
- @eslint/js
- @eslint/eslintrc
- eslint-plugin-compat
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- @mui/joy
- @dqbd/tiktoken
- puppeteer-core

## AI touchpoints [AI]
- `next.config.ts`

## Open questions
- _none_
