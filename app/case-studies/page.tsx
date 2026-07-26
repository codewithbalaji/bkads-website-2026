import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import { UnderConstruction } from "@/components/ui/under-construction";

export const metadata: Metadata = {
  title: "Case Studies | BKADS",
};

export default function CaseStudiesPage() {
  return (
    <>
      <UnderConstruction title="Case Studies" />
      <Footer />
    </>
  );
}
