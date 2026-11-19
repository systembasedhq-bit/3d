# System-Based catalog

`catalog.js` is the single source of truth for what System-Based sells. The website reads it today. Proposals, onboarding, fulfillment and the System-Based OS should read the same file, or a JSON export of it.

| Export             | What it holds                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SYSTEMS`          | The four systems: categories of capability, never sold as products. `CR` 01 Client Response, `GR` 02 Growth, `BB` 03 Brand & Build, `AO` 04 AI & Operations |
| `SERVICES`         | 20 coded services (`CR-01` to `AO-05`). Each has its deliverables, what the client provides, ongoing ownership, and `soldAs`                                |
| `PACKAGES`         | Capture, Pipeline and Command. Each is a bundle of service codes, with its add-ons, implementation fee, management fee, term and limits                     |
| `PROJECTS`         | One-time builds, with a "from" price per type                                                                                                               |
| `PERFORMANCE`      | The proposed performance-pricing rules                                                                                                                      |
| `recommend(codes)` | Closest package for a set of services, plus add-ons, projects and a custom-proposal flag                                                                    |

## Decisions, not policy

Every commercial value is `{ value, approved }`. Until `approved: true`:

- with `CONFIG.SHOW_PROPOSED = true`, the site shows the value with a **Proposed** tag. Use this for review.
- with `CONFIG.SHOW_PROPOSED = false`, it shows "Confirmed on your fit call". Use this for launch.

Approve a value in the Business Architecture doc, then set `approved: true` here.

## Rules

- A code never changes meaning. Retire a service by removing it from packages, never by reusing its code.
- Every service sits in exactly one system.
- Packages reference service codes only, never copied text.

## Inquiry record: `system-based.inquiry.v1`

The website's inquiry form POSTs this JSON to `CONFIG.FORM_ENDPOINT`. A CRM webhook (GoHighLevel, Zapier, Make) can map it directly, and the System-Based OS can ingest it unchanged as a lead.

```json
{
  "schema": "system-based.inquiry.v1",
  "catalogVersion": "1.0.0",
  "submittedAt": "2026-11-19T18:04:00.000Z",
  "contact": { "name": "", "business": "", "phone": "", "email": "" },
  "need": { "text": "I need more people calling in the first place", "system": "GR" },
  "scope": {
    "interest": "Pipeline package",
    "package": "pipeline",
    "services": ["GR-01", "CR-01"],
    "projects": ["BB-01"],
    "customProposal": false,
    "performanceInterest": true
  },
  "message": "",
  "source": { "page": "https://…", "referrer": "", "utm": { "utm_source": "meta" } }
}
```

`need` is `null` when the visitor skipped the problem selector. `services` and `projects` are empty when they didn't use the composer or explorer.
