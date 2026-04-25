import { Star, Zap, Camera, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Star: <Star size={24} />,
  Zap: <Zap size={24} />,
  Camera: <Camera size={24} />,
  Heart: <Heart size={24} />,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Why Five Star"
          title="We Don't Just Clean. We Protect Your Revenue."
          goldWord="Protect Your Revenue."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {WHY_US.map((item) => (
            <div key={item.title} className="group">
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-200">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
