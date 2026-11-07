# Module: src/modules/dblobs [AI]

Manages browser-side persistent IndexedDB storage for large binary assets (such as images and audio) using Dexie, providing asset lifecycle operations, scoped garbage collection, thumbnail generation, and reactive React hooks.

## Key files
- `src/modules/dblobs/dblobs.db.ts`: Defines the Dexie IndexedDB instance (BigAgiDB) and core database operations including asset insertion, retrieval by scope and type, scope transfers, and garbage collection.
- `src/modules/dblobs/dblobs.hooks.ts`: Provides reactive React hooks (useDBAssetsByScopeAndType, useDBAsset) powered by dexie-react-hooks.
- `src/modules/dblobs/dblobs.images.ts`: Handles image-specific blob storage, base64 conversion, automatic 256px thumbnail caching, Blob URL creation, and scoped image garbage collection.
- `src/modules/dblobs/dblobs.types.ts`: Defines TypeScript interfaces, enums, MIME types, metadata structures for user/AI origins, and the asset creation helper function.

## Public interface
- export const DBLOBS_DEBUG_GC: boolean
- export function _addDBAsset<T extends DBlobAsset>(asset: T, contextId: DBlobDBContextId, scopeId: DBlobDBScopeId): Promise<DBlobAssetId>
- export function getDBAsset<T extends DBlobAsset = DBlobDBAsset>(id: DBlobAssetId): Promise<T | undefined>
- export function getDBAssetsByScopeAndType<T extends DBlobAsset = DBlobDBAsset>(assetType: T['assetType'], contextId: DBlobDBContextId, scopeId: DBlobDBScopeId): Promise<T[]>
- export function transferDBAssetContextScope(id: DBlobAssetId, contextId: DBlobDBContextId, scopeId: DBlobDBScopeId): Promise<void>
- export function deleteDBAsset(id: DBlobAssetId): Promise<void>
- export function gcDBAssetsByScope(contextId: DBlobDBContextId, scopeId: DBlobDBScopeId, assetType: DBlobAssetType | null, keepIds: DBlobAssetId[]): Promise<void>
- export function useDBAssetsByScopeAndType<TAsset extends DBlobAsset = DBlobDBAsset>(assetType: TAsset['assetType'], contextId: DBlobDBContextId, scopeId: DBlobDBScopeId): [TAsset[] | undefined]
- export function useDBAsset<T extends DBlobAsset = DBlobDBAsset>(id: DBlobAssetId): [T | undefined]
- export function addDBImageAsset(scopeId: DBlobDBScopeId, imageBlob: Blob, image: { label: string, origin: DBlobImageAsset['origin'], metadata: DBlobImageAsset['metadata'] }): Promise<DBlobAssetId>
- export function getImageAsset(id: DBlobAssetId): Promise<DBlobImageAsset | undefined>
- export function getImageAssetAsBlobURL(id: DBlobAssetId): Promise<string | null>
- export function gcDBImageAssets(contextId: DBlobDBContextId, scopeId: DBlobDBScopeId, keepIds: DBlobAssetId[]): Promise<void>
- export function _createAssetObject<TType extends DBlobAssetType, TMime extends DBlobMimeType, TMeta extends Record<string, any>>(assetType: TType, label: string, data: DBlobAssetData<TMime>, origin: DBlobAssetOrigin, metadata: TMeta): DBlobAssetImplV1<TType, TMime, TMeta>
- export enum DBlobAssetType { IMAGE = 'image', AUDIO = 'audio' }
- export enum DBlobMimeType

## Dependencies
- dexie
- dexie-react-hooks
- ~/common/util/pwaUtils
- ~/common/util/blobUtils
- ~/common/util/imageUtils
- ~/common/util/idUtils

## AI touchpoints [AI]
- `src/modules/dblobs/dblobs.types.ts`

## Open questions
- _none_
