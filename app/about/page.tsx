import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import { UnderConstruction } from "@/components/ui/under-construction";

export const metadata: Metadata = {
  title: "About | BKADS",
};

export default function AboutPage() {
  return (
    <>
      <UnderConstruction title="About" />
      <Footer />
    </>
  );
}
