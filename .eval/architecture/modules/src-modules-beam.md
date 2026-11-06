# Module: src/modules/beam [AI]

(part 1 of 2) Implements the Beam and Merge multi-model workspace in big-AGI. It manages the parallel generation of responses across multiple LLMs (scatter / rays) and the subsequent synthesis, comparison, or guided integration into a combined output (gather / fusions). (part 2 of 2) Provides state management, configuration presets, and streaming reattachment utilities for the Beam multi-model chat feature, orchestrating scatter-gather LLM runs.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/beam/BeamView.tsx`: Main top-level container component for the Beam feature, coordinating user inputs, scatter grids, gather panes, fusion grids, and keyboard shortcuts.
- `src/modules/beam/scatter/beam.scatter.ts`: State slice and runtime logic for scattering requests across multiple LLM 'rays', managing streaming updates, cancellations, and status transitions.
- `src/modules/beam/gather/beam.gather.ts`: State slice for gathering and fusing ray responses, defining the BFusion data model and methods for creating, modifying, and executing fusions.
- `src/modules/beam/gather/instructions/beam.gather.execution.tsx`: Asynchronous execution engine for fusion instruction pipelines (gather, checklist selection) with streaming intermediate progress.
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`: Factory registry and system/user prompt definitions for standard merge types ('fuse', 'guided', 'eval', 'custom').
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`: Executes single gather instructions against the Aix client, assembling prompt history and managing streaming updates.
- `src/modules/beam/scatter/BeamRay.tsx`: UI card component representing a single ray during scattering, handling model selection, generation controls, and response display.
- `src/modules/beam/gather/Fusion.tsx`: UI card component representing a fusion process, displaying status, instructions, checklist UI, and final output.
- `src/modules/beam/beam.config.ts`: Configuration constants and layout options for Beam scatter and gather operations.
- `src/modules/beam/beam.reattach.ts`: Manages AIX streaming reattachment and upstream task cancellation for beam rays and gather fusions.
- `src/modules/beam/beam.status.ts`: Defines beam run phases, AIX terminal status types, and UI color mapping helpers.
- `src/modules/beam/store-beam_vanilla.ts`: Creates and manages the vanilla Zustand store slice composition for Beam (root slice, scatter slice, gather slice).
- `src/modules/beam/store-beam.hooks.ts`: React hook bindings for consuming the vanilla Beam Zustand store.
- `src/modules/beam/store-module-beam.tsx`: Persisted Zustand store for Beam presets, module-level UI preferences, and conversation open state.

## Public interface
- BeamView(props: { beamStore: BeamStoreApi, isFocused: boolean, isMobile: boolean, showExplainer?: boolean })
- createScatterSlice(set, get, store): ScatterStoreSlice
- createGatherSlice(set, get, store): GatherStoreSlice
- gatherStartFusion(initialFusion, chatMessages, rayMessages, onUpdateBFusion): void
- gatherStopFusion(fusion: BFusion): BFusion
- gatherInputsFromRays(rays: BRay[]): { messages: DMessage[], pendingCount: number }
- gatherInputsWait(beamStore): GatherInputsWait
- findFusionFactory(factoryId?: FFactoryId | null): FusionFactorySpec | null
- BeamUpstreamResume(props: { llmId, generator, isPending, onReattach, onClearHandle })
- BeamCard
- BeamCardNotice
- BeamModelUnavailable
- beamMergeStreamedGuts(prev: DMessage, guts: AixChatGenerateContent_DMessageGuts, completed: boolean): DMessage
- beamReattachStream(args: { llmId: DLLMId, generator: Readonly<DMessageGenerator>, contextName: 'beam-scatter' | 'beam-gather', contextRef: string, mode: AixReattachMode, abortSignal: AbortSignal, onMessageUpdate: (guts: AixChatGenerateContent_DMessageGuts, completed: boolean) => void, onTerminal: (outcome: AixChatGenerateTerminal_LL) => void }): void
- beamDeleteUpstreamOrThrow(llmId: DLLMId, upstreamHandle: Readonly<DMessageGenerator['upstreamHandle']>): Promise<void>
- beamStatusColor(status: BeamStatus): 'danger' | 'warning' | 'neutral' | undefined
- useBeamStore<T>(beamStore: BeamStoreApi, selector: (store: BeamStore) => T): T
- createBeamVanillaStore(): StoreApi<BeamStore>
- useModuleBeamStore
- getBeamCardScrolling(): boolean
- useBeamCardScrolling(): boolean
- useBeamScatterShowLettering(): boolean
- useIsBeamOpenForConversation(conversationId: DConversationId | null): boolean
- updateBeamLastConfig(update: Partial<BeamConfigSnapshot>): void

## Dependencies
- @mui/joy
- @mui/icons-material
- react
- zustand
- ~/modules/aix/client/aix.client
- ~/modules/persona/pmix/pmix
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/components/LLMVendorIconSprite
- ~/common/stores/llms/llms.types
- ~/common/stores/llms/store-llms
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.message.outcome
- ~/common/stores/store-ai
- ~/common/stores/store-ui
- ~/common/stores/store-ux-labs
- ~/common/components/forms/useLLMSelect
- ~/common/components/shortcuts/useGlobalShortcuts
- ~/common/components/ExplainerCarousel
- ~/common/components/GoodTooltip
- ~/common/components/InlineError
- ~/common/components/InlineTextarea
- ~/common/components/TooltipOutlined
- ~/common/render-decay/RenderDecayZone
- ~/common/util/animUtils
- ~/common/util/clipboardUtils
- ~/common/util/dMessageUtils
- ~/common/util/errorUtils
- ~/common/util/idUtils
- ~/common/util/pwaUtils
- zustand/vanilla
- zustand/middleware
- ~/common/stores/llms/store-llms-domains_slice
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
- In GatherInstruction.tsx, a comment notes 'FIXME: there could be an issue with aix.dispatch fusion of assistant messages' regarding the encoding of multiple parallel assistant responses in the chat history.
