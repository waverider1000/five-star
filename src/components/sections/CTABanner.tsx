import { Phone, Mail, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative px-6 lg:px-16 py-24 lg:py-32 overflow-hidden">
      {/* Layered background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/30 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-gold/15 hidden lg:block" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-gold/15 hidden lg:block" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-[0.68rem] tracking-[0.25em] uppercase text-gold/80 mb-5 flex items-center justify-center gap-4 font-medium">
          <span className="block w-10 h-px bg-gradient-to-r from-transparent to-gold/60" />
          Ready to Start
          <span className="block w-10 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </p>

        <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[3.25rem] text-white leading-[1.1] mb-6">
          Your Next Five-Star
          <br />
          <em className="italic text-gold">Review Starts Here</em>
        </h2>

        <p className="text-gray text-[0.95rem] lg:text-base max-w-md mx-auto mb-12 leading-[1.8] font-light">
          Get a free quote in under 60 seconds. We&apos;ll match you with a
          cleaning plan tailored to your property and schedule.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-2.5 bg-gold text-black px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.1em] no-underline hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
          >
            <Phone size={15} />
            Call {BUSINESS.phone}
          </a>
          <a
            href={`sms:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-2.5 bg-transparent text-white border border-white/15 px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.1em] no-underline hover:border-gold/40 hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageSquare size={15} />
            Text Us
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center gap-2.5 bg-transparent text-white border border-white/15 px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.1em] no-underline hover:border-gold/40 hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={15} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
