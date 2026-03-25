import React from 'react';
import { Instagram, Youtube, Music2 } from 'lucide-react';
import { View } from '../types';

export const Footer: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-black relative pt-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          {/* Main Navigation */}
          <div className="space-y-6">
            <h4 className="text-white/30 font-black text-xs tracking-[0.3em] uppercase mb-4">NAVIGERING</h4>
            <ul className="space-y-4 text-white font-black text-xl md:text-2xl uppercase tracking-tighter">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-brand-green transition-colors w-full flex items-center justify-center md:justify-start gap-3 uppercase">
                   HEM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-brand-green transition-colors w-full flex items-center justify-center md:justify-start gap-3 uppercase">
                   MENY
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-brand-green transition-colors w-full flex items-center justify-center md:justify-start gap-3 uppercase">
                   OM OSS
                </button>
              </li>
              <li>
                <a href="https://brams-demo.teamtailor.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors w-full flex items-center justify-center md:justify-start gap-3 uppercase">
                   LEDIGA JOBB ↗
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-brand-green transition-colors w-full flex items-center justify-center md:justify-start gap-3 uppercase">
                   KONTAKT
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h4 className="text-white/30 font-black text-xs tracking-[0.3em] uppercase mb-4">VÅRA ENHETER</h4>
            <ul className="space-y-4 text-white font-black text-xl md:text-2xl uppercase tracking-tighter">
              <li><button onClick={() => onNavigate('location-skarholmen')} className="hover:text-brand-green transition-colors flex items-center justify-center md:justify-start w-full uppercase">SKÄRHOLMEN</button></li>
              <li><button onClick={() => onNavigate('location-kista')} className="hover:text-brand-green transition-colors flex items-center justify-center md:justify-start w-full uppercase">KISTA</button></li>
              <li><button onClick={() => onNavigate('location-huddinge')} className="hover:text-brand-green transition-colors flex items-center justify-center md:justify-start w-full uppercase">HUDDINGE</button></li>
              <li><button onClick={() => onNavigate('location-uppsala')} className="hover:text-brand-green transition-colors flex items-center justify-center md:justify-start w-full uppercase">UPPSALA</button></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h4 className="text-white/30 font-black text-xs tracking-[0.3em] uppercase mb-4">FÖLJ OSS</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/bramsburgers" target="_blank" className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com/@bramsburgers" target="_blank" className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                <Music2 size={24} />
              </a>
              <a href="https://youtube.com/@bramsburgers" target="_blank" className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                <Youtube size={24} fill="currentColor" />
              </a>
            </div>
            <div className="pt-6 border-t border-white/10 w-full">
               <p className="text-gray-400 font-bold text-xs uppercase tracking-widest leading-relaxed">
                 Har du frågor? <br/>
                 <span className="text-white">info@bramsburger.se</span>
               </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-end w-full pb-0">
        <h2 className="text-[28vw] font-display text-brand-cream leading-none tracking-[-0.05em] select-none pointer-events-none opacity-100 whitespace-nowrap">
          BRAMS
        </h2>
      </div>
      <div className="bg-brand-black py-6 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 font-black tracking-widest uppercase">
            © 2024 BRAMS BURGER — ALLA SKA ÄTA
          </p>
          <a 
            href="https://synsnu.se" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] text-gray-600 font-black tracking-widest uppercase hover:text-brand-green transition-colors"
          >
            Powered By Syns Nu
          </a>
        </div>
      </div>
    </footer>
  );
};