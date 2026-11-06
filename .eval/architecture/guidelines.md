# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Keep pages/ route files thin: default-export the result of withNextJSPerPageLayout({ type: 'optima' | 'noop' }, ...) that simply mounts the app component from src/apps; all real logic lives in the app module.

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

## On pages that do not need a configured LLM (news, shared-link viewer), pass suspendAutoModelsSetup: true to the layout wrapper so the automatic models-setup modal is not triggered.

- `pages/news.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

## tRPC Next.js Route Handlers are tiny adapters: build a handler with fetchRequestHandler bound to the matching router, export it as GET/POST, and explicitly declare the runtime ('nodejs' for /api/cloud, 'edge' for /api/edge).

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

## Type React component props inline as a single `props: { ... }` object parameter on function components (destructure only when needed), rather than defining separate interfaces for small components.

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

## Standalone tools under public/dev must stay zero-dependency, framework-free plain JavaScript using small named helper functions so they work even when the app or its storage is broken.

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

- `public/dev/inspect/doctor.html`:

  ```
  function checkStorageAPIs() {
  ```

- `public/dev/inspect/heal.html`:

  ```
  function listDBs() {
  ```

- `public/dev/inspect/heal.html`:

  ```
  function canOpen(name) {
  ```

- `public/dev/inspect/logs.html`:

  ```
  function load() {
  ```

- `public/dev/inspect/logs.html`:

  ```
  function relTime(ts) {
  ```

- `public/dev/inspect/storage.html`:

  ```
  function safe(fn) { try { return fn(); } catch (e) { return { __error: String(e && e.message || e) }; } }
  ```

## Build/maintenance scripts and configs run directly on Node builtins (fs, os, path, url) without pulling in app dependencies; ESM configs derive __filename/__dirname via fileURLToPath when needed.

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const fs = require('fs');
  ```

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const os = require('os');
  ```

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
