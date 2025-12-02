'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
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

export const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/60 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scrolling ticker background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center opacity-40">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="text-emerald-400 text-base font-medium px-12">
            Ictus. In music, it&apos;s the conductor&apos;s downbeat - the moment that keeps everyone in rhythm. In medicine, it&apos;s a stroke. We help with the first one so you don&apos;t have the second one.
          </span>
          <span className="text-emerald-400 text-base font-medium px-12">
            Ictus. In music, it&apos;s the conductor&apos;s downbeat - the moment that keeps everyone in rhythm. In medicine, it&apos;s a stroke. We help with the first one so you don&apos;t have the second one.
          </span>
          <span className="text-emerald-400 text-base font-medium px-12">
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
            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-green-400 transition-all">
              Ictus Flow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all text-sm font-bold tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <MagneticButton
              href="#contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 rounded-full transition-colors font-bold text-sm backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </MagneticButton>
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-emerald-400 text-lg font-medium py-2"
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
