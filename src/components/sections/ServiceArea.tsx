import { MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section id="areas" className="bg-off-black px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Coverage"
          title="Serving All of Las Vegas"
          goldWord="Las Vegas"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-14">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 bg-charcoal/30 border border-white/5 px-5 py-4 hover:border-gold/20 transition-colors duration-200"
            >
              <MapPin size={14} className="text-gold shrink-0" />
              <span className="text-sm text-light-gray">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
