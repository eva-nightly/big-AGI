# Module: src/modules/dblobs [AI]

Manages client-side IndexedDB persistence for large assets (such as images and audio blobs) using Dexie, providing reactive query hooks, thumbnail generation, retrieval, and garbage collection.

## Key files
- `src/modules/dblobs/dblobs.db.ts`: Defines the Dexie database (BigAgiDB), table schema, indexes, and basic CRUD/garbage collection operations.
- `src/modules/dblobs/dblobs.hooks.ts`: Provides React live query hooks (useLiveQuery) to observe assets by ID or by scope and type.
- `src/modules/dblobs/dblobs.images.ts`: Implements image-specific blob ingestion, automatic thumbnail generation (256px), and URL conversion helpers.
- `src/modules/dblobs/dblobs.types.ts`: Defines TypeScript interfaces, enums, origins (user/generated), and constructors for DB assets.

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
- DBlobAsset
- DBlobDBAsset
- DBlobDBContextId
- DBlobDBScopeId
- DBlobImageAsset
- DBlobAudioAsset
- DBlobAssetId
- DBlobAssetType
- DBlobMimeType

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
- How does the application trigger persistent storage requests (storageUtils.ts referenced in comments) to prevent browser eviction of IndexedDB contents?
- When will large dataset queries be migrated to cursor/index-based paging instead of full in-memory loading as noted in TODO comments?
