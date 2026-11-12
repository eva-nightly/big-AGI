# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Keep files in pages/ as thin route wrappers: default-export withNextJSPerPageLayout({ type: 'optima' | 'noop' }, ...) that mounts an app component from src/apps; put all logic in the app module.

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

## Pages that must not trigger the automatic model-setup flow (news, shared-link viewers) pass suspendAutoModelsSetup: true to the layout wrapper.

- `pages/news.tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  export default withNextJSPerPageLayout({ type: 'optima', suspendAutoModelsSetup: true }, () => {
  ```

## API route handlers declare their runtime explicitly (export const runtime = 'edge' | 'nodejs') and delegate to tRPC's fetchRequestHandler with the matching Edge or Cloud router; AI/LLM endpoints live on the edge router.

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

## ESM config and tooling scripts (.mjs/.ts) resolve paths from import.meta.url rather than assuming a CommonJS __dirname.

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

## Standalone Node utility scripts under .claude/scripts use CommonJS require of Node built-ins only, with no project or npm dependencies.

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const fs = require('fs');
  ```

- `.claude/scripts/parse-ollama-models.js`:

  ```
  const os = require('os');
  ```

## Browser diagnostics in public/dev are framework-free vanilla JS: small named helper functions, defensive try/catch wrappers, and no imports so they run even when the app is broken.

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

- `public/dev/inspect/heal.html`:

  ```
  function canOpen(name) {
  ```

- `public/dev/inspect/storage.html`:

  ```
  function safe(fn) { try { return fn(); } catch (e) { return { __error: String(e && e.message || e) }; } }
  ```

## React components and helpers are plain function declarations with inline-typed props/parameters (props: { ... }) rather than separate Props types for small components.

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

## Next.js App/Document shells use explicit interfaces extending the Next-provided props types and are typed at the component boundary.

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

## Pages read server data and route params through typed client helpers (apiQuery.<router>.<proc>.useQuery, useRouterQuery<T>) instead of raw fetch or untyped router access.

- `pages/link/callback_openrouter.tsx`:

  ```
  const { data, isError, error, isPending } = apiQuery.backend.exchangeOpenRouterKey.useQuery({ code: props.openRouterCode || '' }, {
  ```

- `pages/link/chat/[chatLinkId].tsx`:

  ```
  const { chatLinkId } = useRouterQuery<{ chatLinkId: string | undefined }>();
  ```
