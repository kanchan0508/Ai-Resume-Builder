import React from 'react';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '../ui/button';

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <header className='pointer-events-auto bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-5xl w-full transition-all duration-300 hover:shadow-xl hover:bg-white/80 ring-1 ring-black/5'>
          {/* Logo */}
          <Link to={'/'} className='flex items-center gap-2 group cursor-pointer'>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              R
            </div>
            <span className='text-lg font-bold text-slate-800 tracking-tight'>Resume<span className="text-slate-500">.ai</span></span>
          </Link>

          {/* Center Links (Optional, for now just spacer or links if needed) */}
           <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
             <span className="hover:text-black cursor-pointer transition-colors">Features</span>
             <span className="hover:text-black cursor-pointer transition-colors">Templates</span>
             <span className="hover:text-black cursor-pointer transition-colors">Pricing</span>
           </nav>

          {/* Right Side */}
          <div className='flex items-center gap-4'>
            {isSignedIn ? (
              <div className='flex items-center gap-4'>
                <Link to={'/dashboard'}>
                  <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    Dashboard
                  </button>
                </Link>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to={'/auth/sign-in'}>
                    <button className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-black transition-colors rounded-full hover:bg-slate-100/50">
                      Sign in
                    </button>
                </Link>
                <Link to={'/auth/sign-in'}>
                  <button className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-md hover:shadow-lg transform active:scale-95">
                    Get Started
                  </button>
                </Link>
              </div>
            )}
          </div>
        </header>
    </div>
  );
};

export default Header;