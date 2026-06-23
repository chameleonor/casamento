import Image from "next/image";
import { BranchCorner, LeafSprig } from "./BotanicalSVG";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-[58fr_42fr] relative overflow-hidden"
    >
      {/* ── Left panel ── */}
      <div className="relative flex flex-col justify-center px-8 md:px-14 lg:px-24 pt-28 pb-20 bg-cream">
        {/* Botanical corner decoration */}
        <BranchCorner
          className="absolute top-0 left-0 w-40 md:w-52 text-blush/60 pointer-events-none"
        />
        <BranchCorner
          flip
          className="absolute bottom-0 right-0 md:hidden w-32 text-blush/40 pointer-events-none rotate-180"
        />

        {/* Save the date label */}
        <p className="animate-fade-in delay-0 font-ui text-muted text-[10px] md:text-[11px] tracking-[0.35em] uppercase mb-6 relative z-10">
          Save the Date
        </p>

        {/* Names */}
        <div className="relative z-10">
          <h1 className="animate-fade-in-up delay-100 font-display text-brown leading-none tracking-tighter">
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic">
              Vanessa
            </span>
            <span className="block text-2xl md:text-3xl font-light text-rose my-2 md:my-3 tracking-[0.15em] font-ui not-italic">
              &amp;
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic">
              Guilherme
            </span>
          </h1>
        </div>

        {/* Decorative thin line */}
        <div className="animate-fade-in delay-300 relative z-10 my-7 md:my-9 flex items-center gap-4">
          <span className="h-px w-8 bg-blush/60 block" />
          <span className="font-ui text-rose text-[9px] tracking-[0.3em] uppercase">
            12 · Dezembro · 2026
          </span>
          <span className="h-px w-8 bg-blush/60 block" />
        </div>

        {/* Location */}
        <p className="animate-fade-in delay-400 relative z-10 font-body text-muted text-lg md:text-xl italic mb-10">
          São Paulo, Brasil
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up delay-500 relative z-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-rose text-cream font-ui text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:bg-rose-dark active:scale-[0.98]"
          >
            Confirmar Presença
          </a>
          <a
            href="#historia"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-muted font-ui text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:border-rose hover:text-rose active:scale-[0.98]"
          >
            Nossa História
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#contagem"
          className="animate-float absolute bottom-8 left-1/2 md:left-14 lg:left-24 -translate-x-1/2 md:translate-x-0 text-blush flex flex-col items-center gap-2 group"
          aria-label="Rolar para baixo"
        >
          <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-muted/60 group-hover:text-rose transition-colors">
            Scroll
          </span>
          <ArrowDown size={14} weight="light" className="group-hover:text-rose transition-colors" />
        </a>
      </div>

      {/* ── Right panel — photo ── */}
      <div className="relative hidden md:block bg-linen">
        {/* Decorative frame offset */}
        <div className="absolute inset-6 border border-blush/30 pointer-events-none z-10" />
        <div className="absolute inset-10 border border-blush/15 pointer-events-none z-10" />

        {/* Couple photo — replace src with actual photo */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://picsum.photos/seed/romanticcouple/800/1100"
            alt="Vanessa e Guilherme"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          {/* Warm tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-linen/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-rose/5 mix-blend-multiply" />
        </div>

        {/* Botanical sprig corner */}
        <LeafSprig className="absolute bottom-8 right-6 w-10 text-cream/70 pointer-events-none z-20 animate-float" />

        {/* Date badge */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 bg-cream/90 backdrop-blur-sm px-6 py-3 border border-border/60 text-center">
          <p className="font-display text-brown text-sm italic tracking-wide">12.12.2026</p>
        </div>
      </div>
    </section>
  );
}
