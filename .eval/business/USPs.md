# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## One chat UI for many models via OpenRouter

Chats with the user through many models via OpenRouter with streaming answers, so developers and power users get a single workspace for many models.

- **Sources:**
  - `About_the_organisation.md`: "Chats with the user through many models via OpenRouter, streaming answers."
  - `About_the_organisation.md`: "AI suite powered by state-of-the-art models and providing advanced AI/AGI functions."
  - `big-agi-business.md`: "Core value: talk to many models through OpenRouter, compare answers side by side (Beam), and keep personas and presets."
  - `big-agi-business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

## Beam multi-model comparison

World-class Beam multi-model chats let users compare answers from several models side by side.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `big-agi-business.md`: "Core value: talk to many models through OpenRouter, compare answers side by side (Beam), and keep personas and presets."
- **Delivered by:**
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

## AI personas and presets

Users keep AI personas and presets (including presets for developers) across their chats.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `big-agi-business.md`: "Core value: talk to many models through OpenRouter, compare answers side by side (Beam), and keep personas and presets."
- **Delivered by:**
  - `src/modules/beam/scatter/BeamScatterPaneDropdown::DialogNamePreset`, matched on name "preset" in DialogNamePreset; module "compare" in module src/modules/beam; path "beam" in src/modules/beam/scatter/BeamScatterPaneDropdown; +9 more
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::Creator`, matched on named by the model while reading the business documents

## Text-to-image and voice

Beyond chat, the suite includes text-to-image generation and voice features.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:**
  - `src/apps/chat/editors/image-generate::runImageGenerationUpdatingState`, matched on name "generation" in runImageGenerationUpdatingState; name "image" in runImageGenerationUpdatingState; module "highlight" in module src/apps; +14 more
  - `src/modules/t2i/gemini/geminiImageModels::geminiImageResolveForGeneration`, matched on name "generation" in geminiImageResolveForGeneration; name "image" in geminiImageResolveForGeneration; module "execution" in module src/modules/t2i; +3 more
  - `src/apps/draw/DrawCreate::DrawCreate`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines`, matched on named by the model while reading the business documents

## Fast streaming with clear failure messages

Key promise: fast streaming answers and a clear error message when a model is unavailable or fails.

- **Sources:**
  - `About_the_organisation.md`: "Right means a helpful, accurate, on-topic answer that follows the prompt and the chosen persona, and a clear message when a model fails."
  - `About_the_organisation.md`: "Chats with the user through many models via OpenRouter, streaming answers."
  - `big-agi-business.md`: "Key promise: fast streaming answers, clear errors when a model is unavailable."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::BlockPartPlaceholder`, matched on named by the model while reading the business documents

## Code highlighting/execution and PDF import

The workspace includes code highlighting and execution, PDF import, response streaming and more.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:**
  - `src/common/stores/chat/chat.fragments::create_CodeExecutionResponse_ContentFragment`, matched on name "execution" in create_CodeExecutionResponse_ContentFragment; name "response" in create_CodeExecutionResponse_ContentFragment; name "code" in create_CodeExecutionResponse_ContentFragment

## Open source, independent, user-funded

An independent, non-VC-funded MIT open-source project where optional Pro subscriptions ($10.99/mo) fund development for everyone, including the free and open-source tiers.

- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `big-agi-business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace."
  - `big-agi-business.md`: "Revenue: an optional Pro subscription funds development; the free tier stays open source."
  - `big-agi-business.md`: "Team: a small independent team with community contributors."
- **Delivered by:** _no linked components_

## No sign-in required

The server reads the OpenRouter key itself; users do not need to sign in.

- **Sources:**
  - `big-agi-business.md`: "The server reads OPENROUTER_API_KEY; no user sign-in is needed."
- **Delivered by:** _no linked components_

## Coverage

- **Statements linked to code:** 10 of 16 · rule: 4/8 · usp: 6/8
- **Artifacts reached from the business:** 15 of 4903 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Common: 1 of 1368
- Public: 0 of 834
- Tools: 0 of 471
- Llms: 1 of 465
- Chat: 5 of 403
- Aix: 0 of 340
- Blocks: 0 of 159
- Speex: 1 of 108
- Beam: 2 of 103
- News: 0 of 89
- T2i: 2 of 63
- Trade: 0 of 58
- Asrx: 1 of 50
- Aifn: 0 of 47
- Settings modal: 0 of 46
- Draw: 1 of 35
- Call: 0 of 29
- Personas: 1 of 26
- Llm capabilities: 0 of 24
- Trpc: 0 of 24
- Dblobs: 0 of 19
- Google: 0 of 19
- Browse: 0 of 18
- Other: 0 of 17
- Youtube: 0 of 15
- Link chat: 0 of 13
- Pages: 0 of 12
- Posthog: 0 of 9
- 3rdparty: 0 of 6
- App: 0 of 6
- Backend: 0 of 6
- Apps: 0 of 4
- Persona: 0 of 4
- Tokens: 0 of 4
- Diff: 0 of 3
- .claude: 0 of 2
- Document: 0 of 2
- Prisma: 0 of 1
- Workspace: 0 of 1

### Linked to nothing (6)

- **usp** Open source, independent, user-funded: Everything that matched is shared plumbing rather than something a business statement can be about: isKimiCodeSubscriptionKey (its name says it converts or tests a value, which decides nothing on its own).
- **usp** No sign-in required: 1 candidate(s) were offered and the model confirmed none of them.
- **rule** The free tier stays open source (MIT); Pro is optional.: This rule says of itself that no machine can check it, so no code implements it and anything the words matched would be a coincidence. Mark it verifiable to have it searched for.
- **rule** Pro subscription is priced at $10.99/mo.: This rule says of itself that no machine can check it, so no code implements it and anything the words matched would be a coincidence. Mark it verifiable to have it searched for.
- **rule** No user sign-in is required to use the product.: 1 candidate(s) were offered and the model confirmed none of them.
- **rule** Postgres storage is optional and is not used in our deployment.: No artifact NAME, path, route or endpoint in the codebase matches any word in it. It may be a rule about how people work rather than about what the product does.

## Gaps

_None. All material was sourced._
