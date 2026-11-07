# Evaluation knowledge base: big-AGI

Additive, grounded documentation produced as PR #0. No existing code was modified beyond inserting
comment identifiers; everything else lives here under `.eval/`, apart from the files listed under
"Outside .eval/".

## Contents (56 file(s) added)

- [`CLAUDE.md`](CLAUDE.md): Repo-specific orientation for AI agents (build, identifiers, conventions).
- [`INDEX.md`](INDEX.md): This index: every file this pull request adds.
- [`architecture/Architecture.md`](architecture/Architecture.md): System overview, module table (with [AI] markers), dependency graph.
- [`architecture/guidelines.md`](architecture/guidelines.md): Coding conventions, each backed by ≥2 verbatim code examples.
- [`architecture/modules/app-api.md`](architecture/modules/app-api.md): Summary of the `app-api` module, with the files it names.
- [`architecture/modules/claude-scripts.md`](architecture/modules/claude-scripts.md): Summary of the `claude-scripts` module, with the files it names.
- [`architecture/modules/pages-dev.md`](architecture/modules/pages-dev.md): Summary of the `pages-dev` module, with the files it names.
- [`architecture/modules/pages-link.md`](architecture/modules/pages-link.md): Summary of the `pages-link` module, with the files it names.
- [`architecture/modules/pages.md`](architecture/modules/pages.md): Summary of the `pages` module, with the files it names.
- [`architecture/modules/public-dev.md`](architecture/modules/public-dev.md): Summary of the `public-dev` module, with the files it names.
- [`architecture/modules/public-vendor.md`](architecture/modules/public-vendor.md): Summary of the `public-vendor` module, with the files it names.
- [`architecture/modules/public-workers.md`](architecture/modules/public-workers.md): Summary of the `public-workers` module, with the files it names.
- [`architecture/modules/public.md`](architecture/modules/public.md): Summary of the `public` module, with the files it names.
- [`architecture/modules/root.md`](architecture/modules/root.md): Summary of the `root` module, with the files it names.
- [`architecture/modules/src-apps.md`](architecture/modules/src-apps.md): Summary of the `src-apps` module, with the files it names.
- [`architecture/modules/src-common.md`](architecture/modules/src-common.md): Summary of the `src-common` module, with the files it names.
- [`architecture/modules/src-modules-3rdparty.md`](architecture/modules/src-modules-3rdparty.md): Summary of the `src-modules-3rdparty` module, with the files it names.
- [`architecture/modules/src-modules-aifn.md`](architecture/modules/src-modules-aifn.md): Summary of the `src-modules-aifn` module, with the files it names.
- [`architecture/modules/src-modules-aix.md`](architecture/modules/src-modules-aix.md): Summary of the `src-modules-aix` module, with the files it names.
- [`architecture/modules/src-modules-asrx.md`](architecture/modules/src-modules-asrx.md): Summary of the `src-modules-asrx` module, with the files it names.
- [`architecture/modules/src-modules-backend.md`](architecture/modules/src-modules-backend.md): Summary of the `src-modules-backend` module, with the files it names.
- [`architecture/modules/src-modules-beam.md`](architecture/modules/src-modules-beam.md): Summary of the `src-modules-beam` module, with the files it names.
- [`architecture/modules/src-modules-blocks.md`](architecture/modules/src-modules-blocks.md): Summary of the `src-modules-blocks` module, with the files it names.
- [`architecture/modules/src-modules-browse.md`](architecture/modules/src-modules-browse.md): Summary of the `src-modules-browse` module, with the files it names.
- [`architecture/modules/src-modules-dblobs.md`](architecture/modules/src-modules-dblobs.md): Summary of the `src-modules-dblobs` module, with the files it names.
- [`architecture/modules/src-modules-google.md`](architecture/modules/src-modules-google.md): Summary of the `src-modules-google` module, with the files it names.
- [`architecture/modules/src-modules-llms.md`](architecture/modules/src-modules-llms.md): Summary of the `src-modules-llms` module, with the files it names.
- [`architecture/modules/src-modules-news.md`](architecture/modules/src-modules-news.md): Summary of the `src-modules-news` module, with the files it names.
- [`architecture/modules/src-modules-persona.md`](architecture/modules/src-modules-persona.md): Summary of the `src-modules-persona` module, with the files it names.
- [`architecture/modules/src-modules-speex.md`](architecture/modules/src-modules-speex.md): Summary of the `src-modules-speex` module, with the files it names.
- [`architecture/modules/src-modules-t2i.md`](architecture/modules/src-modules-t2i.md): Summary of the `src-modules-t2i` module, with the files it names.
- [`architecture/modules/src-modules-trade.md`](architecture/modules/src-modules-trade.md): Summary of the `src-modules-trade` module, with the files it names.
- [`architecture/modules/src-modules-youtube.md`](architecture/modules/src-modules-youtube.md): Summary of the `src-modules-youtube` module, with the files it names.
- [`architecture/modules/src-server.md`](architecture/modules/src-server.md): Summary of the `src-server` module, with the files it names.
- [`architecture/modules/src.md`](architecture/modules/src.md): Summary of the `src` module, with the files it names.
- [`architecture/modules/tools-data.md`](architecture/modules/tools-data.md): Summary of the `tools-data` module, with the files it names.
- [`architecture/modules/tools-develop.md`](architecture/modules/tools-develop.md): Summary of the `tools-develop` module, with the files it names.
- [`architecture/modules/tools-eslint.md`](architecture/modules/tools-eslint.md): Summary of the `tools-eslint` module, with the files it names.
- [`architecture/modules/tools-test.md`](architecture/modules/tools-test.md): Summary of the `tools-test` module, with the files it names.
- [`business/BusinessRules.md`](business/BusinessRules.md): Business rules, sourced, marked verifiable (yes/no), linked to @uxid.
- [`business/USPs.md`](business/USPs.md): Unique selling propositions, sourced to docs, mapped to @uxid.
- [`design-system/components.md`](design-system/components.md): The component inventory: every @uxid with its file, flow and type, coverage per flow, then each component’s variant axes, values and states.
- [`design-system/design.json`](design-system/design.json): The whole extracted design system as one record: theme sources, token groups, scales, component variants, composition, disagreements.
- [`design-system/kit.json`](design-system/kit.json)
- [`design-system/playbook.html`](design-system/playbook.html): The design system as one self-contained page. Open it from the checkout; nothing serves it.
- [`design-system/playbook.md`](design-system/playbook.md): The readable playbook: where the theme is declared, the palette and scales, the primitives, and where the app disagrees with itself.
- [`design-system/tokens.json`](design-system/tokens.json): Design tokens: role, family, light/dark pair, utility name, usage count, and every declaration site.
- [`design-system/tokens.md`](design-system/tokens.md): The token catalogue, grouped by the job each token does.
- [`design-system/typography.json`](design-system/typography.json): Fonts, @font-face rules and the type scale, as declared.
- [`knowledge/company.md`](knowledge/company.md): What the company is and sells, in its own sourced words.
- [`knowledge/customers.md`](knowledge/customers.md): Who uses the product, and the outcome each segment came for.
- [`knowledge/glossary.md`](knowledge/glossary.md): Terms the company uses in a specific way, as its material defines them.
- [`knowledge/goals.md`](knowledge/goals.md): What "good" means to this company, each goal with its source.
- [`pipeline.yaml`](pipeline.yaml): Detected stack, the install/build/analyze/test commands, and whether each was run.
- [`product-map.json`](product-map.json): The product in four floors: pages, API actions, the code doing the work, its data.
- [`trace-map.json`](trace-map.json): Every component, element and prompt the scan found, with its id and route.
