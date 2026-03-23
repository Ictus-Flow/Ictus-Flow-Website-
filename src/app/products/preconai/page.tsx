import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Upload,
  Users,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Shield,
  Clock,
  Zap,
  ChevronDown,
  Briefcase,
  Calculator,
  ClipboardList,
  Scale,
  FolderOpen,
  PenTool
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PreconAI | AI Preconstruction Analysis for Contractors | Ictus Flow',
  description: 'Upload a tender PDF and get a full preconstruction team analysis in minutes. Six AI agents — Director, Estimator, Procurement, Bid Writer — powered by Claude. Built for UK contractors.',
  openGraph: {
    title: 'PreconAI | AI Preconstruction Analysis for Contractors | Ictus Flow',
    description: 'Upload a tender PDF and get a full preconstruction team analysis in minutes. Six AI agents powered by Claude.',
    url: 'https://www.ictusflow.com/products/preconai',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PreconAI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI-powered preconstruction analysis platform for construction contractors. Upload tender documents and receive comprehensive team analysis in minutes.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Currently in open access. Enterprise pricing coming soon.',
  },
  creator: {
    '@type': 'Organization',
    name: 'Ictus Flow Ltd',
    url: 'https://www.ictusflow.com',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does AI preconstruction analysis work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PreconAI uses six specialised AI agents, each modelled on a real preconstruction role. When you upload a tender document (PDF), every agent reads the full document through the lens of their expertise — a Director assesses strategic fit, an Estimator analyses scope and cost, Procurement reviews contract terms, and so on. The AI uses Claude by Anthropic, a frontier language model, to produce structured outputs that mirror what each team member would deliver. The entire analysis takes minutes rather than the days or weeks a manual review requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI replace a preconstruction team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No — and that's not the intention. PreconAI gives your existing team a head start. It handles the initial read-through and structuring that takes the most time, so your estimators, procurement managers, and bid writers can focus on the judgement calls that require human experience. Think of it as having a thorough first-pass analysis ready before your team even opens the document.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does PreconAI take to analyse a tender?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical tender document (50–200 pages) is fully analysed in 2–5 minutes. The system processes all six role analyses simultaneously, not sequentially. Larger document packs may take slightly longer but rarely exceed 10 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size of tender can PreconAI handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "PreconAI accepts PDF documents up to 20MB. This covers the vast majority of tender packs including employer's requirements, specifications, and preliminary drawings. For very large tender packs, upload the key documents (employer's requirements, specification, contract particulars) rather than the full drawing set.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is my tender data secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tender documents are processed via the Anthropic API and are not stored after analysis is complete. Anthropic's API has a zero-retention policy on commercial API usage — your data is not used to train models. The application runs on Supabase with Row Level Security ensuring project data is isolated per user.",
      },
    },
  ],
};

const agents = [
  {
    role: 'Director',
    color: 'bg-slate-700',
    icon: Briefcase,
    description: 'Strategic overview: is this worth pursuing? What are the key drivers? What\'s the competitive landscape?',
  },
  {
    role: 'Senior Estimator',
    color: 'bg-amber-600',
    icon: Calculator,
    description: 'Scope breakdown, pricing considerations, provisional sums, and cost risk areas',
  },
  {
    role: 'Junior Estimator',
    color: 'bg-blue-600',
    icon: ClipboardList,
    description: 'RFP schedule with priority tiers (bid-critical vs pricing/clarification), ready to issue to your supply chain',
  },
  {
    role: 'Procurement',
    color: 'bg-emerald-600',
    icon: Scale,
    description: 'Contract type identification, key clauses, payment terms, retention, liquidated damages, insurance requirements, and risk flags',
  },
  {
    role: 'Administrator',
    color: 'bg-purple-600',
    icon: FolderOpen,
    description: 'Document transfer register with every drawing, spec, and report catalogued',
  },
  {
    role: 'Bid Writer',
    color: 'bg-orange-600',
    icon: PenTool,
    description: 'Client drivers, win themes, full methodology prose, H&S risk register, missing information flags, and a bid confidence rating',
  },
];

