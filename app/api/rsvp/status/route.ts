import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Parâmetro id é obrigatório." }, { status: 400 });
  }

  if (!APPS_SCRIPT_URL) {
    console.error("APPS_SCRIPT_URL not configured");
    return NextResponse.json({ confirmado: false });
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?id=${encodeURIComponent(id)}`, {
      redirect: "follow",
    });

    if (!res.ok) {
      throw new Error(`Apps Script responded with ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json({ confirmado: Boolean(data.confirmado) });
  } catch (err) {
    console.error("RSVP status check error:", err);
    return NextResponse.json({ confirmado: false });
  }
}
