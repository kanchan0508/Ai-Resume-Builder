import React from 'react';
import { 
  Sparkles, 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Github, href: "#", color: "hover:text-gray-600" },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Sparkles className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
                </div>
                <span className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  ResumeAI
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base max-w-md">
                Create professional, ATS-friendly resumes with our AI-powered builder. Stand out from the competition and land your dream job.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Contact Us</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-purple-400 flex-shrink-0" />
                  <span className="break-all">support@resumeai.com</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-purple-400 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-purple-400 flex-shrink-0" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6 sm:mt-8">
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-white">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 backdrop-blur-sm text-sm sm:text-base min-w-0"
                  />
                  <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © 2024 ResumeAI. All rights reserved. Built with ❤️ for job seekers worldwide.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
                <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-xs sm:text-sm transition-colors whitespace-nowrap">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-purple-400 text-xs sm:text-sm transition-colors whitespace-nowrap">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-purple-400 text-xs sm:text-sm transition-colors whitespace-nowrap">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
