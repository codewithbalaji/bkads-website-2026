import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import OurProcess from "@/components/sections/our-process";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import TrustBar from "@/components/sections/trust-bar";
import WhyChooseUs from "@/components/sections/why-choose-us";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = `${SITE_NAME} — Technology Partner for Modern Businesses`;

export const metadata: Metadata = {
  title: TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ambattur",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600053",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <OurProcess />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Footer />
    </>
  );
}
