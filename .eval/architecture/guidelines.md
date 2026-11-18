# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Pages Router routes are thin wrappers: default-export `withNextJSPerPageLayout({ type: 'optima' | 'noop' }, () => <AppX />)` and keep all feature logic in the corresponding src/apps sub-application.

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

## Pages that should not auto-trigger the models setup modal (shared links, news) pass `suspendAutoModelsSetup: true` to the Optima per-page layout options.

- `pages/news.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

## App Router tRPC route handlers declare their runtime explicitly via `export const runtime` and delegate GET/POST to a `fetchRequestHandler`-based handler bound to the matching Edge or Node router.

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

## Declare React component props inline in the function signature as `props: { ... }` and access fields via `props.x`, rather than destructuring separately-defined prop interfaces for small components.

- `pages/dev/debug.tsx`:

  ```
  function DebugCard(props: { title: string, children: React.ReactNode }) {
  ```

- `pages/link/callback_openrouter.tsx`:

  ```
  function CallbackOpenRouterPage(props: { openRouterCode: string | undefined }) {
  ```

## Use the `React.` namespace for hooks and types (e.g. `React.useState`, `React.ReactNode`) instead of individually named imports.

- `pages/dev/debug.tsx`:

  ```
  function DebugCard(props: { title: string, children: React.ReactNode }) {
  ```

- `pages/link/share_target.tsx`:

  ```
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  ```

## ESM config and build files resolve paths relative to themselves via `import.meta.url` (e.g. `fileURLToPath`/`path.dirname` or `new URL(..., import.meta.url)`), while legacy .js helper scripts use CommonJS `require`.

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

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const fs = require('fs');
  ```

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const os = require('os');
  ```

## Standalone browser diagnostic tools under public/dev must stay zero-dependency, using plain ES5-style `function` declarations and raw Web APIs so they run even when the app bundle fails to boot.

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
