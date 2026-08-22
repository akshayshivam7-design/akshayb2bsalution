import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  PhoneCall, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { MEGA_MENU_CATEGORIES, COMPANY_INFO, MegaCategory } from '../data/servicesData';

interface MegaMenuHeaderProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

export const MegaMenuHeader: React.FC<MegaMenuHeaderProps> = ({
  onSelectService,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>("business-startup");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega-menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentCategoryData: MegaCategory | undefined = MEGA_MENU_CATEGORIES.find(
    (c) => c.id === activeCategory
  );

  return (
    <header 
      id="main-header" 
      className={`bg-white border-b border-slate-200 sticky top-0 md:top-[29px] z-40 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md py-1.5' : 'shadow-sm py-2.5'
      }`}
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          {/* Company Brand / Logo */}
          <a 
            id="brand-logo-link" 
            href="#" 
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0B3D91] flex items-center justify-center text-white shadow-sm group-hover:bg-[#07265D] transition-colors">
              <ShieldCheck className="w-5 h-5 text-[#F5A623]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-[#0B3D91] leading-none uppercase">
                AKSHAY<span className="text-[#F5A623]">B2B</span>SOLUTIONS
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase mt-0.5 flex items-center gap-1">
                {COMPANY_INFO.tagline}
                <span className="inline-block w-1 h-1 rounded-full bg-[#F5A623]"></span>
                <span className="text-[9px] text-[#0B3D91] font-bold">AI COMPLIANCE</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Mega Menu */}
          <nav 
            id="desktop-mega-nav" 
            className="hidden xl:flex items-center gap-1 text-[12px] font-bold text-slate-700 uppercase tracking-tight"
          >
            {MEGA_MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setActiveCategory(category.id)}
                >
                  <button
                    id={`nav-item-${category.id}`}
                    onClick={() => setActiveCategory(isActive ? null : category.id)}
                    className={`px-2.5 py-2 rounded-md flex items-center gap-1 transition-all cursor-pointer ${
                      isActive 
                        ? 'text-[#0B3D91] bg-blue-50/80 border-b-2 border-[#F5A623]' 
                        : 'hover:text-[#0B3D91] hover:bg-slate-50'
                    }`}
                  >
                    <span>{category.title}</span>
                    <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isActive ? 'rotate-180 text-[#0B3D91]' : ''}`} />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-[#0B3D91] hover:bg-slate-100 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
              title="Search all 85+ compliance & registration services"
            >
              <Search className="w-4 h-4 text-slate-600" />
              <span className="hidden md:inline font-semibold text-slate-600 text-[11px]">Search Services</span>
            </button>

            {/* Quick Consultation CTA */}
            <button
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="bg-[#0B3D91] hover:bg-[#07265D] text-white text-[11px] font-bold px-3 py-2 rounded-md shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5A623]" />
              <span className="hidden sm:inline">Get Free</span> Consultation
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-[#0B3D91] hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Full-Width Mega Menu Dropdown */}
      {activeCategory && currentCategoryData && (
        <div 
          id="mega-menu-dropdown-panel"
          onMouseLeave={() => setActiveCategory(null)}
          className="hidden xl:block absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-2xl py-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-12 gap-6 items-start">
              {/* Dynamic Columns based on category */}
              <div className={`col-span-8 lg:col-span-9 grid grid-cols-${Math.min(currentCategoryData.columns.length, 4)} gap-4`}>
                {currentCategoryData.columns.map((col, idx) => (
                  <div key={idx} className="space-y-2 border-r border-slate-100 last:border-none pr-3">
                    <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
                      <h4 className="text-[11px] font-black uppercase text-[#0B3D91] tracking-wider">
                        {col.title}
                      </h4>
                    </div>
                    <ul className="space-y-1">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <button
                            id={`mega-item-${idx}-${itemIdx}`}
                            onClick={() => {
                              setActiveCategory(null);
                              onSelectService(item);
                            }}
                            className="w-full text-left text-[11px] text-slate-600 hover:text-[#0B3D91] hover:font-bold hover:translate-x-0.5 py-0.5 transition-all flex items-center justify-between group cursor-pointer"
                          >
                            <span className="truncate pr-1">{item}</span>
                            <ChevronRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-[#F5A623] transition-opacity shrink-0" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Promotional Thumbnail Card on the Right */}
              <div className="col-span-4 lg:col-span-3">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 shadow-sm relative overflow-hidden group">
                  <div className="relative h-28 w-full rounded-md overflow-hidden mb-3">
                    <img 
                      src={currentCategoryData.promoImg} 
                      alt={currentCategoryData.promoTitle} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                    <span className="absolute top-2 left-2 bg-[#F5A623] text-blue-950 font-black text-[9px] px-2 py-0.5 rounded tracking-wider uppercase">
                      {currentCategoryData.promoBadge}
                    </span>
                  </div>
                  <h5 className="text-xs font-black text-[#0B3D91] leading-tight mb-1">
                    {currentCategoryData.promoTitle}
                  </h5>
                  <p className="text-[10px] text-slate-500 leading-relaxed mb-3">
                    {currentCategoryData.promoDesc}
                  </p>
                  <button
                    onClick={onOpenConsultation}
                    className="w-full bg-[#0B3D91] hover:bg-[#07265D] text-white text-[10px] font-extrabold py-2 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Instant Consultation</span>
                    <ArrowRight className="w-3 h-3 text-[#F5A623]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Slide-in Fullscreen Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-drawer-menu" 
          className="xl:hidden fixed inset-0 top-[85px] bg-slate-900/60 z-50 backdrop-blur-xs flex flex-col justify-start"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="w-full sm:max-w-md bg-white h-full shadow-2xl overflow-y-auto flex flex-col p-4 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Search Bar */}
            <div className="mb-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md p-2.5 flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#0B3D91]" />
                <span>Search 85+ Services & Compliances...</span>
              </button>
            </div>

            {/* Accordion Categories */}
            <div className="space-y-2 flex-1">
              {MEGA_MENU_CATEGORIES.map((cat) => {
                const isExpanded = mobileExpandedCat === cat.id;
                return (
                  <div key={cat.id} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      id={`mobile-accordion-${cat.id}`}
                      onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                      className={`w-full p-3 flex items-center justify-between text-xs font-black uppercase text-left transition-colors cursor-pointer ${
                        isExpanded ? 'bg-[#0B3D91] text-white' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className={`w-3.5 h-3.5 ${isExpanded ? 'text-[#F5A623]' : 'text-[#0B3D91]'}`} />
                        {cat.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#F5A623]' : 'text-slate-400'}`} />
                    </button>

                    {isExpanded && (
                      <div className="p-3 bg-white space-y-4">
                        {cat.columns.map((col, idx) => (
                          <div key={idx} className="space-y-1.5">
                            <h6 className="text-[10px] font-black uppercase tracking-wider text-[#0B3D91] border-b border-slate-100 pb-1">
                              {col.title}
                            </h6>
                            <div className="grid grid-cols-1 gap-1">
                              {col.items.map((item, iIdx) => (
                                <button
                                  key={iIdx}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onSelectService(item);
                                  }}
                                  className="text-left text-[11px] text-slate-600 hover:text-[#0B3D91] hover:font-bold py-1 px-1.5 rounded hover:bg-blue-50/50 flex items-center justify-between"
                                >
                                  <span>{item}</span>
                                  <ArrowRight className="w-2.5 h-2.5 text-slate-300" />
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer Buttons */}
            <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#0B3D91] text-white font-extrabold text-xs py-2.5 rounded-md shadow flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#F5A623]" />
                <span>Book Free Expert Consultation</span>
              </button>
              <div className="text-center text-[10px] text-slate-500 font-medium">
                {COMPANY_INFO.phoneFormatted} • {COMPANY_INFO.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
