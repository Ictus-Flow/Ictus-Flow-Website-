'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 className="text-white font-bold text-sm sm:text-base mb-1">Cookie Consent</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <a href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={acceptNecessary}
              className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="flex-1 sm:flex-none px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all"
            >
              Accept All
            </button>
            <button
              onClick={acceptNecessary}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
