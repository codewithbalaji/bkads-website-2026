import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import {
  getCaseStudyMeta,
  getCaseStudySlugs,
  type CaseStudyMeta,
} from "@/lib/case-studies";
import { SITE_URL } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

// Only prerender the known slugs; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyMeta(slug);
  if (!study) return {};

  const url = `${SITE_URL}/case-studies/${slug}`;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: study.title,
      description: study.summary,
      url,
      type: "article",
      publishedTime: study.date,
      images: [{ url: study.image, alt: study.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.summary,
      images: [study.image],
    },
  };
}

function ArticleJsonLd({ study, slug }: { study: CaseStudyMeta; slug: string }) {
  const url = `${SITE_URL}/case-studies/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    image: { "@type": "ImageObject", url: `${SITE_URL}${study.image}` },
    datePublished: study.date,
    dateModified: study.date,
    author: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: { "@type": "Organization", name: study.client },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: `${SITE_URL}/case-studies`,
      },
      { "@type": "ListItem", position: 3, name: study.title, item: url },
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
    </>
  );
}

const SUMMARY_FIELDS = [
  { key: "challenge", label: "The challenge" },
  { key: "solution", label: "The solution" },
  { key: "result", label: "The result" },
] as const;

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyMeta(slug);
  if (!study) notFound();

  const { default: Body } = (await import(
    `@/content/case-studies/${slug}.mdx`
  )) as { default: React.ComponentType };

  return (
    <>
      <ArticleJsonLd study={study} slug={slug} />

      <article className="relative bg-background pt-32 pb-8 md:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All case studies
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-border px-3 py-1 font-medium text-muted-foreground">
              {study.service}
            </span>
            <span className="text-muted-foreground">{study.client}</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{study.summary}</p>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-10 max-w-5xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* At-a-glance summary */}
        <div className="mx-auto mt-12 max-w-3xl px-6">
          <dl className="grid gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3 sm:gap-4">
            {SUMMARY_FIELDS.map((field) => (
              <div key={field.key}>
                <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {field.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-foreground">
                  {study[field.key]}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* MDX body */}
        <div className="mx-auto mt-4 max-w-3xl px-6">
          <Body />
        </div>

        {/* Internal links */}
        <div className="mx-auto mt-16 max-w-3xl px-6">
          <div className="flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Have a project like this in mind?{" "}
              <Link
                href="/services"
                className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Explore our services
              </Link>
              .
            </p>
            <Button
              variant="default"
              size="lg"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Start a conversation
            </Button>
          </div>
        </div>
      </article>

      <CtaBanner />
      <Footer />
    </>
  );
}
