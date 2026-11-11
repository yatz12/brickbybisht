import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Brick by Bisht | Trusted Real Estate Consultant",
    template: "%s | Brick by Bisht",
  },
  description: "Discover property options selected for your lifestyle and investment goals with Brick by Bisht.",
  openGraph: {
    title: "Brick by Bisht | Trusted Real Estate Consultant",
    description: "Discover properties selected for your lifestyle and investment goals.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="site-layout">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div className="site-main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}