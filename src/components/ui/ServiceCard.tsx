'use client';

import { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import type { ServiceOffering } from '@/types';

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  items,
  colorClass,
  borderClass,
  shadowColor
}: ServiceOffering) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="group h-[450px] w-full cursor-pointer relative"
      onClick={() => setIsActive(!isActive)}
    >
      {/* FRONT FACE */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive
            ? 'opacity-0 blur-xl scale-90 pointer-events-none'
            : 'opacity-100 blur-0 scale-100 z-10'
        }`}
      >
        <div
          className={`h-full w-full bg-slate-900/60 backdrop-blur-xl border ${borderClass} rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(var(--shadow-color),0.5)] ring-1 ring-white/5`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-30 rounded-3xl`}
          ></div>
          <div
            className={`absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br ${colorClass} blur-[60px] rounded-full opacity-40`}
          ></div>

          <div
            className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-10 relative z-10 ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden shadow-[0_0_30px_${shadowColor}_inset]`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-80 blur-xl transform scale-150`}
            ></div>
            <Icon className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          </div>

          <h3 className="text-3xl font-bold text-white relative z-10 mb-6 drop-shadow-md">
            {title}
          </h3>

          <div className="mt-auto relative z-10 flex items-center text-slate-300 text-sm font-bold tracking-widest uppercase animate-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Tap to Materialize
          </div>
        </div>
      </div>

      {/* BACK FACE */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive
            ? 'opacity-100 blur-0 scale-100 z-20'
            : 'opacity-0 blur-xl scale-110 pointer-events-none'
        }`}
      >
        <div
          className={`h-full w-full bg-slate-950/80 backdrop-blur-2xl border ${borderClass} rounded-3xl p-8 flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden relative`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-20`}
          ></div>

          <div className="flex items-center mb-6 border-b border-white/10 pb-4 relative z-10">
            <Icon className="w-6 h-6 text-white mr-3" />
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>

          <p className="text-slate-200 mb-6 leading-relaxed text-sm relative z-10 font-medium drop-shadow-sm">
            {description}
          </p>

          <ul className="space-y-3 relative z-10">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start text-slate-200 text-sm">
                <CheckCircle2
                  className={`w-5 h-5 mr-3 shrink-0 text-white drop-shadow-[0_0_5px_${shadowColor}]`}
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-4 text-center relative z-10">
            <span className="text-xs text-slate-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3" />
              Tap to Dissolve
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
