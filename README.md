# Brick by Bisht Website

A responsive two-page website for Brick by Bisht, built with Next.js, React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The public pages are `/` and `/privacy-policy`.

## Checks
- The inquiry form sends submissions to `POST /api/inquiries` and stores them in `.data/inquiries.sqlite` using SQLite. The local database file is excluded from source control. For deployment, use persistent storage or configure a hosted database; ephemeral serverless filesystems do not guarantee retention.
```bash
npm run lint
npm run typecheck
The site has no CMS, analytics, or authentication. Inquiry submissions are stored locally in SQLite. Update page content in `app/page.tsx`, `app/privacy-policy/page.tsx`, and shared styles in `app/globals.css`.
```

## Content and launch setup

- `public/brick-by-bisht-logo.jpg` is the supplied brand image, copied without alteration. Replace it with an owner-provided transparent or alternate logo asset if one becomes available.
- Home-page property cards and remote Unsplash photos are illustrative only, not live listings or verified claims. Replace them with approved property details and appropriately licensed imagery before launch.
- No contact destination or form backend was supplied. The inquiry form validates in the browser but does not send or store messages; connect a verified destination before inviting inquiries. No contact details or social links are invented.
- The privacy policy is a draft with placeholders. The owner must confirm actual collection, usage, sharing, security, cookie, analytics, and legal practices, fill in the missing business details, and obtain appropriate legal review before launch.

## Configuration

The site has no backend, database, CMS, analytics, or authentication. Update page content in `app/page.tsx`, `app/privacy-policy/page.tsx`, and shared styles in `app/globals.css`.