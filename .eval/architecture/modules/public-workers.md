# Module: public/workers

Provides the minified Mozilla PDF.js web worker bundle (version 5.4.54) to handle background PDF parsing, document decoding, text extraction, and rendering tasks in the browser without blocking the main UI thread.

_`public/workers/pdf.worker.min.mjs` is larger than one call on its own (~259282 tokens): only its first ~39992 were read._

## Key files
- `public/workers/pdf.worker.min.mjs`: Pre-built and minified PDF.js web worker runtime used for PDF processing and rendering.

## Public interface
- public/workers/pdf.worker.min.mjs (Web Worker script endpoint)

## Dependencies
- Web Worker API
- OffscreenCanvas
- ImageDecoder

## Open questions
- _none_
