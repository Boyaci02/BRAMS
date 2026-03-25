
import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: '1',
    color: 'bg-brand-black',
    textColor: 'text-brand-cream',
    text: "DET HÄR ÄR INTE BARA EN BURGARE, DET ÄR EN UPPLEVELSE. BRAMS BURGARE LEVERERAR ALLTID SMAK OCH STÄMNINGEN ÄR HELT GENUIN.",
    author: "ERIK JOHANSSON",
    stars: 5,
    className: "card-1"
  },
  {
    id: '2',
    color: 'bg-brand-green',
    textColor: 'text-brand-cream',
    text: "ATT BESTÄLLA FRÅN BRAMS ÄR ALLTID ENKELT OCH LEVERANSEN ÄR SNABB! SMAKEN ÄR OSALGBAR OCH DERAS VIBE ÄR VERKLIGEN UNIK.",
    author: "SARA LINDSTRÖM",
    stars: 5,
    className: "card-2"
  },
  {
    id: '3',
    color: 'bg-brand-black',
    textColor: 'text-brand-cream',
    text: "JAG ÄLSKAR HUR BRAMS HÅLLER DET ENKELT MEN SÅ SMAKRIKT. POMMESEN ÄR KRISPIGA OCH BURGARNA ÄR PERFEKTION! MIN FAVORIT.",
    author: "MARCUS BERG",
    stars: 5,
    className: "card-3"
  },
  {
    id: '4',
    color: 'bg-brand-green',
    textColor: 'text-brand-cream',
    text: "BRAMS BURGER ÄR DEN ENDA RESTAURANGEN JAG GÅR TILL NÄR JAG VILL HA EN RIKTIG BURGARE. SMAKEN ÄR ALLTID PÅ TOPP!",
    author: "ANNA KARLSSON",
    stars: 5,
    className: "card-4"
  },
  {
    id: '5',
    color: 'bg-brand-black',
    textColor: 'text-brand-cream',
    text: "BÄSTA BURGARNA I STAN! MAN KÄNNER ATT DET ÄR LAGAT MED KÄRLEK OCH RIKTIGT BRA RÅVAROR. ALLA BORDE PROVA!",
    author: "DAVID NILSSON",
    stars: 5,
    className: "card-5"
  }
];

export const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 bg-brand-cream relative overflow-hidden flex flex-col items-center justify-center border-t-8 border-brand-black"
    >
      <div className="container mx-auto px-6 text-center z-10">
        <h2 className="text-6xl md:text-8xl font-display text-brand-black uppercase leading-[1.1] mb-32">
          NÅGRA FINA ORD<br/>FRÅN VÅRA BRAMS
        </h2>

        <div className={`relative min-h-[600px] md:min-h-[700px] w-full flex items-center justify-center card-deck-container ${isVisible ? 'is-visible' : ''}`}>
          {reviews.map((review) => (
            <div 
              key={review.id}
              className={`review-card absolute w-[260px] sm:w-[300px] md:w-[360px] aspect-square ${review.color} p-6 md:p-10 rounded-[40px] flex flex-col justify-between text-left ${review.className} border-4 border-black shadow-2xl transition-all duration-300 group`}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className={`${review.textColor} font-black text-base md:text-2xl leading-tight uppercase tracking-tight`}>
                  {review.text}
                </p>
              </div>
              <div className="mt-6 border-t border-brand-cream/20 pt-4">
                <span className={`text-[10px] md:text-sm ${review.textColor} font-black uppercase tracking-widest opacity-80 italic`}>
                  — {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
