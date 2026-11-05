import { NextResponse } from "next/server";
import { inquiryDatabase } from "@/lib/inquiry-database";

export const runtime = "nodejs";

const insertInquiry = inquiryDatabase.prepare(`
  INSERT INTO inquiries (name, email, phone, message)
  VALUES (?, ?, ?, ?)
`);

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) {
    return NextResponse.json({ error: "Your inquiry is too long." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid inquiry." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Please submit a valid inquiry." }, { status: 400 });
  }

  const input = payload as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (name.length < 1 || name.length > 120) {
    return NextResponse.json({ error: "Enter a name up to 120 characters." }, { status: 400 });
  }
  if (email.length > 254 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (phone.length > 40 || (!email && !phone)) {
    return NextResponse.json({ error: "Enter an email address or phone number." }, { status: 400 });
  }
  if (message.length < 1 || message.length > 5000) {
    return NextResponse.json({ error: "Enter a message up to 5000 characters." }, { status: 400 });
  }

  try {
    const result = insertInquiry.run(name, email || null, phone || null, message);
    return NextResponse.json({ id: Number(result.lastInsertRowid) }, { status: 201 });
  } catch (error) {
    console.error("Failed to save contact inquiry", error);
    return NextResponse.json({ error: "Unable to save your inquiry right now." }, { status: 500 });
  }
}