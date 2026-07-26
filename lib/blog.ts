import fs from "node:fs";
import path from "node:path";

import type { Category, Post, PostMeta } from "@/lib/blog.shared";

// Re-export the client-safe pieces so server code has a single import surface.
export {
  CATEGORIES,
  formatDate,
  type Category,
  type PostMeta,
  type Post,
} from "@/lib/blog.shared";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

/** Slugs derived from the .mdx filenames in the content directory. */
export function getPostSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Estimate reading time (whole minutes) from the raw MDX body word count. */
function readingTimeFor(slug: string): number {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
  // Drop the `export const meta = {...};` block so front-matter isn't counted.
  const body = raw.replace(/export const meta[\s\S]*?};/, "");
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/** Load every post's metadata, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = (await import(`@/content/blog/${slug}.mdx`)) as {
        meta: PostMeta;
      };
      return { ...meta, slug, readingTime: readingTimeFor(slug) };
    }),
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Load a single post's metadata by slug, or null if it doesn't exist. */
export async function getPostMeta(slug: string): Promise<Post | null> {
  if (!getPostSlugs().includes(slug)) return null;
  const { meta } = (await import(`@/content/blog/${slug}.mdx`)) as {
    meta: PostMeta;
  };
  return { ...meta, slug, readingTime: readingTimeFor(slug) };
}

/**
 * Posts related to the given one: same category first (excluding self),
 * backfilled with the most recent other posts up to `limit`.
 */
export async function getRelatedPosts(
  slug: string,
  category: Category,
  limit = 3,
): Promise<Post[]> {
  const others = (await getAllPosts()).filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === category);
  const rest = others.filter((p) => p.category !== category);
  return [...sameCategory, ...rest].slice(0, limit);
}
