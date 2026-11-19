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
| Services, packages, prices, terms, projects, performance rules (the catalog) | `src/catalog/catalog.js` (see its README) |
| Story copy: company statement, problem selector, "how it fits", lead demo, FAQ | `src/site/content.js` |
| Work & live demos (projects, live sites, demos, screenshots, links) | `src/site/work.js` + images in `src/site/media/` |
| Look and layout | `src/site/site.css` (colours come from `src/brand/tokens.css`) |
| 3D scenes (hero logo, scroll-driven system assembly, pop-up viewer) | `src/site/scenes.js`, built on `src/brand/kit.js` |

## The journey

The page runs in eight chapters:

1. **Enter the system.** The SB assembles centre-screen, then glides into the hero. It plays once per visit and can be skipped.
2. **Understand the company.**
3. **Identify the problem.**
4. **Explore the four systems.** This is the catalog browser, and any service can be added to your scope.
5. **See the infrastructure work.** A scroll-driven 3D sequence, then the lead walkthrough with a live CRM card and owner dashboard.
6. **Explore actual work.** Case studies and demos.
7. **Configure the solution.** Packages, a compare-every-service table, the performance rules, and the "Build your own" composer. Projects and the upgrade path come after it.
8. **Start implementation.** The inquiry form carries everything the visitor selected.

## Adding a project to Work

1. Save a screenshot (about 1600 px wide, `.jpg`) in `src/site/media/`.
2. In `src/site/work.js`, import it, copy an entry, fill it in and set `published: true`.
3. For a case study, fill `problem`, `solution` (catalog codes), `technology`, `process` and `results`. Only list results you've verified, each with its period and source.
4. Client names, screenshots and results go live only after the client approves (`approved: true`).

## Going live

- Set `FORM_ENDPOINT` to a CRM webhook. The form sends one `system-based.inquiry.v1` JSON record. Test it with a real submission before launch.
- Set `BOOKING_URL` so people can pick a time right after they send their scope.
- Set `SHOW_PROPOSED: false` before launch, unless every price in the catalog is approved.
- Set `COMMUNITY_URL` once Pressure Built is up. Until then the button says "Opening soon".
- To build with relative paths for any static host (Netlify, Vercel, cPanel), run `npx vite build --base ./` and upload `dist/`.

## Built-in behaviour

- Phones and low-power devices get a lighter 3D scene with no mirror floor or bloom.
- If someone has reduced motion turned on, the 3D shows as still frames and the scroll story turns into a plain list.
- If the browser can't run WebGL, the hero shows a still image instead.
