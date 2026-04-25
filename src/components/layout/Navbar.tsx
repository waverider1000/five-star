"use client";

import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 lg:px-16 transition-all duration-500 ${
          scrolled
            ? "py-3.5 bg-black/90 backdrop-blur-2xl border-b border-gold/10"
            : "py-5 bg-gradient-to-b from-black/90 to-transparent border-b border-transparent"
        }`}
      >
        <a
          href="#"
          className="font-display font-black text-lg tracking-wide text-white no-underline flex items-center gap-2.5 group"
        >
          <span className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={9}
                className="fill-gold text-gold group-hover:scale-110 transition-transform duration-200"
                style={{ transitionDelay: `${i * 30}ms` }}
              />
            ))}
          </span>
          <span className="hidden sm:inline">{BUSINESS.name}</span>
          <span className="sm:hidden">Five Star</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray/80 text-[0.75rem] uppercase tracking-[0.14em] font-normal no-underline hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
              className="bg-gold text-black px-5 py-2 text-[0.75rem] uppercase tracking-[0.1em] font-semibold no-underline hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              Call Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white bg-transparent border-none cursor-pointer p-1.5 hover:text-gold transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/[0.98] flex flex-col items-center justify-center gap-7 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-gold text-gold" />
          ))}
        </div>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-base uppercase tracking-[0.2em] font-light no-underline hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <div className="w-8 h-px bg-gold/30 my-2" />
        <a
          href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
          className="bg-gold text-black px-8 py-3 text-sm uppercase tracking-wider font-semibold no-underline hover:bg-gold-light transition-colors"
        >
          Call Now
        </a>
      </div>
    </>
  );
}
