import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

export default function TestimonialCard({ name, role, text, rating }: Testimonial) {
  return (
    <div className="bg-charcoal/50 border border-white/5 p-7 flex flex-col hover:border-gold/20 transition-colors duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="text-sm text-light-gray leading-relaxed flex-1">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-5 pt-4 border-t border-white/[0.07]">
        <div className="font-display font-bold text-white text-sm">{name}</div>
        <div className="text-xs text-gold mt-0.5">{role}</div>
      </div>
    </div>
  );
}
