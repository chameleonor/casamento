import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

export async function POST(req: NextRequest) {
  if (!APPS_SCRIPT_URL) {
    console.error("APPS_SCRIPT_URL not configured");
    return NextResponse.json(
      { error: "Serviço de confirmação não configurado." },
      { status: 503 }
    );
  }

  const body = await req.json();

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // Apps Script redirects — follow them
      redirect: "follow",
    });

    if (!res.ok) {
      throw new Error(`Apps Script responded with ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("RSVP submission error:", err);
    return NextResponse.json(
      { error: "Não foi possível salvar sua confirmação. Tente novamente." },
      { status: 500 }
    );
  }
}
