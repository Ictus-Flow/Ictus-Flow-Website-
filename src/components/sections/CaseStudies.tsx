'use client';

import Link from 'next/link';
import { useCounter } from '@/lib/hooks/useCounter';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { ArrowRight } from 'lucide-react';

export const CaseStudies = () => {
  const { count, ref } = useCounter(6);

  const featuredCase = {
    client: "Ictus Flow",
    title: "Ictus Blocker App",
    resultVal: count,
    resultSuffix: " Weeks to Production",
    desc: "From concept to production-ready construction intelligence platform. Capturing real-time operational data to identify patterns and optimise project flow.",
    gradient: "from-purple-600 to-indigo-600",
    border: "hover:border-purple-500/50",
    link: "/case-studies/ictus-blocker-app",
    ref: ref
  };

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-24 bg-slate-950 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-emerald-900/10 blur-[80px] sm:blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black tracking-widest uppercase text-xs sm:text-sm">
              CASE STUDY
            </h2>
          </div>
        </RevealOnScroll>

        {/* Featured Case Study - Full Width */}
        <RevealOnScroll>
          <Link href={featuredCase.link} className="block group">
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/20 ${featuredCase.border} transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`}
            >
              <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${featuredCase.gradient} w-full opacity-80`}></div>

              <div className="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block py-1 px-2 sm:px-3 rounded bg-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-300 border border-purple-500/30">
                      Featured
                    </span>
                    <span className="inline-block py-1 px-2 sm:px-3 rounded bg-black/30 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {featuredCase.client}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all mb-2">
                    {featuredCase.title}
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed group-hover:text-white font-medium">
                    {featuredCase.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-center md:text-right">
                    <p
                      ref={featuredCase.ref}
                      className={`bg-gradient-to-r ${featuredCase.gradient} bg-clip-text text-transparent font-black text-3xl sm:text-4xl`}
                    >
                      {featuredCase.resultVal}
                      {featuredCase.resultSuffix}
                    </p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
};
