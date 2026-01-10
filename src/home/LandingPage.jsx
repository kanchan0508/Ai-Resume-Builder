import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Shield, Check, Plus, FileText } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* Premium Noise Overlay */}
      <div className="bg-noise" />
      
      {/* Background Gradients (Subtle) */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-slate-900 animate-fade-in-up animation-delay-200">
            Build your career, <br />
            <span className="text-slate-500">not just a resume.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-400 font-medium">
            The intelligent resume platform that understands your experience and helps you land interviews at top manufacturing and tech companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
             <Link to="/dashboard">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/10 flex items-center gap-3">
                Create Free Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <p className="text-xs text-slate-400 mt-6 animate-fade-in-up animation-delay-700">
            Free forever for basic resumes · No credit card required
          </p>
        </div>

        {/* 3D Visual Stack - The "Wow" Factor */}
        <div className="mt-24 perspective-1000 relative z-10 max-w-6xl mx-auto select-none pointer-events-none">
            
            {/* Main Floating Dashboard */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl shadow-slate-200/40 border border-slate-200 overflow-hidden transform rotate-x-12 animate-float-slow ring-1 ring-slate-900/5">
                 {/* Browser Chrome */}
                 <div className="h-10 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-500/30" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-500/30" />
                        <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-500/30" />
                    </div>
                    <div className="h-6 w-96 bg-white border border-slate-100 rounded-md shadow-sm mx-auto flex items-center justify-center text-[10px] text-slate-400 font-medium tracking-wide">
                        dashboard.resume.ai
                    </div>
                     <div className="w-10" /> {/* Spacer */}
                </div>
                {/* Dashboard UI */}
                <div className="p-1 bg-slate-50/50">
                     <div className="bg-white rounded-lg border border-slate-100 p-0 h-[500px] flex gap-0">
                        {/* Realistic Sidebar */}
                        <div className="w-16 md:w-48 border-r border-slate-100 p-4 hidden md:flex flex-col gap-4 bg-slate-50/50">
                            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">R</div>
                            <div className="flex flex-col gap-2">
                                <div className="h-8 w-full bg-slate-200 rounded-md flex items-center px-3 gap-2">
                                    <div className="w-4 h-4 bg-slate-400 rounded-full" />
                                    <div className="w-16 h-2 bg-slate-400 rounded-full" />
                                </div>
                                <div className="h-8 w-full rounded-md flex items-center px-3 gap-2">
                                    <div className="w-4 h-4 bg-slate-300 rounded-full" />
                                    <div className="w-12 h-2 bg-slate-300 rounded-full" />
                                </div>
                                 <div className="h-8 w-full rounded-md flex items-center px-3 gap-2">
                                    <div className="w-4 h-4 bg-slate-300 rounded-full" />
                                    <div className="w-20 h-2 bg-slate-300 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Realistic Main Content */}
                        <div className="flex-1 p-6 md:p-8 bg-white/50">
                            {/* Header Area */}
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-1">Welcome back, Alex</h3>
                                    <p className="text-sm text-slate-400">Manage your seamless resume portfolio.</p>
                                </div>
                                 <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User" />
                                 </div>
                            </div>

                            {/* Resume Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Card 1: New Resume */}
                                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 h-48 border-dashed border-2 border-slate-200 hover:border-blue-400 transition-colors group cursor-pointer text-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Plus className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-slate-600 group-hover:text-blue-600">Create New Resume</span>
                                </div>

                                 {/* Card 2: Existing Resume */}
                                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                         <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                                            <FileText className="w-5 h-5" />
                                         </div>
                                         <span className="px-2 py-1 rounded-md bg-green-50 text-xs font-semibold text-green-600">Strong</span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-1">Senior Frontend Dev</h4>
                                    <p className="text-xs text-slate-400 mb-4">Last edited 2h ago</p>
                                    <div className="flex gap-2 mt-auto">
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[85%] bg-purple-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                  {/* Card 3: Existing Resume */}
                                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-all hidden lg:block">
                                    <div className="flex justify-between items-start mb-4">
                                         <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                                            <FileText className="w-5 h-5" />
                                         </div>
                                         <span className="px-2 py-1 rounded-md bg-blue-50 text-xs font-semibold text-blue-600">Review</span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-1">Product Designer</h4>
                                    <p className="text-xs text-slate-400 mb-4">Last edited 5d ago</p>
                                    <div className="flex gap-2 mt-auto">
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[60%] bg-orange-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            {/* Floating Widget 1: Profile Strength (Minimal Data) */}
            <div className="absolute -top-12 -right-12 z-20 bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/20 rounded-2xl p-4 min-w-[180px] animate-float-medium hidden md:block">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Pass Rate</div>
                        <div className="text-2xl font-bold text-slate-800">Top 5%</div>
                    </div>
                     <div className="w-10 h-10 flex items-center justify-center">
                        <div className="relative w-full h-full">
                           <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="95, 100" />
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-600">98</div>
                        </div>
                     </div>
                </div>
                <div className="mt-2 text-xs text-slate-500 font-medium flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-emerald-500 rotate-45" /> Interview Ready
                </div>
            </div>

            {/* Floating Widget 2: ATS Status (File System Style) */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/20 rounded-2xl p-4 w-auto animate-float-medium delay-1000 hidden md:flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center border border-orange-100">
                    <FileText className="w-5 h-5 text-orange-500" />
                 </div>
                 <div>
                    <div className="font-bold text-slate-800 text-sm">Resume_v4.pdf</div>
                    <div className="flex items-center gap-2 mt-0.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-xs text-slate-500 font-medium">ATS Verified</span>
                    </div>
                 </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default LandingPage;