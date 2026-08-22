import React, { useEffect, useState, useRef } from 'react';
import { Users, Award, Briefcase, Globe2 } from 'lucide-react';

interface StatItem {
  id: string;
  label: string;
  subLabel: string;
  target: number;
  suffix: string;
  icon: React.ReactNode;
}

const STATS_DATA: StatItem[] = [
  {
    id: "happy-customers",
    label: "Happy Customers",
    subLabel: "Across 28 States & UTs",
    target: 100000,
    suffix: "+",
    icon: <Users className="w-6 h-6 text-[#F5A623]" />
  },
  {
    id: "certificates-issued",
    label: "Certificates Issued",
    subLabel: "MCA, GST, Trademark & ISO",
    target: 185000,
    suffix: "+",
    icon: <Award className="w-6 h-6 text-[#F5A623]" />
  },
  {
    id: "service-delivering",
    label: "Service Delivering",
    subLabel: "Single Window Filings",
    target: 85,
    suffix: "+",
    icon: <Briefcase className="w-6 h-6 text-[#F5A623]" />
  },
  {
    id: "countries-served",
    label: "Countries Served",
    subLabel: "UAE, USA, UK, SG, EU & More",
    target: 24,
    suffix: "+",
    icon: <Globe2 className="w-6 h-6 text-[#F5A623]" />
  }
];

export const StatsCounterSection: React.FC = () => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    "happy-customers": 0,
    "certificates-issued": 0,
    "service-delivering": 0,
    "countries-served": 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      // easeOutQuad curve
      const easeProgress = 1 - (1 - progress) * (1 - progress);

      const nextCounts: { [key: string]: number } = {};
      STATS_DATA.forEach((stat) => {
        nextCounts[stat.id] = Math.floor(stat.target * easeProgress);
      });

      setCounts(nextCounts);

      if (stepCount >= steps) {
        // finalize
        const finalCounts: { [key: string]: number } = {};
        STATS_DATA.forEach((stat) => {
          finalCounts[stat.id] = stat.target;
        });
        setCounts(finalCounts);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasTriggered]);

  const formatNumber = (val: number) => {
    return val.toLocaleString('en-IN');
  };

  return (
    <section 
      id="our-journey-in-numbers" 
      ref={sectionRef}
      className="py-14 bg-[#0B3D91] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#F5A623] bg-white/10 px-3 py-1 rounded-full border border-white/15">
            OUR IMPACT
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight mt-2 text-white">
            Our Journey in Numbers
          </h2>
          <p className="text-xs text-slate-200 mt-1">
            Empowering entrepreneurship and corporate governance across borders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-5 text-center flex flex-col items-center justify-center hover:bg-white/15 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-mono flex items-center justify-center">
                <span>{formatNumber(counts[stat.id] || 0)}</span>
                <span className="text-[#F5A623] ml-0.5">{stat.suffix}</span>
              </div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-200 mt-1">
                {stat.label}
              </h3>
              <p className="text-[10px] text-slate-300 mt-0.5 font-medium">
                {stat.subLabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
