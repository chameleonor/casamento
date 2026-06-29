"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Nossa História", href: "/#historia" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Detalhes", href: "/#detalhes" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf7f0]/95 backdrop-blur-md shadow-[0_1px_0_#e0cfc0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
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

        {/* Desktop CTA */}
        <a
          href="/landing"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-rose text-cream font-ui text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:bg-rose-dark"
        >
          Confirmar Presença
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden text-rose p-2 -mr-2 min-h-11 min-w-11 flex items-center justify-center"
        >
          {mobileOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#faf7f0]/97 backdrop-blur-md border-t border-border`}
      >
        <ul className="px-6 pt-4 pb-2 flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="flex items-center font-ui text-muted text-[11px] tracking-[0.22em] uppercase hover:text-rose transition-colors min-h-[48px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6 pt-2 border-t border-border">
          <a
            href="/landing"
            onClick={close}
            className="flex items-center justify-center w-full py-4 bg-rose text-cream font-ui text-[11px] tracking-[0.22em] uppercase hover:bg-rose-dark transition-colors"
          >
            Confirmar Presença
          </a>
        </div>
      </div>
    </nav>
  );
}
