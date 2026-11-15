# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Every Pages-router page default-exports withNextJSPerPageLayout({ type: 'optima' | 'noop' }, ...) and keeps the page file a thin wrapper that mounts the real app component from src/apps; put logic in the app component, not the page.

- `pages/call.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima' }, () => <AppCall />);
  ```

- `pages/diff.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima' }, () => <AppDiff />);
  ```

- `pages/draw.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima' }, () => <AppDraw />);
  ```

- `pages/index.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima' }, () => {
  ```

- `pages/personas.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima' }, () => <AppPersonas />);
  ```

- `pages/tokens.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima' }, () => <AppTokens />);
  ```

- `pages/workspace.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima' }, () => <AppPlaceholder />);
  ```

- `pages/dev/llms.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'noop' }, () => <AppLlmCapabilities />);
  ```

## Pages that must render without a configured model (news, shared chat links) pass suspendAutoModelsSetup: true to the layout so the models setup modal is not auto-triggered.

- `pages/news.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

## App Router tRPC endpoints are declared as a fetchRequestHandler-wrapping handler plus an explicit `export const runtime` ('nodejs' for cloud routers, 'edge' for edge routers); never mix runtimes in one route file.

- `app/api/cloud/[trpc]/route.ts`:

  ```
  const handlerNodeRoutes = (req: Request) => fetchRequestHandler({
  ```

- `app/api/cloud/[trpc]/route.ts`:

  ```
  export const runtime = 'nodejs';
  ```

- `app/api/edge/[trpc]/route.ts`:

  ```
  const handlerEdgeRoutes = (req: Request) => fetchRequestHandler({
  ```

- `app/api/edge/[trpc]/route.ts`:

  ```
  export const runtime = 'edge';
  ```

## Prefer named function components and helpers with inline prop/parameter type annotations (function Name(props: { ... })) over anonymous arrow components, so names survive in stack traces and React DevTools.

- `pages/dev/debug.tsx`:

  ```
  function DebugCard(props: { title: string, children: React.ReactNode }) {
  ```

- `pages/link/callback_openrouter.tsx`:

  ```
  function CallbackOpenRouterPage(props: { openRouterCode: string | undefined }) {
  ```

- `pages/link/share_target.tsx`:

  ```
  function AppShareTarget() {
  ```

- `pages/_document.tsx`:

  ```
  export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  ```

## Root config files are ESM; derive filesystem paths from import.meta.url (fileURLToPath/__dirname shim) instead of relying on CommonJS globals.

- `eslint.config.mjs`:

  ```
  const __filename = fileURLToPath(import.meta.url);
  ```

- `eslint.config.mjs`:

  ```
  const __dirname = path.dirname(__filename);
  ```

- `next.config.ts`:

  ```
  const readGit = (path: string) => readFileSync(new URL(`./.git/${path}`, import.meta.url), 'utf8').trim();
  ```

## Standalone tools under public/dev must stay dependency-free vanilla JS with small, defensive helper functions (escaping, size estimation, try/catch wrappers) so they still run when the main app is broken.

- `public/dev/inspect/_inspect.js`:

  ```
  function esc(s) {
  ```

- `public/dev/inspect/_inspect.js`:

  ```
  function utf16Bytes(s) { return (typeof s === 'string' ? s.length : 0) * 2; }
  ```

- `public/dev/inspect/doctor.html`:

  ```
  function add(status, title, detail) { CHECKS.push({ status: status, title: title, detail: detail || '' }); }
  ```

- `public/dev/inspect/storage.html`:

  ```
  function safe(fn) { try { return fn(); } catch (e) { return { __error: String(e && e.message || e) }; } }
  ```

## Ad-hoc Node CLI scripts in .claude/scripts use CommonJS require() of Node built-ins only and avoid project imports, keeping them runnable with plain `node`.

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const fs = require('fs');
  ```

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const os = require('os');
  ```
