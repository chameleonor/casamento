"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa História", href: "#historia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Detalhes", href: "#detalhes" },
  { label: "Confirmação", href: "#rsvp" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf7f0]/95 backdrop-blur-md shadow-[0_1px_0_#e0cfc0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo mark */}
        <a
          href="#inicio"
          className="font-display text-rose italic text-xl tracking-wide select-none"
        >
          V & G
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-ui text-muted text-[11px] tracking-[0.22em] uppercase hover:text-rose transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden text-rose p-1"
        >
          {mobileOpen ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        } bg-[#faf7f0]/97 backdrop-blur-md border-t border-border`}
      >
        <ul className="px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-ui text-muted text-[11px] tracking-[0.22em] uppercase hover:text-rose transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
