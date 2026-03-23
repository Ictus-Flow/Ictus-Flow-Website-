'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Building2,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Mic,
  Send,
  FileText,
  Lightbulb,
  BarChart3,
  Brain,
  Zap,
  Shield,
  Target,
  History,
  Award,
  Filter,
  Search,
  Camera,
  PlusCircle,
  UserCheck,
  Wrench,
  ClipboardCheck,
  ThumbsUp,
  XCircle,
  Ban,
  Bell
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
type BlockerStatus = 'pending_review' | 'assigned' | 'in_progress' | 'completed' | 'verified_complete' | 'closed' | 'rejected' | 'cancelled';

interface Blocker {
  id: string;
  title: string;
  status: BlockerStatus;
  priority: 'critical' | 'high' | 'medium' | 'low';
  assignee: string;
  daysOpen: number;
  project: string;
}

interface Project {
  id: string;
  name: string;
  health: number;
  activeBlockers: number;
  resolvedThisWeek: number;
  trend: 'up' | 'down' | 'stable';
}

interface LessonLearned {
  id: string;
  blockerType: string;
  insight: string;
  frequency: number;
  avgResolutionDays: number;
  recommendation: string;
}

interface SubcontractorScore {
  name: string;
  responsiveness: number;
  quality: number;
  communication: number;
  overall: number;
  blockersAssigned: number;
  avgResolutionDays: number;
}

// ============================================================================
// SAMPLE DATA
// ============================================================================
const sampleBlockers: Blocker[] = [
  { id: 'BLK-0034', title: 'Fire stopping void height discrepancy', status: 'in_progress', priority: 'critical', assignee: 'Tom Wilson', daysOpen: 3, project: 'Riverside Academy' },
  { id: 'BLK-0033', title: 'Structural steel delivery delay', status: 'assigned', priority: 'high', assignee: 'Sarah Chen', daysOpen: 5, project: 'Riverside Academy' },
  { id: 'BLK-0032', title: 'M&E coordination clash - Zone 4', status: 'pending_review', priority: 'high', assignee: 'Unassigned', daysOpen: 1, project: 'Riverside Academy' },
  { id: 'BLK-0031', title: 'Planning condition discharge pending', status: 'completed', priority: 'medium', assignee: 'Mike Johnson', daysOpen: 12, project: 'City Tower' },
  { id: 'BLK-0030', title: 'Subcontractor labour shortage', status: 'verified_complete', priority: 'high', assignee: 'Emma Davis', daysOpen: 8, project: 'City Tower' },
];

const sampleProjects: Project[] = [
  { id: '1', name: 'Riverside Academy', health: 78, activeBlockers: 3, resolvedThisWeek: 2, trend: 'up' },
  { id: '2', name: 'City Tower', health: 92, activeBlockers: 1, resolvedThisWeek: 4, trend: 'up' },
  { id: '3', name: 'Metro Station', health: 65, activeBlockers: 5, resolvedThisWeek: 1, trend: 'down' },
  { id: '4', name: 'Harbour Bridge', health: 88, activeBlockers: 2, resolvedThisWeek: 3, trend: 'stable' },
];

const lessonsLearned: LessonLearned[] = [
  {
    id: '1',
    blockerType: 'M&E Coordination Clashes',
    insight: 'Occur most frequently in weeks 8-12 of fit-out phase',
    frequency: 24,
    avgResolutionDays: 4.2,
    recommendation: 'Schedule BIM coordination review at week 6 milestone'
  },
  {
    id: '2',
    blockerType: 'Material Delivery Delays',
    insight: 'Steel and glazing have longest lead times, causing 67% of delivery blockers',
    frequency: 18,
    avgResolutionDays: 7.8,
    recommendation: 'Order steel/glazing 2 weeks earlier than standard procurement schedule'
  },
  {
    id: '3',
    blockerType: 'Design Information Gaps',
    insight: 'Architect response time averages 5.3 days vs 2 day SLA',
    frequency: 31,
    avgResolutionDays: 6.1,
    recommendation: 'Escalate RFIs not responded to within 48 hours automatically'
  },
];

