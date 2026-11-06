# Module: (root)

Root-level project configuration for Next.js build lifecycle, Webpack bundling rules, TypeScript definitions, and ESLint code standards.

## Key files
- `next.config.ts`: Next.js configuration managing build hashes, export modes, Webpack aliases and mocks, WebAssembly support, and PostHog rewrites.
- `eslint.config.mjs`: ESLint flat configuration defining core web vitals, TypeScript rules, browser compatibility limits, and custom repository lint checks.
- `next-env.d.ts`: TypeScript declaration file providing Next.js type references for routes and navigation.

## Public interface
- eslint.config.mjs (default export: ESLint FlatConfig array)
- next.config.ts (default export: NextConfig object)

## Dependencies
- @eslint/eslintrc
- @eslint/js
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint/config
- eslint-plugin-compat
- next
- node:child_process
- node:fs
- node:path
- node:url

## Open questions
- _none_
