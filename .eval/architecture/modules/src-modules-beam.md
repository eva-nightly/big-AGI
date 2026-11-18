# Module: src/modules/beam [AI]

(part 1 of 2) Implements Big-AGI's Beam multi-model workflow, enabling users to scatter a single chat prompt across multiple LLMs simultaneously (Rays) and compare, select, or gather/merge their responses into a single cohesive response (Fusions) using customizable synthesis strategies and interactive guidance. (part 2 of 2) Implements the core orchestration, state management, configuration, and primary view for the Beam multi-model comparison and fusion feature, managing both scattering prompts across multiple LLMs (rays) and gathering/fusing responses.

_This module does not fit in one model call, so it was read in 2 parts and their summaries were combined without a further model call._

## Key files
- `src/modules/beam/scatter/beam.scatter.ts`: Manages ray scatter state, creation, and parallel execution of AI chat generation streams across multiple models.
- `src/modules/beam/gather/beam.gather.ts`: Defines Zustand state slice and lifecycle controls for fusion merges, waiting for ray inputs, and custom instruction sets.
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`: Specifies predefined fusion presets (Fuse, Guided checklist, Compare/Eval) including system and user prompt templates.
- `src/modules/beam/gather/instructions/beam.gather.execution.tsx`: Executes multi-step sequential instruction chains for merging ray outputs into a final synthesized message.
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`: Handles LLM invocation for synthesis instructions with context sandwiching, prompt interpolation, and streaming updates.
- `src/modules/beam/scatter/BeamScatterPane.tsx`: UI controls for setting ray counts, triggering batch scatter runs, and managing beam presets.
- `src/modules/beam/gather/BeamGatherPane.tsx`: UI toolbar for choosing merge models and selecting fusion strategies.
- `src/modules/beam/gather/Fusion.tsx`: Card component rendering fusion progress, editable prompts, checklist selection, and resulting merged message.
- `src/modules/beam/scatter/BeamRay.tsx`: Card component displaying an individual model ray response, status controls, and model selectors.
- `src/modules/beam/BeamView.tsx`: Main view component rendering the input history, scatter controls, ray response grid, action bars, and gather fusion panels
- `src/modules/beam/store-beam_vanilla.ts`: Vanilla Zustand store factory combining root, scatter, and gather state slices for an active Beam session
- `src/modules/beam/store-module-beam.tsx`: Persisted global Zustand store managing user Beam presets, default configurations, and conversation-level open states
- `src/modules/beam/beam.reattach.ts`: Reattachment utilities to stream or recover upstream LLM runs into Beam message instances via AIX
- `src/modules/beam/beam.config.ts`: Configuration constants defining ray limits, presets, placeholders, and UI theme properties
- `src/modules/beam/beam.status.ts`: Status definitions and UI color mappings for Beam rays and fusions
- `src/modules/beam/store-beam.hooks.ts`: React hook bindings for interacting with the vanilla Beam store instance

## Public interface
- createScatterSlice
- createGatherSlice
- gatherStartFusion
- gatherStopFusion
- gatherInputsFromRays
- gatherInputsWait
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
- beamReattachStream
- beamDeleteUpstreamOrThrow
- beamMergeStreamedGuts
- beamStatusColor
- getBeamCardScrolling
- useBeamCardScrolling
- useBeamScatterShowLettering
- useIsBeamOpenForConversation
- updateBeamLastConfig

## Dependencies
- react
- zustand
- @mui/joy
- @mui/icons-material
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
- ~/common/stores/store-ux-labs
- ~/common/stores/store-ai
- ~/common/components/forms/useLLMSelect
- ~/common/components/forms/FormLabelStart
- ~/common/components/GoodTooltip
- ~/common/components/InlineError
- ~/common/components/InlineTextarea
- ~/common/components/TooltipOutlined
- ~/common/components/ExplainerCarousel
- ~/common/util/animUtils
- ~/common/util/clipboardUtils
- ~/common/util/errorUtils
- ~/common/util/idUtils
- ~/common/util/dMessageUtils
- ~/common/util/pwaUtils
- @mui/icons-material/ContentCopy
- @mui/icons-material/Telegram
- ~/common/components/shortcuts/useGlobalShortcuts
- ~/common/render-decay/RenderDecayZone
- ~/common/stores/llms/store-llms-domains_slice
- ~/common/stores/store-ui
- ~/modules/blocks/OverlayButton

## AI touchpoints [AI]
- `src/modules/beam/gather/FusionInstructionsEditor.tsx`
- `src/modules/beam/gather/instructions/GatherInstruction.tsx`
- `src/modules/beam/gather/instructions/UserInputChecklistInstruction.tsx`
- `src/modules/beam/gather/instructions/beam.gather.factories.ts`
- `src/modules/beam/scatter/beam.scatter.ts`
- `src/modules/beam/gather/instructions/beam.gather.execution.tsx`
- `src/modules/beam/beam.reattach.ts`
- `src/modules/beam/store-beam_vanilla.ts`

## Open questions
- _none_
