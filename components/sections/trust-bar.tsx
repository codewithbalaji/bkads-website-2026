import { MarqueeLogoScroller } from '@/components/ui/marquee-logo-scroller';
import { Reveal } from '@/components/ui/reveal';
import clients from '@/data/clients.json';

const TrustBar = () => {
  return (
    <Reveal className="bg-background min-h-[400px] w-full flex items-center justify-center p-4">
      <MarqueeLogoScroller
        title="Trusted by Businesses"
        logos={clients}
        speed="normal"
      />
    </Reveal>
  );
};

export default TrustBar;
