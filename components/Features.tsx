
import React from 'react';
import { Star } from 'lucide-react';

interface FeatureCardProps {
  title?: string;
  image?: string;
  isText?: boolean;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, image, isText = false, delay = 0 }) => (
  <div 
    className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-brand-black bg-white transition-all duration-500 hover:rotate-1 shadow-[8px_8px_0px_var(--brand-green)]"
    style={{ animationDelay: `${delay}ms` }}
  >
    {isText ? (
      <div className="w-full h-full p-10 flex flex-col items-center justify-center text-center bg-brand-black text-brand-cream">
         <Star className="text-brand-green mb-6" size={60} fill="currentColor" />
         <h3 className="text-4xl md:text-5xl font-display uppercase leading-[1.1]">
           {title}
         </h3>
      </div>
    ) : (
      <img src={image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Brams Feature" />
    )}
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <FeatureCard image="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695803a7397a314773a7e65d.jpg" />
           <FeatureCard isText title="ÄKTA VAROR. ÄKTA KÄRLEK." />
           <FeatureCard image="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695803a7d350af9febae437a.jpg" />
           <FeatureCard isText title="INGA GENVÄGAR. BARA SMAK." />
        </div>
      </div>
    </section>
  );
};
