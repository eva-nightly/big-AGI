# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Multi-model chat from one interface

Users talk to several large language models from a single web interface, answered through OpenRouter models.

- **Sources:**
  - `About_the_organisation.md`: "It answers the user's chat messages through OpenRouter models, including side-by-side multi-model chat."
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace."
  - `business.md`: "Users talk to several large language models from one web interface."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

## Beam side-by-side multi-model chat

Beam mode sends one prompt to several models and lets the user compare and merge the answers.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `About_the_organisation.md`: "It answers the user's chat messages through OpenRouter models, including side-by-side multi-model chat."
  - `business.md`: "Beam mode sends one prompt to several models and lets the user compare and merge answers."
- **Delivered by:**
  - `src/modules/beam/beam.reattach::beamMergeStreamedGuts`, matched on name "merge" in beamMergeStreamedGuts; name "beam" in beamMergeStreamedGuts; module "answ" in module src/modules/beam; +11 more
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

## AI personas

The suite includes AI personas as a core feature.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Features include personas, streaming answers, code highlighting, PDF import and text-to-image."
- **Delivered by:**
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::Creator`, matched on named by the model while reading the business documents

## Text-to-image

Text-to-image generation is part of the feature set.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Features include personas, streaming answers, code highlighting, PDF import and text-to-image."
- **Delivered by:**
  - `src/apps/chat/editors/image-generate::runImageGenerationUpdatingState`, matched on name "generation" in runImageGenerationUpdatingState; name "image" in runImageGenerationUpdatingState; module "beam" in module src/apps; +18 more
  - `src/modules/t2i/gemini/geminiImageModels::geminiImageResolveForGeneration`, matched on name "generation" in geminiImageResolveForGeneration; name "image" in geminiImageResolveForGeneration; module "multi" in module src/modules/t2i; +4 more
  - `src/apps/draw/DrawCreate::DrawCreate`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines`, matched on named by the model while reading the business documents

## Voice

Voice features are included in the AI suite.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:**
  - `src/apps/call/Telephone::Telephone`, matched on named by the model while reading the business documents
  - `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines`, matched on named by the model while reading the business documents

## Streaming answers, code highlighting and execution, PDF import

Responses are streamed; code is highlighted and can be executed; PDFs can be imported into chats.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Features include personas, streaming answers, code highlighting, PDF import and text-to-image."
- **Delivered by:**
  - `src/common/stores/chat/chat.fragments::create_CodeExecutionResponse_ContentFragment`, matched on name "execution" in create_CodeExecutionResponse_ContentFragment; name "response" in create_CodeExecutionResponse_ContentFragment; name "code" in create_CodeExecutionResponse_ContentFragment

## Presets for developers

The suite ships presets aimed at developers.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:** _no linked components_

## Open-source and independent

Big-AGI is MIT-licensed open source and an independent, non-VC-funded project; Pro subscriptions fund development for everyone including the free and open-source tiers.

- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace."
  - `business.md`: "Revenue: optional Pro subscription at $10.99 per month funds development."
- **Delivered by:** _no linked components_

## No sign-in, browser-local chats

No sign-in is required and chats are stored in the browser.

- **Sources:**
  - `business.md`: "No sign-in is required; chats are stored in the browser."
- **Delivered by:** _no linked components_

## Coverage

- **Statements linked to code:** 8 of 16 · rule: 2/7 · usp: 6/9
- **Artifacts reached from the business:** 15 of 4901 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Common: 1 of 1368
- Public: 0 of 834
- Tools: 0 of 469
- Llms: 1 of 465
- Chat: 3 of 403
- Aix: 1 of 340
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
- Call: 1 of 29
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

- **usp** Presets for developers: 4 candidate(s) were offered and the model confirmed none of them.
- **usp** Open-source and independent: 2 candidate(s) were offered and the model confirmed none of them.
- **usp** No sign-in, browser-local chats: The only words that matched a name, path or route are too short to mean one thing (sign, stor), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **rule** The Pro subscription is optional and priced at $10.99 per month.: 2 candidate(s) were offered and the model confirmed none of them.
- **rule** No sign-in is required; chats are stored in the browser.: The only words that matched a name, path or route are too short to mean one thing (sign, stor), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **rule** Postgres is optional and is not used in this deployment.: No artifact NAME, path, route or endpoint in the codebase matches any word in it. It may be a rule about how people work rather than about what the product does.
- **rule** The project is licensed under MIT.: The only words that matched a name, path or route are too short to mean one thing (big, open), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **rule** Errors must be explained clearly to the user.: This rule says of itself that no machine can check it, so no code implements it and anything the words matched would be a coincidence. Mark it verifiable to have it searched for.

## Gaps

_None. All material was sourced._
