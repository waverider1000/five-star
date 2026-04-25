import { Phone, Mail, MapPin, Star } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-off-black relative">
      {/* Gold gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="font-display font-black text-xl text-white mb-1 flex items-center gap-2.5">
              <span className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={9} className="fill-gold text-gold" />
                ))}
              </span>
              {BUSINESS.name}
            </div>
            <p className="text-gray/60 text-[0.82rem] leading-[1.8] mt-4 max-w-xs font-light">
              Las Vegas&apos;s premier cleaning service for Airbnb, VRBO, and
              short-term rental properties. Five-star results, every time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-gold/80 font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray/60 text-[0.82rem] no-underline hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-gold/80 font-semibold mb-6">
              Contact
            </h3>
            <ul className="space-y-4 list-none">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
                  className="flex items-center gap-3 text-gray/60 text-[0.82rem] no-underline hover:text-white transition-colors duration-200 font-light"
                >
                  <Phone size={14} className="text-gold/60 shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-gray/60 text-[0.82rem] no-underline hover:text-white transition-colors duration-200 font-light"
                >
                  <Mail size={14} className="text-gold/60 shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray/60 text-[0.82rem] font-light">
                <MapPin size={14} className="text-gold/60 shrink-0" />
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray/40 text-[0.7rem] tracking-wide">
            &copy; {new Date().getFullYear()} {BUSINESS.name} LLC. All rights
            reserved.
          </p>
          <p className="text-gray/25 text-[0.7rem] tracking-wide">{BUSINESS.license}</p>
        </div>
      </div>
    </footer>
  );
}