const faqs = [
  {
    question: 'How does AI preconstruction analysis work?',
    answer: 'PreconAI uses six specialised AI agents, each modelled on a real preconstruction role. When you upload a tender document (PDF), every agent reads the full document through the lens of their expertise — a Director assesses strategic fit, an Estimator analyses scope and cost, Procurement reviews contract terms, and so on. The AI uses Claude by Anthropic, a frontier language model, to produce structured outputs that mirror what each team member would deliver. The entire analysis takes minutes rather than the days or weeks a manual review requires.',
  },
  {
    question: 'Can AI replace a preconstruction team?',
    answer: "No — and that's not the intention. PreconAI gives your existing team a head start. It handles the initial read-through and structuring that takes the most time, so your estimators, procurement managers, and bid writers can focus on the judgement calls that require human experience. Think of it as having a thorough first-pass analysis ready before your team even opens the document.",
  },
  {
    question: 'How long does PreconAI take to analyse a tender?',
    answer: 'A typical tender document (50–200 pages) is fully analysed in 2–5 minutes. The system processes all six role analyses simultaneously, not sequentially. Larger document packs may take slightly longer but rarely exceed 10 minutes.',
  },
  {
    question: 'What size of tender can PreconAI handle?',
    answer: "PreconAI accepts PDF documents up to 20MB. This covers the vast majority of tender packs including employer's requirements, specifications, and preliminary drawings. For very large tender packs, upload the key documents (employer's requirements, specification, contract particulars) rather than the full drawing set.",
  },
  {
    question: 'Is my tender data secure?',
    answer: "Tender documents are processed via the Anthropic API and are not stored after analysis is complete. Anthropic's API has a zero-retention policy on commercial API usage — your data is not used to train models. The application runs on Supabase with Row Level Security ensuring project data is isolated per user.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-slate-800/50 last:border-b-0">
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
      </summary>
      <div className="pb-4 text-slate-400 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

export default function PreconAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-slate-950">
        {/* Header */}
        <header className="border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">
              ← All Products
            </Link>
            <Link
              href="/products/preconai/demo"
              className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
            >
              See Demo →
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-amber-400 font-medium">Live — Open Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your Preconstruction Team.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Powered by AI.
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Upload a tender document. Get a full team analysis in minutes — not days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products/preconai"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold
                    hover:from-amber-600 hover:to-orange-700 transition-all
                    shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                >
                  Try PreconAI
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products/preconai/demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                    border border-slate-700 text-slate-300 font-semibold
                    hover:border-slate-600 hover:text-white transition-all"
                >
                  See It In Action
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">The Problem</h2>
              <div className="prose prose-lg prose-slate prose-invert">
                <p className="text-slate-400 leading-relaxed mb-4">
                  Every preconstruction team runs the same process. The tender lands. The Director skims it.
                  The Senior Estimator starts pricing. The Junior Estimator drafts RFPs for the subcontractors.
                  Procurement reviews the contract terms. The Administrator logs everything. The Bid Writer
                  pulls it all together into a submission.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  This process takes days. Sometimes weeks. And on a busy portfolio, tenders get rushed or
                  rejected simply because there aren&apos;t enough hours to review them properly.
                </p>
                <p className="text-slate-300 leading-relaxed font-medium">
                  The problem isn&apos;t skill — it&apos;s bandwidth. Most contractors have to choose which tenders
                  to pursue based on gut feel, because they can&apos;t afford to thoroughly analyse every opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  icon: Upload,
                  title: 'Upload your tender PDF',
                  description: 'Drawings, specifications, employer\'s requirements — whatever you\'ve received.',
                },
                {
                  step: 2,
                  icon: Users,
                  title: 'Six AI agents analyse simultaneously',
                  description: 'Director, Senior Estimator, Junior Estimator, Procurement, Administrator, and Bid Writer. Each reads the full tender through their role\'s lens.',
                },
                {
                  step: 3,
                  icon: FileText,
                  title: 'Get structured outputs',
                  description: 'A Director\'s strategic summary, scope analysis, RFP recommendations, contract risk flags, document register, and full bid strategy.',
                },
                {
                  step: 4,
                  icon: MessageSquare,
                  title: 'Chat with the Bid Writer',
                  description: 'Ask follow-up questions with full context of the tender. Get streaming responses as you refine your submission strategy.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30
                    flex items-center justify-center text-amber-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="pt-6 pl-2">
                    <item.icon className="w-8 h-8 text-amber-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">What You Get</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <div
                  key={agent.role}
                  className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${agent.color} flex items-center justify-center`}>
                      <agent.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{agent.role}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{agent.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Interactive Bid Chat</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Ask the Bid Writer anything about the tender. Full context. Streaming responses.
                    Refine your strategy in real-time with an AI that has read every page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Strip */}
        <section className="py-8 border-b border-slate-800/50 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Claude Opus & Sonnet</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Zero-retention API</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>2-5 minute analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Up to 20MB PDFs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Currently in open access — use PreconAI for free while we refine the platform.
              Enterprise pricing coming soon.
            </p>
            <div className="inline-block rounded-xl bg-slate-900/50 border border-slate-800/50 p-8">
              <div className="text-4xl font-bold text-white mb-2">Free</div>
              <div className="text-slate-400 text-sm">During open access period</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 divide-y divide-slate-800/50">
              <div className="p-6">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to analyse your next tender?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Upload a document and see what six AI agents can deliver in minutes.
            </p>
            <Link
              href="/products/preconai"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-lg
                hover:from-amber-600 hover:to-orange-700 transition-all
                shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              Try PreconAI
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-white mb-6">You might also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/products/blocker-app"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50
                  hover:border-slate-700/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600
                  flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Blocker App</div>
                  <div className="text-sm text-slate-400">Track and resolve construction blockers</div>
                </div>
              </Link>
              <Link
                href="/products/document-automation"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50
                  hover:border-slate-700/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600
                  flex items-center justify-center flex-shrink-0">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">Document Automation</div>
                  <div className="text-sm text-slate-400">Automated invoice and document processing</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Ictus Flow Ltd. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
