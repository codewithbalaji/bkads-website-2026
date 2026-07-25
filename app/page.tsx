import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import OurProcess from "@/components/sections/our-process";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import TrustBar from "@/components/sections/trust-bar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <TrustBar/>
    <Services/>
    <OurProcess/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
