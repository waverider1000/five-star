import Image from "next/image";
import { Star, Zap, Camera, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Star: <Star size={22} strokeWidth={1.5} />,
  Zap: <Zap size={22} strokeWidth={1.5} />,
  Camera: <Camera size={22} strokeWidth={1.5} />,
  Heart: <Heart size={22} strokeWidth={1.5} />,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="px-6 lg:px-16 py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: header + cards */}
          <div>
            <SectionHeader
              label="Why Five Star"
              title="We Don't Just Clean. We Protect Your Revenue."
              goldWord="Protect Your Revenue."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {WHY_US.map((item) => (
                <div
                  key={item.title}
                  className="card-glow group bg-charcoal/20 border border-white/[0.04] p-6 hover:border-gold/15 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/[0.08] border border-gold/15 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/15 group-hover:border-gold/25 transition-all duration-400">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="font-display font-bold text-[0.95rem] text-white mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[0.78rem] text-gray leading-[1.75] font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: team photo */}
          <div className="relative hidden lg:block">
            <div className="relative h-[520px] overflow-hidden">
              <Image
                src="/images/team-cleaning.jpg"
                alt="Professional cleaning team at work in a modern living room"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60" />
              <div className="absolute inset-0 bg-black/20" />
              {/* Gold tint */}
              <div className="absolute inset-0 bg-gold/[0.03] mix-blend-overlay" />
              {/* Border frame */}
              <div className="absolute inset-3 border border-gold/10 pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b border-r border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
