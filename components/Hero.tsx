import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-brand-black">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/6957de72f68c12061a5c47ed.mp4" type="video/mp4" />
        </video>
        {/* Subtle green glow behind text */}
        <div className="absolute w-[60vw] h-[60vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 relative z-30 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-display text-white uppercase mb-12 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[1.1] tracking-wide">
          Om en ska äta, <br/> <span className="text-brand-green">alla</span> ska äta
        </h1>

        <div className="relative z-50">
          <a 
            href="https://bramsburgers.qopla.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-[#c68c17] text-white px-14 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:bg-[#a67513] hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20"
          >
            Beställ
          </a>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent z-10"></div>
    </section>
  );
};