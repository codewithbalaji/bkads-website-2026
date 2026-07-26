/**
 * Client-safe case-study constants and types.
 * Kept free of `fs`/`node:*` so it can be imported by client components
 * (the filter list) without dragging server-only code into the browser bundle.
 */

/**
 * The fixed set of service categories a case study can be tagged with.
 * Single source of truth for the listing filter chips and content validation.
 */
export const SERVICES = [
  "AI Automation",
  "Web Development",
  "App Development",
  "Software Development",
  "SEO & Marketing",
] as const;

export type Service = (typeof SERVICES)[number];

/** The `meta` object every case-study MDX file exports. */
export type CaseStudyMeta = {
  title: string;
  client: string;
  /** Primary service category — must be one of {@link SERVICES}. */
  service: Service;
  /** Short line used on the card and as the meta description. */
  summary: string;
  challenge: string;
  solution: string;
  /** Qualitative outcome — no fabricated metrics until real data exists. */
  result: string;
  image: string;
  imageAlt: string;
  /** ISO date (YYYY-MM-DD); drives sort order and sitemap lastModified. */
  date: string;
  /** Optional extra tags for filtering; `service` is always included. */
  tags?: Service[];
};

export type CaseStudy = CaseStudyMeta & { slug: string };
