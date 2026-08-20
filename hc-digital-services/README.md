# HC Digital Services

A static, typography-led software and AI consultancy website for HC Digital Services. It is built with Astro, TypeScript and Tailwind CSS, with no client-side framework and no required runtime JavaScript.

## Business description

HC Digital Services provides custom software development and technical consultancy. Services include web applications, backend systems, AI integrations, workflow automation, and advice on software architecture and implementation.

## Technology

- Astro static site generation
- TypeScript
- Tailwind CSS 4 via Vite
- Plain Astro components and scoped CSS
- Astro sitemap generation

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Astro prints the local address, normally `http://localhost:4321`.

## Production build

```bash
npm run build
```

The command runs Astro's type/content checks, then writes the production site to `dist/`. To inspect it locally:

```bash
npm run preview
```

## Cloudflare Pages deployment

Connect this GitHub repository in Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git. Use:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (unless the repository is moved into a monorepo)

No Vercel configuration or server runtime is required. Every page is generated at build time and can be served directly by Cloudflare Pages.

## Editing content

[`src/data/site.ts`](src/data/site.ts) is the main content configuration. Update it to change:

- name, business name, title, location and site URL
- email and production site URL
- navigation
- services and problem statements
- projects and technology lists
- education, areas of focus and working principles

Most homepage sections read directly from this file. Longer editorial copy lives in the relevant Astro component or page where its layout is defined.

### Add a project

Add another object to `site.projects` in `src/data/site.ts`. Keep its `slug` unique and supply the project summary, problem, approach, solution, neutral outcome and technologies. It will appear automatically on both the homepage and `/work`.

### Change education

Edit `site.background.education`, `site.background.institution` and the `focus` list.

### Change contact details

Edit `site.email`. When changing the domain, update `site.siteUrl`, the matching `site` value in `astro.config.mjs`, and the sitemap URL in `public/robots.txt`.

## Future contact API

The current form deliberately uses `mailto:` and does not claim to submit to a backend. To add a Cloudflare Pages Function later:

1. Change the form action in `src/pages/contact.astro` to `POST /api/contact`.
2. Add a Pages Function at `functions/api/contact.ts`.
3. Validate and normalise inputs server-side.
4. Add rate limiting, email delivery and optional Cloudflare Turnstile verification there.
5. Store secrets only in Cloudflare environment variables—never in `src/` or client-side JavaScript.

Cloudflare D1, KV or R2 can be introduced later without changing the static page architecture.
