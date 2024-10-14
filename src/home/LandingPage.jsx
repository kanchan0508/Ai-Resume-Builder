import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import AnimatedImages from "./AnimatedImages";
import { Link } from "react-router-dom";
import ReviewSection from "@/components/custom/ReviwSection";

const LandingPage = () => {

  // Variants for animation
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="-mt-14">
    <div className="flex flex-col md:flex-row justify-between items-center px-8">
      {/* Left Section: Image */}
      <div className="md:w-2/3 flex justify-center mb-8 md:mb-0">
        <AnimatedImages />
      </div>

      {/* Right Section: Content */}
      <div className="md:w-1/2 text-center md:text-left ml-8 ">
        <h1 className="text-4xl font-bold mb-4">
          The Best Online Resume Builder
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Effortlessly Craft a Standout Resume With Our AI-Powered Builder
        </p>

        {/* Call-to-action Buttons */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mb-6">
        <Link to="/dashboard">
          <button className="bg-gradient-to-r hover:scale-110 from-pink-500 via-purple-500 to-indigo-500 text-white py-3 px-8 rounded-lg shadow-lg font-medium">
            Create My Resume
          </button>
          </Link>
          <button className="border hover:scale-110 border-pink-500 text-pink-500 py-3 px-8 rounded-lg shadow-lg font-medium">
            Watch Video
          </button>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 mb-10">
          <div>
            <h2 className="text-4xl font-bold text-pink-500">38%</h2>
            <p className="text-gray-600">more interviews</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-pink-500">23%</h2>
            <p className="text-gray-600">more likely to get a job offer</p>
          </div>
        </div>
      </div>
      </div>
      {/* Horizontal Section with Multiple Divs */}
      <div className="w-full -mt-14">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Why Choose Our Builder?
        </h2>
        <div className="flex space-x-6 overflow-x-scroll md:overflow-x-hidden no-scrollbar">
          {/* Animated Divs */}
          <motion.div
            className="min-w-[300px] p-6 bg-white rounded-lg shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">Save Time</h3>
            <p className="text-gray-600">
              Our AI-powered tool makes building resumes fast and efficient.
            </p>
          </motion.div>

          <motion.div
            className="min-w-[300px] p-6 bg-white rounded-lg shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Standout Designs</h3>
            <p className="text-gray-600">
              Choose from a variety of templates to match your style.
            </p>
          </motion.div>

          <motion.div
            className="min-w-[300px] p-6 bg-white rounded-lg shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">AI Assistance</h3>
            <p className="text-gray-600">
              Get AI suggestions to improve your resume’s content.
            </p>
          </motion.div>

          <motion.div
            className="min-w-[300px] p-6 bg-white rounded-lg shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-2">Land More Jobs</h3>
            <p className="text-gray-600">
              Our resumes get you more interviews and job offers.
            </p>
          </motion.div>
        </div>
      </div>

      <ReviewSection />
    </div>
  );
};

export default LandingPage;
