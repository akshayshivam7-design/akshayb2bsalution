import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  Search, 
  FileCheck2, 
  Bot, 
  ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface HeroSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    tag: "AI POWERED COMPLIANCE",
    title: "Experience India's fastest service provider with AI technology",
    subtitle: "Registration, Compliances and filings in one place",
    description: "make paper work — We know about the value of your time. Complete MCA, GST, Trademark, FSSAI & DGFT registrations with 100% precision.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80",
    badge: "99.8% Approval Rate",
    accent: "#F5A623"
  },
  {
    id: 2,
    tag: "INSTANT INCORPORATION",
    title: "Incorporate Your Private Limited or LLP in 5-7 Days",
    subtitle: "Zero MCA Govt Fee up to ₹15 Lakh Capital",
    description: "Complete name reservation (RUN/SPICe+ Part A), DSC generation, PAN/TAN allocation, and bank account setup facilitated by dedicated Corporate Lawyers.",
    bgImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1600&auto=format&fit=crop&q=80",
    badge: "Free DIN & DSC",
    accent: "#38bdf8"
  },
  {
    id: 3,
    tag: "INTELLECTUAL PROPERTY & TRADEMARK",
    title: "Protect Your Brand Name & Logo with ™ in 24 Hours",
    subtitle: "Comprehensive 45-Class AI Search & Legal Defense",
    description: "Get legal priority from day one. Avoid brand hijacking with instant online trademark filing and experienced attorney objection replies.",
    bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&auto=format&fit=crop&q=80",
    badge: "50% MSME Fee Waiver",
    accent: "#34d399"
  },
  {
    id: 4,
    tag: "GLOBAL IMPORT & EXPORT",
    title: "Expand Globally with IEC, ICEGATE & RCMC Setup",
    subtitle: "Direct DGFT & Customs Port Clearance in 24-48 Hours",
    description: "From 10-digit Import Export Code generation to bank AD Code linkage and EPC export benefits, we streamline your cross-border trade.",
    bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&auto=format&fit=crop&q=80",
    badge: "Lifetime IEC Validity",
    accent: "#fbbf24"
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectService,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSelectService(searchInput.trim());
    } else {
      onOpenSearch();
    }
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="hero-section"
      className="relative bg-slate-900 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-105'
            } transition-transform duration-7000 ease-out`}
          >
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dynamic Gradient Grid & Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07265D]/95 via-[#0B3D91]/90 to-[#07265D]/85"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-5">
            {/* Tag / Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F5A623] text-blue-950 shadow-sm">
                <Bot className="w-3 h-3" />
                {activeSlideData.tag}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-xs">
                <CheckCircle2 className="w-3 h-3 text-[#F5A623]" />
                {activeSlideData.badge}
              </span>
            </div>

            {/* Main Heading Text */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-black leading-tight tracking-tight uppercase">
              {activeSlideData.title}
            </h1>

            {/* Sub-line & Tagline */}
            <div className="space-y-1">
              <p className="text-sm sm:text-base text-amber-300 font-bold tracking-wide">
                {activeSlideData.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
                {activeSlideData.description}
              </p>
            </div>

            {/* Quick-Access Pills (4 exact requested buttons) */}
            <div className="pt-1">
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">
                Popular Quick Access:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  id="hero-pill-pvt-ltd"
                  onClick={() => onSelectService("Private Limited Company")}
                  className="px-3 py-1.5 bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 border border-white/20 rounded-md text-[11px] font-bold text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5 group"
                >
                  <span>Private Limited Company</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  id="hero-pill-fssai"
                  onClick={() => onSelectService("FSSAI Registration")}
                  className="px-3 py-1.5 bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 border border-white/20 rounded-md text-[11px] font-bold text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5 group"
                >
                  <span>FSSAI Registration</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  id="hero-pill-iec"
                  onClick={() => onSelectService("IEC Registration")}
                  className="px-3 py-1.5 bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 border border-white/20 rounded-md text-[11px] font-bold text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5 group"
                >
                  <span>IEC Registration</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  id="hero-pill-gst"
                  onClick={() => onSelectService("GST Registration")}
                  className="px-3 py-1.5 bg-white/10 hover:bg-[#F5A623] hover:text-blue-950 border border-white/20 rounded-md text-[11px] font-bold text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5 group"
                >
                  <span>GST Registration</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Quick Search Form */}
            <form onSubmit={handleSearchSubmit} className="pt-2 max-w-xl">
              <div className="relative flex items-center bg-white rounded-lg p-1 shadow-lg">
                <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
                <input
                  id="hero-search-input"
                  type="text"
                  placeholder="Type any service (e.g. MSME, Trademark, DSC, LLP, ISO)..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs text-slate-800 focus:outline-none placeholder:text-slate-400 font-medium"
                />
                <button
                  type="submit"
                  id="hero-search-submit"
                  className="bg-[#0B3D91] hover:bg-[#07265D] text-white text-[11px] font-black px-4 py-2 rounded-md transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3 h-3 text-[#F5A623]" />
                </button>
              </div>
            </form>

            {/* Carousel Navigation Arrows & Slide Indicators */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                <button
                  id="hero-carousel-prev"
                  onClick={prevSlide}
                  className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  id="hero-carousel-next"
                  onClick={nextSlide}
                  className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'w-6 bg-[#F5A623]' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Quick Consultation Box */}
          <div className="lg:col-span-4">
            <div className="bg-white/95 backdrop-blur-md text-slate-800 rounded-xl p-5 shadow-2xl border border-white/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[9px] font-black uppercase text-[#0B3D91] tracking-wider block">
                    AI FAST TRACK SYSTEM
                  </span>
                  <h3 className="text-sm font-black text-slate-900 leading-tight">
                    Instant Consultation Desk
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3D91]">
                  <Zap className="w-4 h-4 text-[#F5A623]" />
                </div>
              </div>

              {/* 3 Quick highlights */}
              <div className="space-y-2 text-[11px]">
                <div className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Same Day Processing:</strong> Instant name approval & DSC.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>CA & CS Team:</strong> Verified filings without queries.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Hidden Costs:</strong> Transparent government fees.</span>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-100 rounded-lg p-3 text-center">
                <p className="text-[10px] text-blue-900 font-bold uppercase">
                  Need Help Choosing The Right Entity?
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Talk to our Senior Legal Consultant in 10 minutes.
                </p>
                <button
                  id="hero-book-consult-btn"
                  onClick={onOpenConsultation}
                  className="mt-2.5 w-full bg-[#0B3D91] hover:bg-[#07265D] text-white text-xs font-black py-2.5 rounded-md shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Start Consultation Now</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  256-Bit SSL Encrypted
                </span>
                <span className="font-bold text-[#0B3D91]">
                  1 Lakh+ Happy Founders
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
