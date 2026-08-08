"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
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
      className="relative h-screen w-screen overflow-hidden bg-brown"
    >
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={PHOTOS[index]}
            alt=""
            fill
            priority
            className="object-contain"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-5 bg-linear-to-b from-black/50 to-transparent">
          <Link
            href="/"
            className="font-display text-cream italic text-xl tracking-wide"
          >
            V &amp; G
          </Link>
          <p className="font-ui text-cream/80 text-xs tracking-[0.2em]">
            {index + 1} / {total}
          </p>
        </div>

        {/* Prev / Next */}
        <button
          onClick={goPrev}
          aria-label="Foto anterior"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream p-3 min-h-11 min-w-11 flex items-center justify-center"
        >
          <CaretLeft size={28} weight="light" />
        </button>
        <button
          onClick={goNext}
          aria-label="Próxima foto"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream p-3 min-h-11 min-w-11 flex items-center justify-center"
        >
          <CaretRight size={28} weight="light" />
        </button>

        {/* Bottom bar */}
        <div className="absolute bottom-0 inset-x-0 flex items-center justify-center gap-6 px-6 py-6 bg-linear-to-t from-black/50 to-transparent">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pausar apresentação" : "Reproduzir apresentação"}
            className="text-cream/90 hover:text-cream p-3 min-h-11 min-w-11 flex items-center justify-center rounded-full border border-cream/30 hover:border-cream/60 transition-colors"
          >
            {isPlaying ? <Pause size={20} weight="light" /> : <Play size={20} weight="light" />}
          </button>
          <button
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
            className="text-cream/90 hover:text-cream p-3 min-h-11 min-w-11 flex items-center justify-center rounded-full border border-cream/30 hover:border-cream/60 transition-colors"
          >
            {isFullscreen ? <ArrowsIn size={20} weight="light" /> : <ArrowsOut size={20} weight="light" />}
          </button>
        </div>
      </div>
    </div>
  );
}
