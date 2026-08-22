import React from 'react';
import { ShieldCheck, Calendar, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

interface RegisterConfidenceCTAProps {
  onOpenConsultation: () => void;
}

export const RegisterConfidenceCTA: React.FC<RegisterConfidenceCTAProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="register-with-confidence-cta" className="relative py-12 bg-[#0B3D91] text-white overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#F5A623]/20 blur-3xl"></div>
      <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900/90 via-[#07265D]/95 to-blue-950/90 border border-blue-400/30 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F5A623] text-blue-950 mb-1">
              <Sparkles className="w-3 h-3" />
              CONFIDENTIAL & 100% COMPLIANT
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight leading-snug">
              Register Your Business With Absolute Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              Join over 1,00,000+ satisfied entrepreneurs, startups, and corporate enterprises across India. Get end-to-end guidance from legal practitioners and certified accountants today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              id="cta-book-appointment-btn"
              onClick={onOpenConsultation}
              className="bg-[#F5A623] hover:bg-[#d98c12] text-blue-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-blue-950" />
              <span>BOOK APPOINTMENT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              id="cta-call-now-link"
              href="tel:+919718004839"
              className="px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-bold text-white transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#F5A623]" />
              <span>Call: +91 97180 04839</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
