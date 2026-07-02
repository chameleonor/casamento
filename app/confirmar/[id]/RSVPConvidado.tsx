"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { FloralDivider, BranchCorner } from "@/components/BotanicalSVG";
import type { Convidado } from "@/data/convidados";

// iOS Safari fires onClick unreliably on buttons inside overflow:hidden containers.
// onTouchEnd with preventDefault() is the reliable cross-browser tap handler.
// onPointerDown fires immediately on touch (no 300ms delay) and is
// reliable across Safari iOS, Chrome iOS, and desktop browsers.
// Checking pointerType avoids double-firing on mouse/keyboard.
function tapProps(fn: () => void) {
  return {
    onPointerDown(e: React.PointerEvent<HTMLButtonElement>) {
      if (e.pointerType !== "mouse") {
        e.preventDefault();
        fn();
      }
    },
    onClick: fn, // handles mouse click + keyboard Enter/Space
  };
}

// ── Types ─────────────────────────────────────────────────────────────────────

type PresencaOpcao = "sim" | "nao" | "";

interface PessoaForm {
  nome: string;
  presenca: PresencaOpcao;
  refeicao: string;
}

interface FormState {
  email: string;
  mensagem: string;
  pessoas: PessoaForm[];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildInitialState(convidado: Convidado): FormState {
  return {
    email: convidado.email ?? "",
    mensagem: "",
    pessoas: convidado.convidados.map((nome) => ({
      nome,
      presenca: "" as PresencaOpcao,
      refeicao: "",
    })),
  };
}

// ── Sub-components ────────────────────────────────────────────────────────────

const labelCls = "font-ui text-muted text-[10px] tracking-[0.22em] uppercase block mb-2";
const inputCls = (err?: boolean) =>
  `w-full px-4 py-3.5 bg-cream border min-h-[52px] touch-manipulation ${err ? "border-rose" : "border-border"} font-body text-brown text-lg placeholder:text-muted/40 focus:outline-none focus:border-rose transition-colors duration-200`;

const REFEICAO_OPTIONS = [
  { value: "", label: "Sem restrição alimentar" },
  { value: "vegetariano", label: "Vegetariano" },
  { value: "vegano", label: "Vegano" },
  { value: "sem-gluten", label: "Sem glúten" },
  { value: "sem-lactose", label: "Sem lactose" },
  { value: "outro", label: "Outro (informe na mensagem)" },
];

function PessoaRow({
  pessoa,
  index,
  onChange,
  error,
}: {
  pessoa: PessoaForm;
  index: number;
  onChange: (i: number, field: keyof PessoaForm, value: string) => void;
  error?: string;
}) {
  return (
    <div className="py-6 border-b border-border last:border-b-0">
      {/* Name */}
      <div className="mb-4">
        <p className="font-display text-brown text-xl italic font-light leading-snug">
          {pessoa.nome}
        </p>
      </div>

      {/* Presence */}
      <div className="mb-4">
        <span className={labelCls}>Presença</span>
        {error && (
          <p className="font-ui text-rose text-[11px] flex items-center gap-1 mb-2">
            <WarningCircle size={12} weight="fill" /> {error}
          </p>
        )}
        <div className="grid grid-cols-2 gap-2">
          {(["sim", "nao"] as PresencaOpcao[]).map((opt) => (
            <button
              key={opt}
              type="button"
              {...tapProps(() => onChange(index, "presenca", opt))}
              className={`flex items-center justify-center px-3 py-4 border transition-colors duration-150 min-h-13 touch-manipulation cursor-pointer ${pessoa.presenca === opt
                ? "border-rose bg-rose/8 text-rose"
                : "border-border text-muted"
                }`}
            >
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase">
                {opt === "sim" ? "Estarei lá!" : "Não poderei ir"}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

function ListaPresentes() {
  return (
    <div className="border border-border bg-white/40 px-4 sm:px-6 py-10 h-full flex flex-col items-center text-center">
      <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-5">
        Lista de Presentes
      </p>
      <p className="font-body text-brown text-xl italic font-light leading-relaxed mb-4">
        Sua presença já é um grande presente para nós!
      </p>
      <p className="font-body text-muted text-base italic leading-relaxed mb-8 max-w-xs">
        Mas caso queira nos presentear e nos ajudar em nossa nova fase de
        casados, ficaremos muito agradecidos em recebê-lo!
      </p>
      <p className="mb-4">PIX QR CODE</p>
      <div className="relative w-56 h-56 max-w-full border border-border bg-cream p-2">
        <Image
          src="/images/PIX.jpg"
          alt="QR Code Pix"
          fill
          className="object-contain"
        />
      </div>

      <p className="mt-4">OU</p>

      <div className="mt-5 space-y-1">
        <p>Chaves PIX:</p>
        <p className="font-ui text-muted text-xs tracking-wide">
          CPF: <span className="text-brown">373.576.138-01</span>
        </p>
        <p className="font-ui text-muted text-xs tracking-wide">
          Cel: <span className="text-brown">(11) 97493-6023</span>
        </p>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface Props {
  convidado: Convidado;
}

export default function RSVPConvidado({ convidado }: Props) {
  const [form, setForm] = useState<FormState>(() => buildInitialState(convidado));
  const [presencaErrors, setPresencaErrors] = useState<Record<number, string>>({});
  const [emailError, setEmailError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ── Handlers ──────────────────────────────────────────────────────────────

  function updatePessoa(i: number, field: keyof PessoaForm, value: string) {
    setForm((prev) => {
      const pessoas = [...prev.pessoas];
      pessoas[i] = { ...pessoas[i], [field]: value };
      return { ...prev, pessoas };
    });
    if (field === "presenca") {
      setPresencaErrors((prev) => {
        const next = { ...prev };
        delete next[i];
        return next;
      });
    }
  }

  function validate(): boolean {
    const erros: Record<number, string> = {};
    form.pessoas.forEach((p, i) => {
      if (!p.presenca) erros[i] = "Informe a presença.";
    });
    setPresencaErrors(erros);

    let emailErr = "";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      emailErr = "Informe um e-mail válido para contato.";
    }
    setEmailError(emailErr);

    return Object.keys(erros).length === 0 && !emailErr;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          convidadoId: convidado.id,
          email: form.email,
          mensagem: form.mensagem,
          pessoas: form.pessoas,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Erro ao enviar. Tente novamente.");
      }

      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Erro ao enviar. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  // ── Derived state ──────────────────────────────────────────────────────────

  const totalConfirmados = form.pessoas.filter((p) => p.presenca === "sim").length;
  const alguemConfirmou = form.pessoas.some((p) => p.presenca === "sim");

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section className="min-h-dvh bg-cream pt-20 pb-16 relative">
      <BranchCorner className="absolute top-0 left-0 w-32 md:w-56 text-blush/40 pointer-events-none" />
      <BranchCorner flip className="absolute bottom-0 right-0 w-32 md:w-52 text-blush/30 pointer-events-none rotate-180" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-4">
            Convite pessoal
          </p>
          <h1 className="font-display text-brown text-4xl md:text-5xl italic font-light tracking-tight leading-tight mb-2">
            Olá, {convidado.nome}!
          </h1>
          <p className="font-body text-muted text-lg md:text-xl italic mb-6">
            Estamos muito felizes em convidá-lo para o nosso grande dia.
          </p>
          <FloralDivider className="w-52 mx-auto text-blush" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left: RSVP form */}
          <div className="w-full max-w-xl mx-auto md:mx-0">
            {submitted ? (
              // ── Success ──────────────────────────────────────────────────
              <div className="text-center py-14 px-6 border border-border bg-linen">
                <CheckCircle size={44} weight="light" className="text-sage mx-auto mb-5" />
                <h2 className="font-display text-brown text-2xl italic font-light mb-3">
                  Confirmação recebida!
                </h2>
                <p className="font-body text-muted text-lg italic leading-relaxed max-w-xs mx-auto">
                  {alguemConfirmou
                    ? `Recebemos a confirmação de ${totalConfirmados} pessoa${totalConfirmados > 1 ? "s" : ""}. Mal podemos esperar!`
                    : "Sentiremos sua falta. Obrigado por nos avisar."}
                </p>
              </div>
            ) : (
              // ── Form ─────────────────────────────────────────────────────
              <form onSubmit={handleSubmit} noValidate>

                {/* Person rows */}
                <div className="border border-border bg-white/40 px-4 sm:px-6 mb-6">
                  {form.pessoas.map((pessoa, i) => (
                    <PessoaRow
                      key={i}
                      pessoa={pessoa}
                      index={i}
                      onChange={updatePessoa}
                      error={presencaErrors[i]}
                    />
                  ))}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className={labelCls}>E-mail de contato</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, email: e.target.value }));
                      setEmailError("");
                    }}
                    placeholder="seu@email.com"
                    className={inputCls(!!emailError)}
                    autoComplete="email"
                  />
                  {emailError && (
                    <p className="font-ui text-rose text-[11px] mt-1.5 flex items-center gap-1">
                      <WarningCircle size={12} weight="fill" /> {emailError}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="mensagem" className={labelCls}>
                    Mensagem para os noivos (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    value={form.mensagem}
                    onChange={(e) => setForm((p) => ({ ...p, mensagem: e.target.value }))}
                    rows={3}
                    placeholder="Deixe um recado especial..."
                    className={`${inputCls()} resize-none`}
                  />
                </div>

                {/* Server error */}
                {serverError && (
                  <div className="flex items-start gap-2 px-4 py-3 border border-rose/40 bg-rose/5 mb-5">
                    <WarningCircle size={14} weight="fill" className="text-rose shrink-0 mt-0.5" />
                    <p className="font-ui text-rose text-[11px] tracking-wide">{serverError}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brown text-cream font-ui text-[11px] tracking-[0.28em] uppercase transition-all duration-300 hover:bg-rose-dark active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Confirmar Presença"}
                </button>
              </form>
            )}
          </div>

          {/* Right: Lista de Presentes */}
          <div className="w-full max-w-xl mx-auto md:mx-0">
            <ListaPresentes />
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="font-ui text-muted/50 text-[10px] tracking-[0.2em] uppercase hover:text-rose transition-colors border-b border-muted/20 pb-0.5"
          >
            Ver detalhes do casamento
          </a>
        </div>
      </div>
    </section>
  );
}
