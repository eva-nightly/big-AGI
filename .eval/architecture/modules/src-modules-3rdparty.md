# Module: src/modules/3rdparty

Provides an inlined/vendored implementation of @t3-oss/env-core and @t3-oss/env-nextjs using Standard Schema V1 specifications to perform type-safe, validated runtime and build-time environment variable validation across server, client (NEXT_PUBLIC_ prefixed), and shared environments in Next.js.

## Key files
- `src/modules/3rdparty/t3-env/index.ts`: Next.js environment variable helper enforcing the NEXT_PUBLIC_ client prefix and supporting experimental__runtimeEnv handling
- `src/modules/3rdparty/t3-env/env-core.ts`: Core schema-driven environment variable validation and type inference engine
- `src/modules/3rdparty/t3-env/standard.ts`: StandardSchemaV1 interface declarations and synchronous dictionary parsing utility (parseWithDictionary)

## Public interface
- createEnv(opts) - Next.js env validator exported from src/modules/3rdparty/t3-env/index.ts
- createEnv(opts) - Core env validator exported from src/modules/3rdparty/t3-env/env-core.ts
- parseWithDictionary(dictionary, value) - Synchronous standard schema dictionary validator from src/modules/3rdparty/t3-env/standard.ts
- StandardSchemaV1 - Standard Schema interface and namespace types from src/modules/3rdparty/t3-env/standard.ts
- StandardSchemaDictionary - Standard Schema dictionary type and helper namespace from src/modules/3rdparty/t3-env/standard.ts

## Dependencies
- _none_

## Open questions
- _none_
