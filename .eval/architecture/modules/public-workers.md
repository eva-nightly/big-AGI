# Module: public/workers

Provides a pre-compiled, minified Mozilla PDF.js web worker script to handle PDF parsing, rendering computations, and text extraction off the main browser thread.

_`public/workers/pdf.worker.min.mjs` is larger than one call on its own (~259282 tokens): only its first ~39992 were read._

## Key files
- `public/workers/pdf.worker.min.mjs`: Mozilla PDF.js worker (v5.4.54) asset executed within a background Web Worker context for client-side PDF processing.

## Public interface
- Web Worker execution script (loaded via URL by client-side PDF.js worker loader)

## Dependencies
- _none_

## Open questions
- _none_
