"use client";

import { useState, useEffect, useRef } from "react";
import { FloralDivider } from "./BotanicalSVG";

// Wedding: 12 December 2026, 16:00 BRT (UTC-3)
const WEDDING_DATE = new Date("2026-12-12T16:00:00-03:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  over: boolean;
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
    over: false,
  };
}

function CounterBox({
  value,
  label,
  mounted,
}: {
  value: number;
  label: string;
  mounted: boolean;
}) {
  const prevRef = useRef(value);
  const flashRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prevRef.current !== value && flashRef.current) {
      flashRef.current.classList.remove("animate-scale-in");
      // force reflow
      void flashRef.current.offsetWidth;
      flashRef.current.classList.add("animate-scale-in");
    }
    prevRef.current = value;
  }, [value]);

  const display = mounted ? String(value).padStart(2, "0") : "--";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 md:w-28 h-20 md:h-28 flex items-center justify-center border border-border bg-cream">
        {/* Inner shadow inset */}
        <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.03)]" />
        <span
          ref={flashRef}
          className="font-display text-brown text-3xl md:text-5xl font-light tabular-nums leading-none relative z-10"
        >
          {display}
        </span>
      </div>
      <span className="font-ui text-muted text-[10px] md:text-[11px] tracking-[0.22em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    over: false,
  });

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="contagem"
      className="py-24 md:py-32 bg-linen relative overflow-hidden"
    >
      {/* Subtle background texture pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #9b6755 0, #9b6755 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #9b6755 0, #9b6755 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="font-ui text-muted text-[10px] tracking-[0.35em] uppercase mb-3">
          A cerimônia começa em
        </p>
        <FloralDivider className="w-52 md:w-64 mx-auto text-blush mb-10" />

        {time.over ? (
          <p className="font-display text-brown text-3xl md:text-4xl italic">
            Este é o nosso grande dia!
          </p>
        ) : (
          <div className="flex items-start justify-center gap-4 md:gap-8">
            <CounterBox value={time.days} label="Dias" mounted={mounted} />
            <div className="text-blush font-display text-4xl md:text-5xl font-light self-start mt-6 select-none">
              :
            </div>
            <CounterBox value={time.hours} label="Horas" mounted={mounted} />
            <div className="text-blush font-display text-4xl md:text-5xl font-light self-start mt-6 select-none">
              :
            </div>
            <CounterBox value={time.minutes} label="Minutos" mounted={mounted} />
            <div className="text-blush font-display text-4xl md:text-5xl font-light self-start mt-6 select-none">
              :
            </div>
            <CounterBox value={time.seconds} label="Segundos" mounted={mounted} />
          </div>
        )}

        <p className="mt-12 font-body text-muted text-xl md:text-2xl italic">
          Sábado, 12 de Dezembro de 2026 · São Paulo
        </p>
      </div>
    </section>
  );
}
