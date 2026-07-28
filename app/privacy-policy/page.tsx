import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How BKADS collects, uses, and protects information submitted through this website.";
const LAST_UPDATED = "28 July 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-background px-6 pt-40 pb-12 text-center md:pt-48">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-3xl font-thin tracking-normal italic sm:text-4xl md:text-5xl">
            Legal
          </span>
          Privacy Policy
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-base text-muted-foreground">
          Last updated {LAST_UPDATED}
        </p>
      </section>

      <section className="bg-background px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <p>
            This policy explains what information {SITE_NAME} ("BKADS", "we", "us")
            collects through {SITE_URL.replace("https://www.", "")}, why we collect it,
            and how it is used. By using this website, you agree to the practices
            described below.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p>
              We collect information you choose to submit through our contact
              form: your name, email address, company (optional), and message.
              We do not require an account and do not collect passwords or
              payment information through this website.
            </p>
            <p>
              Our hosting and infrastructure providers may automatically log
              standard technical data (such as IP address, browser type, and
              pages visited) for security and performance purposes. We do not
              currently use third-party analytics or advertising trackers on
              this site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              2. How We Use Information
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to enquiries submitted through the contact form.</li>
              <li>To understand and fulfil requests for our services.</li>
              <li>To maintain the security and reliability of this website.</li>
              <li>To comply with applicable legal obligations.</li>
            </ul>
            <p>We do not sell your information to third parties.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              3. How We Share Information
            </h2>
            <p>
              Contact form submissions are relayed to our team using Resend, a
              transactional email provider, solely to deliver your enquiry to
              us. We may also share information where required by law or to
              protect our legal rights.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              4. Data Retention
            </h2>
            <p>
              We retain contact enquiries for as long as necessary to respond
              to your request and maintain a reasonable business record, after
              which they are deleted or anonymised.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              5. Your Rights
            </h2>
            <p>
              You may ask us to access, correct, or delete personal
              information you have submitted to us by contacting us at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                {CONTACT.email}
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              6. Cookies
            </h2>
            <p>
              This website does not set non-essential cookies. If that
              changes, this policy will be updated to describe the cookies
              used and your choices regarding them.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Material changes
              will be reflected by an updated "Last updated" date above.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              8. Contact Us
            </h2>
            <p>
              Questions about this policy can be directed to{" "}
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
