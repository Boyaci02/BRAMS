import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-brand-yellow py-3 border-y-4 border-white rotate-1 scale-105 z-20 shadow-xl">
      <div className="whitespace-nowrap flex animate-marquee">
        {/* Repeated content for seamless loop */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-black font-black text-xl uppercase italic tracking-tighter">
              Ta en tugga
            </span>
            <div className="ml-8 grid grid-cols-2 gap-0.5">
               <div className="w-2 h-2 bg-white"></div>
               <div className="w-2 h-2 bg-black"></div>
               <div className="w-2 h-2 bg-black"></div>
               <div className="w-2 h-2 bg-white"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};