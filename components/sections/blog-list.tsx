"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import {
  CATEGORIES,
  formatDate,
  type Category,
  type Post,
} from "@/lib/blog.shared";
import { StaggerReveal, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | Category;

const FILTERS: Filter[] = ["All", ...CATEGORIES];

const BlogList = ({ posts }: { posts: Post[] }) => {
  const [category, setCategory] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  // Only show a chip if at least one post uses that category.
  const available = useMemo(() => {
    const present = new Set(posts.map((p) => p.category));
    return FILTERS.filter((f) => f === "All" || present.has(f));
  }, [posts]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, category, query]);

  return (
    <section className="relative bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search */}
        <div className="mx-auto max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts..."
              aria-label="Search posts"
              className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
            />
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {available.map((filter) => {
            const isActive = filter === category;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setCategory(filter)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        {visible.length === 0 ? (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            No posts match your search yet — try a different term or category.
          </p>
        ) : (
          <StaggerReveal
            key={`${category}-${query}`}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((post) => (
              <RevealItem key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {post.category}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">
                      {post.summary}
                    </p>
                    <p className="mt-5 text-xs text-muted-foreground">
                      By {post.author} · {post.readingTime} min read ·{" "}
                      {formatDate(post.date)}
                    </p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </StaggerReveal>
        )}
      </div>
    </section>
  );
};

export default BlogList;
