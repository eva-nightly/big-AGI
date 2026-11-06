# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## One chat interface for many models

big-AGI is a multi-model AI chat workspace that lets users talk to OpenAI, Anthropic, Google, OpenRouter and local models from a single interface.

- **Sources:**
  - `About_the_organisation.md`: "AI suite powered by state-of-the-art models and providing advanced AI/AGI functions."
  - `big-agi-overview.md`: "big-AGI is a multi-model AI chat workspace for power users and developers."
  - `big-agi-overview.md`: "One chat interface for many models (OpenAI, Anthropic, Google, OpenRouter and local models)."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsConfiguratorModal::ModelsConfiguratorModal`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsServiceSelector::ModelsServiceSelector`, matched on named by the model while reading the business documents
  - `src/modules/llms/components/LLMVendorSetup::LLMVendorSetup`, matched on named by the model while reading the business documents

## Beam multi-model chats

Beam sends one question to several models at once and merges the best answer.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `big-agi-overview.md`: "Beam: send one question to several models at once and merge the best answer."
- **Delivered by:**
  - `src/modules/beam/beam.reattach::beamMergeStreamedGuts`, matched on name "merge" in beamMergeStreamedGuts; name "stream" in beamMergeStreamedGuts; name "beam" in beamMergeStreamedGuts; +9 more
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

## AI Personas

Personas are saved system prompts for repeatable roles such as coder, analyst and editor.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `big-agi-overview.md`: "Personas: saved system prompts for repeatable roles such as coder, analyst, editor."
- **Delivered by:**
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::Creator`, matched on named by the model while reading the business documents

## Broad AI feature suite

Beyond chat, the suite includes AGI functions, text-to-image, voice, response streaming, code highlighting and execution, PDF import and developer presets.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `About_the_organisation.md`: "AI suite powered by state-of-the-art models and providing advanced AI/AGI functions."
- **Delivered by:**
  - `src/apps/draw/DrawCreate::DrawCreate`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines`, matched on named by the model while reading the business documents

## Independent and open source

An independent, non-VC-funded project where Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers.

- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
- **Delivered by:** _no linked components_

## Privacy by design: history stays in the browser

Conversation history stays in the user's browser; the server only proxies model calls.

- **Sources:**
  - `big-agi-overview.md`: "Conversation history stays in the user's browser; the server only proxies model calls."
- **Delivered by:** _no linked components_

## Coverage

- **Statements linked to code:** 6 of 10 · rule: 2/4 · usp: 4/6
- **Artifacts reached from the business:** 12 of 4903 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Common: 0 of 1368
- Public: 0 of 834
- Tools: 0 of 471
- Llms: 3 of 465
- Chat: 3 of 403
- Aix: 0 of 340
- Blocks: 0 of 159
- Speex: 1 of 108
- Beam: 2 of 103
- News: 0 of 89
- T2i: 1 of 63
- Trade: 0 of 58
- Asrx: 0 of 50
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

### Linked to nothing (4)

- **usp** Independent and open source: Everything that matched is shared plumbing rather than something a business statement can be about: isKimiCodeSubscriptionKey (its name says it converts or tests a value, which decides nothing on its own).
- **usp** Privacy by design: history stays in the browser: The only words that matched a name, path or route are too short to mean one thing (call, serv, user), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **rule** The server never leaks API keys and fails with a clear message when a key is missing.: The only words that matched a name, path or route are too short to mean one thing (api, fail, key, leak, miss, serv), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **rule** Conversation history stays in the user's browser; the server only proxies model calls.: The only words that matched a name, path or route are too short to mean one thing (call, serv, user), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.

## Gaps

_None. All material was sourced._
