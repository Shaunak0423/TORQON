# TORQON — landing page

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where things live

- `src/app/site.config.ts` — the registration link and event details (date, venue,
  tagline). Edit this one file and every button/link on the site updates.
- `src/app/components/` — one file per section (Hero, About, Categories, etc).
- `src/app/globals.css` — the color tokens (`--ink`, `--sun`, `--coral`, `--sage`,
  `--paper`) pulled from the deck. Change a hex here to re-theme the whole site.
- `src/app/layout.tsx` — page `<title>`, meta description, Open Graph/Twitter
  card, and favicon. Update `siteUrl` once you have a real domain.
- `public/og-image.jpg` / `public/favicon.ico` — placeholder brand images
  generated for now. Swap these for real designed assets before launch.

## Before you launch

- [ ] Confirm event date + venue in `site.config.ts` (currently "Date TBA")
- [ ] Swap `public/og-image.jpg` and `public/favicon.ico` for real artwork
- [ ] Update `siteUrl` in `layout.tsx` once you have a domain
- [ ] Double check the Google Form link in `site.config.ts`

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo. Vercel auto-detects Next.js —
   no config needed, just click **Deploy**.
3. Every push to `main` redeploys automatically.

Or from the command line:

```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

## Notes on stability

- No client-side data fetching or external APIs on the page, so there's nothing
  to time out or crash at runtime — it's a fully static build.
- Fonts (Anton + Inter) load through `next/font`, which self-hosts them at
  build time, so there's no runtime dependency on Google's font CDN.
- `npm run build` and `npx eslint .` both pass clean — run them again after
  any edits before deploying.
