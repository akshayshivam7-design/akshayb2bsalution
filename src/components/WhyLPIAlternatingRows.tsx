import React from 'react';
import { 
  Bot, 
  Headphones, 
  FolderCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Users 
} from 'lucide-react';

interface WhyLPIAlternatingRowsProps {
  onOpenConsultation: () => void;
}

export const WhyLPIAlternatingRows: React.FC<WhyLPIAlternatingRowsProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="why-choose-lpi-highlights" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91] bg-blue-100/70 px-3 py-1 rounded-full">
            EXPERIENCE EXCELLENCE
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
            Why Akshay B2B Solutions is India's Choice
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Setting the benchmark for speed, precision, and technological disruption in legal compliance.
          </p>
        </div>

        {/* Row 1: Image Left, Text Right (Why Choose Us - AI Efficiency) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
                alt="AI-based compliance system"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#07265D]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-[#F5A623] text-blue-950 px-3 py-1 rounded-lg text-xs font-black uppercase shadow-xs">
                Speed & Accuracy
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-[#F5A623]" />
              01 • AI-BASED EFFICIENCY
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight">
              Why Choose Us: Next-Gen Automated Processing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Traditional compliance firms rely on slow manual paper exchanges. At Akshay B2B Solutions, our proprietary AI engine parses corporate charters, matches HSN/SAC codes, and conducts automated name scrutiny against existing trademarks and MCA databases in seconds.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>99.8% First-Pass Approval from Government Authorities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Time Wasted on Re-submissions and Legal Rejections</span>
              </div>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-2 text-xs font-black text-[#0B3D91] hover:text-[#F5A623] inline-flex items-center gap-1 transition-colors"
            >
              <span>Explore Our Tech Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Row 2: Text Left, Image Right (Reliable 24x7 Support) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-[#F5A623]" />
              02 • UNINTERRUPTED ASSISTANCE
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight">
              Reliable 24x7 Support & Dedicated Account Managers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We understand that startup founders and enterprise tax leads operate around the clock. Our omni-channel support desk connects you with practicing Company Secretaries and CAs via direct phone lines, live WhatsApp desk, and ticketing portals.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Under 15-Minute Response Time for Active Filings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single Point of Contact for All Regulatory Queries</span>
              </div>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-2 text-xs font-black text-[#0B3D91] hover:text-[#F5A623] inline-flex items-center gap-1 transition-colors"
            >
              <span>Connect with an Executive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80"
                alt="24x7 Customer Support Desk"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#07265D]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 right-3 bg-[#0B3D91] text-white px-3 py-1 rounded-lg text-xs font-black uppercase shadow-xs">
                Live Support Desk
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Image Left, Text Right (Where Compliance Meets Simplification) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80"
                alt="Document simplification and digital locker"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#07265D]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-[#F5A623] text-blue-950 px-3 py-1 rounded-lg text-xs font-black uppercase shadow-xs">
                Paperless & Painless
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
              <FolderCheck className="w-3.5 h-3.5 text-[#F5A623]" />
              03 • DIGITAL REVOLUTION
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight">
              Where Compliance Meets Simplification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No endless paperwork, notarization queues, or confusing government portals. Our automated digital locker keeps all your DIN numbers, Digital Signature Certificates, GST certificates, and Board Resolutions neatly organized and ready for bank audits anytime.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Encrypted Cloud Document Vault with 1-Click Export</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automated Annual Calendar with Proactive Warning Alarms</span>
              </div>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-2 text-xs font-black text-[#0B3D91] hover:text-[#F5A623] inline-flex items-center gap-1 transition-colors"
            >
              <span>See Digital Portal Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Row 4: Text Left, Image Right (Trusted by Thousands) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#F5A623]" />
              04 • NATIONWIDE TRUST
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight">
              Trusted by 1,00,000+ Clients & 2,000+ Five-Star Reviews
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From Kanpur to Bangalore, Delhi to Dubai, business leaders trust Akshay B2B Solutions to protect their corporate reputation. We maintain a verified 4.9/5 star rating across Google, Trustpilot, and AmbitionBox for unwavering professionalism.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span>4.9 / 5.0 Average Rating Across 4,800+ Verified Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0B3D91] shrink-0" />
                <span>Serving Micro Startups to Fortune 500 Subcontractors</span>
              </div>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-2 text-xs font-black text-[#0B3D91] hover:text-[#F5A623] inline-flex items-center gap-1 transition-colors"
            >
              <span>Join 1 Lakh+ Founders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
                alt="Client handshake and corporate success"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#07265D]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 right-3 bg-[#F5A623] text-blue-950 px-3 py-1 rounded-lg text-xs font-black uppercase shadow-xs">
                100,000+ Happy Clients
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
