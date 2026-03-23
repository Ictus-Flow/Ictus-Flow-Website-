import { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  Users,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  Send,
  Bell,
  BarChart3,
  Target,
  FileText,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'VividFlow | AI Lead Generation for UK Trades Businesses | Ictus Flow',
  description: 'Automated lead generation for plumbers, electricians, builders, and roofers. Targeted prospect lists, automated email sequences, AI-powered replies. First week free, no contract.',
  openGraph: {
    title: 'VividFlow | AI Lead Generation for UK Trades Businesses | Ictus Flow',
    description: 'Automated lead generation for UK trades businesses. First week free, no contract.',
    url: 'https://www.ictusflow.com/products/vividflow',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['SoftwareApplication', 'Service'],
  name: 'VividFlow',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Automated lead generation service for UK trades businesses. Includes targeted prospect sourcing, automated email sequences, and AI-powered reply generation.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'First week free — no setup fee, no contract. Subscription pricing based on volume.',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does AI lead generation work for trades businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VividFlow builds targeted prospect lists of UK trades businesses by trade, location, and company size. Automated email sequences go out on a scheduled cadence — an initial approach, a follow-up, and a final message. When a prospect replies, Claude AI generates an intelligent response tailored to their enquiry, so no lead is left waiting. You receive real-time Telegram notifications for every response.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does lead generation for tradespeople cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VividFlow offers a free first week with no setup fee and no contract. Ongoing subscription pricing is based on volume. The service includes prospect sourcing, email sequence management, AI-powered auto-replies, and real-time notifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is automated email outreach legal in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, business-to-business email is permitted under UK GDPR and the Privacy and Electronic Communications Regulations (PECR) provided there is a legitimate interest basis and a clear opt-out mechanism. VividFlow sends to business email addresses of company directors with an unsubscribe option in every email.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'How does AI lead generation work for trades businesses?',
    answer: 'VividFlow builds targeted prospect lists of UK trades businesses by trade, location, and company size. Automated email sequences go out on a scheduled cadence — an initial approach, a follow-up, and a final message. When a prospect replies, Claude AI generates an intelligent response tailored to their enquiry, so no lead is left waiting. You receive real-time Telegram notifications for every response.',
  },
  {
    question: 'How much does lead generation for tradespeople cost?',
    answer: 'VividFlow offers a free first week with no setup fee and no contract. Ongoing subscription pricing is based on volume. The service includes prospect sourcing, email sequence management, AI-powered auto-replies, and real-time notifications.',
  },
  {
    question: 'Is automated email outreach legal in the UK?',
    answer: 'Yes, business-to-business email is permitted under UK GDPR and the Privacy and Electronic Communications Regulations (PECR) provided there is a legitimate interest basis and a clear opt-out mechanism. VividFlow sends to business email addresses of company directors with an unsubscribe option in every email.',
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

export default function VividFlowPage() {
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
              href="/products/vividflow/demo"
              className="text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
            >
              See Demo →
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                <span className="text-sm text-pink-400 font-medium">Live</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Leads That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">
                  Actually Convert.
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Automated lead generation for UK trades businesses. We find the prospects.
                We write the emails. We follow up. You close the deals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold
                    hover:from-pink-600 hover:to-rose-700 transition-all
                    shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
                >
                  Get Started — First Week Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products/vividflow/demo"
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
                  Most trades businesses — plumbers, electricians, builders, roofers — get their work through
                  word of mouth and repeat customers. That works until it doesn&apos;t. A quiet month hits and
                  there&apos;s no pipeline. The phone stops ringing and suddenly you&apos;re scrambling for work,
                  taking jobs you&apos;d normally turn down, and cutting your margins to stay busy.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Marketing feels like a foreign language. SEO takes months. Google Ads burn cash. Cold calling
                  takes time you don&apos;t have when you&apos;re also doing the actual work.
                </p>
                <p className="text-slate-300 leading-relaxed font-medium">
                  What these businesses need is a steady drip of qualified prospects landing in their inbox,
                  without having to think about it.
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
                  icon: Target,
                  title: 'We build your prospect list',
                  description: 'UK SME trades businesses in your target area and trade, sourced and verified.',
                },
                {
                  step: 2,
                  icon: Send,
                  title: 'Automated email sequences',
                  description: 'Initial approach, follow-up, and final nudge. Each email written to sound human, not like marketing spam.',
                },
                {
                  step: 3,
                  icon: MessageSquare,
                  title: 'AI-powered replies',
                  description: 'When a prospect replies, Claude generates an intelligent auto-quote response tailored to their enquiry.',
                },
                {
                  step: 4,
                  icon: Bell,
                  title: 'Telegram notification',
                  description: 'You get a real-time alert with the lead details. Pick up the phone and close the deal.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/30
                    flex items-center justify-center text-pink-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="pt-6 pl-2">
                    <item.icon className="w-8 h-8 text-pink-400 mb-3" />
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
                  icon: Users,
                  title: 'Targeted Prospect Lists',
                  description: 'UK trades businesses sourced by trade, location, and company size. Director-level contact details.',
                },
                {
                  icon: Mail,
                  title: 'Three-Stage Email Sequences',
                  description: 'Written, scheduled, and sent automatically. No templates that sound like every other email in their inbox.',
                },
                {
                  icon: MessageSquare,
                  title: 'Intelligent Auto-Replies',
                  description: 'When a prospect responds, Claude drafts a relevant reply. No leads left waiting while you\'re on a job.',
                },
                {
                  icon: Bell,
                  title: 'Telegram Alerts',
                  description: 'Real-time notifications for every response, so you never miss a hot lead.',
                },
                {
                  icon: BarChart3,
                  title: 'Dashboard',
                  description: 'See your pipeline: how many leads sent, opened, replied, converted. Know exactly what\'s working.',
                },
                {
                  icon: Shield,
                  title: 'GDPR Compliant',
                  description: 'B2B email with legitimate interest basis and clear opt-out mechanism. Fully compliant with UK regulations.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
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

        {/* Tech Strip */}
        <section className="py-8 border-b border-slate-800/50 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Claude Sonnet for auto-quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Brevo email delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                <span>Telegram Bot API</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>8,171+ leads in database</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Try before you commit. See real results before paying.
            </p>
            <div className="inline-block rounded-xl bg-gradient-to-b from-pink-500/10 to-rose-500/10 border border-pink-500/20 p-8">
              <div className="text-sm text-pink-400 font-medium mb-2">First Week</div>
              <div className="text-4xl font-bold text-white mb-2">Free</div>
              <div className="text-slate-400 text-sm mb-4">No setup fee • No contract</div>
              <div className="text-slate-500 text-xs">Then subscription pricing based on volume</div>
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
              Ready for a full pipeline?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Start your free week and see what a steady flow of leads looks like.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold text-lg
                hover:from-pink-600 hover:to-rose-700 transition-all
                shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
            >
              Get Started — First Week Free
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
                href="/products/blocker-app"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50
                  hover:border-slate-700/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600
                  flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Blocker App</div>
                  <div className="text-sm text-slate-400">Track and resolve construction blockers</div>
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
