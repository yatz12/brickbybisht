"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLogoutButton() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function logout() {
    setError("");
    try {
      const response = await fetch("/api/admin/logout", { method: "POST" });
      if (!response.ok) {
        setError("Unable to sign out. Please try again.");
        return;
      }
      router.refresh();
    } catch {
      setError("Unable to sign out. Check your connection and try again.");
    }
  }

  return (
    <div className="admin-logout-wrap">
      {error && <p aria-live="polite" className="admin-error" role="alert">{error}</p>}
      <button className="admin-logout" onClick={logout} type="button">Sign out</button>
    </div>
  );
}
