import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const CtaBanner = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <Reveal className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-lg backdrop-blur-xl md:p-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              Let&apos;s Build Something Together
            </span>
            Ready to modernize your business?
          </h2>
          <p className="mx-auto mt-6 max-w-prose text-sm text-muted-foreground">
            Whether it&apos;s AI automation, custom software, or a smarter web
            presence, we&apos;ll help you find the right move and build it with
            you. Let&apos;s talk about where you want to go.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              variant="default"
              size="lg"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Book Your Free Strategy Call
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CtaBanner;
