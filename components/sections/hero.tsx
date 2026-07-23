import Link from "next/link";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <GLSLHills />
      <div className="pointer-events-none absolute z-10 flex flex-col items-center space-y-10 px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-3xl font-thin tracking-normal italic sm:text-4xl md:text-5xl lg:text-6xl">
            Your Technology Partner
          </span>
          For Modern Businesses
        </h1>
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            nativeButton={false}
            render={<Link href="#contact" />}
          >
            Book a Free Strategy Call
          </Button>
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="#services" />}
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}
