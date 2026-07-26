import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/data/faq.json";
import { Reveal } from "@/components/ui/reveal";

const Faq = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block text-2xl font-thin tracking-normal italic sm:text-3xl md:text-4xl">
              FAQ
            </span>
            Questions, answered
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion defaultValue={[0]} className="mt-12">
          {faqs.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionPanel>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default Faq;
