# System-Based: Brand System v1.1

**Systems over luck.** Black and silver, one 3D logo, and every asset looks the same. This file is the whole brand. If something isn't in here, leave it out.

---

## 1. The idea

The master logo is the **SB monogram** next to the wordmark **SYSTEM-BASED**, with the tagline **SYSTEMS OVER LUCK.** The monogram is built from three interlocking pieces separated by diagonal cuts. That is the system idea in the logo itself: separate parts locked into one.

System-Based sells four systems. In diagrams they appear as chrome blocks labelled A to D. These are supporting graphics, not a second logo.

| Block | Section                    | What's inside                                                          |
| ----- | -------------------------- | ---------------------------------------------------------------------- |
| **A** | Client Response System     | AI receptionist, missed-call text back, follow-up, booking, CRM         |
| **B** | Growth System              | Meta ads, landing pages, social media, reporting                        |
| **C** | Brand & Build              | Brand design, websites, graphics, mockups (quoted per project)          |
| **D** | Custom AI & Ops            | Custom agents, dashboards, connecting tools, SOPs                       |

Block **A** carries a small white status light, meaning "start here". Most clients buy A first.

Pricing uses the same blocks, stacked:

- **Basic, $1,200/mo** (3-month minimum): A
- **Growth, $1,500/mo** (2-month minimum): A + B
- **Full, $2,000/mo** (month-to-month): A + B + D, which adds one custom agent and an owner dashboard
- **Performance option:** 10% per booked job, or a match of the client's ad spend
- **Brand & Build (C):** quoted per project

---

## 2. Logo

Files are in `brand/logo/`:

- `original-lockup.webp`: the master artwork. This is the source of truth.
- `sb-monogram.svg`: the SB monogram traced to a vector (3 pieces). Every 3D shot is built from it.
- `mark.svg`: the SB monogram in chrome. Use it for the favicon and app icon.
- `mark-mono.svg`: the SB monogram in one colour, taking `currentColor`. Use it for embroidery, merch, stamps and single-ink print.
- `lockup.svg`: the master lockup rebuilt as a vector: SB | SYSTEM-BASED / SYSTEMS OVER LUCK. Outline the text before you send it to print.
- 3D profile picture: `brand/renders/avatar.png`

Lockups:

- **Full:** SB, a thin vertical rule, then SYSTEM-BASED over SYSTEMS OVER LUCK. Use it on the site footer, decks and the banner.
- **Nav:** SB, the rule, then SYSTEM-BASED. Drop the tagline.
- **Monogram only:** SB on its own, for the avatar, favicon and merch.
- **Wordmark only:** used where the 3D SB already appears on the same asset.

Rules:

- **Clear space:** keep at least the height of the B's lower bowl free on every side.
- **Minimum size:** the monogram can go down to 20 px tall. The full lockup needs to be at least 180 px wide.
- **Spelling:** always SYSTEM-BASED, with the hyphen, in capitals, with wide tracking. In running text, write "System-Based".
- **Backgrounds:** black or very dark grey only. On white, use `mark-mono.svg` in Obsidian.
- **Never:** recolour it, close up the diagonal cuts, stretch it, outline it, add a drop shadow, or put it on a busy photo.

---

## 3. Colour

The split is about 80% black, 15% greys and 5% white. There is no brand colour: the chrome is the colour.

| Token           | Hex       | Use                                        |
| --------------- | --------- | ------------------------------------------ |
| `--sb-obsidian` | `#0A0A0B` | Page background                            |
| `--sb-carbon`   | `#141416` | Cards, panels                              |
| `--sb-graphite` | `#2A2C30` | Borders, dividers                          |
| `--sb-steel`    | `#5E636B` | Muted text, captions, the lockup rule      |
| `--sb-silver`   | `#B9BDC4` | Body text, the tagline                     |
| `--sb-chrome`   | `#E6E8EB` | Headings, the wordmark                     |
| `--sb-white`    | `#F7F7F8` | Primary buttons, the status light          |

Use the **chrome gradient** on the wordmark and large headlines only:
`linear-gradient(180deg, #fff 0%, #d9dce0 38%, #8a8f97 52%, #c9ccd1 66%, #f2f3f5 100%)`

Copy-paste tokens: `src/brand/tokens.css`.

---

## 4. Type

| Role       | Font               | Rules                                                     |
| ---------- | ------------------ | --------------------------------------------------------- |
| Wordmark / display | **Michroma** | The closest free match to the logo's wide, squared letters. Use it for the wordmark (tracking 0.42em) and for headlines of 8 words or fewer, one per screen. |
| Tagline / body / UI | **Inter** | Set the tagline in capitals with very wide tracking (0.6em). Use 400 for body text, 600 for buttons. |
| Labels     | **JetBrains Mono** | Capitals with 0.2em tracking: `SECTION A`, `BASIC · A`, and numbers |

All three are free on Google Fonts. If the wordmark was set in a specific paid font, swap it in for Michroma.

---

## 5. Voice

Keep it short and plain. Talk about results, not tools.

Lines to use:

- **Systems over luck.** This is the tagline and the hero headline.
- Every call answered. Every lead followed up. Every job booked.
- Four systems. One business.
- Stack the system you need.
- Built, run and reported by System-Based.
- Pressure Built: free → members → done-for-you.

---

## 6. The 3D system

There are two 3D parts:

