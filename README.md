# Brick by Bisht Website

A responsive two-page website for Brick by Bisht, built with Next.js, React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The public pages are `/` and `/privacy-policy`; the private inquiry inbox is at `/admin/inquiries`.

## Checks
- The inquiry form sends submissions to `POST /api/inquiries` and stores them in `.data/inquiries.sqlite` using SQLite. Phone numbers accept common formatting but must contain 7-15 digits; this is validated in the browser and by the API. The local database file is excluded from source control. For deployment, use persistent storage or configure a hosted database; ephemeral serverless filesystems do not guarantee retention.
```bash
npm run lint
npm run typecheck
```

## Content and launch setup

- `public/brick-by-bisht-logo.jpg` is the supplied brand image, copied without alteration. Replace it with an owner-provided transparent or alternate logo asset if one becomes available.
- Home-page property cards and remote Unsplash photos are illustrative only, not live listings or verified claims. Replace them with approved property details and appropriately licensed imagery before launch.
- No contact destination was supplied. The inquiry form validates submissions and stores them locally in SQLite, but does not forward messages to a contact destination; configure persistent storage and connect a verified destination before inviting inquiries. No contact details or social links are invented.
- The privacy policy describes the current website form, SQLite storage, admin access, and configured third-party image service. Confirm the production hosting, data-retention, and legal requirements before launch; the policy does not supply unverified business contact details or jurisdiction.

## Configuration

Configure admin sign-in before using `/admin/inquiries`:

```bash
export ADMIN_PASSWORD='use-a-long-unique-password'
export ADMIN_SESSION_SECRET="$(node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))")"
npm run dev
```

Set both variables in the server's environment for deployment; do not commit them to source control. The session secret must be at least 32 characters. The admin session expires after 12 hours. Inquiry data is stored in `.data/inquiries.sqlite`; production hosting must provide persistent storage for this file, otherwise inquiries may be lost on redeploy or restart. The inbox displays the latest 200 submissions.

The site has no CMS or analytics. Update page content in `app/page.tsx`, `app/privacy-policy/page.tsx`, and shared styles in `app/globals.css`.