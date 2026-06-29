import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { FloralDivider, LeafSprig, BranchCorner } from "./BotanicalSVG";

const STORY = [
  {
    year: "07 · Maio · 2022",
    title: "Primeiro Encontro",
    subtitle: "(onde tudo começou):",
    text: "Nos conhecemos através de um encontro inesperado de queridos amigos em comum. Em um despretensioso sábado a noite, no centro de São Paulo, aguardando na fila da entrada da Tokyo 011. Tudo começou com uma leve troca de olhares, depois muito papo e claro alguns drinks. Não vamos negar que o lugar ajudou, música alta, local cheio e iluminação baixa.. e nossos amigos?! haha a gente não soube muito deles naquele dia! Noite a dentro, números de telefones trocado e tudo realmente começou…",
    img: "/images/primeiro_encontro.jpg",
    side: "right",
    imgSize: "w-2/4",
  },
  {
    year: "28 · Agosto · 2022",
    title: "Primeira viagem",
    subtitle: "(de muitas..):",
    text: "Nossa primeira viagem juntos foi mais como uma experiência. Primeira vez dormindo em um antigo trailer! Foi uma viagem curta e rápida, já que na época só tínhamos o final de semana para isso. Um final de semana de novas descobertas, apaixonante, calmo e ao mesmo tempo emocionante! A primeira de muitas… ",
    img: "/images/primeira_viagem.jpg",
    side: "left",
  },
  {
    year: "15 · Novembro · 2023",
    title: "Uma vida a dois",
    subtitle: "(Compartilhando o Mesmo Lar):",
    text: "Depois de um ano e meio de namoro e algumas conveniências, decidimos viver juntos! E nossa experiência até aqui tem sido de muito amor, zelo e cumplicidade. Claro, nem tudo são rosas.. desafios do dia a dia acontecem. A rotina, os problemas e o estresse as vezes pesam mas nossa escolha em ficar, em lutar, em continuar conquistando um ao outro é diária! E sim, é sempre melhor quando estamos juntos! Entre muitas responsabilidades e obrigações também encontramos tempo para um colo, um cafuné, um bilhetinho escondido, flores surpresa, passeios, pescaria, muita comidinha in e out e sempre muitas conversas aleatórias! E amor.. muito amor! ",
    img: "/images/uma_vida_a_dois.jpg",
    side: "right",
    imgSize: "w-7/8",
  },
  {
    year: "27 · Setembro · 2025",
    title: "Ele Perguntou...",
    subtitle: "(e ela disse sim!):",
    text: "Com um bilhetinho escondido e uma viagem surpresa, o tão esperado pedido finalmente (formalmente) veio! A ideia de casar sempre existiu para nós desde que nos tornamos um casal, e não poderia ter sido tão do nosso jeito, discreto e intimo. Outro final de semana mas não um qualquer, um tranquilo, leve e cheio de novidades. Uma pequena incrível viagem inesquecível! Só nós, nosso amor, no nosso tempo! ",
    img: "/images/pedido.jpg",
    side: "left",
    imgSize: "w-4/5",
  },
];

export default function OurStory() {
  return (
    <section id="historia" aria-label="Nossa História" className="py-24 md:py-36 bg-cream overflow-hidden">
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
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${item.side === "left" ? "md:[direction:rtl]" : ""
                    }`}
                >
                  {/* Text */}
                  <div className={item.side === "left" ? "md:[direction:ltr]" : ""}>
                    <span className="font-ui text-rose text-[10px] tracking-[0.3em] uppercase block mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-display text-brown text-lg md:text-5xl italic font-light mb-4 leading-snug whitespace-nowrap">
                      {item.title}
                    </h3>
                    <h4 className="font-display text-brown text-lg md:text-2xl italic font-light mb-4 leading-snug whitespace-nowrap">
                      {item.subtitle}
                    </h4>
                    <p className="font-body text-muted text-lg md:text-xl leading-relaxed max-w-[52ch]">
                      {item.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`relative flex items-center justify-center py-6 ${item.side === "left" ? "md:[direction:ltr]" : ""}`}>
                    {/* Botanical corner decorations */}
                    <LeafSprig className="absolute top-4 right-4 w-20 text-blush/30 pointer-events-none rotate-120" />
                    <LeafSprig className="absolute bottom-4 left-4 w-20 text-blush/30 pointer-events-none rotate-230" />

                    {/* Image with offset border */}
                    <div className={`relative ${"imgSize" in item ? item.imgSize : "w-2/3"}`}>
                      <div className="relative overflow-hidden group">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={0}
                          height={0}
                          sizes="(max-width: 768px) 67vw, 33vw"
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.04]"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-rose/8 mix-blend-multiply" />
                      </div>
                      {/* Offset decorative border */}
                      <div
                        className={`absolute -inset-2 border border-blush/30 pointer-events-none -z-10 ${item.side === "right" ? "translate-x-2 translate-y-2" : "-translate-x-2 translate-y-2"
                          }`}
                      />
                    </div>
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
