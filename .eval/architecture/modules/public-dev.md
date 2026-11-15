# Module: public/dev [AI]

Provides standalone, zero-dependency static diagnostic and repair tools in the browser to inspect local storage, analyze boot-critical state, view client log buffers, and heal corrupted IndexedDB or localStorage entries even when the main application fails to boot.

## Key files
- `public/dev/index.html`: Directory landing page linking standalone inspect tools and application-level diagnostic routes
- `public/dev/inspect/_inspect.js`: Shared vanilla JavaScript helper library exposing formatting, size estimation, IndexedDB helpers, confirmation dialogs, and toast notifications
- `public/dev/inspect/doctor.html`: Boot health diagnostic checking localStorage availability, boot-critical keys (app-ui, app-models, app-device, app-app-chat), BroadcastChannel, quota, and Zync IndexedDB state
- `public/dev/inspect/heal.html`: Storage remediation tool providing guarded actions to purge legacy databases, unopenable Zync databases, bloated log stores, and obsolete cache keys
- `public/dev/inspect/logs.html`: Client log viewer reading, filtering, and searching the persisted agi-logger-log entry buffer
- `public/dev/inspect/storage.html`: Detailed storage analyzer inspecting memory usage and keys across localStorage, cookies, quota estimates, and IndexedDB databases

## Public interface
- HTTP /dev (index.html): Dev tools index page
- HTTP /dev/inspect/doctor: Boot doctor health check interface
- HTTP /dev/inspect/heal: Interactive storage repair and cleanup interface
- HTTP /dev/inspect/logs: Client log viewer interface
- HTTP /dev/inspect/storage: Storage inspector and healing mode (?heal=1) interface
- window.Inspect: Global utility object exposing esc, utf16Bytes, fmtKB, fmtMB, pct, reqP, openDB, deleteDB, roughSizeOf, toast, copyText, and confirmHard

## Dependencies
- Browser Web APIs: window.localStorage, window.indexedDB, navigator.storage, BroadcastChannel, navigator.clipboard, document.cookie

## AI touchpoints [AI]
- `public/dev/inspect/_inspect.js`

## Open questions
- _none_
