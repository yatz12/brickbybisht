"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Brand() {
  return (
    <Link aria-label="Brick by Bisht home" className="brand" href="/">
      <Image
        alt=""
        className="brand-mark"
        height={48}
        src="/brick-by-bisht-logo.jpg"
        width={48}
      />
      <span className="brand-name">BRICK <span>BY</span> BISHT</span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const currentPage = pathname === "/privacy-policy" ? "privacy" : "home";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Main navigation" className="mobile-nav">
            <Link aria-current={currentPage === "home" ? "page" : undefined} href="/">Home</Link>
            <Link aria-current={currentPage === "privacy" ? "page" : undefined} href="/privacy-policy">Privacy Policy</Link>
          </nav>
        </details>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link aria-current={currentPage === "home" ? "page" : undefined} href="/">Home</Link>
          <Link aria-current={currentPage === "privacy" ? "page" : undefined} href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Brand />
        <p>Trusted Real Estate Consultant, made personal.</p>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        <span className="footer-copyright">© {new Date().getFullYear()} Brick by Bisht</span>
      </div>
    </footer>
  );
}