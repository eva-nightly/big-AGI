# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Chat with many AI models from one interface

Users chat with the model of their choice, routed through OpenRouter, from a single application, and can compare several models side by side.

- **Sources:**
  - `About_the_organisation.md`: "Answers the user's chat messages with a helpful, accurate reply from the model they chose (via OpenRouter), and can compare several models side by side."
  - `About_the_organisation.md`: "AI suite powered by state-of-the-art models and providing advanced AI/AGI functions."
  - `business.md`: "Lets a user chat with many AI models from one interface, routed through OpenRouter."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

## Beam multi-model chats

Beam mode sends one question to several models at once and lets the user compare and merge the answers into a single better response.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: ""Beam" mode sends one question to several models and lets the user compare and merge the answers."
  - `business.md`: "Comparing models is fast and the merged answer is better than any single one."
- **Delivered by:**
  - `src/modules/beam/beam.reattach::beamMergeStreamedGuts`, matched on name "merge" in beamMergeStreamedGuts; name "stream" in beamMergeStreamedGuts; name "beam" in beamMergeStreamedGuts; +12 more
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

## AI personas

The app supports AI personas that users can select and create for their chats.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Supports personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::Creator`, matched on named by the model while reading the business documents

## Text-to-image generation

Built-in image generation (text-to-image) alongside chat.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Supports personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/apps/chat/editors/image-generate::runImageGenerationUpdatingState`, matched on name "generation" in runImageGenerationUpdatingState; name "image" in runImageGenerationUpdatingState; module "highlight" in module src/apps; +18 more
  - `src/modules/t2i/gemini/geminiImageModels::geminiImageResolveForGeneration`, matched on name "generation" in geminiImageResolveForGeneration; name "image" in geminiImageResolveForGeneration; module "multi" in module src/modules/t2i; +4 more
  - `src/apps/draw/DrawCreate::DrawCreate`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines`, matched on named by the model while reading the business documents

## Voice features

Voice support including speech output and speech recognition, plus a call mode.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Supports personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines`, matched on named by the model while reading the business documents
  - `src/apps/call/Telephone::Telephone`, matched on named by the model while reading the business documents

## Developer-oriented chat tooling

Response streaming, code highlighting and execution, PDF import, and presets for developers.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `business.md`: "Supports personas, code highlighting, PDF import, voice and image generation."
- **Delivered by:**
  - `src/modules/aix/server/dispatch/chatGenerate/parsers/anthropic.parser::_handleCBS_BashCodeExecutionToolResult`, matched on name "execution" in _handleCBS_BashCodeExecutionToolResult; name "code" in _handleCBS_BashCodeExecutionToolResult; name "tool" in _handleCBS_BashCodeExecutionToolResult; +10 more
  - `src/modules/aix/server/dispatch/chatGenerate/parsers/anthropic.parser::_handleCBS_CodeExecutionToolResult`, matched on name "execution" in _handleCBS_CodeExecutionToolResult; name "code" in _handleCBS_CodeExecutionToolResult; name "tool" in _handleCBS_CodeExecutionToolResult; +10 more

## Free, open-source (MIT) and independently funded

big-AGI is MIT-licensed and free; as a non-VC-funded project, optional Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers.

- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "big-AGI is an open-source (MIT) multi-model chat application."
  - `business.md`: "Free and open source; optional Pro subscription funds development."
- **Delivered by:** _no linked components_

## Users keep control of their own API keys

Developers and power users bring and control their own provider keys rather than handing them to a hosted service.

- **Sources:**
  - `business.md`: "Developers and power users who want to compare models and keep control of their keys."
- **Delivered by:**
  - `src/modules/llms/components/LLMVendorSetup::LLMVendorSetup`, matched on named by the model while reading the business documents

## Coverage

- **Statements linked to code:** 10 of 13 · rule: 3/5 · usp: 7/8
- **Artifacts reached from the business:** 17 of 4901 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Common: 0 of 1368
- Public: 0 of 834
- Tools: 0 of 469
- Llms: 2 of 465
- Chat: 4 of 403
- Aix: 2 of 340
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

### Linked to nothing (3)

- **usp** Free, open-source (MIT) and independently funded: Everything that matched is shared plumbing rather than something a business statement can be about: isKimiCodeSubscriptionKey (its name says it converts or tests a value, which decides nothing on its own).
- **rule** The product stays free and open source; the Pro subscription is optional and funds development for all tiers.: This rule says of itself that no machine can check it, so no code implements it and anything the words matched would be a coincidence. Mark it verifiable to have it searched for.
- **rule** The app must never leak the server's API key.: The only words that matched a name, path or route are too short to mean one thing (api, key, leak, serv), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.

## Gaps

_None. All material was sourced._
