# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Every Pages-router route must be a one-liner default export wrapped in withNextJSPerPageLayout, selecting the layout type ('optima' for user-facing apps, 'noop' for standalone dev pages) and rendering the corresponding App component from src/apps; keep route files free of business logic.

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

## Routes that must not trigger the automatic models-setup modal (e.g. news, shared chat viewer) pass suspendAutoModelsSetup: true in the withNextJSPerPageLayout options rather than special-casing inside the component.

- `pages/news.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

## App Router tRPC route files declare their runtime explicitly via an exported runtime constant ('nodejs' for /api/cloud, 'edge' for /api/edge) and define a single fetchRequestHandler wrapper that is reused for both GET and POST.

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

## Small React page/helper components type their props inline as a props object literal (props: { ... }) instead of declaring a separate interface, reserving named interfaces (MyAppProps, MyDocumentProps) for Next.js framework-level components.

- `pages/dev/debug.tsx`:

  ```
  function DebugCard(props: { title: string, children: React.ReactNode }) {
  ```

- `pages/link/callback_openrouter.tsx`:

  ```
  function CallbackOpenRouterPage(props: { openRouterCode: string | undefined }) {
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

## public/dev diagnostic tools are plain, dependency-free vanilla JavaScript using function declarations and defensive try/catch wrappers so they run even when the main app cannot boot.

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

## Standalone Node scripts under .claude/scripts use CommonJS require for built-ins, while ESM config files (.mjs) reconstruct __filename/__dirname via fileURLToPath and path.dirname.

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

## Build configuration helpers in next.config.ts are small arrow-function utilities (e.g. gated logging and git metadata readers) that stay side-effect free unless an explicit env flag is set.

- `next.config.ts`:

  ```
  const log = process.env.__AGI_CONFIG_PASS === '1' ? (...args: any[]) => console.log(args.length ? ' 🧠 ' : '', ...args) : () => { };
  ```

- `next.config.ts`:

  ```
  const readGit = (path: string) => readFileSync(new URL(`./.git/${path}`, import.meta.url), 'utf8').trim();
  ```
