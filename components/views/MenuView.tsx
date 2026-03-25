import React from 'react';

const MENU_DATA = [
  { 
    category: 'BURGARE (BEEF MENY)', 
    note: 'Alla menyer inkluderar Regular Fries och 33cl Dryck.',
    items: [
      { name: "BRAM'S SWEET FIRE", price: '130', desc: 'Brioche-bröd, chilimajonnäs, kött, cheddar, karamelliserad lök, kanderade jalapeños och chili cheese.' },
      { name: "BRAM'S DELUSION", price: '130', desc: 'Brioche-bröd, kött, cheddar, chipotlemajonnäs, karamelliserad lök, nötköttsbacon (halal), picklade jalapeños och barbecuesås.' },
      { name: "BRAM'S FIRE", price: '130', desc: 'Brioche-bröd, kött, cheddar, chilimajonnäs, sallad, rödlök, jalapeños och chili cheese.' },
      { name: "BRAM'S AMERICANO", price: '130', desc: 'Brioche-bröd, kött, cheddar, chilimajonnäs, sallad, rödlök, lökringar, jalapeños, chili cheese och barbecuesås.' },
      { name: "BRAM'S TARTUFO", price: '130', desc: 'Brioche-bröd, kött, cheddar, tryffelmajonnäs, karamelliserad lök, nötköttsbacon (halal) och rostad lök.' },
      { name: "BRAM'S PARMIGIANO", price: '130', desc: 'Brioche-bröd, kött, cheddar, tryffelmajonnäs, stekt svamp- och lökmix samt parmesan.' }
    ]
  },
  { 
    category: 'FRIED CHICKEN MENY', 
    note: 'Alla menyer inkluderar Regular Fries och 33cl Dryck.',
    items: [
      { name: "BRAM'S K-TOWN", price: '150', desc: 'Brioche-bröd, chilimajonnäs, friterad kyckling, smält ostsås, sallad, rödlök, K-Town-sås och sesamströssel.' },
      { name: "BRAM'S DESTRUCTION", price: '150', desc: 'Brioche-bröd, friterad kyckling, smält ostsås, chipotlemajonnäs, inlagd rödlök, karamelliserad lök och inlagda jalapeños.' },
      { name: "BRAM'S YO MAMA", price: '150', desc: 'Brioche-bröd, friterad kyckling, chilimajonnäs, smält ostsås, wingssås och chili cheese.' },
      { name: "FRIED CHICKEN WINGS (4 ST)", price: '59', desc: 'Friterade heta wings inklusive wingssås.' }
    ]
  },
  { 
    category: 'VEGETARIAN / VEGAN MENY', 
    note: 'Alla menyer inkluderar Regular Fries och 33cl Dryck.',
    items: [
      { name: "BRAM'S HALLOUMI", price: '110', desc: 'Brioche-bröd, halloumi, cheddar, chilimajonnäs, sallad, rödlök, tomat och jalapeños.' },
      { name: "BRAM'S FALAFEL", price: '110', desc: 'Brioche-bröd, falafel, chilimajonnäs, sallad, rödlök, tomat och jalapeños.' },
      { name: "BRAM'S VEGAN FALAFEL (GF)", price: '110', desc: 'Veganskt bröd, falafel, vegansk chilimajonnäs, sallad, rödlök, tomat och jalapeños.' }
    ]
  },
  { 
    category: 'PIZZA', 
    items: [
      { name: 'JERK CHICKEN PIZZA', price: '130', desc: 'Tomatsås, två sorters ost, jerk-kyckling, rödlök och paprikor.' },
      { name: 'KEBAB PIZZA', price: '130', desc: 'Tomatsås, två sorters ost, kebab, rödlök och toppad med kebabsås.' },
      { name: 'PEPPERONI PIZZA', price: '130', desc: 'Tomatsås, två sorters ost och pepperoni.' },
      { name: 'MARGARITA', price: '110', desc: 'Tomatsås, två sorters ost, parmesan och basilika.' },
      { name: 'TANDOORI SUPREME', price: '130', desc: 'Tomatsås, två sorters ost, tandoorikyckling, champinjoner, paprikor, rödlök och jalapeños.' },
      { name: 'SUN KISSED', price: '130', desc: 'Tomatsås, två sorters ost, soltorkade tomater, oliver, rödlök, basilika och parmesan.' },
      { name: 'VEGGIE SUPREME', price: '130', desc: 'Tomatsås, två sorters ost, rödlök, champinjoner, paprikor och oliver.' },
      { name: 'BBQ SENSATION', price: '130', desc: 'Tomatsås, två sorters ost, rökt kyckling, rödlök, färska jalapeños, oliver och barbecuesås.' },
      { name: 'PERI PERI CHICKEN', price: '130', desc: 'Tomatsås, två sorters ost, peri-peri-kyckling, paprikor, rödlök, oliver och peri-peri-majonnäs.' },
      { name: 'KEBAB DELUXE', price: '150', desc: 'Tomatsås, två sorters ost, rödlök, kebab, pommes frites och toppad med bearnaisesås.' },
      { name: 'FAJITA CHICKEN', price: '130', desc: 'Tomatsås, två sorters ost, fajitakyckling, paprikor, lök, oliver, champinjoner och picklade jalapeños.' },
      { name: 'BUFFALO BANG', price: '130', desc: 'Tomatsås, två sorters ost, oliver, rödlök och buffalo-kyckling.' },
      { name: 'CHICKEN LEGEND', price: '130', desc: 'Tomatsås, två sorters ost, chicken legend, rödlök, champinjoner och oregano.' },
      { name: 'HALF & HALF', price: '180', desc: 'Valfri kombination av två halva pizzor.' }
    ]
  },
  { 
    category: 'SIDES', 
    items: [
      { name: 'REGULAR FRIES', price: '30', desc: 'Klassiska pommes frites.' },
      { name: 'SWEET FRIES', price: '35', desc: 'Sötpotatispommes.' },
      { name: 'CHILI CHEESE (6 ST)', price: '35', desc: 'Sex friterade chili cheese-bitar.' },
      { name: 'LÖKRINGAR (8 ST)', price: '35', desc: 'Åtta lökringar.' },
      { name: 'HOT WINGS (4 ST)', price: '49', desc: 'Friterade heta wings inklusive wingssås.' },
      { name: 'KOREAN FRIES', price: '49', desc: 'Smält ostsås, chilimajonnäs, K-Town-sås, sesam, silverlök, jalapeños, rostad lök.' },
      { name: 'CHEESE FRIES', price: '49', desc: 'Smält ostsås, chilimajonnäs, silverlök och inlagda jalapeños.' },
      { name: 'TRUFFLE PARMESAN FRIES', price: '49', desc: 'Tryffelmajonnäs, parmesanost och rostad lök.' }
    ]
  },
  { 
    category: 'DESSERT & SHAKES', 
    items: [
      { name: 'NUTELLA OREO CHURROS (4 ST)', price: '45', desc: 'Churros toppade med Nutella och Oreo.' },
      { name: 'CARAMEL LOTUS CHURROS (4 ST)', price: '45', desc: 'Churros toppade med karamell och Lotus-biscuit.' },
      { name: 'BRAM’S BANANA SHAKE', price: '59', desc: 'Milkshake med banansmak.' },
      { name: 'BRAM’S LOTUS SHAKE', price: '59', desc: 'Milkshake med smak av Lotus Biscoff.' },
      { name: 'BRAM’S OREO SHAKE', price: '59', desc: 'Milkshake med Oreosmak.' }
    ]
  }
];

