# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

A good answer is correct, relevant to the question, complete, and streams without errors.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "A good answer is correct, relevant to the question, complete, and streams without errors; Beam compares several models side by side."
  - `business.md`: "Correct, relevant to the question, complete, and streamed without errors."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

### Rule 2

Models are provided via OpenRouter.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "It is a multi-model chat assistant: the user asks a question or gives a task, and the models (via OpenRouter) answer."
  - `business.md`: "Chat with many models through one interface; here, models come via OpenRouter."
- **Components:**
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

### Rule 3

The optional Pro subscription is priced at $10.99 per month.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Free and open source; optional paid Pro subscription at $10.99/month funds development."
- **Components:** _no linked components_

### Rule 4

Beam must send one prompt to several models at once and merge the best answer.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "A good answer is correct, relevant to the question, complete, and streams without errors; Beam compares several models side by side."
  - `business.md`: "Beam: send one prompt to several models at once and merge the best answer."
- **Components:**
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

### Rule 5

Wrong model choice or empty replies are failures.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Wrong model choice or empty replies are failures."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

### Rule 6

The server reads the OPENROUTER_API_KEY environment variable.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "The server reads OPENROUTER_API_KEY."
- **Components:**
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

### Rule 7

The product is free and open source under the MIT license.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat application for people who want to use several language models in one place."
  - `business.md`: "Free and open source; optional paid Pro subscription at $10.99/month funds development."
- **Components:** _no linked components_

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
