import Image from 'next/image';
import { Target, Users, Award } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success in hours saved and efficiency gained, not in features delivered."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work alongside your team, not above them. Your success is our success."
    },
    {
      icon: Award,
      title: "Construction Specialists",
      description: "We speak your language. No generic tech solutions—only construction-specific AI."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-3/4 h-3/4 sm:w-1/2 sm:h-1/2 bg-emerald-900/10 blur-[100px] sm:blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 sm:w-1/2 sm:h-1/2 bg-teal-900/10 blur-[100px] sm:blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left side - Image */}
          <RevealOnScroll>
            <div className="relative">
              {/* Main image container */}
              <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/partnership-handshake.png"
                  alt="Business partnership handshake representing collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 sm:-top-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-full blur-2xl sm:blur-3xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-teal-600/30 to-green-600/30 rounded-full blur-2xl sm:blur-3xl"></div>
            </div>
          </RevealOnScroll>

          {/* Right side - Content */}
          <RevealOnScroll className="delay-200">
            <div>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
                WHY CHOOSE US
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Built for Construction,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400">
                  Not Tech Companies
                </span>
              </h3>
              <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                We embed AI into your existing workflows, train your team to use it confidently, and stick around to ensure it delivers ROI.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {values.map((value, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mr-3 sm:mr-4 shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg mb-1">{value.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
