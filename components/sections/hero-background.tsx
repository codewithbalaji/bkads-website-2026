"use client";

import dynamic from "next/dynamic";

const GLSLHills = dynamic(
  () => import("@/components/ui/glsl-hills").then((mod) => mod.GLSLHills),
  { ssr: false },
);

export default function HeroBackground() {
  return <GLSLHills />;
}
