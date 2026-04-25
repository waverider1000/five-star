import SectionHeader from "@/components/ui/SectionHeader";
import BlogCard from "@/components/ui/BlogCard";
import { BLOG_ARTICLES } from "@/lib/constants";

export default function BlogPreview() {
  return (
    <section id="blog" className="px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Blog"
          title="Tips for STR Hosts"
          goldWord="STR Hosts"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {BLOG_ARTICLES.map((article) => (
            <BlogCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
