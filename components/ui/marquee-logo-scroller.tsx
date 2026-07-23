import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Assuming a `cn` utility for classnames

// Define the type for individual logo props
interface Logo {
  src: string;
  alt: string;
}

// Define the props for the main component
interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

const TILE_WIDTH = 160; // w-40
const TILE_GAP = 16; // gap-4
// However many logos are passed in, repeat them enough times that one "half" of the
// track always outspans the viewport — otherwise the loop runs out of tiles and shows
// a gap right where it should seamlessly wrap.
const MIN_HALF_WIDTH_PX = 3200;
const SPEED_PX_PER_SECOND = { normal: 35, slow: 17.5, fast: 140 };

/**
 * A responsive, self-contained, and infinitely scrolling marquee component.
 * It pauses on hover and uses shadcn/ui theme variables for styling.
 * This component includes its own CSS animation and does not require tailwind.config.js modifications.
 */
const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, logos, speed = 'normal', className, ...props }, ref) => {
    const repeatCount = Math.max(
      1,
      Math.ceil(MIN_HALF_WIDTH_PX / (logos.length * (TILE_WIDTH + TILE_GAP)))
    );
    const half = Array.from({ length: repeatCount }, () => logos).flat();
    const halfWidthPx = half.length * (TILE_WIDTH + TILE_GAP);
    const animationDuration = `${(halfWidthPx / SPEED_PX_PER_SECOND[speed]).toFixed(1)}s`;

    return (
      <>
        {/* The @keyframes for the marquee animation are defined directly here for robustness. */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        
        <section
          ref={ref}
          aria-label={title}
          className={cn(
            'w-full bg-background text-foreground rounded-lg overflow-hidden',
            className
          )}
          {...props}
        >
          {/* Header Section */}
          <div className="p-6 md:p-8 lg:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-balance">
              {title}
            </h2>
          </div>

          {/* Marquee Section */}
          <div
            className="w-full overflow-hidden pb-6 md:pb-8 lg:pb-10"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div
              className="flex w-max items-center gap-4 py-4 pr-4 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out"
              style={{
                animation: `marquee ${animationDuration} linear infinite`,
              }}
            >
              {/* Render two identical halves (each padded out to MIN_HALF_WIDTH_PX) for a seamless loop */}
              {[...half, ...half].map((logo, index) => (
                <div
                  key={index}
                  className="relative h-24 w-40 shrink-0 flex items-center justify-center rounded-lg bg-foreground overflow-hidden transition-transform duration-300 ease-out hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain p-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
