import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Clock, 
  CheckCircle2, 
  Shield, 
  FileText, 
  SlidersHorizontal,
  ChevronRight,
  Zap
} from 'lucide-react';
import { ALL_SERVICES_LIST, ServiceItem } from '../data/servicesData';

interface ServicesShowcaseProps {
  onSelectServiceItem: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

const CATEGORIES = [
  { id: "all", label: "All Services (80+)" },
  { id: "Domestic", label: "Domestic" },
  { id: "International", label: "International" },
  { id: "Food Business", label: "Food Business" },
  { id: "Initial Registration", label: "Initial Registration" },
  { id: "Import Export", label: "Import Export" },
  { id: "GST & TAX", label: "GST & TAX" },
  { id: "Trademark", label: "Trademark" },
  { id: "ISO Standard", label: "ISO Standard" },
  { id: "NGO", label: "NGO" },
  { id: "Labour Department", label: "Labour Dept" },
  { id: "Government E-Marketplace", label: "GEM & Tenders" }
];

// Curated Unsplash images for the two-image hover effect
const SERVICE_IMAGES_A: Record<string, string> = {
  "pvt-ltd": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
  "llp": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=80",
  "opc": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=80",
  "sole-prop": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
  "partnership": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=80",
  "section-8": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?w=500&auto=format&fit=crop&q=80",
  "nidhi-company": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=80",
  "producer-company": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=80",
  "dubai-incorp": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=80",
  "singapore-incorp": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&auto=format&fit=crop&q=80",
  "usa-incorp": "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=500&auto=format&fit=crop&q=80",
  "uk-incorp": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=80",
  "fssai-reg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80",
  "fssai-state": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80",
  "fssai-central": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=80",
  "fssai-returns": "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=80",
  "shop-est": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=80",
  "epf-reg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
  "esi-reg": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80",
  "msme-reg": "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=80",
  "startup-india": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&auto=format&fit=crop&q=80",
  "dsc": "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=500&auto=format&fit=crop&q=80",
  "bis-reg": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80",
  "iec-reg": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&auto=format&fit=crop&q=80",
  "iec-renewal": "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=500&auto=format&fit=crop&q=80",
  "ad-code": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=80",
  "rcmc-apeda": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80",
  "rcmc-fieo": "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format&fit=crop&q=80",
  "epr-plastic": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&auto=format&fit=crop&q=80",
  "gst-reg": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80",
  "gst-return": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
  "itr-filing": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=500&auto=format&fit=crop&q=80",
  "pvt-ltd-compliance": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
  "tm-reg": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80",
  "tm-objection": "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=500&auto=format&fit=crop&q=80",
  "copyright-reg": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80",
  "iso-9001": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
  "iso-27001": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80",
  "iso-14001": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80",
  "gem-reg": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
  "gem-oem": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80",
};

const SERVICE_IMAGES_B: Record<string, string> = {
  "pvt-ltd": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
  "llp": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
  "opc": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=80",
  "sole-prop": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=80",
  "partnership": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=80",
  "section-8": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=80",
  "nidhi-company": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?w=500&auto=format&fit=crop&q=80",
  "producer-company": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=80",
  "dubai-incorp": "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=500&auto=format&fit=crop&q=80",
  "singapore-incorp": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&auto=format&fit=crop&q=80",
  "usa-incorp": "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format&fit=crop&q=80",
  "uk-incorp": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
  "fssai-reg": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=80",
  "fssai-state": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80",
  "fssai-central": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80",
  "fssai-returns": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=80",
  "shop-est": "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&auto=format&fit=crop&q=80",
  "epf-reg": "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=80",
  "esi-reg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80",
  "msme-reg": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=80",
  "startup-india": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
  "dsc": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80",
  "bis-reg": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
  "iec-reg": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=80",
  "iec-renewal": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&auto=format&fit=crop&q=80",
  "ad-code": "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=500&auto=format&fit=crop&q=80",
  "rcmc-apeda": "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format&fit=crop&q=80",
  "rcmc-fieo": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80",
  "epr-plastic": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80",
  "gst-reg": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
  "gst-return": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80",
  "itr-filing": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=80",
  "pvt-ltd-compliance": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=80",
  "tm-reg": "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=500&auto=format&fit=crop&q=80",
  "tm-objection": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80",
  "copyright-reg": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=500&auto=format&fit=crop&q=80",
  "iso-9001": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
  "iso-27001": "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=500&auto=format&fit=crop&q=80",
  "iso-14001": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&auto=format&fit=crop&q=80",
  "gem-reg": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80",
  "gem-oem": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectServiceItem,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = useMemo(() => {
    return ALL_SERVICES_LIST.filter((svc) => {
      const matchesCat =
        selectedCategory === "all" ||
        svc.category === selectedCategory ||
        svc.column.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesSearch =
        searchQuery === "" ||
        svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="our-services-showcase" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#F5A623]"></span>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0B3D91]">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight">
              India's Comprehensive Compliance Catalogue
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl mt-1">
              Filter through 80+ regulatory registrations, tax filings, intellectual property, and ISO standard certifications.
            </p>
          </div>

          {/* Quick Search inside Services */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="services-filter-search"
              type="text"
              placeholder="Search in catalogue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#0B3D91] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Sidebar: Vertical Category List */}
          <aside className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-3 shadow-xs space-y-1">
            <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                CATEGORIES
              </h3>
              <SlidersHorizontal className="w-3 h-3 text-slate-400" />
            </div>

            <div className="space-y-0.5 max-h-[520px] overflow-y-auto custom-scrollbar pr-1">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`sidebar-cat-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B3D91] text-white shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B3D91]'
                    }`}
                  >
                    <span className="truncate">{cat.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#F5A623]' : 'text-slate-300'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-lg p-3">
                <span className="text-[9px] font-bold text-[#F5A623] uppercase tracking-wider block">
                  Need Tailored Package?
                </span>
                <p className="text-[10px] text-slate-200 mt-0.5 leading-snug">
                  Get a custom compliance roadmap for your specific business niche.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="mt-2 w-full bg-[#F5A623] hover:bg-[#d98c12] text-blue-950 font-black text-[10px] py-1.5 rounded transition-colors"
                >
                  Request Roadmap
                </button>
              </div>
            </div>
          </aside>

          {/* Right Section: Horizontal Tabs + Responsive Grid of Cards */}
          <div className="lg:col-span-9 space-y-4">
            
            {/* Horizontal Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-[11px] font-bold">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`top-tab-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B3D91] text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0B3D91]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>Showing <strong>{filteredServices.length}</strong> services</span>
              <span className="flex items-center gap-1 text-[#0B3D91] font-semibold">
                <Zap className="w-3 h-3 text-[#F5A623]" />
                Hover card to preview certification workflow
              </span>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredServices.map((service) => {
                const imgA = SERVICE_IMAGES_A[service.id] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80";
                const imgB = SERVICE_IMAGES_B[service.id] || "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=80";

                return (
                  <div
                    key={service.id}
                    id={`service-card-${service.id}`}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-[#F5A623] hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
                    onClick={() => onSelectServiceItem(service)}
                  >
                    {/* Two-Image Hover Swap Container */}
                    <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                      {/* Image A (Default) */}
                      <img
                        src={imgA}
                        alt={service.name}
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
                      />
                      {/* Image B (On Hover) */}
                      <img
                        src={imgB}
                        alt={`${service.name} preview`}
                        className="w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 scale-105 group-hover:scale-100 transition-transform"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="bg-[#0B3D91] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                          {service.category}
                        </span>
                        {service.popular && (
                          <span className="bg-[#F5A623] text-blue-950 text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5">
                            <Sparkles className="w-2.5 h-2.5" />
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Timeline on bottom right of image */}
                      <div className="absolute bottom-2 right-2.5 flex items-center gap-1 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded">
                        <Clock className="w-2.5 h-2.5 text-[#F5A623]" />
                        <span>{service.timeline}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
                      <div>
                        <h4 className="text-xs font-black text-slate-800 leading-snug group-hover:text-[#0B3D91] transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* 2 Key Bullet benefits */}
                      <div className="space-y-1 pt-1 border-t border-slate-100">
                        {service.benefits.slice(0, 2).map((b, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-1.5 text-[9px] text-slate-600 truncate">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Card Footer / View More link */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-slate-400">
                          {service.documents.length} Docs Required
                        </span>
                        <button
                          id={`view-more-${service.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectServiceItem(service);
                          }}
                          className="text-[10px] font-black text-[#0B3D91] group-hover:text-[#F5A623] flex items-center gap-1 transition-colors cursor-pointer uppercase tracking-tight"
                        >
                          <span>View More</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8 space-y-3">
                <Search className="w-8 h-8 text-slate-300 mx-auto" />
                <h4 className="text-sm font-bold text-slate-700">No matching services found</h4>
                <p className="text-xs text-slate-500">
                  Try searching for another keyword like "GST", "FSSAI", "Private Ltd", "IEC", or "Trademark".
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="bg-[#0B3D91] text-white text-xs font-bold px-4 py-2 rounded-md"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
