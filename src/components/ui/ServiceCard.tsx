import {
  RefreshCw,
  Sparkles,
  WashingMachine,
  ClipboardCheck,
  Waves,
  Package,
} from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  RefreshCw: <RefreshCw size={24} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={24} strokeWidth={1.5} />,
  WashingMachine: <WashingMachine size={24} strokeWidth={1.5} />,
  ClipboardCheck: <ClipboardCheck size={24} strokeWidth={1.5} />,
  Waves: <Waves size={24} strokeWidth={1.5} />,
  Package: <Package size={24} strokeWidth={1.5} />,
};

export default function ServiceCard({ icon, title, description }: Service) {
  return (
    <div className="card-glow group bg-charcoal/40 border border-white/[0.04] p-8 lg:p-9 hover:border-gold/20 transition-all duration-500 hover:bg-charcoal/60">
      <div className="w-12 h-12 rounded-full bg-gold/[0.08] border border-gold/15 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-400">
        {iconMap[icon]}
      </div>
      <h3 className="font-display font-bold text-lg text-white mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-[0.82rem] text-gray leading-[1.75] font-light">{description}</p>
    </div>
  );
}
