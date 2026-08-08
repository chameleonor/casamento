"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowsIn,
  ArrowsOut,
  CaretLeft,
  CaretRight,
  Pause,
  Play,
} from "@phosphor-icons/react";
import { BranchCorner, LeafSprig } from "./BotanicalSVG";

const PHOTOS = [
  "/images/casamento_tania.jpg",
  "/images/campos.jpeg",
  "/images/pergunta.jpg",
  "/images/chile_o2.jpg",
  "/images/colline.png",
  "/images/tokyo.jpg",
  "/images/pescaria.jpg",
  "/images/foundue.jpg",
  "/images/mao.jpg",
  "/images/dia_da_mulher.jpg",
  "/images/cafe_gostoso.jpg",
  "/images/trailer.jpg",
  "/images/aviao.jpg",
  "/images/eu_e_voce.jpg",
  "/images/show.jpg",
  "/images/bilhetinho.png",
];

const SLIDE_DURATION = 5000;
const CONTROLS_HIDE_DELAY = 3000;

export default function PhotoSlideshow() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = PHOTOS.length;

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Autoplay — resets whenever the slide changes, manually or automatically.
  useEffect(() => {
    if (!isPlaying) return;
    const id = setTimeout(goNext, SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [isPlaying, index, goNext]);

  // Fullscreen state sync (also catches Esc)
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Auto-hide controls after inactivity
  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), CONTROLS_HIDE_DELAY);
  }, []);

  const bumpControls = useCallback(() => {
    setShowControls(true);
    scheduleHide();
  }, [scheduleHide]);

  useEffect(() => {
    scheduleHide();
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [scheduleHide]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((p) => !p);
      } else if (e.key.toLowerCase() === "f") toggleFullscreen();
      bumpControls();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, toggleFullscreen, bumpControls]);

  return (
    <div
      ref={containerRef}
      onMouseMove={bumpControls}
      onTouchStart={bumpControls}
      className="relative h-screen w-screen overflow-hidden bg-cream"
    >
      {/* Framed photo, centered — occupies 80% of the page */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[80%] h-[80%]">
          {/* Botanical decorations around the frame */}
          <BranchCorner className="absolute -top-4 -left-4 w-28 md:w-40 text-blush/55 pointer-events-none z-0" />
          <BranchCorner flip className="absolute -bottom-4 -right-4 w-28 md:w-40 text-blush/55 pointer-events-none z-0" />
          <LeafSprig className="absolute -top-3 -right-6 w-10 md:w-14 text-blush/45 pointer-events-none z-0 rotate-[130deg]" />
          <LeafSprig className="absolute -bottom-3 -left-6 w-10 md:w-14 text-blush/45 pointer-events-none z-0 -rotate-[50deg]" />

          {/* Photo stage — inset from the outer box so the branches above always stay clear of the photo */}
          <div className="absolute inset-6 md:inset-8">
            <AnimatePresence mode="sync">
              <motion.img
                key={index}
                src={PHOTOS[index]}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 m-auto max-w-full max-h-full object-contain border-[5px] border-blush shadow-[0_10px_40px_rgba(36,24,16,0.15)] z-10"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 py-5 bg-linear-to-b from-cream via-cream/80 to-transparent">
          <Link
            href="/"
            className="font-display text-rose italic text-xl tracking-wide"
          >
            V &amp; G
          </Link>
          <p className="font-ui text-muted text-xs tracking-[0.2em]">
            {index + 1} / {total}
          </p>
        </div>

        {/* Prev / Next */}
        <button
          onClick={goPrev}
          aria-label="Foto anterior"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 text-muted hover:text-rose p-3 min-h-11 min-w-11 flex items-center justify-center"
        >
          <CaretLeft size={28} weight="light" />
        </button>
        <button
          onClick={goNext}
          aria-label="Próxima foto"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 text-muted hover:text-rose p-3 min-h-11 min-w-11 flex items-center justify-center"
        >
          <CaretRight size={28} weight="light" />
        </button>

        {/* Bottom bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-center gap-6 px-6 py-6 bg-linear-to-t from-cream via-cream/80 to-transparent">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pausar apresentação" : "Reproduzir apresentação"}
            className="text-muted hover:text-rose p-3 min-h-11 min-w-11 flex items-center justify-center rounded-full border border-border hover:border-rose transition-colors"
          >
            {isPlaying ? <Pause size={20} weight="light" /> : <Play size={20} weight="light" />}
          </button>
          <button
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
            className="text-muted hover:text-rose p-3 min-h-11 min-w-11 flex items-center justify-center rounded-full border border-border hover:border-rose transition-colors"
          >
            {isFullscreen ? <ArrowsIn size={20} weight="light" /> : <ArrowsOut size={20} weight="light" />}
          </button>
        </div>
      </div>
    </div>
  );
}
