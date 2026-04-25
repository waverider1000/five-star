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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative text-center lg:text-left">
              <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 rounded-full bg-charcoal border border-gold/30 flex items-center justify-center mb-5">
                <span className="font-display text-xl font-bold text-gold">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
