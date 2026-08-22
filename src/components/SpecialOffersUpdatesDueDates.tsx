import React, { useState } from 'react';
import { 
  Gift, 
  BellRing, 
  CalendarClock, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight, 
  Clock, 
  Flame, 
  Tag, 
  ChevronRight,
  AlertTriangle,
  Info
} from 'lucide-react';
import { SPECIAL_OFFERS, UPDATES_AND_ALERTS, DUE_DATES } from '../data/servicesData';

interface SpecialOffersUpdatesDueDatesProps {
  onOpenConsultation: () => void;
  onSelectService: (name: string) => void;
}

export const SpecialOffersUpdatesDueDates: React.FC<SpecialOffersUpdatesDueDatesProps> = ({
  onOpenConsultation,
  onSelectService,
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const currentOffer = SPECIAL_OFFERS[activeOfferIndex];

  return (
    <section id="offers-updates-due-dates-section" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91]">
                REAL-TIME COMPLIANCE DESK
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Special Offers, Live Updates & Due Dates
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Daily regulatory feed synchronized with MCA, GSTN & DGFT portals.
          </span>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Column 1: Special Offers */}
          <div className="bg-gradient-to-br from-[#0B3D91] via-[#07265D] to-slate-900 text-white rounded-2xl p-5 shadow-md flex flex-col justify-between relative overflow-hidden border border-blue-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/20 rounded-full blur-2xl"></div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#F5A623] text-blue-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
                  <Gift className="w-3 h-3" />
                  Special Offers
                </span>
                <span className="text-[10px] font-bold text-amber-300">
                  {currentOffer.validTill}
                </span>
              </div>

              <div className="mt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  {currentOffer.subtitle}
                </span>
                <h3 className="text-base sm:text-lg font-black leading-tight mt-1 text-white">
                  {currentOffer.title}
                </h3>
                <div className="mt-2 inline-block bg-white/15 backdrop-blur-xs border border-white/20 px-3 py-1 rounded-lg text-lg font-black text-[#F5A623]">
                  {currentOffer.discount}
                </div>
              </div>

              {/* Offer Features */}
              <div className="mt-4 space-y-1.5 pt-3 border-t border-white/15 text-[11px]">
                {currentOffer.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-200">
                    <Sparkles className="w-3 h-3 text-[#F5A623] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo Code Copy & CTA */}
            <div className="mt-6 pt-4 border-t border-white/15 space-y-3">
              <div className="flex items-center justify-between bg-black/40 border border-white/20 rounded-lg p-2 text-xs">
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span className="font-mono font-bold tracking-widest text-amber-300">
                    {currentOffer.code}
                  </span>
                </div>
                <button
                  id={`copy-offer-code-${currentOffer.id}`}
                  onClick={() => handleCopy(currentOffer.code)}
                  className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  {copiedCode === currentOffer.code ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="claim-offer-btn"
                  onClick={onOpenConsultation}
                  className="flex-1 bg-[#F5A623] hover:bg-[#d98c12] text-blue-950 font-black text-xs py-2.5 rounded-lg text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Claim Offer Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-1">
                  {SPECIAL_OFFERS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveOfferIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeOfferIndex ? 'w-5 bg-[#F5A623]' : 'w-2 bg-white/30'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Updates & Alerts */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#0B3D91]">
                    <BellRing className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                    Updates & Alerts
                  </h3>
                </div>
                <span className="text-[10px] bg-blue-50 text-[#0B3D91] font-bold px-2 py-0.5 rounded border border-blue-100">
                  {UPDATES_AND_ALERTS.length} Alerts
                </span>
              </div>

              {/* Scrollable List of ~10 Items */}
              <div className="space-y-2.5 max-h-[360px] overflow-y-auto custom-scrollbar pr-1">
                {UPDATES_AND_ALERTS.map((alert) => (
                  <div
                    key={alert.id}
                    id={`alert-item-${alert.id}`}
                    onClick={() => onSelectService(alert.title)}
                    className="p-2.5 bg-white border border-slate-200 rounded-lg hover:border-[#0B3D91] hover:shadow-xs transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[9px] font-black uppercase text-[#0B3D91] bg-blue-50 px-1.5 py-0.2 rounded">
                        {alert.tag}
                      </span>
                      <span className="text-[9px] text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {alert.date}
                      </span>
                    </div>
                    <h4 className="text-[11px] font-bold text-slate-800 group-hover:text-[#0B3D91] transition-colors leading-tight">
                      {alert.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {alert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 mt-2 text-center">
              <button
                onClick={onOpenConsultation}
                className="text-[11px] font-extrabold text-[#0B3D91] hover:text-[#F5A623] inline-flex items-center gap-1 transition-colors"
              >
                <span>Subscribe to Daily Legal Notifications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 3: Due Dates */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <CalendarClock className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                    Statutory Due Dates
                  </h3>
                </div>
                <span className="text-[10px] bg-amber-50 text-amber-900 font-bold px-2 py-0.5 rounded border border-amber-200">
                  FY 2025-26
                </span>
              </div>

              {/* Scrollable List of ~8 Items */}
              <div className="space-y-2.5 max-h-[360px] overflow-y-auto custom-scrollbar pr-1">
                {DUE_DATES.map((due) => (
                  <div
                    key={due.id}
                    id={`due-date-item-${due.id}`}
                    onClick={() => onSelectService(due.title)}
                    className="p-2.5 bg-white border border-slate-200 rounded-lg hover:border-amber-500 hover:shadow-xs transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[9px] font-extrabold text-white bg-slate-800 px-1.5 py-0.2 rounded">
                        {due.category}
                      </span>
                      <span className="text-[9px] font-black text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                        {due.date}
                      </span>
                    </div>
                    <h4 className="text-[11px] font-bold text-slate-800 group-hover:text-[#0B3D91] transition-colors leading-tight">
                      {due.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {due.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 mt-2 text-center">
              <button
                onClick={onOpenConsultation}
                className="text-[11px] font-extrabold text-[#0B3D91] hover:text-[#F5A623] inline-flex items-center gap-1 transition-colors"
              >
                <span>Get Automated Filing Deadlines Reminders</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
