# Module: pages/dev

Developer and diagnostic pages providing runtime inspection of LLM capabilities, client environment settings, backend configurations, and debug data export.

## Key files
- `pages/dev/debug.tsx`: Debug dashboard page displaying aggregated client, product (LLM and store state), and backend configuration, with functionality to export a diagnostic JSON snapshot.
- `pages/dev/llms.tsx`: Developer page rendering the AppLlmCapabilities view to inspect LLM models and capabilities.

## Public interface
- default export (pages/dev/debug.tsx): Next.js page component wrapped with withNextJSPerPageLayout
- default export (pages/dev/llms.tsx): Next.js page component wrapped with withNextJSPerPageLayout

## Dependencies
- @mui/joy
- @mui/icons-material/Download
- browser-fs-access
- react

## AI touchpoints [AI]
- `pages/dev/debug.tsx`
- `pages/dev/llms.tsx`

## Open questions
- _none_
