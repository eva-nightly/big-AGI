# Module: public/dev [AI]

Standalone, dependency-free static HTML and JavaScript developer inspection and repair tools that operate entirely within the client's browser to diagnose and fix storage corruption, examine persisted log buffers, run boot sanity checks, and provide links to app-level diagnostic tools.

## Key files
- `public/dev/index.html`: Landing directory page listing both static zero-dependency inspect tools and running app diagnostic tools
- `public/dev/inspect/_inspect.js`: Shared helper library providing formatting, escaping, clipboard, toast notification, size estimation, and IndexedDB management functions for standalone inspect pages
- `public/dev/inspect/doctor.html`: Boot health check tool verifying localStorage, boot-critical keys, IndexedDB integrity, BroadcastChannel, and storage quota
- `public/dev/inspect/heal.html`: Repair and maintenance tool to detect and resolve corrupt/unopenable Zync databases, bloated log stores, legacy databases, and obsolete keys
- `public/dev/inspect/logs.html`: Diagnostic viewer and filter tool for persisted client logs stored in localStorage (`agi-logger-log`)
- `public/dev/inspect/storage.html`: Diagnostic storage inspector analyzing sizes and object layouts across localStorage, cookies, IndexedDB, and storage quotas

## Public interface
- window.Inspect.esc(s)
- window.Inspect.utf16Bytes(s)
- window.Inspect.fmtKB(b)
- window.Inspect.fmtMB(b)
- window.Inspect.pct(part, total)
- window.Inspect.reqP(req)
- window.Inspect.openDB(name)
- window.Inspect.deleteDB(name)
- window.Inspect.roughSizeOf(v, depth)
- window.Inspect.toast(msg)
- window.Inspect.copyText(text, okMsg)
- window.Inspect.confirmHard(message, phrase)

## Dependencies
- _none_

## AI touchpoints [AI]
- `public/dev/inspect/_inspect.js`
- `public/dev/index.html`

## Open questions
- _none_
