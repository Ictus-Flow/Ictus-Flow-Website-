'use client';

import { FileText, AlertTriangle, FileCheck, PoundSterling } from 'lucide-react';
import { useCounter } from '@/lib/hooks/useCounter';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import type { Stat } from '@/types';

export const Outcomes = () => {
  const { count: proposal, ref: refProposal } = useCounter(70);
  const { count: ramsReview, ref: refRamsReview } = useCounter(50);
  const { count: ramsCreation, ref: refRamsCreation } = useCounter(75);
  const { count: payroll, ref: refPayroll } = useCounter(90);

  const stats: (Omit<Stat, 'value'> & { value: number; ref: React.RefObject<HTMLDivElement> })[] = [
    {
      label: "Proposal Writing",
      value: proposal,
      ref: refProposal,
      suffix: "%",
      icon: FileText,
      color: "from-teal-500 to-cyan-500"
    },
    {
      label: "RAMS Reviews",
      value: ramsReview,
      ref: refRamsReview,
      suffix: "%",
      icon: AlertTriangle,
      color: "from-emerald-500 to-teal-500"
    },
    {
      label: "Site Specific RAMS",
      value: ramsCreation,
      ref: refRamsCreation,
      suffix: "%",
      icon: FileCheck,
      color: "from-emerald-500 to-teal-500"
    },
    {
      label: "Payroll Processing",
      value: payroll,
      ref: refPayroll,
      suffix: "%",
      icon: PoundSterling,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="outcomes" className="py-12 sm:py-16 md:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              TANGIBLE RESULTS
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Measuring What Matters
            </h3>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Typical time savings when AI is implemented properly
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <RevealOnScroll key={idx} className={`delay-[${idx * 100}ms]`}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br ${stat.color} shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all`}
                >
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1 sm:mb-2" ref={stat.ref}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-wide text-xs sm:text-sm">
                  {stat.label}
                </div>
                <div className="text-slate-500 text-xs mt-1">
                  Time Saved
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
