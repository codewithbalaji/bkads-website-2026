import { Animated3dCard } from "@/components/ui/animated-3d-card";
import services from "@/data/services.json";

export default function Services() {
  return <Animated3dCard cards={services} />;
}
