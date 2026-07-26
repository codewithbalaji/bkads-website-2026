import fs from "node:fs";
import path from "node:path";

import type { CaseStudy, CaseStudyMeta } from "@/lib/case-studies.shared";

// Re-export the client-safe pieces so server code has a single import surface.
export {
  SERVICES,
  type Service,
  type CaseStudyMeta,
  type CaseStudy,
} from "@/lib/case-studies.shared";

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

/** Slugs derived from the .mdx filenames in the content directory. */
export function getCaseStudySlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Load every case study's metadata, newest first. */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const slugs = getCaseStudySlugs();
  const studies = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = (await import(`@/content/case-studies/${slug}.mdx`)) as {
        meta: CaseStudyMeta;
      };
      return { ...meta, slug };
    }),
  );
  return studies.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Load a single case study's metadata by slug, or null if it doesn't exist. */
export async function getCaseStudyMeta(
  slug: string,
): Promise<CaseStudy | null> {
  if (!getCaseStudySlugs().includes(slug)) return null;
  const { meta } = (await import(`@/content/case-studies/${slug}.mdx`)) as {
    meta: CaseStudyMeta;
  };
  return { ...meta, slug };
}
