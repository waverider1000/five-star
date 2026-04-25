import { Shield, Camera, Clock, CheckCircle } from "lucide-react";
import { TRUST_ITEMS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={16} strokeWidth={1.5} />,
  Camera: <Camera size={16} strokeWidth={1.5} />,
  Clock: <Clock size={16} strokeWidth={1.5} />,
  CheckCircle: <CheckCircle size={16} strokeWidth={1.5} />,
};

export default function TrustBar() {
  return (
    <div className="bg-charcoal/60 px-6 lg:px-16 py-4 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {TRUST_ITEMS.map((item, i) => (
          <div
            key={item.text}
            className={`flex items-center gap-3 flex-1 justify-center py-2 sm:py-0 ${
              i < TRUST_ITEMS.length - 1
                ? "sm:border-r sm:border-white/[0.05] sm:pr-6"
                : ""
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-gold/[0.08] flex items-center justify-center">
              <span className="text-gold">{iconMap[item.icon]}</span>
            </div>
            <span className="text-[0.78rem] text-light-gray/70 font-light">
              <strong className="text-gold/90 font-medium">{item.highlight}</strong>{" "}
              <span className="text-gray/50">·</span> {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
