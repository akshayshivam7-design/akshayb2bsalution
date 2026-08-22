import React from 'react';
import { Mail, Phone, FileText, User, Facebook, Instagram, Youtube, Linkedin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface TopUtilityBarProps {
  onOpenBrochure: () => void;
  onOpenLogin: () => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({
  onOpenBrochure,
  onOpenLogin,
}) => {
  return (
    <div id="top-utility-bar" className="bg-[#0B3D91] text-white text-[11px] py-1.5 px-4 sm:px-8 border-b border-blue-900/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        {/* Left: Contact Info & Hours */}
        <div className="flex items-center gap-4 text-slate-200">
          <a
            id="top-bar-email"
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-[#F5A623] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
            <span className="font-medium tracking-tight">{COMPANY_INFO.email}</span>
          </a>
          <span className="hidden md:inline-block text-blue-300/40">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3 h-3 text-[#F5A623]" />
            <span>Mon - Sat: 10:00 AM - 06:30 PM</span>
          </div>
        </div>

        {/* Right: Phone, Brochure, Login, Socials */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            id="top-bar-phone"
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-bold text-white hover:text-[#F5A623] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>{COMPANY_INFO.phoneFormatted}</span>
          </a>

          <div className="h-3 w-[1px] bg-blue-700 hidden sm:block"></div>

          <button
            id="top-bar-brochure-btn"
            onClick={onOpenBrochure}
            className="flex items-center gap-1 text-slate-200 hover:text-[#F5A623] font-medium transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#F5A623]" />
            <span className="hidden sm:inline">Company</span> Brochure PDF
          </button>

          <div className="h-3 w-[1px] bg-blue-700"></div>

          <button
            id="top-bar-login-btn"
            onClick={onOpenLogin}
            className="bg-[#F5A623] hover:bg-[#d98c12] text-[#07265D] font-extrabold px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase transition-all shadow-sm flex items-center gap-1 cursor-pointer"
          >
            <User className="w-3 h-3 text-[#07265D]" />
            <span>LOGIN</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-slate-200 pl-1">
            <a
              id="top-bar-fb"
              href={COMPANY_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-0.5 hover:text-[#F5A623] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              id="top-bar-insta"
              href={COMPANY_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-0.5 hover:text-[#F5A623] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              id="top-bar-yt"
              href={COMPANY_INFO.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-0.5 hover:text-[#F5A623] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              id="top-bar-li"
              href={COMPANY_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-0.5 hover:text-[#F5A623] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
