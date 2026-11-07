# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Chat with many LLMs in one web app

big-AGI lets developers, power users and teams chat with many large language models (via OpenRouter and other providers) in a single web app and compare answers side by side.

- **Sources:**
  - `About_the_organisation.md`: "Developers, power users and teams who chat with many LLMs (via OpenRouter and other providers) in one web app, compare answers side by side, and use personas."
  - `big-agi-overview.md`: "big-AGI is a web app for chatting with many large language models in one place."
- **Delivered by:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsConfiguratorModal::ModelsConfiguratorModal`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsServiceSelector::ModelsServiceSelector`, matched on named by the model while reading the business documents

## Beam multi-model chats

"Beam" asks several models at once and merges the best answer; described as world-class multi-model chat.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `big-agi-overview.md`: "Use "Beam" to ask several models at once and merge the best answer."
- **Delivered by:**
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents
  - `src/modules/beam/gather/FusionInstructionsEditor::EditableInstruction`, matched on named by the model while reading the business documents
  - `src/modules/beam/gather/FusionInstructionsEditor::EditableChatInstructionPrompt`, matched on named by the model while reading the business documents

## AI personas

Users pick personas (system prompts) such as a coder or a writer.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `About_the_organisation.md`: "Developers, power users and teams who chat with many LLMs (via OpenRouter and other providers) in one web app, compare answers side by side, and use personas."
  - `big-agi-overview.md`: "Pick personas (system prompts) such as a coder or a writer."
- **Delivered by:**
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/persona-selector/PersonaSelector::Tile`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::Creator`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Creator::PersonaPromptCard`, matched on named by the model while reading the business documents
  - `src/apps/personas/creator/Viewer::Viewer`, matched on named by the model while reading the business documents

## Text-to-image generation

The suite includes text-to-image capabilities.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:**
  - `src/apps/draw/DrawCreate::DrawCreate`, matched on named by the model while reading the business documents
  - `src/apps/draw/create/DrawProviderSelector::DrawProviderSelector`, matched on named by the model while reading the business documents
  - `src/apps/draw/create/PromptComposer::PromptComposer`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngines::T2IConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/t2i/components/T2IConfigureEngineFull::T2IConfigureEngineFull`, matched on named by the model while reading the business documents

## Voice

The suite includes voice features.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:**
  - `src/apps/call/Telephone::Telephone`, matched on named by the model while reading the business documents
  - `src/apps/call/Telephone::CallMenu`, matched on named by the model while reading the business documents
  - `src/modules/speex/components/SpeexConfigureEngines::SpeexConfigureEngines`, matched on named by the model while reading the business documents
  - `src/modules/asrx/components/ASRxConfigureEngines::ASRxConfigureEngines`, matched on named by the model while reading the business documents

## Streamed answers with code highlighting and execution

Responses stream in and code is highlighted and can be executed.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `big-agi-overview.md`: "Import PDFs and paste code; get highlighted code and streamed answers."
- **Delivered by:**
  - `src/apps/chat/components/message/ChatMessage::ChatMessage`, matched on named by the model while reading the business documents
  - `src/modules/blocks/markdown/CustomMarkdownRenderer::CustomMarkdownRenderer`, matched on named by the model while reading the business documents

## PDF import and code pasting

Users can import PDFs and paste code into the chat.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
  - `big-agi-overview.md`: "Import PDFs and paste code; get highlighted code and streamed answers."
- **Delivered by:**
  - `src/apps/chat/components/composer/Composer::Composer`, matched on named by the model while reading the business documents

## AGI functions and advanced AI functions

AI suite powered by state-of-the-art models providing advanced AI/AGI functions.

- **Sources:**
  - `About_the_organisation.md`: "AI suite powered by state-of-the-art models and providing advanced AI/AGI functions."
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:**
  - `src/modules/aifn/digrams/DiagramsModal::DiagramsModal`, matched on named by the model while reading the business documents
  - `src/modules/aifn/flatten/FlattenerModal::FlattenerModal`, matched on named by the model while reading the business documents

## Presets for developers

The suite includes presets for developers.

- **Sources:**
  - `About_the_organisation.md`: "Includes AI personas, AGI functions, world-class Beam multi-model chats, text-to-image, voice, response streaming, code highlighting and execution, PDF import, presets for developers, much more."
- **Delivered by:** _no linked components_

## Bring your own API keys or use a server-provided key

Users bring their own API keys (OpenRouter, OpenAI, Anthropic, Gemini, local models) or the server provides one via OPENROUTER_API_KEY; no user sign-in is needed.

- **Sources:**
  - `big-agi-overview.md`: "Users bring their own API keys (OpenRouter, OpenAI, Anthropic, Gemini, local models) or the server provides one."
  - `big-agi-overview.md`: "Our server reads OPENROUTER_API_KEY; no user sign-in is needed."
- **Delivered by:**
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::src/modules/llms/vendors/openrouter/OpenRouterServiceSetup.tsx`, matched on name "openrout" in src/modules/llms/vendors/openrouter/OpenRouterServiceSetup.tsx; name "rout" in src/modules/llms/vendors/openrouter/OpenRouterServiceSetup.tsx; name "open" in src/modules/llms/vendors/openrouter/OpenRouterServiceSetup.tsx; +5 more
  - `src/modules/llms/components/LLMVendorSetup::LLMVendorSetup`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsWizard::ModelsWizard`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsWizard::WizardProviderSetup`, matched on named by the model while reading the business documents
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

## Conversation history kept in the browser

Chat with a model and keep conversation history in the browser.

- **Sources:**
  - `big-agi-overview.md`: "Chat with a model and keep conversation history in the browser."
- **Delivered by:** _no linked components_

## Open source (MIT) funded by a Pro tier

The project is open-source under MIT, with a Pro tier that funds it.

- **Sources:**
  - `big-agi-overview.md`: "Individuals and small teams; a Pro tier funds the open-source project (MIT)."
- **Delivered by:** _no linked components_

## Coverage

- **Statements linked to code:** 14 of 18 · rule: 5/6 · usp: 9/12
- **Artifacts reached from the business:** 33 of 4903 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Common: 0 of 1368
- Public: 0 of 834
- Tools: 0 of 471
- Llms: 7 of 465
- Chat: 8 of 403
- Aix: 0 of 340
- Blocks: 1 of 159
- Speex: 1 of 108
- Beam: 3 of 103
- News: 0 of 89
- T2i: 2 of 63
- Trade: 0 of 58
- Asrx: 1 of 50
- Aifn: 2 of 47
- Settings modal: 0 of 46
- Draw: 3 of 35
- Call: 2 of 29
- Personas: 3 of 26
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

- **usp** Presets for developers: The only words that matched a name, path or route are too short to mean one thing (ask, best, pick, user), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **usp** Conversation history kept in the browser: The only words that matched a name, path or route are too short to mean one thing (keep), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **usp** Open source (MIT) funded by a Pro tier: The only words that matched a name, path or route are too short to mean one thing (open, pro, tier), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.
- **rule** Conversation history is kept in the browser.: The only words that matched a name, path or route are too short to mean one thing (keep), and a three- or four-letter stem matches by accident across two languages. Something longer has to match the same artifact.

## Gaps

_None. All material was sourced._
