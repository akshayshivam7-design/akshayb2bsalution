import React from 'react';
import { Smartphone, Download, CheckCircle2, MessageSquare, PhoneCall, BellRing, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const MobileAppPromotionBanner: React.FC = () => {
  return (
    <section id="mobile-app-promo-banner" className="py-12 bg-gradient-to-r from-[#0B3D91] via-[#07265D] to-indigo-950 text-white overflow-hidden relative border-b border-blue-900">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & CTAs */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F5A623] text-blue-950">
              <Sparkles className="w-3 h-3" />
              IOS & ANDROID COMPLIANCE SUITE
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
              NOW YOUR COMPLIANCE PARTNER ONE CLICK AWAY WITH {COMPANY_INFO.displayName} APP!
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
              Track live MCA application progress, receive push notifications before ROC and GST due dates, upload audit invoices securely, and connect instantly with your assigned Chartered Accountant via 1-click call or chat.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-[11px] text-slate-200 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                <span>Live Order Tracker</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                <span>Encrypted Vault</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                <span>Instant CA Chat</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                id="play-store-download-btn"
                className="bg-black hover:bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5 transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 block leading-none">GET IT ON</span>
                  <span className="text-xs font-black tracking-tight leading-none mt-0.5">Google Play</span>
                </div>
              </button>

              <button
                id="app-store-download-btn"
                className="bg-black hover:bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5 transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M15.97,4.88C16.55,4.17 16.94,3.19 16.83,2.2C15.97,2.24 14.9,2.78 14.29,3.5C13.76,4.12 13.3,5.12 13.43,6.1C14.4,6.18 15.39,5.59 15.97,4.88Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 block leading-none">Download on the</span>
                  <span className="text-xs font-black tracking-tight leading-none mt-0.5">Apple App Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 bg-slate-950 rounded-3xl p-3 border-4 border-slate-700 shadow-2xl">
              {/* Camera Notch */}
              <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
              </div>

              {/* Screen Content */}
              <div className="bg-slate-900 rounded-2xl p-3 text-slate-100 space-y-3">
                {/* Header in App */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-black text-[#F5A623]">AKSHAY B2B</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded">LIVE</span>
                </div>

                {/* Active Service Status */}
                <div className="bg-slate-800/80 rounded-xl p-2.5 space-y-1.5 border border-slate-700">
                  <span className="text-[9px] text-slate-400 font-bold uppercase block">ACTIVE APPLICATION</span>
                  <p className="text-xs font-black text-white leading-tight">Private Limited Incorporation</p>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#F5A623] h-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-300 font-medium">
                    <span>SPICe+ Part B Filed</span>
                    <span className="text-amber-400">75% Complete</span>
                  </div>
                </div>

                {/* Quick App Badges */}
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-slate-800/60 p-2 rounded-lg text-center border border-slate-700/50">
                    <span className="text-[8px] text-slate-400 block">GST Due Date</span>
                    <span className="font-bold text-white">20th Aug</span>
                  </div>
                  <div className="bg-slate-800/60 p-2 rounded-lg text-center border border-slate-700/50">
                    <span className="text-[8px] text-slate-400 block">Digital Locker</span>
                    <span className="font-bold text-white">12 Docs</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-[#0B3D91] rounded-xl p-2.5 text-center">
                  <span className="text-[10px] font-black uppercase text-white block">1-Click CA Call</span>
                  <span className="text-[8px] text-blue-200">Connected with Senior CA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
