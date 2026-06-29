import { FloralDivider, WreathSmall, LeafSprig } from "./BotanicalSVG";
import { Heart } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream/80 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #c9a08c 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating botanicals */}
      <LeafSprig className="absolute top-6 right-8 w-8 text-cream/10 pointer-events-none animate-float" />
      <LeafSprig className="absolute bottom-12 left-8 w-6 text-cream/10 pointer-events-none animate-float [animation-delay:2s]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Wreath with monogram */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <WreathSmall className="absolute inset-0 text-blush/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display italic text-cream/90 text-2xl tracking-wide select-none">
              V&G
            </span>
          </div>
        </div>

        {/* Names */}
        <h2 className="font-display italic font-light text-cream text-4xl md:text-5xl tracking-tight leading-none mb-3">
          Vanessa & Guilherme
        </h2>

        {/* Divider */}
        <FloralDivider className="w-48 md:w-56 mx-auto text-blush/50 my-6" />

        {/* Date */}
        <p className="font-ui text-cream/60 text-[10px] tracking-[0.35em] uppercase mb-2">
          08 · Agosto · 2026
        </p>
        <p className="font-body text-cream/50 text-base italic mb-12">
          São Paulo, Brasil
        </p>

        {/* Marquee */}
        <div className="overflow-hidden mb-12 border-t border-b border-cream/10 py-4">
          <div className="flex whitespace-nowrap animate-marquee gap-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="font-display italic text-cream/25 text-sm tracking-widest mr-10"
              >
                Vanessa &amp; Guilherme &middot; 08.08.2026 &middot;
              </span>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {[
            ["Início", "/#inicio"],
            ["Nossa História", "/#historia"],
            ["Galeria", "/#galeria"],
            ["Detalhes", "/#detalhes"],
            ["Confirmação", "/landing"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-ui text-cream/40 text-[10px] tracking-[0.22em] uppercase hover:text-blush transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Bottom line */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-center gap-2 text-center">
          <p className="font-ui text-cream/30 text-[10px] tracking-[0.15em] flex items-center gap-1.5">
            Feito com{" "}
            <Heart size={11} weight="fill" className="text-blush/60" />
            {" "}para o nosso grande dia
          </p>
        </div>
      </div>
    </footer>
  );
}
