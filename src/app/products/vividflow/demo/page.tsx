'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Send,
  Users,
  TrendingUp,
  MessageSquare,
  Bell,
  CheckCircle,
  Clock,
  Eye,
  MousePointer,
  ArrowRight,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Phone,
  Building2,
  Calendar
} from 'lucide-react';

// Sample leads for the pipeline demo
const sampleLeads = [
  { id: 1, name: 'Smith & Sons Electrical', email: 'info@smithsons.co.uk', industry: 'Electricians', status: 'new', score: 85 },
  { id: 2, name: 'Premier Plumbing Ltd', email: 'contact@premierplumb.co.uk', industry: 'Plumbers', status: 'contacted', score: 72 },
  { id: 3, name: 'Apex Roofing Solutions', email: 'hello@apexroof.co.uk', industry: 'Roofing', status: 'engaged', score: 91 },
  { id: 4, name: 'Green Landscapes', email: 'enquiries@greenland.co.uk', industry: 'Landscaping', status: 'replied', score: 94 },
  { id: 5, name: 'City Accountants LLP', email: 'partners@cityacc.co.uk', industry: 'Accountants', status: 'meeting', score: 98 },
];

const emailSequence = [
  {
    day: 1,
    subject: 'Quick question about your business website',
    preview: 'Hi {{name}}, I noticed your business could benefit from...',
    status: 'sent',
    opens: 67,
    clicks: 23,
  },
  {
    day: 3,
    subject: 'Following up - saw you opened my last email',
    preview: 'Just wanted to check if you had a chance to look at...',
    status: 'sent',
    opens: 54,
    clicks: 18,
  },
  {
    day: 7,
    subject: 'Last chance: Free consultation offer ends Friday',
    preview: 'I know you are busy, but I wanted to make sure you...',
    status: 'scheduled',
    opens: null,
    clicks: null,
  },
];

const pipelineStages = [
  { name: 'New Leads', count: 124, color: 'bg-blue-500' },
  { name: 'Contacted', count: 89, color: 'bg-purple-500' },
  { name: 'Engaged', count: 45, color: 'bg-amber-500' },
  { name: 'Replied', count: 28, color: 'bg-green-500' },
  { name: 'Meeting Set', count: 12, color: 'bg-emerald-500' },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'new': return 'bg-blue-500';
    case 'contacted': return 'bg-purple-500';
    case 'engaged': return 'bg-amber-500';
    case 'replied': return 'bg-green-500';
    case 'meeting': return 'bg-emerald-500';
    default: return 'bg-slate-500';
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'new': return 'New Lead';
    case 'contacted': return 'Contacted';
    case 'engaged': return 'Engaged';
    case 'replied': return 'Replied';
    case 'meeting': return 'Meeting Set';
    default: return status;
  }
}

