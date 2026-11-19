# System-Based website

```bash
npm install
npm run site          # dev server, opens /site/
npm run build         # production build → dist/site/ (plus the brand studio and mockup tool)
```

## Where to edit

| What | File |
| --- | --- |
| Booking link, form endpoint, contact email, community link | `src/site/config.js` |
| All copy: systems, need selector, "how it fits", lead demo, plans, one-time builds, upgrade path, FAQ | `src/site/content.js` |
| Work & live demos (projects, live sites, demos, screenshots, links) | `src/site/work.js` + images in `src/site/media/` |
| Look and layout | `src/site/site.css` (colours come from `src/brand/tokens.css`) |
| 3D scenes (hero logo, scroll-driven system assembly, pop-up viewer) | `src/site/scenes.js`, built on `src/brand/kit.js` |

## Adding a project to Work

1. Save a screenshot (about 1600 px wide, `.jpg`) in `src/site/media/`.
2. In `src/site/work.js`, import it, copy an entry, fill it in and set `published: true`.
3. Client names, screenshots and results go live only after the client approves.

## Going live

- Set `BOOKING_URL` (Calendly, Cal.com, GoHighLevel and similar) so every "Book a call" opens your calendar.
- Or set `FORM_ENDPOINT` (Formspree, a Zapier or GHL webhook) so the built-in form sends leads to you.
- Set `COMMUNITY_URL` once Pressure Built is up. Until then the button says "Opening soon".
- To build with relative paths for any static host (Netlify, Vercel, cPanel), run `npx vite build --base ./` and upload `dist/`.

## Built-in behaviour

- Phones and low-power devices get a lighter 3D scene with no mirror floor or bloom.
- If someone has reduced motion turned on, the 3D shows as still frames and the scroll story turns into a plain list.
- If the browser can't run WebGL, the hero shows a still image instead.
