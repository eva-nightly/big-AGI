# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

All model calls go through OpenRouter; the server reads OPENROUTER_API_KEY.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "It answers the user's chat messages through OpenRouter models, including side-by-side multi-model chat."
  - `business.md`: "All model calls go through OpenRouter; the server reads OPENROUTER_API_KEY."
- **Components:**
  - `src/modules/aix/server/api/aix.wiretypes.openrouter::src/modules/aix/server/api/aix.wiretypes.openrouter.ts`, matched on name "openrout" in src/modules/aix/server/api/aix.wiretypes.openrouter.ts; name "api" in src/modules/aix/server/api/aix.wiretypes.openrouter.ts; name "serv" in src/modules/aix/server/api/aix.wiretypes.openrouter.ts; +5 more
  - `src/modules/llms/vendors/openrouter/OpenRouterServiceSetup::OpenRouterServiceSetup`, matched on named by the model while reading the business documents

### Rule 2

The Pro subscription is optional and priced at $10.99 per month.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Revenue: optional Pro subscription at $10.99 per month funds development."
- **Components:** _no linked components_

### Rule 3

Answers must be streamed promptly to the user.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "A good answer is correct, relevant to the question, and arrives without errors, streamed promptly."
  - `business.md`: "Success means: answers are relevant, correct, streamed quickly, and errors are explained clearly."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

### Rule 4

No sign-in is required; chats are stored in the browser.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "No sign-in is required; chats are stored in the browser."
- **Components:** _no linked components_

### Rule 5

Postgres is optional and is not used in this deployment.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Postgres is optional and not used in our deployment."
- **Components:** _no linked components_

### Rule 6

The project is licensed under MIT.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Big-AGI is an open-source (MIT) multi-model AI chat workspace."
- **Components:** _no linked components_

### Rule 7

Errors must be explained clearly to the user.

- **Verifiable:** ❌ no
- **Sources:**
  - `business.md`: "Success means: answers are relevant, correct, streamed quickly, and errors are explained clearly."
- **Components:** _no linked components_

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
