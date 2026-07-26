"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto grid max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 shadow-lg backdrop-blur-xl">
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.png"
            alt="BKADS"
            width={139}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden justify-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end gap-2">
          <Button
            variant="default"
            nativeButton={false}
            render={<Link href="/contact" />}
            className="group relative hidden h-10 w-fit cursor-pointer overflow-hidden rounded-full ps-5 pe-12 text-sm font-medium transition-all duration-500 hover:ps-12 hover:pe-5 md:flex"
          >
            <span className="relative z-10 transition-all duration-500">
              Contact
            </span>
            <div className="absolute right-1 flex size-8 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </div>
          </Button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-8 rounded-l-2xl border-l border-white/10 bg-background/95 p-6 shadow-lg backdrop-blur-xl transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/company-logo.png"
            alt="BKADS"
            width={139}
            height={48}
            className="h-8 w-auto"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 text-lg font-medium text-foreground/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg py-3 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="default"
          nativeButton={false}
          render={<Link href="/contact" onClick={() => setIsOpen(false)} />}
          size="lg"
          className="mt-auto w-full rounded-xl"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
