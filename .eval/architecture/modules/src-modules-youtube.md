# Module: src/modules/youtube

Fetches and parses YouTube video metadata, captions/transcripts, and thumbnail images for use across features such as the Persona Creator.

## Key files
- `src/modules/youtube/useYouTubeTranscript.tsx`: Provides the client-side data fetching helper youTubeGetVideoData and the useYouTubeTranscript hook via TanStack Query.
- `src/modules/youtube/YouTubeURLInput.tsx`: UI form component for accepting YouTube URLs, validating video IDs, and initiating transcript fetching.
- `src/modules/youtube/youtube.router.ts`: Defines the tRPC router (youtubeRouter.getTranscript) handling server-side caption retrieval, along with reference prompts for persona extraction.
- `src/modules/youtube/youtube.server.ts`: Server-side scraping and parser logic (downloadYouTubeVideoData) that extracts timedtext captions, metadata, and processes thumbnail images.
- `src/modules/youtube/youtube.utils.ts`: URL utilities to detect YouTube hostnames and extract video IDs from various YouTube URL formats.
- `src/modules/youtube/youtube.types.ts`: Type definitions for YouTube video and transcript data.

## Public interface
- export function useYouTubeTranscript(videoID: string | null, onNewTranscript: (transcript: YTVideoTranscript) => void)
- export function youTubeGetVideoData(videoId: string): Promise<YouTubeVideoData>
- export interface YTVideoTranscript
- export const YouTubeURLInput: React.FC<YouTubeURLInputProps>
- export const youtubeRouter
- export function downloadYouTubeVideoData(videoId: string, fetchTextFn: (url: string) => Promise<string>): Promise<YouTubeVideoData>
- export function isYouTubeDomainURL(testUrl: string): boolean
- export function extractYoutubeVideoIDFromURL(testYTUrl: string): string | null
- export interface YouTubeVideoData

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
- The Persona Creator prompt instructions in youtube.router.ts are currently stored in multi-line comments rather than exported constants or active pipeline code; where are these prompts executed?
