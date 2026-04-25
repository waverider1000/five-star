import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-off-black px-6 lg:px-16 py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/window-cleaning.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.03]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-off-black/95" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="What We Do"
          title="Cleaning Services Built for STR Hosts"
          goldWord="STR Hosts"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-14 bg-white/[0.03] border border-white/[0.04]">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
