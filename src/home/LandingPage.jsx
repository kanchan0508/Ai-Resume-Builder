import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReviewSection from "@/components/custom/ReviwSection";
import { 
  CheckCircle, 
  Zap, 
  Users, 
  Award, 
  ArrowRight, 
  Play, 
  Star, 
  TrendingUp, 
  Shield, 
  Clock,
  Sparkles,
  FileText,
  Download,
  Eye,
  Brain,
  Rocket
} from "lucide-react";

const LandingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      },
    },
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Content",
      description: "Generate professional resume content with advanced AI technology that understands your industry.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ATS-Friendly",
      description: "Our templates are optimized for Applicant Tracking Systems to ensure your resume gets noticed.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Templates",
      description: "Choose from dozens of professionally designed templates that make you stand out from the crowd.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Create a professional resume in minutes, not hours. Our streamlined process gets you hired faster.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Resumes Created", icon: <FileText className="w-5 h-5" /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Shield className="w-5 h-5" /> },
    { number: "5 Min", label: "Quick Setup", icon: <Clock className="w-5 h-5" /> }
  ];

  const resumeTemplates = [
    {
      id: 1,
      name: "Modern Professional",
      image: "https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Creative Designer",
      image: "https://i.pinimg.com/736x/5d/e6/75/5de675c806a055f1219aed28600f3a62.jpg",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Executive Level",
      image: "https://www.resumebuilder.com/wp-content/uploads/2020/03/Internship-Entry-Level-e1702495087380-768x1052.png",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400 animate-pulse" />
                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                    #1 AI Resume Builder
                  </span>
                  <div className="ml-2 px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full">
                    NEW
                  </div>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-gray-900 dark:text-white">Build Your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Dream Resume
                </span>
                <br />
                <span className="text-gray-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl">
                  in Minutes
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Create professional, ATS-optimized resumes with our AI-powered platform. 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Get hired 3x faster</span> 
                with intelligent content suggestions.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">50K+ Users</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.9/5 Rating</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ATS Approved</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link to="/dashboard" className="group">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Create Resume Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                </Link>
                
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border-2 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 rounded-2xl font-bold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 flex items-center justify-center text-lg backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-lg"
                  >
                    <div className="flex justify-center mb-2 text-purple-600 dark:text-purple-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Resume Templates Showcase */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative max-w-lg mx-auto">
                {/* Main Resume Preview */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <div className="h-80 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 p-6 flex flex-col">
                    {/* Resume Header */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">JD</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">John Doe</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Software Engineer</p>
                      </div>
                    </div>
                    
                    {/* Resume Content Lines */}
                    <div className="space-y-3 flex-1">
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                      <div className="h-2 bg-purple-300 dark:bg-purple-600 rounded w-2/3"></div>
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-3/5"></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4">
                      <div className="flex-1 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Download className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Writing...</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    x: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ATS Optimized</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-3 shadow-xl"
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Why Choose Our</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI-Powered Platform?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of resume building with cutting-edge AI technology and professional design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" 
                     style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }} />
                
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewSection />
    </div>
  );
};

export default LandingPage;