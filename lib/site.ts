/**
 * Canonical site constants shared by metadata, sitemap, and robots.
 */
export const SITE_URL = "https://www.bkads.in";

export const SITE_NAME = "BKADS";

export const SITE_DESCRIPTION =
  "BKADS is a Chennai-based technology partner delivering AI automation, custom software, web & app development, and SEO for modern businesses.";

/**
 * Canonical contact details. Mirrors ABOUT.md and the values in
 * components/ui/flickering-footer.tsx (siteConfig.contact) — single source of truth.
 */
export const CONTACT = {
  address: "Ambattur, Chennai, Tamil Nadu 600053, India",
  email: "contact@bkads.in",
  phone: "+91 93843 18546",
  phoneHref: "+919384318546",
} as const;

/** Social profiles. Single source of truth — also used in the footer and Organization JSON-LD `sameAs`. */
export const SOCIALS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/company/bkads" },
  { label: "Instagram", url: "https://www.instagram.com/bkads_official" },
  { label: "Facebook", url: "https://www.facebook.com/bkadsofficial" },
] as const;
