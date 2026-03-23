'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Upload,
  Briefcase,
  Calculator,
  ClipboardList,
  Scale,
  FolderOpen,
  PenTool,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  FileText,
  Loader2
} from 'lucide-react';

// Dummy data for the demo
const tenderData = {
  filename: 'Riverside Academy — New Teaching Block — Tender Pack.pdf',
  filesize: '4.2MB',
};

const agentRoles = [
  { id: 'director', name: 'Director', icon: Briefcase, color: 'bg-slate-700', processingText: 'Reading tender document...', delay: 0 },
  { id: 'senior-estimator', name: 'Senior Estimator', icon: Calculator, color: 'bg-amber-600', processingText: 'Analysing scope and pricing...', delay: 800 },
  { id: 'junior-estimator', name: 'Junior Estimator', icon: ClipboardList, color: 'bg-blue-600', processingText: 'Drafting RFP schedule...', delay: 1600 },
  { id: 'procurement', name: 'Procurement', icon: Scale, color: 'bg-emerald-600', processingText: 'Reviewing contract terms...', delay: 2400 },
  { id: 'administrator', name: 'Administrator', icon: FolderOpen, color: 'bg-purple-600', processingText: 'Building document register...', delay: 3200 },
  { id: 'bid-writer', name: 'Bid Writer', icon: PenTool, color: 'bg-orange-600', processingText: 'Preparing bid strategy...', delay: 4000 },
];

const outputs = {
  director: `Strategic Summary — Riverside Academy New Teaching Block

Recommendation: PURSUE — Strong fit for current portfolio
Client: Ormiston Academies Trust (repeat DfE framework client)
Value: £4.2m (estimated)
Programme: 18 months, phased to maintain school access
Key Drivers: Programme certainty, minimal disruption to teaching, DfE compliance
Competition: Likely 4-5 bidders on DfE framework
Win Themes: Previous academy experience, phased delivery expertise, local supply chain
Risk Level: MEDIUM — asbestos survey incomplete, planning condition 7 unresolved`,

  'senior-estimator': `Scope Analysis

Structure: Steel frame with precast planks, 2-storey, ~2,400m²
Envelope: Brick/render composite, aluminium windows, standing seam roof
M&E: Full mechanical ventilation (BB101 compliant), LV distribution, fire alarm/detection, data/comms
External: New car park (42 spaces), landscaping, drainage attenuation (SuDS)
Provisional Sums: £180,000 (FFE), £95,000 (ICT), £45,000 (external signage)
Pricing Risk Areas:
  - Ground conditions: no SI report included — CRITICAL gap
  - Asbestos: R&D survey only, no management survey for demolition areas
  - M&E: BB101 ventilation rates will drive plant size — confirm with M&E designer`,

  'junior-estimator': [
    { ref: 'RFI-001', priority: 'CRITICAL', question: 'Site Investigation report not included — required for foundation design', addressee: 'Architect', impact: '3 weeks if delayed' },
    { ref: 'RFI-002', priority: 'CRITICAL', question: 'Asbestos management survey required for demolition scope', addressee: 'Client', impact: '2 weeks + ASB5 notification' },
    { ref: 'RFI-003', priority: 'HIGH', question: 'BB101 ventilation design data — confirm air change rates', addressee: 'M&E Consultant', impact: 'Affects plant sizing and roof layout' },
    { ref: 'RFI-004', priority: 'HIGH', question: 'Planning condition 7 (highways) — status of discharge application', addressee: 'Planning Consultant', impact: 'Could delay start on site' },
    { ref: 'RFI-005', priority: 'STANDARD', question: 'FFE provisional sum — confirm scope and specification', addressee: 'Client', impact: 'Pricing only' },
    { ref: 'RFI-006', priority: 'STANDARD', question: 'External signage — confirm locations and power requirements', addressee: 'Architect', impact: 'Pricing only' },
  ],

  procurement: `Contract Review — Key Findings

Contract Form: JCT Design & Build 2024 (Amended)
Amendments identified: 14 (3 HIGH RISK)

HIGH RISK:
  ⚠ Clause 2.17.1 amended — Contractor bears risk of unforeseen ground conditions (standard position reversed)
  ⚠ Liquidated damages: £5,000/week (high for contract value — negotiate)
  ⚠ Retention: 5% to PC, 2.5% to end of DLP (24 months — excessive, request 12)

Payment Terms: Monthly valuations, 21-day payment cycle
Insurance: Contractor all-risks + PI required (£5m minimum — check current cover)
Bonds: 10% performance bond required
Design Responsibility: Partial — M&E and structural connections`,

  'bid-writer': `Methodology — Phased Delivery Strategy

Our approach to the Riverside Academy project is built around one principle: the school stays open. We will deliver the new teaching block in two distinct phases, with a temporary access route maintained throughout to ensure zero disruption to the existing school operation.

Phase 1 (Weeks 1–8): Site establishment, demolition of existing single-storey block, and foundations. Hoarding line set back 15m from the main school entrance. Deliveries restricted to 07:00–08:15 and 15:45–18:00 to avoid pupil arrival/departure.

Phase 2 (Weeks 9–38): Superstructure, envelope, and fit-out. Tower crane positioned to the north-east to avoid oversail of occupied buildings...`,
};

