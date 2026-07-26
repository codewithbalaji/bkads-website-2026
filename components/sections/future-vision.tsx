import { Boxes, Cpu, Repeat, type LucideIcon } from "lucide-react";
import { Reveal, StaggerReveal, RevealItem } from "@/components/ui/reveal";

const DIRECTIONS: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    id: "saas",
    icon: Boxes,
    title: "SaaS Products",
    description:
      "Industry-specific software products that package what we've learned from client work into scalable tools.",
  },
  {
    id: "ai-platforms",
    icon: Cpu,
    title: "AI Platforms",
    description:
      "AI-powered platforms that bring automation and intelligence to businesses of every size.",
  },
  {
    id: "subscriptions",
    icon: Repeat,
    title: "Subscription Solutions",
    description:
      "Subscription-based business solutions that grow with our clients instead of stopping at a single project.",
  },
];

const FutureVision = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              Where We&apos;re Headed
            </span>
            From a services company to a products company
          </h2>
          <p className="mt-6 max-w-prose text-sm text-muted-foreground">
            BKADS is evolving from a technology services company into a software
            and AI solutions organization — developing industry-specific
            products and scalable platforms alongside the services we deliver
            today.
          </p>
        </Reveal>

        <StaggerReveal className="mt-14 grid gap-6 md:grid-cols-3">
          {DIRECTIONS.map((direction) => (
            <RevealItem
              key={direction.id}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                <direction.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {direction.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {direction.description}
              </p>
            </RevealItem>
          ))}
        </StaggerReveal>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-prose text-sm text-muted-foreground">
            Our long-term goal: build BKADS into a respected technology company
            that delivers software, AI, automation, and business solutions —
            while creating innovative products that serve businesses globally.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FutureVision;