export const MenuView: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20">
           <p className="text-brand-green font-black uppercase tracking-[0.3em] text-sm mb-4">MENYN / ALLA SKA ÄTA</p>
           <h1 className="text-7xl md:text-[10rem] font-display text-brand-black uppercase leading-none">
            SMAKA<br/>HYPEN
          </h1>
        </header>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {MENU_DATA.map((cat) => (
            <div key={cat.category} className="space-y-10">
              <div className="border-b-4 border-brand-green pb-2">
                <h2 className="text-3xl md:text-4xl font-display text-brand-black inline-block uppercase tracking-wider">
                  {cat.category}
                </h2>
                {cat.note && (
                  <p className="text-brand-green font-black text-[10px] uppercase tracking-widest mt-1 italic">
                    {cat.note}
                  </p>
                )}
              </div>
              <div className="space-y-12">
                {cat.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2 border-b border-black/10 pb-2">
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-brand-black group-hover:text-brand-green transition-colors leading-tight pr-4">
                        {item.name}
                      </h3>
                      <span className="font-display text-xl md:text-2xl text-brand-black shrink-0">
                        {item.price}:-
                      </span>
                    </div>
                    <p className="text-gray-600 font-bold uppercase text-[10px] md:text-xs tracking-wide leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info footer on menu page */}
        <div className="mt-32 pt-16 border-t-4 border-brand-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-brand-black">
            <div>
              <h4 className="font-black text-xs tracking-widest uppercase mb-4 opacity-40">DIPS (10-15:-)</h4>
              <p className="font-bold text-sm uppercase leading-relaxed text-gray-700">
                DRESSING, CHILIMAYO, BBQMAYO, GARLICMAYO, CHIPOTLEMAYO, BEARNAISE, MELTED CHEESE, TRUFFLEMAYO
              </p>
            </div>
            <div>
              <h4 className="font-black text-xs tracking-widest uppercase mb-4 opacity-40">DRYCK (15:-)</h4>
              <p className="font-bold text-sm uppercase leading-relaxed text-gray-700">
                CUBA COLA, ZINGO, POMMAC, RAMLÖSA, SMAKIS
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
               <a 
                 href="https://bramsburgers.qopla.com/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-brand-black text-white px-8 py-4 rounded-xl font-black uppercase hover:bg-brand-green transition-all shadow-xl text-center"
               >
                 BESTÄLL ONLINE
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};