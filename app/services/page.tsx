import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import ServiceDetails from "@/components/sections/service-details";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, custom software, web & app development, and digital marketing for modern businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-background px-6 pt-40 pb-12 text-center md:pt-48">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-3xl font-thin tracking-normal italic sm:text-4xl md:text-5xl">
            What We Do
          </span>
          Services built for modern businesses
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-base text-muted-foreground">
          From AI automation to custom software, web, apps, and growth —
          end-to-end delivery under one roof.
        </p>
      </section>

      <ServiceDetails />
      <CtaBanner />
      <Footer />
    </>
  );
}
