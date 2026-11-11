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

## Deploy to Render with brickbybisht.com

The repository includes a Render Blueprint in `render.yaml`. It creates a Node web service and mounts a persistent disk at `/var/data`, where the inquiry SQLite database is stored.

1. Push this repository to GitHub, then in Render choose **New → Blueprint** and connect `yatz12/brickbybisht`.
2. Before deploying, provide a strong, unique value for `ADMIN_PASSWORD` when prompted. Render generates `ADMIN_SESSION_SECRET` for the service.
3. After the service is live, open its Render dashboard and add `brickbybisht.com` and `www.brickbybisht.com` under **Settings → Custom Domains**.
4. At your domain's DNS provider, add the records Render displays for both hostnames. Wait for DNS propagation and Render's TLS certificate provisioning; use Render's domain status as confirmation that both DNS and HTTPS are ready.
5. Test the public site, submit a test inquiry, and sign in at `https://brickbybisht.com/admin/inquiries`. Verify the submission appears in the inbox.

The Render service uses a paid Starter instance because Render persistent disks are not available on its free web-service tier. Keep the disk attached: the SQLite database lives there. Do not remove or replace it without first backing up inquiry data.

For local development, configure admin sign-in before using `/admin/inquiries`:

```bash
export ADMIN_PASSWORD='use-a-long-unique-password'
export ADMIN_SESSION_SECRET="$(node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))")"
npm run dev
```

Do not commit either secret to source control. The session secret must be at least 32 characters. The admin session expires after 12 hours. The inbox displays the latest 200 submissions.

The site has no CMS or analytics. Update page content in `app/page.tsx`, `app/privacy-policy/page.tsx`, and shared styles in `app/globals.css`.