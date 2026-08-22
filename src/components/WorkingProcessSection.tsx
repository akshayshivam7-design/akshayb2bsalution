import React from 'react';
import { FileEdit, CreditCard, UserCheck, MailCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkingProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Fill Up Application",
      subtitle: "Simple Online Form",
      desc: "Complete our intuitive online registration form in under 2 minutes. Upload basic identity documents via our secure encrypted digital portal.",
      icon: <FileEdit className="w-5 h-5 text-[#0B3D91]" />
    },
    {
      step: "02",
      title: "Make Online Payment",
      subtitle: "Transparent Pricing",
      desc: "Pay securely via UPI, NetBanking, Credit/Debit cards, or EMI. No hidden charges or surprise costs at any stage.",
      icon: <CreditCard className="w-5 h-5 text-[#F5A623]" />
    },
    {
      step: "03",
      title: "Executive Will Process",
      subtitle: "CA / CS Verification",
      desc: "Our senior legal executive & AI validation engine review your application, draft legal documents, and submit to Government authorities.",
      icon: <UserCheck className="w-5 h-5 text-[#0B3D91]" />
    },
    {
      step: "04",
      title: "Get Confirmation on Email",
      subtitle: "Delivery & Documentation",
      desc: "Receive government certificate of incorporation, license copy, and your official compliance kit directly via verified email and digital locker.",
      icon: <MailCheck className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="our-working-progress" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91] bg-blue-100/70 px-3 py-1 rounded-full">
            HOW IT WORKS
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
            Our Working Progress
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            4 simple, friction-free steps to start and scale your registered business in India.
          </p>
        </div>

        {/* 4-Step Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              id={`process-step-${item.step}`}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:border-[#0B3D91] hover:shadow-md transition-all duration-200 relative group flex flex-col justify-between"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B3D91] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-xl font-black text-slate-300 group-hover:text-[#F5A623] transition-colors font-mono">
                  {item.step}
                </span>
              </div>

              <div>
                <span className="text-[9px] font-black uppercase text-[#F5A623] tracking-wider block">
                  {item.subtitle}
                </span>
                <h3 className="text-sm font-black text-slate-900 leading-tight mt-0.5 group-hover:text-[#0B3D91] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[9px] font-bold text-slate-400 group-hover:text-[#0B3D91]">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>100% Automated Tracking</span>
              </div>

              {/* Connecting arrow for desktop between steps */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full p-1 text-slate-400 shadow-xs">
                  <ArrowRight className="w-3 h-3 text-[#0B3D91]" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
