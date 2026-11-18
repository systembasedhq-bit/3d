# System Based: Brand System v1

Black and silver, one 3D part, and the system shows up the same way everywhere. This file is the whole brand. If something isn't in here, leave it out.

---

## 1. The idea

**"Your business, on a system."**

System Based sells four systems. The logo is those four systems: a 2×2 grid of chrome blocks.

| Block | Section                    | What's inside                                                          |
| ----- | -------------------------- | ---------------------------------------------------------------------- |
| **A** | Client Response System     | AI receptionist, missed-call text back, follow-up, booking, CRM         |
| **B** | Growth System              | Meta ads, landing pages, social media, reporting                        |
| **C** | Brand & Build              | Brand design, websites, graphics, mockups (quoted per project)          |
| **D** | Custom AI & Ops            | Custom agents, dashboards, connecting tools, SOPs                       |

Block **A** carries a small white **status light**. It means "system on" and "start here". Most clients buy A first. That dot is the brand's only accent, so don't add a second one.

Pricing uses the same blocks, stacked:

- **Basic, $1,200/mo** (3-month minimum): A
- **Growth, $1,500/mo** (2-month minimum): A + B
- **Full, $2,000/mo** (month-to-month): A + B + D, which means one custom agent and an owner dashboard
- **Performance option:** 10% per booked job, or match their ad spend
- **Brand & Build (C):** quoted per project

---

## 2. Logo

Files are in `brand/logo/`:

- `mark.svg`: the chrome 2×2 mark. Use it for the avatar, favicon and app icon.
- `mark-mono.svg`: a one-colour version that takes `currentColor`. Use it for embroidery, stamps, merch and single-ink print.
- `lockup.svg`: the mark plus the SYSTEM BASED wordmark. Outline the text before you send it to print.
- 3D avatar: `brand/renders/avatar.png`

Rules:

- **Clear space:** leave at least one block's width of space on every side.
- **Minimum size:** 20 px for the mark and 120 px wide for the lockup.
- **Backgrounds:** black or very dark grey only. On white, use `mark-mono.svg` in Obsidian.
- **Never:** recolour it, add a gradient other than chrome, rotate it, outline it, add a drop shadow, or put it on a busy photo.
- **Wordmark:** always in capitals, in Michroma, with wide tracking (0.14em).

---

## 3. Colour

The split is about 80% black, 15% greys and 5% white. There is no brand colour, and that is deliberate: the chrome is the colour.

| Token           | Hex       | Use                                        |
| --------------- | --------- | ------------------------------------------ |
| `--sb-obsidian` | `#0A0A0B` | Page background                            |
| `--sb-carbon`   | `#141416` | Cards, panels                              |
| `--sb-graphite` | `#2A2C30` | Borders, dividers                          |
| `--sb-steel`    | `#5E636B` | Muted text, captions                       |
| `--sb-silver`   | `#B9BDC4` | Body text                                  |
| `--sb-chrome`   | `#E6E8EB` | Headings                                   |
| `--sb-white`    | `#F7F7F8` | Primary buttons, the status light          |

**Chrome gradient** (wordmark and large headlines only):
`linear-gradient(180deg, #fff 0%, #d9dce0 38%, #8a8f97 52%, #c9ccd1 66%, #f2f3f5 100%)`

Copy-paste tokens: `src/brand/tokens.css`.

---

## 4. Type

| Role       | Font               | Rules                                                     |
| ---------- | ------------------ | --------------------------------------------------------- |
| Display    | **Michroma**       | Wordmark and headlines of 8 words or fewer. One per screen. |
| Body / UI  | **Inter**          | 400 for body, 600 for buttons and names. Line height 1.5. |
| Labels     | **JetBrains Mono** | Capitals with tracking 0.2em: `SECTION A`, `BASIC · A`, numbers |

All three are free on Google Fonts.

---

## 5. Voice

Keep it short and plain, and talk about results, not tools. Say "booked jobs", not "AI-powered synergy".

Lines you can use:

- Your business, on a system.
- Every call answered. Every lead followed up. Every job booked.
- Four systems. One business.
- Stack the system you need.
- Built, run and reported by System Based.
- Pressure Built: free → members → done-for-you.

---

## 6. The 3D system

**There is one 3D part: the block.** Everything else comes from it.

| Spec       | Value                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Shape      | Rounded box, 1 × 1 × 0.42, corner radius 0.08                              |
| Material   | Metal 100%, roughness 0.15, slight brushed anisotropy, thin clear coat, colour `#D2D5DA` |
| Etching    | The section letter in JetBrains Mono, top-left of the face, dark grey      |
| Status light | Small white emissive dot on A only, with soft bloom                      |
| Lighting   | Black studio: an overhead softbox, a hard left strip, a right strip, a back rim and a wide low front card |
| Floor      | Dark mirror that fades to black. Reflections should be subtle, never the focus |
| Finish     | Light vignette and fine film grain                                         |

