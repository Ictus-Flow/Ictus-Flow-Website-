import Link from 'next/link';
import { Cpu } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-8 sm:py-10 md:py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0 group cursor-pointer">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 relative overflow-hidden shadow-md shadow-purple-900/20 group-hover:shadow-pink-900/30 transition-all ring-1 ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 via-purple-900/50 to-indigo-900/50 blur-sm"></div>
            <Cpu className="text-white/70 group-hover:text-white/90 transition-colors w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-slate-300 group-hover:text-white transition-colors tracking-tight">
            Ictus Flow
          </span>
        </div>

        {/* Copyright and Privacy */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 md:mb-0">
          <div className="text-slate-500 text-xs sm:text-sm font-medium text-center">
            &copy; {currentYear} Ictus Flow Consultancy.
          </div>
          <Link
            href="/privacy-policy"
            className="text-slate-500 hover:text-emerald-400 text-xs sm:text-sm font-medium transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        {/* All Rights Reserved */}
        <div className="text-slate-500 text-xs sm:text-sm font-medium">
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};
