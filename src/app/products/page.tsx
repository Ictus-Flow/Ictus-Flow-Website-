import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Mic,
  FolderOpen,
  AlertTriangle,
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products | AI Tools for Construction & SMEs | Ictus Flow',
  description: 'AI-powered tools for construction: preconstruction analysis, voice site diaries, document automation, blocker tracking, and lead generation. Built on Claude by Anthropic.',
  openGraph: {
    title: 'Products | AI Tools for Construction & SMEs | Ictus Flow',
    description: 'AI-powered tools for construction: preconstruction analysis, voice site diaries, document automation, blocker tracking, and lead generation.',
    url: 'https://www.ictusflow.com/products',
  },
};

type ProductStatus = 'live' | 'early-access' | 'coming-soon';

interface Product {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  status: ProductStatus;
  gradient: string;
  shadowColor: string;
}

const products: Product[] = [
  {
    name: 'PreconAI',
    slug: 'preconai',
    tagline: 'Your Preconstruction Team. Powered by AI.',
    description: 'Upload a tender document. Get a full team analysis in minutes — not days. Six AI agents analyse every aspect simultaneously.',
    icon: FileText,
    status: 'live',
    gradient: 'from-amber-500 to-orange-600',
    shadowColor: 'shadow-amber-500/20',
  },
  {
    name: 'SVL',
    slug: 'svl',
    tagline: 'Speak Your Site Diary. Done.',
    description: 'Voice-first daily reporting for construction. Talk into your phone on the walk-round — get a formal site diary back.',
    icon: Mic,
    status: 'coming-soon',
    gradient: 'from-blue-500 to-cyan-600',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    name: 'Document Automation',
    slug: 'document-automation',
    tagline: 'Drop It In. We Handle the Rest.',
    description: 'Invoices, letters, compliance documents — processed automatically. No data entry. No filing. No chasing.',
    icon: FolderOpen,
    status: 'live',
    gradient: 'from-purple-500 to-violet-600',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    name: 'Blocker App',
    slug: 'blocker-app',
    tagline: 'Track Every Blocker. Resolve Them Faster.',
    description: 'Multi-company blocker management for construction projects. Field workers report. Managers assign. Subcontractors resolve.',
    icon: AlertTriangle,
    status: 'early-access',
    gradient: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    name: 'VividFlow',
    slug: 'vividflow',
    tagline: 'Leads That Actually Convert.',
    description: 'Automated lead generation for UK trades businesses. We find the prospects. We write the emails. You close the deals.',
    icon: Mail,
    status: 'live',
    gradient: 'from-pink-500 to-rose-600',
    shadowColor: 'shadow-pink-500/20',
  },
];

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  'live': {
    label: 'Live',
    className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  'early-access': {
    label: 'Early Access',
    className: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  'coming-soon': {
    label: 'Coming Soon',
    className: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  },
};

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const status = statusConfig[product.status];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block rounded-2xl bg-slate-900/50 border border-slate-800/50 p-6
        hover:border-slate-700/50 hover:bg-slate-900/80 transition-all duration-300
        hover:shadow-lg ${product.shadowColor} hover:-translate-y-1`}
    >
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${status.className}`}>
        {status.label}
      </div>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4
        group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text
        group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
        {product.name}
      </h3>
      <p className="text-sm text-slate-400 mb-3">{product.tagline}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{product.description}</p>

      {/* Arrow */}
      <div className="flex items-center text-slate-400 group-hover:text-white transition-colors">
        <span className="text-sm font-medium">Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-slate-300">Built on Claude by Anthropic</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Tools for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500">
                Construction
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
              Purpose-built AI applications for contractors, construction teams, and SMEs.
              Each product solves a real problem with real intelligence — not generic automation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure which product fits your needs?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Every construction business is different. Let&apos;s talk about your specific challenges
            and find the right solution.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600
              text-white font-semibold hover:from-amber-600 hover:to-orange-700 transition-all
              shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ictus Flow Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
