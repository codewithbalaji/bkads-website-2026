import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import CaseStudiesList from "@/components/sections/case-studies-list";
import { getAllCaseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/site";

const TITLE = "Case Studies";
const DESCRIPTION =
  "Real projects from BKADS — how we help modern businesses with AI automation, custom software, web and app development, and growth.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: `${TITLE} | BKADS`,
    description: DESCRIPTION,
    url: `${SITE_URL}/case-studies`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | BKADS`,
    description: DESCRIPTION,
  },
};

export default async function CaseStudiesPage() {
  const studies = await getAllCaseStudies();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "BKADS Case Studies",
    description: DESCRIPTION,
    url: `${SITE_URL}/case-studies`,
    hasPart: {
      "@type": "ItemList",
      itemListElement: studies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/case-studies/${study.slug}`,
        name: study.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative bg-background px-6 pt-40 pb-16 text-center md:pt-48">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-3xl font-thin tracking-normal italic sm:text-4xl md:text-5xl">
            Our Work
          </span>
          Case studies from real projects
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-base text-muted-foreground">
          A look at how we help modern businesses modernize — from AI automation
          to custom software, web, and apps. Filter by the kind of work you have
          in mind.
        </p>
      </section>

      <CaseStudiesList items={studies} />
      <CtaBanner />
      <Footer />
    </>
  );
}
