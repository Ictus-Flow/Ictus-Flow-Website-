import Image from 'next/image';
import { Cpu, BarChart3, ShieldCheck, Map, Beaker, Rocket } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { ServiceCard } from '../ui/ServiceCard';
import type { ServiceOffering } from '@/types';

const offerings: ServiceOffering[] = [
  {
    icon: Cpu,
    title: "Introduction to AI",
    colorClass: "from-emerald-400 to-teal-500",
    shadowColor: "rgba(16,185,129,0.6)",
    borderClass: "border-emerald-400/40 hover:border-emerald-300/70",
    description:
      "Demystifying artificial intelligence for your leadership and site teams. We cut through the jargon to explain what tools actually work on-site.",
    items: ["SME Briefings", "LLM Fundamentals", "Tool Selection Workshops"]
  },
  {
    icon: BarChart3,
    title: "AI Strategy Review",
    colorClass: "from-emerald-500 to-teal-600",
    shadowColor: "rgba(16,185,129,0.5)",
    borderClass: "border-emerald-500/35 hover:border-emerald-400/60",
    description:
      "We audit your current workflows to identify where AI can eliminate paperwork and deliver the highest ROI.",
    items: ["Workflow Audit", "Admin Cost Analysis", "Recommendation of most efficient AI resources to suit your company"]
  },
  {
    icon: ShieldCheck,
    title: "AI Governance",
    colorClass: "from-emerald-600 to-teal-700",
    shadowColor: "rgba(16,185,129,0.4)",
    borderClass: "border-emerald-500/30 hover:border-emerald-400/50",
    description:
      "Ensuring your use of AI for RAMS and contracts is compliant and secure. We build frameworks that protect your liability.",
    items: ["Data Privacy", "Liability Frameworks", "Human-in-the-loop Protocols"]
  },
  {
    icon: Map,
    title: "AI Blueprinting",
    colorClass: "from-teal-600 to-emerald-700",
    shadowColor: "rgba(20,184,166,0.35)",
    borderClass: "border-teal-500/25 hover:border-teal-400/45",
    description:
      "Developing the technical roadmap to integrate Voice capture and analysis tools into your existing Project Management software.",
    items: ["Tech Stack Selection", "Integration Planning", "Resource Allocation"]
  },
  {
    icon: Beaker,
    title: "Pilot Implementation",
    colorClass: "from-teal-700 to-emerald-800",
    shadowColor: "rgba(20,184,166,0.3)",
    borderClass: "border-teal-600/20 hover:border-teal-500/40",
    description:
      "Low-risk pilots on single sites to validate time-savings from agreed and implemented AI tools before company-wide rollout.",
    items: ["Single-Site Trial", "Agile Deployment", "Metric Validation"]
  },
  {
    icon: Rocket,
    title: "Full Implementation",
    colorClass: "from-teal-800 to-emerald-900",
    shadowColor: "rgba(20,184,166,0.25)",
    borderClass: "border-teal-700/15 hover:border-teal-600/35",
    description:
      "Scaling successful pilots across all projects. Training managers to use the AI tools effectively.",
    items: ["Company-wide Rollout", "Staff Training", "Support & Monitoring"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/modern-office.png"
          alt="Modern office workspace"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950"></div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-900/25 blur-[150px] rounded-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-900/25 blur-[150px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-black tracking-widest uppercase text-sm mb-3">
              OUR EXPERTISE
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              End-to-End AI Consultancy
            </h3>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto font-light">
              From the first workshop to the final site deployment, we guide your firm through the
              transition to <span className="text-white font-medium">intelligent operations</span>.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <RevealOnScroll key={index} className={`delay-[${index * 100}ms]`}>
              <ServiceCard {...offer} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
