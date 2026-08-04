# PragoTrans — freight & moving website

A premium, bilingual (Czech / English) marketing site for a Prague-based
transport company: moving, cargo taxi, furniture transport, freight and
waste removal, across the whole Czech Republic.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation and micro-interactions
- **lucide-react** icons
- Custom, dependency-free **i18n** (`/cs`, `/en`) with locale routing,
  hreflang, sitemap and structured data

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/cs` (or `/en`
based on your browser language).

### Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  [locale]/          # localized routes (layout, page, not-found)
  api/quote/         # lead-capture endpoint
  globals.css        # base styles + design tokens
  icon.tsx           # generated favicon
  robots.ts, sitemap.ts
components/           # section + UI components
lib/
  i18n/              # locale config + dictionaries (all copy lives here)
  site.ts            # real business contact details
middleware.ts        # locale redirect / detection
```

## Editing content

All UI copy lives in `lib/i18n/dictionaries.ts` (Czech + English).
Business contact details live in `lib/site.ts`.

## Quote form

The form submits leads to [Web3Forms](https://web3forms.com) directly from
the browser (validation runs client-side first). The public access key lives
in `lib/site.ts` (`web3formsKey`); leads arrive by email at the address that
owns the key. To change the inbox, create a new key and update that value.

## Images

Real job photos live in `public/gallery` (`photo-01…25.jpeg`).

- **Service photos**: set per service via the `image` field in
  `lib/i18n/dictionaries.ts` (local paths like `/gallery/photo-07.jpeg`).
- **Gallery section**: the curated list + intrinsic dimensions live in
  `lib/gallery.ts`. Add, remove or reorder entries there; keep the `w`/`h`
  values accurate so `next/image` renders them without distortion.

To add new photos, drop them in `public/gallery` and reference them the same way.
