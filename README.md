# IAB 2027

Website for the proposed second Interpreting Agent Behavior workshop at CHI 2027.

Core question: What methods from HCI and the social sciences can help us understand agents, humans, and their interactions?

## Run

Requires Node.js 22.13 or newer.

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm test` (production Worker response and section navigation)

## Edit

- `app/page.tsx`: page entry point.
- `src/App.tsx`: second-edition workshop sections, adapted from the first-edition structure.
- `src/data/siteData.ts`: original scope questions and second-edition method examples.
- `src/components/Navigation.jsx`: adapted first-edition navigation.
- `src/components/TopicIcon.jsx`: original first-edition topic icons.
- `app/first-edition.css`: first-edition stylesheet, copied verbatim.
- `app/globals.css`: second-edition additions.
- `app/layout.tsx`: page and sharing metadata.
- `public/iab.svg` and `public/hero.png`: original IAB mark and terminal background.

Visual source: `/Users/gaojie/Documents/Github/iab-agents.github.io`. The first-edition source repository remains unchanged.

The workshop is described as proposed. Organizers, acceptance status, dates, submission format, and submission links must be confirmed before adding them. The program and method examples are proposed content. The conference location and two-session format follow the official CHI 2027 pages.

References:
- https://iab-agents.github.io/
- https://chi2027.acm.org/
- https://chi2027.acm.org/authors/workshops/

The site uses React and vinext, with Cloudflare Worker output for Sites. `.openai/hosting.json` stores the Sites project identity. The first deployment is private.
