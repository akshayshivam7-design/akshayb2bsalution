import React from 'react';
import { 
  Building2, 
  Landmark, 
  Receipt, 
  Ship, 
  ShieldCheck, 
  Award, 
  Store, 
  CreditCard, 
  BadgePercent, 
  Zap, 
  Cloud, 
  Server 
} from 'lucide-react';
import { PARTNERS_LOGOS } from '../data/servicesData';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-4 h-4" />,
  Landmark: <Landmark className="w-4 h-4" />,
  Receipt: <Receipt className="w-4 h-4" />,
  Ship: <Ship className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Award: <Award className="w-4 h-4" />,
  Store: <Store className="w-4 h-4" />,
  CreditCard: <CreditCard className="w-4 h-4" />,
  BadgePercent: <BadgePercent className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />
};

export const PartnersLogoStrip: React.FC = () => {
  return (
    <section id="associates-partners-strip" className="bg-white border-y border-slate-200 py-3.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0B3D91]"></span>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
            INTEGRATED COMPLIANCE & BANKING PARTNERS
          </span>
        </div>
        <span className="text-[9px] text-slate-400 font-semibold hidden sm:inline">
          Direct API Integration with MCA, GSTN, DGFT & Top Tier Banks
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-scroll flex items-center gap-8 py-1">
          {/* Repeat twice for seamless infinite scrolling */}
          {[...PARTNERS_LOGOS, ...PARTNERS_LOGOS].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200/80 hover:border-[#0B3D91] transition-all cursor-default shrink-0 group"
            >
              <div className="text-slate-400 group-hover:text-[#0B3D91] transition-colors">
                {iconMap[partner.icon] || <Building2 className="w-4 h-4" />}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-700 group-hover:text-[#0B3D91] whitespace-nowrap leading-tight transition-colors">
                  {partner.name}
                </span>
                <span className="text-[9px] text-slate-400 font-medium whitespace-nowrap leading-none">
                  {partner.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
