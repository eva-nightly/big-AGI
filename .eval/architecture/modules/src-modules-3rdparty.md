# Module: src/modules/3rdparty

Provides a vendored, schema-agnostic environment variable validation and type-safety utility tailored for Next.js, implementing the Standard Schema V1 specification and enforcing client/server prefix isolation.

## Key files
- `src/modules/3rdparty/t3-env/index.ts`: Next.js-specific environment wrapper enforcing the NEXT_PUBLIC_ client prefix and handling Next.js runtime environment destructuring
- `src/modules/3rdparty/t3-env/env-core.ts`: Core environment variable parsing, runtime validation, and client/server schema isolation logic
- `src/modules/3rdparty/t3-env/standard.ts`: Type definitions and validation utilities for Standard Schema V1 specification interoperability

## Public interface
- createEnv (src/modules/3rdparty/t3-env/index.ts)
- createEnv (src/modules/3rdparty/t3-env/env-core.ts)
- parseWithDictionary (src/modules/3rdparty/t3-env/standard.ts)
- StandardSchemaV1
- StandardSchemaDictionary
- CreateEnv
- EnvOptions
- StrictOptions
- LooseOptions
- ClientOptions
- ServerOptions
- ServerClientOptions

## Dependencies
- _none_

## Open questions
- _none_
