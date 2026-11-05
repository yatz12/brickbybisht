# Brick by Bisht --- Website Build Instructions

## Role

Act as a senior full-stack engineer and UI/UX developer. Build a
polished, responsive real estate website for **Brick by Bisht** in the
current repository. Inspect the existing codebase before making changes
and preserve working conventions.

## 1. Goal and Scope

Build exactly two public pages: 1. Home (`/`) 2. Privacy Policy
(`/privacy-policy`)

Do not add extra public pages, dashboards, authentication, or AI
features in this initial build.

## 2. Brand and Visual Direction

-   Brand name: **BRICK BY BISHT**
-   Use the supplied logo asset if it exists in the repository. If
    missing, use a clearly marked placeholder and document that the
    official logo is needed. Do not redraw or distort the logo.
-   Burgundy highlight: `#800808`
-   Warm ivory background: `#F7F4F0`
-   Soft beige surfaces/borders: `#DED3C3`
-   Charcoal text: `#383431`
-   Keep warm ivory dominant; use burgundy selectively for logo
    emphasis, primary buttons, links, and key highlights.
-   Style: subtle, premium, trustworthy, elegant, minimal,
    investment-focused.
-   Use generous whitespace, readable typography, restrained shadows,
    soft borders, consistent spacing, and subtle hover/focus states.
-   Avoid neon colors, clutter, excessive gradients, and heavy
    animations.
-   Use the provided portfolio mockup/PDF as visual guidance if
    available. Mockup imagery and property details are illustrative, not
    verified facts.

## 3. Shared Header and Footer

### Header

-   Display Brick by Bisht logo/wordmark.
-   Navigation: `Home` and `Privacy Policy`.
-   Include `Get in Touch` only when a real contact destination is
    configured. Never invent contact details.
-   Provide accessible mobile navigation and indicate the current page.

### Footer

-   Repeat the brand identity and links to Home and Privacy Policy.
-   Show social links only when real URLs are provided.

## 4. Home Page (`/`)

Build these sections:

### Hero

-   Premium, warm real-estate imagery.
-   Headline: **"Beyond Properties. Towards Possibilities."**
-   Supporting copy: "Discover properties selected for your lifestyle
    and investment goals."
-   CTA: **"Explore Opportunities"**, linked to the featured-property
    section.

### Property Categories

Show a restrained category row/grid: - Residential - Plots & Land -
Commercial - India & Dubai

Treat these as categories, not claims that live inventory is available.

### Featured Opportunities

-   Show up to three attractive property cards using available
    licensed/royalty-free assets.
-   Cards may include image, category, title, location, and short
    description.
-   Until the owner supplies verified listing data, label cards as
    illustrative or use neutral placeholders.
-   Do not invent guaranteed returns, appreciation, rental income,
    approvals, infrastructure completion dates, or other investment
    claims.
-   Include meaningful image alt text and responsive image handling.

### Trust / Brand Statement

Use concise, grounded copy such as: - "Guiding you to smarter
investments." - "Transparent guidance. Trusted Real Estate Consultant."
Avoid guarantees or unsupported financial claims.

### Contact / Lead CTA

-   Provide a clear inquiry CTA.
-   If no contact details or form backend exist, create a front-end form
    with name, email/phone, and message fields plus validation.
-   Never claim a message was sent if no backend is connected; clearly
    indicate that integration must be configured.
-   Do not store sensitive information in browser storage.

## 5. Privacy Policy (`/privacy-policy`)

Create a readable, accessible page with sections: 1. Information We
Collect 2. How We Use Information 3. Data Sharing 4. Data Security 5.
Cookies and Analytics 6. Your Rights 7. Third-Party Links 8. Updates to
This Policy 9. Contact Us

Important: - Treat the policy as a draft until the owner confirms actual
data practices and legal requirements. - Do not claim the site uses or
does not use analytics, cookies, CRM tools, advertising pixels, or
third-party processors unless confirmed. - Use explicit placeholders for
missing details, such as `[Business contact email]`. - Do not invent a
registered company name, address, phone number, or legal jurisdiction. -
Document in README that the policy must be reviewed and finalized before
launch.

## 6. Technical Requirements

-   Inspect the repository, framework, package manager, assets, and
    scripts first.
-   Reuse the existing stack if configured.
-   If empty, prefer Next.js + TypeScript.
-   Keep the first version lightweight: no backend, database, CMS,
    authentication, or AI integration unless already required.
-   Use reusable components for header, footer, buttons, property cards,
    and sections.
-   Centralize design tokens using CSS variables or the existing design
    system.
-   Use semantic HTML, accessible labels, keyboard navigation, visible
    focus states, adequate contrast, and reduced-motion preferences.
-   Make the site responsive on mobile, tablet, and desktop.
-   Optimize images and avoid unnecessary dependencies.
-   Add page titles, meta descriptions, and social-sharing metadata
    where appropriate.
-   Ensure all internal links and CTAs work.

## 7. Suggested Structure

Adapt this to the repository rather than forcing it:

``` text
app/
  layout.tsx
  page.tsx
  privacy-policy/
    page.tsx
components/
  site-header.tsx
  site-footer.tsx
  property-card.tsx
  contact-section.tsx
public/
  images/
  logo/
styles/
  globals.css
README.md
```

## 8. Implementation Workflow

1.  Inspect the repository and available assets.
2.  Plan the smallest implementation that meets the requirements.
3.  Build shared layout, design tokens, Home, and Privacy Policy.
4.  Verify routes, navigation, responsive states, and form validation.
5.  Run available lint, type-check, and build commands.
6.  Fix implementation errors.
7.  Document setup, run/build commands, asset replacement, contact
    configuration, and privacy-policy review in README.
8.  Summarize changed files, commands run, verification results, and
    owner inputs still needed.

Do not claim a command passed unless you ran it. Do not stop at a plan
or mockup: implement the working website in the repository.

## 9. Acceptance Criteria

-   Exactly two public pages: Home and Privacy Policy.
-   Consistent Brick by Bisht brand identity.
-   Warm ivory dominant; burgundy is a restrained highlight.
-   Responsive and accessible layout.
-   No invented contact details, social links, or verified property
    claims.
-   No broken navigation or nonfunctional CTAs.
-   No false success message for an unconnected inquiry form.
-   Privacy policy marked for owner/legal review before launch.
-   Run available build/lint/type checks and report honestly.
-   README includes setup and launch instructions.

## 10. Future Direction --- Out of Scope for Initial Build

The separate six-month Investor's Saheli AI blueprint may inform future
enhancements such as analytics, real-estate knowledge retrieval (RAG),
research assistance, and a content calendar. These are not part of this
initial two-page public website. Keep the code extensible without
implementing those features now.
