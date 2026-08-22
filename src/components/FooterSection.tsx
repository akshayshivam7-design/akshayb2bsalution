import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  Heart
} from 'lucide-react';
import { COMPANY_INFO, MEGA_MENU_CATEGORIES } from '../data/servicesData';

interface FooterSectionProps {
  onSelectService: (name: string) => void;
  onOpenConsultation: () => void;
  onOpenBrochure: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onSelectService,
  onOpenConsultation,
  onOpenBrochure,
}) => {
  const currentYear = 2026;

  return (
    <footer id="main-footer" className="bg-[#07265D] text-slate-300 text-xs border-t border-blue-950">
      
      {/* Upper Footer: 5 Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#0B3D91] border border-blue-400/30 flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-white uppercase leading-none">
                  AKSHAY<span className="text-[#F5A623]">B2B</span>SOLUTIONS
                </span>
                <span className="text-[9px] tracking-widest text-slate-400 font-semibold uppercase mt-0.5">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed">
              India's fastest AI-enabled legal compliance and corporate registration platform. We help entrepreneurs, MSMEs, and global enterprises incorporate, obtain licenses, and maintain 100% regulatory compliance with zero paperwork hassle.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                id="footer-fb-link"
                href={COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-insta-link"
                href={COMPANY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-yt-link"
                href={COMPANY_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="footer-li-link"
                href={COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Download Brochure Trigger */}
            <div className="pt-2">
              <button
                id="footer-brochure-btn"
                onClick={onOpenBrochure}
                className="text-[11px] font-bold text-[#F5A623] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Download Official Corporate Brochure (PDF)</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Column 2: Business Startup Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-white border-b border-blue-800/80 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
              Business Startup
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {["Private Limited Company", "Limited Liability Partnership", "One Person Company", "Sole Proprietorship Firm", "Company Incorporation in Dubai", "Section 8 Company", "Nidhi Company"].map((svc, i) => (
                <li key={i}>
                  <button
                    onClick={() => onSelectService(svc)}
                    className="text-slate-300 hover:text-[#F5A623] text-left transition-colors truncate w-full"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Registration & License */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-white border-b border-blue-800/80 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
              Reg & License
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {["FSSAI Registration", "FSSAI State License", "MSME Registration", "Startup India Registration", "Digital Signature Certificate", "Shop and Establishment", "BIS Registration"].map((svc, i) => (
                <li key={i}>
                  <button
                    onClick={() => onSelectService(svc)}
                    className="text-slate-300 hover:text-[#F5A623] text-left transition-colors truncate w-full"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Import & Export + Tax */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-white border-b border-blue-800/80 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
              Trade & Tax
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {["IEC Registration", "ICEGATE Registration", "APEDA Registration", "GST Registration", "GST Return Filing", "Income Tax Return Filing", "Pvt Ltd Company Compliances"].map((svc, i) => (
                <li key={i}>
                  <button
                    onClick={() => onSelectService(svc)}
                    className="text-slate-300 hover:text-[#F5A623] text-left transition-colors truncate w-full"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Trademark & ISO */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-white border-b border-blue-800/80 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
              IP & ISO
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {["Trademark Registration", "Trademark Objection", "Copyright Registration", "ISO 9001", "ISO 27001", "GEM Registration", "Brand Registration on GEM"].map((svc, i) => (
                <li key={i}>
                  <button
                    onClick={() => onSelectService(svc)}
                    className="text-slate-300 hover:text-[#F5A623] text-left transition-colors truncate w-full"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle Bar: Full Contact Details Strip */}
        <div className="mt-10 pt-8 border-t border-blue-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[11px]">
          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Email Address</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-[#F5A623] font-semibold">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Hotline Phone</span>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-[#F5A623] font-semibold">
                {COMPANY_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Office Location</span>
              <p className="text-slate-200 leading-snug">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Working Schedule</span>
              <p className="text-slate-200">
                {COMPANY_INFO.workingHours}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Policies */}
      <div className="bg-[#051c45] py-3.5 border-t border-blue-950 text-[10px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {currentYear} <strong>{COMPANY_INFO.name}</strong>. All Rights Reserved. Designed for maximum Indian compliance velocity.
          </p>
          <div className="flex items-center gap-4 text-slate-300 font-semibold">
            <a href="#" className="hover:text-[#F5A623]">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#F5A623]">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-[#F5A623]">Refund Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#F5A623]">Government Disclaimers</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
