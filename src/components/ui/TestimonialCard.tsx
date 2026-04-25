import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export default function TestimonialCard({ name, role, text, rating }: Testimonial) {
  return (
    <div className="card-glow group bg-charcoal/30 border border-white/[0.04] p-7 lg:p-8 flex flex-col hover:border-gold/15 transition-all duration-500 relative">
      {/* Decorative quote */}
      <Quote
        size={32}
        className="text-gold/10 absolute top-6 right-6 group-hover:text-gold/20 transition-colors duration-500"
        strokeWidth={1}
      />

      <div className="flex gap-[3px] mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={13} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="text-[0.85rem] text-light-gray/90 leading-[1.8] flex-1 font-light">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
          <span className="text-gold text-xs font-display font-bold">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-display font-bold text-white text-sm">{name}</div>
          <div className="text-[0.68rem] text-gold/70 mt-0.5 tracking-wide">{role}</div>
        </div>
      </div>
    </div>
  );
}
