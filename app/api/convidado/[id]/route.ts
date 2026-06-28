import { NextResponse } from "next/server";
import { getConvidadoById } from "@/data/convidados";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const convidado = getConvidadoById(id);

  if (!convidado) {
    return NextResponse.json({ error: "Convidado não encontrado." }, { status: 404 });
  }

  return NextResponse.json({ id: convidado.id, nome: convidado.nome });
}
