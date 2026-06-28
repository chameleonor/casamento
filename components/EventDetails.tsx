import AnimateIn from "./AnimateIn";
import { FloralDivider, BranchCorner } from "./BotanicalSVG";
import { MapPin, Clock, CalendarBlank, Heart, Dress } from "@phosphor-icons/react/dist/ssr";

const EVENTS = [
  {
    type: "Cerimônia",
    time: "16h00",
    venue: "Igreja Nossa Senhora das Graças",
    address: "R. das Acácias, 144 – Jardins",
    city: "São Paulo – SP",
    note: "Pedimos que os convidados cheguem com 15 minutos de antecedência.",
    mapUrl: "#",
  },
  {
    type: "Recepção",
    time: "18h30",
    venue: "Casa de Festas La Belle",
    address: "Av. das Rosas, 2450 – Moema",
    city: "São Paulo – SP",
    note: "Jantar, dança e muita celebração. A festa vai até a madrugada.",
    mapUrl: "#",
  },
];

const DETAILS = [
  {
    icon: CalendarBlank,
    label: "Data",
    value: "Sábado, 12 de Dezembro de 2026",
  },
  {
    icon: Heart,
    label: "Dress Code",
    value: "Esporte Fino · Tons Pastéis",
  },
  {
    icon: Dress,
    label: "Observação",
    value: "Gentileza evitar branco, off-white e tons muito próximos.",
  },
];

export default function EventDetails() {
  return (
    <section
      id="detalhes"
      aria-label="Detalhes do Evento"
      className="py-24 md:py-36 bg-cream relative overflow-hidden"
    >
      {/* Corner botanical - right side */}
      <BranchCorner
        flip
        className="absolute top-0 right-0 w-48 md:w-64 text-blush/30 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
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

        {/* Events — split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 mb-20 md:mb-28">
          {EVENTS.map((event, i) => (
            <AnimateIn key={event.type} delay={i * 120}>
              <div
                className={`p-8 md:p-12 lg:p-16 ${
                  i === 0
                    ? "border-b md:border-b-0 md:border-r border-border"
                    : ""
                }`}
              >
                {/* Type label */}
                <span className="inline-block font-ui text-rose text-[10px] tracking-[0.3em] uppercase mb-6 pb-3 border-b border-border">
                  {event.type}
                </span>

                {/* Time */}
                <div className="flex items-center gap-2.5 mb-5">
                  <Clock size={15} weight="light" className="text-blush shrink-0" />
                  <span className="font-display text-brown text-2xl md:text-3xl italic font-light">
                    {event.time}
                  </span>
                </div>

                {/* Venue */}
                <h3 className="font-display text-brown text-xl md:text-2xl font-medium mb-3 leading-snug">
                  {event.venue}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-2.5 mb-4">
                  <MapPin size={15} weight="light" className="text-blush shrink-0 mt-1" />
                  <div>
                    <p className="font-body text-muted text-lg leading-snug">{event.address}</p>
                    <p className="font-body text-muted text-lg leading-snug">{event.city}</p>
                  </div>
                </div>

                {/* Note */}
                <p className="font-body text-muted/70 text-base italic leading-relaxed mb-8 max-w-[44ch]">
                  {event.note}
                </p>

                {/* Map CTA */}
                <a
                  href={event.mapUrl}
                  className="inline-flex items-center gap-2 font-ui text-[11px] tracking-[0.2em] uppercase text-rose border-b border-rose/40 pb-0.5 hover:border-rose transition-colors duration-200"
                >
                  <MapPin size={13} weight="light" />
                  Ver no Mapa
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Extra details strip */}
        <AnimateIn animation="fade-in" delay={80}>
          <div className="border-t border-border pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-border">
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-2 md:px-8 first:pl-0 last:pr-0">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={14} weight="light" className="text-blush" />
                  <span className="font-ui text-muted text-[10px] tracking-[0.25em] uppercase">
                    {label}
                  </span>
                </div>
                <p className="font-body text-brown text-lg leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
