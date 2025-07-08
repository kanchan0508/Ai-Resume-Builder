import { UserButton, useUser } from '@clerk/clerk-react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const { user, isSignedIn } = useUser();
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link to="/" className='flex items-center space-x-2'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center space-x-2'
            >
              <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                ResumeAI
              </span>
            </motion.div>
          </Link>

          <div className='flex items-center space-x-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkTheme ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>

            {isSignedIn ? (
              <div className='flex items-center space-x-3'>
                <Link to="/dashboard">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Dashboard
                  </motion.button>
                </Link>
                <div className='w-8 h-8 rounded-full overflow-hidden ring-2 ring-purple-500/20'>
                  <UserButton />
                </div>
              </div>
            ) : (
              <Link to="/auth/sign-in">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Get Started
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;