import { HardHat, AlertTriangle, Mic, FileText, Mail, CheckSquare, FileSearch, PenTool, FileCheck, GitCompare, LayoutDashboard } from 'lucide-react';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const ConstructionFocus = () => {
  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950"></div>

      <div className="absolute top-0 left-0 w-full h-2 sm:h-4 bg-[repeating-linear-gradient(45deg,#78350f,#78350f_20px,transparent_20px,transparent_40px)] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 sm:h-4 bg-[repeating-linear-gradient(45deg,#78350f,#78350f_20px,transparent_20px,transparent_40px)] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_8px_32px_0_rgba(245,158,11,0.1)] animate-pulse-slow">
              <HardHat className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mr-2" />
              <span className="text-amber-200 text-xs sm:text-sm font-black tracking-wide uppercase">
                ELIMINATING WASTED TIME
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Building Smarter with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Intelligent Tools.
              </span>
            </h2>
            <p className="text-amber-100/70 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-medium max-w-4xl mx-auto">
              Choose from a range of intelligent automation solutions tailored to construction workflows. Each option is designed to eliminate administrative burden and enhance project delivery.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* Unified Dashboard */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <LayoutDashboard className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Unified Project Dashboard
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Collate data from multiple apps into a single real-time view, giving contractors up-to-date project intelligence at a glance.
            </p>
          </div>

          {/* RAMS Analysis */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <AlertTriangle className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              RAMS Analysis
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Auto-scan Risk Assessments and Method Statements for compliance gaps in seconds, not hours.
            </p>
          </div>

          {/* Voice Site Diaries */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <Mic className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Voice-Based Site Diaries
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Site managers speak their daily logs. AI transcribes, summarizes, and files them instantly.
            </p>
          </div>

          {/* Verbal Instructions */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <FileText className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Verbal Instruction Capture
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Voice-to-form technology converts verbal site instructions into formal CVIs instantly to prevent disputes.
            </p>
          </div>

          {/* Email Summary Automation */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Email Summary Automation
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Drowning in emails? Get a daily digest with key actions extracted and prioritised automatically.
            </p>
          </div>

          {/* QA File Checking */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <CheckSquare className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              QA File Checking
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Automated quality assurance reviews of project documentation to catch errors before submission.
            </p>
          </div>

          {/* Tender Gap Analysis */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <FileSearch className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Tender Gap Analysis
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Identify missing requirements and compliance gaps in tender proposals before submission deadlines.
            </p>
          </div>

          {/* Document Preparation Assistant */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <PenTool className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Document Preparation Assistant
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              AI-powered prompt engineering to streamline contract documents, reports, and correspondence preparation.
            </p>
          </div>

          {/* Contract Compliance Review */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <FileCheck className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Contract Compliance Review
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Automated scanning of contractual obligations against deliverables to ensure full compliance.
            </p>
          </div>

          {/* Change Order Validation */}
          <div className="flex flex-col items-center text-center group p-3 sm:p-4 md:p-6 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5 backdrop-blur-sm">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden ring-1 ring-amber-600/50 shadow-md shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 to-orange-600/70 blur-md"></div>
              <GitCompare className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 drop-shadow-sm" />
            </div>
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-amber-400 transition-colors mb-1 sm:mb-2">
              Change Order Validation
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Intelligent verification of variation claims against contract scope to prevent revenue leakage.
            </p>
          </div>
        </div>

        <p className="text-amber-100/70 text-base sm:text-lg mt-8 sm:mt-10 md:mt-12 leading-relaxed font-medium max-w-4xl mx-auto text-center">
          If you have a need for a bespoke solution to suit your business then contact me for a discovery call.
        </p>
      </div>
    </section>
  );
};
