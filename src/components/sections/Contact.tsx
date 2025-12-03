'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import type { FormState, ContactFormData } from '@/types';

export const Contact = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    inquiry: 'general'
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        // Reset form data
        setFormData({ email: '', inquiry: 'general' });
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/25 via-slate-950 to-teal-950/25"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-teal-600/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"></div>
      <div className="absolute top-10 left-10 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-emerald-600/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <RevealOnScroll>
          <div className="bg-white/5 backdrop-blur-2xl p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-[2rem] border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden group min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col justify-center">
            {/* SUCCESS MESSAGE LAYER */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-1000 ease-out ${
                formState === 'success'
                  ? 'opacity-100 blur-0 scale-100 z-20'
                  : 'opacity-0 blur-3xl scale-110 z-0 pointer-events-none'
              }`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-bounce-slow relative overflow-hidden ring-1 ring-emerald-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/50 to-teal-600/50 blur-md"></div>
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white/90 relative z-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 drop-shadow-lg">
                Message Received
              </h3>
              <p className="text-emerald-100/80 text-base sm:text-lg max-w-md leading-relaxed">
                We&apos;ve started the engine. Expect a secure transmission to your inbox within 24
                hours.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-6 sm:mt-8 md:mt-10 px-6 py-2 sm:px-8 sm:py-3 rounded-full border border-emerald-500/30 text-emerald-300 font-bold hover:bg-emerald-900/20 hover:border-emerald-400/50 hover:text-white transition-all tracking-wide backdrop-blur-sm text-sm sm:text-base"
              >
                Send another
              </button>
            </div>

            {/* ERROR MESSAGE LAYER */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-700 ease-out ${
                formState === 'error'
                  ? 'opacity-100 blur-0 scale-100 z-20'
                  : 'opacity-0 blur-3xl scale-110 z-0 pointer-events-none'
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-black text-red-400 mb-3 sm:mb-4">Something went wrong</h3>
              <p className="text-slate-300 text-base sm:text-lg max-w-md">
                Please try again or email us directly.
              </p>
            </div>

            {/* FORM LAYER */}
            <div
              className={`transition-all duration-700 ease-in-out relative z-10 ${
                formState === 'idle'
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-0 blur-xl -translate-y-10 pointer-events-none'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 drop-shadow-lg">
                Ready to optimise your flow?
              </h2>
              <p className="text-emerald-100/70 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto text-base sm:text-lg">
                Schedule a free 30-minute discovery call. We&apos;ll discuss your current
                infrastructure and identify immediate AI opportunities.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-w-md mx-auto">
                <div className="group">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your work email"
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-white/20 transition-all group-hover:border-white/20 shadow-inner backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>
                <div className="group">
                  <select
                    value={formData.inquiry}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        inquiry: e.target.value as ContactFormData['inquiry']
                      })
                    }
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-black/20 border border-white/10 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-white/20 transition-all appearance-none cursor-pointer group-hover:border-white/20 shadow-inner backdrop-blur-sm text-sm sm:text-base"
                  >
                    <option className="bg-slate-950 text-slate-300" value="general">
                      I&apos;m interested in...
                    </option>
                    <option className="bg-slate-950 text-slate-300" value="strategy">
                      Strategy Review
                    </option>
                    <option className="bg-slate-950 text-slate-300" value="training">
                      Training Workshop
                    </option>
                    <option className="bg-slate-950 text-slate-300" value="pilot">
                      Pilot Implementation
                    </option>
                  </select>
                </div>
                <MagneticButton
                  onClick={() => {}}
                  className="w-full bg-gradient-to-r from-emerald-600/80 via-teal-600/80 to-green-600/80 hover:from-emerald-500 hover:via-teal-500 hover:to-green-500 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl transition-all flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.2)] border border-white/10 backdrop-blur-md cursor-pointer"
                >
                  {formState === 'submitting' ? 'Transmitting...' : 'Request Consultation'}
                </MagneticButton>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
