import { notFound } from "next/navigation";
import { convidados, getConvidadoById } from "@/data/convidados";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RSVPConvidado from "./RSVPConvidado";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const convidado = getConvidadoById(id);
  if (!convidado) return { title: "Convite não encontrado" };

  return {
    title: `${convidado.nome} — Confirmação de Presença`,
    description: `Confirme sua presença no casamento de Vanessa e Guilherme, dia 12 de Dezembro de 2026.`,
  };
}

export function generateStaticParams() {
  return convidados.map((c) => ({ id: c.id }));
}

export default async function ConfirmarPage({ params }: Props) {
  const { id } = await params;
  const convidado = getConvidadoById(id);

  if (!convidado) notFound();

  return (
    <>
      <Nav />
      <RSVPConvidado convidado={convidado} />
      <Footer />
    </>
  );
}
