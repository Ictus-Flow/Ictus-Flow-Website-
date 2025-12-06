import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Smartphone, Building2, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Building Ictus - Blocker App Case Study | Ictus Flow',
  description: 'From concept to production-ready construction intelligence platform in six weeks. See how we built Ictus to capture real-time operational intelligence.',
};

export default function IctusCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-indigo-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10">
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/30">
              Featured Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Building Ictus –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Blocker App
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-8">
            From concept to production-ready construction intelligence platform in six weeks
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">6</p>
              <p className="text-purple-300 text-sm font-medium">Weeks to Launch</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-2">
                <Smartphone className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">30</p>
              <p className="text-purple-300 text-sm font-medium">Seconds to Log</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-2">
                <Building2 className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">Multi</p>
              <p className="text-purple-300 text-sm font-medium">Tenant Ready</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-invert prose-slate max-w-none">

          {/* The Problem */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Problem Worth Solving
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Project managers excel at solving problems—but they need to see them first. The critical
              insight came from watching operational and commercial teams scrambling for information at
              project end to validate costs and change. Most of that intelligence lived in their heads,
              inaccessible to senior management and lost when they moved on.
            </p>
            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
              <p className="text-purple-100 text-lg italic m-0">
                &quot;What if we could capture real-time operational intelligence and make it visible across
                the entire organisation?&quot;
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Solution
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Ictus is a construction flow intelligence platform. When work slows or stops, anyone on
              site logs it in 30 seconds: photo, location, quick description. But rather than just
              recording problems, Ictus analyses patterns across projects to answer critical questions:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Which site managers consistently keep work flowing?</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Which subcontractors resolve issues fastest?</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Where should we intervene before small issues cascade?</span>
              </li>
            </ul>
            <p className="text-slate-300 text-lg leading-relaxed">
              The system creates a virtuous cycle. Subcontractors document when they&apos;re blocked because
              it protects their programme. Managers gain visibility before issues escalate. Commercial
              teams see risk patterns weeks in advance. Leadership gets portfolio-wide intelligence
              showing which projects need support.
            </p>
          </section>

          {/* The Build Journey */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Build Journey
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Development began October 2024 with a clear objective: create construction intelligence
              that actually gets used on sites. The breakthrough was making data capture effortless
              while building sophisticated analytics that reveal performance patterns invisible in
              traditional project reports.
            </p>

            {/* Technical Stack */}
            <h3 className="text-xl font-bold text-white mb-4">Technical Stack</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Next.js 14</h4>
                <p className="text-slate-400 text-sm">
                  Instant mobile and desktop experiences. Site managers get simple interfaces optimised
                  for gloves and sunlight.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Supabase PostgreSQL</h4>
                <p className="text-slate-400 text-sm">
                  Secure multi-tenant architecture. Dozens of companies on one platform with complete
                  data isolation.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Vercel Deployment</h4>
                <p className="text-slate-400 text-sm">
                  Updates reach users globally within minutes. Every company benefits from improvements
                  immediately.
                </p>
              </div>
            </div>

            {/* Development Approach */}
            <h3 className="text-xl font-bold text-white mb-4">Development Approach</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              The development process leveraged Claude Code extensively, translating three decades of
              construction management expertise into production software through detailed requirements
              conversations. This AI-assisted development approach enabled rapid iteration while
              maintaining code quality.
            </p>
          </section>

          {/* Key Platform Features */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Key Platform Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Real-time Dashboards</h4>
                <p className="text-slate-300 text-sm">Live project health scores across your portfolio</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Performance Analytics</h4>
                <p className="text-slate-300 text-sm">Identify which site managers keep work moving smoothly</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Predictive Intelligence</h4>
                <p className="text-slate-300 text-sm">Flag issues likely to escalate before they do</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Pattern Recognition</h4>
                <p className="text-slate-300 text-sm">Cross-project insights revealing consistent performers</p>
              </div>
            </div>
          </section>

          {/* The Outcome */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Outcome
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Ictus demonstrates how deep domain expertise combined with modern AI-assisted development
              creates genuine competitive advantage. The platform doesn&apos;t just help companies manage
              construction problems—it helps them recognise excellence, optimise flow, and make better
              decisions faster.
            </p>
            <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    6 Weeks
                  </p>
                  <p className="text-slate-400 text-sm mt-1">Concept to Production</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    30 Secs
                  </p>
                  <p className="text-slate-400 text-sm mt-1">To Log an Issue</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    Multi
                  </p>
                  <p className="text-slate-400 text-sm mt-1">Tenant Architecture</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Interested?
            </h2>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              This case study showcases what&apos;s possible when construction expertise meets modern
              development tools. Whether you&apos;re looking to build custom solutions or implement AI
              across your operations, let&apos;s talk.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-900/30"
            >
              Get in Touch
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </section>

        </div>
      </div>
    </main>
  );
}
