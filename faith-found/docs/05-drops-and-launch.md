# 05 · Drops and the J1 launch

Drop 01 opens **January 1, 2027 at 12:00 AM ET** ("J1"). From today (Nov 22, 2026) that is 40 days. After that, one drop roughly every two months for a year, with two of them chosen by vote.

## How the countdown works on the site

- Drop dates live in `DROPS` in `src/catalog.js`. The site always counts down to the **next drop whose date is still in the future**: the header chip (`T–39d 06:32:10`), the home hero, product pages and the Drops page.
- Products with `status: 'auto'` switch from **Notify me** to **Buy** by themselves at their drop's date and time. No one has to be awake at midnight. If a product has no checkout link yet, it shows "Coming soon · notify me" and a setup reminder instead of a broken button.
- The Flight Tag shows "In every Drop 01 box" until Drop 02, then becomes buyable.
- After J1 the home hero changes to "Drop 01 is open" and the header starts counting to Drop 02.
- Preview the after-launch site any time by adding `?preview=live` to the page address.

## The 40 days to J1

| When | Product | Site and marketing |
|---|---|---|
| **Now – Dec 1** | Send the product bible to suppliers: Richardson 112 (and Youth / L–XL blanks), hoodie blank, embroiderer, woven labels, steel fabricator, tag maker. Ask for samples and lead times. | Put the site live on GoHighLevel with the countdown. Connect the webhook so "Notify me" and the J1 reminder collect emails. Post the home intro (screen-recorded) as the teaser. |
| **Dec 1 – Dec 15** | Approve digitised embroidery and the steel DXF. Lock colourways and sizes (drop any that suppliers can't do). | One Studio film per product, Foundation then Emblem per line. |
| **Dec 15 – Dec 31** | Samples in hand: photograph them and add the photos to each product's `images`. Pack Flight Tags. | Create the GoHighLevel products and order forms; paste the checkout links into `buyUrl`. Check the site with `?preview=live`. Email the list on Dec 31: "Tomorrow." |
| **J1, 12:00 AM ET** | — | The site opens on its own. Email the list: "Drop 01 is open." |

**Decision to make now:** lead times for embroidery and cut steel can be 2–4 weeks after approval. If stock won't be on hand by J1, open Drop 01 as a **pre-order** with a clear ship date (add it to each product's `story` or `details`, and to `SETTINGS.shippingText`). The countdown and drop still happen on J1.

## The 12-month plan

| Drop | Date | What | Vote |
|---|---|---|---|
| **01 · Foundation** | Jan 1, 2027 (J1) | The six pieces. Every order ships with a Flight Tag. | — |
| **02 · Flight Tag & first colourways** | Mar 1, 2027 | The Flight Tag on its own; the first new colourways chosen from launch feedback. | Vote opens in February |
| **03 · Your pick, round one** | May 1, 2027 | The most-requested piece from the vote, made properly. | ✓ |
| **04 · Summer weight** | Jul 1, 2027 | Heavyweight tee in Foundation and Emblem. | — |
| **05 · The Nameplate** | Sep 1, 2027 | The cross-and-nameplate piece for desks and walls (from the earlier wall-piece kit) and the second vote winner. | ✓ |
| **06 · Gather** | Nov 1, 2027 | Holiday gift sets: cap + tag, hoodie + cap, wall piece in a gift box. | — |
| **07 · Year two** | Jan 1, 2028 (J1) | One year in: what you asked for most, and what comes next. | — |

### Month by month

| Month | Focus |
|---|---|
| Jan | Drop 01 live. Fulfil, collect reviews and photos. |
| Feb | Vote opens (Drops page). Restock decisions from sales. |
| Mar | Drop 02. Share vote standings. |
| Apr | Vote closes for Drop 03; sample the winner. |
| May | Drop 03. |
| Jun | Tee samples; first community photos on the site. |
| Jul | Drop 04. |
| Aug | Nameplate samples; second vote closes. |
| Sep | Drop 05. |
| Oct | Gift-set packaging; church and team orders. |
| Nov | Drop 06. |
| Dec | Year-one recap; tease Drop 07. |

## The vote ("what people want to see")

- The Drops page lists `REQUESTS` from the catalog (heavyweight tee, crewneck, beanie, rope cap, desk nameplate, youth sizes, patch set, church & team orders, more colours) plus a free-text box.
- Each vote posts to your GoHighLevel webhook with `source = faithfound-site:vote`, `requests` (comma-separated ids), `other`, `email` and `next_drop`. Build a GHL workflow that tags the contact with each request; the tag counts are your tally.
- Share the standings monthly by email. When a winner is chosen, add it as a product with its drop id; it appears on the site under that drop automatically.

## Adding a new drop

1. Add a row to `DROPS` (id, number, name, ISO date with time-zone offset, blurb, product ids, `vote: true` if it is a vote drop).
2. Add its products to `PRODUCTS` with `drop: '<id>'` and `status: 'auto'`.
3. Run `python3 build.py` and paste the new `dist/faith-found-site.html` into GoHighLevel.
