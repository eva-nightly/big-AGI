# Module: src/modules/youtube

Provides utilities, server routines, a tRPC router, and React UI components to parse YouTube URLs, scrape and parse video captions/transcripts and thumbnails, and make them available to workspace features like the Big-AGI Persona Creator.

## Key files
- `src/modules/youtube/useYouTubeTranscript.tsx`: Client hook useYouTubeTranscript and async helper youTubeGetVideoData for fetching video transcripts via tRPC.
- `src/modules/youtube/youtube.router.ts`: tRPC router defining the public getTranscript procedure and outlining persona character sheet creation prompts.
- `src/modules/youtube/youtube.server.ts`: Server-side video page scraper and timed-text caption parser that formats video metadata and converts thumbnails to base64 data URLs.
- `src/modules/youtube/youtube.types.ts`: TypeScript type definitions for YouTube video data and thumbnail structures.
- `src/modules/youtube/youtube.utils.ts`: URL helper functions for domain pattern verification and video ID extraction from various YouTube URL formats.
- `src/modules/youtube/YouTubeURLInput.tsx`: React UI component with an input form that extracts video IDs and triggers transcript fetching.

## Public interface
- useYouTubeTranscript(videoID, onNewTranscript)
- youTubeGetVideoData(videoId)
- YTVideoTranscript
- youtubeRouter
- downloadYouTubeVideoData(videoId, fetchTextFn)
- YouTubeVideoData
- isYouTubeDomainURL(testUrl)
- extractYoutubeVideoIDFromURL(testYTUrl)
- YouTubeURLInput

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
- The Persona Creator prompts documented in comments within youtube.router.ts are not directly executed within this module; how are they ingested by downstream persona modules?
- Direct client-side transcript fetching is disabled (USE_FRONTEND_FETCH = false); is server-side scraping intended to remain the sole retrieval path despite potential YouTube IP-blocking risks?
