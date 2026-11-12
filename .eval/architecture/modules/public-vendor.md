# Module: public/vendor

Provides vendor-bundled third-party client assets, specifically SheetJS (xlsx) for spreadsheet handling and data parsing in the browser.

_`public/vendor/sheetjs/xlsx-0.20.3.mini.min.js` is larger than one call on its own (~69768 tokens): only its first ~39992 were read._

## Key files
- `public/vendor/sheetjs/xlsx-0.20.3.mini.min.js`: Minified SheetJS (v0.20.3) library providing spreadsheet parsing and generation capabilities via the XLSX object.

## Public interface
- XLSX

## Dependencies
- _none_

## Open questions
- How is this static SheetJS bundle loaded across the application (e.g., dynamic script injection or web worker import)?
