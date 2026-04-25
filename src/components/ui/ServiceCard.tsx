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
  RefreshCw: <RefreshCw size={28} />,
  Sparkles: <Sparkles size={28} />,
  WashingMachine: <WashingMachine size={28} />,
  ClipboardCheck: <ClipboardCheck size={28} />,
  Waves: <Waves size={28} />,
  Package: <Package size={28} />,
};

export default function ServiceCard({ icon, title, description }: Service) {
  return (
    <div className="group bg-charcoal/50 border border-white/5 p-8 hover:border-gold/30 transition-all duration-300">
      <div className="text-gold mb-5">{iconMap[icon]}</div>
      <h3 className="font-display font-bold text-xl text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray leading-relaxed">{description}</p>
    </div>
  );
}
