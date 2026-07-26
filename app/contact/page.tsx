import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import ContactForm from "@/components/sections/contact-form";
import ContactInfo from "@/components/sections/contact-info";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "Contact";
const DESCRIPTION =
  "Get in touch with BKADS — tell us about your project and we'll reply within one business day. AI automation, custom software, web & app development, and SEO from Chennai.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${SITE_NAME} — Contact`,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ambattur",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600053",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT.email,
        telephone: CONTACT.phone,
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
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
            Let&apos;s talk
          </span>
          Start the conversation
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-base text-muted-foreground">
          Tell us what you&apos;re building or the problem you&apos;re trying to solve.
          We&apos;ll get back to you within one business day — no pressure, no hard sell.
        </p>
      </section>

      <section className="relative bg-background pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </>
  );
}
