import { Metadata } from 'next';
import Link from 'next/link';
import {
  FolderOpen,
  Upload,
  Tags,
  FileSpreadsheet,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  FileText,
  Mail,
  AlertCircle,
  BarChart3,
  Mic,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Document Automation for SMEs & Charities | Invoice Processing | Ictus Flow',
  description: 'Automated invoice processing, correspondence drafting, and compliance tracking for small organisations. Drop documents into Google Drive — Claude AI handles the rest. From £49/month.',
  openGraph: {
    title: 'AI Document Automation for SMEs & Charities | Invoice Processing | Ictus Flow',
    description: 'Automated invoice processing, correspondence drafting, and compliance tracking. From £49/month.',
    url: 'https://www.ictusflow.com/products/document-automation',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['SoftwareApplication', 'Service'],
  name: 'Document Automation',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Automated document processing service for SMEs and charities. Includes invoice processing, correspondence drafting, and compliance tracking using Claude AI.',
  offers: {
    '@type': 'Offer',
    price: '49',
    priceCurrency: 'GBP',
    description: 'Starting from £49/month for basic invoice processing. Tailored to organisation size.',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does AI invoice processing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You drop invoice PDFs (digital, scanned, or photographed) into a Google Drive folder. Claude Haiku classifies the document type instantly, then Claude Sonnet extracts the key fields — supplier name, invoice number, date, net amount, VAT rate, VAT amount, and gross total. The data is logged to a Google Sheets register with professional formatting, monthly tabs, and running totals. The original document is filed automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does automated document processing cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ictus Flow's document automation starts from £49 per month for basic invoice processing. Pricing scales with volume and the number of document types processed. There are no per-document charges — the monthly fee covers all processing.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI document processing accurate enough for financial records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The system uses a tiered AI approach — lightweight classification followed by focused extraction — achieving high accuracy on standard invoice formats. Every extraction includes confidence scoring, and the system flags low-confidence results for manual review. For financial records, we recommend a monthly reconciliation check, which the formatted Sheets register makes straightforward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI process handwritten or photographed documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The system includes OCR pre-processing that handles scanned PDFs and photographs of documents. Image quality affects accuracy — clean photos of printed documents process reliably, while very low-quality images or heavily handwritten documents may require manual review.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'How does AI invoice processing work?',
    answer: 'You drop invoice PDFs (digital, scanned, or photographed) into a Google Drive folder. Claude Haiku classifies the document type instantly, then Claude Sonnet extracts the key fields — supplier name, invoice number, date, net amount, VAT rate, VAT amount, and gross total. The data is logged to a Google Sheets register with professional formatting, monthly tabs, and running totals. The original document is filed automatically.',
  },
  {
    question: 'How much does automated document processing cost for a small business?',
    answer: "Ictus Flow's document automation starts from £49 per month for basic invoice processing. Pricing scales with volume and the number of document types processed. There are no per-document charges — the monthly fee covers all processing.",
  },
  {
    question: 'Is AI document processing accurate enough for financial records?',
    answer: 'The system uses a tiered AI approach — lightweight classification followed by focused extraction — achieving high accuracy on standard invoice formats. Every extraction includes confidence scoring, and the system flags low-confidence results for manual review. For financial records, we recommend a monthly reconciliation check, which the formatted Sheets register makes straightforward.',
  },
  {
    question: 'Can AI process handwritten or photographed documents?',
    answer: 'Yes. The system includes OCR pre-processing that handles scanned PDFs and photographs of documents. Image quality affects accuracy — clean photos of printed documents process reliably, while very low-quality images or heavily handwritten documents may require manual review.',
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

export default function DocumentAutomationPage() {
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
              href="/products/document-automation/demo"
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
            >
              See Demo →
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm text-purple-400 font-medium">Live</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Drop It In.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                  We Handle the Rest.
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Invoices, letters, compliance documents — processed automatically.
                No data entry. No filing. No chasing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold
                    hover:from-purple-600 hover:to-violet-700 transition-all
                    shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products/document-automation/demo"
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
                  Small organisations drown in paperwork. A charity with 10 staff spends hours every week
                  on invoices, filing, and correspondence. A construction subcontractor&apos;s admin person types
                  the same invoice data into three different spreadsheets. A community theatre&apos;s volunteer
                  treasurer is buried in receipts.
                </p>
                <p className="text-slate-300 leading-relaxed font-medium">
                  None of this work requires intelligence — it requires time. And time is the one thing
                  these organisations don&apos;t have. The people doing this work are usually the same people
                  running the operation, and every hour spent on admin is an hour not spent on their actual purpose.
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
                  title: 'Drop documents into Google Drive',
                  description: 'Invoices, letters, receipts, compliance certificates — whatever lands on your desk.',
                },
                {
                  step: 2,
                  icon: Tags,
                  title: 'Automatic classification',
                  description: 'Claude Haiku classifies each document type instantly — invoice, letter, certificate, timesheet.',
                },
                {
                  step: 3,
                  icon: FileSpreadsheet,
                  title: 'Data extraction',
                  description: 'Claude Sonnet extracts key data — supplier, amount, date, VAT for invoices; sender, subject, action for letters.',
                },
                {
                  step: 4,
                  icon: FolderOpen,
                  title: 'Logged and filed',
                  description: 'Data goes to your Google Sheets register, document is filed in the right folder, you get a notification.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30
                    flex items-center justify-center text-purple-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="pt-6 pl-2">
                    <item.icon className="w-8 h-8 text-purple-400 mb-3" />
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
                  icon: FileText,
                  title: 'Invoice Processing',
                  description: 'Supplier name, invoice number, date, net amount, VAT, gross total extracted and logged. Monthly tabs, running totals, professional formatting. Works with scanned, photographed, and digital PDFs.',
                },
                {
                  icon: Mail,
                  title: 'Correspondence Drafting',
                  description: 'Drop in a brief or notes, get back a professional letter matching your organisation\'s tone and brand. Chase letters, funder reports, client communications.',
                },
                {
                  icon: AlertCircle,
                  title: 'Compliance Tracking',
                  description: 'DBS checks, training certificates, insurance policies, accreditations. Drop in the certificate, the system tracks expiry dates and flags renewals.',
                },
                {
                  icon: BarChart3,
                  title: 'Monthly Intelligence Report',
                  description: 'Automated summary of spending patterns, supplier analysis, and upcoming compliance deadlines.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
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
                <span>Claude Haiku & Sonnet</span>
              </div>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                <span>Google Drive & Sheets</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>215+ automated tests</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Tailored to organisation size. Contact us for a quote.
            </p>
            <div className="inline-block rounded-xl bg-slate-900/50 border border-slate-800/50 p-8">
              <div className="text-sm text-slate-400 mb-2">Starting from</div>
              <div className="text-4xl font-bold text-white mb-2">£49<span className="text-lg text-slate-400">/month</span></div>
              <div className="text-slate-400 text-sm">For basic invoice processing</div>
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
              How many hours does your team spend on admin?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Book a free assessment and we&apos;ll show you what can be automated.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold text-lg
                hover:from-purple-600 hover:to-violet-700 transition-all
                shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Book a Free Assessment
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
