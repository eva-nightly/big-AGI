# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Multi-model chat from one interface

Users ask a question and pick which model answers, talking to many models via OpenRouter and other providers from a single workspace.

- **Sources:**
  - `About_the_organisation.md`: "A multi-model chat: the user asks a question and picks a model through OpenRouter."
  - `business.md`: "Users talk to many models (via OpenRouter and others) from one interface."
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace for power users and small teams."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsConfiguratorModal::ModelsConfiguratorModal`, matched on named by the model while reading the business documents

## Beam side-by-side model comparison and merge

Beam lets users compare answers from several models side by side and merge the best one into a single response.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Beam lets users compare answers from several models side by side and merge the best one."
- **Delivered by:**
  - `src/modules/beam/beam.reattach::beamMergeStreamedGuts`, matched on name "merge" in beamMergeStreamedGuts; name "beam" in beamMergeStreamedGuts; module "preset" in module src/modules/beam; +11 more
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents
  - `src/modules/beam/gather/FusionInstructionsEditor::EditableInstruction`, matched on named by the model while reading the business documents
  - `src/modules/beam/gather/FusionInstructionsEditor::EditableChatInstructionPrompt`, matched on named by the model while reading the business documents

## AI personas

Personas give the assistant a role and a tone.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Personas give the assistant a role and a tone; conversations are stored locally in the browser."
- **Delivered by:**
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::Creator`, matched on named by the model while reading the business documents

## Broad AI suite beyond chat

Includes text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, and AGI functions powered by state-of-the-art models.

- **Sources:**
  - `About_the_organisation.md`: "AI suite powered by state-of-the-art models and providing advanced AI/AGI functions."
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:**
  - `src/modules/speex/protocols/webspeech/webspeech.client::_selectBestVoice`, matched on name "best" in _selectBestVoice; name "voice" in _selectBestVoice; module "multi" in module src/modules/speex; +3 more
  - `src/common/stores/chat/chat.fragments::create_CodeExecutionResponse_ContentFragment`, matched on name "execution" in create_CodeExecutionResponse_ContentFragment; name "response" in create_CodeExecutionResponse_ContentFragment; name "code" in create_CodeExecutionResponse_ContentFragment
  - `src/apps/draw/DrawCreate::DrawCreate`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines`, matched on named by the model while reading the business documents

## Open-source and independent

MIT-licensed, independent, non-VC-funded project; the core stays free and open-source.

- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace for power users and small teams."
  - `business.md`: "Revenue: optional Pro subscription at $10.99/month funds development; the core stays free."
- **Delivered by:** _no linked components_

## Optional Pro subscription funds everyone

Pro subscriptions at $10.99/mo fund development for all tiers, including the free and open-source tiers.

- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Revenue: optional Pro subscription at $10.99/month funds development; the core stays free."
- **Delivered by:** _no linked components_

## Local-first, no sign-in

Conversations are stored locally in the browser and no sign-in is required; the server reads OPENROUTER_API_KEY.

- **Sources:**
  - `business.md`: "Personas give the assistant a role and a tone; conversations are stored locally in the browser."
  - `business.md`: "The server reads OPENROUTER_API_KEY; no sign-in is required."
- **Delivered by:** _no linked components_

## Coverage

- **Statements linked to code:** 10 of 18 · rule: 6/11 · usp: 4/7
- **Artifacts reached from the business:** 18 of 4901 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Common: 1 of 1368
- Public: 0 of 834
- Tools: 0 of 469
- Llms: 3 of 465
- Chat: 4 of 403
- Aix: 0 of 340
- Blocks: 0 of 159
- Speex: 2 of 108
- Beam: 4 of 103
- News: 0 of 89
- T2i: 1 of 63
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

### Linked to nothing (8)

- **usp** Open-source and independent: 2 candidate(s) were offered and the model confirmed none of them.
- **usp** Optional Pro subscription funds everyone: 2 candidate(s) were offered and the model confirmed none of them.
- **usp** Local-first, no sign-in: 2 candidate(s) were offered and the model confirmed none of them.
- **rule** The core product stays free; Pro subscription is optional.: This rule says of itself that no machine can check it, so no code implements it and anything the words matched would be a coincidence. Mark it verifiable to have it searched for.
- **rule** Conversations are stored locally in the browser.: 1 candidate(s) were offered and the model confirmed none of them.
- **rule** API keys must never be leaked.: The only words that matched a name, path or route are too short to mean one thing (api, key, leak), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **rule** Conversations must not be lost.: 1 candidate(s) were offered and the model confirmed none of them.
- **rule** Support is community-driven through GitHub issues and Discord.: This rule says of itself that no machine can check it, so no code implements it and anything the words matched would be a coincidence. Mark it verifiable to have it searched for.

## Gaps

_None. All material was sourced._
