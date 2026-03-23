'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Upload,
  FileText,
  FolderOpen,
  CheckCircle,
  Search,
  Tag,
  Calendar,
  Building2,
  FileSpreadsheet,
  FileImage,
  File,
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react';

// Sample documents for the demo
const sampleDocuments = [
  { name: 'Site_Survey_Report_2024.pdf', type: 'pdf', category: 'Surveys', confidence: 98 },
  { name: 'Structural_Calcs_Rev3.xlsx', type: 'excel', category: 'Engineering', confidence: 95 },
  { name: 'Planning_Permission_Granted.pdf', type: 'pdf', category: 'Permits', confidence: 99 },
  { name: 'Contractor_Quote_Electrical.pdf', type: 'pdf', category: 'Quotes', confidence: 94 },
  { name: 'Site_Photo_Foundation.jpg', type: 'image', category: 'Photos', confidence: 92 },
  { name: 'Health_Safety_Plan_v2.docx', type: 'doc', category: 'H&S', confidence: 97 },
];

const categories = [
  { name: 'Surveys', count: 24, color: 'bg-blue-500' },
  { name: 'Engineering', count: 18, color: 'bg-purple-500' },
  { name: 'Permits', count: 12, color: 'bg-green-500' },
  { name: 'Quotes', count: 31, color: 'bg-amber-500' },
  { name: 'Photos', count: 156, color: 'bg-pink-500' },
  { name: 'H&S', count: 8, color: 'bg-red-500' },
];

function getFileIcon(type: string) {
  switch (type) {
    case 'pdf': return FileText;
    case 'excel': return FileSpreadsheet;
    case 'image': return FileImage;
    default: return File;
  }
}

function getFileColor(type: string) {
  switch (type) {
    case 'pdf': return 'text-red-400';
    case 'excel': return 'text-green-400';
    case 'image': return 'text-blue-400';
    default: return 'text-gray-400';
  }
}

