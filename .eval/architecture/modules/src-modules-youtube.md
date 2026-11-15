# Module: src/modules/youtube

Provides utilities, tRPC backend endpoints, React hooks, and UI input components for extracting YouTube video metadata, thumbnails, and captions/transcripts (primarily used to construct AI Persona character sheets).

## Key files
- `src/modules/youtube/youtube.router.ts`: tRPC router exposing the `getTranscript` procedure to fetch YouTube video metadata and captions on the server side.
- `src/modules/youtube/youtube.server.ts`: Server-side logic for scraping YouTube video page HTML, parsing captions/timedtext JSON, and downloading and converting video thumbnail images.
- `src/modules/youtube/useYouTubeTranscript.tsx`: React hook and asynchronous API client helper (`youTubeGetVideoData`) to fetch YouTube transcripts via React Query and tRPC.
- `src/modules/youtube/YouTubeURLInput.tsx`: React form component accepting a YouTube URL and triggering transcript retrieval.
- `src/modules/youtube/youtube.utils.ts`: URL helper functions for validating YouTube domains and extracting 11-character video IDs across various URL patterns.
- `src/modules/youtube/youtube.types.ts`: TypeScript type definitions for YouTube video data structures.

## Public interface
- youtubeRouter (tRPC router)
- useYouTubeTranscript(videoID, onNewTranscript)
- youTubeGetVideoData(videoId)
- YouTubeURLInput
- extractYoutubeVideoIDFromURL(testYTUrl)
- isYouTubeDomainURL(testUrl)
- downloadYouTubeVideoData(videoId, fetchTextFn)
- type YouTubeVideoData
- type YTVideoTranscript

## Dependencies
- @tanstack/react-query
- @mui/joy
- @mui/icons-material/YouTube
- zod/v4
- ~/common/util/trpc.client
- ~/common/components/InlineError
- ~/common/util/blobUtils
- ~/modules/t2i/t2i.server
- ~/server/trpc/trpc.server
- ~/server/trpc/trpc.router.fetchers

## AI touchpoints [AI]
- `src/modules/youtube/youtube.router.ts`

## Open questions
- _none_
