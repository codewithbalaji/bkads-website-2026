import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Global styling layer for MDX content (case-study bodies).
 * Elements are mapped to the monochrome design tokens from DESIGN.md rather
 * than pulling in @tailwindcss/typography, so the palette stays under control.
 * Required by @next/mdx with the App Router.
 */
const components: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-14 mb-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-10 mb-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "my-5 text-base leading-7 text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "my-5 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground marker:text-foreground/40",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "my-5 list-decimal space-y-2 pl-6 text-base leading-7 text-muted-foreground marker:text-foreground/40",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("pl-1.5", className)} {...props} />
  ),
  strong: ({ className, ...props }) => (
    <strong
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "my-8 rounded-r-lg border-l-2 border-border bg-card/50 py-1 pl-6 text-lg font-thin text-foreground italic",
        className,
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-12 border-border", className)} {...props} />
  ),
  a: ({ className, href = "", ...props }) => {
    const internal = href.startsWith("/") || href.startsWith("#");
    const classes = cn(
      "font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground",
      className,
    );
    return internal ? (
      <Link href={href} className={classes} {...props} />
    ) : (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded-md border border-border bg-card px-1.5 py-0.5 font-mono text-sm text-foreground",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-xl border border-border bg-card p-5 text-sm [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0",
        className,
      )}
      {...props}
    />
  ),
  img: ({ className, ...props }) => (
    <Image
      sizes="(min-width: 768px) 720px, 100vw"
      width={1280}
      height={720}
      className={cn(
        "my-8 h-auto w-full rounded-2xl border border-border object-cover",
        className,
      )}
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(
  inherited: MDXComponents = {},
): MDXComponents {
  return { ...inherited, ...components };
}
