import { UserButton, useUser } from '@clerk/clerk-react';
import { useTheme } from '../../context/ThemeContext'; // Import useTheme hook
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';
import { Toggle } from "@/components/ui/toggle"


const Header = () => {
  const { user, isSignedIn } = useUser();
  const { toggleTheme } = useTheme(); // Get toggleTheme function

  return (
    <div className='p-5 flex justify-between shadow-md'>
      <Link to={"/"}>
        <img src='/Logo.png' width={150} className='h-16' />
      </Link>

      <div className='flex items-center '>
      <button onClick={toggleTheme} className="border border-pink-500 text-pink-500 py-3 px-8 mr-4 hover:scale-110 rounded-lg shadow-lg font-medium">
           Theme
          </button>

        {isSignedIn ? (
          <div className='flex gap-3 items-center'>
            <Link to="/dashboard">
            <button className="border border-pink-500 text-pink-500 hover:scale-110 py-3 px-8 rounded-lg shadow-lg font-medium">
            Dashboard
          </button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to="/auth/sign-in">
           <button className="border border-pink-500 text-pink-500 hover:scale-110 py-3 px-8 rounded-lg shadow-lg font-medium">
            Get Started
          </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
