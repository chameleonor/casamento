import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { FloralDivider, BranchCorner } from "./BotanicalSVG";
import { CalendarBlank, MapPin } from "@phosphor-icons/react/dist/ssr";

// Substitua pela URL de incorporação do Google Maps:
// Maps > Compartilhar > Incorporar um mapa > copiar src do iframe
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7312.881835015385!2d-46.6807391!3d-23.588514999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744a10b61b7%3A0xe8df26d5ebf3284a!2sR%C3%A1scal%20-%20Itaim!5e0!3m2!1sen!2sbr!4v1782677010067!5m2!1sen!2sbr";

export default function EventDetails() {
  return (
    <section
      id="detalhes"
      aria-label="Detalhes do Evento"
      className="py-24 md:py-36 bg-cream relative overflow-hidden"
    >
      <BranchCorner
        flip
        className="absolute top-0 right-0 w-48 md:w-64 text-blush/30 pointer-events-none"
      />
      <BranchCorner
        className="absolute bottom-0 left-0 w-36 md:w-52 text-blush/20 pointer-events-none rotate-180"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <AnimateIn>
            <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-4">
              Tudo o que você precisa saber
            </p>
            <h2 className="font-display text-brown text-4xl md:text-5xl lg:text-6xl italic font-light tracking-tight leading-none mb-6">
              Detalhes do Evento
            </h2>
            <FloralDivider className="w-52 md:w-64 mx-auto text-blush" />
          </AnimateIn>
        </div>

        {/* Local e Horário */}
        <div className="mb-20 md:mb-28">
          <AnimateIn>
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
              <span className="font-ui text-rose text-[11px] tracking-[0.3em] uppercase text-3xl md:text-xl">
                Local e Horário
              </span>
              <div className="flex items-center gap-2">
                <CalendarBlank size={13} weight="light" className="text-blush" />
                <span className="font-ui text-brown text-[11px] tracking-[0.2em] uppercase">
                  Sábado, 08 de Agosto de 2026
                </span>
              </div>
            </div>            <div className="text-center mb-10">
              <p className="font-body text-muted text-lg md:text-xl leading-relaxed mb-8 italic max-w-2xl mx-auto">
                Escolhemos celebrar nossa união de forma simples, em um dos restaurantes
                preferidos por nós — juntos de nossos amigos e familiares mais próximos.
              </p>
              <h3 className="font-display text-brown text-3xl md:text-4xl italic font-light mb-2 leading-snug">
                Ráscal — Itaim
              </h3>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} weight="light" className="text-blush shrink-0" />
                <p className="font-body text-muted text-lg leading-snug">
                  R. Leopoldo Couto Magalhães Jr., 1100 — Itaim Bibi, São Paulo
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Photo + map side by side */}
          <AnimateIn delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="relative aspect-4/3 overflow-hidden border border-blush/20">
              <Image
                src="/images/rasacal.jpeg"
                alt="Ráscal Itaim"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-rose/6 mix-blend-multiply pointer-events-none" />
            </div>
            <div className="aspect-4/3 overflow-hidden border border-border">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do evento"
              />
            </div>
          </AnimateIn>
        </div>

        {/* Dress Code */}
        <AnimateIn delay={80}>
          <div className=" border-border">
            <span className="font-ui text-rose text-[11px] tracking-[0.3em] text-3xl md:text-xl uppercase block mb-5 pb-3 border-b border-border">
              Dress Code
            </span>
            <div className="flex flex-col items-center text-center gap-8 max-w-md mx-auto">
              <p className="font-body text-muted text-lg md:text-xl leading-relaxed italic">
                Casual Chic. Conforto com toque de elegância! Sugerimos saias, vestidos
                longos ou midis, tailleur; calças de alfaiataria, camisas e blazers.
              </p>
              <div className="relative overflow-hidden border border-blush/20 w-full max-w-xs">
                <Image
                  src="/images/casual.jpg"
                  alt="Dress code exemplo"
                  width={0}
                  height={0}
                  sizes="320px"
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="absolute inset-0 bg-rose/6 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
