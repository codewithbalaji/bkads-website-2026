import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const Founder = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
        <Reveal>
          <div className="group relative mx-auto w-full max-w-xs md:mx-0">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent blur-2xl"
            />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/bkads_founder_balaji_d.jpeg"
                alt="Balaji D, founder of BKADS"
                fill
                sizes="(min-width: 768px) 320px, 80vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl">
                Founder · BKADS
              </div>
            </div>
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
              Balaji D. spent years working inside business IT, watching good
              teams get slowed down by outdated tools and manual work. In
              2025, he started BKADS in Chennai to fix that.
            </p>
            <p>
              BKADS is built on one idea: every business — from a local
              manufacturer in Ambattur to a growing company anywhere —
              deserves the same modern technology as a big enterprise, without
              the jargon or the long sales process.
            </p>
          </div>

          <blockquote className="mt-8 rounded-xl border-l-2 border-border bg-card/50 p-6 text-base text-foreground italic">
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
