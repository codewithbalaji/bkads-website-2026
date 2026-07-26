import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import OurProcess from "@/components/sections/our-process";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import TrustBar from "@/components/sections/trust-bar";
import WhyChooseUs from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <>
    <Hero/>
    <TrustBar/>
    <Services/>
    <WhyChooseUs/>
    <OurProcess/>
    <Testimonials/>
    <Faq/>
    <CtaBanner/>
    <Footer/>
    </>
  );
}