1. **The SB monogram.** It is extruded from `sb-monogram.svg`, with 3 separate pieces, a 0.3 depth and a small rounded bevel. The finish is bright spun or brushed silver: fully metallic, roughness about 0.3, fine concentric rings, and a clear coat. The front faces stay perfectly flat, and the diagonal cuts stay open.
2. **The block** (diagrams only). A rounded box, 1 × 1 × 0.42, with the section letter etched in mono and a status light on A.

Both use the same setup:

| Spec     | Value |
| -------- | ----- |
| Lighting | A black studio with an overhead softbox, a hard left strip, a right strip and a back rim. The logo also gets a soft key card from the upper left so its faces read bright. |
| Floor    | A dark mirror that fades to black. Keep the reflection subtle. |
| Finish   | A light vignette, fine film grain, and bloom only on the hottest highlights. |
| Signature motion | The 3 SB pieces slide in along the diagonal cuts and lock together, then a light sweeps across the chrome. |

All of this lives in code, in `src/brand/studio.js`, so every export matches.

---

## 7. Website: what's 3D, what's cinematic, what stays flat

| Section             | Treatment                                                                              | Why                         |
| ------------------- | -------------------------------------------------------------------------------------- | --------------------------- |
| **Hero**            | 🎬 **Cinematic.** The SB pieces fly in and lock together, a light sweeps the chrome, then "Systems over luck." fades in (about 4 s). After that, a slow idle drift. | First impression. It shows the logo is made of parts that lock into a system. |
| **Four sections**   | 🎬 **Scroll-driven.** The A B C D blocks drop in one by one as you scroll. | It explains the business model. |
| **Pricing**         | ✨ **Light motion.** The slabs drop into stacks once, when they come into view. | It shows that plans stack. |
| Proof / results     | Flat. Numbers, logos, screenshots. | Trust needs clarity. |
| Phone demo (missed call → text back) | A 3D phone mockup *video*, not live 3D. | It shows the product working. |
| Testimonials, FAQ, booking form, footer | **No 3D.** Flat black with silver type. | Speed and conversion. |

Rules:

- Use one cinematic moment per screen at most. Nothing autoplays after the hero.
- On mobile, show the pre-rendered MP4 or a still instead of live WebGL.
- Respect `prefers-reduced-motion` by showing the still.
- Keep the hero video at 4 MB or less, and aim for a page load under 2.5 s on 4G.

---

## 8. How to make the 3D parts

**Option A: this repo (fastest, already set up)**

```bash
npm install
npm run brand                                 # studio: preview every shot
npm run brand:render                          # all PNGs → brand/renders/
npm run brand:render -- --video hero          # cinematic hero MP4 (needs ffmpeg)
npm run brand:render -- --video avatar        # SB logo reveal, square
```

To change copy, edit the top of `src/brand/studio.js` (`SECTIONS`, `PLANS`) and the text inside `SHOTS`.

**Phone mockups** (missed call → text back, CRM screens, client sites): run `npm run dev`, open **Background**, click **System-Based look (black + silver)**, load a screen recording under **Media**, then press **Record**.

**Option B: live 3D on the site.** Export the extruded SB as a GLB, or load `sb-monogram.svg` straight into Spline and extrude it there. Embed it as a lazy-loaded canvas, and serve the MP4 or a still to mobile and reduced-motion users.

**Option C: film-grade.** Import `sb-monogram.svg` into Blender, extrude it to 0.3 with a small bevel, use a spun-metal shader in a black studio with strip lights, and render at 4K for ads and launch videos.

Export rules:

- GLB models: Draco-compressed, under 2 MB.
- Textures: KTX2 or WebP, 1K maximum.
- Always include a poster image.
- Video: H.264 MP4 plus WebM, muted, `playsinline`. Loop only the idle section.

---

## 9. Community kit: Pressure Built

Pressure Built is the System-Based community. Free leads to members, and members lead to done-for-you (System-Based services).

| Asset              | File                         | Size        |
| ------------------ | ---------------------------- | ----------- |
| Profile / avatar   | `renders/avatar.png`         | 1080 × 1080 |
| Logo reveal (intro / reel opener) | `renders/avatar-cinematic.mp4` | 1080 × 1080 |
| Feed post          | `renders/community.png`      | 1080 × 1350 |
| Story / reel cover | `renders/story.png`          | 1080 × 1920 |
| Banner / cover     | `renders/banner.png`         | 1500 × 500  |
| Website hero       | `renders/hero.png` + `hero-cinematic.mp4` | 1920 × 1080 |
| Services graphic   | `renders/sections.png`       | 1920 × 1080 |
| Pricing graphic    | `renders/pricing.png`        | 1920 × 1080 |

Post formula: a black background, one chrome headline, one line of body copy and one mono label. Sign off with "Systems over luck."

---

## 10. Next 7 days

1. Confirm the Pressure Built name and the tier names (Free / Members / Done-for-you).
2. Change every profile picture to `avatar.png` and every cover image to `banner.png`.
3. Put `hero-cinematic.mp4` in the website hero, then add the sections and pricing graphics.
4. Open Reels and TikToks with the logo reveal.
5. Record a missed-call → text-back demo on your phone. Run it through the phone mockup tool with the System-Based look applied.
6. Make case-study cards for Veterans Funeral Care, Wreck & Refine and Salvatore's once their services are confirmed.
