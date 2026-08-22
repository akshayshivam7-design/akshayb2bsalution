import React from 'react';
import { 
  Bot, 
  Users, 
  Lock, 
  Sliders, 
  CheckCircle, 
  HeartHandshake, 
  Lightbulb, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const AIComplianceDetailedSection: React.FC = () => {
  const points = [
    {
      label: "AI-Powered Efficiency",
      icon: <Bot className="w-4 h-4 text-[#F5A623]" />,
      desc: "Instant name availability check, automated document scanning, and automated pre-filing compliance audits that accelerate turnaround time by up to 70%."
    },
    {
      label: "Expert Team",
      icon: <Users className="w-4 h-4 text-[#0B3D91]" />,
      desc: "A multidisciplinary panel of seasoned Chartered Accountants, Company Secretaries, Corporate Lawyers, and Trademark Attorneys scrutinizing every legal submission."
    },
    {
      label: "Secure Data Management",
      icon: <Lock className="w-4 h-4 text-emerald-600" />,
      desc: "Enterprise-grade 256-bit encryption, strict KYC protection protocols, zero third-party data trading, and encrypted document storage vaults."
    },
    {
      label: "Tailored Solutions",
      icon: <Sliders className="w-4 h-4 text-purple-600" />,
      desc: "Customized corporate governance plans, licensing frameworks, and tax structures crafted precisely for your enterprise model and vertical."
    },
    {
      label: "Quality Assurance",
      icon: <CheckCircle className="w-4 h-4 text-teal-600" />,
      desc: "Multi-layered internal vetting processes ensuring zero typographical errors, zero mismatched DINs, and 100% adherence to MCA / GSTN / DGFT guidelines."
    },
    {
      label: "Client-Centric Approach",
      icon: <HeartHandshake className="w-4 h-4 text-rose-600" />,
      desc: "Transparent flat pricing, zero hidden municipal surcharges, real-time filing status SMS/WhatsApp alerts, and dedicated post-incorporation advisory."
    },
    {
      label: "Innovation-Driven",
      icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
      desc: "Continuous integration of updated statutory changes, MCA V3 API upgrades, dynamic DSC token mapping, and automated statutory due-date alarms."
    }
  ];

  return (
    <section id="ai-compliance-detailed-section" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          {/* Header */}
          <div className="max-w-3xl space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0B3D91] text-white">
              <Sparkles className="w-3 h-3 text-[#F5A623]" />
              SYNERGY OF CODE & LAW
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Simplifying Compliance Through Artificial Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At Akshay B2B Solutions, we blend proprietary artificial intelligence algorithms with the seasoned wisdom of senior legal professionals. By automating repetitive administrative overhead and validating complex statutory filings against thousands of regulatory rules in milliseconds, we empower businesses to launch, comply, and thrive without legal hurdles.
            </p>
          </div>

          {/* 7-Point Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {points.map((pt, idx) => (
              <div
                key={idx}
                id={`ai-point-${idx + 1}`}
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0B3D91] hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {pt.icon}
                    </div>
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0B3D91] transition-colors">
                      {pt.label}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-slate-400">
                  <span>Pillar 0{idx + 1}</span>
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
