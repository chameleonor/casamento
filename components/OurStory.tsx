import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { FloralDivider } from "./BotanicalSVG";

const STORY = [
  {
    year: "Março · 2019",
    title: "O Primeiro Encontro",
    text: "Uma festa de amigos em comum nos uniu. Ele chegou tarde, ela estava prestes a ir embora. O universo teve outros planos.",
    img: "https://picsum.photos/seed/story1/600/400",
    side: "right",
  },
  {
    year: "Julho · 2020",
    title: "Nossa Primeira Viagem",
    text: "Florianópolis nos revelou que viajávamos bem juntos — e que queríamos continuar assim pelo resto das nossas vidas.",
    img: "https://picsum.photos/seed/story2/600/400",
    side: "left",
  },
  {
    year: "Janeiro · 2022",
    title: "Compartilhando o Mesmo Lar",
    text: "Demos o passo que confirmou o que já sabíamos: que o lugar mais bonito do mundo é qualquer lugar ao lado um do outro.",
    img: "https://picsum.photos/seed/story3/600/400",
    side: "right",
  },
  {
    year: "Novembro · 2024",
    title: "Ele Perguntou...",
    text: "No alto do Pão de Açúcar, com o Rio de Janeiro inteiro aos nossos pés e as mãos entrelaçadas, ela disse sim.",
    img: "https://picsum.photos/seed/story4/600/400",
    side: "left",
  },
];

export default function OurStory() {
  return (
    <section id="historia" className="py-24 md:py-36 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <AnimateIn>
            <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-4">
              Como chegamos até aqui
            </p>
            <h2 className="font-display text-brown text-4xl md:text-5xl lg:text-6xl italic font-light tracking-tight leading-none mb-6">
              Nossa História
            </h2>
            <FloralDivider className="w-52 md:w-64 mx-auto text-blush" />
          </AnimateIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-16 md:gap-24">
            {STORY.map((item, i) => (
              <AnimateIn key={item.year} delay={i * 80}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    item.side === "left" ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={item.side === "left" ? "md:[direction:ltr]" : ""}>
                    <span className="font-ui text-rose text-[10px] tracking-[0.3em] uppercase block mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-display text-brown text-2xl md:text-3xl italic font-light mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted text-lg md:text-xl leading-relaxed max-w-[52ch]">
                      {item.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`relative ${item.side === "left" ? "md:[direction:ltr]" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden group">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      {/* Warm overlay */}
                      <div className="absolute inset-0 bg-rose/8 mix-blend-multiply" />
                    </div>
                    {/* Offset decorative border */}
                    <div
                      className={`absolute -inset-2 border border-blush/25 pointer-events-none -z-10 ${
                        item.side === "right" ? "translate-x-2 translate-y-2" : "-translate-x-2 translate-y-2"
                      }`}
                    />
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <AnimateIn delay={100} className="text-center mt-20 md:mt-28">
          <FloralDivider className="w-52 md:w-64 mx-auto text-blush mb-8" />
          <p className="font-display text-brown text-2xl md:text-3xl italic font-light max-w-lg mx-auto leading-snug">
            &ldquo;E assim, um capítulo de amor vai se tornar uma vida inteira.&rdquo;
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
