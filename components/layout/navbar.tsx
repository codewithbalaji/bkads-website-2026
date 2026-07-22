import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto grid max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 shadow-lg backdrop-blur-xl">
        <Link href="#home" className="text-lg font-semibold tracking-tight">
          BKADS
        </Link>

        <nav className="hidden justify-center gap-8 text-sm text-foreground/70 md:flex">
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

        <div className="flex justify-end">
          <Button
            variant="default"
            size="sm"
            nativeButton={false}
            render={<Link href="#contact" />}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
