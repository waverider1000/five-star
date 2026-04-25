import { Phone, Mail, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative px-6 lg:px-16 py-20 lg:py-28 bg-gradient-to-b from-black via-charcoal/50 to-black overflow-hidden">
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 flex items-center justify-center gap-3">
          <span className="block w-8 h-px bg-gold" />
          Ready to Start
          <span className="block w-8 h-px bg-gold" />
        </p>

        <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
          Your Next Five-Star
          <br />
          <em className="italic text-gold">Review Starts Here</em>
        </h2>

        <p className="text-gray text-base lg:text-lg max-w-lg mx-auto mb-10">
          Get a free quote in under 60 seconds. We&apos;ll match you with a
          cleaning plan tailored to your property and schedule.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-2 bg-gold text-black px-7 py-3.5 text-sm font-medium uppercase tracking-wider no-underline hover:bg-gold-light transition-all hover:-translate-y-0.5"
          >
            <Phone size={16} />
            Call {BUSINESS.phone}
          </a>
          <a
            href={`sms:${BUSINESS.phone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-2 bg-transparent text-white border border-white/20 px-7 py-3.5 text-sm font-medium uppercase tracking-wider no-underline hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5"
          >
            <MessageSquare size={16} />
            Text Us
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center gap-2 bg-transparent text-white border border-white/20 px-7 py-3.5 text-sm font-medium uppercase tracking-wider no-underline hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
