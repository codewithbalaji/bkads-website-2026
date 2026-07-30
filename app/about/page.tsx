import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import AboutStory from "@/components/sections/about-story";
import CoreValues from "@/components/sections/core-values";
import CtaBanner from "@/components/sections/cta-banner";
import Founder from "@/components/sections/founder";
import FutureVision from "@/components/sections/future-vision";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${SITE_NAME} — About`,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    mainEntity: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  };

  const founderJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about#founder`,
    name: "Balaji D",
    jobTitle: "Founder",
    image: `${SITE_URL}/bkads_founder_balaji_d.jpeg`,
    worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
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
      <Founder />
      <CoreValues />
      <FutureVision />
      <CtaBanner />
      <Footer />
    </>
  );
}
