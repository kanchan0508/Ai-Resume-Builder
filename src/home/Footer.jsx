import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { Sparkles, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-600" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaGithub, href: "#", color: "hover:text-gray-600" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Templates", href: "/templates" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Resume Tips", href: "/tips" },
    { name: "Career Advice", href: "/advice" },
    { name: "Interview Guide", href: "/interview" },
    { name: "Cover Letters", href: "/cover-letters" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
                  <Sparkles className='w-6 h-6 text-white' />
                </div>
                <span className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  ResumeAI
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Create professional, ATS-friendly resumes with our AI-powered builder. Stand out from the competition and land your dream job.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-400" />
                  <span>support@resumeai.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 backdrop-blur-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-r-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © 2024 ResumeAI. All rights reserved. Built with ❤️ for job seekers worldwide.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex space-x-6 mt-4 md:mt-0"
              >
                <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Cookie Policy
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;