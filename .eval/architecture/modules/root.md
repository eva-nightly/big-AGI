# Module: (root)

Root project configuration establishing the Next.js build lifecycle, build metadata extraction, Webpack compilation rules (WASM support, module mocking, chunk sizing), PostHog reverse proxy rewrites, and ESLint flat-configuration for browser compatibility and typed rules.

## Key files
- `next.config.ts`: Next.js configuration defining build types (standalone/export), build hashes, PostHog rewrites, external packages, and Webpack customization including @dqbd/tiktoken WebAssembly support, Joy UI aliasing, and dev-time/client-server module mocking.
- `eslint.config.mjs`: ESLint flat configuration configuring typescript-eslint, browser engine compatibility guards, Next.js core-web-vitals, and codebase-specific lint rules.
- `next-env.d.ts`: Next.js ambient TypeScript reference definitions for global and route types.

## Public interface
- default export in next.config.ts (NextConfig object)
- default export in eslint.config.mjs (ESLint FlatConfig array)

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
- node:child_process
- node:fs
- node:path
- node:url

## AI touchpoints [AI]
- `next.config.ts`

## Open questions
- next.config.ts references @cloudflare/puppeteer and puppeteer-core as an external package; are there additional headless browser tasks managed during build or runtime?
- Both eslint.config.mjs and next.config.ts were partially truncated in the provided file snippets.
