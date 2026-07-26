import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import AboutStory from "@/components/sections/about-story";
import CoreValues from "@/components/sections/core-values";
import CtaBanner from "@/components/sections/cta-banner";
import FutureVision from "@/components/sections/future-vision";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "About";
const DESCRIPTION =
  "BKADS is a Chennai-based technology partner combining modern software development, AI, and automation to help businesses operate smarter and grow faster.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${SITE_NAME} — About`,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    mainEntity: {
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

      <section className="relative bg-background px-6 pt-40 pb-12 text-center md:pt-48">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-3xl font-thin tracking-normal italic sm:text-4xl md:text-5xl">
            Who We Are
          </span>
          Your technology partner for modern businesses
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-base text-muted-foreground">
          BKADS combines modern software development, AI expertise, and
          business-focused problem solving to deliver practical solutions that
          help companies achieve measurable results.
        </p>
      </section>

      <AboutStory />
      <CoreValues />
      <FutureVision />
      <CtaBanner />
      <Footer />
    </>
  );
}
