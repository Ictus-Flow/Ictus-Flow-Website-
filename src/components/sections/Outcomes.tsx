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
    <section id="outcomes" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black tracking-widest uppercase text-sm mb-3">
              TANGIBLE RESULTS
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Measuring What Matters
            </h3>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
              Typical time savings when AI is implemented properly
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <RevealOnScroll key={idx} className={`delay-[${idx * 100}ms]`}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${stat.color} shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-black text-white mb-2" ref={stat.ref}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">
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
