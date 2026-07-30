import { Bot, HeartHandshake, Layers, Target, type LucideIcon } from "lucide-react";
import { Reveal, StaggerReveal, RevealItem } from "@/components/ui/reveal";

const REASONS: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    id: "business-first",
    icon: Target,
    title: "Business-First Thinking",
    description:
      "We start from your business problem, not the technology, so every solution ties back to measurable results.",
  },
  {
    id: "ai-expertise",
    icon: Bot,
    title: "AI & Automation Expertise",
    description:
      "Hands-on experience with AI chatbots, RAG systems, and workflow automation that cut manual effort and speed up operations.",
  },
  {
    id: "end-to-end",
    icon: Layers,
    title: "End-to-End Delivery",
    description:
      "Design, development, launch, and ongoing support under one roof — no juggling multiple vendors.",
  },
  {
    id: "long-term-partner",
    icon: HeartHandshake,
    title: "A Long-Term Partner",
    description:
      "Honesty, transparency, and long-term support; we treat your business challenge as our own.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:gap-12 xl:gap-16">
        <Reveal className="md:sticky md:top-24 md:self-start">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              Why Choose Us
            </span>
            The partner behind your technology
          </h2>
          <p className="mt-6 max-w-prose text-sm text-muted-foreground">
            We combine modern software development, AI expertise, and
            business-focused problem solving to deliver practical solutions with
            measurable results — treating every client&apos;s challenge as our
            own.
          </p>
        </Reveal>

        <StaggerReveal className="space-y-8">
          {REASONS.map((reason) => (
            <RevealItem
              key={reason.id}
              className="group -m-3 flex gap-4 rounded-xl p-3 transition-colors duration-300 hover:bg-card/50"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:border-foreground/30">
                <reason.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
