# Module: (root)

Provides root-level build, bundling, and code quality configurations for Big-AGI, managing Next.js settings, Webpack client/server module replacements and WASM enablement, and ESLint rule enforcement.

## Key files
- `next.config.ts`: Configures Next.js compilation, build identity hashes, standalone/static export modes, PostHog rewrites, and Webpack customization (WASM support, Joy UI aliasing, dev mocks, and client-side module replacements).
- `eslint.config.mjs`: Defines ESLint flat configuration including Next.js Core Web Vitals, TypeScript linting, browser compatibility guards for older browser engines, and bundle size import restrictions.
- `next-env.d.ts`: Supplies Next.js TypeScript reference types for image types, navigation compat, and generated route types.

## Public interface
- default export in next.config.ts (NextConfig)
- default export in eslint.config.mjs (defineConfig ESLint configuration array)

## Dependencies
- @eslint/js
- @eslint/eslintrc
- eslint/config
- eslint-plugin-compat
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- next
- node:child_process
- node:fs
- node:path
- node:url

## AI touchpoints [AI]
- `next.config.ts`

## Open questions
- _none_
