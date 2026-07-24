import { MarqueeLogoScroller } from '@/components/ui/marquee-logo-scroller';
import clients from '@/data/clients.json';

const TrustBar = () => {
  return (
    <div className="bg-background min-h-[400px] w-full flex items-center justify-center p-4">
      <MarqueeLogoScroller
        title="Trusted by Businesses"
        logos={clients}
        speed="normal"
      />
    </div>
  );
};

export default TrustBar;
