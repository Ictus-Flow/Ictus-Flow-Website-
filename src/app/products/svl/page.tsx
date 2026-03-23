import { Metadata } from 'next';
import Link from 'next/link';
import {
  Mic,
  FileText,
  CheckSquare,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Clock,
  Shield,
  Zap,
  Calendar,
  Inbox,
  AlertTriangle,
  FolderOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SVL — Site Voice Logger | AI Site Diary for Construction | Ictus Flow',
  description: 'Voice-first site diary app for construction. Speak your daily report on the walk-round, get a formal site diary, action list, and progress summary back. Powered by Claude AI.',
  openGraph: {
    title: 'SVL — Site Voice Logger | AI Site Diary for Construction | Ictus Flow',
    description: 'Voice-first site diary app for construction. Speak your daily report, get a formal site diary back.',
    url: 'https://www.ictusflow.com/products/svl',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SVL - Site Voice Logger',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Voice-first site diary application for construction teams. Record voice notes on site, receive AI-generated formal diary entries, action lists, and progress summaries.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Solo',
      price: '39',
      priceCurrency: 'GBP',
      description: 'One user, unlimited voice entries, all AI processing.',
    },
    {
      '@type': 'Offer',
      name: 'Team',
      price: '99',
      priceCurrency: 'GBP',
      description: 'Up to 5 users, shared project diaries, team action tracking.',
    },
    {
      '@type': 'Offer',
      name: 'Professional',
      price: '199',
      priceCurrency: 'GBP',
      description: 'Unlimited users, client reporting, programme integration, priority support.',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does an AI site diary work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "SVL records your voice as you walk the site, transcribes it, and uses Claude AI to generate a formal site diary entry. You speak naturally — mentioning weather, who's on site, what's been delivered, what's been done, and any issues — and the AI structures this into a professional daily record with all the standard sections (weather, labour, plant, materials, progress, issues, instructions).",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a construction site diary app cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SVL starts at £39 per month for a single user with unlimited voice entries and full AI processing. Team plans for up to 5 users cost £99 per month, and Professional plans with unlimited users and client reporting features cost £199 per month. All plans include all AI processing with no per-entry charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use SVL offline on site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "SVL is a Progressive Web App (PWA) that works on any smartphone. Voice recording works offline — your recording is processed when you're back in signal. No app store download required.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI site diary hold up in a dispute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SVL generates contemporaneous, dated records from voice recordings made on the day. The formal diary output includes the same fields (weather, labour, progress, instructions, issues) that courts and adjudicators expect. Having a consistent, detailed daily record is significantly stronger than incomplete or retrospective diaries, which is the reality on most sites.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'How does an AI site diary work?',
    answer: "SVL records your voice as you walk the site, transcribes it, and uses Claude AI to generate a formal site diary entry. You speak naturally — mentioning weather, who's on site, what's been delivered, what's been done, and any issues — and the AI structures this into a professional daily record with all the standard sections (weather, labour, plant, materials, progress, issues, instructions).",
  },
  {
    question: 'How much does a construction site diary app cost?',
    answer: 'SVL starts at £39 per month for a single user with unlimited voice entries and full AI processing. Team plans for up to 5 users cost £99 per month, and Professional plans with unlimited users and client reporting features cost £199 per month. All plans include all AI processing with no per-entry charges.',
  },
  {
    question: 'Can I use SVL offline on site?',
    answer: "SVL is a Progressive Web App (PWA) that works on any smartphone. Voice recording works offline — your recording is processed when you're back in signal. No app store download required.",
  },
  {
    question: 'Will an AI site diary hold up in a dispute?',
    answer: 'SVL generates contemporaneous, dated records from voice recordings made on the day. The formal diary output includes the same fields (weather, labour, progress, instructions, issues) that courts and adjudicators expect. Having a consistent, detailed daily record is significantly stronger than incomplete or retrospective diaries, which is the reality on most sites.',
  },
];

