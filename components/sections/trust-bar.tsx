import { MarqueeLogoScroller } from '@/components/ui/marquee-logo-scroller';

const TrustBar = () => {
  const clients = [
    { src: '/clients/client1.png', alt: 'Sri Balaji Printers' },
    { src: '/clients/client_3.png', alt: 'Tespa Pvt Ltd' },
    { src: '/clients/client_2.png', alt: 'MGM Collections' },
    { src: '/clients/client_4.png', alt: 'Sri Sai Ram Cranes' },
    { src: '/clients/client_6.png', alt: 'Harimidhu Organic' },
    { src: '/clients/client_5.jpg', alt: 'GM Marriage Caterers' },
  ];

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
