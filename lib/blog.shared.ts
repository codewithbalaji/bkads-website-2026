/**
 * Client-safe blog constants, types, and helpers.
 * Kept free of `fs`/`node:*` so it can be imported by client components
 * (the search/filter bar) without dragging server-only code into the browser bundle.
 */

/**
 * The fixed set of blog categories.
 * Single source of truth for the listing filter chips and content validation.
 */
export const CATEGORIES = [
  "AI & Automation",
  "Web & App",
  "Software",
  "SEO & Marketing",
  "Guides",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** The `meta` object every blog MDX file exports. */
export type PostMeta = {
  title: string;
  category: Category;
  /** Short line used on the card and as the meta description. */
  summary: string;
  author: string;
  image: string;
  imageAlt: string;
  /** ISO date (YYYY-MM-DD); drives sort order and sitemap lastModified. */
  date: string;
  /** Optional extra tags for future filtering / SEO. */
  tags?: string[];
};

export type Post = PostMeta & {
  slug: string;
  /** Estimated reading time in whole minutes. */
  readingTime: number;
};

/** Human-readable published date, e.g. "Jul 12, 2026". Client-safe. */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
