import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Atom, Edit, Share2 } from "lucide-react";
import AnimatedImages from "./AnimatedImages";
import ReviewSection from "@/components/custom/ReviwSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800 font-sans">
       {/* Hero Section */}
       <section className="max-w-[1400px] mx-auto px-8 pt-20 pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
               <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  Craft Your <span className="text-primary">Perfect Resume</span> with AI Intelligence
               </h1>
               <p className="text-lg text-gray-600 leading-relaxed">
                  Stop struggling with formatting and writer's block. Our AI-powered builder helps you create professional, ATS-friendly resumes in minutes.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/dashboard">
                    <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                      Get Started Now <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all">
                    Watch Demo
                  </button>
               </div>
               <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                  </div>
                  <p>Trusted by 10,000+ job seekers</p>
               </div>
            </div>

            {/* Hero Image/Animation */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
               {/* Decorative blobs */}
               <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               
               <div className="relative z-10">
                  <AnimatedImages />
               </div>
            </div>
          </div>
       </section>

       {/* Features Section */}
       <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Builder?</h2>
                <p className="text-gray-600">We combine cutting-edge AI technology with professional design principles.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors border border-gray-100 group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                      <Atom className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">AI-Powered Writing</h3>
                   <p className="text-gray-600">Generate professional summaries and bullet points tailored to your specific job role instantly.</p>
                </div>
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors border border-gray-100 group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                      <Edit className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Real-time Editing</h3>
                   <p className="text-gray-600">See changes as you type with our intuitive drag-and-drop editor. No coding required.</p>
                </div>
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors border border-gray-100 group">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                      <Share2 className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Easy Export</h3>
                   <p className="text-gray-600">Download your resume in PDF format or share it directly with recruiters via a unique link.</p>
                </div>
             </div>
          </div>
       </section>

       <ReviewSection />
    </div>
  );
};

export default LandingPage;