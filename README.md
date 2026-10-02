# IAB 2027

Website for the proposed second Interpreting Agent Behavior workshop at CHI 2027.

Public website: https://gaojie058.github.io/iab-workshop/

Core question: What methods from HCI and the social sciences can help us understand agents, humans, and their interactions?

## Run

Requires Node.js 22.13 or newer.

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm test` (production Worker response and section navigation)

GitHub Pages serves the static export from the `gh-pages` branch. Build that
version with `GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/iab-workshop npx next build`
and publish the generated `out/` directory to that branch.

## Edit

- `app/page.tsx`: page entry point.
- `src/App.tsx`: second-edition workshop sections, adapted from the first-edition structure.
- `src/data/siteData.ts`: original scope questions and second-edition participation information.
- `src/components/Navigation.jsx`: adapted first-edition navigation.
- `src/components/TopicIcon.jsx`: original first-edition topic icons.
- `app/first-edition.css`: first-edition stylesheet, copied verbatim.
- `app/globals.css`: second-edition additions.
- `app/layout.tsx`: page and sharing metadata.
- `public/iab.svg` and `public/hero.png`: original IAB mark and terminal background.

Visual source: `/Users/gaojie/Documents/Github/iab-agents.github.io`. The first-edition source repository remains unchanged.

The workshop is described as proposed. Organizers, acceptance status, dates, submission format, and submission links must be confirmed before adding them. The program, 2–4 page paper route, interest-form route, review process, and sharing plan are proposed content. The conference location and two-session format follow the official CHI 2027 pages.

Content organization was informed by the CHI 2026 Human-Agent Collaboration workshop. Text and objectives are written for IAB; the reference workshop’s organizers, deadlines, submission links, and operational promises are not reused. The removed method catalogue remains absent.

CHI 2027 adaptation: two in-person sessions with a break; no poster-board activity; participant papers are not promised ACM Digital Library publication. The draft session activities total 75 minutes per session.

References:
- https://chi26workshop-human-agent-collaboration.hailab.io/
- https://chi2027.acm.org/chi-publication-formats/
- https://iab-agents.github.io/
- https://chi2027.acm.org/
- https://chi2027.acm.org/authors/workshops/

The site uses React and vinext, with Cloudflare Worker output for Sites. `.openai/hosting.json` stores the Sites project identity. An earlier deployment is private. Current updates are local-only at the user’s request.
