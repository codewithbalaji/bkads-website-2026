import Link from "next/link";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <GLSLHills />
      <div className="pointer-events-none absolute z-10 flex flex-col items-center space-y-8 text-center">
        <h1 className="text-7xl font-semibold whitespace-pre-wrap">
          <span className="text-6xl font-thin italic">
            Your Technology Partner <br />{" "}
          </span>
          For Modern Businesses
        </h1>
        <div className="pointer-events-auto flex items-center justify-center gap-4">
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
