'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Mic,
  ArrowRight,
  FileText,
  CheckSquare,
  TrendingUp,
  Clock,
  Square
} from 'lucide-react';

// Dummy transcription data
const voiceTranscript = `Right, Monday the twenty-third. Weather's been decent, dry and overcast, about eight degrees. We've got forty-two on site today — Kingsway M&E have got six on first fix in zones three and four, drylining team started on level one this morning, three of them. Groundworks finished the drainage run on the north side, that's been signed off by building control. Two deliveries today — plasterboard arrived at half seven, all stacked in the compound, and the structural steel for the canopy came at eleven, crane's booked for Wednesday to lift it. Issue with the fire stopping in the ceiling void on level one — void height is less than what's on the drawing, M&E can't get the ductwork through. Need a revised coordination drawing from the architect. Raised it as a blocker, reference BLK-0034. Tom's going to chase Hamilton Associates tomorrow. Nothing else major — good productive day.`;

const siteDiary = `DAILY SITE DIARY — Monday 23 March 2026
Riverside Academy — New Teaching Block

WEATHER: Dry, overcast, approximately 8°C

LABOUR (42 persons on site):
  Kingsway M&E Services — 6 no. (M&E first fix, Zones 3-4)
  Drylining team — 3 no. (Level 1, commenced today)
  Groundworks — [number not stated] (drainage completion)
  [Other trades not specified in recording]

DELIVERIES:
  07:30 — Plasterboard delivery received. Stored in compound.
  11:00 — Structural steel for canopy delivered. Crane lift
           scheduled Wednesday 25 March.

WORKS COMPLETED:
  Drainage run (north side) — completed and signed off by
  Building Control.

WORKS IN PROGRESS:
  M&E first fix — Zones 3-4 (ongoing)
  Drylining — Level 1 (commenced today)

ISSUES & BLOCKERS:
  Fire stopping / ceiling void — Level 1 void height less than
  designed dimension. M&E ductwork route obstructed. Revised
  coordination drawing required from Hamilton Associates
  (Architect). Raised as BLK-0034. Chase action: Tom Ashworth
  to follow up 24/03.

INSTRUCTIONS:
  None recorded.

VISITORS:
  Building Control Officer (drainage sign-off)`;

const actionList = [
  { id: 1, action: 'Chase Hamilton Associates for revised coordination drawing (BLK-0034)', owner: 'Tom Ashworth', priority: 'HIGH', due: '24 Mar' },
  { id: 2, action: 'Confirm crane booking for canopy steel lift — Wednesday 25 Mar', owner: 'Site Manager', priority: 'MEDIUM', due: '24 Mar' },
  { id: 3, action: 'Verify plasterboard delivery against order (quantity check)', owner: 'Stores', priority: 'LOW', due: '23 Mar' },
];

const progressSummary = `Daily Progress Summary — 23 March 2026

Overall status: PRODUCTIVE DAY — good progress across multiple fronts.

Key achievements: Drainage run completed and signed off (programme
milestone). Drylining commenced on Level 1 (new activity started on
programme). Two deliveries received on time.

Watch items: Ceiling void height issue on Level 1 may impact M&E
programme if coordination drawing is delayed. Current float on
M&E first fix: 3 days.

Tomorrow's priorities: Chase architect on coordination drawing.
Crane lift preparation for canopy steel.`;

function useInView(ref: React.RefObject<HTMLElement | null>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}

function TypewriterText({ text, isActive, speed = 20 }: { text: string; isActive: boolean; speed?: number }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayText('');
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, isActive, speed]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
}

