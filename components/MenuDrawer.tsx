import React from 'react';
import { X, Instagram, Music2 } from 'lucide-react';
import { View } from '../types.ts';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: View) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
  const mainLinks: { label: string; view: View | string; isExternal?: boolean }[] = [
    { label: 'HEM', view: 'home' },
    { label: 'MENY', view: 'menu' },
    { label: 'OM OSS', view: 'about' },
    { label: 'KONTAKT', view: 'contact' },
    { label: 'LEDIGA JOBB', view: 'https://brams-demo.teamtailor.com/', isExternal: true },
  ];

  const locations: { label: string; view: View }[] = [
    { label: 'SKÄRHOLMEN', view: 'location-skarholmen' },
    { label: 'KISTA', view: 'location-kista' },
    { label: 'HUDDINGE', view: 'location-huddinge' },
    { label: 'UPPSALA', view: 'location-uppsala' },
  ];

  const handleNav = (view: View | string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(view as string, '_blank');
    } else {
      onNavigate(view as View);
    }
    onClose();
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <div className={`fixed inset-y-0 right-0 z-[70] bg-white text-black transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.07,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full md:w-[30vw] flex flex-col shadow-2xl overflow-y-auto`}>
        <div className="p-8 flex justify-between items-center sticky top-0 bg-white z-20 border-b border-black/5">
          <span className="font-display text-4xl uppercase tracking-tighter">BRAMS</span>
          <button onClick={onClose} className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-8 py-10 relative z-10">
          <ul className="space-y-6 mb-16">
            {mainLinks.map((item, idx) => (
              <li key={item.label} style={{ transitionDelay: `${idx * 50}ms` }} className={`transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <button 
                  onClick={() => handleNav(item.view, item.isExternal)} 
                  className="group flex items-center gap-4 font-display text-4xl md:text-5xl uppercase tracking-tighter hover:text-brand-green transition-colors leading-none text-left"
                >
                  {item.label}
                  {item.isExternal && <span className="text-sm">↗</span>}
                </button>
              </li>
            ))}
            <li style={{ transitionDelay: '300ms' }} className={`transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <a 
                href="https://bramsburgers.qopla.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-4 font-display text-4xl md:text-5xl uppercase tracking-tighter hover:text-brand-green transition-colors leading-none"
              >
                SHOP ↗
              </a>
            </li>
          </ul>

          <div className={`pt-8 border-t border-black/10 transform transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6 opacity-40">VÅRA ENHETER</h4>
            <ul className="grid grid-cols-1 gap-4">
              {locations.map((loc) => (
                <li key={loc.view}>
                  <button onClick={() => handleNav(loc.view)} className="flex items-center gap-3 font-display text-2xl uppercase tracking-tighter hover:text-brand-green transition-colors group">
                    {loc.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="p-8 border-t border-black/5 relative z-10 bg-white mt-auto">
          <div className="flex gap-4 mb-6">
            <a href="https://instagram.com/bramsburgers" target="_blank" className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-brand-green transition-colors shadow-lg"><Instagram size={24} /></a>
            <a href="https://tiktok.com/@bramsburgers" target="_blank" className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-brand-green transition-colors shadow-lg"><Music2 size={24} /></a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">© 2024 BRAMS BURGER — ALLA SKA ÄTA</p>
        </div>
      </div>
    </>
  );
};