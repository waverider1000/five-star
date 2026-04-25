import SectionHeader from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="process" className="bg-off-black px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="How It Works"
          title="Four Steps to a Spotless Property"
          goldWord="Spotless"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-14 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[12%] right-[12%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/20 to-gold/5 blur-sm" />
          </div>

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="relative text-center lg:text-left group">
              <div className="relative z-10 w-[4.5rem] h-[4.5rem] mx-auto lg:mx-0 mb-6">
                {/* Glow behind circle */}
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full bg-charcoal border border-gold/25 flex items-center justify-center group-hover:border-gold/50 transition-all duration-400">
                  <span className="font-display text-xl font-bold text-gold">
                    {step.step}
                  </span>
                </div>
                {/* Small dot on the connecting line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-[calc(50%-0.5rem)] w-1.5 h-1.5 rounded-full bg-gold/30 -translate-y-1/2" />
                )}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2.5 tracking-wide">
                {step.title}
              </h3>
              <p className="text-[0.82rem] text-gray leading-[1.75] font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