export default function DocumentAutomationDemo() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadPhase, setUploadPhase] = useState<'idle' | 'uploading' | 'processing' | 'complete'>('idle');
  const [processedDocs, setProcessedDocs] = useState<typeof sampleDocuments>([]);
  const [currentProcessingIndex, setCurrentProcessingIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'browse' | 'search'>('upload');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simulate document processing
  useEffect(() => {
    if (uploadPhase === 'uploading') {
      const timer = setTimeout(() => {
        setUploadPhase('processing');
        setCurrentProcessingIndex(0);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [uploadPhase]);

  useEffect(() => {
    if (uploadPhase === 'processing' && currentProcessingIndex >= 0) {
      if (currentProcessingIndex < sampleDocuments.length) {
        const timer = setTimeout(() => {
          setProcessedDocs(prev => [...prev, sampleDocuments[currentProcessingIndex]]);
          setCurrentProcessingIndex(prev => prev + 1);
        }, 800);
        return () => clearTimeout(timer);
      } else {
        setUploadPhase('complete');
      }
    }
  }, [uploadPhase, currentProcessingIndex]);

  const handleDemoUpload = () => {
    setUploadPhase('uploading');
    setProcessedDocs([]);
    setCurrentProcessingIndex(-1);
  };

  const resetDemo = () => {
    setUploadPhase('idle');
    setProcessedDocs([]);
    setCurrentProcessingIndex(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/products/document-automation"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Document Automation</span>
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
            <span className="text-amber-400 text-sm font-medium">AI-Powered Document Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Watch AI Organize Your
            <span className="text-amber-400"> Construction Documents</span>
          </h1>
          <p className="text-xl text-slate-300">
            Drop files and see how our AI instantly classifies, tags, and organizes
            your project documentation.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex gap-2 p-1 bg-slate-800/50 rounded-xl w-fit mx-auto">
          {[
            { id: 'upload', label: 'Upload & Classify', icon: Upload },
            { id: 'browse', label: 'Browse Library', icon: FolderOpen },
            { id: 'search', label: 'Smart Search', icon: Search },
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
      <section ref={sectionRef} className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Upload & Classify Tab */}
          {activeTab === 'upload' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Drop Zone */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-amber-400" />
                  Document Upload
                </h3>

                {uploadPhase === 'idle' && (
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleDemoUpload(); }}
                    onClick={handleDemoUpload}
                    className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
                      isDragging
                        ? 'border-amber-400 bg-amber-500/10'
                        : 'border-slate-600 hover:border-amber-400/50 hover:bg-slate-700/30'
                    }`}
                  >
                    <Upload className={`w-12 h-12 mx-auto mb-4 ${isDragging ? 'text-amber-400' : 'text-slate-500'}`} />
                    <p className="text-white font-medium mb-2">
                      {isDragging ? 'Drop files here' : 'Click or drag files to upload'}
                    </p>
                    <p className="text-slate-400 text-sm">
                      PDF, DOCX, XLSX, Images supported
                    </p>
                    <button className="mt-6 px-6 py-2 bg-amber-500 text-slate-900 rounded-lg font-medium hover:bg-amber-400 transition-colors">
                      Try Demo Upload
                    </button>
                  </div>
                )}

                {uploadPhase === 'uploading' && (
                  <div className="border-2 border-amber-400/30 rounded-xl p-12 text-center bg-amber-500/5">
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <div className="absolute inset-0 border-4 border-amber-400/30 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-amber-400 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <p className="text-white font-medium mb-2">Uploading 6 documents...</p>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-4">
                      <div className="bg-amber-400 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                )}

                {(uploadPhase === 'processing' || uploadPhase === 'complete') && (
                  <div className="space-y-3">
                    {sampleDocuments.map((doc, index) => {
                      const isProcessed = index < processedDocs.length;
                      const isProcessing = index === currentProcessingIndex;
                      const Icon = getFileIcon(doc.type);

                      return (
                        <div
                          key={doc.name}
                          className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                            isProcessed
                              ? 'bg-slate-700/50 border border-slate-600/50'
                              : isProcessing
                              ? 'bg-amber-500/10 border border-amber-400/30'
                              : 'bg-slate-800/30 border border-slate-700/30 opacity-50'
                          }`}
                        >
                          <Icon className={`w-8 h-8 ${getFileColor(doc.type)}`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{doc.name}</p>
                            {isProcessing && (
                              <p className="text-amber-400 text-xs animate-pulse">Analyzing with AI...</p>
                            )}
                            {isProcessed && (
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full">
                                  {doc.category}
                                </span>
                                <span className="text-xs text-slate-400">{doc.confidence}% confidence</span>
                              </div>
                            )}
                          </div>
                          {isProcessed && (
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          )}
                          {isProcessing && (
                            <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                          )}
                        </div>
                      );
                    })}

                    {uploadPhase === 'complete' && (
                      <button
                        onClick={resetDemo}
                        className="w-full mt-4 px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors"
                      >
                        Reset Demo
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Classification Results */}
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-amber-400" />
                  AI Classification Results
                </h3>

                <div className="space-y-4">
                  {processedDocs.length > 0 ? (
                    <>
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-green-400 font-medium">
                            {processedDocs.length} document{processedDocs.length !== 1 ? 's' : ''} classified
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">
                          Average confidence: {Math.round(processedDocs.reduce((acc, doc) => acc + doc.confidence, 0) / processedDocs.length)}%
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-slate-400 text-sm font-medium">Extracted Metadata:</p>
                        {processedDocs.slice(0, 3).map((doc, index) => (
                          <div key={index} className="p-3 bg-slate-700/30 rounded-lg text-sm">
                            <p className="text-white font-medium mb-1">{doc.name}</p>
                            <div className="flex flex-wrap gap-2 text-xs">
                              <span className="flex items-center gap-1 text-slate-400">
                                <Calendar className="w-3 h-3" /> Today
                              </span>
                              <span className="flex items-center gap-1 text-slate-400">
                                <Building2 className="w-3 h-3" /> Project Alpha
                              </span>
                              <span className="flex items-center gap-1 text-amber-400">
                                <Tag className="w-3 h-3" /> {doc.category}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 text-slate-500">
                      <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Upload documents to see AI classification in action</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Browse Library Tab */}
          {activeTab === 'browse' && (
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-amber-400" />
                Document Library
              </h3>

              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-amber-400/30 transition-colors cursor-pointer group"
                  >
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mb-3`}>
                      <FolderOpen className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-medium group-hover:text-amber-400 transition-colors">{category.name}</p>
                    <p className="text-slate-400 text-sm">{category.count} files</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-700/50 pt-6">
                <h4 className="text-white font-medium mb-4">Recent Documents</h4>
                <div className="space-y-2">
                  {sampleDocuments.map((doc, index) => {
                    const Icon = getFileIcon(doc.type);
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors cursor-pointer group"
                      >
                        <Icon className={`w-6 h-6 ${getFileColor(doc.type)}`} />
                        <div className="flex-1">
                          <p className="text-white text-sm group-hover:text-amber-400 transition-colors">{doc.name}</p>
                          <p className="text-slate-400 text-xs">Modified 2 hours ago</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                          {doc.category}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Smart Search Tab */}
          {activeTab === 'search' && (
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-400" />
                AI-Powered Search
              </h3>

              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documents naturally... e.g., 'structural calculations from last month'"
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-3">Try these searches:</p>
                  <div className="space-y-2">
                    {[
                      'All permits expiring this quarter',
                      'Structural drawings for Building A',
                      'Quotes from electrical contractors',
                      'Safety reports from last month',
                    ].map((query, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(query)}
                        className="w-full text-left p-3 bg-slate-700/30 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-amber-400 transition-colors text-sm"
                      >
                        <Search className="w-4 h-4 inline mr-2 opacity-50" />
                        {query}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-white font-medium">AI Understanding</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">
                    Our AI understands context and intent, not just keywords. Ask questions in natural language.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Date range understanding</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Document type inference</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Project context awareness</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Cross-document relationships</span>
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
              { value: '95%', label: 'Classification Accuracy', icon: CheckCircle },
              { value: '<2s', label: 'Processing Time', icon: Clock },
              { value: '50+', label: 'Document Types', icon: FileText },
              { value: '10x', label: 'Faster Filing', icon: Sparkles },
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
            Ready to Transform Your Document Management?
          </h2>
          <p className="text-slate-300 mb-8">
            Stop wasting hours manually organizing files. Let AI handle the tedious work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 rounded-xl font-semibold hover:bg-amber-400 transition-colors"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products/document-automation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
