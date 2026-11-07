# Module: src/modules/youtube

Extracts YouTube video metadata, captions/transcripts, and thumbnail images for use in downstream features like the Big-AGI Persona Creator.

## Key files
- `src/modules/youtube/youtube.server.ts`: Server-side logic that parses YouTube watch page HTML, retrieves timed text JSON captions, and processes thumbnail image data.
- `src/modules/youtube/youtube.router.ts`: tRPC router exposing the getTranscript procedure to fetch transcript and metadata by video ID.
- `src/modules/youtube/useYouTubeTranscript.tsx`: React hook and client helper for querying transcript data via tRPC.
- `src/modules/youtube/YouTubeURLInput.tsx`: React UI input component with URL validation and transcript fetch trigger.
- `src/modules/youtube/youtube.utils.ts`: Utility functions for validating YouTube URLs and extracting 11-character video IDs from various URL formats.
- `src/modules/youtube/youtube.types.ts`: Type definitions for YouTube video transcript and metadata structures.

## Public interface
- useYouTubeTranscript(videoID: string | null, onNewTranscript: (transcript: YTVideoTranscript) => void)
- youTubeGetVideoData(videoId: string): Promise<YouTubeVideoData>
- youtubeRouter
- downloadYouTubeVideoData(videoId: string, fetchTextFn: (url: string) => Promise<string>): Promise<YouTubeVideoData>
- isYouTubeDomainURL(testUrl: string): boolean
- extractYoutubeVideoIDFromURL(testYTUrl: string): string | null
- YouTubeURLInput: React.FC<YouTubeURLInputProps>
- YTVideoTranscript
- YouTubeVideoData

## Dependencies
- @tanstack/react-query
- @mui/joy
- @mui/icons-material/YouTube
- zod/v4
- ~/common/util/trpc.client
- ~/server/trpc/trpc.server
- ~/server/trpc/trpc.router.fetchers
- ~/modules/t2i/t2i.server
- ~/common/util/blobUtils
- ~/common/components/InlineError

## AI touchpoints [AI]
- `src/modules/youtube/youtube.router.ts`

## Open questions
- _none_
