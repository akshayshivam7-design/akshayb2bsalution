import React from 'react';
import { 
  UserCheck, 
  Clock, 
  BadgePercent, 
  Users, 
  BellRing, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUsGrid: React.FC = () => {
  const cards = [
    {
      id: "expert-guidance",
      icon: <UserCheck className="w-5 h-5 text-[#0B3D91]" />,
      title: "Expert Guidance",
      desc: "Direct access to practicing Chartered Accountants, Company Secretaries, and Trademark Attorneys at every phase of your filing."
    },
    {
      id: "time-saving",
      icon: <Clock className="w-5 h-5 text-[#F5A623]" />,
      title: "Time-Saving Process",
      desc: "Streamlined digital workflows eliminate bureaucratic delays, reducing traditional registration timelines from weeks to days."
    },
    {
      id: "affordable-pricing",
      icon: <BadgePercent className="w-5 h-5 text-emerald-600" />,
      title: "Affordable Pricing",
      desc: "Completely transparent, upfront pricing with zero hidden surcharges, zero municipal markup, and flexible payment plans."
    },
    {
      id: "trusted-thousands",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      title: "Trusted by Thousands",
      desc: "Over 1,00,000 satisfied enterprises, solo founders, and global entities rely on us for their pan-India regulatory standing."
    },
    {
      id: "compliance-alerts",
      icon: <BellRing className="w-5 h-5 text-rose-600" />,
      title: "Compliance Alerts",
      desc: "Automated SMS, email, and WhatsApp deadline reminders ensure you never pay late fees for ROC, GST, or ITR cutoffs."
    },
    {
      id: "secure-confidential",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: "Secure and Confidential",
      desc: "Bank-grade 256-bit encryption safeguards your sensitive identity proof, bank statements, and corporate resolutions."
    }
  ];

  return (
    <section id="why-choose-us-icon-grid" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            OUR CORE ADVANTAGES
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
            Why Choose Akshay B2B Solutions
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Built from the ground up to give Indian founders an unfair regulatory advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`why-card-${card.id}`}
              className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#0B3D91] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-3 group-hover:bg-[#0B3D91] group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0B3D91] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[9px] font-bold text-slate-400">
                <span>Verified Benefit</span>
                <span className="text-emerald-600 font-black">✓ 100% Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
