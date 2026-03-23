import { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  Camera,
  GitBranch,
  Building2,
  BarChart3,
  Brain,
  TrendingUp,
  FileText,
  Mic
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Blocker Management App | Track & Resolve Site Issues | Ictus Flow',
  description: 'Multi-company blocker tracking for construction projects. Field workers report, managers assign, subcontractors resolve. Full audit trail. Role-based access. Free during launch.',
  openGraph: {
    title: 'Construction Blocker Management App | Track & Resolve Site Issues | Ictus Flow',
    description: 'Multi-company blocker tracking for construction projects. Full audit trail. Role-based access.',
    url: 'https://www.ictusflow.com/products/blocker-app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Blocker App',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Multi-company blocker management application for construction projects. Enables field workers to report issues, project managers to assign responsibility, and subcontractors to track resolution with full audit trails.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free during launch phase. Subscription pricing to follow.',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a blocker management app for construction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A blocker management app tracks issues that prevent construction work from progressing — missing design information, material delays, incomplete preceding work, unresolved RFIs. It provides a shared system where field workers raise blockers, project managers assign responsibility, and subcontractors update resolution status. The full lifecycle is tracked with an audit trail, providing evidence for delay analysis and dispute resolution.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does multi-tenant blocker tracking work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each company (main contractor, subcontractor, consultant) registers separately and only sees data relevant to them. Row Level Security at the database level ensures complete data isolation. Companies are invited to projects by the main contractor, and role-based access controls what each user can see and do.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI detect when a construction project is slipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Blocker App calculates a project health score based on four factors: blocker velocity (the ratio of new blockers raised to blockers resolved), resolution time trends, overdue blocker percentage, and critical blocker concentration. When the velocity turns negative — meaning problems are accumulating faster than they're being solved — the AI flags an early warning, typically 2-3 weeks before the impact appears on the programme.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Blocker App score subcontractor performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Every subcontractor is automatically scored across all projects based on response time, first-time resolution rate, programme impact, and communication quality. The AI also adjusts scores for external factors — for example, if a subcontractor's delays were caused by missing design information rather than their own performance. End-of-project reports include scored performance data with specific conditions for future appointments.",
      },
    },
  ],
};

