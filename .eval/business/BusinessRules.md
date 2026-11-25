# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

Replies must be correct, on-topic/relevant to the question, and clearly written.

- **Verifiable:** ✅ yes
- **Sources:**
  - `About_the_organisation.md`: "Right means the answer is correct, on-topic, and clear."
  - `About_the_organisation.md`: "Answers the user's chat messages with a helpful, accurate reply from the model they chose (via OpenRouter), and can compare several models side by side."
  - `business.md`: "Replies are correct, relevant to the question and clearly written."
- **Components:**
  - `src/apps/chat/AppChat::AppChat`, matched on named by the model while reading the business documents

### Rule 2

The product stays free and open source; the Pro subscription is optional and funds development for all tiers.

- **Verifiable:** ❌ no
- **Sources:**
  - `About_the_organisation.md`: "As an independent, non-VC-funded project, Pro subscriptions at $10.99/mo fund development for everyone, including the free and open-source tiers."
  - `business.md`: "Free and open source; optional Pro subscription funds development."
  - `business.md`: "big-AGI is an open-source (MIT) multi-model chat application."
- **Components:** _no linked components_

### Rule 3

The app must never leak the server's API key.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "The app never leaks the server's API key and handles model errors gracefully."
- **Components:** _no linked components_

### Rule 4

Model errors must be handled gracefully.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "The app never leaks the server's API key and handles model errors gracefully."
- **Components:**
  - `src/apps/chat/components/message/fragments-void/BlockPartPlaceholder::BlockPartPlaceholder`, matched on named by the model while reading the business documents

### Rule 5

In Beam, comparing models must be fast and the merged answer should be better than any single model's answer.

- **Verifiable:** ✅ yes
- **Sources:**
  - `business.md`: "Comparing models is fast and the merged answer is better than any single one."
  - `business.md`: ""Beam" mode sends one question to several models and lets the user compare and merge the answers."
- **Components:**
  - `src/modules/beam/beam.reattach::beamMergeStreamedGuts`, matched on name "merge" in beamMergeStreamedGuts; name "beam" in beamMergeStreamedGuts; module "answ" in module src/modules/beam; +3 more
  - `src/modules/beam/gather/FusionInstructionsEditor::FusionInstructionsEditor`, matched on named by the model while reading the business documents

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
