import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import { UnderConstruction } from "@/components/ui/under-construction";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <UnderConstruction title="Contact" />
      <Footer />
    </>
  );
}
