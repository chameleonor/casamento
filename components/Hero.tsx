import Image from "next/image";
import { BranchCorner, LeafSprig } from "./BotanicalSVG";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Início"
      className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-2 relative overflow-hidden max-w-305 mx-auto"
    >
      {/* ── Left panel ── */}
      <div className="relative flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-24 pt-28 pb-24 bg-cream order-2 md:order-1">

        {/* Mobile background photo with heavy cream overlay */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/first_section.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-cream/80" />
        </div>

        {/* Botanical corner decoration */}
        <BranchCorner className="absolute top-0 left-0 w-36 md:w-52 text-blush/50 pointer-events-none" />
        <BranchCorner flip className="absolute bottom-0 right-0 w-28 md:hidden text-blush/35 pointer-events-none rotate-180" />

        {/* Save the date label */}
        <p className="animate-fade-in delay-0 font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-5 relative z-10">
          Save the Date
        </p>

        {/* Names */}
        <div className="relative z-10">
          <h1 className="animate-fade-in-up delay-100 font-display text-brown leading-none tracking-tighter">
            <span className="block text-[clamp(3rem,10vw,5.5rem)] font-light italic">
              Vanessa
            </span>
            <span className="block text-5xl font-light italic text-rose">
              &
            </span>
            <span className="block text-[clamp(3rem,10vw,5.5rem)] font-light italic">
              Guilherme
            </span>
          </h1>
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500 relative z-10 flex flex-col sm:flex-row gap-3 pt-10">
          <a
            href="/landing"
            className="inline-flex items-center justify-center px-6 py-4 bg-rose text-cream font-ui text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:bg-rose-dark active:scale-[0.98] min-h-[48px]"
          >
            Confirmar Presença
          </a>

          <div className="bg-cream/90 backdrop-blur-sm px-6 py-3 border border-border/60 text-center">
            <p className="text-[22px] text-brown text-sm italic tracking-wide">08.08.2026</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-float absolute bottom-6 left-1/2 md:left-14 lg:left-24 -translate-x-1/2 md:translate-x-0 z-10 flex flex-col items-center gap-1.5">
          <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-muted/50">
            Scroll
          </span>
          <ArrowDown size={13} weight="light" className="text-blush" />
        </div>
      </div>

      {/* ── Right panel — desktop only ── */}
      <div className="relative hidden md:flex md:flex-col md:justify-center order-2 bg-linen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/first_section.jpg"
            alt="Vanessa e Guilherme"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-linen/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-rose/5 mix-blend-multiply" />
        </div>

        {/* Decorative borders */}
        <div className="absolute inset-6 border border-blush/30 pointer-events-none z-10" />
        <div className="absolute inset-10 border border-blush/15 pointer-events-none z-10" />

        {/* Floating leaf */}
        <LeafSprig className="absolute bottom-8 right-6 w-10 text-cream/70 pointer-events-none z-20 animate-float" />

        {/* Date badge */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 bg-cream/90 backdrop-blur-sm border border-border/60 text-center">
          <a
            href="#historia"
            className="inline-flex items-center justify-center px-4 py-2 border border-border text-muted font-ui text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:border-rose hover:text-rose active:scale-[0.98] min-h-[48px]"
          >
            Nossa História
          </a>
        </div>
      </div>
    </section>
  );
}
