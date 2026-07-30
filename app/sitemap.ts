import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";

import { getAllCaseStudies } from "@/lib/case-studies";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

/** Last commit date touching a source file, for sitemap `lastModified`. */
function lastModifiedOf(sourcePath: string): Date {
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", sourcePath],
      { cwd: process.cwd(), encoding: "utf8" },
    ).trim();
    if (iso) return new Date(iso);
  } catch {
    // Fall through if git isn't available (e.g. some deploy environments).
  }
  return new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: lastModifiedOf("app/page.tsx"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: lastModifiedOf("app/services/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: lastModifiedOf("app/case-studies/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: lastModifiedOf("app/about/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: lastModifiedOf("app/blog/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: lastModifiedOf("app/contact/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: lastModifiedOf("app/privacy-policy/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: lastModifiedOf("app/terms-of-service/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  const studies = await getAllCaseStudies();
  const caseStudyRoutes: MetadataRoute.Sitemap = studies.map((study) => ({
    url: `${SITE_URL}/case-studies/${study.slug}`,
    lastModified: new Date(study.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const posts = await getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
