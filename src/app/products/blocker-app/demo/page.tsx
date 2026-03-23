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
  Bell,
  Home,
  ClipboardList,
  Users,
  MapPin,
  FolderOpen,
  Settings,
  Download,
  Eye,
  ChartBar,
  MessageSquare
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
  { step: 0, phase: 'capture', role: 'subcontractor', title: 'Discover a Blocker', description: 'You\'re on site and notice the M&E ductwork can\'t fit through the ceiling void. The void height shown on drawings doesn\'t match reality.', action: 'Tap the + button to log a new blocker', icon: AlertTriangle },
  { step: 1, phase: 'capture', role: 'subcontractor', title: 'Voice or Type Description', description: 'Speak naturally: "Void height in level one ceiling is less than the drawing shows. M&E can\'t get the ductwork through. Need revised coordination drawing from the architect."', action: 'AI transcribes and structures your input', icon: Mic },
  { step: 2, phase: 'capture', role: 'subcontractor', title: 'Attach Photos', description: 'Take photos of the actual void height and the drawing discrepancy. Visual evidence helps the architect understand the issue immediately.', action: 'Add photos from camera or gallery', icon: Camera },
  { step: 3, phase: 'capture', role: 'subcontractor', title: 'AI Auto-Classification', description: 'The system automatically categorises this as "Design Coordination" blocker, sets priority to "High" based on M&E impact, and suggests Hamilton Associates as the responsible party.', action: 'Review and confirm AI suggestions', icon: Sparkles },
  // Phase 2: Assignment & Notification (Steps 4-6)
  { step: 4, phase: 'assignment', role: 'pm', title: 'Assign Responsibility', description: 'Select Hamilton Associates as the responsible party. The system shows their average response time (5.1 days) and current workload (3 open items).', action: 'Confirm assignment with due date', icon: UserCheck },
  { step: 5, phase: 'assignment', role: 'pm', title: 'Instant Notifications', description: 'Hamilton Associates receive an email with full blocker details, photos, and a deep link to respond. Your PM and site manager are CC\'d automatically.', action: 'Notifications sent to all stakeholders', icon: Send },
  { step: 6, phase: 'assignment', role: 'pm', title: 'Status: Assigned', description: 'The blocker moves from "Pending Review" to "Assigned". It appears on Hamilton Associates\' dashboard with a 48-hour SLA countdown.', action: 'Track progress in real-time', icon: Clock },
  // Phase 3: Resolution Workflow (Steps 7-9)
  { step: 7, phase: 'resolution', role: 'subcontractor', title: 'Work Begins', description: 'Hamilton Associates mark the blocker as "In Progress". They upload a revised coordination drawing showing the adjusted duct routing.', action: 'Attachments and comments added', icon: Wrench },
  { step: 8, phase: 'resolution', role: 'subcontractor', title: 'Proposed Solution', description: 'The architect proposes dropping the ceiling by 50mm to accommodate the ductwork. They attach the revised RCP drawing and specification notes.', action: 'Solution ready for review', icon: FileText },
  { step: 9, phase: 'resolution', role: 'subcontractor', title: 'Mark as Completed', description: 'Hamilton Associates mark the blocker as "Completed". The ball is now in your court to verify the solution works on site.', action: 'Status changes to Completed', icon: CheckCircle },
  // Phase 4: Verification & Close (Steps 10-12)
  { step: 10, phase: 'verification', role: 'pm', title: 'Verify on Site', description: 'You check the revised drawings against the actual conditions. The 50mm drop accommodates the ductwork. M&E confirms they can proceed.', action: 'Physical verification complete', icon: ClipboardCheck },
  { step: 11, phase: 'verification', role: 'pm', title: 'Accept or Reject', description: 'If the solution works, mark as "Verified Complete". If not, reject with comments and it returns to the assignee. In this case, it works!', action: 'Verified Complete - solution accepted', icon: ThumbsUp },
  { step: 12, phase: 'verification', role: 'pm', title: 'Close the Blocker', description: 'The blocker is closed. Resolution time, all communications, and attachments are archived. This data feeds into lessons learned and subcontractor scoring.', action: 'Blocker closed and archived', icon: Award },
  // Phase 5: Cross-Project AI Intelligence (Steps 13-16)
  { step: 13, phase: 'intelligence', role: 'admin', title: 'Pattern Recognition', description: 'AI analyses this blocker alongside 200+ similar cases across your projects. It identifies that M&E coordination clashes peak during weeks 8-12 of fit-out.', action: 'Patterns identified across portfolio', icon: Brain },
  { step: 14, phase: 'intelligence', role: 'admin', title: 'Predictive Alerts', description: 'On your next project entering week 8, the system proactively alerts: "Based on historical data, schedule BIM coordination review to prevent M&E clashes."', action: 'Proactive prevention enabled', icon: Zap },
  { step: 15, phase: 'intelligence', role: 'admin', title: 'Subcontractor Scoring', description: 'Hamilton Associates\' response time (5.1 days) is factored into their overall score. When selecting subcontractors for future projects, you see this data.', action: 'Performance data captured', icon: BarChart3 },
  { step: 16, phase: 'intelligence', role: 'admin', title: 'Continuous Learning', description: 'Every closed blocker makes the system smarter. Your organisation builds institutional knowledge that survives staff turnover and improves with every project.', action: 'Organisational learning achieved', icon: Lightbulb },
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
// APP MOCKUP COMPONENTS
// ============================================================================

