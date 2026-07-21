import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import OurApproach from "@/components/sections/OurApproach";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import About from "@/components/sections/About";
import FutureVision from "@/components/sections/FutureVision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <Services />
        <WhoWeWorkWith />
        <OurApproach />
        <WhyPartnerWithUs />
        <About />
        <FutureVision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
