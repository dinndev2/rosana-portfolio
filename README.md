# Rosana Rosal — Executive VA Portfolio

A modern, fully responsive, animation-rich one-page portfolio for an Executive
Virtual Assistant. Built with **Vite + React + TypeScript**. SEO-optimized with
meta tags, Open Graph/Twitter cards, JSON-LD structured data, `robots.txt`, and
`sitemap.xml`.

## Highlights

- Scroll-reveal animations (IntersectionObserver), animated stat counters,
  scroll-progress bar, animated gradient orbs, marquee, 3D tilt cards, and
  magnetic buttons.
- Mobile-first responsive layout with an animated slide-in nav.
- Respects `prefers-reduced-motion`.
- No runtime dependencies beyond React.

## Develop

```bash
npm install
npm run dev
```

## Free hosting (GitHub Pages)

This project is set up for **$0 hosting** on public GitHub Pages — no Vercel Pro,
no custom server, no paid CI.

| What | Cost |
|------|------|
| GitHub public repo + Pages | Free |
| Build on your machine (`npm run build`) | Free |
| Deploy via `gh-pages` branch | Free (no Actions minutes) |

**Live site:** https://dinndev2.github.io/rosana-portfolio/

After you change the site, redeploy from your machine:

```bash
npm run deploy:pages
```

That builds `dist/` and pushes it to the `gh-pages` branch. GitHub serves it
automatically.

The `.github/workflows/deploy.yml` file is optional (auto-deploy on push). It
only runs if GitHub Actions is available on your account; you do **not** need it
for the free manual flow above.

## Build

```bash
npm run build      # type-checks, then outputs static files to dist/
```

### Note on the rollup native binary

If `npm run build` fails with `Cannot find module '@rollup/rollup-linux-x64-gnu'`
(a known npm optional-dependency bug), run:

```bash
npm install @rollup/rollup-linux-x64-gnu --no-save
```

## Before going live

- Site is deployed to GitHub Pages at
  `https://dinndev2.github.io/rosana-portfolio/`. Update canonical/OG URLs when
  moving to a custom domain.
- Confirm the contact details in `src/App.tsx` (`EMAIL`, `PHONE_TEL`,
  `PHONE_DISPLAY`) and the JSON-LD block in `index.html`.

## Customize

- Content (services, experience, tools, skills, stats): edit the arrays at the
  top of `src/App.tsx`.
- Colors / theme: CSS variables in `src/index.css`.
- Layout & motion: `src/App.css`. Reusable animation components live in
  `src/components.tsx`; hooks in `src/hooks.ts`.
