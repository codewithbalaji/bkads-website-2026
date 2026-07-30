import { Compass, Target, type LucideIcon } from "lucide-react";
import { Reveal, StaggerReveal, RevealItem } from "@/components/ui/reveal";

const PILLARS: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    description:
      "Deliver AI automation, website design and development, app and software development, SEO and digital marketing, and e-commerce solutions that solve real business challenges and create measurable value.",
  },
  {
    id: "vision",
    icon: Compass,
    title: "Our Vision",
    description:
      "Empower businesses with modern technology, AI, and automation — helping them operate smarter, grow faster, and stay competitive in an ever-evolving digital world.",
  },
];

const AboutStory = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:gap-12 xl:gap-16">
        <Reveal className="md:sticky md:top-24 md:self-start">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              Our Story
            </span>
            Technology, without unnecessary complexity
          </h2>
          <p className="mt-6 max-w-prose text-sm text-muted-foreground">
            BKADS was founded on a simple idea: every business should be able
            to use modern technology without the extra complexity. We combine
            software development, AI, and automation to help companies work
            smarter, save time, and grow — backed by honest advice and
            long-term support.
          </p>
        </Reveal>

        <StaggerReveal className="space-y-6">
          {PILLARS.map((pillar) => (
            <RevealItem
              key={pillar.id}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:bg-card/80 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:border-foreground/30">
                <pillar.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {pillar.description}
              </p>
            </RevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default AboutStory;
