import type { Metadata } from "next";
import { cookies } from "next/headers";
import { AdminLoginForm } from "@/components/admin-login-form";
import { AdminLogoutButton } from "@/components/admin-logout-button";
import { ADMIN_SESSION_COOKIE, isAdminConfigured, isValidAdminSession } from "@/lib/admin-auth";
import { inquiryDatabase } from "@/lib/inquiry-database";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Inquiries",
  robots: { index: false, follow: false },
};

interface Inquiry {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  message: string;
  created_at: string;
}

export default async function AdminInquiriesPage() {
  const cookieStore = await cookies();
  const isAuthenticated = isValidAdminSession(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);

  if (!isAuthenticated) {
    return (
      <main className="admin-page section-wrap" id="main-content">
        <section className="admin-panel">
          <p className="eyebrow">BRICK BY BISHT · ADMIN</p>
          <h1>Inquiry inbox</h1>
          {isAdminConfigured() ? (
            <>
              <p>Sign in to view website inquiries.</p>
              <AdminLoginForm />
            </>
          ) : (
            <p className="admin-error" role="alert">
              Admin sign-in is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET on the server.
            </p>
          )}
        </section>
      </main>
    );
  }

  const inquiries = inquiryDatabase.prepare(`
    SELECT id, name, email, phone, message, created_at
    FROM inquiries
    ORDER BY created_at DESC, id DESC
    LIMIT 200
  `).all() as Inquiry[];

  return (
    <main className="admin-page section-wrap" id="main-content">
      <header className="admin-heading">
        <div>
          <p className="eyebrow">BRICK BY BISHT · ADMIN</p>
          <h1>Inquiry inbox</h1>
          <p>Showing the latest {inquiries.length} {inquiries.length === 1 ? "inquiry" : "inquiries"} (maximum 200).</p>
        </div>
        <AdminLogoutButton />
      </header>
      {inquiries.length === 0 ? (
        <section className="admin-panel"><p>No inquiries yet.</p></section>
      ) : (
        <div className="inquiry-list">
          {inquiries.map((inquiry) => (
            <article className="inquiry-card" key={inquiry.id}>
              <header>
                <h2>{inquiry.name}</h2>
                <time dateTime={`${inquiry.created_at.replace(" ", "T")}Z`}>{inquiry.created_at} UTC</time>
              </header>
              <div className="inquiry-contact">
                {inquiry.email && <a href={`mailto:${inquiry.email}`}>{inquiry.email}</a>}
                {inquiry.phone && <a href={`tel:${inquiry.phone}`}>{inquiry.phone}</a>}
              </div>
              <p className="inquiry-message">{inquiry.message}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
