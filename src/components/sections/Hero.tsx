'use client';

import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '@/lib/hooks/useTypewriter';
import { MagneticButton } from '../ui/MagneticButton';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroText = useTypewriter("The Digital Blueprint for", 50);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    setMousePos({ x, y });
  };

  return (
    <div
      className="relative bg-slate-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/glass-building.png"
          alt="Modern glass building architecture"
          fill
          className="object-cover opacity-10"
          priority
          quality={90}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950"></div>
      </div>

      {/* Parallax Background Blobs - reduced on mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-emerald-600/35 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] mix-blend-screen transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
        ></div>
        <div
          className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-teal-600/25 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] mix-blend-screen transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
        ></div>
        <div
          className="absolute top-[30%] left-[20%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-emerald-500/25 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] mix-blend-screen transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        ></div>
        <div
          className="absolute bottom-[-10%] right-[10%] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-teal-500/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] mix-blend-screen transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealOnScroll>
          <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg mb-6 sm:mb-8 hover:border-emerald-500/50 transition-colors cursor-default shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-ping flex-shrink-0"></span>
            <span className="text-emerald-200 text-xs sm:text-sm font-bold tracking-wide">
              SPECIALISING IN SUPPORTING SMALL TO MEDIUM SIZED CONTRACTORS IN LONDON AND SURROUNDING AREAS
            </span>
          </div>
        </RevealOnScroll>

        <div className="min-h-[160px] sm:min-h-[180px] md:min-h-[240px] mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl">
            {heroText}
            <br className="hidden md:block" />
            <RevealOnScroll className="delay-1000">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 block mt-2">
                Modern Construction.
              </span>
            </RevealOnScroll>
          </h1>
        </div>

        <RevealOnScroll className="delay-200">
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed font-medium drop-shadow-md">
            Move beyond the hype. Implement AI that builds. Ictus Flow bridges the gap between veteran construction leadership and AI innovation. Backed by 35 years of delivery experience, we help contractors protect margins, mitigate contractual risk, and optimise performance.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium drop-shadow-md">
            We don&apos;t just automate admin; we operationalise strategy. From winning tenders to closing out complex portfolios, we combine deep commercial acumen with cutting-edge intelligence to ensure your business is built for the future.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="delay-300">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center">
            <MagneticButton
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-sm sm:text-base font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] w-full sm:w-auto"
            >
              Find Your Digital Blueprint
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </MagneticButton>
            <MagneticButton
              href="#outcomes"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-emerald-500/30 bg-slate-900/40 text-sm sm:text-base font-bold rounded-xl text-emerald-100 hover:bg-emerald-900/40 transition-colors hover:border-emerald-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md w-full sm:w-auto"
            >
              See The Outcomes
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};