export default function SVLDemoPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeTab, setActiveTab] = useState('diary');
  const [showOutputs, setShowOutputs] = useState(false);
  const voiceRef = useRef<HTMLDivElement>(null);
  const isVoiceInView = useInView(voiceRef, { threshold: 0.3 });

  useEffect(() => {
    if (isVoiceInView && !isRecording && !showTranscript) {
      // Auto-start the demo
      setTimeout(() => {
        setIsRecording(true);
        setTimeout(() => {
          setShowTranscript(true);
          setTimeout(() => {
            setIsRecording(false);
            setShowOutputs(true);
          }, 4000);
        }, 1000);
      }, 500);
    }
  }, [isVoiceInView, isRecording, showTranscript]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'HIGH': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'MEDIUM': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/products/svl" className="text-slate-400 hover:text-white transition-colors text-sm">
            ← Back to SVL
          </Link>
          <span className="text-cyan-400 font-semibold">Interactive Demo</span>
          <Link
            href="/#contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-medium
              hover:from-blue-600 hover:to-cyan-700 transition-all"
          >
            Join Waitlist
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            60 Seconds vs 60 Minutes
          </h1>
          <p className="text-slate-400 text-lg">
            Watch a site diary get created from voice in real time
          </p>
        </div>
      </section>

      {/* Section 1: Voice Input Mockup */}
      <section ref={voiceRef} className="py-16 sm:py-24 border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="w-72 bg-slate-900 rounded-[2.5rem] p-3 border-4 border-slate-700 shadow-2xl">
                {/* Phone Status Bar */}
                <div className="bg-slate-800 rounded-t-[2rem] px-6 py-2 flex justify-between items-center text-xs text-slate-400">
                  <span>14:32</span>
                  <div className="w-20 h-5 bg-slate-700 rounded-full" />
                  <span>85%</span>
                </div>

                {/* Phone Screen */}
                <div className="bg-slate-950 min-h-[400px] rounded-b-[2rem] p-6 flex flex-col items-center justify-center">
                  <div className="text-cyan-400 font-semibold mb-8">SVL</div>

                  {/* Waveform */}
                  <div className="flex items-center justify-center gap-1 h-16 mb-8">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-cyan-400 rounded-full transition-all duration-150 ${
                          isRecording ? 'animate-pulse' : ''
                        }`}
                        style={{
                          height: isRecording ? `${Math.random() * 40 + 10}px` : '4px',
                          animationDelay: `${i * 50}ms`
                        }}
                      />
                    ))}
                  </div>

                  {/* Record Button */}
                  <button
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                      isRecording
                        ? 'bg-red-500 animate-pulse'
                        : 'bg-cyan-500 hover:bg-cyan-400'
                    }`}
                  >
                    {isRecording ? (
                      <Square className="w-8 h-8 text-white" />
                    ) : (
                      <Mic className="w-8 h-8 text-white" />
                    )}
                  </button>

                  <div className="text-slate-400 text-sm mt-4">
                    {isRecording ? 'Recording...' : 'Tap to record'}
                  </div>

                  {isRecording && (
                    <div className="text-cyan-400 text-xs mt-2 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      01:32
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Transcription */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Mic className="w-5 h-5 text-cyan-400" />
                Live Transcription
              </h2>

              <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-4 h-80 overflow-y-auto">
                {showTranscript ? (
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;<TypewriterText text={voiceTranscript} isActive={showTranscript} speed={15} />&rdquo;
                  </p>
                ) : (
                  <p className="text-slate-500 text-sm">
                    Waiting for voice input...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI Output */}
      {showOutputs && (
        <section className="py-16 sm:py-24 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">AI-Generated Output</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800/50 pb-4">
              {[
                { id: 'diary', label: 'Site Diary', icon: FileText },
                { id: 'actions', label: 'Action List', icon: CheckSquare },
                { id: 'progress', label: 'Progress Summary', icon: TrendingUp },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Output Content */}
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6">
              {activeTab === 'diary' && (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {siteDiary}
                </pre>
              )}

              {activeTab === 'actions' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">#</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Action</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Owner</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Priority</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {actionList.map((item) => (
                        <tr key={item.id} className="border-b border-slate-800/30">
                          <td className="py-3 px-4 text-white">{item.id}</td>
                          <td className="py-3 px-4 text-slate-300">{item.action}</td>
                          <td className="py-3 px-4 text-slate-400">{item.owner}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-400">{item.due}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'progress' && (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {progressSummary}
                </pre>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Comparison */}
      <section className="py-16 sm:py-24 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            The Difference
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without SVL */}
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Without SVL</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Drive home after a long day
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Open laptop, try to remember the day
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Type up diary from memory
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Forget half the detail
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Submit late
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-red-500/20">
                <div className="text-2xl font-bold text-red-400">45-60 minutes</div>
                <div className="text-slate-500 text-sm">Every single day</div>
              </div>
            </div>

            {/* With SVL */}
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">With SVL</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Walk to car at end of day
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Talk for 90 seconds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  AI generates formal diary
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Every detail captured
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Done before you leave site
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-emerald-500/20">
                <div className="text-2xl font-bold text-emerald-400">60 seconds</div>
                <div className="text-slate-500 text-sm">Diary done, home time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Stop typing. Start talking.
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join the waitlist to be first in line when SVL launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold text-lg
                hover:from-blue-600 hover:to-cyan-700 transition-all
                shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                border border-slate-700 text-slate-300 font-semibold text-lg
                hover:border-slate-600 hover:text-white transition-all"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm mb-4">Seen enough? Let&apos;s talk.</p>
          <Link
            href="/#contact"
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Book a Call →
          </Link>
        </div>
      </footer>
    </div>
  );
}
