# Module: public/dev [AI]

Standalone, zero-dependency browser-based developer and inspection tools for diagnosing boot issues, analyzing client storage and database status, inspecting persisted logs, and repairing corrupted local application state.

## Key files
- `public/dev/index.html`: Entry page and directory linking to standalone inspect tools and app-integrated developer routes
- `public/dev/inspect/_inspect.js`: Shared browser utilities for formatting byte sizes, manipulating IndexedDB, calculating memory footprints, and managing UI toasts and confirmations
- `public/dev/inspect/doctor.html`: Diagnostic tool evaluating boot-critical localStorage keys, IndexedDB availability, BroadcastChannel, and storage quotas
- `public/dev/inspect/heal.html`: Repair tool offering guided deletion and cleanup for corrupt Zync IndexedDB instances, legacy databases, bloated log stores, and obsolete keys
- `public/dev/inspect/logs.html`: Log viewer interface for filtering, searching, and exporting entries persisted in localStorage key agi-logger-log
- `public/dev/inspect/storage.html`: Detailed storage analyzer inspecting key sizes, sub-properties, IndexedDB schemas, cookies, and browser storage quota estimates

## Public interface
- window.Inspect (object exposing esc, utf16Bytes, fmtKB, fmtMB, pct, reqP, openDB, deleteDB, roughSizeOf, toast, copyText, confirmHard)
- GET /dev/index.html (/dev)
- GET /dev/inspect/doctor.html (/dev/inspect/doctor)
- GET /dev/inspect/heal.html (/dev/inspect/heal)
- GET /dev/inspect/logs.html (/dev/inspect/logs)
- GET /dev/inspect/storage.html (/dev/inspect/storage)

## Dependencies
- Browser Web APIs (window.localStorage, window.indexedDB, window.BroadcastChannel, navigator.storage, navigator.clipboard)

## AI touchpoints [AI]
- `public/dev/inspect/_inspect.js`

## Open questions
- _none_
