"use client";

import { useState, FormEvent } from "react";
import { FloralDivider, BranchCorner } from "./BotanicalSVG";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";

type PresenceOption = "sim" | "nao" | "";

interface FormState {
  name: string;
  email: string;
  presence: PresenceOption;
  guests: string;
  meal: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  presence: "",
  guests: "1",
  meal: "",
  message: "",
};

export default function RSVP() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Por favor, informe seu nome.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Informe um e-mail válido.";
    if (!form.presence) e.presence = "Por favor, confirme sua presença.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError(null);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 bg-cream border ${
      err ? "border-rose" : "border-border"
    } font-body text-brown text-lg placeholder:text-muted/40 focus:outline-none focus:border-rose transition-colors duration-200`;

  const labelCls = "font-ui text-muted text-[10px] tracking-[0.22em] uppercase block mb-2";
  const errorCls = "font-ui text-rose text-[11px] mt-1.5 flex items-center gap-1";

  return (
    <section
      id="rsvp"
      className="py-24 md:py-36 bg-linen relative overflow-hidden"
    >
      {/* Corner botanical */}
      <BranchCorner className="absolute bottom-0 left-0 w-40 md:w-56 text-blush/25 pointer-events-none rotate-180" />

      <div className="max-w-2xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-4">
            Sua presença é nosso presente
          </p>
          <h2 className="font-display text-brown text-4xl md:text-5xl italic font-light tracking-tight leading-none mb-6">
            Confirmação de Presença
          </h2>
          <FloralDivider className="w-52 md:w-64 mx-auto text-blush mb-4" />
          <p className="font-body text-muted text-lg md:text-xl italic">
            Confirme até o dia <strong className="not-italic font-medium text-brown">15 de Novembro de 2026</strong>.
          </p>
        </div>

        {submitted ? (
          // Success state
          <div className="text-center py-16 px-8 border border-border bg-cream">
            <CheckCircle
              size={48}
              weight="light"
              className="text-sage mx-auto mb-6"
            />
            <h3 className="font-display text-brown text-2xl md:text-3xl italic font-light mb-4">
              Presença confirmada!
            </h3>
            <p className="font-body text-muted text-lg italic max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="not-italic font-medium text-brown">{form.name}</strong>. Estamos
              muito felizes em contar com você neste dia tão especial.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm(INITIAL); }}
              className="mt-8 font-ui text-[11px] tracking-[0.2em] uppercase text-muted/60 border-b border-muted/30 pb-0.5 hover:text-rose hover:border-rose transition-colors"
            >
              Adicionar outro convidado
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelCls}>Nome Completo</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={set("name")}
                placeholder="Seu nome"
                className={inputCls(errors.name)}
                autoComplete="name"
              />
              {errors.name && (
                <p className={errorCls}>
                  <WarningCircle size={13} weight="fill" />{errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelCls}>E-mail</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="seu@email.com"
                className={inputCls(errors.email)}
                autoComplete="email"
              />
              {errors.email && (
                <p className={errorCls}>
                  <WarningCircle size={13} weight="fill" />{errors.email}
                </p>
              )}
            </div>

            {/* Presence */}
            <div>
              <span className={labelCls}>Você vai comparecer?</span>
              {errors.presence && (
                <p className={`${errorCls} mb-2`}>
                  <WarningCircle size={13} weight="fill" />{errors.presence}
                </p>
              )}
              <div className="grid grid-cols-2 gap-3">
                {(["sim", "nao"] as PresenceOption[]).map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-center gap-2 px-4 py-3.5 border cursor-pointer transition-all duration-200 ${
                      form.presence === opt
                        ? "border-rose bg-rose/8 text-rose"
                        : "border-border text-muted hover:border-rose/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="presence"
                      value={opt}
                      checked={form.presence === opt}
                      onChange={set("presence")}
                      className="sr-only"
                    />
                    <span className="font-ui text-[11px] tracking-[0.2em] uppercase">
                      {opt === "sim" ? "Sim, estarei lá!" : "Infelizmente não"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Conditional fields when attending */}
            {form.presence === "sim" && (
              <>
                {/* Number of guests */}
                <div>
                  <label htmlFor="guests" className={labelCls}>
                    Número de Acompanhantes (além de você)
                  </label>
                  <select
                    id="guests"
                    value={form.guests}
                    onChange={set("guests")}
                    className={inputCls()}
                  >
                    {["0", "1", "2", "3"].map((n) => (
                      <option key={n} value={n}>
                        {n === "0" ? "Vou sozinho(a)" : `${n} acompanhante${n === "1" ? "" : "s"}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Meal preference */}
                <div>
                  <label htmlFor="meal" className={labelCls}>Restrição Alimentar</label>
                  <select
                    id="meal"
                    value={form.meal}
                    onChange={set("meal")}
                    className={inputCls()}
                  >
                    <option value="">Nenhuma restrição</option>
                    <option value="vegetariano">Vegetariano</option>
                    <option value="vegano">Vegano</option>
                    <option value="sem-gluten">Sem glúten</option>
                    <option value="sem-lactose">Sem lactose</option>
                    <option value="outro">Outro (informe na mensagem)</option>
                  </select>
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelCls}>
                Mensagem para os noivos (opcional)
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={set("message")}
                rows={4}
                placeholder="Deixe um recado especial..."
                className={`${inputCls()} resize-none`}
              />
            </div>

            {/* Server error */}
            {serverError && (
              <div className="flex items-start gap-2 px-4 py-3 border border-rose/40 bg-rose/5 text-rose">
                <WarningCircle size={15} weight="fill" className="shrink-0 mt-0.5" />
                <p className="font-ui text-[11px] tracking-wide">{serverError}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-4 bg-brown text-cream font-ui text-[11px] tracking-[0.28em] uppercase transition-all duration-300 hover:bg-rose-dark active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {/* Shimmer on loading */}
              {loading && (
                <span
                  className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                    animation: "shimmer 1.4s infinite",
                  }}
                />
              )}
              <span className="relative">
                {loading ? "Enviando..." : "Confirmar Presença"}
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
