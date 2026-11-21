# System-Based website on GoHighLevel

There are two ways to deploy:

| Path                     | What goes into GHL                                                                                                                     | Use it when                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **A. Drop-in (current)** | One Custom JS/HTML element containing `ghl/drop/custom-code.html`. Assets load from jsDelivr, pinned to one commit of this public repo | The site lives on a GHL page (systembased.net)          |
| B. Static host + embed   | `npm run build:ghl -- --url …` writes an iframe embed for a site hosted elsewhere                                                      | You host the files yourself (Netlify, Cloudflare Pages) |

The rest of this guide covers path A.

## 1. Release process (path A)

Run every step from the website branch, in this order:

```bash
npm install
npm run test:content          # catalog + scenario guardrails
npm run test:e2e              # browser acceptance tests, desktop + phone (needs Playwright)
npm run build:ghl-dropin      # builds ghl/drop/assets + a draft custom-code.html
git add ghl/drop && git commit -m "Build GHL drop-in"
git push
npm run build:ghl-dropin -- --snippet-only --cdn "https://cdn.jsdelivr.net/gh/systembasedhq-bit/3d@$(git rev-parse HEAD)/ghl/drop/"
git add ghl/drop/custom-code.html && git commit -m "Pin GHL drop-in to $(git rev-parse --short HEAD~0)" && git push
```

The second build points every CSS and JS URL at the exact commit that holds those files. Asset names are content-hashed, so an old snippet never loads new code by accident, and a new snippet never loads stale code.

**Never** edit the minified files in `ghl/drop/assets` by hand.

## 2. Put it on the page

1. In GHL, open **Sites → Websites** and find the page published at `systembased.net`. Confirm it's the right one under **Settings → Domains**.
2. Open its Custom JS/HTML element and **replace** its whole contents with `ghl/drop/custom-code.html`. Fill in the `window.SB_CONFIG` block at the top (step 3).
3. Save, use **Preview**, then **Publish**.

The block moves the site to the top of `<body>` once, even if GHL runs the code twice. It hides only GHL's own empty page wrapper and leaves chat widgets, pixels and tracking scripts alone.

## 3. Settings (`window.SB_CONFIG`)

| Key             | Set it to                                                          | When blank                                                        |
| --------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `FORM_ENDPOINT` | The relay URL (step 4), or a GHL Inbound Webhook URL               | The form says sending isn’t switched on, and keeps what was typed |
| `FORM_MODE`     | `'relay'`, `'ghl'` or `'auto'`                                     | `'auto'` detects GHL webhook URLs                                 |
| `BOOKING_URL`   | GHL calendar permanent link                                        | No calendar after an inquiry                                      |
| `COMMUNITY_URL` | The working join link for the System-Based Business Community      | Visitors get an honest waitlist instead of a join button          |
| `CONTACT_EMAIL` | An inbox you read                                                  | Not shown                                                         |
| `SHOW_PROPOSED` | Keep `false` until prices are approved in `src/catalog/catalog.js` | Unapproved prices read “Confirmed after scoping”                  |

Only fill a value once it is real and tested. Never invent a link.

## 4. Form relay (recommended)

A webhook URL embedded in a public page can be read and spammed by anyone. Browsers also can’t confirm that GHL received the request. `relay/worker.js` (a Cloudflare Worker, free tier) fixes both:

- the real GHL webhook URL stays secret
- it accepts only `systembased.net`
- it validates fields and size, and drops bot submissions
- it rate-limits each visitor
- the same `sb_request_id` is never forwarded twice
- it answers `{ ok: true }` only after GHL accepts the record

The setup steps are at the top of `relay/worker.js`. Put the worker URL in `FORM_ENDPOINT`.

**Without the relay**, with `FORM_ENDPOINT` set to a GHL webhook URL, the site sends one form-encoded POST. The browser can’t read the response, so the success message says the inquiry was sent but couldn’t be confirmed. It isn’t marked as received.

## 5. Workflows

Use two workflows, so community sign-ups never get sales follow-up.

### a) Sales inquiry

**Trigger:** Inbound Webhook. Filter: `sb_intake_source` is `website_inquiry`.

1. **Create/Update Contact.** Match on email, then phone, according to your duplicate policy. Map `first_name`, `last_name`, `email`, `phone` and `company_name`.
2. **Custom fields.** Create these under Settings → Custom Fields, then map each one:
   - `sb_problem_id`, `sb_need`, `sb_scenario_id`
   - `sb_recommended_package`, `sb_accepted_package`, `sb_package`, `sb_interest`
   - `sb_services`, `sb_projects`, `sb_custom_proposal`, `sb_performance`
   - `sb_next_step`, `sb_message`, `sb_marketing_consent`
   - `sb_community_interest`, `sb_community_entry_point`
   - `sb_source_page`, `sb_request_id`
   - `utm_source`, `utm_medium`, `utm_campaign`
3. **Tags.** `tags` holds values such as `sb-inquiry,sb-pkg-capture,sb-problem-response`. If your tag action can't take a mapped value, branch on `sb_problem_id` and `sb_accepted_package` instead.
4. **Opportunity.** Use **Create/Update Opportunity** (not Create) in pipeline _System-Based Sales_, stage _New inquiry_. This keeps repeat submissions from making duplicate opportunities.
5. **Internal notification** to the owner. Include the name, business, `sb_need`, the accepted or recommended package, `sb_services`, `sb_next_step`, `sb_message` and the UTM source.
6. **Lead confirmation.** Send email by default. Send SMS **only** where you have consent, which `sb_marketing_consent` alone does not cover for promotional texts. Check the rules that apply to you.
7. A second workflow on **Appointment booked** (the fit-call calendar) moves the opportunity to _Fit call booked_.

### b) Community waitlist

**Trigger:** Inbound Webhook, or a separate relay target via `GHL_COMMUNITY_WEBHOOK_URL`. Filter: `sb_intake_source` is `community_waitlist`.

Create/Update the contact by email, add the tags `sb-community-waitlist` and `sb-community-interest`, and set `business_type`. **Do not** add these contacts to the sales pipeline or sales sequences. Email them when the community opens. Add `sb-community-member` only once someone has actually joined.

## 6. Verification after every release

1. Open `https://systembased.net` in a private window, so no cached copy is used.
2. In DevTools → Network, the CSS and JS should load from `cdn.jsdelivr.net/gh/systembasedhq-bit/3d@<the new commit>/…`. Check the hash matches `custom-code.html`.
3. Check the nav reads **Community** and there are no system codes in the walkthrough.
4. Pick a bottleneck, then scroll the walkthrough down and back up. The phone, the customer record and the owner view should stay in step.
5. Send a test inquiry. Check in GHL that the contact, custom fields, tags, single opportunity and owner notification all arrive. Then send it again and confirm no second opportunity appears.
6. Join the waitlist with a test email. Check it's tagged as community, with no opportunity created.
7. Repeat on a real phone, in both iOS Safari and Android Chrome.

## Known limits

- Search engines index the GHL page's title and description. The site body is rendered by JavaScript, so don't count on it being indexed until you've checked a rendered crawl.
- The walkthrough's businesses, people, times and numbers are illustrative and labelled as such. Client work is only published with approval (`src/site/work.js`).
