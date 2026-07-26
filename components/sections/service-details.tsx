import Image from "next/image";
import { Check } from "lucide-react";
import services from "@/data/services.json";
import { Reveal } from "@/components/ui/reveal";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  points?: string[];
};

const ServiceDetails = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl space-y-24 px-6 md:space-y-32">
        {(services as Service[]).map((service, index) => {
          const imageRight = index % 2 === 1;
          return (
            <Reveal key={service.id}>
              <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 xl:gap-16">
                <div
                  className={
                    imageRight ? "md:order-2" : "md:order-1"
                  }
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={imageRight ? "md:order-1" : "md:order-2"}>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-prose text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  {service.points && (
                    <ul className="mt-8 space-y-4">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground">
                            <Check className="size-4" />
                          </span>
                          <span className="text-sm text-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceDetails;