// Subcontractor Interface Mockup
function SubcontractorMockup({ step, activeTab }: { step: number; activeTab: string }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'blockers', icon: ClipboardList, label: 'My Blockers', badge: 3 },
    { id: 'drawings', icon: FileText, label: 'Drawings' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'assignments', icon: Bell, label: 'New', badge: 2 },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold text-lg">Subcontractor Dashboard</h4>
            <p className="text-emerald-100 text-xs">Kingsway M&E Services</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-emerald-500/30 text-white text-xs rounded px-2 py-1 border border-emerald-400/30">
              <option>Riverside Academy</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content based on step */}
      <div className="p-4 min-h-[280px] bg-slate-50">
        {step <= 3 && activeTab === 'home' && (
          <div className="space-y-4">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-4 bg-emerald-500 text-white rounded-xl font-medium shadow-sm">
                <PlusCircle className="w-5 h-5" />
                <span>Report Blocker</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-4 bg-white text-slate-700 rounded-xl font-medium border border-slate-200">
                <FileText className="w-5 h-5" />
                <span>View Drawings</span>
              </button>
            </div>

            {/* Recent Blockers */}
            <div>
              <h5 className="text-sm font-medium text-slate-700 mb-2">Recent Blockers</h5>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-900">BLK-0034</p>
                      <p className="text-xs text-slate-500">Fire stopping void height...</p>
                    </div>
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">Critical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step >= 1 && step <= 2 && (
          <div className="space-y-4">
            {/* Create Blocker Form */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <h5 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                New Blocker
              </h5>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-500">Title</label>
                  <input
                    type="text"
                    value="Void height discrepancy - Level 1"
                    readOnly
                    className="w-full mt-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Description</label>
                  <div className="mt-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600">
                    {step === 1 && (
                      <div className="flex items-center gap-2 text-emerald-600">
                        <Mic className="w-4 h-4 animate-pulse" />
                        <span className="text-xs">Recording...</span>
                      </div>
                    )}
                    {step === 2 && "M&E can't get ductwork through. Need revised drawing."}
                  </div>
                </div>
                {step === 2 && (
                  <div>
                    <label className="text-xs text-slate-500">Photos</label>
                    <div className="mt-1 flex gap-2">
                      <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                        <Camera className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="w-16 h-16 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-200">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            {/* AI Classification */}
            <div className="bg-white rounded-xl p-4 border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-700">AI Auto-Classification</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-xs text-slate-500">Category</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Design Coordination</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-xs text-slate-500">Priority</span>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">High</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-slate-500">Suggested Assignee</span>
                  <span className="text-xs text-slate-700 font-medium">Hamilton Associates</span>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium">
                Confirm & Submit
              </button>
            </div>
          </div>
        )}

        {(step >= 7 && step <= 9) && (
          <div className="space-y-4">
            {/* New Assignments Tab */}
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-sm font-semibold text-slate-900">Assigned to You</h5>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">1 new</span>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">BLK-0034</p>
                  <p className="text-xs text-slate-500">Fire stopping void height discrepancy</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                    <MapPin className="w-3 h-3" />
                    <span>Level 1, Zone 3</span>
                  </div>
                </div>
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  step === 7 ? 'bg-indigo-100 text-indigo-700' :
                  step === 8 ? 'bg-indigo-100 text-indigo-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {step === 9 ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <div className="flex gap-2">
                {step < 9 && (
                  <button className="flex-1 py-2 bg-emerald-500 text-white rounded-lg text-xs font-medium">
                    {step === 7 ? 'Mark In Progress' : 'Mark Completed'}
                  </button>
                )}
                <button className="flex items-center justify-center gap-1 px-3 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs">
                  <MessageSquare className="w-3 h-3" />
                  <span>3</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-around py-2 bg-white border-t border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
              (step <= 3 && tab.id === 'home') ||
              (step >= 7 && step <= 9 && tab.id === 'assignments')
                ? 'text-emerald-600'
                : 'text-slate-400'
            }`}
          >
            <div className="relative">
              <tab.icon className="w-5 h-5" />
              {tab.badge && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[10px]">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// PM Dashboard Mockup
function PMDashboardMockup({ step }: { step: number }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold text-lg">Project Manager Dashboard</h4>
            <p className="text-emerald-100 text-xs">Sarah Wilson • 4 Projects</p>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-5 gap-2 p-3 bg-slate-50 border-b border-slate-200">
        {[
          { label: 'Projects', value: '4', color: 'emerald', icon: FolderOpen },
          { label: 'Active', value: '3', color: 'green', icon: ChartBar },
          { label: 'Blockers', value: '11', color: 'slate', icon: ClipboardList },
          { label: 'Open', value: '6', color: 'amber', icon: Clock },
          { label: 'Critical', value: '2', color: 'red', icon: AlertTriangle },
        ].map((stat) => (
          <div key={stat.label} className={`bg-white rounded-lg p-2 border-l-2 border-${stat.color}-500 shadow-sm`}>
            <p className="text-[10px] text-slate-500">{stat.label}</p>
            <p className="text-lg font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 min-h-[200px] bg-slate-50">
        {(step >= 4 && step <= 6) && (
          <div className="space-y-3">
            {/* Blocker needing assignment */}
            <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Needs Assignment</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">BLK-0034: Fire stopping void height</p>
                  <p className="text-xs text-slate-500 mt-1">Reported by: Kingsway M&E • 2 hours ago</p>
                </div>
                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">High</span>
              </div>

              {step === 4 && (
                <div className="space-y-2 mb-3">
                  <label className="text-xs text-slate-500">Assign to:</label>
                  <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                    <option>Hamilton Associates (Avg: 5.1 days)</option>
                    <option>Design Team Internal</option>
                  </select>
                </div>
              )}

              {step === 5 && (
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200 mb-3">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <Send className="w-4 h-4" />
                    <span className="text-xs font-medium">Notifications sent to Hamilton Associates</span>
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-blue-700 font-medium">SLA: 47h 58m remaining</span>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Assigned</span>
                </div>
              )}

              {step === 4 && (
                <button className="w-full py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium">
                  Assign Blocker
                </button>
              )}
            </div>
          </div>
        )}

        {(step >= 10 && step <= 12) && (
          <div className="space-y-3">
            {/* Blocker needing verification */}
            <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">Ready for Verification</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">BLK-0034: Fire stopping void height</p>
                  <p className="text-xs text-slate-500 mt-1">Resolved by: Hamilton Associates</p>
                </div>
              </div>

              {step === 10 && (
                <div className="bg-slate-50 rounded-lg p-3 mb-3">
                  <p className="text-xs text-slate-600">Solution: Drop ceiling by 50mm to accommodate ductwork</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <FileText className="w-3 h-3" />
                    <span>RCP_Rev3.pdf attached</span>
                  </div>
                </div>
              )}

              {step === 11 && (
                <div className="flex gap-2 mb-3">
                  <button className="flex-1 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    Verify
                  </button>
                  <button className="flex-1 py-2 bg-red-500 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <XCircle className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              )}

              {step === 12 && (
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-medium">Blocker Closed • Resolution: 4.2 days</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Company Admin Mockup
function CompanyAdminMockup({ step }: { step: number }) {
  const tabs = [
    { id: 'overview', icon: ChartBar, label: 'Overview' },
    { id: 'export', icon: Download, label: 'Export' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Header - Dark gradient like the actual app */}
      <div className="bg-gradient-to-r from-[#454545] to-[#3A3A3A] px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-white" />
            <div>
              <h4 className="text-white font-semibold text-lg">Company Dashboard</h4>
              <p className="text-slate-300 text-xs">4 projects, 23 members</p>
            </div>
          </div>
          {step >= 13 && (
            <div className="px-2 py-1 bg-red-500 rounded text-white text-xs">
              2 Critical
            </div>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 border-b border-slate-200">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-slate-500">Projects</span>
          </div>
          <p className="text-xl font-bold text-slate-900 mt-1">4</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-slate-500">Members</span>
          </div>
          <p className="text-xl font-bold text-slate-900 mt-1">23</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-xs text-slate-500">Critical</span>
          </div>
          <p className="text-xl font-bold text-red-600 mt-1">2</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            className={`flex items-center gap-1 px-4 py-2 text-xs font-medium border-b-2 ${
              idx === 0 ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-slate-500'
            }`}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 min-h-[180px] bg-slate-50">
        {step === 13 && (
          <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">Pattern Detected</span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              M&E coordination clashes peak during weeks 8-12 of fit-out phase across 67% of projects.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>24 similar blockers</span>
              <span>4.2 days avg resolution</span>
            </div>
          </div>
        )}

        {step === 14 && (
          <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-amber-700">Predictive Alert</span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              City Tower entering Week 8. Based on historical data, schedule BIM coordination review to prevent M&E clashes.
            </p>
            <button className="w-full py-2 bg-amber-500 text-white rounded-lg text-xs font-medium">
              Schedule Review Meeting
            </button>
          </div>
        )}

        {step === 15 && (
          <div className="space-y-2">
            <h5 className="text-sm font-medium text-slate-700">Subcontractor Scores</h5>
            <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Hamilton Associates</p>
                  <p className="text-xs text-slate-500">Avg response: 5.1 days</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-amber-600">75</span>
                  <p className="text-xs text-slate-400">/100</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Kingsway M&E</p>
                  <p className="text-xs text-slate-500">Avg response: 2.3 days</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-emerald-600">92</span>
                  <p className="text-xs text-slate-400">/100</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 16 && (
          <div className="bg-white rounded-xl p-4 border border-emerald-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-700">Lessons Learned</span>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>31 design info blockers resolved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>Auto-escalation at 48h implemented</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>RFI response time improved by 40%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
        <circle cx="64" cy="64" r="45" stroke="currentColor" strokeWidth="8" fill="none" className="text-slate-200" />
        <circle
          cx="64" cy="64" r="45" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"
          className={`${getHealthColor(health)} transition-all duration-1000 ease-out`}
          style={{ strokeDasharray: circumference, strokeDashoffset: isAnimating ? strokeDashoffset : circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-2xl font-bold ${getHealthColor(health)}`}>{isAnimating ? health : 0}%</span>
      </div>
    </div>
  );
}

// Blocker Card (App-style, light theme)
function BlockerCard({ blocker }: { blocker: Blocker }) {
  const StatusIcon = getStatusIcon(blocker.status);
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 transition-all hover:shadow-md">
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
          <Clock className="w-3 h-3" />{blocker.daysOpen}d
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
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-emerald-600" />
          <span className="font-medium text-slate-900">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {isOpen && <div className="px-4 pb-4 border-t border-slate-100">{children}</div>}
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

  useEffect(() => {
    if (activeSection === 'radar') {
      setTimeout(() => setIsRadarAnimating(true), 300);
    }
  }, [activeSection]);

  useEffect(() => {
    if (isWalkthroughPlaying && currentStep < walkthroughSteps.length - 1) {
      const timer = setTimeout(() => setCurrentStep(prev => prev + 1), 3000);
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

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'subcontractor': return 'Subcontractor View';
      case 'pm': return 'Project Manager View';
      case 'admin': return 'Company Admin View';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products/blocker-app" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
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
            See How Projects Stay<span className="text-emerald-400"> On Track</span>
          </h1>
          <p className="text-xl text-slate-300">
            Explore the complete blocker lifecycle — from voice capture to AI-powered insights that prevent problems before they happen.
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
                activeSection === section.id ? 'bg-emerald-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
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
                            <span className={`text-lg font-semibold ${project.activeBlockers > 3 ? 'text-red-500' : 'text-slate-900'}`}>{project.activeBlockers}</span>
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
              <div className="max-w-2xl mx-auto bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-2">AI Insight</h4>
                    <p className="text-slate-300">Metro Station&apos;s health has dropped 12% this week. The 5 active blockers include 2 critical M&E issues similar to problems resolved on Riverside Academy. Consider applying the same solutions.</p>
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
              <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-200">
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
                    <input type="text" placeholder="Search blockers..." className="text-sm bg-transparent outline-none text-slate-700 placeholder-slate-400" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sampleBlockers.map((blocker) => <BlockerCard key={blocker.id} blocker={blocker} />)}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-slate-500"><strong className="text-slate-700">5</strong> total blockers</span>
                    <span className="text-amber-600"><strong>1</strong> pending review</span>
                    <span className="text-indigo-600"><strong>1</strong> in progress</span>
                    <span className="text-emerald-600"><strong>2</strong> resolved</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                    <PlusCircle className="w-4 h-4" />New Blocker
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
                            <div className="flex items-center gap-2"><History className="w-4 h-4 text-slate-400" /><span className="text-slate-500">{lesson.frequency} occurrences</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /><span className="text-slate-500">{lesson.avgResolutionDays} days avg resolution</span></div>
                          </div>
                          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                            <div className="flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4 text-emerald-600" /><span className="text-sm font-medium text-emerald-700">Recommendation</span></div>
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
                              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"><Building2 className="w-5 h-5 text-slate-500" /></div>
                              <div><p className="font-medium text-slate-900">{sub.name}</p><p className="text-sm text-slate-500">{sub.blockersAssigned} blockers assigned</p></div>
                            </div>
                          </td>
                          <td className="py-4 text-center"><span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-medium ${getScoreColor(sub.responsiveness)}`}>{sub.responsiveness}</span></td>
                          <td className="py-4 text-center"><span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-medium ${getScoreColor(sub.quality)}`}>{sub.quality}</span></td>
                          <td className="py-4 text-center"><span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-medium ${getScoreColor(sub.communication)}`}>{sub.communication}</span></td>
                          <td className="py-4 text-center"><span className={`inline-flex items-center justify-center w-14 h-8 rounded-lg text-sm font-bold ${getScoreColor(sub.overall)}`}>{sub.overall}</span></td>
                          <td className="py-4 text-center"><span className="text-slate-600">{sub.avgResolutionDays} days</span></td>
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
                    <button onClick={() => { setCurrentStep(0); setIsWalkthroughPlaying(false); }} className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm hover:bg-slate-700/50 transition-colors">Reset</button>
                  </div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${((currentStep + 1) / walkthroughSteps.length) * 100}%` }} />
                </div>
                <div className="flex mt-4 text-xs">
                  {['Capture', 'Assign', 'Resolve', 'Verify', 'Learn'].map((phase, idx) => (
                    <div key={phase} className="flex-1 text-center">
                      <span className={`${idx <= Math.floor(currentStep / 4) ? 'text-emerald-400' : 'text-slate-500'}`}>{phase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Column Layout: Step Info + App Mockup */}
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
                {/* Step Description */}
                <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${getPhaseColor(currentWalkthroughStep.phase)}`}>
                      <StepIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPhaseColor(currentWalkthroughStep.phase)}`}>Step {currentStep}</span>
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
                    <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                      <ArrowLeft className="w-4 h-4" />Previous
                    </button>
                    <div className="flex items-center gap-1">
                      {walkthroughSteps.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentStep(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentStep ? 'w-4 bg-emerald-500' : idx < currentStep ? 'bg-emerald-500/50' : 'bg-slate-600'}`} />
                      ))}
                    </div>
                    <button onClick={() => setCurrentStep(Math.min(walkthroughSteps.length - 1, currentStep + 1))} disabled={currentStep === walkthroughSteps.length - 1} className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                      Next<ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* App Mockup */}
                <div>
                  {/* Role Label */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Eye className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">{getRoleLabel(currentWalkthroughStep.role)}</span>
                  </div>

                  {/* Phone Frame */}
                  <div className="max-w-sm mx-auto bg-slate-800 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-slate-900 rounded-[2.5rem] p-2">
                      {/* Notch */}
                      <div className="flex justify-center mb-2">
                        <div className="w-24 h-6 bg-black rounded-full" />
                      </div>

                      {/* Screen */}
                      <div className="rounded-[2rem] overflow-hidden">
                        {currentWalkthroughStep.role === 'subcontractor' && (
                          <SubcontractorMockup step={currentStep} activeTab={currentStep <= 3 ? 'home' : 'assignments'} />
                        )}
                        {currentWalkthroughStep.role === 'pm' && (
                          <PMDashboardMockup step={currentStep} />
                        )}
                        {currentWalkthroughStep.role === 'admin' && (
                          <CompanyAdminMockup step={currentStep} />
                        )}
                      </div>
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
              <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-200">
                <div className="space-y-3">
                  <DeepDiveAccordion title="Voice Capture & AI Transcription" icon={Mic}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">Speak naturally in any accent or dialect. Our AI understands construction terminology and automatically structures your input into actionable blocker reports.</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 rounded-lg p-3"><p className="text-sm font-medium text-slate-700 mb-1">What you say:</p><p className="text-sm text-slate-500 italic">&quot;Void height is wrong, M&E can&apos;t fit the ducts&quot;</p></div>
                        <div className="bg-emerald-50 rounded-lg p-3"><p className="text-sm font-medium text-emerald-700 mb-1">AI extracts:</p><p className="text-sm text-emerald-600">Category: Design Coordination<br />Priority: High<br />Trade: M&E</p></div>
                      </div>
                    </div>
                  </DeepDiveAccordion>
                  <DeepDiveAccordion title="Smart Assignment & SLA Tracking" icon={UserCheck}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">Assign blockers to internal team members or external subcontractors. The system tracks response times against your SLAs and escalates automatically.</p>
                      <div className="flex items-center gap-4 bg-slate-50 rounded-lg p-4"><Clock className="w-8 h-8 text-amber-500" /><div><p className="font-medium text-slate-700">48-hour SLA Countdown</p><p className="text-sm text-slate-500">Automatic escalation to PM if not acknowledged</p></div></div>
                    </div>
                  </DeepDiveAccordion>
                  <DeepDiveAccordion title="Photo & Document Attachments" icon={Camera}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">Attach photos directly from your device camera or gallery. Upload drawings, specs, and any supporting documents. Everything is stored and indexed for future reference.</p>
                      <div className="grid grid-cols-3 gap-2">{[1, 2, 3].map((i) => (<div key={i} className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center"><Camera className="w-8 h-8 text-slate-300" /></div>))}</div>
                    </div>
                  </DeepDiveAccordion>
                  <DeepDiveAccordion title="Cross-Project AI Intelligence" icon={Brain}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">Our AI analyses blockers across all your projects to identify patterns, predict issues, and recommend preventive actions before problems occur.</p>
                      <div className="space-y-2">{[{ icon: Zap, text: 'Predictive alerts based on historical data' }, { icon: TrendingUp, text: 'Subcontractor performance tracking' }, { icon: Lightbulb, text: 'Automated lessons learned extraction' }].map((item, idx) => (<div key={idx} className="flex items-center gap-3 text-sm text-slate-600"><item.icon className="w-4 h-4 text-emerald-500" /><span>{item.text}</span></div>))}</div>
                    </div>
                  </DeepDiveAccordion>
                  <DeepDiveAccordion title="Integration & Notifications" icon={Bell}>
                    <div className="pt-4 space-y-4">
                      <p className="text-slate-600">Connect with your existing tools. Receive notifications via email, SMS, or app push. Integrate with project management systems for seamless workflow.</p>
                      <div className="flex flex-wrap gap-2">{['Email', 'SMS', 'Push', 'Slack', 'Teams', 'Webhook'].map((channel) => (<span key={channel} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">{channel}</span>))}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Eliminate Project Delays?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Join construction teams who have reduced blocker resolution time by 60% and prevented 40% of issues before they even occur.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-colors">Request Early Access<ArrowRight className="w-5 h-5" /></Link>
            <Link href="/products/blocker-app" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">View Full Features</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
