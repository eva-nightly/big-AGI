# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

Answers stream quickly and stay on the question asked.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Answers stream quickly and stay on the question asked."
- **Components:**
  - `src/apps/chat/components/message/ChatMessage::ChatMessage`, matched on named by the model while reading the business documents

### Rule 2

Users can tell which model answered and why Beam chose a result.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Users can tell which model answered and why Beam chose a result."
- **Components:**
  - `src/apps/chat/components/message/ChatMessage::ChatMessage`, matched on named by the model while reading the business documents
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

### Rule 3

The server never leaks API keys and fails with a clear message when a key is missing.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "The server never leaks API keys and fails with a clear message when a key is missing."
- **Components:** _no linked components_

### Rule 4

Conversation history stays in the user's browser; the server only proxies model calls.

- **Verifiable:** ✅ yes
- **Sources:**
  - `big-agi-overview.md`: "Conversation history stays in the user's browser; the server only proxies model calls."
- **Components:** _no linked components_

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
