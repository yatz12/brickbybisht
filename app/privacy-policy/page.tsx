import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy policy for Brick by Bisht. Owner review is required before launch.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: "When you submit the inquiry form, we collect your name, message, and the email address and/or phone number you provide. At least one contact method is required. Inquiry details are stored in the website's SQLite database. Confirm the retention period before publication.",
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    body: "Inquiry details are used to review and respond to your request. Confirm any additional uses before publication.",
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing",
    body: "[Confirm whether personal information is shared with service providers, property partners, or other third parties. Describe the recipients and circumstances, or state the verified practice here.]",
  },
  {
    id: "data-security",
    title: "4. Data Security",
    body: "[Describe the safeguards used to protect personal information after they have been confirmed by the site owner.]",
  },
  {
    id: "cookies-and-analytics",
    title: "5. Cookies and Analytics",
    body: "[Confirm whether this website uses cookies, analytics, advertising pixels, or similar technologies. Describe each tool and its purpose, or explain how the site works without them.]",
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    body: "Depending on applicable law, you may have rights relating to your personal information. [Confirm the applicable jurisdiction and describe the rights and process for making a request.]",
  },
  {
    id: "third-party-links",
    title: "7. Third-Party Links",
    body: "If links to third-party websites are added, their privacy practices are governed by their own policies. Review and update this section to reflect the links present on the published site.",
  },
  {
    id: "updates-to-this-policy",
    title: "8. Updates to This Policy",
    body: "[Describe how policy updates will be communicated.] Last updated: [Date to be confirmed].",
  },
  {
    id: "contact-us",
    title: "9. Contact Us",
    body: "For privacy questions or requests, contact [Business contact email]. [Add any other confirmed business contact details, if appropriate.]",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page" id="main-content">
      <header className="policy-hero section-wrap">
        <p className="eyebrow">BRICK BY BISHT · WEBSITE POLICY</p>
        <h1>Privacy Policy</h1>
        <p className="policy-lede">A clear account of how information is handled matters. This draft must be reviewed and completed by the site owner before publication.</p>
        <p className="draft-notice" role="note">DRAFT FOR OWNER REVIEW <span>·</span> Not final legal advice</p>
      </header>
      <div className="policy-layout section-wrap">
        <nav aria-label="Privacy policy sections" className="policy-nav">
          <p className="eyebrow">ON THIS PAGE</p>
          {sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title.replace(/^\d+\. /, "")}</a>)}
        </nav>
        <div className="policy-content">
          {sections.map((section) => (
            <section aria-labelledby={`${section.id}-title`} className="policy-section" id={section.id} key={section.id}>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <p className="policy-reminder">This policy contains placeholders and unverified statements. Confirm actual data practices, applicable legal requirements, and all bracketed details before launch.</p>
        </div>
      </div>
    </main>
  );
}