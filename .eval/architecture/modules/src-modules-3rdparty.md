# Module: src/modules/3rdparty

Provides type-safe environment variable validation and runtime parsing conforming to the Standard Schema V1 specification, enforcing server versus client-side separation (with NEXT_PUBLIC_ prefixes) for Next.js runtimes.

## Key files
- `src/modules/3rdparty/t3-env/index.ts`: Next.js adapter exposing createEnv with NEXT_PUBLIC_ prefix enforcement and runtime environment resolution
- `src/modules/3rdparty/t3-env/env-core.ts`: Core environment validation engine, option typing, and schema transformation
- `src/modules/3rdparty/t3-env/standard.ts`: Standard Schema V1 interface definitions and parseWithDictionary validation helper

## Public interface
- createEnv
- parseWithDictionary
- StandardSchemaV1
- StandardSchemaDictionary
- CreateEnv
- EnvOptions
- ServerClientOptions
- StrictOptions
- LooseOptions

## Dependencies
- _none_

## Open questions
- _none_
