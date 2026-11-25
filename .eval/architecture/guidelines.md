# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Every Next.js page under `pages/` must be a thin default export produced by `withNextJSPerPageLayout({ type: 'optima' | 'noop', ... }, () => <App... />)`; put the real UI in `src/apps`, never in the page file.

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

## Pages that should not auto-trigger the models setup dialog (news, shared link viewers) pass `suspendAutoModelsSetup: true` to the per-page layout options.

- `pages/news.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

## tRPC API route handlers in `app/api` must declare an explicit `export const runtime` ('edge' or 'nodejs') and delegate to `fetchRequestHandler` with the matching root router (`appRouterEdge` / `appRouterCloud`).

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

## Standalone Node scripts in `.claude/scripts` use CommonJS `require` for Node built-ins, while ESM config files (`*.mjs`) derive `__filename`/`__dirname` from `import.meta.url` instead of assuming CJS globals.

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

## Root config files (`next.config.ts`, `eslint.config.mjs`) use small local helper closures for build-time concerns (gated logging, git metadata reads, path resolution) rather than importing from `src/`.

- `next.config.ts`:

  ```
  const log = process.env.__AGI_CONFIG_PASS === '1' ? (...args: any[]) => console.log(args.length ? ' 🧠 ' : '', ...args) : () => { };
  ```

- `next.config.ts`:

  ```
  const readGit = (path: string) => readFileSync(new URL(`./.git/${path}`, import.meta.url), 'utf8').trim();
  ```

- `eslint.config.mjs`:

  ```
  const __filename = fileURLToPath(import.meta.url);
  ```

- `eslint.config.mjs`:

  ```
  const __dirname = path.dirname(__filename);
  ```

## Page-level helper components and pure utilities (e.g. debug cards, JSON prettifiers, callback pages) are declared as plain named `function`s with inline-typed props objects, not arrow components or separate interfaces.

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

## Static tools under `public/dev/inspect` must stay zero-dependency plain JS: small named helper functions on `window.Inspect`, defensive `try/catch` wrappers around storage APIs, and no framework or bundler imports.

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

## Client-only or analytics components in `_app.tsx` are loaded via `next/dynamic` with `ssr: false`, and the root app/document components use explicitly typed props (`MyAppProps`, `MyDocumentProps`) extending Next's base types.

- `pages/_app.tsx`:

  ```
  const VercelAnalytics = dynamic(() => import('@vercel/analytics/next').then(mod => mod.Analytics), { ssr: false });
  ```

- `pages/_app.tsx`:

  ```
  const Big_AGI_App = ({ Component, emotionCache, pageProps }: MyAppProps) => {
  ```

- `pages/_document.tsx`:

  ```
  interface MyDocumentProps extends DocumentProps {
  ```

- `pages/_document.tsx`:

  ```
  export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  ```