export default function VividFlowDemo() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'emails' | 'alerts'>('pipeline');
  const [isSequenceRunning, setIsSequenceRunning] = useState(false);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [showTelegramAlert, setShowTelegramAlert] = useState(false);
  const [animatedLeads, setAnimatedLeads] = useState<typeof sampleLeads>([]);

  // Animate leads appearing
  useEffect(() => {
    if (activeTab === 'pipeline') {
      setAnimatedLeads([]);
      sampleLeads.forEach((lead, index) => {
        setTimeout(() => {
          setAnimatedLeads(prev => [...prev, lead]);
        }, index * 200);
      });
    }
  }, [activeTab]);

  // Email sequence animation
  useEffect(() => {
    if (isSequenceRunning && currentEmailIndex < emailSequence.length) {
      const timer = setTimeout(() => {
        setCurrentEmailIndex(prev => prev + 1);
        if (currentEmailIndex === 1) {
          // Show Telegram alert when reply comes in
          setTimeout(() => setShowTelegramAlert(true), 500);
        }
      }, 2000);
      return () => clearTimeout(timer);
    } else if (currentEmailIndex >= emailSequence.length) {
      setIsSequenceRunning(false);
    }
  }, [isSequenceRunning, currentEmailIndex]);

  const startSequence = () => {
    setCurrentEmailIndex(0);
    setShowTelegramAlert(false);
    setIsSequenceRunning(true);
  };

  const resetSequence = () => {
    setCurrentEmailIndex(0);
    setShowTelegramAlert(false);
    setIsSequenceRunning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/products/vividflow"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to VividFlow</span>
            </Link>
            <span className="text-sm text-amber-400 font-medium">Interactive Demo</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Automated Lead Generation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Watch Your Pipeline
            <span className="text-amber-400"> Fill Automatically</span>
          </h1>
          <p className="text-xl text-slate-300">
            See how VividFlow finds, qualifies, and nurtures leads while you focus on your craft.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex gap-2 p-1 bg-slate-800/50 rounded-xl w-fit mx-auto">
          {[
            { id: 'pipeline', label: 'Lead Pipeline', icon: Users },
            { id: 'emails', label: 'Email Sequences', icon: Mail },
            { id: 'alerts', label: 'Real-Time Alerts', icon: Bell },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-slate-900'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Demo Area */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Pipeline Tab */}
          {activeTab === 'pipeline' && (
            <div className="space-y-8">
              {/* Pipeline Overview */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  Pipeline Overview
                </h3>

                <div className="grid grid-cols-5 gap-4 mb-8">
                  {pipelineStages.map((stage, index) => (
                    <div key={stage.name} className="relative">
                      <div className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                        <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <span className="text-white font-bold">{stage.count}</span>
                        </div>
                        <p className="text-white text-sm font-medium">{stage.name}</p>
                      </div>
                      {index < pipelineStages.length - 1 && (
                        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-4 h-4 text-slate-500" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Leads Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                        <th className="pb-4 font-medium">Business</th>
                        <th className="pb-4 font-medium">Industry</th>
                        <th className="pb-4 font-medium">Status</th>
                        <th className="pb-4 font-medium">Score</th>
                        <th className="pb-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {animatedLeads.map((lead, index) => (
                        <tr
                          key={lead.id}
                          className="border-b border-slate-700/30 animate-fadeIn"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <td className="py-4">
                            <div>
                              <p className="text-white font-medium">{lead.name}</p>
                              <p className="text-slate-400 text-sm">{lead.email}</p>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="text-slate-300">{lead.industry}</span>
                          </td>
                          <td className="py-4">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(lead.status)}`}>
                              {getStatusLabel(lead.status)}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${lead.score >= 90 ? 'bg-green-500' : lead.score >= 70 ? 'bg-amber-500' : 'bg-blue-500'}`}
                                  style={{ width: `${lead.score}%` }}
                                />
                              </div>
                              <span className="text-slate-300 text-sm">{lead.score}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-700/50 rounded-lg transition-colors">
                                <Mail className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-700/50 rounded-lg transition-colors">
                                <Phone className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-700/50 rounded-lg transition-colors">
                                <Calendar className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Email Sequences Tab */}
          {activeTab === 'emails' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Email Sequence */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Send className="w-5 h-5 text-amber-400" />
                    Drip Campaign
                  </h3>
                  <div className="flex gap-2">
                    {!isSequenceRunning ? (
                      <button
                        onClick={startSequence}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 rounded-lg font-medium hover:bg-amber-400 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Run Demo
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsSequenceRunning(false)}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-500 transition-colors"
                      >
                        <Pause className="w-4 h-4" />
                        Pause
                      </button>
                    )}
                    <button
                      onClick={resetSequence}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {emailSequence.map((email, index) => {
                    const isSent = index < currentEmailIndex;
                    const isCurrent = index === currentEmailIndex && isSequenceRunning;

                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border transition-all ${
                          isSent
                            ? 'bg-green-500/10 border-green-500/30'
                            : isCurrent
                            ? 'bg-amber-500/10 border-amber-400/30 animate-pulse'
                            : 'bg-slate-700/30 border-slate-600/50 opacity-50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isSent ? 'bg-green-500' : isCurrent ? 'bg-amber-500' : 'bg-slate-600'
                          }`}>
                            {isSent ? (
                              <CheckCircle className="w-5 h-5 text-white" />
                            ) : (
                              <span className="text-white font-medium">D{email.day}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium mb-1">{email.subject}</p>
                            <p className="text-slate-400 text-sm mb-3">{email.preview}</p>
                            {isSent && (
                              <div className="flex items-center gap-4 text-sm">
                                <span className="flex items-center gap-1 text-slate-300">
                                  <Eye className="w-4 h-4" />
                                  {email.opens}% opens
                                </span>
                                <span className="flex items-center gap-1 text-slate-300">
                                  <MousePointer className="w-4 h-4" />
                                  {email.clicks}% clicks
                                </span>
                              </div>
                            )}
                            {isCurrent && (
                              <span className="text-amber-400 text-sm animate-pulse">Sending...</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Email Preview */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-amber-400" />
                  Email Preview
                </h3>

                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <p className="text-slate-500 text-sm">From: <span className="text-slate-700">gareth@vividflow.co.uk</span></p>
                      <p className="text-slate-500 text-sm">To: <span className="text-slate-700">info@smithsons.co.uk</span></p>
                      <p className="text-slate-700 font-medium mt-2">Quick question about your business website</p>
                    </div>
                    <div className="text-slate-600 text-sm space-y-4">
                      <p>Hi John,</p>
                      <p>I noticed Smith & Sons Electrical has been growing rapidly this year - congratulations on the expansion!</p>
                      <p>I help trade businesses like yours generate consistent leads through targeted digital marketing. Many electricians I work with have seen a 40% increase in qualified enquiries within 90 days.</p>
                      <p>Would you be open to a quick 15-minute call to see if this could work for your business?</p>
                      <p className="mt-6">
                        Best regards,<br />
                        <span className="font-medium text-slate-700">Gareth Kerr</span><br />
                        VividFlow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Telegram Alerts */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-400" />
                  Telegram Notifications
                </h3>

                <div className="bg-[#1a2836] rounded-xl p-4 space-y-4">
                  {/* Telegram header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">VividFlow Bot</p>
                      <p className="text-slate-400 text-xs">online</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3">
                    <div className="bg-[#2b3f4e] rounded-xl px-4 py-3 max-w-[80%]">
                      <p className="text-white text-sm mb-1">🎯 <strong>New Lead Alert!</strong></p>
                      <p className="text-slate-300 text-sm">
                        Smith & Sons Electrical just opened your email for the 3rd time.
                      </p>
                      <p className="text-slate-500 text-xs mt-2">10:34 AM</p>
                    </div>

                    <div className="bg-[#2b3f4e] rounded-xl px-4 py-3 max-w-[80%]">
                      <p className="text-white text-sm mb-1">🔥 <strong>Hot Lead!</strong></p>
                      <p className="text-slate-300 text-sm">
                        Apex Roofing Solutions clicked through to your pricing page.
                      </p>
                      <p className="text-slate-500 text-xs mt-2">10:42 AM</p>
                    </div>

                    {showTelegramAlert && (
                      <div className="bg-green-600/20 border border-green-500/30 rounded-xl px-4 py-3 max-w-[80%] animate-slideIn">
                        <p className="text-white text-sm mb-1">✉️ <strong>Reply Received!</strong></p>
                        <p className="text-slate-300 text-sm">
                          Green Landscapes just replied: &quot;Yes, I&apos;d be interested in a call...&quot;
                        </p>
                        <p className="text-slate-500 text-xs mt-2">Just now</p>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setShowTelegramAlert(true)}
                  className="mt-4 w-full px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  Simulate Reply Alert
                </button>
              </div>

              {/* Auto-Reply AI */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  AI Auto-Reply Suggestions
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-5 h-5 text-amber-400" />
                      <span className="text-white font-medium">Green Landscapes</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Replied</span>
                    </div>
                    <p className="text-slate-300 text-sm italic mb-4">
                      &quot;Yes, I&apos;d be interested in a call. We&apos;re looking to get more commercial contracts this year.&quot;
                    </p>

                    <div className="space-y-3">
                      <p className="text-slate-400 text-xs font-medium">AI Suggested Response:</p>
                      <div className="p-3 bg-amber-500/10 border border-amber-400/30 rounded-lg">
                        <p className="text-slate-200 text-sm">
                          Hi [Name], Great to hear from you! I&apos;d love to discuss how we can help Green Landscapes win more commercial contracts. I have availability this Thursday at 2pm or Friday at 10am - would either work for a quick 15-minute call?
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-amber-500 text-slate-900 rounded-lg font-medium hover:bg-amber-400 transition-colors text-sm">
                          Send Response
                        </button>
                        <button className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors text-sm">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>2 more replies waiting for review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '300+', label: 'Leads Generated Monthly', icon: Users },
              { value: '45%', label: 'Average Open Rate', icon: Eye },
              { value: '12%', label: 'Reply Rate', icon: MessageSquare },
              { value: '3x', label: 'ROI on Average', icon: TrendingUp },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Fill Your Pipeline?
          </h2>
          <p className="text-slate-300 mb-8">
            Stop chasing leads manually. Let VividFlow do the heavy lifting while you focus on delivering quality work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 rounded-xl font-semibold hover:bg-amber-400 transition-colors"
            >
              Start Generating Leads
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products/vividflow"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
