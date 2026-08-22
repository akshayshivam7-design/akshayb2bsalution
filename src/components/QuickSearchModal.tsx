import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles, Clock, IndianRupee, ShieldCheck } from 'lucide-react';
import { ALL_SERVICES_LIST, ServiceItem } from '../data/servicesData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (name: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [
    'All',
    'Business Startup',
    'Registration & License',
    'Import & Export',
    'Tax & Compliance',
    'Trademark & IP',
    'ISO Certifications',
    'GEM Services'
  ];

  const results = ALL_SERVICES_LIST.filter((svc) => {
    const matchesSearch =
      searchTerm.trim() === '' ||
      svc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      svc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (svc.shortDesc && svc.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (svc.fullDesc && svc.fullDesc.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      activeCategory === 'All' ||
      svc.category.toLowerCase().includes(activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div
      id="quick-search-modal-backdrop"
      className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-20"
      onClick={onClose}
    >
      <div
        id="quick-search-modal-container"
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#0B3D91] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search across 80+ compliance services (e.g. Pvt Ltd, FSSAI, GST, IEC, Trademark, ISO 9001)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] font-bold text-slate-500 hover:text-slate-900 px-2 py-1 bg-slate-200 rounded"
          >
            ESC
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="p-3 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto custom-scrollbar bg-white text-[10px] font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0B3D91] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-3 space-y-2 bg-slate-50">
          {results.length === 0 ? (
            <div className="text-center py-10 space-y-2 text-slate-500">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs font-semibold">No services found matching "{searchTerm}"</p>
              <p className="text-[10px] text-slate-400">
                Try searching for "GST", "Private Limited", "FSSAI", "Trademark" or "DSC".
              </p>
            </div>
          ) : (
            results.map((svc) => (
              <div
                key={svc.id}
                onClick={() => {
                  onSelectService(svc.name);
                  onClose();
                }}
                className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#0B3D91] hover:shadow-xs transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-1 min-w-0 pr-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase text-[#0B3D91] bg-blue-50 px-1.5 py-0.2 rounded">
                      {svc.category}
                    </span>
                    <span className="text-[9px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-[#F5A623]" />
                      {svc.timeline || "3-5 Days"}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-[#0B3D91] transition-colors truncate">
                    {svc.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1">
                    {svc.shortDesc || svc.fullDesc}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0B3D91] group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-white border-t border-slate-200 text-center text-[10px] text-slate-400 flex items-center justify-between">
          <span>Showing {results.length} regulatory services</span>
          <span className="text-[#0B3D91] font-bold">Press Enter or click any item to view requirements</span>
        </div>
      </div>
    </div>
  );
};
