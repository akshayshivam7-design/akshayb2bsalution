import React, { useState } from 'react';
import { X, Lock, ShieldCheck, UserCheck, KeyRound, ArrowRight, CheckCircle2, FileText, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [authMode, setAuthMode] = useState<'login' | 'tracker'>('login');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTrackingResult, setActiveTrackingResult] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile) return;
    setIsLoggedIn(true);
  };

  const handleTrackTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketId) return;

    setActiveTrackingResult({
      ticket: ticketId.toUpperCase(),
      company: "Apex Tech Innovations Pvt Ltd",
      service: "Private Limited Company Incorporation (SPICe+)",
      status: "SPICe+ Part B Scrutiny in Progress",
      progress: 75,
      assignedCA: "CA Priya Sharma (CS-ROC Desk)",
      filedDate: "18 Aug 2026",
      estimatedCompletion: "23 Aug 2026",
      steps: [
        { label: "Name Approval (RUN / SPICe+ Part A)", done: true, date: "18 Aug" },
        { label: "Digital Signature Certificates (DSC Class 3)", done: true, date: "19 Aug" },
        { label: "MOA, AOA & Statutory Declaration Drafting", done: true, date: "20 Aug" },
        { label: "MCA ROC Central Scrutiny (SPICe+ Part B)", current: true, date: "In Review" },
        { label: "PAN, TAN & Certificate of Incorporation Dispatch", done: false, date: "Pending" }
      ]
    });
  };

  return (
    <div
      id="client-portal-modal-backdrop"
      className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="client-portal-modal-container"
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-lg bg-[#0B3D91] text-white flex items-center justify-center">
            <Lock className="w-4 h-4 text-[#F5A623]" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900 uppercase">
              Client Compliance Portal
            </h3>
            <p className="text-[10px] text-slate-500 font-medium">
              Secure 256-Bit Encrypted Client Dashboard
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-lg bg-slate-100 p-1 mb-5">
          <button
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
              authMode === 'login'
                ? 'bg-white text-[#0B3D91] shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Client Login
          </button>
          <button
            onClick={() => setAuthMode('tracker')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
              authMode === 'tracker'
                ? 'bg-white text-[#0B3D91] shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Track Application Status
          </button>
        </div>

        {authMode === 'login' ? (
          isLoggedIn ? (
            <div className="space-y-4 py-2">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#0B3D91]">Welcome Back, Director!</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">KYC Verified</span>
                </div>
                <p className="text-xs text-slate-600">
                  You have <strong>2 active filings</strong> and <strong>1 statutory due date</strong> in the next 15 days.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase text-slate-700">Recent Applications:</h4>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">SPICe+ Pvt Ltd Incorp</span>
                    <span className="text-[10px] text-slate-500">Ticket #AB2B-892140</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    MCA Scrutiny
                  </span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Class 3 DSC (2 Tokens)</span>
                    <span className="text-[10px] text-slate-500">Ticket #AB2B-764921</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Issued & Dispatched
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full text-xs font-bold text-slate-500 hover:text-red-600 text-center py-2"
              >
                Log Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                  Registered Mobile Number or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 97180 04839 or info@akshayb2bsolutions.com"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B3D91]"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                  Portal Password or OTP *
                </label>
                <input
                  type="password"
                  placeholder="Enter Password / OTP"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B3D91]"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#0B3D91]" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#0B3D91] hover:underline font-semibold">Forgot Password?</a>
              </div>

              <button
                type="submit"
                id="portal-login-submit-btn"
                className="w-full bg-[#0B3D91] hover:bg-[#07265D] text-white font-black text-xs py-2.5 rounded-lg shadow-sm transition-colors uppercase cursor-pointer"
              >
                Secure Sign In
              </button>

              <div className="p-2.5 bg-blue-50/70 rounded-lg text-[10px] text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B3D91] shrink-0" />
                <span>Encrypted access for active business clients across India.</span>
              </div>
            </form>
          )
        ) : (
          /* Application Tracker Mode */
          <div className="space-y-4">
            <form onSubmit={handleTrackTicket} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                  Enter Ticket Number / Acknowledgement SRN *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="e.g. AB2B-892140 or SRN-9021"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    className="flex-1 p-2 text-xs bg-slate-50 border border-slate-300 rounded-lg uppercase font-mono font-bold"
                  />
                  <button
                    type="submit"
                    className="bg-[#F5A623] hover:bg-[#d98c12] text-blue-950 px-4 text-xs font-black rounded-lg transition-colors"
                  >
                    Track
                  </button>
                </div>
              </div>
            </form>

            {activeTrackingResult && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 animate-in fade-in">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-[9px] font-black uppercase text-[#0B3D91] bg-blue-50 px-2 py-0.5 rounded">
                    Ticket: {activeTrackingResult.ticket}
                  </span>
                  <h4 className="text-xs font-black text-slate-900 mt-1">
                    {activeTrackingResult.service}
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    Lead CA: {activeTrackingResult.assignedCA}
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-1">
                    <span>{activeTrackingResult.status}</span>
                    <span className="text-[#0B3D91]">{activeTrackingResult.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0B3D91] h-full transition-all duration-500"
                      style={{ width: `${activeTrackingResult.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step List */}
                <div className="space-y-1.5 pt-1 text-[11px]">
                  {activeTrackingResult.steps.map((st: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {st.done ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        ) : st.current ? (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#F5A623] border-t-transparent animate-spin shrink-0"></div>
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"></div>
                        )}
                        <span className={st.done ? 'text-slate-800 font-medium' : st.current ? 'text-[#0B3D91] font-bold' : 'text-slate-400'}>
                          {st.label}
                        </span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-mono">{st.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
