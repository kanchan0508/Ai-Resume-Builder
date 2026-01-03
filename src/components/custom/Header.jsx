import React from 'react';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '../ui/button';

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className='w-full border-b border-gray-200 bg-white'>
      <div className='container mx-auto px-4 md:px-6 h-20 flex items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src='/Logo.png' alt="Logo" className='h-14 w-auto' />
        </Link>

        <div className='flex items-center gap-4'>
          {isSignedIn ? (
            <div className='flex items-center gap-4'>
              <Link to={'/dashboard'}>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium">
                  Dashboard
                </Button>
              </Link>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9"
                  }
                }}
              />
            </div>
          ) : (
            <div className='flex items-center gap-3'>
              <Link to={'/auth/sign-in'}>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium">
                  Sign In
                </Button>
              </Link>
              <Link to={'/auth/sign-in'}>
                <Button className="bg-primary text-white hover:bg-primary/90 font-medium px-6">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;