import {
  BadgeCheck,
  Eye,
  Handshake,
  Lightbulb,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerReveal, RevealItem } from "@/components/ui/reveal";

const VALUES: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    id: "trust",
    icon: Handshake,
    title: "Trust",
    description:
      "We earn confidence by doing what we say we will and standing behind the work long after launch.",
  },
  {
    id: "transparency",
    icon: Eye,
    title: "Transparency",
    description:
      "Clear scope, honest timelines, and no surprises — you always know where your project stands.",
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We bring modern AI, automation, and software practices to problems that older tools can't solve well.",
  },
  {
    id: "reliability",
    icon: BadgeCheck,
    title: "Reliability",
    description:
      "Solutions built for performance and scale, with ongoing support so your operations keep running.",
  },
  {
    id: "continuous-improvement",
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We keep refining — your systems, and the way we work — so results get better over time.",
  },
];

const CoreValues = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              What We Stand For
            </span>
            The values behind every engagement
          </h2>
          <p className="mt-6 max-w-prose text-sm text-muted-foreground">
            Friendly, professional, and solution-oriented — these five values
            shape how we work with every client, on every project.
          </p>
        </Reveal>

        <StaggerReveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => (
            <RevealItem
              key={value.id}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:bg-card/80 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:border-foreground/30">
                <value.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {value.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {value.description}
              </p>
            </RevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default CoreValues;