const subcontractorScores: SubcontractorScore[] = [
  { name: 'Kingsway M&E Services', responsiveness: 92, quality: 88, communication: 95, overall: 92, blockersAssigned: 12, avgResolutionDays: 2.3 },
  { name: 'Hamilton Associates', responsiveness: 68, quality: 85, communication: 72, overall: 75, blockersAssigned: 8, avgResolutionDays: 5.1 },
  { name: 'Premier Drylining', responsiveness: 88, quality: 91, communication: 86, overall: 88, blockersAssigned: 6, avgResolutionDays: 3.2 },
  { name: 'Apex Groundworks', responsiveness: 95, quality: 90, communication: 93, overall: 93, blockersAssigned: 9, avgResolutionDays: 1.8 },
];

// Walkthrough steps (0-16)
const walkthroughSteps = [
  // Phase 1: Capturing the Blocker (Steps 0-3)
  {
    step: 0,
    phase: 'capture',
    title: 'Discover a Blocker',
    description: 'You\'re on site and notice the M&E ductwork can\'t fit through the ceiling void. The void height shown on drawings doesn\'t match reality.',
    action: 'Tap the + button to log a new blocker',
    icon: AlertTriangle,
  },
  {
    step: 1,
    phase: 'capture',
    title: 'Voice or Type Description',
    description: 'Speak naturally: "Void height in level one ceiling is less than the drawing shows. M&E can\'t get the ductwork through. Need revised coordination drawing from the architect."',
    action: 'AI transcribes and structures your input',
    icon: Mic,
  },
  {
    step: 2,
    phase: 'capture',
    title: 'Attach Photos',
    description: 'Take photos of the actual void height and the drawing discrepancy. Visual evidence helps the architect understand the issue immediately.',
    action: 'Add photos from camera or gallery',
    icon: Camera,
  },
  {
    step: 3,
    phase: 'capture',
    title: 'AI Auto-Classification',
    description: 'The system automatically categorises this as "Design Coordination" blocker, sets priority to "High" based on M&E impact, and suggests Hamilton Associates as the responsible party.',
    action: 'Review and confirm AI suggestions',
    icon: Sparkles,
  },
  // Phase 2: Assignment & Notification (Steps 4-6)
  {
    step: 4,
    phase: 'assignment',
    title: 'Assign Responsibility',
    description: 'Select Hamilton Associates as the responsible party. The system shows their average response time (5.1 days) and current workload (3 open items).',
    action: 'Confirm assignment with due date',
    icon: UserCheck,
  },
  {
    step: 5,
    phase: 'assignment',
    title: 'Instant Notifications',
    description: 'Hamilton Associates receive an email with full blocker details, photos, and a deep link to respond. Your PM and site manager are CC\'d automatically.',
    action: 'Notifications sent to all stakeholders',
    icon: Send,
  },
  {
    step: 6,
    phase: 'assignment',
    title: 'Status: Assigned',
    description: 'The blocker moves from "Pending Review" to "Assigned". It appears on Hamilton Associates\' dashboard with a 48-hour SLA countdown.',
    action: 'Track progress in real-time',
    icon: Clock,
  },
  // Phase 3: Resolution Workflow (Steps 7-9)
  {
    step: 7,
    phase: 'resolution',
    title: 'Work Begins',
    description: 'Hamilton Associates mark the blocker as "In Progress". They upload a revised coordination drawing showing the adjusted duct routing.',
    action: 'Attachments and comments added',
    icon: Wrench,
  },
  {
    step: 8,
    phase: 'resolution',
    title: 'Proposed Solution',
    description: 'The architect proposes dropping the ceiling by 50mm to accommodate the ductwork. They attach the revised RCP drawing and specification notes.',
    action: 'Solution ready for review',
    icon: FileText,
  },
  {
    step: 9,
    phase: 'resolution',
    title: 'Mark as Completed',
    description: 'Hamilton Associates mark the blocker as "Completed". The ball is now in your court to verify the solution works on site.',
    action: 'Status changes to Completed',
    icon: CheckCircle,
  },
  // Phase 4: Verification & Close (Steps 10-12)
  {
    step: 10,
    phase: 'verification',
    title: 'Verify on Site',
    description: 'You check the revised drawings against the actual conditions. The 50mm drop accommodates the ductwork. M&E confirms they can proceed.',
    action: 'Physical verification complete',
    icon: ClipboardCheck,
  },
  {
    step: 11,
    phase: 'verification',
    title: 'Accept or Reject',
    description: 'If the solution works, mark as "Verified Complete". If not, reject with comments and it returns to the assignee. In this case, it works!',
    action: 'Verified Complete - solution accepted',
    icon: ThumbsUp,
  },
  {
    step: 12,
    phase: 'verification',
    title: 'Close the Blocker',
    description: 'The blocker is closed. Resolution time, all communications, and attachments are archived. This data feeds into lessons learned and subcontractor scoring.',
    action: 'Blocker closed and archived',
    icon: Award,
  },
  // Phase 5: Cross-Project AI Intelligence (Steps 13-16)
  {
    step: 13,
    phase: 'intelligence',
    title: 'Pattern Recognition',
    description: 'AI analyses this blocker alongside 200+ similar cases across your projects. It identifies that M&E coordination clashes peak during weeks 8-12 of fit-out.',
    action: 'Patterns identified across portfolio',
    icon: Brain,
  },
  {
    step: 14,
    phase: 'intelligence',
    title: 'Predictive Alerts',
    description: 'On your next project entering week 8, the system proactively alerts: "Based on historical data, schedule BIM coordination review to prevent M&E clashes."',
    action: 'Proactive prevention enabled',
    icon: Zap,
  },
  {
    step: 15,
    phase: 'intelligence',
    title: 'Subcontractor Scoring',
    description: 'Hamilton Associates\' response time (5.1 days) is factored into their overall score. When selecting subcontractors for future projects, you see this data.',
    action: 'Performance data captured',
    icon: BarChart3,
  },
  {
    step: 16,
    phase: 'intelligence',
    title: 'Continuous Learning',
    description: 'Every closed blocker makes the system smarter. Your organisation builds institutional knowledge that survives staff turnover and improves with every project.',
    action: 'Organisational learning achieved',
    icon: Lightbulb,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
function getStatusColor(status: BlockerStatus): string {
  const colors: Record<BlockerStatus, string> = {
    pending_review: 'bg-amber-100 text-amber-700 border-amber-200',
    assigned: 'bg-blue-100 text-blue-700 border-blue-200',
    in_progress: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    completed: 'bg-purple-100 text-purple-700 border-purple-200',
    verified_complete: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    closed: 'bg-slate-100 text-slate-700 border-slate-200',
    rejected: 'bg-red-100 text-red-700 border-red-200',
    cancelled: 'bg-gray-100 text-gray-500 border-gray-200',
  };
  return colors[status];
}

function getStatusLabel(status: BlockerStatus): string {
  const labels: Record<BlockerStatus, string> = {
    pending_review: 'Pending Review',
    assigned: 'Assigned',
    in_progress: 'In Progress',
    completed: 'Completed',
    verified_complete: 'Verified',
    closed: 'Closed',
    rejected: 'Rejected',
    cancelled: 'Cancelled',
  };
  return labels[status];
}

function getStatusIcon(status: BlockerStatus) {
  const icons: Record<BlockerStatus, typeof Clock> = {
    pending_review: Clock,
    assigned: UserCheck,
    in_progress: Wrench,
    completed: CheckCircle,
    verified_complete: ThumbsUp,
    closed: Award,
    rejected: XCircle,
    cancelled: Ban,
  };
  return icons[status];
}

function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'critical': return 'bg-red-500';
    case 'high': return 'bg-orange-500';
    case 'medium': return 'bg-yellow-500';
    case 'low': return 'bg-green-500';
    default: return 'bg-slate-500';
  }
}

