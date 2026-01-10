import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/70 backdrop-blur-xl border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
           <span className="text-slate-900 font-bold">Resume.ai</span>
           <span>© 2026</span>
        </div>

        {/* Minimal Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        {/* Minimal Socials */}
        <div className="flex gap-4">
          {[Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a key={i} href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
