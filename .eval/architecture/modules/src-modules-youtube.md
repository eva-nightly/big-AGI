# Module: src/modules/youtube

Fetches and parses YouTube video metadata and captions (transcripts) on the server, providing UI components and hooks for extracting transcripts from YouTube URLs (used by features such as persona creation).

## Key files
- `src/modules/youtube/youtube.server.ts`: Server-side logic for fetching YouTube HTML pages, extracting captions URLs, parsing timedtext JSON format transcripts, and converting thumbnails to base64 Data URLs.
- `src/modules/youtube/youtube.router.ts`: tRPC router definition exposing the getTranscript procedure to fetch video data and captions.
- `src/modules/youtube/youtube.utils.ts`: Client/server utilities for validating YouTube URLs and extracting YouTube video IDs from various URL formats.
- `src/modules/youtube/useYouTubeTranscript.tsx`: React Hook and tRPC client wrapper (youTubeGetVideoData) for querying YouTube transcript data via React Query.
- `src/modules/youtube/YouTubeURLInput.tsx`: React UI component with an input form that extracts a YouTube video ID and triggers transcript retrieval.
- `src/modules/youtube/youtube.types.ts`: Type definitions for YouTube video metadata, thumbnail data, and transcripts.

## Public interface
- export function isYouTubeDomainURL(testUrl: string): boolean
- export function extractYoutubeVideoIDFromURL(testYTUrl: string): string | null
- export function youTubeGetVideoData(videoId: string): Promise<YouTubeVideoData>
- export function useYouTubeTranscript(videoID: string | null, onNewTranscript: (transcript: YTVideoTranscript) => void): { transcript, isFetching, isError, error }
- export const YouTubeURLInput: React.FC<YouTubeURLInputProps>
- export const youtubeRouter: TRPCRouter
- export async function downloadYouTubeVideoData(videoId: string, fetchTextFn: (url: string) => Promise<string>): Promise<YouTubeVideoData>
- export interface YouTubeVideoData
- export interface YTVideoTranscript

## Dependencies
- react
- @tanstack/react-query
- @mui/joy
- @mui/icons-material
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
- The timedtext HTML scraping and regex parsing logic in youtube.server.ts is fragile and dependent on YouTube internal page structures that change frequently.
