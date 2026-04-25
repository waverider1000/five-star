import Image from "next/image";
import { Camera, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import { BUSINESS, HERO_STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Left content */}
      <div className="flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-20 relative z-10">
        <div className="inline-flex items-center gap-2.5 bg-gold/[0.08] border border-gold/20 text-gold text-[0.7rem] tracking-[0.18em] uppercase px-4 py-2 w-fit mb-8">
          <span className="flex gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-gold text-gold" />
            ))}
          </span>
          Las Vegas&apos;s #1 STR Cleaning Service
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.05] text-white">
          Turnover Cleaning
          <br />
          That Earns{" "}
          <em className="italic text-gold">Five-Star</em>{" "}
          <br className="hidden sm:block" />
          Reviews
        </h1>

        <p className="mt-6 text-[0.95rem] lg:text-[1.05rem] text-gray leading-[1.8] max-w-lg font-light">
          Professional cleaning for Airbnb, VRBO, and short-term rental
          properties. Fast turnovers, spotless results, photo documentation
          after every clean.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Button href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}>
            Get a Quote
          </Button>
          <Button variant="outline" href="#services">
            Our Services
          </Button>
        </div>

        <div className="flex gap-8 lg:gap-12 mt-14 pt-8 border-t border-white/[0.06]">
          {HERO_STATS.map((stat, i) => (
            <div key={stat.label} className="relative">
              <div className="font-display text-3xl lg:text-[2.5rem] font-bold text-gold leading-none">
                {stat.value}
              </div>
              <div className="text-[0.65rem] text-gray/80 uppercase tracking-[0.15em] mt-2 font-medium">
                {stat.label}
              </div>
              {i < HERO_STATS.length - 1 && (
                <div className="absolute right-[-1rem] lg:right-[-1.5rem] top-1 bottom-1 w-px bg-white/[0.06] hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right visual — luxury bedroom photo */}
      <div className="relative hidden lg:block overflow-hidden">
        <Image
          src="/images/hero-bedroom.jpg"
          alt="Luxury hotel room with crisp white bedding and gold accents"
          fill
          className="object-cover object-center"
          priority
          sizes="50vw"
        />
        {/* Dark overlay to blend with site's dark theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />
        {/* Subtle gold tint to match brand */}
        <div className="absolute inset-0 bg-gold/[0.04] mix-blend-overlay z-10" />

        {/* Floating cards */}
        <div className="absolute bottom-[15%] left-[5%] z-20 bg-black/70 border border-gold/15 backdrop-blur-2xl px-5 py-3.5 flex items-center gap-3.5 animate-float shadow-2xl shadow-black/60">
          <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
            <Camera size={16} className="text-gold" />
          </div>
          <div>
            <div className="text-[0.8rem] text-white font-medium whitespace-nowrap">Photo Report Sent</div>
            <div className="text-[0.65rem] text-gold/70 tracking-wide mt-0.5">Every clean documented</div>
          </div>
        </div>

        <div className="absolute top-[18%] right-[5%] z-20 bg-black/70 border border-gold/15 backdrop-blur-2xl px-5 py-3.5 flex items-center gap-3.5 animate-float-delayed shadow-2xl shadow-black/60">
          <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
            <Star size={16} className="fill-gold text-gold" />
          </div>
          <div>
            <div className="text-[0.8rem] text-white font-medium whitespace-nowrap">5.0 Rating</div>
            <div className="text-[0.65rem] text-gold/70 tracking-wide mt-0.5">500+ verified reviews</div>
          </div>
        </div>
      </div>

      {/* Mobile hero image (below content) */}
      <div className="relative lg:hidden h-[300px] sm:h-[400px]">
        <Image
          src="/images/hero-bedroom.jpg"
          alt="Luxury hotel room with crisp white bedding"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>
    </section>
  );
}
