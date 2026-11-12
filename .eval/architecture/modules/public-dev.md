# Module: public/dev [AI]

Standalone, dependency-free client-side developer and diagnostic tools for inspect, doctor health checks, storage diagnostics/healing, and log viewing that run independently in the browser without loading application frameworks.

## Key files
- `public/dev/index.html`: Entry hub page cataloging static inspection tools (/dev/inspect/*) and linking to app-level developer tools
- `public/dev/inspect/_inspect.js`: Shared helper library providing formatting, escaping, IndexedDB helpers, rough size estimation, clipboard utilities, and confirmation prompts
- `public/dev/inspect/doctor.html`: Boot health check tool verifying localStorage integrity, critical UI stores, quota, BroadcastChannel, and IndexedDB state
- `public/dev/inspect/heal.html`: Repair and cleanup tool for detecting corrupted IndexedDBs, legacy databases, bloated log stores, and obsolete cache keys
- `public/dev/inspect/logs.html`: Diagnostic client-side log viewer filtering and searching entries from the persisted 'agi-logger-log' store
- `public/dev/inspect/storage.html`: Comprehensive browser storage analyzer measuring usage across localStorage, cookies, IndexedDB, and storage quotas

## Public interface
- window.Inspect.esc
- window.Inspect.utf16Bytes
- window.Inspect.fmtKB
- window.Inspect.fmtMB
- window.Inspect.pct
- window.Inspect.reqP
- window.Inspect.openDB
- window.Inspect.deleteDB
- window.Inspect.roughSizeOf
- window.Inspect.toast
- window.Inspect.copyText
- window.Inspect.confirmHard

## Dependencies
- _none_

## AI touchpoints [AI]
- `public/dev/inspect/_inspect.js`

## Open questions
- _none_
