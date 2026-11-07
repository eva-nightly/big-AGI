# Module: src/modules/beam [AI]

(part 1 of 2) Implements the Beam multi-model chat workflow, providing UI and execution pipelines for querying multiple LLMs concurrently (Scatter/Rays) and combining, comparing, or synthesizing their responses into a single output (Gather/Fusion). (part 2 of 2) Manages core state, user presets, reattachment streaming plumbing, and status mapping for Beam (multi-model scatter generation and fusion/gather).

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/beam/BeamView.tsx`: Main container view coordinating scatter inputs, ray response grids, and fusion gathering panes.
- `src/modules/beam/scatter/beam.scatter.ts`: Zustand store slice and logic managing parallel generation of LLM candidate responses across multiple rays.
- `src/modules/beam/gather/beam.gather.ts`: Zustand store slice managing fusion states, instructions, model selection, and execution lifecycle for merging rays.
- `src/modules/beam/gather/instructions/beam.gather.execution.tsx`: Execution engine running sequential merge instruction pipelines with abort handling and UI progress updates.
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`: Factory definitions and preset system prompts for fusion modes (Fuse, Guided checklist, Compare/Eval, Custom).
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`: Executes AI synthesis instructions across conversation history and candidate ray outputs using the Aix streaming client.
- `src/modules/beam/gather/beam.gather.inputs.ts`: Collects ready ray responses and manages synchronization/waiting states while rays stream before initiating merge.
- `src/modules/beam/BeamUpstreamResume.tsx`: Handles reconnecting, polling, and managing long-running upstream interaction sessions (such as Gemini deep research).
- `src/modules/beam/store-beam_vanilla.ts`: Combines root, scatter, and gather store slices into a vanilla Zustand store managing the lifecycle, active history, and model configuration of an open Beam session.
- `src/modules/beam/store-module-beam.tsx`: Persisted Zustand store maintaining Beam preset configurations, user preference toggles, last-used configurations, and active per-conversation open flags.
- `src/modules/beam/beam.reattach.ts`: Provides helper functions to re-stream, merge, or cancel upstream LLM runs (such as Gemini Interactions / Deep Research) into chat messages via the AIX client.
- `src/modules/beam/beam.status.ts`: Defines beam run statuses and maps terminal outcomes to UI palette indicator colors.
- `src/modules/beam/store-beam.hooks.ts`: Provides React hooks for consuming the vanilla Beam store.

## Public interface
- BeamView(props: { beamStore, isFocused, isMobile, showExplainer })
- createScatterSlice: StateCreator<ScatterStoreSlice>
- createGatherSlice: StateCreator<GatherStoreSlice>
- gatherStartFusion(initialFusion, chatMessages, rayMessages, onUpdateBFusion)
- gatherStopFusion(fusion)
- FUSION_FACTORIES
- BeamExplainer(props: { onWizardComplete })
- beamMergeStreamedGuts(prev: DMessage, guts: AixChatGenerateContent_DMessageGuts, completed: boolean): DMessage
- beamReattachStream(args: { llmId: DLLMId, generator: Readonly<DMessageGenerator>, contextName: 'beam-scatter' | 'beam-gather', contextRef: string, mode: AixReattachMode, abortSignal: AbortSignal, onMessageUpdate: (guts: AixChatGenerateContent_DMessageGuts, completed: boolean) => void, onTerminal: (outcome: AixChatGenerateTerminal_LL) => void }): void
- beamDeleteUpstreamOrThrow(llmId: DLLMId, upstreamHandle: Readonly<DMessageGenerator['upstreamHandle']>): Promise<void>
- type BeamStatus = 'idle' | 'running' | AixChatGenerateTerminal_LL
- beamStatusColor(status: BeamStatus): 'danger' | 'warning' | 'neutral' | undefined
- type BeamStoreApi = Readonly<StoreApi<BeamStore>>
- useBeamStore<T>(beamStore: BeamStoreApi, selector: (store: BeamStore) => T): T
- createBeamVanillaStore(): StoreApi<BeamStore>
- type BeamStore = RootStoreSlice & GatherStoreSlice & ScatterStoreSlice
- interface RootStoreSlice
- interface BeamConfigSnapshot
- useModuleBeamStore
- getBeamCardScrolling(): boolean
- useBeamCardScrolling(): boolean
- useBeamScatterShowLettering(): boolean
- useIsBeamOpenForConversation(conversationId: DConversationId | null): boolean
- updateBeamLastConfig(update: Partial<BeamConfigSnapshot>): void

## Dependencies
- react
- zustand
- @mui/joy
- @mui/icons-material
- ~/modules/aix/client/aix.client
- ~/modules/persona/pmix/pmix
- ~/common/stores/llms/llms.types
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.message.outcome
- ~/common/components/forms/useLLMSelect
- zustand/vanilla
- zustand/middleware
- ~/common/stores/llms/store-llms-domains_slice
- ~/common/util/idUtils
- ./beam.config
- ./gather/beam.gather
- ./scatter/beam.scatter
- ./gather/instructions/beam.gather.factories

## AI touchpoints [AI]
- `src/modules/beam/gather/FusionInstructionsEditor.tsx`
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`
- `src/modules/beam/gather/instructions/UserInputChecklistInstruction.tsx`
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`
- `src/modules/beam/scatter/beam.scatter.ts`
- `src/modules/beam/beam.reattach.ts`
- `src/modules/beam/store-beam_vanilla.ts`

## Open questions
- _none_
