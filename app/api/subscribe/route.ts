import { NextResponse } from "next/server";

// Newsletter signup → Resend.
// Adds the email to a Resend Audience and (best-effort) sends a welcome email.
// Uses Resend's REST API directly so there's no extra dependency.
//
// Required env (set in .env.local — see .env.example):
//   RESEND_API_KEY       your Resend API key (server-side only, never exposed)
//   RESEND_AUDIENCE_ID   the Audience to add contacts to
// Optional:
//   RESEND_FROM          welcome-email sender, e.g. "roadtripsa <hello@roadtripsa.co.za>"
//                        (needs a verified domain in Resend; falls back to a no-op)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type CreateResult = { ok: true } | { ok: false; status: number; detail: string };

/**
 * Add the contact to the segment/audience.
 * Tries the modern Contacts API (supports `segments` + custom `properties`).
 * If that 422s — typically an account still on the legacy "Audiences" model —
 * falls back to the legacy audience-scoped endpoint so signup still works.
 */
async function createContact(apiKey: string, audienceId: string, email: string, source: string): Promise<CreateResult> {
  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };

  const modern = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      unsubscribed: false,
      segments: [{ id: audienceId }],
      ...(source ? { properties: { source } } : {}),
    }),
  });
  if (modern.ok) return { ok: true };

  const modernDetail = await modern.text();
  if (modern.status !== 422) return { ok: false, status: modern.status, detail: modernDetail };

  // Legacy fallback: audience id lives in the URL path (no segments/properties).
  const legacy = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, unsubscribed: false }),
  });
  if (legacy.ok) return { ok: true };
  return { ok: false, status: legacy.status, detail: `modern 422: ${modernDetail} | legacy ${legacy.status}: ${await legacy.text()}` };
}

async function sendWelcomeEmail(apiKey: string, from: string, to: string) {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "Welcome to roadtripsa 🚗",
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:520px;margin:auto;color:#1c2a28">
            <h1 style="font-size:22px">Welcome aboard!</h1>
            <p style="line-height:1.6;color:#444">
              Thanks for subscribing to roadtripsa. You'll get honest, road-tested Southern-Africa travel
              guides and the occasional money-saving tip — no spam, unsubscribe anytime.
            </p>
            <p style="line-height:1.6;color:#444">Safe travels,<br/>The roadtripsa team</p>
          </div>`,
      }),
    });
    if (!res.ok) console.error("Resend welcome email failed:", res.status, await res.text());
  } catch (err) {
    // Welcome email is best-effort — a failure here must not fail the subscription.
    console.error("Resend welcome email error:", err);
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const audienceId = process.env.RESEND_AUDIENCE_ID?.trim();
  const from = process.env.RESEND_FROM?.trim();

  if (!apiKey || !audienceId) {
    console.error("Newsletter not configured: set RESEND_API_KEY and RESEND_AUDIENCE_ID.");
    return NextResponse.json({ error: "Newsletter is not configured yet." }, { status: 503 });
  }

  let email = "";
  let source = "";
  try {
    const body = await request.json();
    email = String(body?.email ?? "").trim().toLowerCase();
    // Optional signup-source tag (e.g. the page path) — stored as a custom
    // property so the list can be segmented later without form friction.
    source = String(body?.source ?? "").trim().slice(0, 120);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const result = await createContact(apiKey, audienceId, email, source);
    if (!result.ok) {
      console.error("Resend contact create failed:", result.status, result.detail);
      if (result.detail.includes("segments do not exist")) {
        console.error(
          "→ RESEND_AUDIENCE_ID doesn't match a segment in this account. " +
            "Copy the Segment/Audience ID from the Resend dashboard (Audiences → your segment → it's a UUID) into .env.local."
        );
      }
      return NextResponse.json({ error: "Sorry — something went wrong. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend contact create error:", err);
    return NextResponse.json({ error: "Sorry — something went wrong. Please try again." }, { status: 502 });
  }

  if (from) await sendWelcomeEmail(apiKey, from, email);

  return NextResponse.json({ ok: true });
}
