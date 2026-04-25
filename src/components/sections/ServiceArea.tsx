import { MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section id="areas" className="bg-off-black px-6 lg:px-16 py-20 lg:py-28 relative">
      {/* Subtle map-like grid behind */}
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Coverage"
          title="Serving All of Las Vegas"
          goldWord="Las Vegas"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-14">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="group flex items-center gap-3 bg-charcoal/20 border border-white/[0.04] px-5 py-4 hover:border-gold/20 hover:bg-charcoal/40 transition-all duration-400 cursor-default"
            >
              <MapPin size={13} className="text-gold/60 shrink-0 group-hover:text-gold transition-colors duration-300" />
              <span className="text-[0.82rem] text-light-gray/80 font-light group-hover:text-white transition-colors duration-300">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