const chatMessages = [
  {
    role: 'user',
    content: 'What are the three biggest risks in this tender?',
  },
  {
    role: 'assistant',
    content: `Based on my analysis: (1) Ground conditions — no SI report means you're pricing blind on foundations. The amended clause 2.17.1 puts that risk entirely on you. Budget a £75k contingency or make the bid conditional on SI results. (2) Asbestos — the R&D survey is insufficient for the demolition scope. You need a management survey before you can price the strip-out, and an ASB5 notification adds a minimum 14-day lead time. (3) The 24-month DLP with 2.5% retention ties up ~£105k for two years post-completion. Negotiate to 12 months — that's standard.`,
  },
];

function useInView(ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}

function AgentCard({ agent, isProcessing, isComplete }: { agent: typeof agentRoles[0]; isProcessing: boolean; isComplete: boolean }) {
  const Icon = agent.icon;

  return (
    <div className={`rounded-xl border p-4 transition-all duration-500 ${
      isComplete
        ? 'border-emerald-500/50 bg-emerald-500/10'
        : isProcessing
          ? 'border-amber-500/50 bg-amber-500/10 animate-pulse'
          : 'border-slate-700/50 bg-slate-900/50'
    }`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg ${agent.color} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{agent.name}</div>
          <div className="text-xs text-slate-400">
            {isComplete ? (
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Complete
              </span>
            ) : isProcessing ? (
              <span className="text-amber-400 flex items-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin" /> Processing...
              </span>
            ) : (
              'Waiting...'
            )}
          </div>
        </div>
      </div>
      {isProcessing && (
        <div className="text-xs text-slate-400 mt-2">{agent.processingText}</div>
      )}
    </div>
  );
}

export default function PreconAIDemoPage() {
  const [activeTab, setActiveTab] = useState('director');
  const [processingStage, setProcessingStage] = useState(-1);
  const [showOutputs, setShowOutputs] = useState(false);
  const processingRef = useRef<HTMLDivElement>(null);
  const isProcessingInView = useInView(processingRef, { threshold: 0.3 });

  useEffect(() => {
    if (isProcessingInView && processingStage === -1) {
      setProcessingStage(0);

      // Animate through each agent
      agentRoles.forEach((_, index) => {
        setTimeout(() => {
          setProcessingStage(index + 1);
        }, (index + 1) * 1000);
      });

      // Show outputs after all complete
      setTimeout(() => {
        setShowOutputs(true);
      }, agentRoles.length * 1000 + 500);
    }
  }, [isProcessingInView, processingStage]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'HIGH': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/products/preconai" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to PreconAI
          </Link>
          <span className="text-amber-400 font-semibold">Interactive Demo</span>
          <Link
            href="/products/preconai"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium
              hover:from-amber-600 hover:to-orange-700 transition-all"
          >
            Try PreconAI
          </Link>
        </div>
      </header>

      {/* Section 1: Upload Mockup */}
      <section className="py-16 sm:py-24 border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See PreconAI in Action
            </h1>
            <p className="text-slate-400">
              Watch how six AI agents analyse a tender document simultaneously
            </p>
          </div>

          {/* Upload Zone Mockup */}
          <div className="rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/50 p-8 text-center">
            <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-amber-400" />
              <div className="text-left">
                <div className="text-white font-medium">{tenderData.filename}</div>
                <div className="text-slate-400 text-sm">{tenderData.filesize}</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold">
              <Loader2 className="w-4 h-4 animate-spin" />
              Analysing...
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Processing Animation */}
      <section ref={processingRef} className="py-16 sm:py-24 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Six AI Agents Working Simultaneously
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {agentRoles.map((agent, index) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                isProcessing={processingStage === index}
                isComplete={processingStage > index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sample Outputs */}
      {showOutputs && (
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Analysis Results</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800/50 pb-4">
              {agentRoles.map((agent) => {
                const Icon = agent.icon;
                return (
                  <button
                    key={agent.id}
                    onClick={() => setActiveTab(agent.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === agent.id
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {agent.name}
                  </button>
                );
              })}
            </div>

            {/* Output Content */}
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6">
              {activeTab === 'junior-estimator' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Ref</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Priority</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Question</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Addressee</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Programme Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {outputs['junior-estimator'].map((rfi) => (
                        <tr key={rfi.ref} className="border-b border-slate-800/30">
                          <td className="py-3 px-4 text-white font-mono">{rfi.ref}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(rfi.priority)}`}>
                              {rfi.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-300">{rfi.question}</td>
                          <td className="py-3 px-4 text-slate-400">{rfi.addressee}</td>
                          <td className="py-3 px-4 text-slate-400">{rfi.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {outputs[activeTab as keyof typeof outputs] as string}
                </pre>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Bid Writer Chat Preview */}
      {showOutputs && (
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-amber-400" />
              Interactive Bid Writer Chat
            </h2>

            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 overflow-hidden">
              <div className="p-4 border-b border-slate-800/50 bg-slate-800/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                    <PenTool className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Bid Writer Agent</span>
                  <span className="text-xs text-slate-400 ml-2">Full tender context loaded</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-xl p-4 ${
                      msg.role === 'user'
                        ? 'bg-amber-500/20 text-amber-100'
                        : 'bg-slate-800/50 text-slate-300'
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Blurred preview */}
                <div className="relative">
                  <div className="flex justify-end mb-4">
                    <div className="max-w-[80%] rounded-xl p-4 bg-amber-500/20 text-amber-100">
                      <p className="text-sm">Draft an executive summary for the bid submission</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-xl p-4 bg-slate-800/50">
                      <p className="text-sm text-slate-300 blur-sm select-none">
                        Here&apos;s a draft executive summary for your bid submission to Ormiston Academies Trust
                        for the Riverside Academy New Teaching Block project. This summary emphasises your
                        phased delivery expertise and commitment to minimal disruption...
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950 via-transparent to-transparent">
                    <Link
                      href="/products/preconai"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold
                        hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25
                        flex items-center gap-2"
                    >
                      Try PreconAI
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to analyse your next tender?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Upload a document and see what six AI agents can deliver in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/preconai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-lg
                hover:from-amber-600 hover:to-orange-700 transition-all
                shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              Try PreconAI
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                border border-slate-700 text-slate-300 font-semibold text-lg
                hover:border-slate-600 hover:text-white transition-all"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm mb-4">Seen enough? Let&apos;s talk.</p>
          <Link
            href="/#contact"
            className="text-amber-400 hover:text-amber-300 font-medium"
          >
            Book a Call →
          </Link>
        </div>
      </footer>
    </div>
  );
}
