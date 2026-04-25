import Button from "@/components/ui/Button";
import StarGraphic from "@/components/ui/StarGraphic";
import { BUSINESS, HERO_STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Left content */}
      <div className="flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-20 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs tracking-[0.15em] uppercase px-4 py-1.5 w-fit mb-8">
          <span>★</span> Las Vegas&apos;s #1 STR Cleaning Service
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white">
          Turnover Cleaning
          <br />
          That Earns{" "}
          <em className="italic text-gold">Five-Star</em>{" "}
          Reviews
        </h1>

        <p className="mt-6 text-base lg:text-lg text-gray leading-relaxed max-w-lg">
          Professional cleaning for Airbnb, VRBO, and short-term rental
          properties. Fast turnovers, spotless results, photo documentation
          after every clean.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Button href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}>
            Get a Quote
          </Button>
          <Button variant="outline" href="#services">
            Our Services
          </Button>
        </div>

        <div className="flex gap-8 lg:gap-10 mt-12 pt-8 border-t border-white/[0.07]">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl lg:text-4xl font-bold text-gold">
                {stat.value}
              </div>
              <div className="text-xs text-gray uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right visual */}
      <div className="relative hidden lg:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1408] via-off-black to-black" />
        <div className="absolute inset-0 flex items-center justify-center z-10 p-16">
          <StarGraphic />
        </div>

        {/* Floating cards */}
        <div className="absolute bottom-[15%] left-[-3%] z-20 bg-charcoal/90 border border-gold/20 backdrop-blur-xl px-4 py-3 flex items-center gap-3 animate-float">
          <span className="text-lg">📸</span>
          <div>
            <div className="text-sm text-white whitespace-nowrap">Photo Report Sent</div>
            <div className="text-xs text-gold tracking-wide">Every clean documented</div>
          </div>
        </div>

        <div className="absolute top-[18%] right-[-2%] z-20 bg-charcoal/90 border border-gold/20 backdrop-blur-xl px-4 py-3 flex items-center gap-3 animate-float-delayed">
          <span className="text-lg">⭐</span>
          <div>
            <div className="text-sm text-white whitespace-nowrap">5.0 Rating</div>
            <div className="text-xs text-gold tracking-wide">500+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
