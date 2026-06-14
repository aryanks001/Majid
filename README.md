# Majid Developments Website

Premium single-page site for Majid Developments (majiddevelopments.com redesign).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (theme tokens in `src/index.css`)
- Motion (`motion/react`) for scroll reveals

## Run

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build to dist/
```

## Design system

- Theme: locked dark ("dusk") theme. Background `#101114`, ink `#EFEBE7` (matches the logo), accent champagne `#C9A86A` drawn from the lit facades in the renders.
- Type: Cormorant Garamond (display) + Satoshi (body). Loaded from Google Fonts / Fontshare CDNs; self-host before production if needed.
- Motion: entrance reveals only, `cubic-bezier(0.16, 1, 0.3, 1)`, all gated behind `prefers-reduced-motion`.

## Before going live

- Wire the Register Interest form (`src/components/Contact.tsx`, `onSubmit`) to your CRM or an email service. It currently shows a client-side confirmation only.
- Fill in the real Terms / Privacy / Refund policy URLs in `src/components/Footer.tsx`.
- Compress the images in `public/images/` (the PNG heroes especially) and consider WebP/AVIF.