const faqs = [
  {
    question: 'What is a blocker management app for construction?',
    answer: "A blocker management app tracks issues that prevent construction work from progressing — missing design information, material delays, incomplete preceding work, unresolved RFIs. It provides a shared system where field workers raise blockers, project managers assign responsibility, and subcontractors update resolution status. The full lifecycle is tracked with an audit trail, providing evidence for delay analysis and dispute resolution.",
  },
  {
    question: 'How does multi-tenant blocker tracking work?',
    answer: 'Each company (main contractor, subcontractor, consultant) registers separately and only sees data relevant to them. Row Level Security at the database level ensures complete data isolation. Companies are invited to projects by the main contractor, and role-based access controls what each user can see and do.',
  },
  {
    question: 'How does AI detect when a construction project is slipping?',
    answer: "The Blocker App calculates a project health score based on four factors: blocker velocity (the ratio of new blockers raised to blockers resolved), resolution time trends, overdue blocker percentage, and critical blocker concentration. When the velocity turns negative — meaning problems are accumulating faster than they're being solved — the AI flags an early warning, typically 2-3 weeks before the impact appears on the programme.",
  },
  {
    question: 'Can the Blocker App score subcontractor performance?',
    answer: "Yes. Every subcontractor is automatically scored across all projects based on response time, first-time resolution rate, programme impact, and communication quality. The AI also adjusts scores for external factors — for example, if a subcontractor's delays were caused by missing design information rather than their own performance. End-of-project reports include scored performance data with specific conditions for future appointments.",
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

export default function BlockerAppPage() {
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
              href="/products/blocker-app/demo"
              className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
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
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-sm text-amber-400 font-medium">Early Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Track Every Blocker.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Resolve Them Faster.
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Multi-company blocker management for construction projects.
                Field workers report. Managers assign. Subcontractors resolve. Everyone sees progress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold
                    hover:from-emerald-600 hover:to-teal-700 transition-all
                    shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                >
                  Request Early Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products/blocker-app/demo"
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
                  Every construction project has blockers — things that stop work progressing. A missing RFI
                  response. An incomplete design detail. Materials not delivered. A subcontractor who hasn&apos;t
                  started because another trade hasn&apos;t finished.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  These blockers get reported verbally, logged in different formats by different people, and
                  tracked (if at all) on personal spreadsheets that nobody else can see. The site manager knows
                  about some of them. The project manager knows about others. The subcontractor knows about
                  the ones affecting their work. But nobody has the full picture.
                </p>
                <p className="text-slate-300 leading-relaxed font-medium">
                  When blockers don&apos;t get resolved, programmes slip. When they&apos;re not tracked, nobody can
                  evidence why the programme slipped. And when there&apos;s no audit trail, the argument about
                  who caused the delay goes in circles.
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
                  icon: Camera,
                  title: 'Field worker spots a blocker',
                  description: 'Takes a photo, describes the issue, tags the trade and area. Submits from their phone.',
                },
                {
                  step: 2,
                  icon: Users,
                  title: 'PM reviews and assigns',
                  description: 'Sees all blockers across the project in one dashboard. Assigns responsibility, sets priority.',
                },
                {
                  step: 3,
                  icon: GitBranch,
                  title: 'Subcontractor works to resolve',
                  description: 'Gets notified. Updates status as they work — investigating, awaiting materials, resolved.',
                },
                {
                  step: 4,
                  icon: CheckCircle,
                  title: 'Verified and closed',
                  description: 'The blocker moves through a defined lifecycle with full audit trail. Verified. Closed. Tracked.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30
                    flex items-center justify-center text-emerald-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="pt-6 pl-2">
                    <item.icon className="w-8 h-8 text-emerald-400 mb-3" />
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
              {[
                {
                  icon: Building2,
                  title: 'Multi-tenant Architecture',
                  description: 'Every company sees only their own data. Main contractors, subcontractors, and consultants all work in the same system with role-based access.',
                },
                {
                  icon: GitBranch,
                  title: 'Blocker Lifecycle Management',
                  description: 'Defined status transitions: raised → assigned → in progress → resolved → verified → closed. No shortcuts, full audit trail.',
                },
                {
                  icon: Users,
                  title: 'Role-based Workflows',
                  description: 'Field workers raise blockers. Project managers assign and prioritise. Subcontractors resolve. Everyone has the right level of access.',
                },
                {
                  icon: BarChart3,
                  title: 'Dashboard and Reporting',
                  description: 'Live blocker counts by status, trade, area, and age. Identify which blockers are stalling the programme.',
                },
                {
                  icon: Camera,
                  title: 'Photo Evidence',
                  description: 'Attach images at any stage. Build a visual record of the issue and its resolution.',
                },
                {
                  icon: Shield,
                  title: 'Full Audit Trail',
                  description: 'Every action is timestamped and attributed. Evidence for delay analysis, dispute resolution, and lessons learned.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Powered Intelligence Section */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50 bg-gradient-to-b from-slate-950 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">AI-Powered</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Not Just Tracking. Understanding.
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The AI analyses every blocker across your portfolio to detect patterns, forecast programme impact,
                and score subcontractor performance — giving management intelligence that no spreadsheet can provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-slate-900/80 border border-purple-500/20 p-6">
                <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Project Health Monitoring</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The AI analyses blocker velocity — are you creating problems faster than you&apos;re solving them? —
                  and calculates a health score for each project. When the score drops below 60, you get an automatic
                  alert. Below 40, the system flags a critical intervention warning. This typically gives management
                  a 2-3 week early warning window before problems hit the programme.
                </p>
              </div>

              <div className="rounded-xl bg-slate-900/80 border border-purple-500/20 p-6">
                <Brain className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Cross-Project Pattern Detection</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The same type of blocker keeps appearing on every project — design information gaps, builders work
                  not coordinated, fire stopping left too late. The AI identifies these recurring patterns across your
                  entire portfolio, quantifies the programme time they cost, and produces specific process improvements.
                </p>
              </div>

              <div className="rounded-xl bg-slate-900/80 border border-purple-500/20 p-6">
                <Users className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Contractor Performance Scoring</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every subcontractor is scored on response time, resolution quality, programme impact, and communication
                  — across all projects, not just one. When the same subcontractor is slow on three different jobs,
                  that&apos;s not bad luck. It&apos;s data you need before you invite them to tender again.
                </p>
              </div>

              <div className="rounded-xl bg-slate-900/80 border border-purple-500/20 p-6">
                <FileText className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">PreconAI Integration</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Subcontractor performance reports feed directly into PreconAI&apos;s procurement evaluation. When your
                  estimator is reviewing tender returns, they can see that the lowest bidder has a blocker resolution
                  score of 31/100 with a history of deprioritising your work.
                </p>
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
                <span>React / Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Supabase with RLS</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>Claude AI for analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Multi-tenant architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Free during the launch phase while we gather feedback and refine the platform.
            </p>
            <div className="inline-block rounded-xl bg-slate-900/50 border border-slate-800/50 p-8">
              <div className="text-4xl font-bold text-white mb-2">Free</div>
              <div className="text-slate-400 text-sm">During launch phase</div>
              <div className="text-slate-500 text-xs mt-2">Subscription pricing to follow</div>
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
              Stop losing track of what&apos;s holding your project back.
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Request early access and start tracking blockers properly.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-lg
                hover:from-emerald-600 hover:to-teal-700 transition-all
                shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Request Early Access
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
                href="/products/preconai"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50
                  hover:border-slate-700/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600
                  flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">PreconAI</div>
                  <div className="text-sm text-slate-400">AI preconstruction analysis</div>
                </div>
              </Link>
              <Link
                href="/products/svl"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50
                  hover:border-slate-700/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600
                  flex items-center justify-center flex-shrink-0">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">SVL</div>
                  <div className="text-sm text-slate-400">Voice-first site diary</div>
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
