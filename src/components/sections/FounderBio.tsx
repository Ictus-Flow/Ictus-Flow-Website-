import { Briefcase, TrendingUp, Award, Users2 } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const highlights = [
  {
    icon: Briefcase,
    stat: '35+',
    label: 'Years Experience',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    stat: '£200m',
    label: 'Portfolio Value',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Award,
    stat: 'Director',
    label: 'Construction Director',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Users2,
    stat: 'MoJ, NHS, HSBC',
    label: 'Major Clients',
    color: 'from-amber-500 to-orange-500'
  }
];

export const FounderBio = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-slate-950 to-teal-950/20 z-0"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black tracking-widest uppercase text-sm mb-3">
              BRIDGING CONSTRUCTION & AI
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From the Tools to the Technology
            </h3>
          </div>
        </RevealOnScroll>

        {/* Bio Content */}
        <RevealOnScroll className="delay-100">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mb-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-200 leading-relaxed mb-6 text-lg">
                We bridge the gap between traditional construction leadership and the future of artificial
                intelligence. With over <span className="text-white font-bold">35 years of industry experience</span>—rising
                from the tools to <span className="text-white font-bold">Construction Director</span>—we don&apos;t just
                understand the technology; we understand the site, the contract, and the commercial reality.
              </p>
              <p className="text-slate-200 leading-relaxed text-lg">
                Having delivered portfolios worth up to <span className="text-white font-bold">£200m</span> and
                led complex projects for clients like the <span className="text-white font-bold">MoJ, NHS, and HSBC</span>,
                we know the unique pressures construction firms face. We leverage this deep operational expertise to help
                companies implement practical AI solutions that reduce risk, optimise margins, and streamline delivery. We
                don&apos;t sell hype; we use data and digital innovation to solve the hard problems we spent over three
                decades managing.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Highlights Grid */}
        <RevealOnScroll className="delay-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-black text-white mb-1">{item.stat}</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
