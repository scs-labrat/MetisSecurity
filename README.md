# Asymmetric — Offensive Security Site

A seven-route public website for Asymmetric, a boutique offensive security
consultancy. Built with React + Vite + Tailwind, React Router, and Motion.
Visual system adapted from the BDSN reference: oversized Instrument Sans
typography, vast whitespace, full-width capability panels, a full-screen
navigation overlay, a desktop-only custom cursor, and restrained parallax.

## Routes

| Route | Page |
|---|---|
| `/` | Home — positioning + six capability panels + portrait + enquiry CTA |
| `/services` | Services — outcomes intro + six panels + three service families + FAQs |
| `/about` | About — principles, team, engagement process |
| `/contact` | Contact — enquiry form + contact details |
| `/services/penetration-testing` | Penetration Testing (sections: `#web-api`, `#cloud-identity`, `#internal-endpoint`) |
| `/services/adversary-simulation` | Adversary Simulation (section: `#connected-systems`) |
| `/services/ai-security` | AI Security |

Home and Services share the same six capability records. Every panel links to
a real service page or section anchor — there are no "coming soon" states.

## Editing content

All copy lives in typed data modules — no CMS required.

- **Site identity, contact, social, footer, time zone:**
  `src/lib/siteConfig.js`
- **Six capability panels (title, summary, cover image, destination):**
  `src/data/capabilities.js`
- **Three service pages (question, summary, facts, content blocks, related):**
  `src/data/services.js`
- **About page (intro, principles, team, process):**
  `src/data/team.js`

Service pages use one reusable template rendered by
`src/components/site/ServiceDetailRenderer.jsx`. Block types: `text`, `list`,
`statement`, `image`, `pair`. Add blocks to a service's `blocks` array to
extend a page.

## Images

Capability-panel and portrait imagery are AI-generated placeholders following
the brief's visual direction (macro-tech realism, monochrome, industrial).
Replace the URLs in `capabilities.js` and `services.js` with owned production
media. Use the `Image` component from `@/components/ui/image` for all content
images — it serves responsive, WebP-optimised variants.

## Configuring contact delivery

The enquiry form (`src/components/site/ContactForm.jsx`) is in **demo mode**
while `siteConfig.contact.deliveryConfigured` is `false`. In demo mode it
validates input and shows an honest "not yet delivered" preview — it never
claims a successful submission.

To go live:

1. Set `siteConfig.contact.email` to the real recipient.
2. Set `siteConfig.contact.deliveryConfigured` to `true`.
3. Wire `onSubmit` in `ContactForm.jsx` to your chosen handler (a backend
   function, form service, or email integration). The current submit handler
   is clearly marked with a simulated delay and a placeholder for the real
   call.

## Notes and remaining items

- Team biographies, contact details, and social links are **placeholders**.
  Replace with verified details before launch. Do not publish unsupported
  credentials, client logos, testimonials, or named case studies.
- Service copy is **proposed/draft**. Replace durations, deliverables, and
  engagement terms with Asymmetric's actual model.
- The custom cursor is desktop-only (fine pointer + hover, no reduced motion).
  Touch and keyboard keep the native cursor; all actions work without hover.
- Reduced-motion support disables parallax and cursor movement.
- Validate final responsive composition at 390, 768, 810, 1363, 1440, 1920px.
- This app is not yet published — publish it to get a live URL.

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # production build
``