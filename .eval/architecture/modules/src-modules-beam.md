# Module: src/modules/beam [AI]

(part 1 of 2) Implements the Beam and Merge multi-model comparison and synthesis interface, allowing users to scatter a query across multiple AI models (Rays) in parallel and gather/synthesize the results into coherent responses (Fusions) using configurable prompt factories and interactive workflows. (part 2 of 2) Manages core state, configuration presets, lifecycle actions, status styling, and AIX reattachment streaming for the Beam multi-model chat feature, which compares responses across multiple LLMs side by side (scatter) and fuses them into a combined response (gather).

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/beam/BeamView.tsx`: Top-level layout and controller coordinating the Beam scatter inputs, ray grid, and merge/fusion workflow
- `src/modules/beam/scatter/beam.scatter.ts`: Zustand state creator and execution logic for scattering generation across parallel model rays
- `src/modules/beam/gather/beam.gather.ts`: Zustand state creator and lifecycle management for fusion and merge workflows
- `src/modules/beam/gather/instructions/beam.gather.execution.tsx`: Sequentially executes async merge instruction pipelines, managing intermediate message states and abort controllers
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`: Defines prompt templates and instruction pipelines for merge types such as Fuse, Guided (checklist), and Compare (eval table)
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`: Prepares and executes LLM generation calls for gather steps, assembling system and history messages and filtering reasoning/thinking fragments
- `src/modules/beam/gather/instructions/UserInputChecklistInstruction.tsx`: Interactive instruction handler that parses previous model outputs into a user checklist and pipes chosen options to subsequent steps
- `src/modules/beam/gather/beam.gather.inputs.ts`: Manages merge input extraction from rays and handles asynchronous waits while ray streaming finishes
- `src/modules/beam/scatter/BeamRay.tsx`: UI card component displaying a single ray's model selector, controls, streaming message, and upstream resume options
- `src/modules/beam/gather/Fusion.tsx`: UI card component representing a merge fusion instance with prompt editor, status controls, and action buttons
- `src/modules/beam/beam.reattach.ts`: Handles re-streaming and deletion of upstream-stored AI runs (e.g., Gemini Interactions / Deep Research) for Beam scatter rays and gather fusions via AIX facade
- `src/modules/beam/beam.status.ts`: Defines the Beam status type hierarchy and maps terminal execution outcomes to UI color styles
- `src/modules/beam/store-beam_vanilla.ts`: Creates the unified vanilla Zustand store slice combining root beam state with scatter and gather slices, handling Beam lifecycle initialization, LLM selection heuristics, and conversation validation
- `src/modules/beam/store-beam.hooks.ts`: Provides React hooks for consuming the vanilla Beam store instances
- `src/modules/beam/store-module-beam.tsx`: Provides persisted Zustand store managing global Beam presets, active configurations, UI toggle preferences, and per-conversation open state

## Public interface
- BeamView(props: { beamStore: BeamStoreApi, isFocused: boolean, isMobile: boolean, showExplainer?: boolean })
- createScatterSlice: StateCreator<RootStoreSlice & ScatterStoreSlice & GatherStoreSlice, [], [], ScatterStoreSlice>
- createGatherSlice: StateCreator<RootStoreSlice & ScatterStoreSlice & GatherStoreSlice, [], [], GatherStoreSlice>
- gatherStartFusion(initialFusion: Readonly<BFusion>, chatMessages: DMessage[], rayMessages: DMessage[], onUpdateBFusion: (update: FusionUpdateOrFn) => void): void
- gatherStopFusion(fusion: BFusion): BFusion
- gatherInputsFromRays(rays: BRay[]): { messages: DMessage[], pendingCount: number }
- gatherInputsWait(beamStore: Pick<StoreApi<{ rays: BRay[] }>, 'subscribe'>): GatherInputsWait
- beamStoreGatherInputsNextCount({ rays }: { rays: BRay[] }): number
- findFusionFactory(factoryId?: FFactoryId | null): FusionFactorySpec | null
- fusionCardTitle(factory: FusionFactorySpec, nextCount: number, doneCount: number | undefined): string
- executeGatherInstruction(_i: GatherInstruction, inputs: ExecutionInputState, prevStepOutput: string): Promise<string>
- executeUserInputChecklistInstruction(_i: UserInputChecklistInstruction, inputs: ExecutionInputState, prevStepOutput: string): Promise<string>
- parseTextToChecklist(text: string, relaxMatch: boolean): UserChecklistOption[]
- beamMergeStreamedGuts(prev: DMessage, guts: AixChatGenerateContent_DMessageGuts, completed: boolean): DMessage
- beamReattachStream(args: { llmId: DLLMId, generator: Readonly<DMessageGenerator>, contextName: 'beam-scatter' | 'beam-gather', contextRef: string, mode: AixReattachMode, abortSignal: AbortSignal, onMessageUpdate: (guts: AixChatGenerateContent_DMessageGuts, completed: boolean) => void, onTerminal: (outcome: AixChatGenerateTerminal_LL) => void }): void
- beamDeleteUpstreamOrThrow(llmId: DLLMId, upstreamHandle: Readonly<DMessageGenerator['upstreamHandle']>): Promise<void>
- type BeamStatus = 'idle' | 'running' | AixChatGenerateTerminal_LL
- beamStatusColor(status: BeamStatus): 'danger' | 'warning' | 'neutral' | undefined
- createBeamVanillaStore(): StoreApi<BeamStore>
- useBeamStore<T>(beamStore: BeamStoreApi, selector: (store: BeamStore) => T): T
- useModuleBeamStore: StoreApi<ModuleBeamStore>
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
- ~/modules/llms/vendors/vendors.registry
- ~/modules/llms/components/LLMVendorIconSprite
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.message.outcome
- ~/common/stores/llms/llms.types
- ~/common/stores/llms/store-llms
- ~/common/stores/store-ai
- ~/common/stores/store-ux-labs
- ~/common/stores/store-ui
- ~/common/components/forms/useLLMSelect
- ~/common/components/ExplainerCarousel
- ~/common/components/GoodTooltip
- ~/common/components/TooltipOutlined
- ~/common/components/InlineError
- ~/common/components/InlineTextarea
- ~/common/components/shortcuts/useGlobalShortcuts
- ~/common/util/animUtils
- ~/common/util/clipboardUtils
- ~/common/util/dMessageUtils
- ~/common/util/errorUtils
- ~/common/util/abortUtils
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
- _none_
