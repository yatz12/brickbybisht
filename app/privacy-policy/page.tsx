import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Brick by Bisht website handles inquiry and technical information.",
};

const sections = [
  {
    id: "scope",
    title: "1. Scope",
    body: "This policy describes information handled when you visit the Brick by Bisht website or use its inquiry form. It does not cover third-party websites or any separate services or transactions arranged outside this website.",
  },
  {
    id: "information-we-collect",
    title: "2. Information You Provide",
    body: "The inquiry form asks for your name and message. You may also provide an email address, a phone number, or both; at least one contact method is required. Your message may include details you choose to share about property interests, locations, preferences, or investment goals. The site records when an inquiry is submitted.",
  },
  {
    id: "how-we-use-information",
    title: "3. How Information Is Used",
    body: "Inquiry details are used to review and respond to your request and to understand the real estate information or consultation you are seeking. The website code does not include an account system, marketing mailing list, or automated property-matching feature.",
  },
  {
    id: "storage-and-retention",
    title: "4. Storage and Retention",
    body: "Submitted inquiries are stored in a SQLite database on the website server. The current website code does not automatically delete inquiries or set a retention period. They may remain in the database until the site operator deletes them or removes the database. The hosting environment may also keep technical logs under its own retention practices.",
  },
  {
    id: "sharing-and-service-providers",
    title: "5. Sharing and Service Providers",
    body: "The current website code does not send inquiry details to a CRM, advertising platform, analytics service, or real estate partner. Website hosting and infrastructure providers process requests to deliver the site and may process technical connection information. The site also loads illustrative photos from Unsplash; when those photos load, your browser connects to Unsplash and that service may receive technical information such as your IP address and browser details. Those providers handle information under their own privacy policies.",
  },
  {
    id: "cookies-and-analytics",
    title: "6. Cookies and Analytics",
    body: "The current website code does not include analytics or advertising scripts and does not set analytics or advertising cookies. When the administrator signs in, the site uses a strictly necessary HTTP-only session cookie to keep the private inquiry inbox accessible during that session; it expires after 12 hours. Hosting or security services may use technical logs, identifiers, or cookies to operate and protect the site; their use depends on the deployed hosting configuration.",
  },
  {
    id: "security",
    title: "7. Security",
    body: "Inquiry information is stored server-side. The inquiry inbox is restricted to an administrator authenticated with a password configured by the site operator; the session uses an HTTP-only cookie that expires after 12 hours. The website code does not define a separate retention schedule or describe the hosting provider's security controls. No method of internet transmission or storage can be guaranteed completely secure.",
  },
  {
    id: "your-choices-and-requests",
    title: "8. Your Choices and Privacy Requests",
    body: "You can choose what details to include in your message. To ask about an inquiry you submitted or request its deletion, use the website inquiry form and explain your request, including the contact details you used so the inquiry can be located. Requests will be handled subject to applicable law and the ability to verify and locate the information. Privacy rights vary by location.",
  },
  {
    id: "third-party-sites",
    title: "9. Third-Party Sites",
    body: "This site may link to third-party websites. Their privacy practices are governed by their own policies, which we encourage you to review before sharing information with them.",
  },
  {
    id: "changes-and-contact",
    title: "10. Changes and Contact",
    body: "This policy may be updated when the website's data practices change. The latest version will be posted on this page. For questions about this policy, use the inquiry form on the home page and include “Privacy request” in your message. Last updated: November 11, 2026.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page" id="main-content">
      <header className="policy-hero section-wrap">
        <p className="eyebrow">BRICK BY BISHT · WEBSITE POLICY</p>
        <h1>Privacy Policy</h1>
        <p className="policy-lede">This policy explains what information the Brick by Bisht website handles, how inquiry details are used, and where they are stored.</p>
        <p className="draft-notice">LAST UPDATED <span>·</span> NOVEMBER 11, 2026</p>
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
              {section.id === "sharing-and-service-providers" && (
                <p>
                  See <a href="https://www.unsplash.com/privacy" rel="noreferrer" target="_blank">Unsplash&apos;s Privacy Policy</a> for information about its practices.
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