function getHealthColor(health: number): string {
  if (health >= 85) return 'text-emerald-500';
  if (health >= 70) return 'text-amber-500';
  return 'text-red-500';
}

function getScoreColor(score: number): string {
  if (score >= 90) return 'text-emerald-600 bg-emerald-50';
  if (score >= 75) return 'text-amber-600 bg-amber-50';
  return 'text-red-600 bg-red-50';
}

// ============================================================================
// COMPONENTS
// ============================================================================

// Section A: Project Health Radar
function ProjectHealthRadar({ health, isAnimating }: { health: number; isAnimating: boolean }) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (health / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-32 h-32 transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-slate-200"
        />
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className={`${getHealthColor(health)} transition-all duration-1000 ease-out`}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: isAnimating ? strokeDashoffset : circumference,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-2xl font-bold ${getHealthColor(health)}`}>
          {isAnimating ? health : 0}%
        </span>
      </div>
    </div>
  );
}

// Blocker Card (App-style, light theme)
function BlockerCard({ blocker, isHighlighted }: { blocker: Blocker; isHighlighted?: boolean }) {
  const StatusIcon = getStatusIcon(blocker.status);

  return (
    <div className={`bg-white rounded-xl border ${isHighlighted ? 'border-emerald-400 ring-2 ring-emerald-100' : 'border-slate-200'} p-4 transition-all hover:shadow-md`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getPriorityColor(blocker.priority)}`} />
          <span className="text-sm font-mono text-slate-500">{blocker.id}</span>
        </div>
        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(blocker.status)}`}>
          <StatusIcon className="w-3 h-3" />
          {getStatusLabel(blocker.status)}
        </span>
      </div>
      <h4 className="text-slate-900 font-medium mb-2">{blocker.title}</h4>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">{blocker.assignee}</span>
        <span className="text-slate-400 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {blocker.daysOpen}d
        </span>
      </div>
    </div>
  );
}

// Deep Dive Accordion
function DeepDiveAccordion({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: typeof FileText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-emerald-600" />
          <span className="font-medium text-slate-900">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function BlockerAppDemo() {
  const [activeSection, setActiveSection] = useState<'radar' | 'portfolio' | 'lessons' | 'scores' | 'walkthrough' | 'deep-dive'>('radar');
  const [currentStep, setCurrentStep] = useState(0);
  const [isRadarAnimating, setIsRadarAnimating] = useState(false);
  const [isWalkthroughPlaying, setIsWalkthroughPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger radar animation when section comes into view
  useEffect(() => {
    if (activeSection === 'radar') {
      setTimeout(() => setIsRadarAnimating(true), 300);
    }
  }, [activeSection]);

  // Auto-play walkthrough
  useEffect(() => {
    if (isWalkthroughPlaying && currentStep < walkthroughSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (currentStep >= walkthroughSteps.length - 1) {
      setIsWalkthroughPlaying(false);
    }
  }, [isWalkthroughPlaying, currentStep]);

  const currentWalkthroughStep = walkthroughSteps[currentStep];
  const StepIcon = currentWalkthroughStep.icon;

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'capture': return 'bg-amber-500';
      case 'assignment': return 'bg-blue-500';
      case 'resolution': return 'bg-purple-500';
      case 'verification': return 'bg-emerald-500';
      case 'intelligence': return 'bg-indigo-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/products/blocker-app"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blocker App</span>
            </Link>
            <span className="text-sm text-emerald-400 font-medium">Interactive Demo</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Construction Blocker Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See How Projects Stay
            <span className="text-emerald-400"> On Track</span>
          </h1>
          <p className="text-xl text-slate-300">
            Explore the complete blocker lifecycle — from voice capture to AI-powered insights
            that prevent problems before they happen.
          </p>
        </div>
      </section>

      {/* Section Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: 'radar', label: 'Health Radar', icon: Target },
            { id: 'portfolio', label: 'Portfolio View', icon: Building2 },
            { id: 'lessons', label: 'Lessons Learned', icon: Lightbulb },
            { id: 'scores', label: 'Subcontractor Scores', icon: BarChart3 },
            { id: 'walkthrough', label: 'Walkthrough', icon: ArrowRight },
            { id: 'deep-dive', label: 'Deep Dive', icon: Search },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as typeof activeSection)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === section.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <section.icon className="w-4 h-4" />
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Demo Area */}
      <section ref={sectionRef} className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section A: Project Health Radar */}
          {activeSection === 'radar' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Project Health Radar</h2>
                <p className="text-slate-400">Real-time health scores across your active projects</p>
              </div>

              {/* App Mockup Container */}
              <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-200">
                <div className="grid md:grid-cols-2 gap-6">
                  {sampleProjects.map((project) => (
                    <div key={project.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                        <div className="flex items-center gap-1">
                          {project.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-500" />}
                          {project.trend === 'down' && <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />}
                          {project.trend === 'stable' && <div className="w-4 h-1 bg-slate-300 rounded" />}
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <ProjectHealthRadar health={project.health} isAnimating={isRadarAnimating} />
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">Active Blockers</span>
                            <span className={`text-lg font-semibold ${project.activeBlockers > 3 ? 'text-red-500' : 'text-slate-900'}`}>
                              {project.activeBlockers}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">Resolved This Week</span>
                            <span className="text-lg font-semibold text-emerald-600">{project.resolvedThisWeek}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Insight */}
              <div className="max-w-2xl mx-auto bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-2">AI Insight</h4>
                    <p className="text-slate-300">
                      Metro Station&apos;s health has dropped 12% this week. The 5 active blockers include 2 critical M&E issues
                      similar to problems resolved on Riverside Academy. Consider applying the same solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section B: Cross-Project Portfolio */}
          {activeSection === 'portfolio' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Cross-Project Portfolio</h2>
                <p className="text-slate-400">All blockers across all projects in one view</p>
              </div>

              {/* App Mockup Container */}
              <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-200">
                {/* Filter Bar */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">All Projects</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg">
                    <span className="text-sm text-slate-600">All Statuses</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex-1" />
                  <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg">
                    <Search className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search blockers..."
                      className="text-sm bg-transparent outline-none text-slate-700 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Blocker Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sampleBlockers.map((blocker) => (
                    <BlockerCard key={blocker.id} blocker={blocker} />
                  ))}
                </div>

                {/* Summary Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-slate-500">
                      <strong className="text-slate-700">5</strong> total blockers
                    </span>
                    <span className="text-amber-600">
                      <strong>1</strong> pending review
                    </span>
                    <span className="text-indigo-600">
                      <strong>1</strong> in progress
                    </span>
                    <span className="text-emerald-600">
                      <strong>2</strong> resolved
                    </span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                    <PlusCircle className="w-4 h-4" />
                    New Blocker
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Section C: Lessons Learned */}
          {activeSection === 'lessons' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">AI-Powered Lessons Learned</h2>
                <p className="text-slate-400">Patterns and insights from your historical blocker data</p>
              </div>

              {/* App Mockup Container */}
              <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-200">
                <div className="space-y-4">
                  {lessonsLearned.map((lesson) => (
                    <div key={lesson.id} className="bg-white rounded-xl border border-slate-200 p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="w-6 h-6 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">{lesson.blockerType}</h4>
                          <p className="text-slate-600 mb-4">{lesson.insight}</p>

                          <div className="flex items-center gap-6 mb-4 text-sm">
                            <div className="flex items-center gap-2">
                              <History className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-500">{lesson.frequency} occurrences</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-500">{lesson.avgResolutionDays} days avg resolution</span>
                            </div>
                          </div>

                          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="w-4 h-4 text-emerald-600" />
                              <span className="text-sm font-medium text-emerald-700">Recommendation</span>
                            </div>
                            <p className="text-emerald-800 text-sm">{lesson.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section D: Subcontractor Scores */}
          {activeSection === 'scores' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Subcontractor Performance Scores</h2>
                <p className="text-slate-400">Data-driven insights on subcontractor responsiveness and quality</p>
              </div>

              {/* App Mockup Container */}
              <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-slate-200">
                        <th className="pb-4 text-sm font-semibold text-slate-500">Subcontractor</th>
                        <th className="pb-4 text-sm font-semibold text-slate-500 text-center">Responsiveness</th>
                        <th className="pb-4 text-sm font-semibold text-slate-500 text-center">Quality</th>
                        <th className="pb-4 text-sm font-semibold text-slate-500 text-center">Communication</th>
                        <th className="pb-4 text-sm font-semibold text-slate-500 text-center">Overall</th>
                        <th className="pb-4 text-sm font-semibold text-slate-500 text-center">Avg Resolution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subcontractorScores.map((sub, index) => (
                        <tr key={index} className="border-b border-slate-100 last:border-0">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-slate-500" />
                              </div>
                              <div>
                                <p className="font-medium text-slate-900">{sub.name}</p>
                                <p className="text-sm text-slate-500">{sub.blockersAssigned} blockers assigned</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-medium ${getScoreColor(sub.responsiveness)}`}>
                              {sub.responsiveness}
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-medium ${getScoreColor(sub.quality)}`}>
                              {sub.quality}
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-medium ${getScoreColor(sub.communication)}`}>
                              {sub.communication}
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className={`inline-flex items-center justify-center w-14 h-8 rounded-lg text-sm font-bold ${getScoreColor(sub.overall)}`}>
                              {sub.overall}
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className="text-slate-600">{sub.avgResolutionDays} days</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Section E: Interactive Walkthrough */}
          {activeSection === 'walkthrough' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Complete Blocker Lifecycle</h2>
                <p className="text-slate-400">Follow a blocker from discovery to resolution and beyond</p>
              </div>

              {/* Progress Bar */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">Step {currentStep + 1} of {walkthroughSteps.length}</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        if (isWalkthroughPlaying) {
                          setIsWalkthroughPlaying(false);
                        } else {
                          if (currentStep >= walkthroughSteps.length - 1) {
                            setCurrentStep(0);
                          }
                          setIsWalkthroughPlaying(true);
                        }
                      }}
                      className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
                    >
                      {isWalkthroughPlaying ? 'Pause' : 'Auto-Play'}
                    </button>
                    <button
                      onClick={() => {
                        setCurrentStep(0);
                        setIsWalkthroughPlaying(false);
                      }}
                      className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm hover:bg-slate-700/50 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / walkthroughSteps.length) * 100}%` }}
                  />
                </div>
                {/* Phase Labels */}
                <div className="flex mt-4 text-xs">
                  {['Capture', 'Assign', 'Resolve', 'Verify', 'Learn'].map((phase, idx) => (
                    <div key={phase} className="flex-1 text-center">
                      <span className={`${idx <= Math.floor(currentStep / 4) ? 'text-emerald-400' : 'text-slate-500'}`}>
                        {phase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Step Display */}
              <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${getPhaseColor(currentWalkthroughStep.phase)}`}>
                    <StepIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPhaseColor(currentWalkthroughStep.phase)}`}>
                        Step {currentStep}
                      </span>
                      <span className="text-slate-400 text-sm capitalize">{currentWalkthroughStep.phase} Phase</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{currentWalkthroughStep.title}</h3>
                    <p className="text-slate-300 mb-4">{currentWalkthroughStep.description}</p>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm font-medium">{currentWalkthroughStep.action}</span>
                    </div>
                  </div>
                </div>

                {/* Step Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700/50">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {/* Step Dots */}
                  <div className="flex items-center gap-1">
                    {walkthroughSteps.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStep(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentStep
                            ? 'w-4 bg-emerald-500'
                            : idx < currentStep
                            ? 'bg-emerald-500/50'
                            : 'bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentStep(Math.min(walkthroughSteps.length - 1, currentStep + 1))}
                    disabled={currentStep === walkthroughSteps.length - 1}
                    className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* App Mockup Preview */}
              <div className="max-w-md mx-auto bg-slate-50 rounded-3xl p-4 shadow-xl border border-slate-200">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                  {/* Phone Status Bar */}
                  <div className="bg-slate-900 px-4 py-2 flex items-center justify-between text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-2 bg-white rounded-sm" />
                        <div className="w-1 h-3 bg-white rounded-sm" />
                        <div className="w-1 h-4 bg-white rounded-sm" />
                        <div className="w-1 h-3 bg-white/50 rounded-sm" />
                      </div>
                      <span className="ml-2">100%</span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-emerald-500 px-4 py-4">
                    <h4 className="text-white font-semibold">Blocker App</h4>
                    <p className="text-emerald-100 text-sm">Step {currentStep}: {currentWalkthroughStep.title}</p>
                  </div>

                  {/* App Content */}
                  <div className="p-4 min-h-[200px] flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${getPhaseColor(currentWalkthroughStep.phase)}/20`}>
                        <StepIcon className={`w-8 h-8 ${getPhaseColor(currentWalkthroughStep.phase).replace('bg-', 'text-')}`} />
                      </div>
                      <p className="text-slate-600 text-sm">{currentWalkthroughStep.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section F: Deep Dive */}
          {activeSection === 'deep-dive' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Deep Dive Features</h2>
                <p className="text-slate-400">Explore the detailed capabilities of the Blocker App</p>
              </div>

              {/* App Mockup Container */}
              <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-200">
                <div className="space-y-3">
                  <DeepDiveAccordion title="Voice Capture & AI Transcription" icon={Mic}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">
                        Speak naturally in any accent or dialect. Our AI understands construction terminology and
                        automatically structures your input into actionable blocker reports.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-slate-700 mb-1">What you say:</p>
                          <p className="text-sm text-slate-500 italic">&quot;Void height is wrong, M&E can&apos;t fit the ducts&quot;</p>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-emerald-700 mb-1">AI extracts:</p>
                          <p className="text-sm text-emerald-600">Category: Design Coordination<br />Priority: High<br />Trade: M&E</p>
                        </div>
                      </div>
                    </div>
                  </DeepDiveAccordion>

                  <DeepDiveAccordion title="Smart Assignment & SLA Tracking" icon={UserCheck}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">
                        Assign blockers to internal team members or external subcontractors. The system tracks
                        response times against your SLAs and escalates automatically.
                      </p>
                      <div className="flex items-center gap-4 bg-slate-50 rounded-lg p-4">
                        <Clock className="w-8 h-8 text-amber-500" />
                        <div>
                          <p className="font-medium text-slate-700">48-hour SLA Countdown</p>
                          <p className="text-sm text-slate-500">Automatic escalation to PM if not acknowledged</p>
                        </div>
                      </div>
                    </div>
                  </DeepDiveAccordion>

                  <DeepDiveAccordion title="Photo & Document Attachments" icon={Camera}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">
                        Attach photos directly from your device camera or gallery. Upload drawings, specs,
                        and any supporting documents. Everything is stored and indexed for future reference.
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center">
                            <Camera className="w-8 h-8 text-slate-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </DeepDiveAccordion>

                  <DeepDiveAccordion title="Cross-Project AI Intelligence" icon={Brain}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">
                        Our AI analyses blockers across all your projects to identify patterns, predict issues,
                        and recommend preventive actions before problems occur.
                      </p>
                      <div className="space-y-2">
                        {[
                          { icon: Zap, text: 'Predictive alerts based on historical data' },
                          { icon: TrendingUp, text: 'Subcontractor performance tracking' },
                          { icon: Lightbulb, text: 'Automated lessons learned extraction' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                            <item.icon className="w-4 h-4 text-emerald-500" />
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DeepDiveAccordion>

                  <DeepDiveAccordion title="Integration & Notifications" icon={Bell}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">
                        Connect with your existing tools. Receive notifications via email, SMS, or app push.
                        Integrate with project management systems for seamless workflow.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Email', 'SMS', 'Push', 'Slack', 'Teams', 'Webhook'].map((channel) => (
                          <span key={channel} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </DeepDiveAccordion>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Enterprise Ready</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Eliminate Project Delays?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join construction teams who have reduced blocker resolution time by 60%
            and prevented 40% of issues before they even occur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-colors"
            >
              Request Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products/blocker-app"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              View Full Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
