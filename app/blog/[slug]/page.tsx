import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import {
  formatDate,
  getPostMeta,
  getPostSlugs,
  getRelatedPosts,
  type Post,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

// Only prerender the known slugs; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostMeta(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

function BlogPostingJsonLd({ post }: { post: Post }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: { "@type": "ImageObject", url: post.image },
    datePublished: post.date,
    dateModified: post.date,
    author:
      post.author === "Balaji"
        ? { "@type": "Person", "@id": `${SITE_URL}/about#founder` }
        : { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostMeta(slug);
  if (!post) notFound();

  const { default: Body } = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: React.ComponentType;
  };
  const related = await getRelatedPosts(slug, post.category);

  return (
    <>
      <BlogPostingJsonLd post={post} />

      <article className="relative bg-background pt-32 pb-8 md:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All posts
          </Link>

          <span className="mt-8 inline-block rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground">
            {post.category}
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{post.summary}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            By {post.author} · {post.readingTime} min read ·{" "}
            {formatDate(post.date)}
          </p>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-10 max-w-5xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* MDX body */}
        <div className="mx-auto mt-12 max-w-3xl px-6">
          <Body />
        </div>

        {/* Internal links footer */}
        <div className="mx-auto mt-16 max-w-3xl px-6">
          <p className="border-t border-border pt-10 text-sm text-muted-foreground">
            Enjoyed this?{" "}
            <Link
              href="/services"
              className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              See how we work
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              start a conversation
            </Link>
            .
          </p>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="relative bg-background pb-8">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {item.category}
                    </span>
                    <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
      <Footer />
    </>
  );
}
