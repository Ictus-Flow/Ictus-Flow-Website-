'use client';

import Image from 'next/image';
import { useCounter } from '@/lib/hooks/useCounter';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const CaseStudies = () => {
  const { count: count1, ref: ref1 } = useCounter(60);
  const { count: count2, ref: ref2 } = useCounter(90);
  const { count: count3, ref: ref3 } = useCounter(2);

  const cases = [
    {
      client: "Regional Construction Firm",
      title: "Automated RAMS Analysis",
      resultVal: count1,
      resultSuffix: "% Faster Compliance",
      desc: "Implemented an AI scanning tool to review 50+ RAMS documents weekly, highlighting safety gaps instantly.",
      theme: "blue",
      gradient: "from-blue-600 to-cyan-500",
      border: "hover:border-blue-500/50",
      shadow: "hover:shadow-blue-500/20",
      image: "/images/construction-planning.png",
      imageAlt: "Construction project planning meeting with safety equipment",
      ref: ref1
    },
    {
      client: "SME Contractor",
      title: "Voice Site Diaries",
      resultVal: count2,
      resultSuffix: "% Admin Reduction",
      desc: "Site managers switched from typing to voice logs. Daily reporting compliance went from 40% to 100%.",
      theme: "amber",
      gradient: "from-amber-600 to-red-600",
      border: "hover:border-amber-500/50",
      shadow: "hover:shadow-amber-500/20",
      image: "/images/modern-office.png",
      imageAlt: "Modern office workspace with technology",
      ref: ref2
    },
    {
      client: "Fit-out Specialist",
      title: "CVI Automation",
      resultVal: count3,
      resultSuffix: "hrs Saved / Week",
      desc: "Verbal instructions on site captured via voice and auto-emailed as formal CVI documents to clients.",
      theme: "green",
      gradient: "from-emerald-600 to-teal-600",
      border: "hover:border-emerald-500/50",
      shadow: "hover:shadow-emerald-500/20",
      image: "/images/spiral-staircase.png",
      imageAlt: "Modern architectural spiral staircase detail",
      ref: ref3
    }
  ];

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-24 bg-slate-950 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-emerald-900/10 blur-[80px] sm:blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black tracking-widest uppercase text-xs sm:text-sm mb-2">
              CASE STUDIES
            </h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Proven Impact</h3>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cases.map((study, idx) => (
            <RevealOnScroll key={idx} className={`delay-[${idx * 150}ms]`}>
              <div
                className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 flex flex-col group ${study.border} transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`}
              >
                <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${study.gradient} w-full opacity-80`}></div>

                {/* Case Study Image */}
                <div className="relative h-36 sm:h-40 md:h-48 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent`}></div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col relative -mt-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}
                  ></div>

                  <div className="mb-4 sm:mb-6">
                    <span className="inline-block py-1 px-2 sm:px-3 rounded bg-black/30 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors mb-2 sm:mb-3 backdrop-blur-md">
                      {study.client}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                      {study.title}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm mb-6 sm:mb-8 flex-1 leading-relaxed group-hover:text-white font-medium relative z-10">
                    {study.desc}
                  </p>
                  <div className="pt-4 sm:pt-6 border-t border-white/10 group-hover:border-white/20 relative z-10">
                    <p
                      ref={study.ref}
                      className={`bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent font-black text-2xl sm:text-3xl opacity-90`}
                    >
                      {study.resultVal}
                      {study.resultSuffix}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
