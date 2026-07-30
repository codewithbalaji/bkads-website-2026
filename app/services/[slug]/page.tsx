import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getAllCaseStudies } from "@/lib/case-studies";
import { getServiceCard, getServiceContent, getServiceIds } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

// Only prerender the known service ids; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getServiceIds().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const card = getServiceCard(slug);
  const content = getServiceContent(slug);
  if (!card || !content) return {};

  const url = `${SITE_URL}/services/${slug}`;
  return {
    title: content.seoTitle,
    description: content.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDescription,
      url,
      type: "website",
      images: [{ url: card.image, alt: card.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.metaDescription,
      images: [card.image],
    },
  };
}

function ServiceJsonLd({
  slug,
  title,
  description,
  faqs,
}: {
  slug: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  const url = `${SITE_URL}/services/${slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: title,
    serviceType: title,
    description,
    provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    areaServed: "IN",
    url,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const faqPage = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faqPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      )}
    </>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const card = getServiceCard(slug);
  const content = getServiceContent(slug);
  if (!card || !content) notFound();

  const allCaseStudies = await getAllCaseStudies();
  const relatedCaseStudies = allCaseStudies
    .filter(
      (study) =>
        study.service === content.relatedServiceTag ||
        study.tags?.includes(content.relatedServiceTag),
    )
    .slice(0, 3);

  return (
    <>
      <ServiceJsonLd
        slug={slug}
        title={card.title}
        description={content.metaDescription}
        faqs={content.faqs}
      />

      <article className="relative bg-background pt-32 pb-8 md:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All services
          </Link>

          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              What We Do
            </span>
            {card.title}
          </h1>

          {content.overview.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-prose text-base text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-10 max-w-5xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src={card.image}
              alt={card.title}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </article>

      {/* Features */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What's included
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {content.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {content.process && content.process.length > 0 && (
        <section className="relative bg-background py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                How it works
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {content.process.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <span className="block text-2xl font-thin italic text-muted-foreground">
                    {step.step}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related case studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="relative bg-background py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Related case studies
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCaseStudies.map((study, index) => (
                <Reveal key={study.slug} delay={index * 0.05}>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/30"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-medium text-muted-foreground">
                        {study.client}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                        {study.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                        Read case study
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="relative bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Questions, answered
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Accordion defaultValue={[0]} className="mt-10">
                {content.faqs.map((faq) => (
                  <AccordionItem key={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>
      )}

      {/* Internal link back to services + CTA */}
      <div className="mx-auto max-w-3xl px-6 pb-4">
        <div className="flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Curious how this fits with our other services?{" "}
            <Link
              href="/services"
              className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              Explore all services
            </Link>
            .
          </p>
          <Button
            variant="default"
            size="lg"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Get a free quote
          </Button>
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </>
  );
}
