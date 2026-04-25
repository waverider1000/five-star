import { Shield, Camera, Clock, CheckCircle } from "lucide-react";
import { TRUST_ITEMS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={20} />,
  Camera: <Camera size={20} />,
  Clock: <Clock size={20} />,
  CheckCircle: <CheckCircle size={20} />,
};

export default function TrustBar() {
  return (
    <div className="bg-charcoal px-6 lg:px-16 py-5 border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {TRUST_ITEMS.map((item, i) => (
          <div
            key={item.text}
            className={`flex items-center gap-3 flex-1 justify-center py-2 sm:py-0 ${
              i < TRUST_ITEMS.length - 1
                ? "sm:border-r sm:border-white/[0.07] sm:pr-6"
                : ""
            }`}
          >
            <span className="text-gold">{iconMap[item.icon]}</span>
            <span className="text-sm text-light-gray">
              <strong className="text-gold font-medium">{item.highlight}</strong>{" "}
              · {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
