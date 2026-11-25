# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Keep Pages-router files thin: default-export the result of withNextJSPerPageLayout({ type: 'optima' | 'noop' }, ...) wrapping a single app component from src/apps; put all logic in the app component, not the page.

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

## When a page must not trigger the automatic models-setup modal (e.g. news, shared links), pass suspendAutoModelsSetup: true in the layout options rather than suppressing it inside the app component.

- `pages/news.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

## tRPC App-router endpoints are declared per runtime: each route.ts exports a const runtime ('nodejs' for /api/cloud, 'edge' for /api/edge) and a handler built from fetchRequestHandler with the matching router; add new procedures to the correct router instead of creating new routes.

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

## In client pages, read route params via the typed useRouterQuery<{...}>() helper and fetch server data through apiQuery.<router>.<procedure>.useQuery hooks (tRPC + React Query), destructuring data/isPending/isError rather than hand-rolling fetch.

- `pages/link/callback_openrouter.tsx`:

  ```
  const { data, isError, error, isPending } = apiQuery.backend.exchangeOpenRouterKey.useQuery({ code: props.openRouterCode || '' }, {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  const { chatLinkId } = useRouterQuery<{ chatLinkId: string | undefined }>();
  ```

## Page-local helper components and functions use plain function declarations with inline props type objects (props: { ... }) and explicit return types for utilities; reserve interfaces for shared/extended prop shapes such as Document props.

- `pages/dev/debug.tsx`:

  ```
  function DebugCard(props: { title: string, children: React.ReactNode }) {
  ```

- `pages/dev/debug.tsx`:

  ```
  function prettifyJsonString(jsonString: string, deleteChars: number, removeDoubleQuotes: boolean, removeTrailComma: boolean): string {
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
  interface MyDocumentProps extends DocumentProps {
  ```

## Files under public/dev must stay zero-dependency vanilla JavaScript (no bundler, no TS, no imports): use small named function declarations, defensive try/catch wrappers, and share helpers via the window.Inspect object so tools work even when the app fails to boot.

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

## ESM config/tooling files (.mjs / next.config.ts) reconstruct __filename/__dirname from import.meta.url via fileURLToPath/path.dirname and resolve repo-relative files with new URL(..., import.meta.url) instead of relying on CommonJS globals.

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

## Standalone Node maintenance scripts (e.g. .claude/scripts) may use CommonJS require() for Node builtins and should depend only on fs/os/path, keeping them runnable without the app build.

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const fs = require('fs');
  ```

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const os = require('os');
  ```
