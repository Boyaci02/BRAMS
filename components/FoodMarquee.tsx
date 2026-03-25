import React from 'react';

export const FoodMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-brand-cream py-8 z-20 border-t-8 border-brand-black">
      <div className="whitespace-nowrap flex animate-marquee">
        {/* Upprepat innehåll för ett sömlöst flöde */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-brand-black font-display text-4xl md:text-5xl uppercase italic leading-[1.1]">
              OM EN SKA ÄTA, ALLA SKA ÄTA
            </span>
            {/* Separator - en liten cirkel */}
            <div className="ml-16 w-4 h-4 bg-brand-green rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};