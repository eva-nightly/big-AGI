# Module: src/modules/3rdparty

Provides an internal implementation and adaptation of type-safe environment variable schema validation (t3-env) using Standard Schema V1 for Next.js client, server, and shared environments.

## Key files
- `src/modules/3rdparty/t3-env/index.ts`: Next.js-specific wrapper around core environment validation enforcing the NEXT_PUBLIC_ client prefix and handling Next.js runtime environment structures.
- `src/modules/3rdparty/t3-env/env-core.ts`: Core environment variable validation engine and type definitions supporting server, client, shared, and extended environment configurations.
- `src/modules/3rdparty/t3-env/standard.ts`: Standard Schema V1 interface definitions and dictionary parsing logic used for schema validation.

## Public interface
- createEnv (from src/modules/3rdparty/t3-env/index.ts): Configures and parses Next.js environment variables against Standard Schema specifications
- createEnv (from src/modules/3rdparty/t3-env/env-core.ts): Core factory for environment parsing and validation
- parseWithDictionary (from src/modules/3rdparty/t3-env/standard.ts): Synchronously validates input records against a dictionary of StandardSchemaV1 validators
- StandardSchemaV1 (type): Common standard schema specification interface for input/output validation

## Dependencies
- _none_

## Open questions
- _none_
