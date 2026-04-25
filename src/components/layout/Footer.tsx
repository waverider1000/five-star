import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-off-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-display font-black text-xl text-white mb-2 flex items-center gap-2">
              <span className="text-gold text-xs">★★★★★</span>
              {BUSINESS.name}
            </div>
            <p className="text-gray text-sm leading-relaxed mt-4 max-w-xs">
              Las Vegas&apos;s premier cleaning service for Airbnb, VRBO, and
              short-term rental properties. Five-star results, every time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray text-sm no-underline hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">
              Contact
            </h3>
            <ul className="space-y-4 list-none">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
                  className="flex items-center gap-3 text-gray text-sm no-underline hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-gold shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-gray text-sm no-underline hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray text-sm">
                <MapPin size={16} className="text-gold shrink-0" />
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray/60 text-xs">
            &copy; {new Date().getFullYear()} {BUSINESS.name} LLC. All rights
            reserved.
          </p>
          <p className="text-gray/40 text-xs">{BUSINESS.license}</p>
        </div>
      </div>
    </footer>
  );
}
