# Module: src/modules/dblobs [AI]

Manages browser-side persistent storage and retrieval of large binary assets (such as user-uploaded or AI-generated images and audio) using Dexie/IndexedDB with scope filtering, reactive hooks, thumbnail generation, and garbage collection.

## Key files
- `src/modules/dblobs/dblobs.db.ts`: Defines the Dexie IndexedDB database instance (BigAgiDB) and provides CRUD and scoped garbage collection operations for large assets.
- `src/modules/dblobs/dblobs.types.ts`: Defines data types, enums, MIME types, and origins (user vs AI-generated) for stored assets, along with asset creation helpers.
- `src/modules/dblobs/dblobs.images.ts`: Implements image-specific asset creation, base64/blob conversion, auto-thumbnail caching (256px), and blob URL generation.
- `src/modules/dblobs/dblobs.hooks.ts`: Provides React hooks using dexie-react-hooks for live-query subscriptions to individual assets or scoped asset lists.

## Public interface
- DBLOBS_DEBUG_GC
- _addDBAsset(asset, contextId, scopeId)
- getDBAsset(id)
- getDBAssetsByScopeAndType(assetType, contextId, scopeId)
- transferDBAssetContextScope(id, contextId, scopeId)
- deleteDBAsset(id)
- gcDBAssetsByScope(contextId, scopeId, assetType, keepIds)
- useDBAssetsByScopeAndType(assetType, contextId, scopeId)
- useDBAsset(id)
- addDBImageAsset(scopeId, imageBlob, image)
- getImageAsset(id)
- getImageAssetAsBlobURL(id)
- gcDBImageAssets(contextId, scopeId, keepIds)
- _createAssetObject(assetType, label, data, origin, metadata)
- DBlobAssetType
- DBlobMimeType
- DBlobDBAsset
- DBlobDBContextId
- DBlobDBScopeId
- DBlobAsset
- DBlobImageAsset
- DBlobAudioAsset
- DBlobAssetId

## Dependencies
- dexie
- dexie-react-hooks
- ~/common/util/blobUtils
- ~/common/util/idUtils
- ~/common/util/imageUtils
- ~/common/util/pwaUtils

## AI touchpoints [AI]
- `src/modules/dblobs/dblobs.types.ts`

## Open questions
- getDBAssetsByScopeAndType and useDBAssetsByScopeAndType load all matching records into memory, which contains a TODO to transition to cursor-based or indexed pagination for scale.
