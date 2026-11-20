# Cordoval Co-Founder

Standalone website for [Cordoval Co-Founder](https://cofounder.cordoval.co.uk), a free, open-source desktop app for Windows and Linux. Cordoval is an independent AI brand by Kieren Day.

This repository is only the Co-Founder site. It renders the product page at `/`. Cordoval Code, Cordoval Labs, Cordoval Media and the brand site stay on their own hosts. Links to those sites are absolute `https` URLs. Privacy and terms stay on the brand site:

- https://www.cordoval.co.uk/privacy
- https://www.cordoval.co.uk/terms

## Develop

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173/.

## Check and build

```bash
npm run lint
npm run build
```

`npm run lint` is `tsc --noEmit`. `npm run build` typechecks, then writes the static site to `dist/`.

## Deploy on Vercel

Create a Vercel project from this repository with these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

`vercel.json` redirects `/cofounder` to `/`, matching the current Co-Founder host, and rewrites other paths to `index.html`. The client then returns unknown paths to `/`. Screenshot files stay at `/cofounder/*.png`. `robots.txt` and `sitemap.xml` are the Co-Founder host documents, with the canonical origin `https://cofounder.cordoval.co.uk/`.

The page head includes both counter.dev tags used on the live Co-Founder host.
