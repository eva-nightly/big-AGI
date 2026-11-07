# Module: public/dev [AI]

Standalone, dependency-free static HTML and JS diagnostic tools for inspecting browser storage, application logs, boot health ('Doctor'), and repairing corrupted or bloated client databases ('Heal') when big-AGI cannot start properly.

## Key files
- `public/dev/index.html`: Entry hub page linking to inspect tools (storage, logs, doctor) and app tools (llms, debug)
- `public/dev/inspect/_inspect.js`: Shared zero-dependency utility library providing IndexedDB helpers, size estimation, DOM formatting, confirmation prompts, and toasts via window.Inspect
- `public/dev/inspect/doctor.html`: Diagnostic page verifying boot-critical stores ('app-ui', 'app-models', 'app-device', 'app-app-chat'), JSON integrity, quota, and Zync IndexedDB structure
- `public/dev/inspect/heal.html`: Recovery tool allowing users to drop legacy databases, delete corrupted Zync storage, vacuum/clear log stores, and remove orphaned keys
- `public/dev/inspect/logs.html`: Log viewer and filter UI that directly reads and parses the persisted 'agi-logger-log' localStorage buffer
- `public/dev/inspect/storage.html`: Storage inspector computing and rendering sizes across localStorage, IndexedDB, cookies, and quota estimates, with an optional healing mode

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
- Browser DOM / Web APIs (window.localStorage, window.indexedDB, window.BroadcastChannel, navigator.storage, navigator.clipboard)

## AI touchpoints [AI]
- `public/dev/inspect/_inspect.js`

## Open questions
- _none_
