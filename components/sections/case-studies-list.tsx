"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  SERVICES,
  type CaseStudy,
  type Service,
} from "@/lib/case-studies.shared";
import { StaggerReveal, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | Service;

const FILTERS: Filter[] = ["All", ...SERVICES];

/** Tags a study matches for filtering: its primary service plus any extra tags. */
function studyTags(study: CaseStudy): Service[] {
  return Array.from(new Set([study.service, ...(study.tags ?? [])]));
}

const CaseStudiesList = ({ items }: { items: CaseStudy[] }) => {
  const [active, setActive] = useState<Filter>("All");

  // Only show a chip if at least one study carries that tag.
  const available = useMemo(() => {
    const present = new Set(items.flatMap(studyTags));
    return FILTERS.filter((f) => f === "All" || present.has(f));
  }, [items]);

  const visible = useMemo(
    () =>
      active === "All"
        ? items
        : items.filter((s) => studyTags(s).includes(active)),
    [items, active],
  );

  return (
    <section className="relative bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {available.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
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
            No case studies in this category yet — check back soon.
          </p>
        ) : (
          <StaggerReveal
            key={active}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((study) => (
              <RevealItem key={study.slug} className="h-full">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full border border-border px-2.5 py-1 font-medium text-muted-foreground">
                        {study.service}
                      </span>
                      <span className="text-muted-foreground">
                        {study.client}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">
                      {study.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Read case study
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
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

export default CaseStudiesList;
