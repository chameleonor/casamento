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

  // Normalize both submission formats into a flat payload for Apps Script.
  // Personalized route sends: { convidadoId, email, mensagem, pessoas[] }
  // Generic home form sends:  { name, email, presence, guests, meal, message }
  const payload = body.convidadoId
    ? normalizePersonalizado(body)
    : normalizeGenerico(body);

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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

// ── Normalizers ───────────────────────────────────────────────────────────────

interface PessoaPayload {
  nome: string;
  presenca: string;
  refeicao: string;
}

interface PersonalizadoBody {
  convidadoId: string;
  email: string;
  mensagem: string;
  pessoas: PessoaPayload[];
}

interface GenericoBody {
  name: string;
  email: string;
  presence: string;
  guests: string;
  meal: string;
  message: string;
}

// Personalized: one row per person
function normalizePersonalizado(body: PersonalizadoBody) {
  return {
    tipo: "personalizado",
    convidadoId: body.convidadoId,
    email: body.email,
    mensagem: body.mensagem,
    pessoas: body.pessoas.map((p) => ({
      nome: p.nome,
      presenca: p.presenca === "sim" ? "Confirmado" : "Não vai",
      refeicao: p.refeicao || "Nenhuma",
    })),
  };
}

// Generic home form: single row
function normalizeGenerico(body: GenericoBody) {
  return {
    tipo: "generico",
    nome: body.name,
    email: body.email,
    presenca: body.presence === "sim" ? "Confirmado" : "Não vai",
    acompanhantes: body.guests || "0",
    refeicao: body.meal || "Nenhuma",
    mensagem: body.message || "",
  };
}
