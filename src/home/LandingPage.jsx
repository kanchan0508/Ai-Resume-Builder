import React from "react";
import { motion } from "framer-motion";
import AnimatedImages from "./AnimatedImages";
import { Link } from "react-router-dom";
import ReviewSection from "@/components/custom/ReviwSection";
import { CheckCircle, Zap, Users, Award, ArrowRight, Play } from "lucide-react";

const LandingPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "AI-Powered Content",
      description: "Generate professional resume content with advanced AI technology that understands your industry.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "ATS-Friendly",
      description: "Our templates are optimized for Applicant Tracking Systems to ensure your resume gets noticed.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Professional Templates",
      description: "Choose from dozens of professionally designed templates that make you stand out from the crowd.",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Easy Customization",
      description: "Customize colors, fonts, and layouts with our intuitive drag-and-drop interface.",
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-400/5 dark:to-pink-400/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div variants={fadeIn} className="mb-4 sm:mb-6">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium mb-4">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  AI-Powered Resume Builder
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeIn}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              >
                Create Your
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Dream Resume
                </span>
                <span className="block sm:inline"> in Minutes</span>
              </motion.h1>

              <motion.p 
                variants={fadeIn}
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Leverage the power of AI to create professional, ATS-friendly resumes that get you noticed by top employers. Stand out from the competition with our intelligent resume builder.
              </motion.p>

              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12"
              >
                <Link to="/dashboard" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                  >
                    Start Building Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <motion.button 
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 rounded-xl font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeIn}
                className="grid grid-cols-2 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    38%
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    More Interviews
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    23%
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    Higher Job Offers
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />
              <div className="relative">
                <AnimatedImages />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose Our
              <span className="block sm:inline bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> AI Builder?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Our intelligent platform combines cutting-edge AI with professional design to create resumes that get results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl blur-xl" 
                     style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }} />
                
                <div className="relative bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white text-center sm:text-left">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center sm:text-left">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewSection />
    </div>
  );
};

export default LandingPage;
