import React from 'react';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Sparkles, 
  PhoneCall, 
  IndianRupee 
} from 'lucide-react';
import { ALL_SERVICES_LIST, ServiceItem } from '../data/servicesData';

interface ServiceDetailModalProps {
  serviceName: string | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceName,
  onClose,
  onOpenConsultation,
}) => {
  if (!serviceName) return null;

  const found = ALL_SERVICES_LIST.find((s) => s.name.toLowerCase() === serviceName.toLowerCase());

  const service: ServiceItem = found || {
    id: "custom-service",
    name: serviceName,
    category: "Compliance & Advisory",
    column: "General",
    timeline: "3-5 Business Days",
    governmentFee: "Applicable as per state stamp duty",
    shortDesc: `Comprehensive end-to-end filing and regulatory certification for ${serviceName}.`,
    fullDesc: `Comprehensive end-to-end filing and regulatory certification for ${serviceName}. Handled directly by practicing Chartered Accountants and Company Secretaries with 100% digital submission.`,
    documents: [
      "PAN Card & Aadhaar Card of Directors / Proprietor",
      "Proof of Registered Business Office (Electricity Bill / Rent Agreement)",
      "NOC from Property Owner",
      "Active Bank Account Statement / Cancelled Cheque",
      "Board Resolution & Authorization Letter"
    ],
    benefits: [
      "100% Digital Workflow with Zero Physical Visits",
      "Free Name Search & Conflict Scrutiny",
      "Dedicated CA / CS Account Manager",
      "Encrypted Digital Locker for Corporate Vault"
    ]
  };

  return (
    <div
      id="service-detail-modal-backdrop"
      className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="service-detail-modal-container"
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase text-[#0B3D91] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
              {service.category}
            </span>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Verified Process
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
            {service.name}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Turnaround: {service.timeline || "3-5 Business Days"}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <IndianRupee className="w-3.5 h-3.5 text-[#0B3D91]" />
              <span>Govt Fee: {service.governmentFee || "As per state stamp duty"}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="py-4 space-y-5 text-xs text-slate-700">
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-1">
              Overview & Scope
            </h4>
            <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
              {service.fullDesc || service.shortDesc}
            </p>
          </div>

          {/* Required Documents Checklist */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#0B3D91]" />
                Mandatory Documents Checklist
              </h4>
              <span className="text-[9px] text-slate-500 font-medium">Digital Scans Only</span>
            </div>
            <ul className="space-y-1.5">
              {(service.documents || []).map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-2">
              What You Receive (Deliverables Kit)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(service.benefits || []).map((ben, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-blue-50/50 border border-blue-100 rounded-lg flex items-center gap-2 text-[11px] text-slate-800"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{ben}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:+919718004839`}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 hover:border-[#0B3D91] text-slate-700 hover:text-[#0B3D91] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Call Desk (+91 97180 04839)</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#d98c12] text-blue-950 font-black text-xs px-6 py-2.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Registration Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
