# Module: src/modules/3rdparty

A vendored/forked implementation of T3-Env (supporting the Standard Schema V1 spec) tailored for Next.js to provide type-safe runtime and build-time validation for client and server environment variables.

## Key files
- `src/modules/3rdparty/t3-env/index.ts`: Next.js entry point enforcing NEXT_PUBLIC_ prefixing for client variables and wrapping core env validation.
- `src/modules/3rdparty/t3-env/env-core.ts`: Core schema processing, prefix validation, and environment object reduction logic.
- `src/modules/3rdparty/t3-env/standard.ts`: TypeScript definitions and synchronous dictionary parser implementing the Standard Schema V1 spec.

## Public interface
- createEnv(opts): CreateEnv - Validate and create a type-safe environment configuration object
- createEnvCore(opts): CreateEnv - Core environment validator from env-core.ts
- parseWithDictionary(dictionary, value): StandardSchemaV1.Result - Validates a dictionary against Standard Schema V1 schemas
- StandardSchemaV1 - Interface representing Standard Schema V1 compliant schemas and issues

## Dependencies
- _none_

## Open questions
- Why is t3-env vendored directly in src/modules/3rdparty rather than consumed via npm packages (@t3-oss/env-nextjs / @t3-oss/env-core)?
