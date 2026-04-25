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
    <section id="why-us" className="px-6 lg:px-16 py-20 lg:py-28 relative">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Why Five Star"
          title="We Don't Just Clean. We Protect Your Revenue."
          goldWord="Protect Your Revenue."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="card-glow group bg-charcoal/20 border border-white/[0.04] p-7 hover:border-gold/15 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-full bg-gold/[0.08] border border-gold/15 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/15 group-hover:border-gold/25 transition-all duration-400">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-display font-bold text-[1.05rem] text-white mb-2.5 tracking-wide">
                {item.title}
              </h3>
              <p className="text-[0.82rem] text-gray leading-[1.75] font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
