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

## Build (for deployment)

```bash
npm run build      # type-checks, then outputs static files to dist/
```

Everything needed is emitted to `dist/` — deploy that folder to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, Nginx, etc.).

### Note on the rollup native binary

If `npm run build` fails with `Cannot find module '@rollup/rollup-linux-x64-gnu'`
(a known npm optional-dependency bug), run:

```bash
npm install @rollup/rollup-linux-x64-gnu --no-save
```

## Before going live

- Update the canonical/OG URLs in `index.html` and `public/sitemap.xml` from the
  placeholder `https://rosanarosal.com/` to the real domain.
- Confirm the contact details in `src/App.tsx` (`EMAIL`, `PHONE_TEL`,
  `PHONE_DISPLAY`) and the JSON-LD block in `index.html`.

## Customize

- Content (services, experience, tools, skills, stats): edit the arrays at the
  top of `src/App.tsx`.
- Colors / theme: CSS variables in `src/index.css`.
- Layout & motion: `src/App.css`. Reusable animation components live in
  `src/components.tsx`; hooks in `src/hooks.ts`.
