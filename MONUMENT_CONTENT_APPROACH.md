# Monument Content Development Approach (Workflow & Definition of Done)

## Overview
This document records the process used to research, write, and implement long-form historical content for the first 10 European monuments, and the non-visual SEO improvements applied across the site.

## Workflow (Gated)
1. Select batch (10 monuments)
   - Confirm each has a valid `kebabId`, `continent`, coordinates, and images in `monument-database`.
   - Record selections in the batch checklist (see Templates).
2. Research (Perplexity pass)
   - Prompt for: origin/construction, design/engineering, key dates, incidents, conservation, visitor stats, cultural role; ask for sources with dates.
   - Save links and quotes; do not copy unvetted text.
3. Source vetting (authoritative)
   - Minimum 3 credible sources per monument (UNESCO, official operators, museums, government heritage, Britannica/academic).
   - Keep citation URLs and titles for the article footer.
4. DataForSEO
   - Keyword Overview for: "<monument> history", "<monument> facts", "<monument> architecture", "when built", "why famous".
   - Keyword Suggestions for long‑tails; SERP Organic with PAA (click depth 2) using mixed seeds; capture 5–8 Qs.
   - Optional: Search Intent, KD, Volume capture.
5. Outline → Draft (1000 words)
   - Use markdown headings (##) for subsections; incorporate vetted facts; answer 2–3 top PAA questions inside body.
6. Write 75‑word summary
   - Plain, factual, non‑marketing; suitable for region card.
7. Implement
   - Add to `lib/monument-articles.ts`: `kebabId`, `title`, `summary`, `content` (markdown), `sources`.
   - Detail page renders via `MarkdownContent`; region cards pull `summary`.
8. Schema & Meta
   - Detail page: `Article` JSON‑LD + BreadcrumbList.
   - Region page: `ItemList` JSON‑LD. Ensure canonical/OG.
9. QA (see Definition of Done)
   - Fact check, word count, links live, headings render, map renders, back‑to‑region correct.
10. Ship & Track
   - Note completion in batch checklist; add follow‑ups for FAQs JSON‑LD and internal links.

## Monuments Covered (Batch 1 – Europe)
- Eiffel Tower (France)
- Colosseum (Italy)
- Stonehenge (United Kingdom)
- Big Ben / Elizabeth Tower (United Kingdom)
- Neuschwanstein Castle (Germany)
- Parthenon (Greece)
- Alhambra (Spain)
- Acropolis of Athens (Greece)
- Notre‑Dame Cathedral (France)
- Tower Bridge (United Kingdom)

## Research Workflow (Perplexity + Source Vetting)
- Seed facts with Perplexity to accelerate outline and identify key dates, names, and technical aspects.
- Cross-check facts against authoritative sources (e.g., Britannica, UNESCO, English Heritage, official site operators, peer‑reviewed or academic texts) and include citations per article.
- Focus topics: origin/construction, design/engineering, cultural significance, major events/incidents, conservation/restoration, visitor stats/management, and modern status.

## Keyword Research (DataForSEO)
- Core informational targets (per monument):
  - "<monument> history", "<monument> facts", "<monument> architecture", "when was <monument> built", "why is <monument> famous"
- Broadened set for clustering (supporting FAQs and article sections):
  - "<monument> location", "<monument> visitor numbers", "<monument> tickets", "<monument> map", accessibility/best time queries
- People Also Ask (PAA):
  - Pulled via DataForSEO SERP with click depth (2) using mixed seeds to gather long‑tail questions; deduped and selected 5–8 intent‑diverse Q&As per monument for future FAQ sections and schema.

## Content Production Guidelines
- Length: ~1000 words per monument.
- Structure: brief intro + subheadings; articles authored in markdown (## headings), rendered as H3 in the UI.
- Coverage: origin, design/engineering, cultural reception, key dates, incidents, conservation/restoration, modern role.
- Citations: 3–8 reliable sources at the end of each article.
- Summary: ~75 words for region card snippet.

## Implementation Details (Code)
- Articles and summaries in `lib/monument-articles.ts` with fields: `kebabId`, `title`, `summary`, `content` (markdown), `sources`.
- Detail page rendering:
  - `app/monuments/[kebabId]/page.tsx` loads article by `kebabId` and renders markdown via `components/markdown-content.tsx` (react-markdown + remark-gfm; maps ## → H3).
- Region pages with summaries:
  - `app/regions/[continent]/page.tsx` filters by continent, shows cards with 75-word summaries, and links to details.
- Maps:
  - Leaflet via `react-leaflet`, with client wrappers for SSR safety: `components/region-map-client.tsx` and `app/monuments/[kebabId]/map-client.tsx`.

## Non‑Visual SEO Enhancements
- Structured Data (JSON‑LD):
  - Global (layout): `WebApplication`, `FAQPage`, `Organization`, `Dataset`, `BreadcrumbList`.
  - Monument detail: `Article` + `BreadcrumbList` (Home → Regions → Continent → Monument).
  - Region pages: `ItemList` enumerating monuments with canonical URLs.
- Canonical URLs & Open Graph:
  - Canonicals and OG metadata added to monument and region pages; OG images use monument images where available.
- Homepage FAQ:
  - Rewritten with PAA‑informed Q&As (learning via games, memorizing countries/capitals, famous European landmarks, what is a monument).

## Later Improvements (Round 2)
- Markdown rendering: mapped article headings to site visual hierarchy for consistent UX.
- Region/detail map integration unified via dynamic client import to avoid SSR issues.
- Navigation: dynamic "Back to <Region>" link on monument details.
- Cookie overlay: adjusted to prevent blocking page interaction.
- AdSense: prevent double initialization during dev hot reload.

## Future Work
- Add per‑monument FAQ sections (5–8 Q&As) on detail pages with `FAQPage` JSON‑LD for rich results.
- Expand keyword sets per monument (tickets, hours, best time, accessibility) and cluster by intent.
- Add internal linking between related monuments within the same region and theme.
- Generate dedicated OG images per monument and region.
- Quarterly refresh to track PAA drift and update content accordingly.

## Definition of Done (per monument)
- [ ] Perplexity research captured with at least 3 authoritative sources vetted
- [ ] DataForSEO: Keyword Overview + Suggestions + PAA captured and referenced
- [ ] 1000‑word article drafted with markdown headings (##)
- [ ] 75‑word summary written
- [ ] `lib/monument-articles.ts` updated (title, summary, content, sources)
- [ ] Detail page renders (headings, image, map, back‑to‑region link)
- [ ] JSON‑LD `Article` + Breadcrumb present; canonical/OG set
- [ ] Links live; dates and facts cross‑checked

## Artifacts & Templates
Use the following lightweight template per monument (store in notes or a tracking sheet):

- Monument: <Name> (`kebabId`)
- Research links: [Source 1], [Source 2], [Source 3+]
- DataForSEO snapshot: volumes/KD (top 5 terms)
- PAA (5–8): Q1 … Qn
- Outline: H2/H3 bullets
- Summary (≈75 words): …
- Status: Draft | QA | Implemented | Live
