# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

Answers must stream quickly and not break mid-reply.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Answers must stream quickly and not break mid-reply."
- **Components:**
  - `src/apps/chat/components/message/ChatMessage::ChatMessage`, matched on named by the model while reading the business documents

### Rule 2

Model choice must work: a chosen model must actually answer.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Model choice must work: a chosen model must actually answer."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsServiceSelector::ModelsServiceSelector`, matched on named by the model while reading the business documents

### Rule 3

Errors (bad key, rate limit) must be explained in plain words.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Errors (bad key, rate limit) must be explained in plain words."
- **Components:**
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::BlockPartPlaceholder`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipNotice`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderNoticeDetail`, matched on named by the model while reading the business documents

### Rule 4

The server reads OPENROUTER_API_KEY; no user sign-in is needed.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Our server reads OPENROUTER_API_KEY; no user sign-in is needed."
- **Components:**
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

### Rule 5

Users bring their own API keys (OpenRouter, OpenAI, Anthropic, Gemini, local models) or the server provides one.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Users bring their own API keys (OpenRouter, OpenAI, Anthropic, Gemini, local models) or the server provides one."
- **Components:**
  - `src/modules/llms/components/LLMVendorSetup::LLMVendorSetup`, matched on named by the model while reading the business documents
  - `src/modules/llms/models-modal/ModelsWizard::ModelsWizard`, matched on named by the model while reading the business documents

### Rule 6

Conversation history is kept in the browser.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Chat with a model and keep conversation history in the browser."
- **Components:** _no linked components_

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
