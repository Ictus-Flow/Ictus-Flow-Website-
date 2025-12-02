'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Outcomes } from '@/components/sections/Outcomes';
import { CareerExperience } from '@/components/sections/CareerExperience';
import { FounderBio } from '@/components/sections/FounderBio';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { ConstructionFocus } from '@/components/sections/ConstructionFocus';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-pink-900/50 selection:text-white overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <CareerExperience />
      <FounderBio />
      <Outcomes />
      <About />
      <Services />
      <ConstructionFocus />
      <Contact />
      <Footer />
    </div>
  );
}
