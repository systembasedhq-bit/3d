# System-Based website on GoHighLevel

GHL runs the domain, the page, tracking, the CRM, workflows, the calendar and the community. The website's files live on a free static host, and the GHL page shows them full-screen through one Custom Code element.

Why not paste the whole site into GHL? Its 3D engine and app code are over 700 KB, and GHL doesn't document a size limit for custom code. One small embed is the reliable route.

```
Visitor ──► systembased.net (GHL page) ──► full-screen embed of the site
                                             │
              inquiry form ──────────────────┴──► GHL Inbound Webhook workflow
                                                   ├─ create/update contact + custom fields
                                                   ├─ tags, opportunity in "System-Based Sales"
                                                   ├─ text the lead back, alert you
                                                   └─ calendar booking moves the stage
```

## 1. Build the GHL export

```bash
npm install
npm run build:ghl -- --url https://YOUR-HOST/
```

Run it again with the GHL links once you have them from steps 4 to 6:

```bash
npm run build:ghl -- --url https://YOUR-HOST/ --webhook "https://services.leadconnectorhq.com/hooks/…" --calendar "https://…/widget/booking/…" --community "https://…"
```

The build writes `ghl-export/`:

| File | What to do with it |
| --- | --- |
| `site-files/` and `site-files.zip` | Upload to your static host (step 2) |
| `custom-code.html` | Paste into the GHL page (step 3) |
| `sample-inquiry.json` | Test payload for the webhook (step 4) |

## 2. Host the site files (free)

Pick one host:

- **Netlify Drop**: drag the `site-files` folder onto app.netlify.com/drop. You get a URL like `https://name.netlify.app/`.
- **Cloudflare Pages**: Create project → Direct upload → upload `site-files.zip`.

Check that `https://YOUR-HOST/site/` opens the website. Then re-run step 1 with that `--url`, so the embed points at the right place.

## 3. Create the GHL page

1. Go to **Sites → Websites** (or Funnels) and create a site "System-Based" with a **blank** Home page.
2. Delete any default header, sections and footer.
3. Add one full-width section, and inside it one **Custom JS/HTML (Code)** element.
4. Paste the whole of `ghl-export/custom-code.html` into it, then save.
5. In page settings, set the SEO title to `System-Based · Systems over luck.` and add the meta description and favicon.
6. In **Settings → Domains**, connect `systembased.net` and make this page the homepage. Publish.

The embed covers the full screen, passes UTM tags and the real page URL through to the site, and fires `fbq('track','Lead')` and `gtag('event','generate_lead')` on the GHL page when someone sends an inquiry. Put your Meta Pixel and Google tags in the GHL page's tracking code as usual.

## 4. Inquiry → GHL workflow

1. **Automation → Workflows → Create → Start from scratch.**
2. **Trigger: Inbound Webhook.** Copy its URL. This is your `--webhook`. HighLevel lists Inbound Webhook as a premium trigger, so check your plan.
3. Rebuild (step 1), re-upload (step 2), and send one test inquiry from the live site. Or send the sample:

   ```bash
   curl -X POST "YOUR_WEBHOOK_URL" -H "Content-Type: application/json" -d @ghl-export/sample-inquiry.json
   ```

4. In the trigger, click **Fetch sample requests** and select the test.

How the site sends: it tries JSON first. If the browser blocks that request, it re-sends the same fields form-encoded, plus the full record as `payload`. Either way the top-level fields below arrive, so map those.

### Custom fields to create first

Create these under **Settings → Custom Fields**, as contact text fields:

| Webhook key | Custom field | Example |
| --- | --- | --- |
| `sb_interest` | SB Interest | Pipeline package |
| `sb_package` | SB Package | Pipeline |
| `sb_services` | SB Services | GR-01, CR-01 |
| `sb_projects` | SB Projects | BB-01 |
| `sb_system` | SB System | Growth |
| `sb_need` | SB Need | I need more people calling in the first place |
| `sb_custom_proposal` | SB Custom Proposal | yes / no |
| `sb_performance` | SB Performance Interest | yes / no |
| `sb_message` | SB Message | free text |
| `sb_source_page` | SB Source Page | the page URL |

### Workflow actions, in order

1. **Create/Update Contact.** Map `first_name`, `last_name`, `email`, `phone` and `company_name` to the standard fields, and each `sb_*` key to its custom field. Map `utm_source`, `utm_medium` and `utm_campaign` to your attribution fields.
2. **Add Tag `sb-inquiry`.** Every inquiry also carries a `tags` value, for example `sb-inquiry,sb-pkg-pipeline,sb-sys-gr,sb-performance`. Map it if your tag action accepts a mapped value. If not, add If/Else branches on `sb_package` and tag `sb-pkg-capture`, `sb-pkg-pipeline` or `sb-pkg-command`.
3. **Create/Update Opportunity.** Use the pipeline **System-Based Sales**, stage **New inquiry**, named "{company} – {SB Package}", with source "Website".
4. **Send SMS to the contact.** This is your own Client Response System at work: "Hey {first name}, it's System-Based. Got your scope for {SB Package}. Grab a time for your fit call: {calendar link}"
5. **Internal notification** to you, with every `sb_*` field.
6. **Wait 1 day → If/Else: appointment booked?** If not, send a follow-up SMS with the calendar link.

Pipeline **System-Based Sales** stages: New inquiry → Fit call booked → Proposal sent → Won → Lost.

## 5. Calendar

Create a **Fit call** calendar (20 minutes) and copy its permanent booking link. That's your `--calendar`. After someone sends an inquiry, the site shows this calendar right below the form. To show a button instead, set `BOOKING_EMBED: false` in `src/site/config.js`.

Add a second workflow with the trigger **Appointment status: booked** on that calendar, and move the opportunity to **Fit call booked**.

## 6. Pressure Built

Create the community in **GHL Communities** and use its join link as `--community`. Until then, the button reads "Get notified when it opens". People who click it arrive in the same workflow with the interest "Pressure Built community". Branch on that to tag them `pressure-built-waitlist`.

## 7. Chat widget (optional)

To add the GHL chat widget, paste its embed code into the same GHL page, either in the Custom Code element under the embed or in the page tracking code. It sits on top of the site.

## Launch checklist

- [ ] `https://YOUR-HOST/site/` loads, and the intro plays and skips
- [ ] systembased.net shows the site full-screen on desktop and phone
- [ ] A test inquiry creates the contact, custom fields, tags and opportunity
- [ ] The lead text-back and your internal notification arrive
- [ ] The calendar shows after sending, and a booking moves the opportunity
- [ ] The Meta Pixel `Lead` event fires on submit, checked with Pixel Helper
- [ ] `SHOW_PROPOSED: false` in `src/site/config.js`, unless all prices are approved

## Updating the site later

Edit, then run `npm run build:ghl -- …` with the same flags, and re-upload `site-files`. The GHL page and workflows don't change.

## Limits of this setup

Search engines index the GHL page's title and description, not the text inside the embedded site. If organic search becomes a priority, point the domain at the static host directly. GHL still does everything else through the same webhook, calendar and community links.
