import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "Terms of Service";
const DESCRIPTION =
  "The terms that govern use of the BKADS website and engagement of BKADS services.";
const LAST_UPDATED = "28 July 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/terms-of-service`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative bg-background px-6 pt-40 pb-12 text-center md:pt-48">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-3xl font-thin tracking-normal italic sm:text-4xl md:text-5xl">
            Legal
          </span>
          Terms of Service
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-base text-muted-foreground">
          Last updated {LAST_UPDATED}
        </p>
      </section>

      <section className="bg-background px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <p>
            These Terms of Service ("Terms") govern your use of the{" "}
            {SITE_URL.replace("https://www.", "")} website operated by{" "}
            {SITE_NAME} ("BKADS", "we", "us"). By using this website or
            engaging us for services, you agree to these Terms.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              1. Use of This Website
            </h2>
            <p>
              This website is provided to share information about BKADS and
              its services and to let visitors get in touch with us. You agree
              not to misuse the site, attempt to disrupt it, or use it for any
              unlawful purpose.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              2. Services
            </h2>
            <p>
              Descriptions of services on this website (including AI
              automation, website design and development, app development,
              software development, and SEO and digital marketing) are
              provided for general information only and do not constitute a
              binding offer. The specific scope, deliverables, timeline, and
              fees for any engagement are agreed separately in writing between
              BKADS and the client before work begins.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              3. Intellectual Property
            </h2>
            <p>
              Unless otherwise agreed in a separate contract, the content,
              design, and branding of this website belong to BKADS and may not
              be copied or reused without permission. Intellectual property
              arrangements for client projects are governed by the applicable
              client agreement, not by these Terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              4. Enquiries and Communication
            </h2>
            <p>
              Submitting the contact form does not create a service
              engagement. It authorises BKADS to contact you regarding your
              enquiry using the details you provide. See our{" "}
              <a
                href="/privacy-policy"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                Privacy Policy
              </a>{" "}
              for how that information is handled.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              5. No Warranty
            </h2>
            <p>
              This website and its content are provided "as is" without
              warranties of any kind. While we aim to keep information
              accurate and current, we do not guarantee that the site will be
              error-free or uninterrupted.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, BKADS is not liable for
              any indirect, incidental, or consequential loss arising from
              your use of this website. Liability arising from a specific
              client engagement is governed by the corresponding written
              agreement for that engagement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              7. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India, and any disputes
              arising from them will be subject to the exclusive jurisdiction
              of the courts in Chennai, Tamil Nadu.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              8. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              the website after changes are posted constitutes acceptance of
              the revised Terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              9. Contact Us
            </h2>
            <p>
              Questions about these Terms can be directed to{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                {CONTACT.email}
              </a>{" "}
              or {CONTACT.address}.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
