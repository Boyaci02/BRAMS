import React, { useState } from 'react';
import { Upload, FileText, Receipt } from 'lucide-react';

type CaseType = 'jobb' | 'klagomal' | 'bestallning' | 'samarbete' | 'ovrigt' | '';

export const ContactView: React.FC = () => {
  const [caseType, setCaseType] = useState<CaseType>('');

  return (
    <div className="pt-32 pb-20 bg-brand-cream min-h-screen text-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-8xl md:text-9xl font-display text-brand-black uppercase leading-none mb-12">
              SÄG HEJ!
            </h1>
            <p className="text-2xl font-black uppercase mb-12 text-brand-black">
              VI VILL HÖRA FRÅN DIG. HAR DU FRÅGOR, FEEDBACK ELLER VILL DU BARA PRATA BURGARE?
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-xs tracking-[0.3em] uppercase opacity-40 mb-2 text-brand-black">E-POST</h4>
                <p className="text-3xl font-display uppercase text-brand-black">INFO@BRAMSBURGER.SE</p>
              </div>
              <div>
                <h4 className="font-black text-xs tracking-[0.3em] uppercase opacity-40 mb-2 text-brand-black">HUVUDKONTOR</h4>
                <p className="text-3xl font-display uppercase text-brand-black">SKÄRHOLMEN CENTRUM, STOCKHOLM</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-2xl border-4 border-brand-black/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-black uppercase text-xs mb-2 text-brand-black">NAMN</label>
                  <input type="text" className="w-full bg-gray-100 border-none rounded-2xl p-4 font-bold text-brand-black placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="DITT NAMN" />
                </div>
                <div>
                  <label className="block font-black uppercase text-xs mb-2 text-brand-black">E-POST</label>
                  <input type="email" className="w-full bg-gray-100 border-none rounded-2xl p-4 font-bold text-brand-black placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="DIN E-POST" />
                </div>
              </div>

              <div>
                <label className="block font-black uppercase text-xs mb-2 text-brand-black">ÄRENDE</label>
                <div className="relative">
                  <select 
                    value={caseType}
                    onChange={(e) => setCaseType(e.target.value as CaseType)}
                    className="w-full bg-gray-100 border-none rounded-2xl p-4 font-bold text-brand-black appearance-none cursor-pointer focus:ring-2 focus:ring-brand-green outline-none transition-all"
                  >
                    <option value="" disabled>VÄLJ TYP AV KONTAKT</option>
                    <option value="jobb">JOBBANSÖKAN</option>
                    <option value="klagomal">KLAGOMÅL</option>
                    <option value="bestallning">FEL PÅ BESTÄLLNING</option>
                    <option value="samarbete">SAMARBETE</option>
                    <option value="ovrigt">ÖVRIGT</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <Upload size={18} />
                  </div>
                </div>
              </div>

              {/* Conditional File Uploads */}
              {caseType === 'jobb' && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block font-black uppercase text-xs mb-2 text-brand-black">BIFOGA CV / PERSONLIGT BREV</label>
                  <div className="relative">
                    <input type="file" className="hidden" id="cv-upload" accept=".pdf,.doc,.docx" />
                    <label htmlFor="cv-upload" className="w-full bg-brand-green/5 border-2 border-dashed border-brand-green/30 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-brand-green/10 transition-colors">
                      <FileText size={32} className="text-brand-green mb-2" />
                      <span className="font-bold text-sm text-brand-green uppercase">Klicka för att ladda upp CV</span>
                      <span className="text-[10px] text-gray-400 mt-1">PDF, DOC (MAX 5MB)</span>
                    </label>
                  </div>
                </div>
              )}

              {(caseType === 'klagomal' || caseType === 'bestallning') && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block font-black uppercase text-xs mb-2 text-brand-black">BIFOGA KVITTO / BILD</label>
                  <div className="relative">
                    <input type="file" className="hidden" id="receipt-upload" accept="image/*,.pdf" />
                    <label htmlFor="receipt-upload" className="w-full bg-brand-blue/5 border-2 border-dashed border-brand-blue/30 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-brand-blue/10 transition-colors">
                      <Receipt size={32} className="text-brand-blue mb-2" />
                      <span className="font-bold text-sm text-brand-blue uppercase">Klicka för att ladda upp kvitto</span>
                      <span className="text-[10px] text-gray-400 mt-1">JPG, PNG, PDF (MAX 5MB)</span>
                    </label>
                  </div>
                </div>
              )}

              <div>
                <label className="block font-black uppercase text-xs mb-2 text-brand-black">MEDDELANDE</label>
                <textarea className="w-full bg-gray-100 border-none rounded-2xl p-4 font-bold h-40 text-brand-black placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green outline-none transition-all" placeholder="VAD HAR DU PÅ HJÄRTAT?"></textarea>
              </div>

              <button className="bg-brand-black text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-green transition-all shadow-xl active:scale-95">
                SKICKA MEDDELANDE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};