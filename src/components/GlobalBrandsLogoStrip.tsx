import React from 'react';
import { Building, Award, CheckCircle2 } from 'lucide-react';
import { GLOBAL_BRANDS } from '../data/servicesData';

export const GlobalBrandsLogoStrip: React.FC = () => {
  return (
    <section id="global-brands-strip" className="py-10 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#F5A623] bg-white/10 px-3 py-1 rounded-full border border-white/15">
          ENTERPRISE VALIDATION
        </span>
        <h2 className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-tight mt-2 text-white">
          1 Lakh+ Global Brands & Ecosystem Partners Who Trust Us
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex items-center mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-scroll-fast flex items-center gap-4 py-2">
          {[...GLOBAL_BRANDS, ...GLOBAL_BRANDS, ...GLOBAL_BRANDS].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/15 hover:text-white transition-all cursor-default shrink-0 group"
            >
              <Building className="w-3.5 h-3.5 text-[#F5A623] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black tracking-tight whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