const pricingTiers = [
  {
    name: 'Solo',
    price: '39',
    description: 'For individual site managers',
    features: ['One user', 'Unlimited voice entries', 'All AI processing', 'Site diary outputs', 'Action lists'],
  },
  {
    name: 'Team',
    price: '99',
    description: 'For small site teams',
    features: ['Up to 5 users', 'Shared project diaries', 'Team action tracking', 'All Solo features'],
    popular: true,
  },
  {
    name: 'Professional',
    price: '199',
    description: 'For larger operations',
    features: ['Unlimited users', 'Client reporting', 'Programme integration', 'Priority support', 'All Team features'],
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

export default function SVLPage() {
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
              href="/products/svl/demo"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              See Demo →
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 mb-6">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400 font-medium">Coming Soon</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Speak Your Site Diary.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  Done.
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Voice-first daily reporting for construction site teams. Talk into your phone on the walk-round —
                get a formal site diary, action list, and progress report back.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold
                    hover:from-blue-600 hover:to-cyan-700 transition-all
                    shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products/svl/demo"
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
                  Site diaries don&apos;t get written properly because nobody has time. The site manager finishes
                  a 10-hour day, drives home, and the last thing they want to do is type up what happened.
                  So the diary gets a few bullet points, or it gets done two days late from memory, or it
                  doesn&apos;t get done at all.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Then when there&apos;s a dispute — and there&apos;s always a dispute — the diary is either incomplete,
                  illegible, or missing entirely. Contractors lose claims because they can&apos;t evidence what
                  actually happened on site.
                </p>
                <p className="text-slate-300 leading-relaxed font-medium">
                  The problem isn&apos;t laziness. It&apos;s that the format doesn&apos;t fit the workflow. Site managers
                  think out loud. They talk through problems on the walk-round. Everything is verbal — until
                  it hits the diary, where suddenly it has to be typed.
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
                  icon: Mic,
                  title: 'Open SVL and hit record',
                  description: 'Talk through your day as you walk the site — what happened, deliveries, labour, weather, issues, actions needed.',
                },
                {
                  step: 2,
                  icon: Zap,
                  title: 'SVL transcribes and processes',
                  description: 'Your voice recording is transcribed and processed through Claude AI.',
                },
                {
                  step: 3,
                  icon: FileText,
                  title: 'Get structured outputs',
                  description: 'Formal site diary entry, prioritised action list, and progress summary — all formatted and dated.',
                },
                {
                  step: 4,
                  icon: CheckSquare,
                  title: 'Review and save',
                  description: 'Review, edit if needed, and save. Your diary is done before you reach the car park.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30
                    flex items-center justify-center text-cyan-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="pt-6 pl-2">
                    <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Calendar,
                  title: 'Formal Site Diary',
                  description: 'Professional, structured daily record generated from your voice notes. Includes weather, labour, plant, materials, visitors, progress, and issues. Written in the third person, past tense — exactly how a good site diary should read.',
                },
                {
                  icon: CheckSquare,
                  title: 'Action List',
                  description: 'Every action, instruction, and follow-up pulled from your recording, with suggested owners and priority levels.',
                },
                {
                  icon: TrendingUp,
                  title: 'Progress Summary',
                  description: 'A concise overview of the day\'s progress against programme, suitable for client reporting.',
                },
                {
                  icon: Inbox,
                  title: 'Personal Inbox',
                  description: 'Capture thoughts, reminders, and notes that aren\'t tied to a specific project. Voice memos that get transcribed and organised automatically.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
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
                <span>Claude Opus & Sonnet & Haiku</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Progressive Web App</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Works offline</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pricing</h2>
              <p className="text-slate-400">Simple, predictable pricing with no per-entry charges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-6 ${
                    tier.popular
                      ? 'bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30'
                      : 'bg-slate-900/50 border border-slate-800/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">£{tier.price}</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckSquare className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
              Stop typing. Start talking.
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Join the waitlist to be first in line when SVL launches.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold text-lg
                hover:from-blue-600 hover:to-cyan-700 transition-all
                shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Join the Waitlist
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
                  <AlertTriangle className="w-6 h-6 text-white" />
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
