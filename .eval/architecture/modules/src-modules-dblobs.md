# Module: src/modules/dblobs [AI]

Provides client-side IndexedDB storage, React live query hooks, and utility methods for storing, retrieving, and garbage collecting large media blobs (such as images and audio) via Dexie.

## Key files
- `src/modules/dblobs/dblobs.db.ts`: Initializes the BigAgiDB Dexie instance and exposes low-level CRUD and garbage-collection methods for DBlob assets.
- `src/modules/dblobs/dblobs.hooks.ts`: Exports Dexie live query React hooks (useDBAssetsByScopeAndType, useDBAsset) for reactive database queries.
- `src/modules/dblobs/dblobs.images.ts`: Provides image-specific blob utilities including image ingestion with auto-generated 256px thumbnails, Blob URL generation, and scope-based image GC.
- `src/modules/dblobs/dblobs.types.ts`: Defines core TypeScript data structures, origin types (user vs generated), MIME types, and factory functions for dblob assets.

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
- ~/common/util/pwaUtils
- ~/common/util/blobUtils
- ~/common/util/imageUtils
- ~/common/util/idUtils

## AI touchpoints [AI]
- `src/modules/dblobs/dblobs.types.ts`

## Open questions
- _none_
