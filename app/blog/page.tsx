import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import CtaBanner from "@/components/sections/cta-banner";
import BlogList from "@/components/sections/blog-list";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const TITLE = "Blog";
const DESCRIPTION =
  "Practical, no-hype articles on AI automation, custom software, web and apps, and getting found online — from the BKADS team.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${TITLE} | BKADS`,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | BKADS`,
    description: DESCRIPTION,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BKADS Blog",
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
    })),
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
            Ideas & Resources
          </span>
          The BKADS blog
        </h1>
        <p className="mx-auto mt-6 max-w-prose text-base text-muted-foreground">
          Practical, jargon-free thinking on AI automation, custom software, web
          and apps, and growth — written to be genuinely useful, not to sell you
          something.
        </p>
      </section>

      <BlogList posts={posts} />
      <CtaBanner />
      <Footer />
    </>
  );
}
