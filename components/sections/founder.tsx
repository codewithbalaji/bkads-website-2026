import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const Founder = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-card md:mx-0">
            <Image
              src="/bkads_founder_balaji_d.jpeg"
              alt="Balaji D, founder of BKADS"
              fill
              sizes="(min-width: 768px) 320px, 80vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              Meet the Founder
            </span>
            An ordinary IT guy, an unreasonable amount of ambition
          </h2>

          <div className="mt-6 max-w-prose space-y-4 text-sm text-muted-foreground">
            <p>
              Balaji D. spent years on the inside of business IT — the
              unglamorous side that never makes it onto a homepage:
              spreadsheets doing the work of real software, processes held
              together by habit rather than design, and capable teams quietly
              slowed down by tools that never caught up with how they actually
              work.
            </p>
            <p>
              He kept seeing the same story everywhere he looked, so in 2025
              he started BKADS in Chennai to do something about it: a
              technology partner built on the belief that AI and automation
              shouldn&apos;t be reserved for enterprises with big IT budgets —
              that a manufacturer in Ambattur or a growing local business
              deserves the same modern tooling as a Silicon Valley startup,
              minus the jargon and the six-month sales cycle.
            </p>
            <p>
              He&apos;s not chasing buzzwords. He&apos;s a working IT
              professional with an unusually stubborn goal: help as many
              businesses as possible trade manual, repetitive work for systems
              that just work quietly in the background — so people can get
              back to running their business instead of fighting their
              software.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-border pl-6 text-base text-foreground italic">
            &quot;We help businesses improve efficiency and accelerate growth
            through AI automation, websites and apps, custom software, and
            digital marketing. My goal is for BKADS to become a trusted
            technology partner that helps organizations succeed in a rapidly
            changing digital world.&quot;
          </blockquote>

          <p className="mt-4 text-sm font-medium text-foreground">
            Balaji D.{" "}
            <span className="font-normal text-muted-foreground">
              — Founder, BKADS · Chennai, India
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Founder;
