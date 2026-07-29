import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import ServiceDetails from "@/components/sections/service-details";
import services from "@/data/services.json";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "Services";
const DESCRIPTION =
  "AI automation, custom software, web & app development, and digital marketing for modern businesses.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Services`,
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        areaServed: "IN",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
