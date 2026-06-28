"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FloralDivider, BranchCorner } from "@/components/BotanicalSVG";
import { WarningCircle } from "@phosphor-icons/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const id = code.trim();
    if (!id) {
      setError("Informe o código do seu convite.");
      return;
    }

    setLoading(true);
    setError("");

    const res = await fetch(`/api/convidado/${id}`);
    if (!res.ok) {
      setError("Código não encontrado. Verifique o seu convite.");
      setLoading(false);
      return;
    }

    router.push(`/landing/${id}`);
  }

  return (
    <>
      <Nav />
      <section className="min-h-dvh bg-cream pt-20 pb-16 relative">
        <BranchCorner className="absolute top-0 left-0 w-32 md:w-56 text-blush/40 pointer-events-none" />
        <BranchCorner flip className="absolute bottom-0 right-0 w-32 md:w-52 text-blush/30 pointer-events-none rotate-180" />

        <div className="max-w-md mx-auto px-4 sm:px-6 relative z-10 pt-10">
          <div className="text-center mb-10">
            <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-4">
              Confirmação de presença
            </p>
            <h1 className="font-display text-brown text-4xl md:text-5xl italic font-light tracking-tight leading-tight mb-4">
              Seu código de convite
            </h1>
            <FloralDivider className="w-52 mx-auto text-blush mb-6" />
            <p className="font-body text-muted text-lg italic">
              Digite o código que está no seu convite para confirmar sua presença.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <label htmlFor="code" className="font-ui text-muted text-[10px] tracking-[0.22em] uppercase block mb-2">
                Código do convite
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => { setCode(e.target.value); setError(""); }}
                placeholder="ex: AbC123"
                className={`w-full px-4 py-3.5 bg-white border min-h-[52px] font-body text-brown text-lg placeholder:text-muted/40 focus:outline-none focus:border-rose transition-colors duration-200 ${error ? "border-rose" : "border-border"}`}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
              />
              {error && (
                <p className="font-ui text-rose text-[11px] mt-1.5 flex items-center gap-1">
                  <WarningCircle size={12} weight="fill" /> {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-brown text-cream font-ui text-[11px] tracking-[0.28em] uppercase transition-all duration-300 hover:bg-rose-dark active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Buscando..." : "Acessar convite"}
            </button>
          </form>

          <div className="text-center mt-8">
            <a
              href="/"
              className="font-ui text-muted/50 text-[10px] tracking-[0.2em] uppercase hover:text-rose transition-colors border-b border-muted/20 pb-0.5"
            >
              Voltar ao site
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