Arrangements:

- **The mark** (2×2): hero, avatar, banner, story
- **The row** (A B C D): services section
- **The stacks** (1, 2 and 3 slabs): pricing

All of this lives in code, in `src/brand/studio.js`, so every export matches.

---

## 7. Website: what is 3D, what is cinematic, what stays flat

Keep motion to three moments and make everything else fast and flat.

| Section             | Treatment                                                                              | Why                         |
| ------------------- | -------------------------------------------------------------------------------------- | --------------------------- |
| **Hero**            | 🎬 **Cinematic.** The blocks fly in, lock into the mark and the status light flicks on (about 3 s). After that, a slow idle drift. | First impression; it shows "system" in 3 seconds |
| **Four sections**   | 🎬 **Scroll-driven.** The mark pulls apart into the A B C D row as you scroll | Explains the business model |
| **Pricing**         | ✨ **Light motion.** The slabs drop into stacks once when they come into view          | Shows that plans stack      |
| Proof / results     | Flat. Numbers, logos, screenshots                                                      | Trust needs clarity         |
| Phone demo (missed call → text back) | 3D phone mockup *video*, not live 3D                                   | Shows the product working   |
| Testimonials, FAQ, booking form, footer | **No 3D.** Flat black, silver type                                 | Speed and conversion        |

Rules:

- Use one cinematic moment per screen at most. Don't autoplay anything after the hero.
- On mobile, show the pre-rendered MP4 or a still instead of live WebGL.
- Respect `prefers-reduced-motion`: show the still.
- The hero video should be 4 MB or less, and the page should load in under 2.5 s on 4G.

---

## 8. How to make the 3D parts

**Option A: this repo (fastest, already set up).**

```bash
npm install
npm run brand                                 # open the studio and preview every shot
npm run brand:render                          # export all PNGs to brand/renders/
npm run brand:render -- --video hero          # export the cinematic hero MP4 (needs ffmpeg)
```

Edit copy at the top of `src/brand/studio.js` (`SECTIONS`, `PLANS`) and the shot text in `SHOTS`.

**Phone mockups** (missed call → text back, CRM screens, client sites): run `npm run dev`, open **Background**, click **System Based look (black + silver)**, load a screen recording under **Media** and press **Record**.

**Option B: live 3D on the site.** Put the studio scene into the website's hero as a lazy-loaded `<canvas>`, and serve the MP4 and PNG to mobile and reduced-motion users. If the site is on Webflow or Framer, rebuild the block in **Spline** (rounded cube, metal material, black scene) and embed it. Copy the spec in §6 exactly.

**Option C: film-grade hero.** Export the blocks to **Blender**, then light and render them there for ads and launch videos. Use the same spec.

Export rules for anything 3D on the web:

- Models: GLB, Draco-compressed, under 2 MB
- Textures: KTX2 or WebP, 1K maximum
- Always ship a poster image
- Video: H.264 MP4 plus WebM, muted, `playsinline`, looped only for idle

---

## 9. Community kit: Pressure Built

Pressure Built is the System Based community. The free tier leads to the members tier, which leads to done-for-you (System Based services).

| Asset              | File                         | Size        |
| ------------------ | ---------------------------- | ----------- |
| Profile / avatar   | `renders/avatar.png`         | 1080 × 1080 |
| Feed post          | `renders/community.png`      | 1080 × 1350 |
| Story / reel cover | `renders/story.png`          | 1080 × 1920 |
| Banner / cover     | `renders/banner.png`         | 1500 × 500  |
| Website hero       | `renders/hero.png` + `hero-cinematic.mp4` | 1920 × 1080 |
| Services graphic   | `renders/sections.png`       | 1920 × 1080 |
| Pricing graphic    | `renders/pricing.png`        | 1920 × 1080 |

Post formula: a black background, one chrome headline, one line of body copy and one mono label. Nothing else.

---

## 10. Next 7 days

1. Lock the name and the mark. Confirm "Pressure Built" and the tier names (Free / Members / Done-for-you).
2. Swap every profile picture to `avatar.png` and every cover to `banner.png`.
3. Build the website hero with `hero-cinematic.mp4`, then add the sections and pricing graphics.
4. Record a missed-call → text-back demo on your phone and put it through the phone mockup tool with the System Based look.
5. Post `community.png` with the launch of the Pressure Built free tier.
6. Make client case-study cards for Veterans Funeral Care, Wreck & Refine and Salvatore's, once their services are confirmed.
