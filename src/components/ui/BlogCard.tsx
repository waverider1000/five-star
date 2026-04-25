import { ArrowUpRight } from "lucide-react";
import type { BlogArticle } from "@/types";

export default function BlogCard({
  title,
  category,
  readTime,
  excerpt,
  featured,
}: BlogArticle) {
  return (
    <div
      className={`card-glow group bg-charcoal/30 border border-white/[0.04] p-7 lg:p-8 flex flex-col hover:border-gold/15 transition-all duration-500 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[0.65rem] tracking-[0.12em] uppercase text-black bg-gold/90 px-2.5 py-1 font-semibold">
          {category}
        </span>
        <span className="text-[0.7rem] text-gray/60">{readTime}</span>
      </div>
      <h3 className="font-display font-bold text-[1.1rem] text-white mb-3 group-hover:text-gold transition-colors duration-300 leading-snug tracking-wide">
        {title}
      </h3>
      <p className="text-[0.82rem] text-gray leading-[1.75] flex-1 font-light">{excerpt}</p>
      <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-1.5 text-[0.7rem] text-gold/80 uppercase tracking-[0.12em] font-medium group-hover:text-gold transition-colors">
        Read Article
        <ArrowUpRight
          size={13}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
