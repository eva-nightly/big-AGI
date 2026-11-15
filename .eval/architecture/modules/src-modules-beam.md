# Module: src/modules/beam [AI]

(part 1 of 2) Implements the Beam feature in Big-AGI, enabling multi-model exploration (scatter/ray generation) and iterative multi-response synthesis/combination (gather/fusion) with model selection, prompt factories, checklist selection, and streaming execution. (part 2 of 2) Implements the Beam multi-model comparison and merge workspace, coordinating parallel LLM generation (scatter rays) and combination/fusion (gather fusions) alongside persistent configurations and presets.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/beam/gather/beam.gather.ts`: State slice, fusion creation, and lifecycle management for gather/fusion instances
- `src/modules/beam/gather/beam.gather.inputs.ts`: Input gathering and synchronization logic (waiting for ray streams to settle before fusion)
- `src/modules/beam/gather/instructions/beam.gather.execution.tsx`: Instruction pipeline execution runner for multi-step fusion
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`: Factory presets and prompt definitions for fusion strategies (Fuse, Guided Checklist, Compare/Eval)
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`: Execution step for LLM generation during gather/fusion via Aix client
- `src/modules/beam/gather/instructions/UserInputChecklistInstruction.tsx`: Interactive user criteria checklist step in guided multi-stage fusions
- `src/modules/beam/scatter/beam.scatter.ts`: State slice and parallel ray generation logic using the Aix client
- `src/modules/beam/scatter/BeamScatterPane.tsx`: UI control pane for configuring ray count, starting/stopping scatter, and managing presets
- `src/modules/beam/gather/BeamGatherPane.tsx`: UI control pane for selecting merge fusion strategies and configuring the merge LLM
- `src/modules/beam/BeamUpstreamResume.tsx`: UI component managing reattachment and deletion of upstream long-running LLM runs (e.g. Gemini deep research)
- `src/modules/beam/BeamView.tsx`: Main React view component rendering the scatter/gather panes, rays grid, input history, shortcuts, and auto-merge lifecycle
- `src/modules/beam/beam.config.ts`: Central configuration constants for Beam scatter/gather parameters, UI styling presets, and ray count limits
- `src/modules/beam/beam.reattach.ts`: Shared AIX reattach and streaming integration for managing and updating upstream-stored LLM interaction streams and message guts
- `src/modules/beam/beam.status.ts`: Type definitions and color resolvers mapping Beam execution phases and AIX terminal outcomes to UI colors
- `src/modules/beam/store-beam.hooks.ts`: React hooks and types for subscribing to per-instance Beam vanilla Zustand stores
- `src/modules/beam/store-beam_vanilla.ts`: Vanilla Zustand store composer combining root lifecycle, scatter, and gather state slices, including initial model heuristic selection
- `src/modules/beam/store-module-beam.tsx`: Persisted global Zustand store managing Beam presets, configuration snapshots, and UI toggles across conversations

## Public interface
- createScatterSlice (Zustand state creator for scatter)
- createGatherSlice (Zustand state creator for gather)
- reInitScatterStateSlice
- reInitGatherStateSlice
- gatherStartFusion
- gatherStopFusion
- gatherInputsFromRays
- gatherInputsWait
- beamStoreGatherInputsNextCount
- findFusionFactory
- FUSION_FACTORIES
- BeamScatterPane
- BeamScatterInput
- BeamRayGrid
- BeamRay
- BeamGatherPane
- BeamFusionGrid
- Fusion
- BeamCard
- BeamExplainer
- BeamUpstreamResume
- BeamView
- createBeamVanillaStore
- useBeamStore
- useModuleBeamStore
- getBeamCardScrolling
- useBeamCardScrolling
- useBeamScatterShowLettering
- useIsBeamOpenForConversation
- updateBeamLastConfig
- beamMergeStreamedGuts
- beamReattachStream
- beamDeleteUpstreamOrThrow
- beamStatusColor
- BEAM_BTN_SX
- BEAM_INVERT_BACKGROUND
- BEAM_PANE_ZINDEX
- BEAM_SHOW_REASONING_ICON
- SCATTER_COLOR
- SCATTER_RAY_DEF
- SCATTER_RAY_MAX
- SCATTER_RAY_MIN
- SCATTER_RAY_PRESETS
- GATHER_COLOR

## Dependencies
- react
- zustand
- @mui/joy
- @mui/icons-material
- ~/modules/aix/client/aix.client
- ~/modules/persona/pmix/pmix
- ~/common/stores/llms/llms.types
- ~/common/stores/llms/store-llms
- ~/common/stores/chat/chat.message
- ~/common/stores/chat/chat.fragments
- ~/common/stores/chat/chat.conversation
- ~/common/stores/chat/chat.message.outcome
- ~/common/stores/store-ai
- ~/common/stores/store-ux-labs
- ~/common/components/forms/useLLMSelect
- ~/common/components/ExplainerCarousel
- ~/common/components/GoodTooltip
- ~/common/components/InlineError
- ~/common/components/InlineTextarea
- ~/common/components/TooltipOutlined
- ~/common/util/animUtils
- ~/common/util/clipboardUtils
- ~/common/util/dMessageUtils
- ~/common/util/errorUtils
- ~/common/util/idUtils
- ~/common/util/pwaUtils
- ~/modules/blocks/OverlayButton
- ~/common/stores/llms/store-llms-domains_slice
- ~/common/stores/store-ui
- ~/common/components/shortcuts/useGlobalShortcuts
- ~/common/render-decay/RenderDecayZone

## AI touchpoints [AI]
- `src/modules/beam/gather/FusionInstructionsEditor.tsx`
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`
- `src/modules/beam/gather/instructions/UserInputChecklistInstruction.tsx`
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`
- `src/modules/beam/scatter/beam.scatter.ts`
- `src/modules/beam/BeamUpstreamResume.tsx`
- `src/modules/beam/beam.reattach.ts`
- `src/modules/beam/store-beam_vanilla.ts`

## Open questions
- How are individual scatter rays and gather fusion factories dynamically populated and invoked during execution (defined within the uninspected gather/ and scatter/ subdirectories)?
