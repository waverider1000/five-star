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
      className={`group bg-charcoal/50 border border-white/5 p-7 flex flex-col hover:border-gold/20 transition-colors duration-300 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs tracking-wider uppercase text-gold font-medium">
          {category}
        </span>
        <span className="text-xs text-gray">{readTime}</span>
      </div>
      <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-gold transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-sm text-gray leading-relaxed flex-1">{excerpt}</p>
      <div className="mt-5 flex items-center gap-1 text-xs text-gold uppercase tracking-wider font-medium">
        Read Article{" "}
        <ArrowUpRight
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </div>
    </div>
  );
}
