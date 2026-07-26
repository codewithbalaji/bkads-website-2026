import Link from "next/link";
import { Button } from "@/components/ui/button";

interface UnderConstructionProps {
  title: string;
  description?: string;
}

export function UnderConstruction({
  title,
  description = "We're building this page. Check back soon.",
}: UnderConstructionProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 pt-32 text-center">
      <span className="text-sm font-medium text-foreground/80">
        Coming Soon
      </span>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="block text-3xl font-thin tracking-normal italic sm:text-4xl md:text-5xl lg:text-6xl">
          This page is
        </span>
        {title}
      </h1>
      <p className="mt-6 max-w-prose text-base text-muted-foreground">
        {description}
      </p>
      <Button
        variant="default"
        size="lg"
        nativeButton={false}
        render={<Link href="/" />}
        className="mt-10"
      >
        Back to Home
      </Button>
    </div>
  );
}
