'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, FileText, Mic, FolderOpen, AlertTriangle, Mail } from 'lucide-react';
import type { NavLink } from '@/types';

interface NavigationProps {
  isScrolled: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'Outcomes', href: '#outcomes' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Contact', href: '#contact' },
];

const products = [
  { name: 'PreconAI', href: '/products/preconai', icon: FileText, description: 'AI preconstruction analysis' },
  { name: 'SVL', href: '/products/svl', icon: Mic, description: 'Voice-first site diary' },
  { name: 'Document Automation', href: '/products/document-automation', icon: FolderOpen, description: 'Automated document processing' },
  { name: 'Blocker App', href: '/products/blocker-app', icon: AlertTriangle, description: 'Construction blocker tracking' },
  { name: 'VividFlow', href: '/products/vividflow', icon: Mail, description: 'Lead generation for trades' },
];

export const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/60 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scrolling ticker background - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:flex items-center opacity-40">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="text-emerald-400 text-xs sm:text-sm md:text-base font-medium px-4 sm:px-8 md:px-12">
            Ictus. In music, it&apos;s the conductor&apos;s downbeat - the moment that keeps everyone in rhythm. In medicine, it&apos;s a stroke. We help with the first one so you don&apos;t have the second one.
          </span>
          <span className="text-emerald-400 text-xs sm:text-sm md:text-base font-medium px-4 sm:px-8 md:px-12">
            Ictus. In music, it&apos;s the conductor&apos;s downbeat - the moment that keeps everyone in rhythm. In medicine, it&apos;s a stroke. We help with the first one so you don&apos;t have the second one.
          </span>
          <span className="text-emerald-400 text-xs sm:text-sm md:text-base font-medium px-4 sm:px-8 md:px-12">
            Ictus. In music, it&apos;s the conductor&apos;s downbeat - the moment that keeps everyone in rhythm. In medicine, it&apos;s a stroke. We help with the first one so you don&apos;t have the second one.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 relative overflow-hidden shadow-lg shadow-emerald-500/20 group-hover:shadow-teal-500/40 transition-all ring-1 ring-white/20">
              <Image
                src="/images/ictus-flow-logo.png"
                alt="Ictus Flow Logo"
                width={40}
                height={40}
                className="object-contain relative z-10"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-green-400 transition-all">
              Ictus Flow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-slate-200 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all text-sm font-bold tracking-wide uppercase"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="p-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <product.icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                        <div>
                          <div className="text-sm font-medium text-white">{product.name}</div>
                          <div className="text-xs text-slate-400">{product.description}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="border-t border-slate-700/50 mt-2 pt-2">
                      <Link
                        href="/products"
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all text-sm font-bold tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-emerald-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-white/10 absolute w-full backdrop-blur-xl">
          <div className="px-4 pt-2 pb-8 space-y-4">
            {/* Products Section */}
            <div className="border-b border-slate-800/50 pb-4">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">Products</div>
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <product.icon className="w-4 h-4" />
                  <span className="text-base font-medium">{product.name}</span>
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block text-emerald-400 text-sm font-medium py-2 mt-2"
              >
                View All Products →
              </Link>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-emerald-400 text-lg font-medium py-3"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
