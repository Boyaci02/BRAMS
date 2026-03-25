import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { LocationData } from '../../types.ts';

interface LocationsListViewProps {
  locations: LocationData[];
  onSelect: (id: string) => void;
}

export const LocationsListView: React.FC<LocationsListViewProps> = ({ locations, onSelect }) => {
  return (
    <div className="pt-32 pb-20 bg-brand-black min-h-screen text-white">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-8xl md:text-[12rem] font-display text-brand-green uppercase leading-none mb-4 tracking-wider">
            HITTA OSS
          </h1>
          <p className="text-2xl md:text-4xl font-black uppercase tracking-widest max-w-2xl">
            VÄLJ DIN NÄRMASTE <span className="text-brand-green">BRAMS</span> OCH KÖR IGÅNG.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div 
              key={loc.id}
              onClick={() => onSelect(loc.id)}
              className="group relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden border-4 border-white/5 cursor-pointer transition-all duration-500 hover:border-brand-green hover:translate-y-[-5px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-5xl md:text-7xl font-display uppercase leading-none mb-4 tracking-wider group-hover:text-brand-green transition-colors">
                      {loc.name}
                    </h2>
                    <div className="space-y-2 opacity-80">
                      <div className="flex items-center gap-2 font-black uppercase text-sm tracking-widest">
                        <MapPin size={16} className="text-brand-green" />
                        {loc.address}, {loc.city}
                      </div>
                      <div className="flex items-center gap-2 font-black uppercase text-sm tracking-widest">
                        <Clock size={16} className="text-brand-green" />
                        {loc.hours.weekdays}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white transform group-hover:rotate-45 transition-transform duration-500 shadow-xl">
                    <ArrowRight size={32} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};