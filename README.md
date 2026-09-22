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

- `app/page.tsx`: workshop text, example methods, program, and interactive filters.
- `app/globals.css`: responsive layout and visual styling.
- `app/layout.tsx`: page and sharing metadata.
- `public/iab.svg`: existing IAB mark, reused from the first-edition website.

The workshop is described as proposed. Organizers, acceptance status, dates, submission format, and submission links must be confirmed before adding them. The program and method examples are proposed content. The conference location and two-session format follow the official CHI 2027 pages.

References:
- https://iab-agents.github.io/
- https://chi2027.acm.org/
- https://chi2027.acm.org/authors/workshops/

The site uses React and vinext, with Cloudflare Worker output for Sites. `.openai/hosting.json` stores the Sites project identity. The first deployment is private.
