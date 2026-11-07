# Module: public/workers

Provides the minified Mozilla PDF.js worker script executed in background web worker threads to handle PDF parsing, font processing, and document rendering without blocking the main UI thread.

_`public/workers/pdf.worker.min.mjs` is larger than one call on its own (~259282 tokens): only its first ~39992 were read._

## Key files
- `public/workers/pdf.worker.min.mjs`: Pre-built, minified PDF.js Web Worker entry script (v5.4.54) for client-side PDF document decoding and processing.

## Public interface
- Web Worker execution entrypoint for PDF.js

## Dependencies
- _none_

## Open questions
- _none_
