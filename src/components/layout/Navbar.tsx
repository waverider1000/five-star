"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 lg:px-16 py-5 transition-all duration-400 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/95 to-transparent"
        }`}
      >
        <a
          href="#"
          className="font-display font-black text-xl tracking-wider text-white no-underline flex items-center gap-2"
        >
          <span className="flex gap-0.5 text-gold text-xs">
            {"★★★★★"}
          </span>
          {BUSINESS.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray text-sm uppercase tracking-widest font-normal no-underline hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
              className="bg-gold text-black px-5 py-2.5 text-sm uppercase tracking-wider font-medium no-underline hover:bg-gold-light transition-colors"
            >
              Call Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white bg-transparent border-none cursor-pointer p-1"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/98 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg uppercase tracking-widest font-light no-underline hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
          className="bg-gold text-black px-8 py-3 text-sm uppercase tracking-wider font-medium no-underline mt-4 hover:bg-gold-light transition-colors"
        >
          Call Now
        </a>
      </div>
    </>
  );
}
