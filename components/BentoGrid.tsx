import React from 'react';
import { View } from '../types.ts';

interface BentoGridProps {
  onNavigate: (view: View) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#0c0c0c] py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Top Large Card - Vår Story */}
          <div 
            onClick={() => onNavigate('about')}
            className="md:col-span-3 bg-[#0c0c0c] rounded-[40px] md:rounded-[50px] overflow-hidden relative min-h-[500px] flex items-center group border border-white/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            <div className="grid md:grid-cols-2 w-full h-full items-center p-8 md:p-20 relative z-10">
              <div className="text-white space-y-6 max-w-xl">
                <p className="font-black text-xs tracking-[0.4em] opacity-40 uppercase">Vår Story</p>
                <h2 className="text-6xl md:text-[8rem] font-display leading-[0.85] uppercase tracking-tight">
                  Smak som<br/>skriver historia!
                </h2>
                <p className="font-bold text-sm md:text-xl opacity-60 uppercase tracking-tight leading-relaxed">
                  Upptäck resan från en food truck i Kista till hela Sveriges favorit.
                </p>
                <div className="pt-4">
                  <button className="bg-white text-black px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-brand-green hover:text-white transition-all shadow-xl">
                    Läs om Brams
                  </button>
                </div>
              </div>
            </div>
            {/* Overflowing Burger Image */}
            <img 
              src="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695931eb3ccdd610ef9536f7.png" 
              alt="Brams Story Burger"
              className="absolute right-[-5%] md:right-0 bottom-[-5%] w-[80%] md:w-[45%] h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Bottom Left - Platser */}
          <div 
            onClick={() => onNavigate('locations')}
            className="md:col-span-1 bg-brand-black rounded-[40px] md:rounded-[50px] relative overflow-hidden flex flex-col justify-end min-h-[450px] group border-[4px] border-white cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          >
            <img 
              src="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695803a7397a314773a7e65d.jpg" 
              alt="Locations Preview"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 brightness-50 group-hover:brightness-75"
            />
            <div className="relative z-10 p-10">
              <p className="font-black text-xs tracking-[0.4em] text-white/40 uppercase mb-2">Hitta Oss</p>
              <h3 className="text-5xl md:text-6xl font-display text-white uppercase leading-none">
                Våra<br/>Restauranger
              </h3>
            </div>
          </div>

          {/* Bottom Right - Meny */}
          <div 
            onClick={() => onNavigate('menu')}
            className="md:col-span-2 bg-[#0c0c0c] rounded-[40px] md:rounded-[50px] p-8 md:p-20 relative overflow-hidden group border border-white/5 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="grid md:grid-cols-2 gap-8 h-full items-center relative z-10">
              <div className="max-w-md">
                <p className="font-black text-xs tracking-[0.4em] opacity-40 uppercase mb-4">Vad är du sugen på?</p>
                <h3 className="text-6xl md:text-8xl font-display text-white uppercase leading-[0.85] mb-10 group-hover:text-brand-green transition-colors">
                  Upptäck<br/>stans bästa<br/>burgare!
                </h3>
                <button className="bg-white text-black px-12 py-4 rounded-full font-black uppercase text-sm group-hover:bg-brand-green group-hover:text-white transition-all">
                  Se hela menyn
                </button>
              </div>
            </div>
            <img 
              src="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/69592ff974830392e2caecfa.png" 
              alt="Menu Burger"
              className="absolute right-[-10%] bottom-[-10%] w-[75%] md:w-[55%] h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_40px_70px_rgba(0,0,0,1)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};