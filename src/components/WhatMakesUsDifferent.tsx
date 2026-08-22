import React from 'react';
import { Cpu, Users, Lock, HeartHandshake, CheckCircle, ShieldCheck } from 'lucide-react';

export const WhatMakesUsDifferent: React.FC = () => {
  const blocks = [
    {
      id: "ai-solutions",
      icon: <Cpu className="w-5 h-5 text-[#F5A623]" />,
      title: "AI-Integrated Solutions",
      desc: "We leverage proprietary AI verification algorithms to pre-screen company names, cross-validate Aadhaar/PAN data, and detect potential filing errors before submission to government portals, achieving a 99.8% first-pass clearance rate."
    },
    {
      id: "experienced-experts",
      icon: <Users className="w-5 h-5 text-[#0B3D91]" />,
      title: "Experienced Experts",
      desc: "Our seasoned panel of Chartered Accountants, Company Secretaries, and Trademark Attorneys review every application. You get professional expertise paired with modern automation for seamless corporate governance."
    },
    {
      id: "secure-data",
      icon: <Lock className="w-5 h-5 text-emerald-600]" />,
      title: "Secure Data & Confidentiality",
      desc: "Your confidential corporate records, identity documents, and financial statements are protected with bank-grade 256-bit encryption, strict access controls, and non-disclosure agreements across our entire platform."
    },
    {
      id: "client-centric",
      icon: <HeartHandshake className="w-5 h-5 text-purple-600" />,
      title: "Client-Centric Approach",
      desc: "From sole proprietorships to multi-national subsidiaries, we tailor our compliance workflows to your exact industry. A dedicated relationship manager is assigned to walk you through every step with zero legal jargon."
    }
  ];

  return (
    <section id="what-makes-us-different" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            TECHNOLOGY MEETS LEGAL MASTERY
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
            What Makes Us Different
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Redefining corporate compliance in India through speed, absolute precision, and human care.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 4 Sub-blocks */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blocks.map((block) => (
                <div
                  key={block.id}
                  id={`diff-block-${block.id}`}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#0B3D91] hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {block.icon}
                  </div>
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-tight group-hover:text-[#0B3D91] transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composite Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Corporate experts at work"
                className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07265D]/90 via-[#0B3D91]/40 to-transparent"></div>

              {/* Floating Overlays */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/40 shadow-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h4 className="text-xs font-black text-slate-900">Zero Query Guarantee</h4>
                      <p className="text-[9px] text-slate-500 font-medium">99.8% first-pass MCA & GST approval</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#0B3D91] bg-blue-50 px-2 py-0.5 rounded">
                    ISO 9001:2015
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                  <div>
                    <span className="text-xs font-black text-[#0B3D91] block">24h</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase">DSC Issue</span>
                  </div>
                  <div className="border-x border-slate-100">
                    <span className="text-xs font-black text-[#0B3D91] block">5-7 Days</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase">Pvt Ltd Incorp</span>
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0B3D91] block">100%</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase">Digital Workflow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
