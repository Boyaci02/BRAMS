import React, { useState, useEffect } from 'react';
import { MenuDrawer } from './MenuDrawer.tsx';
import { View } from '../types.ts';

interface NavbarProps {
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="text-brand-cream font-display text-4xl uppercase hover:text-brand-green transition-all">
            BRAMS
          </button>
          <div className="flex items-center gap-4">
             <button onClick={() => setIsMenuOpen(true)} className="bg-brand-cream text-brand-black px-8 py-2 rounded-xl font-black uppercase text-sm tracking-wider shadow-lg hover:bg-brand-green hover:text-white active:scale-95 transition-all">
              MENY
            </button>
          </div>
        </div>
      </nav>
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={onNavigate} />
    </>
  );
};