import Image from 'next/image';
import { Building2, Ruler, Hammer, TrendingUp } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const companyLogos = [
  { name: 'UK Parliament', src: '/images/logos/uk-parliament.png' },
  { name: 'CBRE', src: '/images/logos/cbre.png' },
  { name: 'Diageo', src: '/images/logos/diageo.png' },
  { name: 'NHS King\'s College Hospital', src: '/images/logos/nhs-kings-college.png' },
  { name: 'Royal Hospital Chelsea', src: '/images/logos/royal-hospital-chelsea.png' },
  { name: 'Brown-Forman', src: '/images/logos/brown-forman.png' },
  { name: 'Savills', src: '/images/logos/savills.png' },
  { name: 'Wittington Investments', src: '/images/logos/wittington-investments.png' },
  { name: 'HSBC UK', src: '/images/logos/hsbc.png' },
  { name: 'Ministry of Justice', src: '/images/logos/ministry-of-justice.png' },
  { name: 'HM Courts & Tribunals Service', src: '/images/logos/hm-courts-tribunals.png' },
  { name: 'Publicis Groupe', src: '/images/logos/publicis-groupe.png' },
];

const projectTypes = [
  {
    icon: Building2,
    title: 'CAT A & CAT B',
    description: 'Commercial office fit-outs and base builds',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Hammer,
    title: 'Refurbishment',
    description: 'Complete renovations and upgrades',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Ruler,
    title: 'Cut & Carve',
    description: 'Space reconfiguration and optimization',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: TrendingUp,
    title: '1M+ Sq Ft',
    description: 'Total space delivered across projects',
    color: 'from-amber-500 to-orange-500'
  }
];

export const CareerExperience = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-slate-950 relative overflow-hidden border-y border-white/5">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] bg-emerald-900/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-300 font-black tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              CONSTRUCTION CAREER BACKGROUND
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Trusted by Leading Organisations
            </h3>
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
              Before specialising in AI consultancy, we delivered complex construction projects for some
              of the UK&apos;s most prestigious clients across government, healthcare, corporate, and
              commercial sectors.
            </p>
          </div>
        </RevealOnScroll>

        {/* Company Logos - Infinite Scroll - NOW FIRST on mobile */}
        <RevealOnScroll className="delay-100">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mb-8 sm:mb-12 md:mb-16">
            <h4 className="text-white font-bold text-center mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm tracking-widest uppercase text-slate-400">
              Organisations We&apos;ve Delivered Projects For
            </h4>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden">
              {/* Gradient Fades */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-slate-950/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-slate-950/80 to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling Track - using inline-flex and gap for precise spacing */}
              <div className="inline-flex gap-8 sm:gap-12 md:gap-16 animate-scroll-smooth">
                {/* First set of logos */}
                {companyLogos.map((logo, idx) => (
                  <div
                    key={`logo-1-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center w-[120px] h-[50px] sm:w-[150px] sm:h-[65px] md:w-[180px] md:h-[80px]"
                  >
                    <div className="relative w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity group">
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop - identical spacing */}
                {companyLogos.map((logo, idx) => (
                  <div
                    key={`logo-2-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center w-[120px] h-[50px] sm:w-[150px] sm:h-[65px] md:w-[180px] md:h-[80px]"
                  >
                    <div className="relative w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity group">
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-slate-500 text-xs text-center mt-4 sm:mt-6 md:mt-8 italic">
              * Projects delivered in construction/project management capacity prior to AI consultancy specialisation
            </p>
          </div>
        </RevealOnScroll>

        {/* Project Types Grid - NOW SECOND */}
        <RevealOnScroll className="delay-200">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {projectTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <type.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{type.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll-smooth {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-120px * 12 - 2rem * 12));
          }
        }
        @media (min-width: 640px) {
          @keyframes scroll-smooth {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-150px * 12 - 3rem * 12));
            }
          }
        }
        @media (min-width: 768px) {
          @keyframes scroll-smooth {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-180px * 12 - 4rem * 12));
            }
          }
        }
        .animate-scroll-smooth {
          animation: scroll-smooth 35s linear infinite;
          will-change: transform;
        }
        @media (min-width: 768px) {
          .animate-scroll-smooth {
            animation: scroll-smooth 45s linear infinite;
          }
        }
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
