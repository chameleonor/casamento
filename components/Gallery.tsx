import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { FloralDivider } from "./BotanicalSVG";

const PHOTOS = [
  {
    src: "https://picsum.photos/seed/couple1/600/800",
    alt: "Vanessa e Guilherme",
    className: "col-span-1 row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://picsum.photos/seed/couple2/700/500",
    alt: "Momento especial",
    className: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://picsum.photos/seed/couple3/700/500",
    alt: "Noivado",
    className: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://picsum.photos/seed/couple4/700/500",
    alt: "Nossa história",
    className: "col-span-2 row-span-1",
    aspect: "aspect-[16/7]",
  },
  {
    src: "https://picsum.photos/seed/couple5/600/800",
    alt: "Vanessa",
    className: "col-span-1 row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://picsum.photos/seed/couple6/700/500",
    alt: "Guilherme",
    className: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://picsum.photos/seed/couple7/700/500",
    alt: "Juntos",
    className: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-36 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <AnimateIn>
            <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-4">
              Momentos que guardamos
            </p>
            <h2 className="font-display text-brown text-4xl md:text-5xl lg:text-6xl italic font-light tracking-tight leading-none mb-6">
              Galeria
            </h2>
            <FloralDivider className="w-52 md:w-64 mx-auto text-blush" />
          </AnimateIn>
        </div>

        {/* Asymmetric photo grid */}
        <AnimateIn animation="fade-in" delay={100}>
          <div className="hidden md:grid grid-cols-3 gap-3 auto-rows-[280px]">
            {PHOTOS.map((photo, i) => (
              <div
                key={i}
                className={`${photo.className} relative overflow-hidden group cursor-pointer`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  unoptimized
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-500" />
                {/* Warm tint */}
                <div className="absolute inset-0 bg-rose/6 mix-blend-multiply pointer-events-none" />
                {/* Caption on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <p className="text-cream font-body italic text-sm">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: simple 2-col grid */}
          <div className="grid md:hidden grid-cols-2 gap-2">
            {PHOTOS.map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-rose/6 mix-blend-multiply pointer-events-none" />
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Note */}
        <AnimateIn delay={200} className="text-center mt-12">
          <p className="font-body text-muted/70 text-base italic">
            Mais memórias em breve...
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
