---
name: Portfolio QA recurring patterns
description: Recurring issues and risk areas identified in QA runs for the job-change portfolio project
type: project
---

This portfolio project (Next.js 16, app/content.ts single source of truth) has a recurring structural risk: content.ts data changes often, and rendering code in page.tsx has type/runtime gaps that are invisible to tsc because of how TypeScript handles array index access without `noUncheckedIndexedAccess`.

Key patterns found in 2026-03-30 QA:
- `array[0]` passed to `string`-typed prop — silent undefined on empty arrays. High-risk pattern each time new projects are added.
- Impact data rendered in two separate locations (card preview + DetailBlock detail) — tendency for duplication to emerge when new display areas are added.
- navLinks array and rendered section IDs can drift out of sync — new sections added to page.tsx don't automatically get navLink entries.

**Why:** Static site with no runtime validation layer; all type safety depends on tsc, which misses index-access gaps.

**How to apply:** In every future QA run, explicitly check: (1) all array[0] usages against prop types, (2) whether newly added content.ts fields have corresponding navLinks entries, (3) whether any data is rendered in more than one location within the same view.
