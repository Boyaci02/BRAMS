
import React from 'react';
import { View } from '../types.ts';

interface LifestyleProps {
  onNavigate?: (view: View) => void;
}

export const Lifestyle: React.FC<LifestyleProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-start pt-20 md:pt-32 pb-20 px-6 md:px-12 bg-brand-black">
      {/* Background Image with heavy dark overlay to match the screenshot mood */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6953f4ddec06c50b08a63b9d.jpg" 
          alt="Close up of a delicious burger" 
          className="w-full h-full object-cover object-center brightness-[0.4] contrast-125 transition-transform duration-1000 hover:scale-105"
        />
        {/* Subtle vignette/gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl flex flex-col items-start text-left">
          {/* Headline - Top Left, adjusted leading to 1.1 */}
          <h2 className="text-7xl md:text-[10rem] font-display text-white uppercase leading-[1.1] mb-6 drop-shadow-2xl">
            Smaka <br/> Hypen
          </h2>
          
          {/* Paragraph - Under Headline */}
          <p className="text-white font-black uppercase tracking-tight text-lg md:text-2xl mb-10 max-w-lg opacity-90 drop-shadow-md">
            Besök din närmaste BRAMS BURGER restaurang idag för en oslagbar smakupplevelse.
          </p>
          
          {/* Button - Under Paragraph */}
          <button 
            onClick={() => onNavigate?.('locations')}
            className="bg-brand-green text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg md:text-xl hover:bg-[#3a5e4f] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-95 flex items-center gap-3"
          >
            Hitta restaurang
          </button>
        </div>
      </div>

      {/* Aesthetic Accents - Subtly green glow in the corner */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};
