import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import { UnderConstruction } from "@/components/ui/under-construction";

export const metadata: Metadata = {
  title: "Blog | BKADS",
};

export default function BlogPage() {
  return (
    <>
      <UnderConstruction title="Blog" />
      <Footer />
    </>
  );
}
