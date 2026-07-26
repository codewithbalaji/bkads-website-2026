import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import { UnderConstruction } from "@/components/ui/under-construction";

export const metadata: Metadata = {
  title: "Services | BKADS",
};

export default function ServicesPage() {
  return (
    <>
      <UnderConstruction title="Services" />
      <Footer />
    </>
  );
}
