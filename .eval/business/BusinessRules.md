# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

Answers must stream promptly; broken streaming is a named risk.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "Right means a helpful, accurate, on-topic answer that streams promptly and handles errors and model switching gracefully."
  - `business.md`: "Success means: a fast streamed answer, the right model used, no lost conversations."
  - `business.md`: "Risks: wrong or hallucinated answers, broken streaming, confusing model errors, leaked API keys."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/message/ChatMessage::ChatMessage`, matched on named by the model while reading the business documents

### Rule 2

Errors and model switching must be handled gracefully; confusing model errors are a named risk.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "Right means a helpful, accurate, on-topic answer that streams promptly and handles errors and model switching gracefully."
  - `business.md`: "Risks: wrong or hallucinated answers, broken streaming, confusing model errors, leaked API keys."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::BlockPartPlaceholder`, matched on named by the model while reading the business documents

### Rule 3

The right (user-selected) model must be the one used to answer.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "A multi-model chat: the user asks a question and picks a model through OpenRouter."
  - `business.md`: "Success means: a fast streamed answer, the right model used, no lost conversations."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

### Rule 4

Answers must be helpful, accurate, and on-topic; wrong or hallucinated answers are a named risk.

- **Verifiable:** ❌ no
- **Sources:**
  - `About_the_organisation.md`: "Right means a helpful, accurate, on-topic answer that streams promptly and handles errors and model switching gracefully."
  - `business.md`: "Risks: wrong or hallucinated answers, broken streaming, confusing model errors, leaked API keys."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

### Rule 5

The core product stays free; Pro subscription is optional.

- **Verifiable:** ❌ no
- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Revenue: optional Pro subscription at $10.99/month funds development; the core stays free."
- **Components:** _no linked components_

### Rule 6

Conversations are stored locally in the browser.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Personas give the assistant a role and a tone; conversations are stored locally in the browser."
- **Components:** _no linked components_

### Rule 7

The server reads OPENROUTER_API_KEY and no sign-in is required.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "The server reads OPENROUTER_API_KEY; no sign-in is required."
- **Components:**
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

### Rule 8

API keys must never be leaked.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Risks: wrong or hallucinated answers, broken streaming, confusing model errors, leaked API keys."
- **Components:** _no linked components_

### Rule 9

Conversations must not be lost.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Success means: a fast streamed answer, the right model used, no lost conversations."
- **Components:** _no linked components_

### Rule 10

First-time chats must succeed without any configuration.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Near-term goal: make first-time chats succeed without any configuration."
- **Components:**
  - `src/modules/llms/models-modal/ModelsWizard::ModelsWizard`, matched on named by the model while reading the business documents

### Rule 11

Support is community-driven through GitHub issues and Discord.

- **Verifiable:** ❌ no
- **Sources:**
  - `business.md`: "Support is community-driven through GitHub issues and Discord."
- **Components:** _no linked components_

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
