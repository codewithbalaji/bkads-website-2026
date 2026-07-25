import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, goals, and challenges. Through focused conversations, we identify which combination of AI automation, software, web, app, or SEO work will move the needle, and set clear success criteria for the engagement.",
  },
  {
    id: "process-2",
    title: "Planning & Architecture",
    description:
      "With the goals set, we scope the solution: technical approach, system architecture, integrations, and a realistic roadmap. This phase turns an open-ended idea into a concrete plan you can sign off on before any building begins.",
  },
  {
    id: "process-3",
    title: "Design & Development",
    description:
      "Our team builds the product, automation, or platform in focused iterations, with regular check-ins so you can see progress and give feedback early. Whether it's a website, an app, or an AI workflow, we build for performance and scale.",
  },
  {
    id: "process-4",
    title: "Testing & Quality Assurance",
    description:
      "Before anything reaches your users, we run it through functional, performance, and integration testing. Rigorous QA catches issues early, so what launches is stable, secure, and ready for real business use.",
  },
  {
    id: "process-5",
    title: "Launch & Ongoing Support",
    description:
      "Our commitment continues beyond launch with maintenance and support retainers to keep things running smoothly. As your business grows, we're there to extend, optimize, and evolve the solution alongside you.",
  },
]

const OurProcess = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:gap-12 xl:gap-16">
        <div className="md:sticky md:top-0 md:flex md:h-svh md:flex-col md:justify-center md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              Our Process
            </span>
            Planning your project development journey
          </h2>
          <p className="mt-6 max-w-prose text-sm text-muted-foreground">
            Our journey begins with a deep dive into your vision. We engage in
            meaningful conversations to grasp your business goals, challenges,
            and the outcomes you want to achieve. This phase sets the stage
            for everything that follows.
          </p>
        </div>

        <ContainerScroll
          className="space-y-8 py-12"
          style={{ minHeight: `${PROCESS_PHASES.length * 50}vh` }}
        >
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index}
              className="rounded-2xl border border-border bg-card p-8 shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="my-6 text-2xl font-semibold tracking-tight">
                  {phase.title}
                </h3>
                <span className="text-2xl font-semibold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-muted-foreground">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </section>
  )
}

export default OurProcess
