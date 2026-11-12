# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

An answer must be helpful, accurate, on-topic, and follow both the prompt and the chosen persona.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "Right means a helpful, accurate, on-topic answer that follows the prompt and the chosen persona, and a clear message when a model fails."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/persona-selector/PersonaSelector::PersonaSelector`, matched on named by the model while reading the business documents

### Rule 2

When a model fails or is unavailable, the user must see a clear error message.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "Right means a helpful, accurate, on-topic answer that follows the prompt and the chosen persona, and a clear message when a model fails."
  - `big-agi-business.md`: "Key promise: fast streaming answers, clear errors when a model is unavailable."
- **Components:**
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::BlockPartPlaceholder`, matched on named by the model while reading the business documents
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::RenderChipNotice`, matched on named by the model while reading the business documents

### Rule 3

Answers are streamed to the user (fast streaming).

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "Chats with the user through many models via OpenRouter, streaming answers."
  - `big-agi-business.md`: "Key promise: fast streaming answers, clear errors when a model is unavailable."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

### Rule 4

The free tier stays open source (MIT); Pro is optional.

- **Verifiable:** ❌ no
- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `big-agi-business.md`: "Revenue: an optional Pro subscription funds development; the free tier stays open source."
  - `big-agi-business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace."
- **Components:** _no linked components_

### Rule 5

Pro subscription is priced at $10.99/mo.

- **Verifiable:** ❌ no
- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
- **Components:** _no linked components_

### Rule 6

The server reads the OPENROUTER_API_KEY environment variable to talk to models.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-business.md`: "The server reads OPENROUTER_API_KEY; no user sign-in is needed."
- **Components:**
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

### Rule 7

No user sign-in is required to use the product.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-business.md`: "The server reads OPENROUTER_API_KEY; no user sign-in is needed."
- **Components:** _no linked components_

### Rule 8

Postgres storage is optional and is not used in our deployment.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-business.md`: "Postgres storage is optional and not used in our deployment."
- **Components:** _no linked components_

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
