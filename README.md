# Universal Competency Academy website

Static, responsive UCA website with 21 extensionless routes. Implements the approved navy/cyan design family,15 marked layout corrections, a six-photo enhanced archive gallery, and an About page certificate collection.

## Local preview

Requires Node.js 22 or newer. Run `npm ci`, `npm run build`, then `npm run dev`. Open http://127.0.0.1:4173.

Content: `src/pages.mjs`, `src/revisions.mjs`, `src/certificates.mjs`. Styles: `public/styles.css`, `public/corrections.css`. Interactions: `public/app.js`.

## Cloudflare Workers

Connect this repository to Workers Builds. Build command: `npm run build`. Deploy command: `npx wrangler deploy`. Set build environment variable `SITE_URL` to your exact HTTPS origin, without a path. This enables canonical URLs and sitemap.xml.

`wrangler.jsonc` serves dist/ as static assets with extensionless URLs and a real 404 page. No Cloudflare account, domain or live deployment has been changed by this source delivery.

## Content and registration

- Gred 1:19–22 December 2026. Gred 2:26–29 December 2026. Both four days at IKBN Paloh Hinai, Pekan, Pahang.
- HRD Corp claimable RM 3,600; self pay RM 3,400. Other programmes depend on grants.
- PLKK 10 August 2026 remains a past intake. Historical benefits are not current offers.
- Visitors choose WhatsApp OR the supplied Google Form. Client reconfirmed the same Form on 17 November 2026 after being informed that its current choices list Sarawak/Kedah programmes.
- WhatsApp data stays in browser memory, is shown for review, and is sent only when the visitor opens WhatsApp and presses Send. Refreshing discards the draft. There is no website database.
- About contains supplied HRD Corp, CIDB and FELCRA certificates, full-size facsimiles and original PDF links. SSM is a company-registration summary; the report's personal/financial pages are not public.

## Verification —17 November 2026

- Build and local link/asset checks pass across 21 routes.
- Browser automation works. All 21 pages captured at 390,768,1440 and 2560 px:84 checks, no horizontal overflow or broken image findings.
- All 18 approved references compared at equal displayed widths. Page-specific structures, responsive icons, fees, partner strips, catalogue cards, schedule rows, archive filters and registration panels rebuilt.
- Browser-tested: mobile navigation, required fields, course/date selection, officer destination, formatted WhatsApp review, copy-message, editing, Back/Forward, gallery next/pause/lightbox and archive year/type filters.
- Local HTTP checks confirm normal routes, .html redirects and missing-page 404 status.
- Reduced-motion support implemented in CSS/JS; browser preference emulation was not available.
- Local Wrangler runtime remains unverified because this Windows environment rejects child-process startup (spawn EPERM). Standard static build succeeds. Validate the first Cloudflare deployment in its own environment.

Image mockups do not include an original font file or design tokens. Inter Variable is the visual match used here; body text scales from 18 px on phones to 28 px at 1440 px and 39 px at 2560 px. Responsive layouts deliberately reflow. A literal pixel-identical match is not claimed.

## Assets and provenance

Original UCA logo and course posters preserved. Gallery enhancements are separate from archived originals; enhanced images are not evidence of new events. Official IKBN and supplied ADTEC marks are used without redesign. Certificate wording, dates, signatures, seals and QR codes are preserved from original PDFs; imagegen created only their decorative presentation backdrop.

Full-size generated assets use lossless WebP; responsive variants reduce dimensions. Prompt and source records are in docs/ and asset manifests. Builtin imagegen does not expose a selectable numeric model version, so outputs are not labelled verified gpt-image-2.

## Search and launch handoff

`docs/seo-research.json` records keyword/competitor research. HTML contains page titles, descriptions and organisation schema. Set SITE_URL before deployment. Privacy page retains its marked draft paragraph pending the operator's final handling/retention terms.
