import React from 'react';
import { MapPin, Clock, Phone, ArrowRight, ArrowLeft, Instagram, Globe } from 'lucide-react';
import { LocationData, View } from '../../types.ts';

interface LocationViewProps {
  location: LocationData;
  onNavigate: (view: View) => void;
}

export const LocationView: React.FC<LocationViewProps> = ({ location, onNavigate }) => {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero Header with image */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-brand-black overflow-hidden">
        <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-full object-cover opacity-50 contrast-125 scale-105"
        />
        {/* Updated gradient to blend with black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/40"></div>
        
        <div className="absolute top-32 left-0 w-full px-6">
          <div className="container mx-auto">
            <button 
              onClick={() => onNavigate('locations')}
              className="flex items-center gap-2 font-black uppercase tracking-widest text-white/50 hover:text-brand-green transition-colors mb-4 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> TILLBAKA TILL LISTAN
            </button>
            <h1 className="text-7xl md:text-[12rem] font-display text-white uppercase leading-[1.1] tracking-wider drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              BRAMS<br/>{location.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 -mt-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Main Info Card - Updated to Dark Theme */}
          <div className="w-full lg:w-3/5 bg-[#151515] p-10 md:p-16 rounded-[60px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-4 border-brand-green/30 relative overflow-hidden transition-all hover:border-brand-green/60">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-full pointer-events-none"></div>
             
             <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-12">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-green/20">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-xs tracking-[0.3em] text-gray-500 uppercase mb-1">HÄR FINNS VI</h4>
                      <p className="text-2xl font-display text-white leading-tight tracking-wider">{location.address}<br/>{location.postalCode} {location.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Updated icon background for visibility */}
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg border border-white/5">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-xs tracking-[0.3em] text-gray-500 uppercase mb-1">ÖPPETTIDER</h4>
                      <div className="text-xl font-black uppercase tracking-tight text-white space-y-1">
                        <div className="flex justify-between gap-8"><span>VARDAGAR</span> <span className="text-brand-green tracking-wider">{location.hours.weekdays}</span></div>
                        <div className="flex justify-between gap-8"><span>HELGER</span> <span className="text-brand-green tracking-wider">{location.hours.weekends}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                   <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green shrink-0 border border-brand-green/30">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-xs tracking-[0.3em] text-gray-500 uppercase mb-1">KONTAKT</h4>
                      <p className="text-2xl font-display text-white tracking-wider">{location.phone}</p>
                      <p className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-widest">Snabbt svar under öppettider</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-black text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">SOCIALA MEDIER</h4>
                    <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all"><Instagram size={20} /></a>
                      <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all"><Globe size={20} /></a>
                    </div>
                  </div>
                </div>
             </div>

             <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-lg font-bold uppercase tracking-tight text-gray-400 max-w-sm text-center md:text-left">
                  Är du hungrig nu? Beställ direkt för upphämtning eller leverans från denna enhet.
                </p>
                <a 
                  href="https://bramsburgers.qopla.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-4 hover:bg-white hover:text-brand-black transition-all shadow-2xl group w-full md:w-auto justify-center tracking-widest"
                >
                  BESTÄLL ONLINE <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
          </div>

          {/* Map Section - Styled to fit dark theme */}
          <div className="w-full lg:w-2/5 aspect-square lg:aspect-auto lg:self-stretch bg-[#111] rounded-[60px] overflow-hidden relative border-4 border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-[#0a0a0a]">
               {/* Mock Map Visual for dark theme */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center animate-pulse">
                     <div className="w-12 h-12 bg-brand-green rounded-full border-4 border-[#0a0a0a] shadow-2xl flex items-center justify-center text-white">
                        <MapPin size={20} />
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/10 px-6 py-3 rounded-xl font-black uppercase text-sm shadow-xl hover:bg-brand-green transition-all tracking-widest">
                    Öppna i Google Maps
                  </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};