# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Multi-model chat through one interface

Chat with many language models in one place through a single interface; the user asks a question or gives a task and the models, provided via OpenRouter, answer.

- **Sources:**
  - `About_the_organisation.md`: "It is a multi-model chat assistant: the user asks a question or gives a task, and the models (via OpenRouter) answer."
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat application for people who want to use several language models in one place."
  - `business.md`: "Chat with many models through one interface; here, models come via OpenRouter."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

## Beam multi-model comparison and fusion

Beam sends one prompt to several models at once, compares them side by side, and merges the best answer.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `About_the_organisation.md`: "A good answer is correct, relevant to the question, complete, and streams without errors; Beam compares several models side by side."
  - `business.md`: "Beam: send one prompt to several models at once and merge the best answer."
- **Delivered by:**
  - `src/modules/beam/scatter/BeamScatterPaneDropdown::DialogNamePreset`, matched on name "preset" in DialogNamePreset; module "fusion" in module src/modules/beam; module "beam" in module src/modules/beam; +13 more
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

## AI personas

The suite includes AI personas that users can select and create.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::Creator`, matched on named by the model while reading the business documents

## Text-to-image generation

Built-in text-to-image / image generation alongside chat.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/apps/chat/editors/image-generate::runImageGenerationUpdatingState`, matched on name "generation" in runImageGenerationUpdatingState; name "image" in runImageGenerationUpdatingState; module "highlight" in module src/apps; +15 more
  - `src/modules/t2i/gemini/geminiImageModels::geminiImageResolveForGeneration`, matched on name "generation" in geminiImageResolveForGeneration; name "image" in geminiImageResolveForGeneration; module "alongside" in module src/modules/t2i; +3 more
  - `src/apps/draw/DrawCreate::DrawCreate`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines`, matched on named by the model while reading the business documents

## Voice

Voice features (speech) are part of the suite.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/modules/speex/protocols/webspeech/webspeech.client::_selectBestVoice`, matched on name "best" in _selectBestVoice; name "voice" in _selectBestVoice; module "speech" in module src/modules/speex; +5 more
  - `src/modules/speex/protocols/webspeech/webspeech.client::webspeechHBestVoiceDeferred`, matched on name "best" in webspeechHBestVoiceDeferred; name "voice" in webspeechHBestVoiceDeferred; module "speech" in module src/modules/speex; +5 more
  - `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines`, matched on named by the model while reading the business documents

## Developer-oriented chat features

Response streaming, code highlighting and execution, PDF import, and presets for developers.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/common/stores/chat/chat.fragments::create_CodeExecutionResponse_ContentFragment`, matched on name "execution" in create_CodeExecutionResponse_ContentFragment; name "response" in create_CodeExecutionResponse_ContentFragment; name "code" in create_CodeExecutionResponse_ContentFragment

## Independent, open-source, user-funded

An independent, non-VC-funded MIT open-source project; optional Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers.

- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat application for people who want to use several language models in one place."
  - `business.md`: "Free and open source; optional paid Pro subscription at $10.99/month funds development."
- **Delivered by:** _no linked components_

## Coverage

- **Statements linked to code:** 11 of 14 · rule: 5/7 · usp: 6/7
- **Artifacts reached from the business:** 15 of 4901 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Common: 1 of 1368
- Public: 0 of 834
- Tools: 0 of 469
- Llms: 1 of 465
- Chat: 3 of 403
- Aix: 0 of 340
- Blocks: 0 of 159
- Speex: 3 of 108
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

### Linked to nothing (3)

- **usp** Independent, open-source, user-funded: 2 candidate(s) were offered and the model confirmed none of them.
- **rule** The optional Pro subscription is priced at $10.99 per month.: 2 candidate(s) were offered and the model confirmed none of them.
- **rule** The product is free and open source under the MIT license.: 2 candidate(s) were offered and the model confirmed none of them.

## Gaps

_None. All material was sourced._
