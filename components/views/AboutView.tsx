import React from 'react';

export const AboutView: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-black min-h-screen text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-3/5">
            <h1 className="text-8xl md:text-[10rem] font-display text-brand-green uppercase leading-none mb-12">
              VÅR STORY
            </h1>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display text-brand-cream uppercase leading-tight tracking-tight">
                MED EN PASSION FÖR MAT
              </h2>
              
              <div className="space-y-6 text-gray-300 font-bold text-lg leading-relaxed uppercase tracking-tight">
                <p>
                  Ahmed Kamil och Yousef Jarjes, två bröder med en passion för mat och en önskan att förbättra matkulturen i förorterna, bestämde sig för att tillsammans starta Bram’s Burgers.
                </p>
                <p>
                  Resan började i en liten food truck i förorten Kista, där Ahmed och Yousef började experimentera med olika smaker och ingredienser för att skapa sina egna signaturburgare. Trots att de hade vanliga jobb förstod de att de hade mycket mer att erbjuda samhället och ville förverkliga sin dröm om att erbjuda läckra och nyskapande hamburgare till människor runtomkring.
                </p>
                <p>
                  Ahmed och Yousefs passion och engagemang för matlagning genomsyrade varje steg av deras resa. De använde bara de färskaste och högkvalitativa ingredienserna för att skapa sina hamburgare och utforskade olika tillagningsmetoder för att hitta den perfekta kombinationen av smaker.
                </p>
                <p>
                  Med tiden började Bram’s Burgers få erkännande och popularitet bland invånarna i förorterna. Människor började strömma till deras food truck för att få en smak av deras läckra hamburgare. De unika smakerna och den höga kvaliteten på maten gjorde att Bram’s Burgers skiljde sig från andra hamburgerkedjor.
                </p>
                <p>
                  Men deras resa slutar inte här. Ahmed och Yousef söker ständigt nya sätt att innovera och pusha gränserna för burgarupplevelsen. De är fortfarande engagerade i sin ursprungliga vision att göra skillnad och lämna ett varaktigt avtryck på Sveriges kulinariska landskap.
                </p>
                <p>
                  Några månader efter att Bram’s Burgers hade etablerat sig som en framgångsrik food truck, drabbades världen av Corona‑pandemin. Restriktioner och nedstängningar påverkade restaurang‑ och matindustrin hårt. Men Ahmed och Yousef lät sig inte nedslås. Istället för att ge upp hittade de kreativa lösningar för att fortsätta erbjuda sina hamburgare till sina kunder. De startade en onlinebeställningsservice och erbjöd även catering för att möta kundernas behov.
                </p>
                <p>
                  Deras uthållighet och anpassningsförmåga gjorde att Bram’s Burgers överlevde och växte under denna svåra tid. Genom att leverera högkvalitativ mat fortsatte de att bygga sitt varumärke och bli en av Sveriges mest välkända hamburgerkedjor.
                </p>
                <p className="text-brand-green text-2xl md:text-3xl font-display">
                  Ahmed Kamil och Yousef Jarjes visade att med passion, engagemang och en vilja att göra skillnad kan man skapa något fantastiskt. Bram’s Burgers är ett exempel på hur två bröder med en gemensam vision kunde förändra matkulturen i förorterna och erbjuda en smakupplevelse utöver det vanliga.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full sticky top-32">
            <div className="relative rounded-[60px] overflow-hidden border-4 border-brand-green shadow-2xl transform md:rotate-2">
              <img 
                src="https://storage.googleapis.com/msgsndr/1FYpgqYgXr6SzFnCzKew/media/695803a7f0b9cf628f0b34dc.jpg" 
                alt="Ahmed & Yousef Brams Burgers" 
                className="w-full h-auto object-cover brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                 <p className="text-brand-green font-display text-4xl uppercase leading-none mb-2">Grundarna</p>
                 <p className="text-white font-black uppercase text-xs tracking-widest opacity-60">Ahmed Kamil & Yousef Jarjes</p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm">
              <p className="text-brand-cream font-display text-3xl uppercase mb-4 italic">"OM EN SKA ÄTA, ALLA SKA ÄTA"</p>
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest leading-relaxed">
                Vår filosofi har varit densamma sedan dag ett i food trucken. Gemenskap och kvalitet går hand i hand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};