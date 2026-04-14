import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { TimerSection } from "@/components/sections/TimerSection";
import { LoopSection } from "@/components/LoopSection";
import { WrapUpSection } from "@/components/sections/WrapUpSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <TimerSection />
      <LoopSection />
      <WrapUpSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </>
  );
}
