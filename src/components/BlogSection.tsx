import React, { useState } from 'react';
import { BookOpen, User, Calendar, Clock, ArrowRight, Sparkles, ChevronRight, X, Share2, Bookmark } from 'lucide-react';
import { BLOG_POSTS } from '../data/servicesData';

interface BlogSectionProps {
  onOpenConsultation: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenConsultation }) => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Startup Strategy", "Taxation & GST", "Trademark & IP", "Government Schemes", "Import Export", "ISO Standards", "Corporate Law"];

  const filteredPosts = BLOG_POSTS.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <section id="latest-tips-trends-blog" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0B3D91] bg-blue-100/70 px-3 py-1 rounded-full">
            KNOWLEDGE BASE & ADVISORY
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
            Discover expert advice, style inspiration, and product updates on our blog
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Authored by practicing Chartered Accountants, Trademark Attorneys, and Corporate Law Specialists.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-4 custom-scrollbar text-[11px] font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0B3D91] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0B3D91]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#0B3D91] transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0B3D91] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                    {post.category}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-[#F5A623]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#0B3D91]" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#0B3D91] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-4 pb-3.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#F5A623] uppercase">Legal Guide</span>
                <button
                  id={`read-more-btn-${post.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                  className="text-[11px] font-black text-[#0B3D91] group-hover:text-[#F5A623] flex items-center gap-1 transition-colors uppercase tracking-tight cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All / Pagination Button */}
        {visibleCount < filteredPosts.length && (
          <div className="text-center pt-8">
            <button
              id="blog-view-all-btn"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-[#0B3D91] hover:bg-[#07265D] text-white text-xs font-black px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>View More Articles ({filteredPosts.length - visibleCount} Remaining)</span>
              <ChevronRight className="w-4 h-4 text-[#F5A623]" />
            </button>
          </div>
        )}

      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div 
          id="blog-reader-modal"
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto custom-scrollbar shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase text-[#0B3D91] bg-blue-50 px-2.5 py-1 rounded">
                {selectedPost.category}
              </span>

              <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-slate-100 py-2">
                <span className="font-bold text-slate-800">By {selectedPost.author}</span>
                <span>Published: {selectedPost.date}</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div className="h-56 w-full rounded-xl overflow-hidden">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              <div className="prose prose-sm text-slate-700 text-xs sm:text-sm space-y-3 leading-relaxed">
                <p className="font-semibold text-slate-800 text-sm">
                  {selectedPost.excerpt}
                </p>
                <p>
                  Compliance in India is evolving at breakneck speed. The Ministry of Corporate Affairs (MCA), Goods and Services Tax Network (GSTN), and Directorate General of Foreign Trade (DGFT) have rolled out enhanced digital verification workflows.
                </p>
                <h4 className="text-xs font-black text-slate-900 uppercase">Key Legal Recommendations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Always verify director KYC (DIR-3 KYC) before statutory deadlines.</li>
                  <li>Ensure HSN/SAC codes in GST match invoice descriptions exactly to prevent ITC blocks.</li>
                  <li>Maintain an organized digital locker for board resolutions, shareholder rosters, and statutory audit notes.</li>
                  <li>File trademark applications under relevant Nice Classification classes with detailed user affidavits.</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Need professional assistance on this topic?</span>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenConsultation();
                  }}
                  className="bg-[#0B3D91] hover:bg-[#07265D] text-white text-xs font-black px-4 py-2 rounded-lg"
                >
                  Consult an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
