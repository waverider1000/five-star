import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";
import GoldDivider from "@/components/ui/GoldDivider";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <GoldDivider />
      <AnimateOnScroll>
        <Services />
      </AnimateOnScroll>
      <GoldDivider />
      <AnimateOnScroll>
        <WhyUs />
      </AnimateOnScroll>
      <GoldDivider />
      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>
      <GoldDivider />
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <GoldDivider />
      <AnimateOnScroll>
        <ServiceArea />
      </AnimateOnScroll>
      <GoldDivider />
      <AnimateOnScroll>
        <BlogPreview />
      </AnimateOnScroll>
      <GoldDivider />
      <AnimateOnScroll>
        <CTABanner />
      </AnimateOnScroll>
    </>
  );
}
