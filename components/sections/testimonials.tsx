import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { Reveal } from "@/components/ui/reveal";

const Testimonials = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <Reveal className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
            What Clients Say
          </span>
          Trusted by businesses we work with
        </h2>
      </Reveal>
      <StaggerTestimonials />
    </section>
  );
};

export default Testimonials;


