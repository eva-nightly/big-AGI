# Module: (root)

Configures project-level build, bundling, TypeScript environment, and linting rules for the Big-AGI Next.js application.

## Key files
- `next.config.ts`: Next.js configuration setting up build metadata, Webpack aliases and plugins (including server/client mocks, tiktoken WASM support), PostHog rewrites, and standalone/export modes
- `eslint.config.mjs`: Flat ESLint configuration enforcing TypeScript checks, browser compatibility guards, React hooks rules, and custom project-level AST rules
- `next-env.d.ts`: Auto-generated Next.js TypeScript type definitions reference file

## Public interface
- next.config.ts (default export: NextConfig)
- eslint.config.mjs (default export: ESLint config array via defineConfig)

## Dependencies
- next
- @eslint/js
- @eslint/eslintrc
- eslint-plugin-compat
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- node:child_process
- node:fs
- node:path
- node:url

## AI touchpoints [AI]
- `next.config.ts`

## Open questions
- _none_
