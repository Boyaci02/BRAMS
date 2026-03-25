import React from 'react';
import { Burger, View } from '../types.ts';

interface MenuProps {
  onNavigate: (view: View) => void;
}

const allBurgers: Burger[] = [
  // Beef - Only showing first 6
  { id: 'b1', name: "Bram's Sweet Fire", price: '130:-', description: 'Chilimajonnäs, kött, cheddar, karamelliserad lök, kanderade jalapeños och chili cheese.', category: 'beef', image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6953c9cb035c3af22dda40de.png' },
  { id: 'b2', name: "Bram's Delusion", price: '130:-', description: 'Chipotlemajonnäs, kött, cheddar, karamelliserad lök, nötköttsbacon (halal), picklade jalapeños och BBQ-sås.', category: 'beef', image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/69592d3e748303c812ca1ee5.png' },
  { id: 'b3', name: "Bram's Fire", price: '130:-', description: 'Chilimajonnäs, kött, cheddar, sallad, rödlök, jalapeños och chili cheese.', category: 'beef', image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/69592ff974830392e2caecfa.png' },
  { id: 'b4', name: "Bram's Americano", price: '130:-', description: 'Chilimajonnäs, kött, cheddar, sallad, lökringar, jalapeños, chili cheese och BBQ-sås.', category: 'beef', image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6959316e05b5117aeac22f1d.png' },
  { id: 'b5', name: "Bram's Tartufo", price: '130:-', description: 'Tryffelmajonnäs, kött, cheddar, karamelliserad lök, nötköttsbacon (halal) och rostad lök.', category: 'beef', image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695931eb3ccdd610ef9536f7.png' },
  { id: 'b6', name: "Bram's Parmigiano", price: '130:-', description: 'Tryffelmajonnäs, kött, cheddar, stekt svamp- och lökmix samt parmesan.', category: 'beef', image: 'https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6959348c3ccdd6d1169636bf.png' }
];

export const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
  return (
    <section id="menu" className="py-32 bg-brand-cream relative px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-8 text-center md:text-left">
          <div>
             <p className="text-brand-green uppercase tracking-[0.3em] text-xs font-black mb-4">MENY / ALLA SKA ÄTA</p>
             <h2 className="text-6xl md:text-8xl font-display text-brand-black uppercase leading-[1.1]">Utvalda <br/>Burgare</h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="bg-brand-green/10 text-brand-green px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest border border-brand-green/20">
              🍟 Pommes & 🥤 Dryck ingår i alla menyer
            </span>
            <a 
              href="https://bramsburgers.qopla.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-black text-white px-10 py-4 rounded-2xl font-black uppercase hover:bg-brand-green transition-all sketch-border-green transform hover:-rotate-2 inline-block text-center"
            >
              Beställ Online
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-48 mb-24">
          {allBurgers.map((burger) => (
            <div key={burger.id} className="relative group">
              {/* White Card Container */}
              <div className="bg-white rounded-[40px] p-8 pt-44 h-full relative sketch-border group-hover:translate-y-[-10px] transition-all duration-300 flex flex-col">
                
                {/* Burger Image Container - Absolute positioned above card */}
                <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-72 h-72 z-20 pointer-events-none">
                  <div className="absolute inset-0 bg-brand-green/5 rounded-full animate-pulse blur-2xl"></div>
                  <img 
                    src={burger.image} 
                    alt={burger.name}
                    className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  />
                  {/* Floating Menu Badge */}
                  <div className="absolute bottom-4 -right-2 bg-brand-green text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl border-2 border-white rotate-6 whitespace-nowrap">
                    Komplett Meny
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-display uppercase leading-[1.1] mb-4 text-brand-black">
                      {burger.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[10px] font-black bg-brand-black text-white px-2 py-0.5 rounded uppercase tracking-tighter">
                        {burger.category === 'beef' ? 'Halal kött' : 'Crispy Chicken'}
                      </span>
                      <span className="text-[10px] font-black bg-brand-green/10 text-brand-green px-2 py-0.5 rounded uppercase tracking-tighter border border-brand-green/20">
                        Inkl. Pommes & Dryck
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-gray-400 uppercase leading-relaxed line-clamp-3 group-hover:text-gray-600 transition-colors">
                      {burger.description}
                    </p>
                  </div>
                  
                  {/* Footer of Card */}
                  <div className="flex justify-between items-end mt-auto pt-6 border-t border-black/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black opacity-40 uppercase text-brand-black leading-none mb-1 tracking-widest">Menypris</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl text-brand-black leading-none">{burger.price.replace(':-', '')}</span>
                        <span className="font-bold text-sm text-brand-black">:-</span>
                      </div>
                    </div>
                    <a 
                      href="https://bramsburgers.qopla.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-black text-white px-8 py-3 rounded-xl font-black uppercase text-sm hover:bg-brand-green transition-all shadow-md active:scale-95"
                    >
                      Beställ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA for full menu */}
        <div className="flex justify-center mt-32">
          <button 
            onClick={() => onNavigate('menu')}
            className="group relative inline-flex flex-col items-center gap-4 transition-all"
          >
            <div className="bg-brand-black text-white px-16 py-6 rounded-3xl font-display text-3xl md:text-4xl uppercase tracking-wider hover:bg-brand-green transition-all sketch-border transform group-hover:-translate-y-2 group-active:translate-y-0 group-hover:rotate-1">
              Kolla hela menyn
            </div>
            <p className="text-brand-green font-black uppercase text-[10px] tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
              Burgare • Pizza • Shakes • Sides
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};