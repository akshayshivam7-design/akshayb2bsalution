import React, { useState } from 'react';
import { X, Download, FileCheck, CheckCircle2, ShieldCheck, Mail, Phone, User, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setDownloaded(true);

    // Create a simulated downloadable PDF text/blob file
    const brochureContent = `
=====================================================
AKSHAY B2B SOLUTIONS - CORPORATE COMPLIANCE PROFILE (2026)
Tagline: make paper work
Phone: +91 97180 04839 | Email: info@akshayb2bsolutions.com
Address: Kesav Puram, Awas Vikas 1, Kalyanpur, Kanpur Nagar, Uttar Pradesh
=====================================================

1. BUSINESS STARTUP REGISTRATIONS
- Private Limited Company (Pvt Ltd) - SPICe+ MCA
- Limited Liability Partnership (LLP)
- One Person Company (OPC)
- Sole Proprietorship & Partnership Firms
- Dubai / International Subsidiary Setup
- Section 8 (NGO / Non-Profit) & Nidhi Company
- Microfinance Company & Producer Company

2. REGISTRATION & LICENSES
- FSSAI Registration, State License & Central License
- MSME / Udyam Registration & ZED Certification
- Startup India (DPIIT) & 80-IAC Tax Exemption
- Digital Signature Certificate (Class 3 DSC)
- Shop & Establishment (Gumasta License)
- BIS, CDSCO, Drug License & Ayush License
- RERA Agent & Promoter License
- Fire NOC, Pollution Control Board (CTE/CTO)

3. IMPORT & EXPORT
- Import Export Code (IEC) by DGFT
- ICEGATE Port Registration & AD Code Linking
- APEDA, Coffee Board, Spices Board RCMC
- Tea Board, Silk Board & E-Commerce Export Facilitation

4. TAX & COMPLIANCE
- GST Registration & Monthly/Quarterly Filing (GSTR-1, 3B, 9)
- Income Tax Return (ITR-1 to ITR-7) & Tax Audits
- MCA Annual Compliances (AOC-4, MGT-7, DIR-3 KYC)
- TDS Returns, Payroll, PF & ESIC Filing
- Virtual CFO & Board Secretariat Services

5. TRADEMARK & IP
- Trademark Search & Online Filing (45 Nice Classes)
- Trademark Objection Reply & Hearing Representation
- Copyright & Patent Registration
- Design Registration & Brand Protection

6. ISO CERTIFICATIONS
- ISO 9001:2015 (Quality Management)
- ISO 14001:2015 (Environmental Management)
- ISO 27001:2022 (Information Security)
- ISO 22000 (Food Safety), ISO 45001 & CE Marking

7. GOVERNMENT E-MARKETPLACE (GEM)
- GEM Seller / Vendor Registration
- Brand Approval & OEM Product Cataloging
- Direct Government Bidding Assistance

THANK YOU FOR CHOOSING AKSHAY B2B SOLUTIONS.
Contact: info@akshayb2bsolutions.com | +91 97180 04839
    `;

    const blob = new Blob([brochureContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AkshayB2BSolutions_Corporate_Brochure_2026.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="brochure-modal-backdrop"
      className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="brochure-modal-container"
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center mx-auto border border-blue-100">
            <Download className="w-6 h-6 text-[#F5A623]" />
          </div>
          <h3 className="text-lg font-black text-slate-900 uppercase">
            Download Company Brochure
          </h3>
          <p className="text-xs text-slate-500">
            Get our complete 2026 corporate service catalogue, statutory fee schedules, and compliance timelines in one file.
          </p>
        </div>

        {downloaded ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-black text-slate-900">Brochure Downloaded Successfully!</h4>
            <p className="text-xs text-slate-600">
              A copy has also been dispatched to <strong>{email}</strong>. Our senior executive will connect with you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-3 w-full bg-[#0B3D91] hover:bg-[#07265D] text-white text-xs font-black py-2.5 rounded-lg"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-3">
            <div>
              <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B3D91]"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                Work Email *
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="ramesh@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B3D91]"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="+91 97180 04839"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B3D91]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                id="modal-confirm-download-btn"
                className="w-full bg-[#F5A623] hover:bg-[#d98c12] text-blue-950 font-black text-xs py-2.5 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase"
              >
                <Download className="w-4 h-4" />
                <span>Instant Download Brochure</span>
              </button>
            </div>
            <p className="text-[9px] text-slate-400 text-center">
              We respect your privacy. No spam guaranteed.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
