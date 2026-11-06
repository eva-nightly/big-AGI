# Module: public/workers

Provides static web worker scripts served directly to the browser, specifically Mozilla PDF.js worker used for background PDF parsing and document processing.

_`public/workers/pdf.worker.min.mjs` is larger than one call on its own (~259282 tokens): only its first ~39992 were read._

## Key files
- `public/workers/pdf.worker.min.mjs`: Precompiled, minified Mozilla PDF.js Web Worker (v5.4.54) for off-thread PDF document parsing, decompression, and rendering support.

## Public interface
- Static Web Worker asset available at /workers/pdf.worker.min.mjs for PDF.js worker thread execution

## Dependencies
- _none_

## Open questions
- _none_
