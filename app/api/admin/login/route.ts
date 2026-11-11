import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSession,
  isAdminConfigured,
  isValidAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 2_048) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  if (!isAdminConfigured()) {
    return NextResponse.json({ error: "Admin sign-in is not configured on this server." }, { status: 503 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Enter your admin password." }, { status: 400 });
  }

  const password = payload && typeof payload === "object" && !Array.isArray(payload)
    ? (payload as Record<string, unknown>).password
    : null;
  if (typeof password !== "string" || password.length > 1024 || !isValidAdminPassword(password)) {
    return NextResponse.json({ error: "Incorrect admin password." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true }, {
    headers: { "Cache-Control": "no-store" },
  });
  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSession(), {
    httpOnly: true,
    maxAge: ADMIN_SESSION_MAX_AGE,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
