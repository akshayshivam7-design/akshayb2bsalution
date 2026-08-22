import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Quote, ExternalLink } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Rajesh Khandelwal",
    company: "NexGen Agro Foods Pvt Ltd, Kanpur",
    service: "Private Limited & FSSAI Central License",
    rating: 5,
    date: "14 Aug 2026",
    comment: "Akshay B2B Solutions incorporated our food processing company and secured the FSSAI Central License within record time. Their AI document scrutiny caught missing water lab reports upfront, saving us weeks of back and forth with authorities."
  },
  {
    id: 2,
    name: "Dr. Ananya Sen",
    company: "Sen BioPharma Innovations LLP, Hyderabad",
    service: "LLP Incorporation & Trademark Registration",
    rating: 5,
    date: "08 Aug 2026",
    comment: "We filed for three trademark classes and LLP registration. The attorneys provided a comprehensive search report and drafted our user affidavit impeccably. We received our ™ application number in under 24 hours. Highly recommended!"
  },
  {
    id: 3,
    name: "Mohit Singhania",
    company: "Singhania Overseas Global, Mumbai",
    service: "IEC Registration, ICEGATE & APEDA RCMC",
    rating: 5,
    date: "01 Aug 2026",
    comment: "Seamless export documentation! Got our Import Export Code, AD Code port registration at Nhava Sheva and APEDA membership handled smoothly by their expert trade desk."
  },
  {
    id: 4,
    name: "Gaurav Malhotra",
    company: "CloudScale Software Technologies, Bengaluru",
    service: "Startup India 80-IAC & ISO 27001",
    rating: 5,
    date: "25 Jul 2026",
    comment: "Their team helped us with DPIIT startup recognition and successfully guided our ISO 27001 ISMS certification audit. Top-notch professionalism and very transparent pricing."
  }
];

export const CustomerReviewsSection: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);

  const platforms = [
    {
      name: "Google Reviews",
      rating: "4.9 / 5.0",
      reviewsCount: "4,820+ Verified Reviews",
      badgeColor: "bg-blue-50 border-blue-200 text-[#0B3D91]",
      url: "https://google.com"
    },
    {
      name: "Trustpilot",
      rating: "4.8 / 5.0",
      reviewsCount: "2,150+ Reviews (Excellent)",
      badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-800",
      url: "https://trustpilot.com"
    },
    {
      name: "AmbitionBox",
      rating: "4.9 / 5.0",
      reviewsCount: "980+ Employee & Client Ratings",
      badgeColor: "bg-amber-50 border-amber-200 text-amber-900",
      url: "https://ambitionbox.com"
    }
  ];

  return (
    <section id="customer-reviews-section" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91] bg-blue-100/70 px-3 py-1 rounded-full">
            REAL CLIENT EXPERIENCES
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
            Verified Customer Reviews & Ratings
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            See what founders, directors, and corporate leaders say about our compliance services.
          </p>
        </div>

        {/* 3 Clickable Review-Platform Badge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {platforms.map((plat, idx) => (
            <a
              key={idx}
              id={`review-badge-${idx}`}
              href={plat.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-xl border ${plat.badgeColor} hover:shadow-md transition-all flex items-center justify-between group cursor-pointer bg-white`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-tight">
                  {plat.name}
                </h3>
                <p className="text-[10px] font-bold text-slate-500">
                  {plat.rating} • {plat.reviewsCount}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#0B3D91] transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Customer Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              id={`testimonial-card-${rev.id}`}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between hover:border-[#0B3D91] hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium">{rev.date}</span>
                </div>
                <span className="text-[9px] font-black uppercase text-[#0B3D91] bg-blue-50 px-2 py-0.5 rounded block mb-2 truncate">
                  {rev.service}
                </span>
                <p className="text-[11px] text-slate-600 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#0B3D91] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-black text-slate-900 truncate">
                    {rev.name}
                  </h4>
                  <p className="text-[9px] text-slate-400 font-medium truncate">
                    {rev.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
