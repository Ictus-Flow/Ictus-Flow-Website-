import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Smartphone, Building2, ChevronRight, Eye, Users, TrendingUp, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Building Ictus - Construction Intelligence | Ictus Flow',
  description: 'Construction intelligence that shows you what\'s really happening. Finally see your projects clearly with real-time dashboards and predictive insights.',
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
            Building Ictus
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            Construction intelligence that shows you what&apos;s really happening
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-8">
            Finally See Your Projects Clearly
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

          {/* The Vision */}
          <section className="mb-12 sm:mb-16">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Imagine opening your laptop on Monday morning and knowing—actually knowing—which projects
              need your attention and which are flowing smoothly. No chasing site managers for updates.
              No surprises in the weekly meeting. No scrambling to piece together what happened when
              things go wrong.
            </p>
          </section>

          {/* Key Benefits */}
          <section className="mb-12 sm:mb-16">
            <div className="grid gap-6">
              {/* Benefit 1 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Know where work is stuck, the moment it stops
                    </h3>
                    <p className="text-slate-300">
                      Real-time dashboards show live project health across your entire portfolio. When a
                      blocker appears on any site, you see it immediately—not three days later in a progress report.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Spot your best people—and support those who need help
                    </h3>
                    <p className="text-slate-300">
                      Performance analytics reveal which site managers consistently keep work moving.
                      Recognise excellence. Identify where additional support could make a difference.
                      Make decisions based on patterns, not politics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      See problems coming before they hit the programme
                    </h3>
                    <p className="text-slate-300">
                      Predictive intelligence flags issues likely to escalate. Intervene when a delay is a day,
                      not when it&apos;s a week. Stop small problems cascading into claims and confrontation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Know which subcontractors actually deliver
                    </h3>
                    <p className="text-slate-300">
                      Cross-project pattern recognition shows you who resolves issues fastest and who creates them.
                      Build your supply chain around evidence, not gut feel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Problem We Solved
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Project managers excel at solving problems—but they need to see them first. The critical
              insight came from watching operational and commercial teams scrambling for information at
              project end to validate costs and change.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Most of that intelligence lived in people&apos;s heads, inaccessible to senior management
              and lost when they moved to new projects.
            </p>
            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
              <p className="text-purple-100 text-lg italic m-0">
                The question became: what if we could capture real-time operational intelligence and
                make it visible across the entire organisation?
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              When work slows or stops, anyone on site logs it in 30 seconds: photo, location, quick
              description. That&apos;s it. No forms. No desktop. No end-of-day admin.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              The system creates a virtuous cycle. Subcontractors document when they&apos;re blocked because
              it protects their programme. Managers gain visibility before issues escalate. Commercial
              teams see risk patterns weeks in advance. Everyone benefits from transparency.
            </p>
          </section>

          {/* The Build Journey */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Build Journey
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Development began October 2024. Six weeks later: a production-ready, multi-tenant SaaS platform.
            </p>

            {/* Technical Stack */}
            <h3 className="text-xl font-bold text-white mb-4">Technical Stack</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Next.js 14</h4>
                <p className="text-slate-400 text-sm">
                  Instant mobile and desktop experiences. Simple interfaces optimised for gloves and sunlight.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Supabase PostgreSQL</h4>
                <p className="text-slate-400 text-sm">
                  Secure multi-tenant architecture. Your data stays yours. Complete isolation between companies.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-white font-bold mb-2">Vercel</h4>
                <p className="text-slate-400 text-sm">
                  Global deployment. Improvements reach every user immediately.
                </p>
              </div>
            </div>

            {/* Development Approach */}
            <h3 className="text-xl font-bold text-white mb-4">Development Approach</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              The build leveraged Claude Code extensively—translating three decades of construction
              management expertise into production software. AI-assisted development enabled rapid
              iteration while maintaining quality.
            </p>
          </section>

          {/* Stats Summary */}
          <section className="mb-12 sm:mb-16">
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
              Ready to Stop Flying Blind?
            </h2>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              Whether you want to use Ictus or build something similar for your own operations,
              let&apos;s talk about what visibility could do for your business.
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
