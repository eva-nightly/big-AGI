# Module: src/modules/dblobs [AI]

Manages browser-side persistent storage and lifecycle for large binary assets (images, audio) using Dexie (IndexedDB), including automatic thumbnail generation and garbage collection by scope.

## Key files
- `src/modules/dblobs/dblobs.types.ts`: Defines schemas, MIME types, origins, metadata, and creation factory for blob assets in IndexedDB.
- `src/modules/dblobs/dblobs.db.ts`: Implements the Dexie database instance ('Big-AGI') and low-level CRUD, transfer, query, and scope-based garbage collection operations.
- `src/modules/dblobs/dblobs.images.ts`: Handles high-level image asset persistence, converting blobs to base64, generating automatic 256px thumbnails, and retrieving object URLs.
- `src/modules/dblobs/dblobs.hooks.ts`: Exposes React hooks leveraging Dexie live queries for reactive asset retrieval by ID or scope/type.

## Public interface
- addDBImageAsset(scopeId: DBlobDBScopeId, imageBlob: Blob, image: { label, origin, metadata }): Promise<DBlobAssetId>
- getImageAsset(id: DBlobAssetId): Promise<DBlobImageAsset | undefined>
- getImageAssetAsBlobURL(id: DBlobAssetId): Promise<string | null>
- gcDBImageAssets(contextId: DBlobDBContextId, scopeId: DBlobDBScopeId, keepIds: DBlobAssetId[]): Promise<void>
- getDBAsset<T>(id: DBlobAssetId): Promise<T | undefined>
- getDBAssetsByScopeAndType<T>(assetType: DBlobAssetType, contextId: DBlobDBContextId, scopeId: DBlobDBScopeId): Promise<T[]>
- transferDBAssetContextScope(id: DBlobAssetId, contextId: DBlobDBContextId, scopeId: DBlobDBScopeId): Promise<void>
- deleteDBAsset(id: DBlobAssetId): Promise<void>
- gcDBAssetsByScope(contextId: DBlobDBContextId, scopeId: DBlobDBScopeId, assetType: DBlobAssetType | null, keepIds: DBlobAssetId[]): Promise<void>
- useDBAsset<T>(id: DBlobAssetId): [T | undefined]
- useDBAssetsByScopeAndType<TAsset>(assetType: TAsset['assetType'], contextId: DBlobDBContextId, scopeId: DBlobDBScopeId): [TAsset[] | undefined]
- enum DBlobAssetType
- enum DBlobMimeType
- type DBlobDBAsset
- type DBlobAsset
- type DBlobImageAsset
- type DBlobAudioAsset

## Dependencies
- dexie
- dexie-react-hooks
- ~/common/util/idUtils
- ~/common/util/pwaUtils
- ~/common/util/blobUtils
- ~/common/util/imageUtils

## AI touchpoints [AI]
- `src/modules/dblobs/dblobs.types.ts`

## Open questions
- Are audio, video, and document asset handlers planned to receive dedicated helper modules similar to dblobs.images.ts?
